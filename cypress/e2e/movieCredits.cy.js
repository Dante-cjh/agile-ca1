let movies; // List of movies from TMDB
let movie; //
let crew;

describe("Movie credits craw tests", () => {
    before(() => {
        // Get the movieList from TMDB and store them locally.
        cy.request(
            `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
                "TMDB_KEY"
            )}&language=en-US&include_adult=false&include_video=false&page=1`
        )
            .its("body") // Take the body of HTTP response from TMDB
            .then((response) => {
                movies = response.results;
            });
    });
    beforeEach(() => {
        cy.visit("/");
    });

    describe("The Movie Details page", () => {
        before(() => {
            cy.request(
                `https://api.themoviedb.org/3/movie/${
                    movies[0].id
                }?api_key=${Cypress.env("TMDB_KEY")}&language=en-US`
            )
                .its("body")
                .then((movieDetails) => {
                    movie = movieDetails;
                });
            cy.request(
                `https://api.themoviedb.org/3/movie/${
                    movies[0].id
                }/credits?api_key=${Cypress.env("TMDB_KEY")}&language=en-US`
            )
                .its("body")
                .then((movieCredits) => {
                    crew = movieCredits.crew;
                });
        });
        beforeEach(() => {
            cy.visit(`/movies/${movies[0].id}`);
        });
        it('should navigate to the first actor in the crew list', () => {

            // 获取第一部电影的ID
            cy.get('.MuiCardActionArea-root a').eq(0).invoke('attr', 'href').then((href) => {
                const actorId = href.split('/').pop(); // 假设链接格式为 "/actors/282"
                // 使用自定义命令跳转到电影详情页
                cy.navigateToActor(actorId);

                // 验证是否跳转到了正确的页面
                cy.url().should('include', `/actors/${actorId}`);
            });
        });
    });
});
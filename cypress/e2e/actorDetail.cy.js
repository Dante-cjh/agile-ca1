let actors; // List of actors from TMDB
let actor; //
let cast;

describe("Actor Detail tests", () => {
    before(() => {
        // Get the actorList from TMDB and store them locally.
        cy.request(
            `https://api.themoviedb.org/3/person/popular?api_key=${Cypress.env(
                "TMDB_KEY"
            )}&language=en-US&page=1`
        )
            .its("body") // Take the body of HTTP response from TMDB
            .then((response) => {
                actors = response.results;
            });
    });
    beforeEach(() => {
        cy.visit("/actor");
    });

    describe("The Actor Details page", () => {
        before(() => {
            cy.request(
                `https://api.themoviedb.org/3/person/${
                    actors[1].id
                }?api_key=${Cypress.env("TMDB_KEY")}&language=en-US`
            )
                .its("body")
                .then((actorDetails) => {
                    actor = actorDetails;
                });
            cy.request(
                `https://api.themoviedb.org/3/person/${
                    actors[1].id
                }/movie_credits?api_key=${Cypress.env("TMDB_KEY")}`
            )
                .its("body")
                .then((actorCast) => {
                    cast = actorCast.cast;
                });
        });
        beforeEach(() => {
            cy.visit(`/actors/${actors[1].id}`);
        });
        it(" displays the actor name, birthday and biography", () => {
            cy.get("h2").contains(actor.name);
            cy.get("h2").next('p').contains(actor.birthday);
            cy.get("h6").contains("Biography");
            cy.get("h6").next().contains(actor.biography);
        });
        it('should navigate to the first movie in the cast list', () => {

            // 获取第一部电影的ID
            cy.get('.MuiCardActionArea-root a').eq(0).invoke('attr', 'href').then((href) => {
                const movieId = href.split('/').pop(); // 假设链接格式为 "/movies/352805"
                // 使用自定义命令跳转到电影详情页
                cy.navigateToMovie(movieId);

                // 验证是否跳转到了正确的页面
                cy.url().should('include', `/movies/${movieId}`);
            });

        })
    });
});
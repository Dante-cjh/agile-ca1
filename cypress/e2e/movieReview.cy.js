let movies; // List of movies from TMDB
let movie; // one of the movies
let reviews; // List of movie reviews from TMDB
let review; // one of the reviews

describe("Movie Review tests", () => {
    before(() => {
        // Get the discover movies from TMDB and store them locally.
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

    describe("The Reviews Button in Movie Details page", () => {
        before(() => {
            cy.request(
                `https://api.themoviedb.org/3/movie/${
                    movies[3].id
                }?api_key=${Cypress.env("TMDB_KEY")}`
            )
                .its("body")
                .then((movieDetails) => {
                    movie = movieDetails;
                });
        });
        beforeEach(() => {
            cy.visit(`/movies/${movies[3].id}`);
            cy.get("button").contains("Reviews").click();
            cy.get('table tbody tr').first().find('a').contains('Full Review').click();
        });

        describe("Movie Review Page", () => {
            before(() => {
                cy.request(
                    `https://api.themoviedb.org/3/movie/${
                        movies[3].id
                    }/reviews?api_key=${Cypress.env("TMDB_KEY")}`
                )
                    .its("body")
                    .then((response) => {
                        reviews = response.results;
                        review = reviews[0];
                    });
            });
            beforeEach(() => {
                cy.visit(`/reviews/${review.id}`);
            });
            it("display one of reviews of the movie", () => {
                cy.get("h3").contains(review.author);
                cy.get("h3").contains("Review By: ");
            });
        });
    });
});
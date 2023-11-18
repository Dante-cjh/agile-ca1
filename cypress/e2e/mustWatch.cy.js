let movies;
const movieId = 497582; // Enola Holmes movie id

describe("The upcoming feature", () => {
    before(() => {
        cy.request(
            `https://api.themoviedb.org/3/movie/upcoming?api_key=${Cypress.env(
                "TMDB_KEY"
            )}&language=en-US&page=1`
        )
            .its("body")
            .then((response) => {
                movies = response.results;
            });
    });
    beforeEach(() => {
        cy.visit("/movies/upcoming");
    });

    describe("Selecting To Watch", () => {
        it("selected movie card shows the red icon", () => {
            cy.get(".MuiCardHeader-root").eq(1).find("svg").should("not.exist");
            cy.get("button[aria-label='add to watch']").eq(1).click();
            cy.get(".MuiCardHeader-root").eq(1).find("svg");
        });
    });

    describe("The Must Watch page", () => {
        beforeEach(() => {
            // Select two favourites and navigate to Favourites page
            cy.get("button[aria-label='add to watch']").eq(1).click();
            cy.get("button[aria-label='add to watch']").eq(3).click();
            cy.get("button").contains("Must Watch").click();
        });
        it("only the tagged to watch movies are listed", () => {
            cy.get(".MuiCardHeader-content").should("have.length", 2);
            cy.get(".MuiCardHeader-content")
                .eq(0)
                .find("p")
                .contains(movies[1].title);
            cy.get(".MuiCardHeader-content")
                .eq(1)
                .find("p")
                .contains(movies[3].title);
        });
        it("removes to watch movies", () => {
            cy.get("button[aria-label='remove from To Watch']").eq(0).click();
            cy.get("button[aria-label='remove from To Watch']").eq(0).click();
            cy.get(".MuiCardHeader-content").should("have.length", 0);
        });
    });
});
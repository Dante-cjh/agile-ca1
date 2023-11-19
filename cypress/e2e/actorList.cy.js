let actors; // List of actors from TMDB

describe("Actor List Page tests", () => {
    before(() => {
        // Get the discover actors from TMDB and store them locally.
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

    describe("The Actor List page", () => {
        it("displays the page header and 20 actors", () => {
            cy.get("h3").contains("Popular ");
            cy.get(".MuiCardHeader-root").should("have.length", 20);
        });

        it("displays the correct actor name", () => {
            cy.get(".MuiCardHeader-content").each(($card, index) => {
                cy.wrap($card).find("p").contains(actors[index].name);
            });
        });
    });
})
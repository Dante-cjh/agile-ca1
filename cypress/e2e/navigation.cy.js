let actors;

describe("Navigation", () => {
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
    describe("From the actors page to a actor's details", () => {
        it("navigates to the actor details page and change browser URL", () => {
            cy.get("a img").eq(0).click();
            cy.url().should("include", `/actors/${actors[0].id}`);
        });
    });
    describe("Using the site header", () => {
        describe("when the viewport is desktop scale", () => {
            it("navigate via the button links", () => {
                cy.get("button").contains("Upcoming").click();
                cy.url().should("include", `/upcoming`);
                cy.get("button").contains("Trending").click();
                cy.url().should("include", `/trending`);
                cy.get("button").contains("Must Watch").click();
                cy.url().should("include", `/toWatch`);
                cy.get("button").contains("Actors").click();
                cy.url().should("include", `/actor`);
                cy.get("button").contains("Chase Star").click();
                cy.url().should("include", `/actor/favorites`);
            });
        });
        describe(
            "when the viewport is mobile scale",
            {
                viewportHeight: 896,
                viewportWidth: 414,
            },
            () => {
                it("navigate via the dropdown menu", () => {
                    cy.get("header").find("button").click();
                    cy.get("li").contains('Upcoming').click();
                    cy.url().should("include", `/upcoming`);
                    cy.get("li").contains('Trending').click();
                    cy.url().should("include", `/trending`);
                    cy.get("li").contains('Must Watch').click();
                    cy.url().should("include", `/toWatch`);
                    cy.get("li").contains('Actors').click();
                    cy.url().should("include", `/actor`);
                    cy.get("li").contains('Chase Star').click();
                    cy.url().should("include", `/actor/favorites`);
                });
            }
        );
    });
    describe("The forward/backward links", () => {
        beforeEach(() => {
            cy.get("a img").eq(0).click();
        });
        it("navigates between the actor detail page and the actors page.", () => {
            cy.get("svg[data-testid='ArrowBackIcon'").click();
            cy.url().should("not.include", `/actors/${actors[0].id}`);
            cy.get("svg[data-testid='ArrowForwardIcon'").click();
            cy.url().should("include", `/actors/${actors[0].id}`);
        });
    });
});
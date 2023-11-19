let actors;

describe("The favourite actor feature", () => {
    before(() => {
        cy.request(
            `https://api.themoviedb.org/3/person/popular?api_key=${Cypress.env(
                "TMDB_KEY"
            )}&language=en-US&include_adult=false&include_video=false&page=1`
        )
            .its("body")
            .then((response) => {
                actors = response.results;
            });
    });
    beforeEach(() => {
        cy.visit("/actor");
    });

    describe("Selecting actors to star", () => {
        it("selected actor card shows the red heart", () => {
            cy.get(".MuiCardHeader-root").eq(1).find("svg").should("not.exist");
            cy.get("button[aria-label='add to star']").eq(1).click();
            cy.get(".MuiCardHeader-root").eq(1).find("svg");
        });
    });

    describe("The chase star page", () => {
        beforeEach(() => {
            // Select two favourites and navigate to Favourites page
            cy.get("button[aria-label='add to star']").eq(1).click();
            cy.get("button[aria-label='add to star']").eq(3).click();
            cy.get("button").contains("Chase Star").click();
        });
        it("only the tagged actors are listed", () => {
            cy.get(".MuiCardHeader-content").should("have.length", 2);
            cy.get(".MuiCardHeader-content")
                .eq(0)
                .find("p")
                .contains(actors[1].name);
            cy.get(".MuiCardHeader-content")
                .eq(1)
                .find("p")
                .contains(actors[3].name);
        });
        it("removes deleted actors", () => {
            cy.get("button[aria-label='remove from stars']").eq(0).click();
            cy.get("button[aria-label='remove from stars']").eq(0).click();
            cy.get(".MuiCardHeader-content").should("have.length", 0);
        });
    });
});
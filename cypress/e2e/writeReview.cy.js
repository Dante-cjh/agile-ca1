let movies; // List of movies from TMDB

describe("Write movie review feature", () => {
    before(() => {
        cy.request(
            `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
                "TMDB_KEY"
            )}&language=en-US&include_adult=false&include_video=false&page=1`
        )
            .its("body")
            .then((response) => {
                movies = response.results;
            });
    });
    beforeEach(() => {
        cy.visit("/");
    });

    describe("The favourites page", () => {
        beforeEach(() => {
            cy.get("button[aria-label='add to favorites']").eq(1).click();
            cy.get("button[aria-label='add to favorites']").eq(3).click();
            cy.get("button").contains("Favorites").click();
            cy.get("button[aria-label='remove from favorites']").next("a[href='/reviews/form']").eq(0).click();
        });

        describe("Pass test", () => {
            it('allows user to input and reset a review', () => {
                cy.get('#author').type('Tester Jiahan');
                cy.get('#review').type('Jiahan is very handsome');
                cy.get('li').eq(0).click(); // Selective scoring
                cy.get('button[type="reset"]').click();
                cy.get('input[name="author"]').should('have.value', '');
                cy.get('textarea[name="review"]').should('have.value', '');
                cy.get('#select-rating').contains('Average');
            });

            it('allows user to submit a review', () => {
                cy.get('#author').type('Tester Jiahan Chen');
                cy.get('#review').type('Jiahan is very handsome');
                cy.get('li').eq(0).click(); // 选择评分
                cy.get('button[type="submit"]').click();
                cy.contains('Jiahan is very handsome');
            });
        });

        describe("Error/Exception test", () => {
            it('None input and submit', () => {
                cy.get('button[type="submit"]').click();
                cy.get('.MuiTypography-h6').eq(1).contains("Name is required");
                cy.get('.MuiTypography-h6').eq(2).contains("Review cannot be empty.");
            });
            it('Input name and not input review text', () => {
                cy.get('#author').type('Tester Jiahan Chen');
                cy.get('button[type="submit"]').click();
                cy.get('.MuiTypography-h6').eq(1).contains("Review cannot be empty.");
            });
            it('Input name and input review text with little words', () => {
                cy.get('#author').type('Tester Jiahan Chen');
                cy.get('#review').type('Jiahan');
                cy.get('button[type="submit"]').click();
                cy.get('.MuiTypography-h6').eq(1).contains("Review is too short");
            });
        });
    });
});
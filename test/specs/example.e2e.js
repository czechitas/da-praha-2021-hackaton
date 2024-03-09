describe('Page', () => {
    beforeEach(() => {
        // Before each test, reload the browser session to start from a clean state
        browser.reloadSession();
    });

    it('should open the home page successfully', () => {
        // Navigate to the home page
        navigateToHomePage();
        // Verify if the page title matches the expected title
        expect(browser).toHaveTitle('Your Page Title');
    });

    it('should display the main heading on the home page', () => {
        // Navigate to the home page
        navigateToHomePage();
        // Select the main heading element on the page
        const mainHeading = $('h1');
        // Check if the main heading is visible and contains the expected text
        expect(mainHeading).toBeDisplayed();
        expect(mainHeading).toHaveTextContaining('Welcome to Your Page');
    });

    // Function to navigate to the home page
    function navigateToHomePage() {
        // Navigate to the home page
        browser.url('/');
        // Wait until the page title is correctly loaded
        browser.waitUntil(() => browser.getTitle() === 'Your Page Title', {
            timeout: 5000,
            timeoutMsg: 'Page title not found after 5 seconds'
        });
    }
});

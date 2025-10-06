describe('Wikipedia App Test', () => {
  it('should search for BrowserStack in Wikipedia', async () => {
    // Locate the search input (replace locator if needed)
    const searchBar = await $('~Search Wikipedia'); 
    await searchBar.waitForDisplayed({ timeout: 10000 });

    // Tap on the search bar
    await searchBar.click();

    // Enter "BrowserStack" in the search input
    const searchInput = await $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")');
    await searchInput.waitForDisplayed({ timeout: 5000 });
    await searchInput.setValue('BrowserStack');

    // Wait for search results
    const firstResult = await $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/page_list_item_title")');
    await firstResult.waitForDisplayed({ timeout: 10000 });

    // Log first search result text
    const text = await firstResult.getText();
    console.log("First search result:", text);
  });
});

export async function getYouTube(browser, data) {
  const page = await browser.newPage();
  await page.goto(`${data.youTubeChannel}/videos`);
  const videoPage = await page.waitForSelector("#primary");

  async function getLink() {
    const link = await videoPage.evaluate(() => {
      return document.querySelector("#primary a").href;
    });
    return link;
  }

  async function getTitle() {
    const title = await videoPage.evaluate(() => {
      return document
        .querySelector("#primary #contents #content #video-title")
        .textContent.toString();
    });

    return title;
  }

  async function getThumbnail() {
    const title = await videoPage.evaluate(() => {
      return document
        .querySelector("#primary #contents #content #thumbnail img")
        .src;
    });

    return title;
  }

  const link = await getLink()


  return {
    link
  };
}

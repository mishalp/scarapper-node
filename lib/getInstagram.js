export async function getInsta(browser, data) {
  const page = await browser.newPage();
  await page.goto(`https://instagram.com/${data.instagram}`);

  await page.waitForSelector("article.x1iyjqo2")

  const insta = await page.evaluate(()=>{
      return document.querySelector("article.x1iyjqo2 a").href
  })

  return insta
}

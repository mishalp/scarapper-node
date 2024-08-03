export async function getFacebook(browser, data) {
  const page = await browser.newPage();
  await page.goto(`${data.facebook}`);

  const el = await page.waitForSelector("div[aria-label='Close']");
  const cla = await el.evaluate((e) => e.classList);
  console.log(cla);
  await el.click();

  const vd = await page.waitForSelector("a[aria-label='Enlarge']");

//   const nodes = await page.evaluate(() => {
//     return Array.from(document.querySelectorAll("a[aria-label='Enlarge']")).map(
//       (i) => i.href.split("/").slice(0, 6).join("/")
//     );
//   });

//   console.log(nodes);

  const l = await vd.evaluate((v)=> v.href.split("/"))

  return l?.slice(0,6)?.join("/");
}

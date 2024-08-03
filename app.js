import puppeteer from 'puppeteer';

async function launch(){
    try {
            // Launch the browser and open a new blank page
const browser = await puppeteer.launch();
const page = await browser.newPage();

let ytType = 'video'

if(ytType === 'video'){
    await page.goto('https://www.youtube.com/@UnmaskingAnomalies/videos')
    const videoPage = await page.waitForSelector("#primary")
    const a = await videoPage.evaluate(()=>{
        return document.querySelector("#primary a").href
    })

    console.log(a)
}

// const link = ytType === 'video'? 'https://www.youtube.com/@UnmaskingAnomalies/videos': 'https://www.youtube.com/@UnmaskingAnomalies/shorts'

// // Navigate the page to a URL.
// await page.goto(link);


// const fullTitle = await page.evaluate(()=> {
//     return document.querySelector("meta[name='title']").content
// })
// const description = await page.evaluate(()=> {
//     return document.querySelector("meta[name='description']").content
// })

// await page.goto("https://instagram.com/unmasking_anomalies")

// await page.waitForSelector("article.x1iyjqo2")

// const insta = await page.evaluate(()=>{
//     return document.querySelector("article.x1iyjqo2 a").href
// })

// await page.goto("https://www.facebook.com/SpeakersCornerMalayalam")

// const el = await page.waitForSelector("div[aria-label='Close']")
// const cla = await el.evaluate((e)=>e.classList)
// console.log(cla)
// await el.click()

// const vd = await page.waitForSelector("a[aria-label='Enlarge']")

// const nodes = await page.evaluate(()=>{
//     return Array.from(document.querySelectorAll("a[aria-label='Enlarge']")).map(i=>i.href.split("/").slice(0,6).join("/"))
// })


// console.log(nodes)

// const l = await vd.evaluate((v)=> v.href.split("/"))

// console.log(l.slice(0,6).join("/"))

// await new Promise((rs, rj)=>setTimeout(()=> rs(), 1000))




// const fb = await page.evaluate(()=>{
//     return Array.from(document.querySelectorAll("a"))
// })

// console.log(fb)

// Print the full title.
// console.log('Title', fullTitle);
// console.log('Description', description);

await browser.close();
console.log("browser closed")
    } catch (error) {
        console.log(error);
    }
} 

launch()
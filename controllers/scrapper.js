import joi from "joi";
import puppeteer from "puppeteer";
import { getYouTube } from "../lib/getYoutube.js";
import { getInsta } from "../lib/getInstagram.js";
import { getFacebook } from "../lib/getFacebook.js";

const schema = joi.object({
  youTubeChannel: joi.string().required(),
  instagram: joi.string().required(),
  facebook: joi.string().required(),
  // description: joi.string().required(),
  // features: joi.array().items(joi.string()).min(3).required(),
  // images: joi.array().items(joi.string()).min(1).required(),
  // originalPrice: joi.number(),
  // price: joi.number().required(),
  // stock: joi.number().required(),
  // category: joi.string().required()
});

export async function scrapper(req, res, next) {
  try {
    const data = await schema.validateAsync(req.body);
    const browser = await puppeteer.launch({
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--single-process",
        "--no-zygote"
      ],
      executablePath: process.env.NODE_ENV === "production"
      ? process.env.PUPPETEER_EXECUTABEL_PATH
      : puppeteer.executablePath()
    });

    const [youTube, insta, facebook] = await Promise.allSettled([
      getYouTube(browser, data),
      getInsta(browser, data),
      getFacebook(browser, data)
    ])

    res.json({youTube: youTube.value, insta: insta.value, facebook: facebook.value});
  } catch (error) {
    next(error);
  }
}

import axios from "axios";
const cheerio = require("cheerio");

export default async function zeroviewed(req, res) {
  const r = await axios.get("https://petittube.com/");
  const $ = cheerio.load(r.data);
  let yturl = $("iframe").attr("src");
  let id = new URL(yturl).pathname.split("/")[2];
  res.send({ id: id });
}

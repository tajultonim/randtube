import axios from "axios";

export default async function video(req, res) {
  function word(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  let searchreq = await axios.get(
    `https://www.googleapis.com/youtube/v3/search?key=${
      process.env.API_KEY
    }&type=video&part=id&q=${word(5)}&maxResults=1&videoDuration=short`
  );
  res.send({ id: searchreq.data.items[0].id.videoId });
}

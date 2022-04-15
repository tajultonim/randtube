import axios from "axios";
const cheerio = require("cheerio");
import { useEffect } from "react";
import Head from "next/head";
export async function getServerSideProps(ctx) {
  try {
    let id;
    if (ctx.query.zero) {
      const r = await axios.get("https://petittube.com/");
      const $ = cheerio.load(r.data);
      let yturl = $("iframe").attr("src");
      id = new URL(yturl).pathname.split("/")[2];
    } else {
      function word(length) {
        var result = "";
        var characters =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
          result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
          );
        }
        return result;
      }
      let searchreq = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?key=${
          process.env.API_KEY
        }&type=video&part=id&q=${word(5)}&maxResults=1&videoDuration=short`
      );
      id = searchreq.data.items[0].id.videoId;
    }
    return {
      props: {
        id,
      },
    };
  } catch {
    return {
      props: {},
    };
  }
}

export default function Home({ id }) {
  useEffect(() => {
    if (!id) {
      window.location.reload();
    }
  }, []);
  return (
    <>
      <Head>
        <title>RandTube</title>
        <meta
          name="description"
          content="It will show you random and zero viewed youtube video"
        />
        <meta
          name="keywords"
          content="Random,Youtube,Video,Zero,No,Unseen,Unwatched"
        />
      </Head>
      <div className="header">
        <div className="title">
          <span className="red">Rand</span>
          <span className="white">Tube</span>
        </div>
      </div>
      <div className="main">
        <div className="video-wraper">
          <iframe
            id="ytplayer"
            type="text/html"
            width="100%"
            height="360"
            src={`https://www.youtube.com/embed/${id}?autoplay=1`}
          ></iframe>
        </div>
        <div className="button-wraper">
          <button
            className="next-video"
            onClick={() => {
              window.location.href = "/";
            }}
          >
            Random
          </button>
          <button
            className="zero-viewed"
            onClick={() => {
              window.location.href = "?zero=1";
            }}
          >
            Zero Viewed
          </button>
        </div>
      </div>
      <div className="footer">
        <a className="white" href="https://github.com/tajultonim/randtube">
          source code
        </a>
      </div>
    </>
  );
}

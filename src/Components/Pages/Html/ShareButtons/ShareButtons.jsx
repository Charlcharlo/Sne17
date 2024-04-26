import "./ShareButtons.css";
import {
  FacebookShareButton,
  WhatsappShareButton,
  RedditShareButton,
  TumblrShareButton,
  TwitterShareButton,
  FacebookIcon,
  TumblrIcon,
  WhatsappIcon,
  RedditIcon,
  XIcon,
} from "react-share";

export default function ShareButtons() {
  const MAIN_URL = "Sne17.com";
  return (
    <section className="centered-container share">
      <h1 className="title-smaller">Share the 17 Symbols</h1>
      <div className="row-center-flex share-buttons">
        <FacebookShareButton url={MAIN_URL}>
          <FacebookIcon />
        </FacebookShareButton>
        <WhatsappShareButton url={MAIN_URL}>
          <WhatsappIcon />
        </WhatsappShareButton>
        <RedditShareButton url={MAIN_URL}>
          <RedditIcon />
        </RedditShareButton>
        <TumblrShareButton url={MAIN_URL}>
          <TumblrIcon />
        </TumblrShareButton>
        <TwitterShareButton url={MAIN_URL}>
          <XIcon />
        </TwitterShareButton>
      </div>
    </section>
  );
}

// import { useMemo } from "react";
import { isIOS } from "react-device-detect";
import ComicPage from "../ComicPage/ComicPage";
import ComicPageSafari from "../ComicPage/ComicPageSafari";
import SplashPage from "../SplashPage/SplashPage";
import "./PageWrapper.css";

export default function PageWrapper({ source, id, firstPageRef, info, index }) {
  return (
    <section
      className="page-wrapper centered-container"
      ref={firstPageRef}
      id={id}
    >
      {info.type === "comic" && !isIOS && (
        <ComicPage source={source} info={info} index={index} />
      )}
      {info.type === "comic" && isIOS && (
        <ComicPageSafari source={source} info={info} index={index} />
      )}
      {info.type === "splash" && (
        <SplashPage src={info.src} orientation={info.orientation} />
      )}
    </section>
  );
}

PageWrapper.propTypes;

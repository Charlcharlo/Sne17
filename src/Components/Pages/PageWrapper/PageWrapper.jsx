import { useMemo } from "react";
import { browserName, browserVersion } from "react-device-detect";
import ComicPage from "../ComicPage/ComicPage";
import ComicPageSafari from "../ComicPage/ComicPageSafari";
import SplashPage from "../SplashPage/SplashPage";
import "./PageWrapper.css";

export default function PageWrapper({ source, id, firstPageRef, info, index }) {
  const isOldSafari = useMemo(() => {
    return (
      (browserName === "Safari" || browserName === "Mobile Safari") &&
      parseInt(browserVersion) < 16
    );
  }, []);
  return (
    <section
      className="page-wrapper centered-container"
      ref={firstPageRef}
      id={id}
    >
      {info.type === "comic" && !isOldSafari && (
        <ComicPage source={source} info={info} index={index} />
      )}
      {info.type === "comic" && isOldSafari && (
        <ComicPageSafari source={source} info={info} index={index} />
      )}
      {info.type === "splash" && <SplashPage src={info.src} />}
    </section>
  );
}

PageWrapper.propTypes;

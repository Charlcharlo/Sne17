// import { useMemo } from "react";
import { isIOS } from "react-device-detect";
import { useFlex } from "../../Context/FlexContext";
import ComicPage from "../ComicPage/ComicPage";
import ComicPageSafari from "../ComicPage/ComicPageSafari";
import SplashPage from "../SplashPage/SplashPage";
import "./PageWrapper.css";

export default function PageWrapper({ id, firstPageRef, info, index }) {
  const flex = useFlex();
  const src = !flex
    ? `${window.location.origin}/Sne17/final-pages-eng/full/${info.src}`
    : `${window.location.origin}/Sne17/final-pages-eng/full-mobi/${info.src}`;

  return (
    <section
      className="page-wrapper centered-container"
      ref={firstPageRef}
      id={id}
    >
      {info.type === "comic" && isIOS && (
        <ComicPage src={src} info={info} index={index} />
      )}
      {info.type === "comic" && !isIOS && (
        <ComicPageSafari src={src} info={info} index={index} />
      )}
      {info.type === "splash" && (
        <SplashPage src={src} orientation={info.orientation} />
      )}
    </section>
  );
}

PageWrapper.propTypes;

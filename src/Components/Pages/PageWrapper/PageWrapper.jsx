import { kebabCase } from "lodash";
import { isIOS } from "react-device-detect";
import { useFlex } from "../../Context/FlexContext";
import { useLang } from "../../Context/LanguageContext";
import ComicPage from "../ComicPage/ComicPage";
import ComicPageSafari from "../ComicPage/ComicPageSafari";
import HtmlContainer from "../Html/HtmlContainer";
import SplashPage from "../SplashPage/SplashPage";
import "./PageWrapper.css";

export default function PageWrapper({ id, firstPageRef, info, index }) {
  const flex = useFlex();
  const lang = useLang();
  const srcDynamic = flex
    ? `${window.location.origin}/Sne17/final-pages-${lang}/full-mobi/${info.src}`
    : `${window.location.origin}/Sne17/final-pages-${lang}/full/${info.src}`;
  const srcFixed = `${window.location.origin}/Sne17/final-pages-${lang}/full/${info.src}`;
  return (
    <section
      className="page-wrapper centered-container"
      ref={firstPageRef}
      id={id}
    >
      {info.type === "comic" && !isIOS && (
        <ComicPage src={srcDynamic} info={info} index={index} />
      )}
      {info.type === "comic" && isIOS && (
        // Turns out all browsers on an iphone use safari
        <ComicPageSafari src={srcDynamic} info={info} index={index} />
      )}
      {info.type === "splash" && (
        <SplashPage src={srcFixed} orientation={info.orientation} />
      )}
      {info.type === "html" && <HtmlContainer name={kebabCase(info.title)} />}
    </section>
  );
}

PageWrapper.propTypes;

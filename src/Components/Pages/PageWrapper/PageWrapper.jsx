import ComicPage from "../ComicPage/ComicPage";
import SplashPage from "../SplashPage/SplashPage";
import "./PageWrapper.css";

export default function PageWrapper({ source, id, firstPageRef, info }) {
  return (
    <section
      className="page-wrapper centered-container"
      ref={firstPageRef}
      id={id}
    >
      {info.type === "comic" && <ComicPage source={source} info={info} />}
      {info.type === "splash" && <SplashPage src={info.src} />}
    </section>
  );
}

PageWrapper.propTypes;

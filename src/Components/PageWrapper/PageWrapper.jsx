import ComicPage from "../ComicPage/ComicPage";
import "./PageWrapper.css";

export default function PageWrapper({ source, id, firstPageRef, info }) {
  return (
    <section
      className="page-wrapper centered-container"
      ref={firstPageRef}
      id={id}
    >
      {info.type === "comic" && <ComicPage source={source} info={info} />}
    </section>
  );
}

PageWrapper.propTypes;

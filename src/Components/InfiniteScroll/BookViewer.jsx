import PageWrapper from "./PageWrapper/PageWrapper";

export default function BookViewer({ pages }) {
  function renderPages(page, i) {
    return <PageWrapper source={page} key={i} id={`page-${i}`} />;
  }

  return <>{pages.map(renderPages)}</>;
}

BookViewer.propTypes;

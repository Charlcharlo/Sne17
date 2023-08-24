import PageWrapper from "../PageWrapper/PageWrapper";

export default function BookViewer({ pages }) {
  function renderPages(page, i) {
    return <PageWrapper id={`page-${i}`} info={page} key={i} index={i} />;
  }

  return <>{pages.map(renderPages)}</>;
}

BookViewer.propTypes;

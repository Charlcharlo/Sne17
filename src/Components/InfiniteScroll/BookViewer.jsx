import PageWrapper from "../PageWrapper/PageWrapper";

export default function BookViewer({ pages, firstPageRef }) {
  function renderPages(page, i) {
    return i === 0 ? (
      <PageWrapper source={page} key={i} firstPageRef={firstPageRef} />
    ) : (
      <PageWrapper source={page} key={i} />
    );
  }

  return <>{pages.map(renderPages)}</>;
}

BookViewer.propTypes;

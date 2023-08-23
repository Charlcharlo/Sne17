import PageWrapper from "../PageWrapper/PageWrapper";

export default function BookViewer({ pages, firstPageRef }) {
  function renderPages(page, i) {
    return i === 0 ? (
      <PageWrapper
        id={`page-${i}`}
        // source={page}
        info={page}
        key={i}
        firstPageRef={firstPageRef}
      />
    ) : (
      <PageWrapper
        id={`page-${i}`}
        // source={page}
        info={page}
        key={i}
        index={i}
      />
    );
  }

  return <>{pages.map(renderPages)}</>;
}

BookViewer.propTypes;

import { useOffset } from "../Context/OffsetContext";
import PageWrapper from "../PageWrapper/PageWrapper";

export default function BookViewer({ pages, firstPageRef }) {
  const offset = useOffset();
  function renderPages(page, i) {
    return i === 0 ? (
      <PageWrapper
        id={`page-${i + offset + 1}`}
        source={page}
        key={i}
        firstPageRef={firstPageRef}
      />
    ) : (
      <PageWrapper id={`page-${i + 1}`} source={page} key={i} />
    );
  }

  return <>{pages.map(renderPages)}</>;
}

BookViewer.propTypes;

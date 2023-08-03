import "./PageWrapper.css";

export default function PageWrapper({ source, id, firstPageRef }) {
  return (
    <section
      className="page-wrapper centered-container"
      ref={firstPageRef}
      id={id}
    >
      <img src={source} />
    </section>
  );
}

PageWrapper.propTypes;

import "./PageWrapper.css";

export default function PageWrapper({ source, id }) {
  return (
    <section className="page-wrapper centered-container" id={id}>
      <img src={source} />
    </section>
  );
}

PageWrapper.propTypes;

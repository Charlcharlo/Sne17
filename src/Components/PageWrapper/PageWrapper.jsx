import { useFlex } from "../Context/FlexContext";
import MultiPanel from "../MultiPanel/MultiPanel";
import "./PageWrapper.css";

export default function PageWrapper({ source, id, firstPageRef }) {
  const flex = useFlex();
  return (
    <section
      className="page-wrapper centered-container"
      ref={firstPageRef}
      id={id}
    >
      {flex ? (
        <MultiPanel source={source} />
      ) : (
        <img className="page-img" src={source} />
      )}
    </section>
  );
}

PageWrapper.propTypes;

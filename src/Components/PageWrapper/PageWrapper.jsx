import { useFlex } from "../Context/FlexContext";
import FlexOptions from "../FlexOptions/FlexOptions";
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
        <FlexOptions source={source} />
      ) : (
        <img className="page-img" src={source} />
      )}
    </section>
  );
}

PageWrapper.propTypes;

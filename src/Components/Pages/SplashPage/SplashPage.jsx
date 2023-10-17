import ZoomWindow from "../ZoomWindow/ZoomWindow";
import { useFlex } from "../../Context/FlexContext";
import "./SplashPage.css";

export default function SplashPage({ src, orientation }) {
  const flex = useFlex();
  return (
    <>
      {flex ? (
        <ZoomWindow source={src} orientation={orientation} />
      ) : (
        <img className={`splash-page ${orientation}`} src={src} />
      )}
    </>
  );
}

SplashPage.propTypes;

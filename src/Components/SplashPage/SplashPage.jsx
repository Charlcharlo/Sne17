import ZoomWindow from "../ZoomWindow/ZoomWindow";
import { useFlex } from "../Context/FlexContext";
import "./SplashPage.css";

export default function SplashPage({ src }) {
  const flex = useFlex();
  return (
    <>
      {flex ? (
        <ZoomWindow source={src} />
      ) : (
        <img className="splash-page" src={src} />
      )}
    </>
  );
}

SplashPage.propTypes;

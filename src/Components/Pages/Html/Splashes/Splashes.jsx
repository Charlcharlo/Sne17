import { useFlex } from "../../../Context/FlexContext";

export default function Splashes() {
  const flex = useFlex();
  return (
    <>
      <img
        className="splash-top"
        src={`${window.location.origin}/Sne17/characters/${
          flex ? "splash-top-mobi" : "splash-top"
        }.png`}
        alt=""
      />
      <img
        className="splash-bottom"
        src={`${window.location.origin}/Sne17/characters/${
          flex ? "splash-bottom-mobi" : "splash-bottom"
        }.png`}
        alt=""
      />
    </>
  );
}

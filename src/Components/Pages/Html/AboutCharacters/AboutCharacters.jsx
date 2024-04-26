import { useLang } from "../../../Context/LanguageContext";
import Splashes from "../Splashes/Splashes";
import "./AboutCharacters.css";
import CharCard from "./CharCard";
import { eng, zl } from "./text";

export default function AboutCharacters() {
  const lang = useLang();
  const { whoSne, whoKeeper, whatTerra } = lang === "eng" ? eng : zl;

  function mapKeepers(keeper) {
    return (
      <CharCard
        name={keeper.name}
        text={keeper.text}
        img={keeper.image}
        className={keeper.class}
        rev={keeper.rev}
      />
    );
  }
  return (
    <div className="full-page char">
      <Splashes />
      <div className="col-center">
        <h2 className="title-smaller">{whoSne.title}</h2>
        <CharCard
          name={whoSne.name}
          className="sne"
          text={whoSne.text}
          img="sne.jpg"
        />
        <h2 className="title-smaller">{whoKeeper.title}</h2>
        <div className="keepers">{whoKeeper.keepers.map(mapKeepers)}</div>
        <h2 className="title-smaller">{whatTerra.title}</h2>
        <div className="keepers terra-wrapper">
          {whatTerra.cards.map(mapKeepers)}
        </div>
      </div>
    </div>
  );
}

export default function CharCard({ img, text, name, className, rev }) {
  return (
    <div className={`row-center char-strip ${className}`}>
      <div className={`char-card`}>
        <img
          className={`char-img ${rev && "reverse"}`}
          src={`${window.location.origin}/Sne17/characters/${img}`}
          alt=""
        />
        <p className="body-text">
          <span className="char-name">{name}</span>
          {text}
        </p>
      </div>
    </div>
  );
}

CharCard.propTypes;

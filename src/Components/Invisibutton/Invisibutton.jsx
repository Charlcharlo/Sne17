import "./Invisibutton.css";

export default function Invisibutton({ children, onClick, buttonRef }) {
  return (
    <div className="invisibutton-wrapper">
      {children}
      <button className="invisibutton-main" onClick={onClick} ref={buttonRef} />
    </div>
  );
}

Invisibutton.propTypes;

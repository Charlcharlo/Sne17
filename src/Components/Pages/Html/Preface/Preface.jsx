import "./Preface.css";

export default function Preface() {
  return (
    <div className="preface full-comic-page centered-container">
      <img
        className="preface-bg"
        src={`${window.location.origin}/Sne17/final-pages-eng/full/preface/bg.jpg`}
      />
      <div className="row-end">
        <div>
          <div className="quote-container">
            <p className="krs-quote">
              &quot;If younger people listen to older people, they move faster
              amongst younger pepple coz you&apos;ve got advanced knowledge, and
              when older people listern to younger people, we move faster in the
              older world, coz we&apos;ve got new knowledge. When we listen to
              each other, we all grow, and that&apos;s called culture.&quot;
            </p>
          </div>
          <div className="quote-container">
            <img
              className="preface-sig"
              src={`${window.location.origin}/Sne17/final-pages-eng/full/preface/krs-sig.png`}
            />
          </div>
        </div>
        <img
          src={`${window.location.origin}/Sne17/final-pages-eng/full/preface/krs1.png`}
          alt=""
          className="face-img"
        />
      </div>
    </div>
  );
}

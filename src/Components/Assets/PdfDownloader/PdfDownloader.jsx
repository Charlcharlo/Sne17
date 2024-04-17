import DownloadH from "../../Assets/Icons/DownloadHand";
import "./PdfDownloader.css";

export default function PdfDownloader() {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("test.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "test.pdf";
        alink.click();
      });
    });
  };
  return (
    <button className="pdf-button row-center" onClick={onButtonClick}>
      <p>DOWNLOAD PDF</p>
      <DownloadH />
    </button>
  );
}

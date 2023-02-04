export default function downloadResume() {
  fetch("/resume.pdf").then((response) => {
    response.blob().then((blob) => {
      const fileURL = window.URL.createObjectURL(blob);
      const pdfWindow = window.open();
      pdfWindow.location.href = fileURL;
    });
  });
}

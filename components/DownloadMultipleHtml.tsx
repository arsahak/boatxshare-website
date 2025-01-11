// "use client";
// import axios from "axios";

// function DownloadMultipleHtml() {
//   const handleDownload = async () => {
//     const url = "https://settlement.gov.bd";

//     try {
//       const response = await axios.get("http://localhost:8000/api/fetch-html", {
//         params: { url },
//         responseType: "blob",
//       });

//       // Create a download link
//       const blob = new Blob([response.data], { type: "text/html" });
//       const link = document.createElement("a");
//       link.href = URL.createObjectURL(blob);
//       link.download = "page.html";

//       // Trigger the download
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//     } catch (error) {
//       console.error("Error downloading HTML:", error);
//     }
//   };

//   return (
//     <div>
//       <button onClick={handleDownload}>Download HTML</button>
//     </div>
//   );
// }

// export default DownloadMultipleHtml;

const DownloadMultipleHtml = () => {
  return <div>DownloadMultipleHtml</div>;
};

export default DownloadMultipleHtml;

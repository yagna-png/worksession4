function simulateDownload(url) {
  return new Promise((resolve, reject) => {
    console.log("Starting download from", url);
    setTimeout(() => {
      if (!url.startsWith("http")) {
        reject("Invalid URL");
      } else {
        resolve(`Downloaded data from ${url}`);
      }
    }, 1500);
  });
}

simulateDownload("http://example.com")
  .then(result => console.log(result))
  .catch(error => console.error("Error:", error));

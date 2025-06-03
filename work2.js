function fetchData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ name: "Yagna", role: "Developer" });
    }, 1000);
  });
}

async function showData() {
  console.log("Fetching data...");
  const data = await fetchData();
  console.log("Data received:", data);
}

showData();

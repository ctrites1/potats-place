async function getJsonData(path) {
  try {
    const res = await fetch(path);
    if (!res.ok) {
      throw new Error(`Failed to load json file: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch {
    console.error("Error reading JSON file", error);
    throw error;
  }
}

const posts = getJsonData("../posts.json");

const contentContainer = document.querySelector(".content");

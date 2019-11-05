import regeneratorRuntime from "regenerator-runtime";

const url = process.env.VUE_APP_API_URL;
const apiKey = process.env.VUE_APP_API_KEY;

export const getWords = async (word) => {
  const searchUrl = url + `/${word}?key=${apiKey}`;
  const response = await fetch(searchUrl);
  const data = await response.json();
  return data[0].meta;
}
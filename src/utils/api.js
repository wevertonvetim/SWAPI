export const fetchInfo = async (url, callbackFnction) => {
  let response = [];
  try {
    const result = await fetch(url);
    response = await result.json();
  } catch (error) {
    console.log(`failed to fetch: ${error}`);
  }
  callbackFnction(response.results);
};

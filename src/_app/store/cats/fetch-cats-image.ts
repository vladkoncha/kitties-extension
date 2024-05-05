const CATS_API_URL = 'https://cataas.com/cat?width=720&height=720';

export const fetchCatImage = async () => {
  const response = await fetch(CATS_API_URL);
  return URL.createObjectURL(await response.blob());
};

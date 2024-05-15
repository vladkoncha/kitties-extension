import { IMAGE_SIZE } from '@/src/shared/constants/image-size';

const CATS_API_URL = `https://cataas.com/cat?width=${IMAGE_SIZE}&height=${IMAGE_SIZE}`;

export const fetchCatImage = async () => {
  const response = await fetch(CATS_API_URL);
  return URL.createObjectURL(await response.blob());
};

export interface CatImageProps {
  alt: string;
  src: string;
  setImage: (src: HTMLImageElement | null) => void;
}

import { makeAutoObservable, runInAction } from 'mobx';

import { fetchCatImage } from './fetch-cats-image';

export class CatsStore {
  private catsUrls: string[] = [];
  private currentCatIndex = 0;

  constructor() {
    makeAutoObservable(this);
    this.#initCats();
  }

  async #initCats() {
    const catsImages: Promise<string>[] = [];
    for (let i = 0; i < 5; i++) {
      catsImages.push(fetchCatImage());
    }
    const catsImagesUrls = await Promise.all(catsImages);

    runInAction(() => {
      this.catsUrls = catsImagesUrls;
    });
  }

  getCatsUrls() {
    return this.catsUrls;
  }

  async #preloadNextCat() {
    const newCatUrl = await fetchCatImage();
    runInAction(() => this.catsUrls.push(newCatUrl));
  }

  getCatIndex() {
    return this.currentCatIndex;
  }

  nextCat() {
    if (this.currentCatIndex >= this.catsUrls.length - 1) {
      return;
    }
    this.currentCatIndex++;
    if (this.currentCatIndex === this.catsUrls.length - 1) {
      this.#preloadNextCat();
    }
  }

  prevCat() {
    if (this.currentCatIndex > 0) {
      this.currentCatIndex--;
    }
  }
}

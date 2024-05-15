import { makeAutoObservable } from 'mobx';

import { Color, TextSize } from './types';

export class EditorStore {
  private text = '';
  private textSize: TextSize = 'M';
  private color: Color = 'white';

  constructor() {
    makeAutoObservable(this);
  }

  setText(text: string) {
    this.text = text;
  }

  getText() {
    return this.text;
  }

  setTextSize(textSize: TextSize) {
    this.textSize = textSize;
  }

  getTextSize() {
    return this.textSize;
  }

  setColor(color: Color) {
    this.color = color;
  }

  getColor() {
    return this.color;
  }
}

import { v4 as uuidv4 } from 'uuid';
import paletteData from '../palettes.json';

const PALETTE = 'palettes';

const setLocalStorageKey = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getLocalStorageKey = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const getPalettes = () => getLocalStorageKey(PALETTE) || [];

export const setPalettes = (palette) => {
  setLocalStorageKey(PALETTE_KEY, palette);
}

export const initPalettesIfEmpty = () => {
  if (!getPalettes().length) setLocalStorageKey(PALETTE, paletteData);
}

export const removePalette = (uuid) => {
  const newPalettes = getPalettes().filter(palette => palette.uuid !== uuid);
  setPalettes(newPalettes);
}

export const addPalette = ({ title, color1, color2, color3, temperature }) => {
  const newPalette =  {
    uuid: uuidv4(),
    title,
    colors: [color1, color2, color3],
    temperature,
  };
  setPalettes([newPalette, ...getPalettes() ]);
}
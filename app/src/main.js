import './style.css';
import palettes from './palettes.json';
import { getElement, getFormData, copyToClipboard, renderPallette, removePaletteFromDOM, MAIN_HTML} from './utils/utils.js';
import { addPalette, getPalettes, removePalette} from './utils/local-storage.js';

const loadMain = () => {
  getElement('#app').innerHTML = MAIN_HTML;
  renderDefaultPalettes();
}

const renderDefaultPalettes = () => {
  palettes.forEach(palette => renderPallette(palette, '#default-pallette'));
  if(getPalettes()){
    getPalettes().forEach((pallette) => renderPallette(pallette, '#new-palettes'))
  }
};

const handleSubmit = (e) => {
  e.preventDefault();

  const formObj = getFormData(e.target)

  console.log(formObj);
  addPalette(formObj);
  renderPallette(formObj, '#new-palettes');
  

  e.target.reset();
}

const handleRemove = (e) => {
  if(e.target.dataset.color) return;
  removePaletteFromDOM(e.target.dataset.uuid);
  removePalette(e.target.dataset.uuid)

}

const main = () => {

  loadMain();
  getElement('#palletPicker').addEventListener('submit', handleSubmit);
  document.querySelector('#palettesDiv').addEventListener('click', copyToClipboard);
  getElement('#new-palettes').addEventListener('click', handleRemove);
}

main();
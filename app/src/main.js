import './style.css';
import palettes from './palettes.json';
import { getElement, getFormData, copyToClipboard, renderPallette, MAIN_HTML} from './utils/utils.js';
import { addPalette } from './utils/local-storage.js';

const loadMain = () => {
  getElement('#app').innerHTML = MAIN_HTML;
  renderDefaultPalettes();
}

const renderDefaultPalettes = () => {
  palettes.forEach(palette => {
    renderPallette(palette);
  });
};

const handleSubmit = (e) => {
  e.preventDefault();

  const formObj = getFormData(e.target)

  console.log(formObj);
  addPalette(formObj);

  e.target.reset();
}

const main = () => {
  loadMain();
  getElement('#palletPicker').addEventListener('submit', handleSubmit);
  // document.getElementById('copyButton').addEventListener('click', copyToClipboard);
}

main();
import './style.css';
import palettes from './palettes.json';
import { getElement, getFormData, copyToClipboard, renderPallette, MAINHTML} from './utils/utils.js';

const loadMain = () => {
  getElement('#app').innerHTML = MAINHTML;
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

  e.target.reset();
}

const main = () => {
  loadMain();
  renderDefaultPalettes();
  getElement('#palletPicker').addEventListener('submit', handleSubmit);
  // document.getElementById('copyButton').addEventListener('click', copyToClipboard);
}

main();
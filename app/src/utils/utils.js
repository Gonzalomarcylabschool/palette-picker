import { v4 as uuidv4 } from 'uuid';
export const getElement = (element) => document.querySelector(element);

export const getFormData = (target) => {
  const { title, color1, color2, color3, temperature } = Object.fromEntries(new FormData(target));
  return {
    uuid: uuidv4(),
    title,
    colors: [color1, color2, color3], 
    temperature,
  }
}
export const copyToClipboard = async (e) => {
  if (e.target.classList.contains('copy')) {
    try {
      await navigator.clipboard.writeText(e.target.dataset.color);
      console.log(`${e.target.dataset.color} copied to clipboard`);
    } catch (error) {
      console.error('Unable to copy color to clipboard', error);
    }
  }
};

export const addStylesToElements = (element, style) => {
    for (const property in style)
        element.style[property] = style[property];
  }

export const addStylesToDOM = (styles) => {
  const styleElement = document.createElement('style');
  styleElement.appendChild(document.createTextNode(styles));

  document.head.appendChild(styleElement);
};

export const renderPallette = (palette, where) => {
  const { title, colors, temperature, uuid } = palette;

  const paletteDiv = document.createElement('div');
  paletteDiv.id = uuid;
  paletteDiv.innerHTML = `
  <h3>${title}</h3>
  <div class="codes flex">
    <ul class="paletteColors">
      <li style="background-color: ${colors[0]}; padding: 1rem; list-style-type: none;">${colors[0]}</li>
      <li style="background-color: ${colors[1]}; padding: 1rem; list-style-type: none;">${colors[1]}</li>
      <li style="background-color: ${colors[2]}; padding: 1rem; list-style-type: none;">${colors[2]}</li>
      </ul>
    <ul class="paletteColors copies">
      <li class="copy" style="color: black; background-color: #eeeeee; padding: 1rem; list-style-type: none;" data-color="${colors[0]}">copy</li>
      <li class="copy" style="color: black; background-color: #eeeeee; padding: 1rem; list-style-type: none;" data-color="${colors[1]}">copy</li>
      <li class="copy" style="color: black; background-color: #eeeeee; padding: 1rem; list-style-type: none;" data-color="${colors[2]}">copy</li>
    </ul>
  </div>
  <p>${temperature}</p>
  <button class="delete-palette" data-uuid="${uuid}">Delete Palette</button>
  `
  getElement(where).appendChild(paletteDiv);
};

export const removePaletteFromDOM = (uuid, where) => {
  getElement('#new-palettes').removeChild(document.getElementById(`${uuid}`));
};

export const MAIN_HTML = `
<header>
        <h1>Palette Picker</h1>
      </header>
      <main id="main" class="flex">
        <form id="palletPicker" class="flex">
          <h2 id="formTitle" aria-labelledby="">Add a Palette</h2>
          <div id="input" class="small-margin"> 
            <label for="title">Palette Title</label>
            <input type="text" name="title" id="title">
          </div>
          <div id="colorInputOne" class="small-margin">
            <label for="color1">Color #1</label>
            <input type="color" name="color1" id="color1" value="#ff0000">
          </div>
          <div id="colorInputTwo" class="small-margin">
            <label for="color2">Color #2</label>
            <input type="color" name="color2" id="color2" value="#00ff00">
          </div>
          <div id="colorInputThree" class="small-margin">
            <label for="color3">Color #3</label>
            <input type="color" name="color3" id="color3" value="#0000ff">
          </div>
          <fieldset>
          <legend>Temperature</legend>
          <input id="warm" type="radio" name="temperature" value="warm" />
          <label for="warm">Warm</label>
          <input id="neutral" type="radio" name="temperature" value="neutral" checked />
          <label for="neutral">Neutral</label>
          <input id="cool" type="radio" name="temperature" value="cool" />
          <label for="cool">Cool</label>
        </fieldset>
          <button id="paletteSubmit" class="small-margin">Create Palette</button>
        </form>
        <br/>
        <div id="palettesDiv">
          <section id="default-pallette" class="flex"></section>
          <section id="new-palettes" class="flex"></section>
        </div>
        
      </main>
`;
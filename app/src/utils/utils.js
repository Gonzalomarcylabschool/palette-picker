export const getElement = (element) => document.querySelector(element);

export const getFormData = (target) => Object.fromEntries(new FormData(target));

export const copyToClipboard = async (e) => {
  try {
      const textToCopy = e.target.getAttribute('data-copy-value');
      await navigator.clipboard.writeText(textToCopy);
  } catch (error) {
      console.error('Unable to copy text to clipboard:', error);
  }
};

// Attach click event to the button
// document.getElementById('copyButton').addEventListener('click', copyToClipboard);

export const addStylesToElements = (element, style) => {
    for (const property in style)
        element.style[property] = style[property];
  }

export const addStylesToDOM = (styles) => {
  const styleElement = document.createElement('style');
  styleElement.appendChild(document.createTextNode(styles));

  document.head.appendChild(styleElement);
};

export const renderPallette = (palette) => {
  const { title, colors, temperature, uuid } = palette;
  const paletteDiv = document.createElement('div');
  const titleHeading = document.createElement('h3');
  const colorsList = document.createElement('ul');
  const temperatureEl = document.createElement('p');
  const deleteButton = document.createElement('button');
  
  paletteDiv.classList.add('pallette', 'flex');
  titleHeading.textContent = title;
  temperatureEl.textContent = temperature;
  temperatureEl.classList.add(temperature, 'temperature');
  deleteButton.textContent = "Delete Palette"
  deleteButton.className = "delete-palette";
  deleteButton.dataset.uuid = uuid;
  colors.forEach(color => {
    const colorItem = document.createElement('li');
    colorItem.textContent = color;
    colorItem.style.backgroundColor = color;
    colorItem.style.padding = '1rem';
    colorItem.style.listStyleType = 'none'
    colorsList.appendChild(colorItem);
  });
  paletteDiv.appendChild(titleHeading);
  paletteDiv.appendChild(colorsList);
  getElement('#default-pallette').appendChild(paletteDiv);
}

export const MAIN_HTML = `
<header>
        <h1>Palette Picker</h1>
      </header>
      <main id="main" class="flex">
        <form id="palletPicker" class="flex">
          <h2 id="formTitle" aria-labelledby="">Add a Palette</h2>
          <div id="input" class="small-margin"> 
            <label for="paletteTitle">Palette Title</label>
            <input type="text" name="paletteTitle" id="paletteTitle">
          </div>
          <div id="colorInputOne" class="small-margin">
            <label for="colorOne">Color #1</label>
            <input type="color" name="colorOne" id="colorOne" value="#ff0000">
          </div>
          <div id="colorInputTwo" class="small-margin">
            <label for="colorTwo">Color #2</label>
            <input type="color" name="colorTwo" id="colorTwo" value="#00ff00">
          </div>
          <div id="colorInputThree" class="small-margin">
            <label for="colorThree">Color #3</label>
            <input type="color" name="colorThree" id="colorThree" value="#0000ff">
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
        <section id="default-pallette" class="flex"></section>
      </main>
`;
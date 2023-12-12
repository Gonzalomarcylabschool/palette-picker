(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const a of l)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(l){const a={};return l.integrity&&(a.integrity=l.integrity),l.referrerPolicy&&(a.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?a.credentials="include":l.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(l){if(l.ep)return;l.ep=!0;const a=n(l);fetch(l.href,a)}})();const g=[{uuid:"5affd4e4-418d-4b62-beeb-1c0f7aaff753",title:"Marcy",colors:["#c92929","#2f5a8b","#327a5f"],temperature:"neutral"},{uuid:"32521ef4-d64c-4906-b06d-f3d0d6b16e0f",title:"Sleek and Modern",colors:["#3A5199","#2F2E33","#D5D6D2"],temperature:"cool"},{uuid:"8b144d62-faa7-4226-87e1-096d7c1bedc7",title:"Winter Reds",colors:["#A10115","#C0B2B5","#600A0A"],temperature:"warm"}];let d;const b=new Uint8Array(16);function f(){if(!d&&(d=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!d))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return d(b)}const r=[];for(let e=0;e<256;++e)r.push((e+256).toString(16).slice(1));function v(e,t=0){return r[e[t+0]]+r[e[t+1]]+r[e[t+2]]+r[e[t+3]]+"-"+r[e[t+4]]+r[e[t+5]]+"-"+r[e[t+6]]+r[e[t+7]]+"-"+r[e[t+8]]+r[e[t+9]]+"-"+r[e[t+10]]+r[e[t+11]]+r[e[t+12]]+r[e[t+13]]+r[e[t+14]]+r[e[t+15]]}const h=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),p={randomUUID:h};function P(e,t,n){if(p.randomUUID&&!t&&!e)return p.randomUUID();e=e||{};const o=e.random||(e.rng||f)();if(o[6]=o[6]&15|64,o[8]=o[8]&63|128,t){n=n||0;for(let l=0;l<16;++l)t[n+l]=o[l];return t}return v(o)}const i=e=>document.querySelector(e),w=e=>{const{title:t,color1:n,color2:o,color3:l,temperature:a}=Object.fromEntries(new FormData(e));return{uuid:P(),title:t,colors:[n,o,l],temperature:a}},D=async e=>{if(e.target.classList.contains("copy"))try{await navigator.clipboard.writeText(e.target.dataset.color),console.log(`${e.target.dataset.color} copied to clipboard`)}catch(t){console.error("Unable to copy color to clipboard",t)}},u=(e,t)=>{const{title:n,colors:o,temperature:l,uuid:a}=e,c=document.createElement("div");c.id=a,c.innerHTML=`
  <h3>${n}</h3>
  <div class="codes flex">
    <ul class="paletteColors">
      <li style="background-color: ${o[0]}; padding: 1rem; list-style-type: none;">${o[0]}</li>
      <li style="background-color: ${o[1]}; padding: 1rem; list-style-type: none;">${o[1]}</li>
      <li style="background-color: ${o[2]}; padding: 1rem; list-style-type: none;">${o[2]}</li>
      </ul>
    <ul class="paletteColors copies">
      <li class="copy" style="color: black; background-color: #eeeeee; padding: 1rem; list-style-type: none;" data-color="${o[0]}">copy</li>
      <li class="copy" style="color: black; background-color: #eeeeee; padding: 1rem; list-style-type: none;" data-color="${o[1]}">copy</li>
      <li class="copy" style="color: black; background-color: #eeeeee; padding: 1rem; list-style-type: none;" data-color="${o[2]}">copy</li>
    </ul>
  </div>
  <p>${l}</p>
  <button class="delete-palette" data-uuid="${a}">Delete Palette</button>
  `,i(t).appendChild(c)},L=(e,t)=>{i("#new-palettes").removeChild(document.getElementById(`${e}`))},S=`
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
`,m="palettes",E=(e,t)=>{localStorage.setItem(e,JSON.stringify(t))},$=e=>{try{return JSON.parse(localStorage.getItem(e))}catch(t){return console.error(t),null}},s=()=>$(m)||[],y=e=>{E(m,e)},x=e=>{const t=s().filter(n=>n.uuid!==e);y(t)},I=({uuid:e,title:t,colors:n,temperature:o})=>{y([{uuid:e,title:t,colors:n,temperature:o},...s()])},T=()=>{i("#app").innerHTML=S,O()},O=()=>{g.forEach(e=>u(e,"#default-pallette")),s()&&s().forEach(e=>u(e,"#new-palettes"))},U=e=>{e.preventDefault();const t=w(e.target);console.log(t),I(t),u(t,"#new-palettes"),e.target.reset()},k=e=>{e.target.dataset.color||(L(e.target.dataset.uuid),x(e.target.dataset.uuid))},C=()=>{T(),i("#palletPicker").addEventListener("submit",U),document.querySelector("#palettesDiv").addEventListener("click",D),i("#new-palettes").addEventListener("click",k)};C();

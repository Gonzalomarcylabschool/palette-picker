(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const p=[{uuid:"5affd4e4-418d-4b62-beeb-1c0f7aaff753",title:"Marcy",colors:["#c92929","#2f5a8b","#327a5f"],temperature:"neutral"},{uuid:"32521ef4-d64c-4906-b06d-f3d0d6b16e0f",title:"Sleek and Modern",colors:["#3A5199","#2F2E33","#D5D6D2"],temperature:"cool"},{uuid:"8b144d62-faa7-4226-87e1-096d7c1bedc7",title:"Winter Reds",colors:["#A10115","#C0B2B5","#600A0A"],temperature:"warm"}],d=l=>document.querySelector(l),f=l=>Object.fromEntries(new FormData(l)),b=l=>{const{title:r,colors:i,temperature:a,uuid:e}=l,t=document.createElement("div"),o=document.createElement("h3"),s=document.createElement("ul"),u=document.createElement("p"),c=document.createElement("button");t.classList.add("pallette","flex"),o.textContent=r,u.textContent=a,u.classList.add(a,"temperature"),c.textContent="Delete Palette",c.className="delete-palette",c.dataset.uuid=e,i.forEach(m=>{const n=document.createElement("li");n.textContent=m,n.style.backgroundColor=m,n.style.padding="1rem",n.style.listStyleType="none",s.appendChild(n)}),t.appendChild(o),t.appendChild(s),d("#default-pallette").appendChild(t)},h=`
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
        <section id="default-pallette" class="flex"></section>
      </main>
`,y=()=>{d("#app").innerHTML=h},g=()=>{p.forEach(l=>{b(l)})},v=l=>{l.preventDefault();const r=f(l.target);console.log(r),l.target.reset()},T=()=>{y(),g(),d("#palletPicker").addEventListener("submit",v)};T();

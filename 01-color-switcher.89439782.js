document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),d=document.body;t.disabled=!0;let a=null;e.addEventListener("click",(()=>{e.disabled=!0,t.disabled=!1,a=setInterval((()=>{const e=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,"0")}`;d.style.backgroundColor=e}),1e3)})),t.addEventListener("click",(()=>{e.disabled=!1,t.disabled=!0,clearInterval(a)}))}));
//# sourceMappingURL=01-color-switcher.89439782.js.map
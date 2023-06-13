document.addEventListener("mousemove",(e=>{Object.assign(document.documentElement,{style:`\n    --move-x: ${-.005*(e.clientX-window.innerWidth/2)}deg;\n    --move-y: ${-.01*(e.clientY-window.innerWidth/2)}deg;\n    `})})),document.addEventListener("DOMContentLoaded",(function(){document.getElementById("#rain-sound").play()}));
//# sourceMappingURL=index.358ff5f9.js.map

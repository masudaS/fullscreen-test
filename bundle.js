(()=>{"use strict";document.getElementById("btn").onclick=()=>{const e=document.getElementById("rect");console.log(typeof e.requestFullscreen),"function"==typeof e.requestFullscreen&&e.requestFullscreen(),console.log(typeof e.webkitRequestFullscreen),"function"==typeof e.webkitRequestFullscreen&&e.webkitRequestFullscreen()}})();
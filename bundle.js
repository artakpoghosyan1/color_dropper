(()=>{"use strict";function e(e,n){var o=new Image,a=document.getElementById("canvasWrapper");function i(){var t,i,c,d,r,l;e.width=a.offsetWidth,e.height=a.offsetHeight,c=o.width/o.height,e.width/e.height<c?i=(t=e.width)/c:t=(i=e.height)*c,r=(d={width:t,height:i}).width,l=d.height,n.clearRect(0,0,e.width,e.height),n.drawImage(o,0,0,r,l)}t(a,!0),o.onload=function(){i(),t(a,!1)},o.src="./05adec8cea7656a6848c.jpg",window.addEventListener("resize",i)}function t(e,t){if(t){var n=document.createElement("p");n.textContent="Loading...",n.id="loader",e.appendChild(n)}else{var o=document.getElementById("loader");e.removeChild(o)}}var n=document.getElementById("picker"),o=document.getElementById("zoomContainer"),a=document.getElementById("colorLabel"),i=document.getElementById("zoomCanvas"),c=i.getContext("2d"),d=document.getElementById("selectedColor");function r(e,t){var r=!1;function l(n){var o,a,i,c,d=e.getBoundingClientRect(),r=n.clientX-d.left,l=n.clientY-d.top;return a=(o=t.getImageData(r,l,1,1).data)[0],i=o[1],c=o[2],"#".concat(a.toString(16).padStart(2,"0")+i.toString(16).padStart(2,"0")+c.toString(16).padStart(2,"0"))}var g=function(t){var n,d=e.getBoundingClientRect(),r=t.clientX-d.left,g=t.clientY-d.top;c.clearRect(0,0,i.width,i.height),c.drawImage(e,r-12.5,g-12.5,25,25,0,0,300,300),function(e){o.style.transform="translate(".concat(e.pageX-50,"px, ").concat(e.pageY-50,"px)"),o.style.display="block"}(t),n=l(t),a.textContent=n,a.style.backgroundColor=n,a.style.color=function(e){return e=e.replace("#",""),(299*parseInt(e.slice(0,2),16)+587*parseInt(e.slice(2,4),16)+114*parseInt(e.slice(4,6),16))/1e3>=128?"black":"white"}(n)},s=function(e){m(),o.style.display="none",d.textContent=l(e)},m=function(){(r=!r)?(e.addEventListener("mousemove",g),e.addEventListener("click",s)):(e.removeEventListener("mousemove",g),e.removeEventListener("click",s),o.style.display="none")};n.addEventListener("click",m)}window.onload=function(){var t=document.getElementById("canvas");if(t){var n=t.getContext("2d");e(t,n),r(t,n)}}})();
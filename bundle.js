(()=>{"use strict";function e(e,t){var n=new Image;function i(){var i,o,c,a,d,l;e.width=window.innerWidth,e.height=window.innerHeight,c=n.width/n.height,e.width/e.height<c?o=(i=e.width)/c:i=(o=e.height)*c,d=(a={width:i,height:o}).width,l=a.height,t.clearRect(0,0,e.width,e.height),t.drawImage(n,0,0,d,l)}n.onload=function(){i()},n.src="/05adec8cea7656a6848c.jpg",window.addEventListener("resize",i)}window.onload=function(){var t=document.getElementById("canvas");if(t){var n=t.getContext("2d");e(t,n),function(e,t){var n=document.getElementById("picker"),i=document.getElementById("zoomContainer"),o=document.getElementById("zoomCanvas"),c=o.getContext("2d"),a=!1,d=function(t){var n=e.getBoundingClientRect(),a=t.clientX-n.left,d=t.clientY-n.top;null==c||c.clearRect(0,0,o.width,o.height),null==c||c.drawImage(e,a-12.5,d-12.5,25,25,0,0,300,300),i.style.left="".concat(t.pageX-50,"px"),i.style.top="".concat(t.pageY-50,"px"),i.style.display="block"},l=function(n){var o=e.getBoundingClientRect(),c=n.clientX-o.left,a=n.clientY-o.top,d=t.getImageData(c,a,1,1).data,l="rgb(".concat(d[0],", ").concat(d[1],", ").concat(d[2],")");alert("Selected Color: "+l),i.style.display="none",r()},r=function(){(a=!a)?(e.addEventListener("mousemove",d),e.addEventListener("click",l)):(e.removeEventListener("mousemove",d),e.removeEventListener("click",l),i.style.display="none")};n.addEventListener("click",r)}(t,n)}}})();
!function(){function n(n,t){Math.random()}function n(n,t){return new Promise((function(e,o){var a=Math.random()>.3;setTimeout((function(){a?e({position:n,delay:t}):o({position:n,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();var e=new FormData(t.target),o=parseInt(e.get("delay")),a=parseInt(e.get("step")),i=parseInt(e.get("amount"));if(!Number.isNaN(o)&&!Number.isNaN(a)&&!Number.isNaN(i))for(var r=1;r<=i;r++){n(r,o+a*(r-1)).then((function(n){var t=n.position,e=n.delay;console.log("✅ Fulfilled promise ".concat(t," in ").concat(e,"ms"))})).catch((function(n){var t=n.position,e=n.delay;console.log("❌ Rejected promise ".concat(t," in ").concat(e,"ms"))}))}}))}();
//# sourceMappingURL=03-promises.c6c7593c.js.map

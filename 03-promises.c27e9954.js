function e(e,t){Math.random()}function e(e,t){return new Promise(((o,n)=>{const i=Math.random()>.3;setTimeout((()=>{i?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();const o=new FormData(t.target),n=parseInt(o.get("delay")),i=parseInt(o.get("step")),s=parseInt(o.get("amount"));if(!Number.isNaN(n)&&!Number.isNaN(i)&&!Number.isNaN(s))for(let t=1;t<=s;t++){e(t,n+i*(t-1)).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)}))}}));
//# sourceMappingURL=03-promises.c27e9954.js.map

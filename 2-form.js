import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const r=document.querySelector(".feedback-form");let t={email:"",message:""};const n=()=>{try{const e=JSON.parse(localStorage.getItem("feedback-form-state"));if(e==null)return;t=e;for(const o in t)r.elements[o].value=t[o]}catch(e){console.log(e)}};n();const m=e=>{const{target:o}=e,a=o.value,l=o.name;t[l]=a.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(t))},s=e=>{e.preventDefault();const{currentTarget:o}=e;if(!t.email||!t.message){alert("Fill please all fields");return}console.log(t),o.reset(),localStorage.removeItem("feedback-form-state")};r.addEventListener("input",m);r.addEventListener("submit",s);
//# sourceMappingURL=2-form.js.map

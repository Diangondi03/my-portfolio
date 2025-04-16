import{r as s,I as g,L as x,j as a,a as p,B as o,E as f,e as k}from"./index-CrTut2lp.js";import{G as l}from"./iconBase-CxArzmkb.js";function b(t){return l({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"},child:[]}]})(t)}function j(t){return l({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 0 0 0-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 0 0 0-1.41.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 0 0 0-1.41.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"},child:[]}]})(t)}const v="/my-portfolio/assets/logo-ECV8HGfR.webp",z=[{name:"Home",path:"/"},{name:"Projects",path:"/projects"},{name:"Education",path:"/education"},{name:"Contact",path:"/contact"}],N=()=>{const[t,c]=s.useState(localStorage.getItem("dark-mode")),{sectionIndex:r,handleLinkClick:i}=s.useContext(g),{t:d,i18n:m,changeLanguage:h}=s.useContext(x);s.useLayoutEffect(()=>{const e=document.body;t||localStorage.setItem("dark-mode","disabled"),t==="enabled"&&e.classList.add("dark")},[t]);const u=()=>{const e=document.body;e.classList.toggle("dark"),localStorage.setItem("dark-mode",e.classList.contains("dark")?"enabled":"disabled"),c(e.classList.contains("dark")?"enabled":"disabled")};return a.jsxs("nav",{className:"p-4 mb-10 flex flex-col items-center gap-4 md:flex-row md:justify-between",children:[a.jsx("img",{src:v,loading:"lazy",className:"rounded-full h-10 aspect-square",alt:"personal logo"}),a.jsxs("ul",{className:"flex items-center gap-4 flex-wrap justify-center md:justify-end md:gap-6 lg:gap-10",children:[z.map((e,n)=>a.jsx("li",{className:"shrink-0",children:a.jsx(p,{to:e.path,onClick:()=>i(n),children:a.jsx(o,{variant:"link",className:`link text-lg sm:text-xl hover:cursor-pointer transition-colors duration-200 ${r===n?"text-blue-400 font-semibold":"text-foreground/80"}`,children:d(`nav:${e.name}`)})})},e.name)),a.jsx("li",{className:"shrink-0",children:a.jsx(o,{variant:"ghost",size:"icon",className:"hover:cursor-pointer text-xl rounded-full ",onClick:h,children:a.jsx("img",{src:m.language=="en"?f:k,className:"h-6 w-6",alt:"Language button"})})}),a.jsx("li",{className:"shrink-0",children:a.jsx("button",{"aria-label":"theme",className:"hover:cursor-pointer rounded-full [&_svg]:size-5 p-2 hover:bg-accent",onClick:u,children:t==="enabled"?a.jsx(j,{}):a.jsx(b,{})})})]})]})};export{N as default};

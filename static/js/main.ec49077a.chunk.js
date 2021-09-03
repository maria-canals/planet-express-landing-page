(this["webpackJsonpplanet-express"]=this["webpackJsonpplanet-express"]||[]).push([[0],{75:function(e,t,c){},76:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(27),a=c.n(s),r=c(7),i=c(2),l=c(3),j=c(0),o=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),c=t[0],s=t[1],a=function(){s(!1)};return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("nav",{className:"navbar",children:Object(j.jsxs)("div",{className:"navbar-container",children:[Object(j.jsx)(r.b,{to:"/",className:"navbar-logo",children:Object(j.jsx)("img",{src:"/images/planet-express_logo.png",alt:"planet-express-logo"})}),Object(j.jsx)("div",{className:"menu-icon",onClick:function(){s(!c)},children:Object(j.jsx)("i",{className:c?"fas fa-times":"fas fa-bars"})}),Object(j.jsxs)("ul",{className:c?"nav-menu active":"nav-menu",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsxs)(r.b,{to:"/ofertas",className:"nav-links",onClick:a,children:[Object(j.jsx)("i",{className:"far fa-star"}),"Oferta"]})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(r.b,{to:"/servicios",className:"nav-links",onClick:a,children:"Calcula tu pedido"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(r.b,{to:"/empleados",className:"nav-links",onClick:a,children:"Empleados"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(r.b,{to:"/newsletter",className:"nav-links",onClick:a,children:"Newsletter"})})]})]})})})},b=function(e){var t=e.children,c=e.type,n=e.buttonStyle,s=e.buttonSize;return Object(j.jsx)("button",{className:"btn ".concat(n," ").concat(s," pointer"),type:c,children:t})},u=function(){return Object(j.jsxs)("div",{className:"hero-container",children:[Object(j.jsx)("video",{src:"/videos/video-4.mp4",autoPlay:!0,loop:!0,muted:!0}),Object(j.jsxs)("div",{className:"hero-description",children:[Object(j.jsx)("h1",{children:"Planet Express"}),Object(j.jsx)("h2",{children:"Servicio de env\xedos espaciales"}),Object(j.jsxs)("div",{className:"hero-btns",children:[Object(j.jsx)(r.b,{to:"/servicios",className:"btn-mobile",children:Object(j.jsx)(b,{className:"btn pointer",buttonStyle:"btn-primary",buttonSize:"btn-medium",children:"Ver precios"})}),Object(j.jsx)(r.b,{to:"/newsletter",className:"btn-mobile",children:Object(j.jsx)(b,{className:"btn pointer",buttonStyle:"btn-outline",buttonSize:"btn-medium",children:"Subscribirse"})})]})]})]})},d=function(){return Object(j.jsx)(u,{})},h=function(e){var t=e.name,c=e.url;return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("img",{src:c,alt:t}),Object(j.jsx)("div",{className:"card-container",children:Object(j.jsx)("h3",{children:t})})]},t)},m=function(e){var t=e.data;return Object(j.jsx)("div",{className:"cardList",children:null===t||void 0===t?void 0:t.map((function(e){return Object(j.jsx)(h,{name:e.name,url:e.url,species:e.species},e.name)}))})},O=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"spinner"}),Object(j.jsx)("h3",{className:"spinner-text",children:"Cargando..."})]})},x=c(15),p=c.n(x),v=c(30),f=c(46),N=function(){var e=Object(v.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get("https://futuramaapi.herokuapp.com/api/v2/characters?search=".concat(t)).then((function(e){return{name:e.data[0].Name,url:e.data[0].PicUrl}})).catch((function(e){console.log(e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=["Philip J. Fry","Leela","Amy","Zoidberg","Bender","Hermes","Hubert J. Farnsworth"],S=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){var e=[];return g.forEach((function(t){N(t).then((function(t){e.push(t),e.length===g.length&&s(e)}))})),function(){s([])}}),[]),Object(j.jsx)(j.Fragment,{children:c.length>0?Object(j.jsxs)("div",{className:"employees-screen",children:[Object(j.jsx)("h1",{children:"Nuestros Empleados"}),Object(j.jsx)(m,{data:c})]}):Object(j.jsx)(O,{})})},w=c(9),k=c(16),y=function(){var e=Object(n.useState)({weight1:{value:"",price:0},weight2:{value:"",price:0}}),t=Object(l.a)(e,2),c=t[0],s=t[1],a=c.weight1,r=c.weight2,i=Object(n.useState)(),o=Object(l.a)(i,2),u=o[0],d=o[1],h=function(e){var t=e.target,n=0;t.value>0&&t.value<20?n=20:t.value>20&&t.value<50?n=45.9:t.value>51&&(n=90.5),s(Object(k.a)(Object(k.a)({},c),{},Object(w.a)({},t.name,{value:t.value,price:n})))};return Object(j.jsx)("div",{className:"main-screen",children:Object(j.jsx)("form",{onSubmit:function(e){console.log(c),e.preventDefault();var t=Object.values(c).reduce((function(e,t){return e.price+t.price}));d(t)},children:Object(j.jsxs)("div",{className:"services-container",children:[Object(j.jsxs)("h2",{children:["Calcula tu pedido ",Object(j.jsx)("i",{className:"fas fa-rocket"})]}),Object(j.jsx)("div",{className:"services-taxes",children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)("b",{children:"PRECIOS"})}),Object(j.jsxs)("li",{children:["Menos de 20kg: ",Object(j.jsx)("span",{children:"20$"})]}),Object(j.jsxs)("li",{children:["Entre 20kg y 50kg: ",Object(j.jsx)("span",{children:"45.90$"})]}),Object(j.jsxs)("li",{children:["M\xe1s de 50kg: ",Object(j.jsx)("span",{children:"90.50$"})]})]})}),Object(j.jsxs)("fieldset",{children:[Object(j.jsx)("legend",{children:"Introduce el peso de cada paquete que quieras enviar, con un m\xe1ximo de 2 paquetes."}),Object(j.jsx)("label",{htmlFor:"weight1"}),Object(j.jsx)("input",{type:"number",min:"0",placeholder:"Introduce el peso del paquete en kg",name:"weight1",value:a.value,onChange:h}),Object(j.jsx)("label",{htmlFor:"weight2"}),Object(j.jsx)("input",{type:"number",min:"0",placeholder:"Introduce el peso del paquete en kg",name:"weight2",value:r.value,onChange:h})]}),Object(j.jsx)("span",{className:"services-price",children:u>0&&Object(j.jsxs)("b",{children:[" Precio: $",u]})}),Object(j.jsx)(b,{className:"btn",buttonStyle:"btn-outline",buttonSize:"btn-large",type:"submit",children:"Calcula el precio"})]})})})},C=function(){var e=Object(n.useState)("00"),t=Object(l.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)("00"),r=Object(l.a)(a,2),i=r[0],o=r[1],b=Object(n.useState)("00"),u=Object(l.a)(b,2),d=u[0],h=u[1],m=Object(n.useState)("00"),x=Object(l.a)(m,2),p=x[0],v=x[1];Object(n.useRef)();return Object(n.useEffect)((function(){return function(){var e=new Date("Sep 20 2021 00:00:00").getTime();setInterval((function(){var t=(new Date).getTime(),c=e-t,n=Math.floor(c/864e5),a=Math.floor(c%864e5/36e5),r=Math.floor(c%36e5/6e4),i=Math.floor(c%6e4/1e3);c<0?clearInterval():(s(n),o(a),h(r),v(i))}),1e3)}(),function(){clearInterval(),s("00"),o("00"),h("00"),v("00")}}),[]),Object(j.jsx)(j.Fragment,{children:"00"===p?Object(j.jsx)(O,{}):Object(j.jsxs)("div",{className:"counter-container",children:[Object(j.jsx)("h2",{className:"counter-headline",children:"Tiempo restante:"}),Object(j.jsxs)("ul",{children:[Object(j.jsxs)("li",{children:[Object(j.jsx)("span",{className:"days",children:c}),"d\xedas"]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("span",{className:"hours",children:i}),"Horas"]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("span",{className:"minutes",children:d}),"Minutos"]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("span",{className:"seconds",children:p}),"Segundos"]})]})]})})},I=function(){return Object(j.jsx)("div",{className:"main-screen",children:Object(j.jsxs)("div",{className:"deal-container",children:[Object(j.jsx)("h1",{children:"Tenemos una oferta para ti! A partir de hoy los env\xedos de m\xe1s de 50kg valen $85 !"}),Object(j.jsx)(C,{})]})})},E=c(31),F=c.n(E),q=function(e){var t=e.handleInputChange,c=e.handleNewsletter,n=e.email;return Object(j.jsxs)("form",{onSubmit:c,children:[Object(j.jsx)("label",{htmlFor:"email"}),Object(j.jsx)("input",{type:"email",id:"email",name:"email",placeholder:"Introduce tu email...",required:!0,value:n,onChange:function(e){return t(e.target.value)}}),Object(j.jsx)(b,{className:"btn",buttonStyle:"btn-outline",buttonSize:"btn-medium",children:"Subscribirse"})]})},M=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),c=t[0],s=t[1];return Object(j.jsx)("div",{className:"main-screen",children:Object(j.jsxs)("div",{className:"newsletter-container",children:[Object(j.jsx)("h1",{children:"\xdanete a la aventura!"}),Object(j.jsx)(q,{email:c,handleInputChange:function(e){s(e)},handleNewsletter:function(e){e.preventDefault(),s(c),F.a.fire({icon:"success",text:"Subscrito correctamente! ".concat(c)}),s("")}})]})})},P=function(){return Object(j.jsxs)(r.a,{children:[Object(j.jsx)(o,{}),Object(j.jsxs)(i.d,{children:[Object(j.jsx)(i.b,{exact:!0,path:"/",component:d}),Object(j.jsx)(i.b,{exact:!0,path:"/ofertas",component:I}),Object(j.jsx)(i.b,{exact:!0,path:"/empleados",component:S}),Object(j.jsx)(i.b,{exact:!0,path:"/servicios",component:y}),Object(j.jsx)(i.b,{exact:!0,path:"/newsletter",component:M}),Object(j.jsx)(i.a,{to:"/"})]})]})},z=function(){return Object(j.jsx)(P,{})};c(75);a.a.render(Object(j.jsx)(z,{}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.ec49077a.chunk.js.map
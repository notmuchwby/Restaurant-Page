(()=>{"use strict";function e(){const e=document.querySelector("#content"),n=document.createElement("div");n.id="home-page";const t=document.createElement("div");t.id="home-page-content",n.appendChild(t);const d=document.createElement("div");d.id="title-and-icon";const c=document.createElement("p");c.id="title",c.innerHTML="Iskender Kebab",d.appendChild(c);const i=document.createElement("img");i.id="icon",i.src="/src/img/kebab.png",d.appendChild(i),t.appendChild(d);const o=document.createElement("div");o.id="message-and-button";const a=document.createElement("p");a.id="greeting-message",a.innerHTML="Home of the best doner kebab. We make our food with love. \n Come and see us!",o.appendChild(a);const m=document.createElement("div"),s=document.createElement("button");s.id="menu-btn",s.innerHTML="Menu",m.appendChild(s),m.id="button-div",o.appendChild(m),t.appendChild(o),e.appendChild(n)}function n(){const e=document.querySelector("#content"),n=document.createElement("div");n.id="menu";const t=document.createElement("div");t.id="menu-content",n.appendChild(t);const d=document.createElement("p");d.id="menu-title",d.innerHTML="Menu",t.appendChild(d);const c=document.createElement("div");c.id="food-and-prices",t.appendChild(c);const i=document.createElement("div");i.id="first-dish",i.className="dish-title",c.appendChild(i);const o=document.createElement("p");o.id="first",o.className="dish-name",o.innerHTML="Adana Kebab",i.appendChild(o);const a=document.createElement("p");a.id="first",a.innerHTML="Very tasty dish yes yes",i.appendChild(a);const m=document.createElement("p");m.id="first",m.className="dish-price",m.innerHTML="5$",i.appendChild(m);const s=document.createElement("div");s.id="second-dish",s.className="dish-title",c.appendChild(s);const l=document.createElement("p");l.id="second",l.className="dish-name",l.innerHTML="Doner Kebab",s.appendChild(l);const r=document.createElement("p");r.id="second",r.innerHTML="Also a very good dish yes yes",s.appendChild(r);const p=document.createElement("p");p.id="second",p.className="dish-price",p.innerHTML="7$",s.appendChild(p);const u=document.createElement("div");u.id="third-dish",u.className="dishes",c.appendChild(u);const h=document.createElement("p");h.id="third",h.className="dish-name",h.innerHTML="Turkish Pilav",u.appendChild(h);const E=document.createElement("p");E.id="third",E.innerHTML="Amazing pilav",u.appendChild(E);const C=document.createElement("p");C.id="third",C.className="dish-price",C.innerHTML="10$",u.appendChild(C),e.appendChild(n)}e();const t=document.querySelector("#content"),d=document.querySelector("#home-button"),c=document.querySelector("#menu-button"),i=document.querySelector("#contact-button");d.addEventListener("click",(function(){t.innerHTML="",e()})),c.addEventListener("click",(function(){t.innerHTML="",n()})),i.addEventListener("click",(function(){t.innerHTML="",function(){const e=document.querySelector("#content"),n=document.createElement("div"),t=document.createElement("p");t.id="contact-title",t.innerHTML="Contact Us",n.appendChild(t);const d=document.createElement("div");d.id="text-area",n.appendChild(d);const c=document.createElement("p");c.id="phone",c.className="info",c.innerHTML="Phone: 1717171717",d.appendChild(c);const i=document.createElement("p");i.id="location",i.className="info",i.innerHTML="Address: Somewhere in Turkey",d.appendChild(i);const o=document.createElement("p");o.id="email",o.className="info",o.innerHTML="Email: donerkebab@donerkebablol.com",d.appendChild(o),e.appendChild(n)}()}));const o=document.querySelector("#menu-btn");o.addEventListener("click",(function(){t.innerHTML="",o.onclick=null,n()}))})();
/* E&J Billboard Master Planner loader. Squarespace Footer sets window.EJ_MAPBOX_TOKEN then loads this file. */
(function(){
var m0=location.pathname.match(/^\/([a-z-]+-digital-billboards)\/p\/([^\/?#]+)/);if(!m0)return;
var BASE="https://ejbillboards.github.io/billboard-data/",TOKEN=window.EJ_MAPBOX_TOKEN,done=0,C,D;
function esc(s){return String(s==null?"":s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
function money(n){return "$"+Number(n).toLocaleString("en-US")}
function lines(g){return ["$400+ · 4 days, 6 hrs/day","$750+ · Business Package: 3 days/wk for a month",(g.rate?money(g.rate):"$2,000")+"+ · Full month campaign"]}
function title(g){return ((g.types||[]).join(" / ")||"Billboard")+" billboard · "+g.area}
function pop(g){return '<div style="font:14px/1.4 system-ui,sans-serif;width:230px">'+(g.photo?'<img src="'+esc(g.photo)+'" alt="'+esc(title(g))+'" style="width:100%;height:120px;object-fit:cover;border-radius:6px;display:block;margin-bottom:6px">':'')+'<strong>'+esc(title(g))+'</strong><div style="opacity:.75">'+esc((g.sizes||[]).join(", "))+'</div><div style="opacity:.75;margin-bottom:6px">'+esc(g.loc)+'</div><div style="font-weight:600;font-size:13px">'+lines(g).map(esc).join("<br>")+'</div><div style="font-size:12px;opacity:.75;margin:6px 0">Bookable. An E&amp;J agent confirms availability.</div><a href="tel:+18889993241" style="display:inline-block;background:#111;color:#f5c542;padding:7px 12px;border-radius:6px;text-decoration:none;font-weight:600">Call 888-999-3241</a> <a href="https://www.google.com/maps/@?api=1&map_action=pano&viewpoint='+g.lat+','+g.lon+'" target="_blank" rel="noopener" style="font-size:12px;margin-left:6px">Street View</a></div>'}
function load(cb){if(window.mapboxgl)return cb();var l=document.createElement("link");l.rel="stylesheet";l.href="https://api.mapbox.com/mapbox-gl-js/v3.9.4/mapbox-gl.css";document.head.appendChild(l);var s=document.createElement("script");s.src="https://api.mapbox.com/mapbox-gl-js/v3.9.4/mapbox-gl.js";s.onload=cb;document.head.appendChild(s)}
function dist(g){return Math.pow(g.lat-C[1],2)+Math.pow((g.lon-C[2])*Math.cos(C[1]*Math.PI/180),2)}
function place(){
 if(done)return true;
 var hs=[].slice.call(document.querySelectorAll(".product-description h2")).filter(function(h){return /How to book/i.test(h.textContent)&&h.offsetParent!==null});
 if(!hs.length)return false;
 var h=hs[0],anchor=h.nextElementSibling;while(anchor&&anchor.tagName!=="OL"&&anchor.tagName!=="UL")anchor=anchor.nextElementSibling;
 if(!anchor)anchor=h;
 done=1;
 var w=document.createElement("section");w.id="ej-master-planner";w.style.cssText="margin:24px 0";
 w.innerHTML='<h2 style="margin:0 0 6px">Billboards near '+esc(C[0])+' on the map</h2><p style="margin:0 0 10px;opacity:.8">Tap a pin for photos, size, and starting prices. Pins are approximate. An agent confirms the exact face and availability.</p><div id="ej-map" style="height:420px;border-radius:12px;overflow:hidden;background:#e8ecef"></div><details style="margin:12px 0 0"><summary style="cursor:pointer;font-weight:600;padding:10px 0">See all '+D.length+' billboard locations</summary><ul style="margin:8px 0 0;padding-left:18px;font-size:14px;max-height:360px;overflow:auto">'+D.map(function(g){return "<li>"+esc(title(g))+" — "+esc(g.loc)+" — from "+(g.rate?money(g.rate):"$400")+"+</li>"}).join("")+"</ul></details>";
 anchor.parentNode.insertBefore(w,anchor.nextSibling);
 load(function(){try{if(!mapboxgl.supported())throw 0;mapboxgl.accessToken=TOKEN;
  var m=new mapboxgl.Map({container:"ej-map",style:"mapbox://styles/mapbox/light-v11",center:[C[2],C[1]],zoom:C[3]});
  m.addControl(new mapboxgl.NavigationControl());
  D.forEach(function(g){new mapboxgl.Marker({color:"#c9971c"}).setLngLat([g.lon,g.lat]).setPopup(new mapboxgl.Popup({offset:24,maxWidth:"260px"}).setHTML(pop(g))).addTo(m)});
 }catch(e){document.getElementById("ej-map").innerHTML='<p style="padding:20px">The map could not load. See the list below or call 888-999-3241.</p>'}});
 return true}
function tick(){if(place())return;var n=0,t=setInterval(function(){if(place()||++n>40)clearInterval(t)},250)}
function go(){if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",tick);else tick()}
function j(u){return fetch(u).then(function(r){if(!r.ok)throw 0;return r.json()})}
j(BASE+"pages.json").then(function(P){
 var st=P.states[m0[1]];if(!st)return;
 return j(BASE+"states/"+st+".json").then(function(S){
  var c=P.cities[m0[1]+"/"+m0[2]];if(!c||!S.boards.length)return;
  C=c;D=S.boards.slice().sort(function(a,b){return dist(a)-dist(b)});go()})
}).catch(function(){});
})();

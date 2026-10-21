/* E&J Billboard Master Planner loader. Squarespace Footer sets window.EJ_MAPBOX_TOKEN then loads this file. */
(function(){
var m0=location.pathname.match(/^\/([a-z0-9-]+)\/p\/([^\/?#]+)/),ms=location.pathname.match(/^\/([a-z-]+-digital-billboards)\/?$/),STATE=0,HEAD="";
var BASE="https://ejbillboards.github.io/billboard-data/",TOKEN=window.EJ_MAPBOX_TOKEN,done=0,C,D;
function esc(s){return String(s==null?"":s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
function money(n){return "$"+Number(n).toLocaleString("en-US")}
function lines(g){if(g.intl)return ["International billboard · ask an agent for pricing"];return [money((g.price&&g.price.day)||400)+"+ · 4 days, 6 hrs/day",money((g.price&&g.price.business)||750)+"+ · Business Package: 3 days/wk for a month",money((g.price&&g.price.full)||2000)+"+ · Full month campaign"]}
function title(g){return ((g.types||[]).join(" / ")||"Billboard")+" billboard · "+g.area}
function pop(g){return '<div style="font:14px/1.4 system-ui,sans-serif;width:230px">'+(g.photo?'<img src="'+esc(g.photo)+'" alt="'+esc(title(g))+'" style="width:100%;height:120px;object-fit:cover;border-radius:6px;display:block;margin-bottom:6px">':'')+(g.more&&g.more.length?'<div style="display:flex;gap:4px;margin:-2px 0 6px">'+g.more.map(function(u){return '<a href="'+esc(u)+'" target="_blank" rel="noopener" style="flex:1"><img src="'+esc(u)+'" alt="'+esc(title(g))+' other face" style="width:100%;height:54px;object-fit:cover;border-radius:5px;display:block"></a>'}).join("")+'</div>':'')+'<strong>'+esc(title(g))+'</strong><div style="opacity:.75">'+esc((g.sizes||[]).join(", "))+'</div><div style="opacity:.75;margin-bottom:6px">'+esc(g.loc)+'</div><div style="font-weight:600;font-size:13px">'+lines(g).map(esc).join("<br>")+'</div><div style="font-size:12px;opacity:.75;margin:6px 0">Bookable. An E&amp;J agent confirms availability.</div><a href="tel:+18889993241" style="display:inline-block;background:#111;color:#f5c542;padding:7px 12px;border-radius:6px;text-decoration:none;font-weight:600">Call 888-999-3241</a>'+(g.intl?' <a href="https://wa.me/529841399990" target="_blank" rel="noopener" style="font-size:12px;margin-left:6px">WhatsApp</a>':'')+' <a href="https://www.google.com/maps/@?api=1&map_action=pano&viewpoint='+g.lat+','+g.lon+'" target="_blank" rel="noopener" style="font-size:12px;margin-left:6px">Street View</a></div>'}
function load(cb){if(window.mapboxgl)return cb();var l=document.createElement("link");l.rel="stylesheet";l.href="https://api.mapbox.com/mapbox-gl-js/v3.9.4/mapbox-gl.css";document.head.appendChild(l);var s=document.createElement("script");s.src="https://api.mapbox.com/mapbox-gl-js/v3.9.4/mapbox-gl.js";s.onload=cb;document.head.appendChild(s)}
function dist(g){return Math.pow(g.lat-C[1],2)+Math.pow((g.lon-C[2])*Math.cos(C[1]*Math.PI/180),2)}
function place(){
 if(done||document.getElementById("ej-master-planner"))return true;
 var hs=[].slice.call(document.querySelectorAll(".product-description h2")).filter(function(h){return /How to book/i.test(h.textContent)&&h.offsetParent!==null});
 var anchor;
 if(STATE){anchor=document.querySelector('[id^="ej-"][id$="-seo"] > .ej-sec');if(!anchor)return false}
 else{if(!hs.length)return false;var h=hs[0];anchor=h.nextElementSibling;while(anchor&&anchor.tagName!=="OL"&&anchor.tagName!=="UL")anchor=anchor.nextElementSibling;
 if(!anchor)anchor=h}
 done=1;
 var w=document.createElement("section");w.id="ej-master-planner";w.className="ej-sec";
 w.innerHTML='<h2 style="margin:0 0 6px">'+esc(HEAD)+'</h2><p style="margin:0 0 10px;opacity:.8">Tap a pin for photos, size, and starting prices. Pins are approximate. An agent confirms the exact face and availability.</p><div id="ej-map" style="height:420px;border-radius:12px;overflow:hidden;background:#e8ecef"></div><details style="margin:12px 0 0"><summary style="cursor:pointer;font-weight:600;padding:10px 0">See all '+D.length+' billboard locations</summary><ul style="margin:8px 0 0;padding-left:18px;font-size:14px;max-height:360px;overflow:auto">'+D.map(function(g){return "<li>"+esc(title(g))+" — "+esc(g.loc)+" — from "+money((g.price&&g.price.day)||400)+"+</li>"}).join("")+"</ul></details>";
 var ref=anchor.closest(".ej-sec")||anchor;ref.parentNode.insertBefore(w,ref.nextSibling);try{ejCard()}catch(e){}
 load(function(){try{if(!mapboxgl.supported())throw 0;mapboxgl.accessToken=TOKEN;
  var o={container:"ej-map",style:"mapbox://styles/mapbox/light-v11",cooperativeGestures:true};if(STATE){var bb=new mapboxgl.LngLatBounds();D.forEach(function(g){bb.extend([g.lon,g.lat])});o.bounds=bb;o.fitBoundsOptions={padding:40,maxZoom:9}}else{o.center=[C[2],C[1]];o.zoom=C[3]}var m=new mapboxgl.Map(o);
  m.addControl(new mapboxgl.NavigationControl());
  D.forEach(function(g){new mapboxgl.Marker({color:"#c9971c"}).setLngLat([g.lon,g.lat]).setPopup(new mapboxgl.Popup({offset:24,maxWidth:"260px"}).setHTML(pop(g))).addTo(m)});
 }catch(e){document.getElementById("ej-map").innerHTML='<p style="padding:20px">The map could not load. See the list below or call 888-999-3241.</p>'}});
 return true}
function tick(){if(place())return;var n=0,t=setInterval(function(){if(place()||++n>40)clearInterval(t)},250)}
function go(){if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",tick);else tick()}
function ejCss(){
 if(!document.getElementById("ej-card-css")){var st=document.createElement("style");st.id="ej-card-css";st.textContent=
 ".ej-sec:not(#ej-master-planner),.ej-sec:not(#ej-master-planner) *{opacity:1!important;visibility:visible!important;transform:none!important;animation:none!important}#ej-master-planner,#ej-master-planner>*{opacity:1!important;visibility:visible!important}.ej-sec ol>li:before{transform:translateY(-50%)!important}.ej-sec{background:linear-gradient(180deg,#fff,#faf5e6);border:1px solid #e8d9a8;border-radius:26px;padding:26px 22px;margin:20px 0;box-shadow:0 10px 30px rgba(0,0,0,.06)}"+
 ".ej-sec>h2,.ej-sec>h3.ej-h{margin:0 0 14px;padding:0;border:0;text-align:center}.ej-sec>h2:before{display:none}"+
 ".ej-sec p{margin:0 0 12px}.ej-sec ul,.ej-sec ol{list-style:none;margin:0;padding:0}"+
 ".ej-sec li{background:#fff;border:1px solid #eadfba;border-radius:16px;padding:12px 16px;margin:8px 0}"+
 ".ej-sec ol{counter-reset:ejs}.ej-sec ol>li{counter-increment:ejs;position:relative;padding-left:56px}"+
 ".ej-sec ol>li:before{content:counter(ejs);position:absolute;left:14px;top:50%;transform:translateY(-50%);width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,#e3c872,#c9a43f);color:#111;font-weight:700;text-align:center;line-height:28px;font-size:14px}"+
 ".ej-sec h3{margin:18px 0 6px;padding-top:14px;border-top:1px solid #eadfba;font-size:1.05em}.ej-sec h3:first-of-type{border-top:0;padding-top:0}"+
 "#ej-master-planner.ej-sec .ej-pop li{background:none;border:0;padding:0;margin:4px 0}#ej-master-planner.ej-sec ul{list-style:disc;padding-left:18px}#ej-master-planner.ej-sec li{background:none;border:0;border-radius:0;padding:0;margin:4px 0}"+
 ".ej-sec.ej-dark{background:#0b0b0b;border-color:#c9a43f;text-align:center;box-shadow:0 8px 24px rgba(0,0,0,.18)}.ej-dark,.ej-dark *{color:#fff}.ej-dark>h2{color:#fff}"+
 ".ej-step{display:inline-block;background:linear-gradient(135deg,#e3c872,#c9a43f);color:#111!important;font-weight:700;letter-spacing:.12em;font-size:12px;padding:6px 14px;border-radius:999px;margin-bottom:12px}"+
 ".ej-dark a.ej-btn{display:inline-block;background:linear-gradient(135deg,#e3c872,#c9a43f);color:#111!important;font-weight:700;padding:14px 22px;border-radius:14px;text-decoration:none;margin:10px 0}.ej-dark a.ej-btn *{color:#111!important}";
 document.head.appendChild(st)}}
function ejCard(){ejCss();
 [].forEach.call(document.querySelectorAll(".product-description h2"),function(h){
  if(h.__ej||h.closest(".ej-sec"))return;h.__ej=1;
  var up=/^\s*Upload Your Billboard Content/i.test(h.textContent),box=document.createElement("div");box.className="ej-sec"+(up?" ej-dark ej-upload-card":"");
  var sibs=[],e=h.nextElementSibling;while(e&&e.tagName!=="H2"&&e.id!=="ej-master-planner"){sibs.push(e);e=e.nextElementSibling}
  h.parentNode.insertBefore(box,h);
  if(up){var pill=document.createElement("div");pill.className="ej-step";pill.textContent="STEP 2";box.appendChild(pill)}
  box.appendChild(h);sibs.forEach(function(x){box.appendChild(x)});
  if(up)[].forEach.call(box.querySelectorAll("a"),function(a){a.classList.add("ej-btn")})})}
(function(){var n=0;function t(){try{ejCard()}catch(e){}try{ejState()}catch(e){}if(++n<40)setTimeout(t,300)}if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",t);else t()})();
function ejState(){
 [].forEach.call(document.querySelectorAll('[id^="ej-"][id$="-seo"]'),function(c){
  if(c.__ejs||!c.querySelector("h2"))return;c.__ejs=1;ejCss();
  var kids=[].slice.call(c.children),cur=null,pre=[];
  function mk(){var b=document.createElement("div");b.className="ej-sec";return b}
  var first=null;kids.forEach(function(k){if(k.tagName==="H2"){cur=mk();c.insertBefore(cur,k);cur.appendChild(k)}else if(k.tagName==="STYLE"||k.tagName==="SCRIPT"){}else if(cur){cur.appendChild(k)}else{pre.push(k)}});
  if(pre.length){var b=mk();c.insertBefore(b,pre[0]);pre.forEach(function(k){b.appendChild(k)})}})}
function j(u){return fetch(u).then(function(r){if(!r.ok)throw 0;return r.json()})}
var seg=m0?m0[1]:(ms?ms[1]:null);
if(seg)j(BASE+"pages.json").then(function(P){
 var st=P.states[seg];if(!st)return;
 return j(BASE+"states/"+st+".json").then(function(S){
  if(!S.boards.length)return;
  if(m0){var c=P.cities[m0[1]+"/"+m0[2]];if(!c)return;C=c;HEAD="Billboards near "+c[0]+" on the map";D=S.boards.slice().sort(function(a,b){return dist(a)-dist(b)})}
  else{STATE=1;C=[0,0,0,0];HEAD="Billboards in "+seg.replace("-digital-billboards","").replace(/-/g," ").replace(/\b\w/g,function(x){return x.toUpperCase()})+" on the map";D=S.boards.slice()}
  go()})
}).catch(function(){});
})();

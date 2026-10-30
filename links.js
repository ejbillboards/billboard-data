(function(){
var P={"/":1,"/billboard-advertising-atlanta":1,"/atlanta-billboard-corridors":1,"/atlanta-spectacular-billboards":1,"/georgia-billboard-cities":1,"/georgia-digital-billboards":1,"/georgia-digital-billboards/p/atlanta-digital-billboards":1,"/billboard-guides-articles/how-much-does-a-billboard-cost-in-atlanta":1};
var p=location.pathname.replace(/\/+$/,"")||"/";
if(!P[p]||window.__ejLinks)return;window.__ejLinks=1;
function go(n){
 var m=document.querySelector("main")||document.querySelector("#page");
 if(!m){if(n<30)setTimeout(function(){go(n+1)},400);return}
 if(document.getElementById("ej-bt-link"))return;
 var s=document.createElement("section");s.id="ej-bt-link";s.setAttribute("aria-label","Billboard Takeover");
 s.innerHTML='<style>#ej-bt-link{background:#0b0b0b;padding:34px 20px;text-align:center;opacity:1!important}#ej-bt-link *{opacity:1!important;transform:none!important;visibility:visible!important}#ej-bt-link .w{max-width:760px;margin:0 auto}#ej-bt-link h2{color:#fff!important;font:700 clamp(22px,4vw,32px)/1.15 "Bricolage Grotesque","Instrument Sans",system-ui,sans-serif;margin:0 0 8px!important;text-transform:none!important}#ej-bt-link p{color:#e8e4da!important;font:400 16px/1.5 "Instrument Sans",system-ui,sans-serif;margin:0 0 18px!important}#ej-bt-link a{display:inline-block;background:#c9971c;color:#000!important;font:700 15px "Instrument Sans",system-ui,sans-serif;padding:13px 26px;border-radius:99px;text-decoration:none}</style><div class="w"><h2>Atlanta Billboard Takeover: 2 or 3 boards from $750</h2><p>Own multiple Atlanta digital billboards for the month, 4 hours a day, 3 days a week. Artwork included. Pay with Afterpay, Klarna or Cash App.</p><a href="/billboard-takeover">See Billboard Takeover packages</a></div>';
 var f=m.lastElementChild;m.appendChild(s);
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",function(){go(0)});else go(0);
})();

/* E&J Visibility Trifecta homepage section. Loaded from the Squarespace footer. Renders inside a shadow root so site CSS cannot touch it. */
(function(){
if(window.__ejTri)return;
var BASE0="https://ejbillboards.github.io/billboard-data/";
function place(){
  var how=document.getElementById("ej-how-home");
  if(!how)return false;
  window.__ejTri=1;
  var tbl=document.getElementById("ej-price-table");
  var host=document.createElement("div");host.id="ej-trifecta";host.style.cssText="margin:28px 0";
  how.parentNode.insertBefore(host,how);
  if(tbl&&tbl!==host)host.parentNode.insertBefore(tbl,host);
  if(!document.getElementById("ej-tri-fonts")){var l=document.createElement("link");l.id="ej-tri-fonts";l.rel="stylesheet";l.href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@600;800&family=Instrument+Sans:wght@400;500;600&display=swap";document.head.appendChild(l)}
  var R=host.attachShadow({mode:"open"});
  R.innerHTML="<style>"+CSS+"</style>"+HTML;
  RUN(R);
  return true;
}
var CSS="\n/* Layout: sticky control column on the left, a wall of live scenes on the right, plan + agent call-back below. Gold is the only loud colour. */\n:host{display:block;\n  --bg:#edf0f3; --card:#ffffff; --ink:#111722; --mute:#566070; --line:#d5dae1;\n  --gold:#c9971c; --on-gold:#17120a; --focus:#1b5fd1; --deep:#121a28; --deep-ink:#eef1f5;\n  --w:#dfe5ec; --f:#b8c1cd; --a:#9fb0c4; --b:#6c7a8c; --c:#e3b34a;\n  --display:\"Bricolage Grotesque\",\"Arial Narrow\",system-ui,sans-serif;\n  --body:\"Instrument Sans\",system-ui,-apple-system,\"Segoe UI\",sans-serif;\n}\n*{box-sizing:border-box}\n.tri{background:var(--bg);color:var(--ink);font-family:var(--body);font-size:15px;line-height:1.5;padding:clamp(16px,3vw,32px);border-radius:22px;margin:0 10px}\n.wrap{max-width:1240px;margin:0 auto}\n.tri *{box-sizing:border-box}.kick{display:inline-block;font-size:12px;letter-spacing:.12em;text-transform:uppercase;font-weight:700;color:var(--on-gold);background:var(--gold);padding:5px 12px;border-radius:999px;margin-bottom:10px}\nbutton,input{font:inherit;color:inherit}\n:focus-visible{outline:3px solid var(--focus);outline-offset:2px}\nh2,h3{font-family:var(--display);margin:0;text-wrap:balance;letter-spacing:-.01em}\n\n.top{display:flex;justify-content:space-between;align-items:center;gap:12px;padding-block:18px;flex-wrap:wrap}\n.brand{font-family:var(--display);font-weight:800;font-size:18px;letter-spacing:.02em}\n.brand i{font-style:normal;color:var(--gold)}\n.tag{font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:var(--mute)}\n.hero{padding-block:8px 28px;max-width:760px}\n.hero h2{font-size:clamp(30px,5.4vw,52px);font-weight:800;line-height:1.04}\n.hero p{color:var(--mute);font-size:17px;margin:12px 0 0;max-width:60ch}\n\n.app{display:grid;grid-template-columns:minmax(0,340px) minmax(0,1fr);gap:24px;align-items:start}\n.controls{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:20px;display:grid;gap:22px;position:sticky;top:12px}\n.step h2{font-size:15px;font-weight:700;display:flex;gap:10px;align-items:center;margin-bottom:10px}\n.step h2 b{display:inline-grid;place-items:center;width:24px;height:24px;border-radius:50%;background:var(--ink);color:var(--bg);font-size:12px}\n.row{display:flex;gap:8px;flex-wrap:wrap}\n.btn{border:1px solid var(--line);background:transparent;border-radius:9px;padding:9px 13px;cursor:pointer;font-weight:500;transition:border-color .15s,background .15s}\n.btn:hover{border-color:var(--ink)}\n.btn.gold{background:var(--gold);border-color:var(--gold);color:var(--on-gold);font-weight:600}\n.btn.gold:hover{filter:brightness(1.07)}\n.note{font-size:13px;color:var(--mute);margin:8px 0 0}\n.file{position:absolute;width:1px;height:1px;opacity:0;pointer-events:none}\n.zip{width:100%;font-size:22px;letter-spacing:.14em;font-weight:600;padding:10px 14px;border-radius:9px;border:1px solid var(--line);background:var(--bg);font-variant-numeric:tabular-nums}\n.chips{display:grid;grid-template-columns:1fr 1fr;gap:8px}\n.chip{display:flex;align-items:center;gap:9px;text-align:left;border:1px solid var(--line);background:transparent;border-radius:10px;padding:10px 11px;cursor:pointer;min-width:0;line-height:1.2}\n.chip .box{flex:none;width:18px;height:18px;border-radius:5px;border:2px solid var(--mute);display:grid;place-items:center;font-size:12px;font-weight:800;color:transparent}\n.chip[aria-pressed=\"true\"]{border-color:var(--gold);background:color-mix(in srgb,var(--gold) 14%,transparent)}\n.chip[aria-pressed=\"true\"] .box{background:var(--gold);border-color:var(--gold);color:var(--on-gold)}\n.seg{display:inline-flex;border:1px solid var(--line);border-radius:9px;overflow:hidden}\n.seg button{border:0;background:transparent;padding:8px 13px;cursor:pointer;border-right:1px solid var(--line)}\n.seg button:last-child{border-right:0}\n.seg button[aria-pressed=\"true\"]{background:var(--ink);color:var(--bg);font-weight:600}\n.sub{font-size:12px;letter-spacing:.06em;text-transform:uppercase;color:var(--mute);margin:12px 0 6px}\n.dim{opacity:.4;pointer-events:none}\n\n.wall{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:16px}\n.scene{margin:0;background:var(--card);border:1px solid var(--line);border-radius:14px;overflow:hidden;transition:opacity .25s,filter .25s}\n.scene.off{opacity:.42;filter:saturate(.2)}\n.scene.hide{display:none}\n.stage{position:relative;aspect-ratio:4/3;max-width:100%;overflow:hidden}\n.stage svg{display:block;width:100%;height:100%}\n.chips{max-height:none}\n.stage .w{fill:var(--w)}.stage .f{fill:var(--f)}.stage .a{fill:var(--a)}.stage .b{fill:var(--b)}.stage .c{fill:var(--c)}\n.inner{position:absolute;left:0;top:0;width:400px;height:300px;transform-origin:0 0;background-size:100% 100%;background-repeat:no-repeat}\n.screen{position:absolute;left:0;top:0;transform-origin:0 0;z-index:1;overflow:hidden;background:#06080c;container-type:size}\n.screen.bez{outline:2px solid rgba(12,13,16,.92)}\n.phonebody{position:absolute;z-index:2;background:#0b0b0d;border-radius:9px;box-shadow:0 6px 14px rgba(0,0,0,.35)}\n.phonebody .screen.alt{left:3px;top:3px;right:3px;bottom:3px;width:auto;height:auto;border-radius:6px;transform:none}\n.scene.off .screen>*{visibility:hidden}\n.screen video,.adimg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;background-size:cover;background-position:center}\n.screen::after{content:\"\";position:absolute;inset:0;background:linear-gradient(115deg,transparent 40%,rgba(255,255,255,.14) 50%,transparent 60%);background-size:250% 100%;animation:sheen 5s linear infinite;pointer-events:none}\n@keyframes sheen{from{background-position:120% 0}to{background-position:-120% 0}}\n.screen.tall .adimg{background-size:contain;background-repeat:no-repeat;background-color:#0b0b0d}\n.screen.tall video{object-fit:contain}\n.screen.lit .adimg,.screen.lit .fr{background-color:#f4f4f5}\n.screen.tall .fr{background-size:contain;background-repeat:no-repeat;background-color:#0b0b0d}\n.fr{position:absolute;inset:0;opacity:0;transition:opacity .5s;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;background-size:cover;background-position:center;padding:6%}\n.fr.on{opacity:1}\n.fr.t{background:var(--deep);color:var(--deep-ink)}\n.fr b{font-family:var(--display);font-size:8cqw;color:#e0ad2f}\n.fr span{font-size:5cqw}\n.bar{position:absolute;left:0;right:0;bottom:0;height:3px;background:rgba(255,255,255,.25);z-index:2}\n.bar i{display:block;height:100%;width:0;background:#e0ad2f}\n.clock{white-space:nowrap;position:absolute;right:3cqw;top:3cqw;z-index:2;font-size:4cqw;color:#fff;background:rgba(0,0,0,.55);padding:1px 5px;border-radius:3px;font-variant-numeric:tabular-nums}\n.cap{padding:11px 14px 13px;display:grid;gap:2px}\n.cap h3{font-size:16px;font-weight:700}\n.cap p{margin:0;font-size:13px;color:var(--mute)}\n.live{display:inline-flex;align-items:center;gap:6px;font-size:11px;letter-spacing:.07em;text-transform:uppercase;color:var(--mute)}\n.live::before{content:\"\";width:7px;height:7px;border-radius:50%;background:#2fa866}\n.scene.off .live::before{background:var(--mute)}\n\n.plan{margin-top:28px;background:var(--deep);color:var(--deep-ink);border-radius:16px;padding:clamp(18px,4vw,34px);display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:28px}\n.plan h2{font-size:clamp(22px,3.4vw,30px);font-weight:800}\n.plan .lede{color:#a9b4c4;margin:6px 0 16px}\n.lines{margin:0;padding:0;list-style:none;display:grid;gap:0;border-top:1px solid #2a3547}\n.lines li{display:grid;grid-template-columns:130px minmax(0,1fr);gap:12px;padding:11px 0;border-bottom:1px solid #2a3547}\n.lines span{color:#8e9bb0;font-size:13px;text-transform:uppercase;letter-spacing:.06em}\n.lines em{font-style:normal;overflow-wrap:anywhere}\n.cta{display:grid;gap:14px;align-content:start}\n.cta .btn{border-color:#3a4760}\n.cta .btn:hover{border-color:#fff}\n.cta .btn.gold{border-color:var(--gold)}\n.form{display:grid;gap:10px;background:rgba(255,255,255,.05);border:1px solid #2a3547;border-radius:12px;padding:16px}\n.form label{font-size:13px;color:#a9b4c4;display:grid;gap:4px}\n.form input{border:1px solid #3a4760;background:#0b111b;color:#fff;border-radius:8px;padding:10px 12px}\n.msg{font-size:14px;margin:0;min-height:1.4em;color:#e9d9a8}\n.phone{font-family:var(--display);font-size:22px;font-weight:700;user-select:all}\n.foot{margin-top:20px;font-size:13px;color:var(--mute);max-width:80ch}\n\n@media (max-width:900px){\n  .app{grid-template-columns:minmax(0,1fr)}\n  .controls{position:static}\n  .plan{grid-template-columns:minmax(0,1fr)}\n}\n@media (max-width:420px){ .lines li{grid-template-columns:1fr;gap:2px} }\n@media (prefers-reduced-motion:reduce){ .screen::after{animation:none} .fr{transition:none} }\n";
var HTML="<div class=\"tri\"><div class=\"wrap\">\n  <div class=\"hero\"><span class=\"kick\">The Visibility Trifecta</span>\n    <h2>See your ad on billboards, local screens and streaming commercials, all at once.</h2>\n    <p>Upload your ad, enter your ZIP code and pick where it runs. Every scene below updates as you choose.</p></div>\n  <div class=\"app\">\n    <div class=\"controls\" id=\"controls\">\n      <div class=\"step\"><h2><b>1</b>Your ad</h2>\n        <div class=\"row\"><button class=\"btn gold\" id=\"upImg\" type=\"button\">Upload logo or ad</button><button class=\"btn\" id=\"useSample\" type=\"button\">Use sample ad</button></div>\n        <div class=\"row\" style=\"margin-top:8px\"><button class=\"btn\" id=\"upVid\" type=\"button\">Add your commercial (optional)</button><button class=\"btn\" id=\"clrVid\" type=\"button\" hidden>Remove video</button></div>\n        <input class=\"file\" id=\"fileImg\" type=\"file\" accept=\"image/*\" aria-label=\"Upload your ad image\"><input class=\"file\" id=\"fileVid\" type=\"file\" accept=\"video/*\" aria-label=\"Upload your commercial video\">\n        <p class=\"note\" id=\"adNote\">Showing a sample ad. Files stay in your browser.</p></div>\n      <div class=\"step\"><h2><b>2</b>Your ZIP code</h2><input class=\"zip\" id=\"zip\" inputmode=\"numeric\" maxlength=\"5\" placeholder=\"30303\" aria-label=\"ZIP code\" value=\"30303\" autocomplete=\"postal-code\"></div>\n      <div class=\"step\"><h2><b>3</b>Where it runs</h2><div class=\"chips\" id=\"chips\"></div>\n        <div class=\"row\" style=\"margin-top:8px\"><button class=\"btn\" id=\"allOn\" type=\"button\">Pick all</button><button class=\"btn\" id=\"allOff\" type=\"button\">Clear</button></div></div>\n      <div class=\"step\"><h2><b>4</b>Streaming commercial</h2>\n        <div class=\"row\"><button class=\"chip\" id=\"streamOn\" type=\"button\" aria-pressed=\"true\" style=\"width:100%\"><span class=\"box\">&#10003;</span>Add a streaming commercial</button></div>\n        <div id=\"streamOpts\"><div class=\"sub\">Length</div>\n          <div class=\"seg\" id=\"lenSeg\"><button type=\"button\" data-v=\"15\" aria-pressed=\"true\">15 seconds</button><button type=\"button\" data-v=\"30\" aria-pressed=\"false\">30 seconds</button></div>\n          <div class=\"sub\">Watched on</div>\n          <div class=\"seg\" id=\"typeSeg\"><button type=\"button\" data-v=\"tv\" aria-pressed=\"false\">At home</button><button type=\"button\" data-v=\"phone\" aria-pressed=\"false\">Phones</button><button type=\"button\" data-v=\"both\" aria-pressed=\"true\">Both</button></div></div></div>\n    </div>\n    <div class=\"wall\" id=\"wall\" aria-live=\"polite\"></div>\n  </div>\n  <section class=\"plan\" id=\"plan\"><div><h2>Your plan</h2><p class=\"lede\">This updates with every choice above.</p><ul class=\"lines\" id=\"lines\"></ul></div>\n    <div class=\"cta\"><div class=\"row\"><button class=\"btn gold\" id=\"copyPlan\" type=\"button\">Copy my plan</button></div><p class=\"msg\" id=\"copyMsg\" role=\"status\"></p>\n      <form class=\"form\" id=\"callForm\"><strong>Have an agent call you</strong>\n        <label for=\"cName\">Your name<input id=\"cName\" autocomplete=\"name\"></label>\n        <label for=\"cPhone\">Phone number<input id=\"cPhone\" type=\"tel\" autocomplete=\"tel\"></label>\n        <button class=\"btn gold\" id=\"callBtn\" type=\"submit\">Have an agent call me</button><p class=\"msg\" id=\"formMsg\" role=\"status\"></p></form>\n      <div>Or call now<br><a class=\"phone\" href=\"tel:+18889993241\" style=\"color:inherit;text-decoration:none\">888-999-3241</a></div></div></section>\n  <p class=\"foot\">Scenes use licensed stock photos from <a href=\"https://www.pexels.com\" target=\"_blank\" rel=\"noopener\">Pexels</a> with your ad placed on a screen. Screen types, streaming options and quotes are confirmed by an agent. Your files stay in your browser.</p>\n</div></div>";
function RUN(R){
(function(){
  var BASE="https://ejbillboards.github.io/billboard-data/";
  var SCENES=[{"id": "billboard", "name": "Billboard", "line": "Drivers see it on the road", "kind": "ad", "q": [58, 8, 336, 8, 336, 168, 58, 168], "w": 320, "h": 180, "bez": 0, "img": "trifecta/billboard.jpg"}, {"id": "grocery", "name": "Grocery store", "line": "Shoppers see it over the produce", "kind": "ad", "q": [134, 26, 232, 26, 232, 81, 134, 81], "w": 320, "h": 180, "bez": 1, "img": "trifecta/grocery.jpg"}, {"id": "gas", "name": "Gas station", "line": "Drivers see it at the pump", "kind": "ad", "q": [130, 36, 258, 36, 258, 112, 130, 112], "w": 320, "h": 180, "bez": 1, "img": "trifecta/gas.jpg"}, {"id": "hotel", "name": "Hotel lobby", "line": "Guests see it at check-in", "kind": "ad", "q": [122, 153, 275, 153, 275, 239, 122, 239], "w": 320, "h": 180, "bez": 1, "img": "trifecta/hotel.jpg"}, {"id": "salon", "name": "Salon", "line": "Clients see it while they wait", "kind": "ad", "q": [279, 60, 345, 48, 345, 118, 279, 122], "w": 200, "h": 200, "bez": 1, "img": "trifecta/salon.jpg"}, {"id": "restaurant", "name": "Restaurant", "line": "Diners see it at the table", "kind": "ad", "q": [255, 46, 372, 40, 372, 104, 255, 98], "w": 320, "h": 180, "bez": 1, "img": "trifecta/restaurant.jpg"}, {"id": "coffee", "name": "Coffee shop", "line": "Customers see it in line", "kind": "ad", "q": [145, 64, 278, 64, 278, 138, 145, 138], "w": 320, "h": 180, "bez": 1, "img": "trifecta/coffee.jpg"}, {"id": "gym", "name": "Gym", "line": "Members see it mid-workout", "kind": "ad", "q": [16, 28, 112, 28, 112, 84, 16, 84], "w": 320, "h": 180, "bez": 1, "img": "trifecta/gym.jpg"}, {"id": "airport", "name": "Airport", "line": "Travelers see it in the terminal", "kind": "ad", "q": [156, 66, 244, 66, 244, 118, 156, 118], "w": 320, "h": 180, "bez": 1, "img": "trifecta/airport.jpg"}, {"id": "mall", "name": "Shopping mall", "line": "Shoppers see it on the concourse", "kind": "ad", "q": [136, 8, 264, 8, 264, 80, 136, 80], "w": 320, "h": 180, "bez": 1, "img": "trifecta/mall.jpg"}, {"id": "shelter", "name": "Bus shelter", "line": "Pedestrians see it on the sidewalk", "kind": "ad", "q": [207, 53, 311, 53, 311, 215, 207, 215], "w": 100, "h": 156, "bez": 0, "img": "trifecta/shelter.jpg"}, {"id": "clinic", "name": "Waiting room", "line": "Patients see it while they wait", "kind": "ad", "q": [262, 70, 372, 70, 372, 138, 262, 138], "w": 320, "h": 180, "bez": 1, "img": "trifecta/clinic.jpg"}, {"id": "stream", "name": "Streaming commercial", "line": "Viewers see your commercial at home and on their phones", "kind": "tv", "q": [114, 93, 247, 93, 247, 167, 114, 167], "w": 320, "h": 180, "bez": 0, "phone": [18, 170, 52, 98], "img": "trifecta/stream.jpg"}];
  var state={ad:null,vid:null,zip:"30303",on:{billboard:true,grocery:true,gas:true,hotel:true,shelter:true,salon:false,restaurant:false,coffee:false,gym:false,airport:false,mall:false,clinic:false},stream:true,len:15,type:"both"};
  var HOOK="https://hook.us2.make.com/gcu1u1leclf5vneyyssdkeuyc52ycfnr";
  var SAMPLE="data:image/svg+xml;utf8,"+encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 360'><rect width='640' height='360' fill='#c9971c'/><rect x='22' y='22' width='596' height='316' fill='none' stroke='#17120a' stroke-width='5'/><text x='320' y='160' text-anchor='middle' font-family='Arial Black,Arial,sans-serif' font-size='74' font-weight='900' fill='#17120a'>YOUR AD</text><text x='320' y='222' text-anchor='middle' font-family='Arial,sans-serif' font-size='34' fill='#17120a'>goes right here</text><text x='320' y='296' text-anchor='middle' font-family='Arial,sans-serif' font-size='22' fill='#17120a'>Sample ad. Upload yours.</text></svg>").replace(/'/g,"%27");
  state.ad=SAMPLE;

  var $=function(i){return R.getElementById(i)};
  var wall=$("wall"),chips=$("chips");

  function homog(src,dst){
    var A=[],B=[],i,j,k;
    for(i=0;i<4;i++){
      var x=src[i][0],y=src[i][1],u=dst[i][0],v=dst[i][1];
      A.push([x,y,1,0,0,0,-u*x,-u*y]);B.push(u);
      A.push([0,0,0,x,y,1,-v*x,-v*y]);B.push(v);
    }
    for(i=0;i<8;i++){
      var m=i;for(j=i+1;j<8;j++)if(Math.abs(A[j][i])>Math.abs(A[m][i]))m=j;
      var t=A[i];A[i]=A[m];A[m]=t;t=B[i];B[i]=B[m];B[m]=t;
      for(j=i+1;j<8;j++){var f=A[j][i]/A[i][i];for(k=i;k<8;k++)A[j][k]-=f*A[i][k];B[j]-=f*B[i];}
    }
    var h=[];
    for(i=7;i>=0;i--){var sum=B[i];for(j=i+1;j<8;j++)sum-=A[i][j]*h[j];h[i]=sum/A[i][i];}
    return h;
  }
  function quadCSS(w,h,q){
    var m=homog([[0,0],[w,0],[w,h],[0,h]],[[q[0],q[1]],[q[2],q[3]],[q[4],q[5]],[q[6],q[7]]]);
    return "matrix3d("+[m[0],m[3],0,m[6],m[1],m[4],0,m[7],0,0,1,0,m[2],m[5],0,1].join(",")+")";
  }
  function fit(){
    R.querySelectorAll(".stage").forEach(function(st){var k=st.clientWidth/400;st.firstChild.style.transform="scale("+k+")"});
  }
  function build(){
    SCENES.forEach(function(s){
      var tall=s.h>s.w*1.1?" tall":"";if(s.id==="shelter")tall+=" lit";
      var main='<div class="screen main'+tall+(s.bez?" bez":"")+'" data-kind="'+s.kind+'" style="width:'+s.w+'px;height:'+s.h+'px;transform:'+quadCSS(s.w,s.h,s.q)+'"></div>';
      var ph=s.phone?'<div class="phonebody" style="left:'+s.phone[0]+'px;top:'+s.phone[1]+'px;width:'+s.phone[2]+'px;height:'+s.phone[3]+'px"><div class="screen alt tall" data-kind="'+s.kind+'"></div></div>':"";
      var fig=document.createElement("figure");
      fig.className="scene";fig.id="sc-"+s.id;
      fig.innerHTML='<div class="stage"><div class="inner" style="background-image:url('+BASE+s.img+')">'+main+ph+'</div></div><figcaption class="cap"><span class="live">Playing</span><h3>'+s.name+'</h3><p>'+s.line+'</p></figcaption>';
      wall.appendChild(fig);
      if(s.kind==="ad"){
        var b=document.createElement("button");
        b.type="button";b.className="chip";b.dataset.id=s.id;
        b.innerHTML='<span class="box">&#10003;</span>'+s.name;
        b.addEventListener("click",function(){state.on[s.id]=!state.on[s.id];sync()});
        chips.appendChild(b);
      }
    });
    fit();
    window.addEventListener("resize",fit);
    if(window.ResizeObserver){var ro=new ResizeObserver(fit);R.querySelectorAll(".stage").forEach(function(e){ro.observe(e)});}
  }

  function adHTML(){
    if(state.vid) return '<video src="'+state.vid+'" muted loop autoplay playsinline></video>';
    return '<div class="adimg" style="background-image:url(\''+state.ad+'\')"></div>';
  }
  function tvHTML(){
    if(state.vid) return '<video src="'+state.vid+'" muted loop autoplay playsinline></video>';
    return '<div class="fr f0 on" style="background-image:url(\''+state.ad+'\')"></div><div class="fr t f1"><b>Your offer</b><span>goes here</span></div><div class="fr t f2"><b>Call or visit</b><span>today</span></div><div class="bar"><i></i></div><span class="clock">0:00 / 0:15</span>';
  }
  function fillScreens(){
    var a=adHTML(),t=tvHTML();
    R.querySelectorAll(".screen").forEach(function(el){el.innerHTML=el.dataset.kind==="tv"?t:a});
    R.querySelectorAll("video").forEach(function(v){var p=v.play();if(p&&p.catch)p.catch(function(){})});
    tickT=0;
  }

  function names(){return SCENES.filter(function(s){return s.kind==="ad"&&state.on[s.id]}).map(function(s){return s.name})}
  function typeLabel(){return state.type==="tv"?"screens at home":state.type==="phone"?"phones":"screens at home and phones"}

  function planLines(){
    var scr=names().filter(function(n){return n!=="Billboard"});
    var out=[["Area",state.zip.length===5?"ZIP "+state.zip:"Add your ZIP code"],
      ["Billboard",state.on.billboard?"Yes. Starting prices are shown on our map.":"Not included"],
      ["Local screens",scr.length?scr.join(", "):"None picked"],
      ["Streaming",state.stream?state.len+"-second commercial on "+typeLabel():"Not included"],
      ["Your creative",state.vid?"Your commercial (video)":state.ad===SAMPLE?"Sample ad":"Your uploaded ad"],
      ["Next step","An agent confirms availability and quotes it for your ZIP code."]];
    return out;
  }
  function planText(){
    return "E&J Billboards: my plan\n"+planLines().map(function(l){return l[0]+": "+l[1]}).join("\n")+"\nCall 888-999-3241";
  }

  function sync(){
    chips.querySelectorAll(".chip").forEach(function(b){b.setAttribute("aria-pressed",state.on[b.dataset.id]?"true":"false")});
    SCENES.forEach(function(s){
      var el=$("sc-"+s.id),on=s.kind==="tv"?state.stream:state.on[s.id];
      el.classList.toggle("off",!on);el.style.order=on?0:1;
      el.querySelector(".live").textContent=on?"Playing":"Not picked";
      if(s.kind==="tv"){
        var m=el.querySelector(".main"),a=el.querySelector(".alt");
        m.hidden=state.type==="phone";a.hidden=state.type==="tv";
      }
    });
    $("streamOn").setAttribute("aria-pressed",state.stream?"true":"false");
    $("streamOpts").classList.toggle("dim",!state.stream);
    R.querySelectorAll("#lenSeg button").forEach(function(b){b.setAttribute("aria-pressed",String(b.dataset.v)===String(state.len)?"true":"false")});
    R.querySelectorAll("#typeSeg button").forEach(function(b){b.setAttribute("aria-pressed",b.dataset.v===state.type?"true":"false")});
    $("lines").innerHTML=planLines().map(function(l){return "<li><span>"+l[0]+"</span><em>"+l[1].replace(/&/g,"&amp;").replace(/</g,"&lt;")+"</em></li>"}).join("");
  }

  /* streaming spot timer */
  var tickT=0;
  setInterval(function(){
    if(state.vid||!state.stream) return;
    tickT+=0.25;if(tickT>=state.len)tickT=0;
    var idx=Math.min(2,Math.floor(tickT/state.len*3));
    var sec=Math.floor(tickT),mm="0:"+(sec<10?"0":"")+sec+" / 0:"+state.len;
    R.querySelectorAll('.screen[data-kind="tv"]').forEach(function(el){
      el.querySelectorAll(".fr").forEach(function(f,i){f.classList.toggle("on",i===idx)});
      var bar=el.querySelector(".bar i");if(bar)bar.style.width=(tickT/state.len*100)+"%";
      var c=el.querySelector(".clock");if(c)c.textContent=mm;
    });
  },250);

  /* uploads */
  $("upImg").addEventListener("click",function(){$("fileImg").click()});
  $("upVid").addEventListener("click",function(){$("fileVid").click()});
  $("useSample").addEventListener("click",function(){state.ad=SAMPLE;$("adNote").textContent="Showing a sample ad. Files stay in your browser.";fillScreens();sync()});
  $("clrVid").addEventListener("click",function(){if(state.vid)URL.revokeObjectURL(state.vid);state.vid=null;$("clrVid").hidden=true;$("adNote").textContent="Video removed.";fillScreens();sync()});
  $("fileImg").addEventListener("change",function(e){
    var f=e.target.files[0];if(!f)return;
    if(!/^image\//.test(f.type)){$("adNote").textContent="Please choose an image file (JPG or PNG).";return}
    if(state.ad&&state.ad!==SAMPLE)URL.revokeObjectURL(state.ad);
    state.ad=URL.createObjectURL(f);
    $("adNote").textContent="Showing "+f.name+". It stays in your browser.";
    fillScreens();sync();
  });
  $("fileVid").addEventListener("change",function(e){
    var f=e.target.files[0];if(!f)return;
    if(!/^video\//.test(f.type)){$("adNote").textContent="Please choose a video file (MP4 works best).";return}
    if(f.size>80*1024*1024){$("adNote").textContent="That video is over 80 MB. Try a shorter or smaller file.";return}
    if(state.vid)URL.revokeObjectURL(state.vid);
    state.vid=URL.createObjectURL(f);
    $("clrVid").hidden=false;
    var probe=document.createElement("video");probe.preload="metadata";probe.src=state.vid;
    probe.onloadedmetadata=function(){
      var d=Math.round(probe.duration);
      $("adNote").textContent=d>30?"Your video is "+d+" seconds. Streaming spots run 15 or 30 seconds, so it will be trimmed.":"Playing your "+d+"-second commercial. It stays in your browser.";
    };
    fillScreens();sync();
  });

  /* controls */
  $("allOn").addEventListener("click",function(){SCENES.forEach(function(x){if(x.kind==="ad")state.on[x.id]=true});sync()});
  $("allOff").addEventListener("click",function(){SCENES.forEach(function(x){if(x.kind==="ad")state.on[x.id]=false});sync()});
  $("zip").addEventListener("input",function(e){e.target.value=e.target.value.replace(/\D/g,"").slice(0,5);state.zip=e.target.value;sync()});
  $("streamOn").addEventListener("click",function(){state.stream=!state.stream;sync()});
  R.querySelectorAll("#lenSeg button").forEach(function(b){b.addEventListener("click",function(){state.len=Number(b.dataset.v);tickT=0;sync()})});
  R.querySelectorAll("#typeSeg button").forEach(function(b){b.addEventListener("click",function(){state.type=b.dataset.v;sync()})});

  /* plan actions */
  $("copyPlan").addEventListener("click",function(){
    var t=planText(),m=$("copyMsg");
    function fallback(){
      var ta=document.createElement("textarea");ta.value=t;ta.style.position="fixed";ta.style.opacity="0";document.body.appendChild(ta);ta.select();
      var ok=false;try{ok=document.execCommand("copy")}catch(x){}
      document.body.removeChild(ta);
      m.textContent=ok?"Plan copied.":"Select the plan above and copy it.";
    }
    if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(t).then(function(){m.textContent="Plan copied."},fallback)}else fallback();
  });
  $("callForm").addEventListener("submit",function(e){
    e.preventDefault();
    var n=$("cName").value.trim(),p=$("cPhone").value.replace(/\D/g,""),msg=$("formMsg"),btn=$("callBtn");
    if(!n||p.length<10){msg.textContent="Add your name and a 10-digit phone number.";return}
    btn.disabled=true;btn.textContent="Sending...";
    var z=state.zip;
    fetch(HOOK,{method:"POST",body:new URLSearchParams({name:n,phone:p,email:"",zip:z,region:(window.ejRegionFor&&z.length===5)?window.ejRegionFor(z):"",source:"Homepage Visibility Trifecta",plan:planText(),page:location.href})})
      .then(function(r){if(!r.ok)throw 0;
        if(window.ejTrack)try{window.ejTrack("generate_lead",{form:"trifecta",zip:z},"Lead")}catch(x){}
        $("callForm").innerHTML='<strong>Thank you, '+n.replace(/[<>&"]/g,"")+'!</strong><p class="msg">An E&J agent will call you soon about your plan.</p>'})
      .catch(function(){btn.disabled=false;btn.textContent="Have an agent call me";msg.innerHTML='That did not go through. Please call or text 888-999-3241.'});
  });
  build();fillScreens();sync();
})();
}
var n=0,t=setInterval(function(){if(place()||++n>80)clearInterval(t)},250);
})();

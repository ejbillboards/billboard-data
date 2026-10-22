/* E&J Portfolio page. Loaded from the Squarespace footer. Renders in a shadow root on /portfolio. */
(function(){
if(window.__ejPortfolio)return;
if(!/^\/(our-work|portfolio)\/?$/.test(location.pathname))return;
var BASE="https://ejbillboards.github.io/billboard-data/";
var DATA=[{"id": "business", "name": "Business", "blurb": "Local owners, contractors, brands and professionals putting their name where the traffic is.", "items": [{"img": "portfolio/tsb-hair.jpg", "cap": "TSB hair brand above Center Parc Stadium", "place": "Atlanta, GA", "w": 1100, "h": 812}, {"img": "portfolio/easyclean.jpg", "cap": "EasyClean Septic glowing at night", "place": "", "w": 825, "h": 1100}, {"img": "portfolio/kish.jpg", "cap": "K.I.S.H. Magazine, Women Who Dream, Lead and Inspire", "place": "Charlotte, NC", "w": 1100, "h": 733}, {"img": "portfolio/his-paint-edmond.jpg", "cap": "HIS Paint, Stop In Today", "place": "Edmond, OK", "w": 1100, "h": 825}, {"img": "portfolio/dmb.jpg", "cap": "D.M.B. Bail Bonding with the owner", "place": "Memphis, TN", "w": 1100, "h": 1001}, {"img": "portfolio/handy-harris.jpg", "cap": "Handy Harris Custom Creations, general contractor", "place": "Norcross, GA", "w": 720, "h": 540}, {"img": "portfolio/his-paint-okc.jpg", "cap": "HIS Paint on a tall roadside board", "place": "Oklahoma City, OK", "w": 825, "h": 1100}, {"img": "portfolio/traffic-ticket.jpg", "cap": "Traffic ticket defense above the hotel line", "place": "Fort Myers, FL", "w": 1100, "h": 638}, {"img": "portfolio/amsc-butter.jpg", "cap": "Atlanta Metropolitan State College, with the crew watching it go up", "place": "Atlanta, GA", "w": 833, "h": 1100}, {"img": "portfolio/amsc-butter2.jpg", "cap": "Atlanta Metropolitan State College, roadside", "place": "Atlanta, GA", "w": 832, "h": 1100}, {"img": "portfolio/jays-hauling.jpg", "cap": "Jay's Hauling and Junk Removal", "place": "", "w": 825, "h": 1100}, {"img": "portfolio/facials.jpg", "cap": "Waxing and facials, with the owner out front", "place": "", "w": 640, "h": 590}, {"img": "portfolio/la-boca.jpg", "cap": "La Boca at Citizens Bank Park", "place": "Philadelphia, PA", "w": 1100, "h": 576}, {"img": "portfolio/peters.jpg", "cap": "Peter's truck service lit up after dark", "place": "", "w": 750, "h": 1000}, {"img": "portfolio/owner-wealthy.jpg", "cap": "The owner pointing at his own board", "place": "", "w": 880, "h": 1100}, {"img": "portfolio/client-scrubs.jpg", "cap": "A client celebrating her billboard", "place": "", "w": 640, "h": 946}, {"img": "portfolio/bitcoin-exxon.jpg", "cap": "Bitcoin at the pump, seen from above", "place": "", "w": 1100, "h": 825}]}, {"id": "birthdays", "name": "Birthdays", "blurb": "Names, faces and a big happy birthday for the whole street to see.", "items": [{"img": "portfolio/bday-4th.jpg", "cap": "Happy 4th Birthday, in bright pink", "place": "Houston, TX", "w": 880, "h": 1100}, {"img": "portfolio/bday-lexie.jpg", "cap": "Happy Birthday Lexie Marie", "place": "Missouri City, TX", "w": 1064, "h": 1100}, {"img": "portfolio/bday-earl.jpg", "cap": "The whole family celebrating Earl's 60th", "place": "Conyers, GA", "w": 825, "h": 1100}, {"img": "portfolio/bday-derek.jpg", "cap": "Derek's 33rd birthday, street side", "place": "", "w": 825, "h": 1100}, {"img": "portfolio/bday-cashmere.jpg", "cap": "Happy 35th Birthday Cashmere Monet", "place": "Baltimore, MD", "w": 619, "h": 1100}]}, {"id": "memorials", "name": "Memorials", "blurb": "A name and a face, remembered with love where the whole community can see it.", "items": [{"img": "portfolio/heavenly-53.jpg", "cap": "Happy Heavenly 25th Birthday, RayShawn", "place": "Nashville, TN", "w": 1100, "h": 825}, {"img": "portfolio/rip-jr.jpg", "cap": "R.I.P. JR, we miss you", "place": "Cleveland, OH", "w": 825, "h": 1100}, {"img": "portfolio/chauncory.jpg", "cap": "Chauncory, forever in our hearts", "place": "Charlotte, NC", "w": 1076, "h": 1100}, {"img": "portfolio/heavenly-52.jpg", "cap": "A quiet moment at RayShawn's board", "place": "Nashville, TN", "w": 1100, "h": 619}]}, {"id": "love", "name": "Love and Proposals", "blurb": "Welcome homes, Valentine questions and sweet surprises.", "items": [{"img": "portfolio/valentine.jpg", "cap": "Will you be my Valentine, lit up in the dusk", "place": "Modesto, CA", "w": 1100, "h": 825}, {"img": "portfolio/valentine-selfie.jpg", "cap": "The surprise, with the board overhead", "place": "Modesto, CA", "w": 826, "h": 1100}, {"img": "portfolio/husband.jpg", "cap": "Welcome home husband, Happy Sweetest Day", "place": "Chicago, IL", "w": 825, "h": 1100}, {"img": "portfolio/husband2.jpg", "cap": "Welcome home, up close", "place": "Chicago, IL", "w": 825, "h": 1100}]}, {"id": "celebrations", "name": "Celebrations", "blurb": "Congratulations, concerts and fan moments.", "items": [{"img": "portfolio/mamas.jpg", "cap": "Congratulations Mama, at night", "place": "Atlanta, GA", "w": 1100, "h": 1100}, {"img": "portfolio/mamas2.jpg", "cap": "Proud of you, Mama", "place": "Atlanta, GA", "w": 1036, "h": 1100}, {"img": "portfolio/bts.jpg", "cap": "BTS x Charm City, welcome to Baltimore", "place": "Baltimore, MD", "w": 1100, "h": 825}, {"img": "portfolio/master-p.jpg", "cap": "Master P concert on a corner board", "place": "", "w": 883, "h": 1100}]}, {"id": "community", "name": "Community and Political", "blurb": "Faith, public safety, voting and campaigns reaching neighborhoods.", "items": [{"img": "portfolio/we-the-people.jpg", "cap": "We the People Vote, early voting dates", "place": "Eatonton, GA", "w": 1100, "h": 619}, {"img": "portfolio/rick-jackson.jpg", "cap": "Political campaign, Macon", "place": "Macon, GA", "w": 1100, "h": 825}, {"img": "portfolio/rick-jackson2.jpg", "cap": "Political campaign, off the interstate", "place": "Buford, GA", "w": 1100, "h": 619}, {"img": "portfolio/faith.jpg", "cap": "Seek His Holy Face", "place": "Atlanta, GA", "w": 658, "h": 1100}, {"img": "portfolio/serve-honor.jpg", "cap": "Serve with honor, protect with pride", "place": "Richmond, VA", "w": 891, "h": 1100}]}];
var PRICE={business:"Business campaigns start at $400+",community:"Campaigns start at $400+"};
var LINK={business:["/business-shoutouts","Business billboards"],birthdays:["/birthday-billboards","Birthday billboards"],memorials:["/memorial-billboards","Memorial billboards"],love:["/wedding-engagement","Proposal and wedding billboards"],celebrations:["/personal-shoutouts","Personal shoutouts"],community:["/political-government-public-awareness-campaigns","Community and political campaigns"]};
function esc(s){return String(s==null?"":s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
var CSS=`
:host{display:block;--gold:#c9971c;--gold2:#e3b34a;--ink:#0b0b0b;--paper:#fff;--soft:#f5f3ee;--line:#e4dfd2;--mute:#5b5b5b;--display:"Bricolage Grotesque","Arial Narrow",system-ui,sans-serif;--body:"Instrument Sans",system-ui,-apple-system,"Segoe UI",sans-serif}
*{box-sizing:border-box}
.pf{font-family:var(--body);color:var(--ink);background:var(--paper);line-height:1.5;font-size:16px}
a{color:inherit}
:focus-visible{outline:3px solid #1b5fd1;outline-offset:2px}
.hero{background:var(--ink);color:#fff;text-align:center;padding:clamp(48px,9vw,110px) 20px clamp(40px,7vw,80px);position:relative;overflow:hidden}
.hero:before{content:"";position:absolute;inset:0;background:radial-gradient(ellipse at 50% 120%,rgba(201,151,28,.28),transparent 60%)}
.hero>*{position:relative}
.kick{display:inline-block;font-size:12px;letter-spacing:.18em;text-transform:uppercase;font-weight:700;color:var(--ink);background:var(--gold);padding:6px 14px;border-radius:999px}
.hero h1{font-family:var(--display);font-weight:800;font-size:clamp(36px,7vw,76px);line-height:1.02;margin:18px auto 14px;max-width:16ch;letter-spacing:-.02em;text-wrap:balance}
.hero h1 em{font-style:normal;color:var(--gold2)}
.hero p{max-width:60ch;margin:0 auto;color:#d0d0d0;font-size:clamp(16px,2vw,19px)}
.nav{position:sticky;z-index:20;background:rgba(11,11,11,.96);backdrop-filter:blur(6px);border-bottom:1px solid #2a2a2a}
.nav ul{list-style:none;margin:0 auto;padding:10px 16px;display:flex;gap:8px;max-width:1240px;overflow-x:auto;scrollbar-width:none}
.nav ul::-webkit-scrollbar{display:none}
.nav a{white-space:nowrap;display:inline-flex;gap:8px;align-items:center;text-decoration:none;color:#fff;border:1px solid #3a3a3a;border-radius:999px;padding:8px 14px;font-weight:600;font-size:14px}
.nav a small{color:var(--gold2);font-weight:700}
.nav a:hover,.nav a.on{background:var(--gold);border-color:var(--gold);color:var(--ink)}
.nav a:hover small,.nav a.on small{color:var(--ink)}
.sec{max-width:1240px;margin:0 auto;padding:clamp(36px,6vw,72px) 16px 8px;scroll-margin-top:120px}
.sec:nth-of-type(odd){}
.sh{display:grid;grid-template-columns:auto 1fr auto;gap:8px 20px;align-items:end;margin-bottom:22px;padding-bottom:16px;border-bottom:2px solid var(--ink)}
.num{font-family:var(--display);font-weight:800;font-size:clamp(34px,5vw,56px);line-height:1;color:var(--gold)}
.sh h2{font-family:var(--display);font-weight:800;font-size:clamp(26px,4vw,42px);line-height:1.05;margin:0;letter-spacing:-.01em}
.sh p{margin:6px 0 0;color:var(--mute);max-width:60ch}
.tag{font-size:13px;font-weight:700;background:var(--soft);border:1px solid var(--line);border-radius:999px;padding:7px 14px;white-space:nowrap}
.grid{column-width:250px;column-gap:14px}
.card{break-inside:avoid;margin:0 0 14px;position:relative;border-radius:14px;overflow:hidden;background:#111;cursor:zoom-in;display:block;width:100%;border:0;padding:0;text-align:left}
.card img{display:block;width:100%;height:auto;transition:transform .5s}
.card:hover img{transform:scale(1.04)}
.card .cap{position:absolute;left:0;right:0;bottom:0;padding:34px 14px 12px;color:#fff;background:linear-gradient(transparent,rgba(0,0,0,.82));font-size:14px;line-height:1.3;opacity:0;transform:translateY(6px);transition:.25s}
.card:hover .cap,.card:focus-visible .cap{opacity:1;transform:none}
.cap b{display:block;font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--gold2);margin-bottom:2px}
@media (hover:none){.card .cap{opacity:1;transform:none}}
.more{display:flex;gap:14px;flex-wrap:wrap;align-items:center;justify-content:space-between;margin:10px 0 0;padding:14px 18px;background:var(--soft);border:1px solid var(--line);border-radius:14px}
.more a.btn{background:var(--ink);color:#fff;text-decoration:none;font-weight:700;border-radius:10px;padding:10px 16px;font-size:15px}
.more a.btn:hover{background:var(--gold);color:var(--ink)}
.cta{background:var(--ink);color:#fff;text-align:center;margin-top:clamp(40px,6vw,80px);padding:clamp(44px,8vw,90px) 20px}
.cta h2{font-family:var(--display);font-weight:800;font-size:clamp(30px,5.5vw,58px);line-height:1.04;margin:0 auto 12px;max-width:18ch;text-wrap:balance}
.cta h2 em{font-style:normal;color:var(--gold2)}
.cta p{color:#cfcfcf;max-width:56ch;margin:0 auto 22px}
.cta .row{display:flex;gap:12px;justify-content:center;flex-wrap:wrap}
.cta a{display:inline-block;text-decoration:none;font-weight:700;border-radius:12px;padding:14px 22px;border:2px solid var(--gold)}
.cta a.g{background:var(--gold);color:var(--ink)}
.cta a.g:hover{background:var(--gold2)}
.cta a.o{color:#fff}
.cta a.o:hover{background:#fff;color:var(--ink);border-color:#fff}
.cta small{display:block;margin-top:18px;color:#aaa}
.lb{position:fixed;inset:0;z-index:2147483000;background:rgba(5,5,5,.94);display:none;align-items:center;justify-content:center;padding:20px}
.lb.open{display:flex}
.lbi{max-width:min(1100px,100%);max-height:100%;display:grid;grid-template-rows:minmax(0,1fr) auto;gap:12px;justify-items:center}
.lbi img{max-width:100%;max-height:78vh;object-fit:contain;border-radius:10px}
.lbc{color:#fff;text-align:center}
.lbc b{display:block;color:var(--gold2);font-size:12px;letter-spacing:.14em;text-transform:uppercase}
.lb button{position:absolute;background:rgba(255,255,255,.12);color:#fff;border:1px solid rgba(255,255,255,.3);border-radius:50%;width:46px;height:46px;font-size:22px;cursor:pointer}
.lb button:hover{background:var(--gold);color:var(--ink)}
.lb .x{top:14px;right:14px}.lb .p{left:14px;top:50%}.lb .n{right:14px;top:50%}
@media (max-width:700px){.sh{grid-template-columns:auto 1fr}.tag{grid-column:1/-1;justify-self:start}.grid{column-width:150px}.lb .p,.lb .n{top:auto;bottom:16px}.lb .p{left:20px}.lb .n{right:20px}}
@media (prefers-reduced-motion:reduce){.card img,.card .cap{transition:none}}
`;
function build(){
  var all=[],total=0;
  var nav='<nav class="nav" id="nav" aria-label="Portfolio sections"><ul>'+DATA.map(function(c){total+=c.items.length;return '<li><a href="#'+c.id+'" data-id="'+c.id+'">'+esc(c.name)+' <small>'+c.items.length+'</small></a></li>'}).join("")+'</ul></nav>';
  var secs=DATA.map(function(c,ci){
    var price=PRICE[c.id]||"Shoutouts: $150, $250 or $400";
    var l=LINK[c.id];
    return '<section class="sec" id="'+c.id+'"><div class="sh"><span class="num">'+("0"+(ci+1)).slice(-2)+'</span><div><h2>'+esc(c.name)+'</h2><p>'+esc(c.blurb)+'</p></div><span class="tag">'+esc(price)+'</span></div>'+
    '<div class="grid">'+c.items.map(function(it){var idx=all.push({it:it,cat:c.name})-1;
      return '<button type="button" class="card" data-i="'+idx+'" aria-label="Open photo: '+esc(it.cap)+'"><img loading="lazy" src="'+BASE+it.img+'" width="'+it.w+'" height="'+it.h+'" alt="'+esc(it.cap+(it.place?", "+it.place:""))+' on a digital billboard"><span class="cap"><b>'+esc(c.name)+(it.place?" &middot; "+esc(it.place):"")+'</b>'+esc(it.cap)+'</span></button>'}).join("")+'</div>'+
    '<div class="more"><span>Want one like these?</span><a class="btn" href="'+l[0]+'">See '+esc(l[1])+'</a></div></section>';
  }).join("");
  var hero='<header class="hero"><span class="kick">Our Work</span><h1>Real people. <em>Real</em> billboards.</h1><p>A look at digital billboards we have put up for business owners, families and communities. Tap any photo to see it up close.</p></header>';
  var cta='<section class="cta"><h2>Your name could be <em>next</em>.</h2><p>Pick a message, a photo and a date. An E&amp;J agent handles the rest and confirms every detail with you before it goes live.</p><div class="row"><a class="g" href="tel:+18889993241">Call 888-999-3241</a><a class="o" href="/billboard-pricing">See pricing</a><a class="o" href="/shoutout-builder">Build a shoutout</a></div><small>Split your billboard payment into 4 easy payments with Afterpay or Klarna.</small></section>';
  var lb='<div class="lb" id="lb" role="dialog" aria-modal="true" aria-label="Photo viewer"><button class="x" id="lbx" type="button" aria-label="Close">&times;</button><button class="p" id="lbp" type="button" aria-label="Previous photo">&#8249;</button><button class="n" id="lbn" type="button" aria-label="Next photo">&#8250;</button><div class="lbi"><img id="lbimg" alt=""><div class="lbc" id="lbc"></div></div></div>';
  return {html:'<div class="pf">'+hero+nav+secs+cta+lb+'</div>',all:all};
}
function place(){
  var main=document.querySelector("main")||document.getElementById("page")||document.body;
  var host=document.getElementById("ej-portfolio");
  if(!host){
    var sec=main.querySelector("#sections")||main;
    host=document.createElement("div");host.id="ej-portfolio";
    sec.insertBefore(host,sec.firstChild);
  }
  window.__ejPortfolio=1;
  [].forEach.call(main.querySelectorAll("#sections > section, .page-section"),function(s){if(!s.contains(host)&&!host.contains(s)&&s.id!=="ej-portfolio"&&!s.querySelector("#ej-portfolio")){s.style.display="none"}});
  if(!document.getElementById("ej-pf-fonts")){var l=document.createElement("link");l.id="ej-pf-fonts";l.rel="stylesheet";l.href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@600;800&family=Instrument+Sans:wght@400;500;600;700&display=swap";document.head.appendChild(l)}
  var R=host.attachShadow({mode:"open"}),b=build();
  R.innerHTML="<style>"+CSS+"</style>"+b.html;
  var nav=R.getElementById("nav");
  function setTop(){var h=document.querySelector("header#header, header");var t=0;if(h){var p=getComputedStyle(h).position;if(p==="fixed"||p==="sticky")t=h.getBoundingClientRect().height}nav.style.top=t+"px"}
  setTop();window.addEventListener("resize",setTop);window.addEventListener("scroll",setTop,{passive:true});
  [].forEach.call(R.querySelectorAll(".nav a"),function(a){a.addEventListener("click",function(e){e.preventDefault();var s=R.getElementById(a.dataset.id);if(s)s.scrollIntoView({behavior:"smooth",block:"start"})})});
  if(window.IntersectionObserver){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){[].forEach.call(R.querySelectorAll(".nav a"),function(a){a.classList.toggle("on",a.dataset.id===e.target.id)})}})},{rootMargin:"-30% 0px -60% 0px"});[].forEach.call(R.querySelectorAll(".sec"),function(s){io.observe(s)})}
  var lb=R.getElementById("lb"),img=R.getElementById("lbimg"),cap=R.getElementById("lbc"),cur=0,last=null;
  function show(i){cur=(i+b.all.length)%b.all.length;var a=b.all[cur];img.src=BASE+a.it.img;img.alt=a.it.cap;cap.innerHTML="<b>"+esc(a.cat)+(a.it.place?" &middot; "+esc(a.it.place):"")+"</b>"+esc(a.it.cap)}
  function open(i,el){last=el;show(i);lb.classList.add("open");R.getElementById("lbx").focus();document.documentElement.style.overflow="hidden"}
  function close(){lb.classList.remove("open");document.documentElement.style.overflow="";if(last)last.focus()}
  [].forEach.call(R.querySelectorAll(".card"),function(c){c.addEventListener("click",function(){open(Number(c.dataset.i),c)})});
  R.getElementById("lbx").addEventListener("click",close);
  R.getElementById("lbp").addEventListener("click",function(){show(cur-1)});
  R.getElementById("lbn").addEventListener("click",function(){show(cur+1)});
  lb.addEventListener("click",function(e){if(e.target===lb)close()});
  document.addEventListener("keydown",function(e){if(!lb.classList.contains("open"))return;if(e.key==="Escape")close();else if(e.key==="ArrowLeft")show(cur-1);else if(e.key==="ArrowRight")show(cur+1)});
  document.title="Our Work: Digital Billboard Portfolio | E&J Billboards";
}
function go(){if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",place);else place()}
go();
})();

/* ════════════════════════════════════════
   TICKETZONE — SCRIPT.JS
════════════════════════════════════════ */

var FORMSPREE_URL = "https://formspree.io/f/xwvyvvdp";
var ADMIN_MAIL    = "ticketzonefr20@gmail.com";

var MONTHS = ["JAN","FÉV","MAR","AVR","MAI","JUN","JUL","AOÛ","SEP","OCT","NOV","DÉC"];
var CAT_CSS = { concert:"bg-concert", festival:"bg-festival", sport:"bg-sport", theatre:"bg-theatre" };
var CAT_BG  = {
  concert:"linear-gradient(135deg,#1a0a3a,#2d0550)",
  festival:"linear-gradient(135deg,#2a0a0a,#4a1010)",
  sport:"linear-gradient(135deg,#0a1a3a,#0a2055)",
  theatre:"linear-gradient(135deg,#2a0a18,#4a0a22)"
};

/* ══════════════════════════════════════
   🎵 10 ÉVÉNEMENTS
══════════════════════════════════════ */
var events = [
  {
    id:1,
    name:"BTS – World Tour : Live in Paris",
    cat:"concert",
    date:"2026-07-17",
    time:"20:00",
    venue:"Stade de France",
    city:"Saint-Denis",
    photo:"https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    desc:"Le phénomène mondial BTS débarque à Paris pour deux concerts exceptionnels dans le cadre de leur tournée mondiale ARIRANG. Le groupe sud-coréen, connu pour ses performances spectaculaires, ses chorégraphies millimétrées et ses hits planétaires comme Dynamite, Butter ou Permission to Dance, promet un show à couper le souffle. 160 000 fans attendus sur deux soirs.",
    places:[
      {id:"carre_or",  label:"Carré Or",      price:260.00, total:4,  sold:0},
      {id:"cat1",      label:"Catégorie 1",   price:166.50, total:3,  sold:0},
      {id:"cat3",      label:"Catégorie 3",   price:122.50, total:1,  sold:0},
      {id:"cat4",      label:"Catégorie 4",   price:100.50, total:1,  sold:0},
      {id:"VIP1",      label:"Vip1",          price:550, total:2,  sold:0}
    ]
  },
  {
    id:2,
    name:"Céline Dion – Courage World Tour",
    cat:"concert",
    date:"2026-09-12",
    time:"19:30",
    venue:"Paris La Défense Arena",
    city:"Nanterre",
    photo:"https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80",
    desc:"Céline Dion fait son grand retour sur scène à Paris pour deux soirées inoubliables à la Paris La Défense Arena. La diva québécoise interprètera ses plus grands succès dans une mise en scène spectaculaire. Un moment historique à ne pas manquer.",
    places:[
      {id:"gradin_cat4",  label:"Gradin Cat. 4",           price:89.50,  total:4, sold:0},
      {id:"gradin_cat3",  label:"Gradin Cat. 3",           price:111.50, total:4, sold:0},
      {id:"gradin_cat2",  label:"Gradin Cat. 2",           price:133.50, total:4, sold:0},
      {id:"gradin_cat1",  label:"Gradin Cat. 1",           price:199.50, total:4, sold:0},
      {id:"gradin_or",    label:"Gradin Cat. Or",          price:232.50, total:3, sold:0},
      {id:"part_cat2",    label:"Parterre Cat. 2",         price:133.50, total:4, sold:0},
      {id:"part_cat1",    label:"Parterre Cat. 1",         price:199.50, total:4, sold:0},
      {id:"trib_or",      label:"Tribune Or",              price:232.50, total:3, sold:0},
      {id:"part_diam",    label:"Parterre Diamant",        price:276.50, total:4, sold:0},
      {id:"part_pres",    label:"Parterre Prestige ⭐",    price:298.50, total:4, sold:0}
    ]
  },
  {
    id:3,
    name:"Jul – Stade de France 2026",
    cat:"concert",
    date:"2026-05-15",
    time:"20:00",
    venue:"Stade de France",
    city:"Saint-Denis",
    photo:"https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
    desc:"Après une année 2025 faste, Jul revient en 2026 avec deux concerts géants au Stade de France. Ces shows s'inscrivent dans la lignée de ses performances sold-out, promettant une scénographie de grande envergure pour le rappeur marseillais.",
    places:[
      {id:"carre_or",    label:"Carré Or",          price:196.00, total:4, sold:0},
      {id:"cat1",        label:"Catégorie 1",       price:124.00, total:4, sold:0},
      {id:"cat2",        label:"Catégorie 2",       price:89.00,  total:4, sold:0},
      {id:"cat3",        label:"Catégorie 3",       price:69.00,  total:4, sold:0},
      {id:"pelouse",     label:"Pelouses",          price:89.00,  total:4, sold:0},
      {id:"pelouse_ear", label:"Pelouse Early",     price:109.00, total:4, sold:0}
    ]
  },
  {
    id:4,
    name:"The Weeknd – Hurry Up Forever Tour",
    cat:"concert",
    date:"2026-07-08",
    time:"20:00",
    venue:"Stade de France",
    city:"Saint-Denis",
    photo:"https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80",
    desc:"Cette tournée mondiale des stades célèbre la trilogie d'albums de The Weeknd : After Hours (2020), Dawn FM (2022) et Hurry Up Tomorrow (2025). Le show propose une production futuriste et immersive, mettant en avant ses plus grands succès. 4 dates à Paris.",
    places:[
      {id:"carre_or",    label:"Carré Or",                  price:234.00, total:4, sold:0},
      {id:"pelouse_or",  label:"Pelouse Or (Fosse Premium)",price:184.00, total:2, sold:0},
      {id:"pelouse",     label:"Pelouse (Fosse Standard)",  price:151.00, total:4, sold:0},
      {id:"cat1",        label:"Catégorie 1",               price:179.00, total:4, sold:0},
      {id:"cat2",        label:"Catégorie 2",               price:139.00, total:4, sold:0},
      {id:"cat3",        label:"Catégorie 3",               price:96.00,  total:4, sold:0}
    ]
  },
  {
    id:5,
    name:"David Guetta – The Ultimate Monolith Show",
    cat:"concert",
    date:"2026-06-11",
    time:"19:00",
    venue:"Stade de France",
    city:"Saint-Denis",
    photo:"https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?w=800&q=80",
    desc:"Il s'agit du dernier spectacle de sa tournée monumentale Monolith. Ce concert propose une immersion totale avec une scénographie en forme de monolithe, mêlant visuels spectaculaires et son, considérée comme la production la plus ambitieuse de la carrière de David Guetta. 3 soirs exceptionnels.",
    places:[
      {id:"carre_or",  label:"Carré Or",      price:110.00, total:4, sold:0},
      {id:"fosse",     label:"Fosse",         price:75.00,  total:4, sold:0},
      {id:"cat1",      label:"Catégorie 1",   price:78.00,  total:4, sold:0},
      {id:"cat2",      label:"Catégorie 2",   price:67.00,  total:4, sold:0},
      {id:"cat3",      label:"Catégorie 3",   price:62.00,  total:4, sold:0},
      {id:"cat4",      label:"Catégorie 4",   price:49.00,  total:4, sold:0}
    ]
  },
  {
    id:6,
    name:"Bad Bunny – DeBÍ TiRAR MáS FOToS World Tour",
    cat:"concert",
    date:"2026-07-04",
    time:"20:00",
    venue:"Paris La Défense Arena",
    city:"Nanterre",
    photo:"https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800&q=80",
    desc:"Concerts de la superstar portoricaine de trap et reggaeton, incluant de nouvelles places en zone Los Vecinos derrière la scène. Bad Bunny s'impose comme l'un des artistes les plus attendus de 2026 pour deux soirs à Paris.",
    places:[
      {id:"carre_or_al", label:"Carré Or Allée",     price:202.70, total:4, sold:0},
      {id:"cat_or",      label:"Catégorie Or",        price:180.70, total:4, sold:0},
      {id:"cat1",        label:"Catégorie 1",         price:136.70, total:4, sold:0},
      {id:"cat2_al",     label:"Catégorie 2 Allée",   price:131.20, total:2, sold:0},
      {id:"cat3",        label:"Catégorie 3",         price:92.70,  total:4, sold:0},
      {id:"fosse_or",    label:"Fosse Or",            price:180.70, total:4, sold:0},
      {id:"fosse",       label:"Fosse Classique",     price:109.20, total:4, sold:0}
    ]
  },
  {
    id:7,
    name:"Olivia Dean – The Art of Loving Live",
    cat:"concert",
    date:"2026-06-17",
    time:"19:30",
    venue:"Accor Arena",
    city:"Paris",
    photo:"https://images.unsplash.com/photo-1571266028243-d220c6a3a0f2?w=800&q=80",
    desc:"Concert pop et soul de l'artiste britannique Olivia Dean, incluant des forfaits spéciaux comme le Sweet Things package. Une soirée intimiste et chaleureuse à l'Accor Arena de Paris pour découvrir l'une des voix les plus prometteuses de la scène britannique.",
    places:[
      {id:"carre_or",  label:"Carré Or",      price:96.20,  total:4, sold:0},
      {id:"cat1",      label:"Catégorie 1",   price:85.20,  total:4, sold:0},
      {id:"fosse",     label:"Fosse",         price:74.20,  total:4, sold:0},
      {id:"cat2",      label:"Catégorie 2",   price:63.20,  total:4, sold:0},
      {id:"vip1",      label:"VIP 1",         price:163.00, total:2, sold:0},
      {id:"vip2",      label:"VIP 2",         price:150.00, total:1, sold:0}
    ]
  },
  {
    id:8,
    name:"Aya Nakamura – Stade de France 2026",
    cat:"concert",
    date:"2026-05-29",
    time:"20:00",
    venue:"Stade de France",
    city:"Saint-Denis",
    photo:"https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&q=80",
    desc:"Trois concerts événements qui s'annoncent comme le point culminant de la carrière de l'artiste de pop urbaine, présentant le nouvel album Destinée. Un triplé historique au Stade de France pour l'artiste française la plus écoutée dans le monde.",
    places:[
      {id:"carre_or_al",  label:"Carré Or Allée",           price:155.50, total:4, sold:0},
      {id:"cat1_al",      label:"Catégorie 1 Allée",        price:133.50, total:4, sold:0},
      {id:"cat1",         label:"Catégorie 1",              price:122.50, total:4, sold:0},
      {id:"cat2",         label:"Catégorie 2",              price:99.40,  total:4, sold:0},
      {id:"cat3",         label:"Catégorie 3",              price:89.50,  total:4, sold:0},
      {id:"pelouse_or",   label:"Pelouse Or (Est ou Ouest)",price:99.40,  total:4, sold:0},
      {id:"pelouse",      label:"Pelouse",                  price:64.20,  total:1, sold:0},
      {id:"cat4",         label:"Catégorie 4",              price:67.50,  total:3, sold:0}
    ]
  },
  {
    id:9,
    name:"System of a Down – Stade de France 2026",
    cat:"concert",
    date:"2026-07-02",
    time:"20:00",
    venue:"Stade de France",
    city:"Saint-Denis",
    photo:"https://images.unsplash.com/photo-1619983081563-430f63602796?w=800&q=80",
    desc:"Le groupe de metal alternatif revient en Europe après une longue absence pour deux dates parisiennes, accompagnés de Queens of the Stone Age et Acid Bath en premières parties. Un événement historique pour tous les fans de rock et metal.",
    places:[
      {id:"carre_or",    label:"Carré Or",         price:209.00, total:4, sold:0},
      {id:"cat1",        label:"Catégorie 1",      price:139.00, total:4, sold:0},
      {id:"cat2",        label:"Catégorie 2",      price:95.00,  total:4, sold:0},
      {id:"pelouse_or",  label:"Pelouse Or (Fosse)",price:183.00, total:4, sold:0},
      {id:"pelouse",     label:"Pelouse (Fosse)",  price:95.00,  total:4, sold:0}
    ]
  },
  {
    id:10,
    name:"Damso – BĒYĀH TOUR",
    cat:"concert",
    date:"2026-05-28",
    time:"20:00",
    venue:"Paris La Défense Arena",
    city:"Nanterre",
    photo:"https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&q=80",
    desc:"Après 4 ans d'absence, le rappeur belge revient pour une série de concerts dans la plus grande salle d'Europe. Il présentera son projet BĒYĀH ainsi que ses plus grands classiques, dans une performance présentée comme une célébration de son parcours.",
    places:[
      {id:"diam",        label:"Catégorie Diamant",  price:109.00, total:4, sold:0},
      {id:"or",          label:"Catégorie Or",       price:95.00,  total:4, sold:0},
      {id:"cat1",        label:"Catégorie 1",        price:80.00,  total:4, sold:0},
      {id:"cat2",        label:"Catégorie 2",        price:69.00,  total:4, sold:0},
      {id:"fosse_ear",   label:"Fosse Early",        price:70.00,  total:4, sold:0},
      {id:"fosse",       label:"Fosse Classique",    price:60.00,  total:4, sold:0}
    ]
  },
   {
    id:11,
    name:"The Strokes – Reality Awaits Paris 2026",
    cat:"concert",
    date:"2026-10-22",
    time:"19:30",
    venue:"Accor Arena",
    city:"Paris",
    photo:"https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&q=80",
    desc:"Après plusieurs années, le groupe culte de rock new-yorkais se produit à Paris pour présenter son nouvel album Reality Awaits (sortie prévue le 26 juin 2026). Premières parties assurées par Fat White Family et Alex Cameron pour une soirée rock inoubliable à l'Accor Arena.",
    places:[
      {id:"carre_or", label:"Carré Or",      price:117.00, total:4, sold:0},
      {id:"cat1",     label:"Catégorie 1",   price:95.00,  total:5, sold:0},
      {id:"fosse",    label:"Fosse",         price:89.50,  total:5, sold:0},
      {id:"cat2",     label:"Catégorie 2",   price:73.00,  total:5, sold:0}
    ]
  },
   {
    id:12,
    name:"BTS – World Tour : Live in Paris",
    cat:"concert",
    date:"2026-07-18",
    time:"20:00",
    venue:"Stade de France",
    city:"Saint-Denis",
    photo:"https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    desc:"Le phénomène mondial BTS débarque à Paris pour deux concerts exceptionnels dans le cadre de leur tournée mondiale ARIRANG. Le groupe sud-coréen, connu pour ses performances spectaculaires, ses chorégraphies millimétrées et ses hits planétaires comme Dynamite, Butter ou Permission to Dance, promet un show à couper le souffle. 160 000 fans attendus sur deux soirs.",
    places:[
      {id:"carre_or",  label:"Carré Or",      price:260.00, total:4,  sold:0},
      {id:"cat1",      label:"Catégorie 1",   price:166.50, total:3,  sold:0},
      {id:"cat3",      label:"Catégorie 3",   price:122.50, total:1,  sold:0},
      {id:"cat4",      label:"Catégorie 4",   price:100.50, total:1,  sold:0},
      {id:"VIP1",      label:"Vip1",          price:550, total:2,  sold:0}
    ]
  },
];

/* ══ ÉTAT ══ */
var cart          = [];
var currentFilter = "";
var activeModal   = null;
var MAX_TICKETS   = 4;

/* ══ HELPERS ══ */
function fmtDay(d){ return String(new Date(d+"T00:00:00").getDate()).padStart(2,"0"); }
function fmtMonth(d){ return MONTHS[new Date(d+"T00:00:00").getMonth()]; }
function fmtDate(d){
  var dt=new Date(d+"T00:00:00");
  return String(dt.getDate()).padStart(2,"0")+"/"+String(dt.getMonth()+1).padStart(2,"0")+"/"+dt.getFullYear();
}
function minPrice(ev){
  return Math.min.apply(null, ev.places.map(function(p){ return p.price; }));
}
function totalDispo(ev){
  return ev.places.reduce(function(s,p){ return s+(p.total-p.sold); },0);
}
function cartTotalQty(){
  return cart.reduce(function(s,c){ return s+c.qty; },0);
}
function showToast(msg,type){
  type=type||"ok";
  var t=document.getElementById("toast");
  document.getElementById("toast-text").textContent=msg;
  t.className="toast "+type+" show";
  setTimeout(function(){ t.className="toast"; },3400);
}

/* ══ PARTICULES ══ */
function initParticles(){
  var cont=document.getElementById("hero-particles");
  if(!cont) return;
  for(var i=0;i<18;i++){
    var p=document.createElement("div");
    p.className="particle";
    var size=Math.random()*5+2;
    p.style.cssText="width:"+size+"px;height:"+size+"px;left:"+(Math.random()*100)+"%;top:"+(Math.random()*100)+"%;animation-duration:"+(Math.random()*6+5)+"s;animation-delay:"+(Math.random()*5)+"s;opacity:"+(Math.random()*0.5+0.2)+";";
    cont.appendChild(p);
  }
}

/* ══ RENDER EVENTS ══ */
function renderEvents(list){
  var grid=document.getElementById("events-grid");
  if(!list.length){
    grid.innerHTML='<div class="no-events">🎭 Aucun événement trouvé.</div>';
    return;
  }
  grid.innerHTML=list.map(function(e,i){
    var dispo=totalDispo(e);
    var visualHtml;
    if(e.photo){
      visualHtml=
        '<div class="ev-visual">'+
          '<img src="'+e.photo+'" alt="'+e.name+'" loading="lazy"/>'+
          '<div class="ev-visual-overlay"></div>'+
          '<div class="ev-date-pill"><div class="dd">'+fmtDay(e.date)+'</div><div class="mm">'+fmtMonth(e.date)+'</div></div>'+
          '<div class="ev-cat-pill '+(CAT_CSS[e.cat]||"bg-concert")+'">'+e.cat.charAt(0).toUpperCase()+e.cat.slice(1)+'</div>'+
        '</div>';
    } else {
      visualHtml=
        '<div class="ev-visual-fallback" style="background:'+(CAT_BG[e.cat]||CAT_BG.concert)+'">'+
          (e.emoji||"🎵")+
          '<div class="ev-date-pill" style="position:absolute;top:10px;left:10px"><div class="dd">'+fmtDay(e.date)+'</div><div class="mm">'+fmtMonth(e.date)+'</div></div>'+
          '<div class="ev-cat-pill '+(CAT_CSS[e.cat]||"bg-concert")+'" style="position:absolute;bottom:10px;left:10px">'+e.cat.charAt(0).toUpperCase()+e.cat.slice(1)+'</div>'+
        '</div>';
    }
    return '<div class="ev-card" onclick="openEventModal('+e.id+')" style="animation-delay:'+(i*0.06)+'s">'+
      visualHtml+
      '<div class="ev-body">'+
        '<div class="ev-name">'+e.name+'</div>'+
        '<div class="ev-venue">📍 '+e.venue+', '+e.city+'</div>'+
        (dispo>0?'<div class="ev-price">À partir de '+minPrice(e).toFixed(2)+' €</div>':'<div class="ev-complet">Complet</div>')+
      '</div>'+
    '</div>';
  }).join("");
}

/* ══ FILTRES ══ */
function filterCat(e,cat){
  if(e) e.preventDefault();
  currentFilter=cat;
  renderEvents(cat ? events.filter(function(ev){ return ev.cat===cat; }) : events);
}
function resetFilter(e){
  if(e) e.preventDefault();
  currentFilter="";
  renderEvents(events);
}
function liveSearch(val){
  var q=val.toLowerCase();
  renderEvents(q ? events.filter(function(e){ return e.name.toLowerCase().indexOf(q)>-1||e.city.toLowerCase().indexOf(q)>-1||e.venue.toLowerCase().indexOf(q)>-1; }) : events);
}
function searchEvents(){
  var q=(document.getElementById("box-search").value||"").toLowerCase();
  var cat=document.getElementById("box-cat").value;
  var date=document.getElementById("box-date").value;
  var city=document.getElementById("box-city").value;
  var list=events.slice();
  if(q)    list=list.filter(function(e){ return e.name.toLowerCase().indexOf(q)>-1||e.venue.toLowerCase().indexOf(q)>-1||e.city.toLowerCase().indexOf(q)>-1; });
  if(cat)  list=list.filter(function(e){ return e.cat===cat; });
  if(date) list=list.filter(function(e){ return e.date===date; });
  if(city) list=list.filter(function(e){ return e.city===city; });
  renderEvents(list);
  document.getElementById("events-section").scrollIntoView({behavior:"smooth"});
}

/* ══ MODAL ÉVÉNEMENT ══ */
function openEventModal(id){
  var ev=events.find(function(e){ return e.id===id; });
  if(!ev) return;
  activeModal={id:id,qty:{}};
  ev.places.forEach(function(p){ activeModal.qty[p.id]=0; });

  var imgHtml = ev.photo
    ? '<img class="ev-modal-img" src="'+ev.photo+'" alt="'+ev.name+'" onerror="this.style.display=\'none\'"/>'
    : '<div style="width:100%;height:200px;border-radius:12px;margin-bottom:20px;display:flex;align-items:center;justify-content:center;font-size:5rem;background:'+(CAT_BG[ev.cat]||CAT_BG.concert)+'">'+(ev.emoji||"🎵")+'</div>';

  var placesHtml=ev.places.map(function(p){
    var avail=p.total-p.sold;
    return '<div class="place-row">'+
      '<div class="place-info">'+
        '<div class="place-name">'+p.label+'</div>'+
        '<div class="place-avail">'+(avail>0?avail+" place(s) disponible(s)":"COMPLET")+'</div>'+
      '</div>'+
      '<div class="place-right">'+
        '<div class="place-price">'+p.price.toFixed(2)+' €</div>'+
        (avail>0
          ?'<div class="qty-ctrl">'+
              '<button class="qty-btn" onclick="changeQty('+id+',\''+p.id+'\',-1)">−</button>'+
              '<span class="qty-num" id="qn-'+id+'-'+p.id+'">0</span>'+
              '<button class="qty-btn" onclick="changeQty('+id+',\''+p.id+'\',1)">+</button>'+
            '</div>'
          :'<span class="place-complet">Complet</span>')+
      '</div>'+
    '</div>';
  }).join("");

  document.getElementById("event-modal-body").innerHTML=
    imgHtml+
    '<div class="ev-detail-badge '+(CAT_CSS[ev.cat]||"bg-concert")+'">'+ev.cat.charAt(0).toUpperCase()+ev.cat.slice(1)+'</div>'+
    '<h2 class="ev-detail-title">'+ev.name+'</h2>'+
    '<div class="ev-detail-meta">'+
      '<span>📅 '+fmtDate(ev.date)+' à '+ev.time+'</span>'+
      '<span>📍 '+ev.venue+', '+ev.city+'</span>'+
    '</div>'+
    '<p class="ev-detail-desc">'+ev.desc+'</p>'+
    '<div class="places-title">🎟 Choisissez vos places</div>'+
    '<div class="ticket-limit-notice">⚠️ Achat limité à 4 tickets par acheteur</div>'+
    placesHtml+
    '<button class="btn-add-cart" onclick="addToCart('+id+')">Ajouter au panier 🛒</button>';

  document.getElementById("event-overlay").classList.add("open");
}

function changeQty(id,placeId,delta){
  if(!activeModal||activeModal.id!==id) return;
  var ev=events.find(function(e){ return e.id===id; });
  var place=ev.places.find(function(p){ return p.id===placeId; });
  var avail=place.total-place.sold;

  /* Total déjà sélectionné dans la modal */
  var totalSelected=Object.values(activeModal.qty).reduce(function(s,v){ return s+v; },0);

  var q=(activeModal.qty[placeId]||0)+delta;
  /* Limite 4 tickets par acheteur */
  if(delta>0 && totalSelected>=MAX_TICKETS){
    showToast("Maximum "+MAX_TICKETS+" tickets par acheteur.","err");
    return;
  }
  q=Math.max(0,Math.min(q,avail));
  activeModal.qty[placeId]=q;
  var el=document.getElementById("qn-"+id+"-"+placeId);
  if(el) el.textContent=q;
}

function addToCart(id){
  var ev=events.find(function(e){ return e.id===id; });
  var added=0;

  /* Vérifie limite panier global */
  var currentTotal=cartTotalQty();
  var newTotal=currentTotal;
  ev.places.forEach(function(p){
    newTotal+=(activeModal&&activeModal.qty[p.id])||0;
  });
  if(newTotal>MAX_TICKETS){
    showToast("Maximum "+MAX_TICKETS+" tickets au total par acheteur.","err");
    return;
  }

  ev.places.forEach(function(p){
    var q=(activeModal&&activeModal.qty[p.id])||0;
    if(q<=0) return;
    var ex=cart.find(function(c){ return c.eventId===id&&c.placeId===p.id; });
    if(ex){ ex.qty+=q; }
    else{ cart.push({eventId:id,eventName:ev.name,placeId:p.id,placeLabel:p.label,price:p.price,qty:q}); }
    added+=q;
  });
  if(!added){ showToast("Sélectionnez au moins une place.","err"); return; }
  updateBadge();
  closeEventModal();
  showToast(added+" billet(s) ajouté(s) au panier ✓","ok");
}

function closeEventModal(){
  document.getElementById("event-overlay").classList.remove("open");
}

/* ══ PANIER ══ */
function updateBadge(){
  document.getElementById("cart-badge").textContent=cart.reduce(function(s,c){ return s+c.qty; },0);
}
function openCart(){
  renderCart();
  document.getElementById("cart-overlay").classList.add("open");
}
function closeCart(){
  document.getElementById("cart-overlay").classList.remove("open");
}
function renderCart(){
  var list=document.getElementById("cart-list");
  if(!cart.length){
    list.innerHTML='<div class="cart-empty">🛒 Votre panier est vide.</div>';
    document.getElementById("cart-total").textContent="0,00 €";
    return;
  }
  list.innerHTML=cart.map(function(c,i){
    return '<div class="cart-item">'+
      '<div class="ci-info">'+
        '<div class="ci-name">'+c.eventName+'</div>'+
        '<div class="ci-sub">'+c.placeLabel+' × '+c.qty+' — '+c.price.toFixed(2)+' € / billet</div>'+
      '</div>'+
      '<div class="ci-price">'+(c.price*c.qty).toFixed(2).replace(".",",")+' €</div>'+
      '<button class="ci-del" onclick="removeFromCart('+i+')">🗑</button>'+
    '</div>';
  }).join("");
  var total=cart.reduce(function(s,c){ return s+c.price*c.qty; },0);
  document.getElementById("cart-total").textContent=total.toFixed(2).replace(".",",")+' €';
}
function removeFromCart(i){
  cart.splice(i,1);
  updateBadge();
  renderCart();
}

/* ══ COMMANDER ══ */
async function commander(){
  if(!cart.length){ showToast("Votre panier est vide.","err"); return; }
  var fn=document.getElementById("cf-fn").value.trim();
  var ln=document.getElementById("cf-ln").value.trim();
  var email=document.getElementById("cf-email").value.trim();
  var phone=document.getElementById("cf-phone").value.trim();
  var payment=document.getElementById("cf-payment").value;
  if(!fn||!ln||!email){ showToast("Remplissez les champs obligatoires (*).","err"); return; }
  if(!payment){ showToast("Choisissez un moyen de paiement.","err"); return; }

  var total=cart.reduce(function(s,c){ return s+c.price*c.qty; },0);
  var lignes=cart.map(function(c){
    return c.eventName+" | "+c.placeLabel+" x"+c.qty+" = "+(c.price*c.qty).toFixed(2)+" EUR";
  }).join(" / ");

  /* ── Formspree ── */
  try{
    var payload={
      "Nom"             : fn+" "+ln,
      "Email"           : email,
      "Telephone"       : phone||"—",
      "Moyen_paiement"  : payment,
      "Commande"        : lignes,
      "Total"           : total.toFixed(2)+" EUR",
      "_subject"        : "Nouvelle commande TicketZone — "+fn+" "+ln
    };
    await fetch(FORMSPREE_URL,{
      method:"POST",
      body:JSON.stringify(payload),
      headers:{"Content-Type":"application/json","Accept":"application/json"}
    });
  }catch(e){ console.warn("Formspree:",e); }

  /* ── Stocks ── */
  cart.forEach(function(c){
    var ev=events.find(function(e){ return e.id===c.eventId; });
    if(!ev) return;
    var pl=ev.places.find(function(p){ return p.id===c.placeId; });
    if(pl) pl.sold=Math.min(pl.total,pl.sold+c.qty);
  });

  cart=[];
  updateBadge();
  closeCart();
  showToast("Commande envoyée ! Vérifiez votre messagerie mail vous recevrez l'addresse pour effectuer le paiement 📧","ok");
}

/* ══ INIT ══ */
document.addEventListener("DOMContentLoaded",function(){
  document.getElementById("btn-close-event").addEventListener("click",closeEventModal);
  document.getElementById("event-overlay").addEventListener("click",function(e){ if(e.target===this) closeEventModal(); });
  document.getElementById("btn-close-cart").addEventListener("click",closeCart);
  document.getElementById("cart-overlay").addEventListener("click",function(e){ if(e.target===this) closeCart(); });
  document.getElementById("btn-commander").addEventListener("click",commander);
  initParticles();
  renderEvents(events);
});

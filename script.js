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
  desc:"Le phénomène mondial BTS débarque à Paris pour une date exceptionnelle.",
  places:[
    {id:"carre_or",label:"Carré Or",price:260.00,total:4,sold:0},
    {id:"cat1",label:"Catégorie 1",price:166.50,total:3,sold:0},
    {id:"cat3",label:"Catégorie 3",price:122.50,total:1,sold:0},
    {id:"cat4",label:"Catégorie 4",price:100.50,total:1,sold:0},
    {id:"VIP1",label:"VIP1",price:550.00,total:2,sold:0}
  ]
},

{
  id:2,
  name:"BTS – World Tour : Live in Paris",
  cat:"concert",
  date:"2026-07-18",
  time:"20:00",
  venue:"Stade de France",
  city:"Saint-Denis",
  photo:"https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
  desc:"Deuxième concert exceptionnel de BTS au Stade de France.",
  places:[
    {id:"carre_or",label:"Carré Or",price:260.00,total:4,sold:0},
    {id:"cat1",label:"Catégorie 1",price:166.50,total:3,sold:0},
    {id:"cat3",label:"Catégorie 3",price:122.50,total:1,sold:0},
    {id:"cat4",label:"Catégorie 4",price:100.50,total:1,sold:0},
    {id:"VIP1",label:"VIP1",price:550.00,total:2,sold:0}
  ]
},

{
  id:3,
  name:"The Weeknd – Hurry Up Forever Tour",
  cat:"concert",
  date:"2026-07-08",
  time:"20:00",
  venue:"Stade de France",
  city:"Saint-Denis",
  photo:"https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80",
  desc:"Show futuriste et immersif du Weeknd au Stade de France.",
  places:[
    {id:"carre_or",label:"Carré Or",price:234.00,total:4,sold:0},
    {id:"pelouse_or",label:"Pelouse Or",price:184.00,total:2,sold:0},
    {id:"pelouse",label:"Pelouse",price:151.00,total:4,sold:0},
    {id:"cat1",label:"Catégorie 1",price:179.00,total:4,sold:0},
    {id:"cat2",label:"Catégorie 2",price:139.00,total:4,sold:0},
    {id:"cat3",label:"Catégorie 3",price:96.00,total:4,sold:0}
  ]
},

{
  id:4,
  name:"The Weeknd – Hurry Up Forever Tour",
  cat:"concert",
  date:"2026-07-10",
  time:"20:00",
  venue:"Stade de France",
  city:"Saint-Denis",
  photo:"https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80",
  desc:"Deuxième date parisienne de The Weeknd.",
  places:[
    {id:"carre_or",label:"Carré Or",price:234.00,total:4,sold:0},
    {id:"pelouse_or",label:"Pelouse Or",price:184.00,total:2,sold:0},
    {id:"pelouse",label:"Pelouse",price:151.00,total:4,sold:0},
    {id:"cat1",label:"Catégorie 1",price:179.00,total:4,sold:0},
    {id:"cat2",label:"Catégorie 2",price:139.00,total:4,sold:0},
    {id:"cat3",label:"Catégorie 3",price:96.00,total:4,sold:0}
  ]
},

{
  id:5,
  name:"The Weeknd – Hurry Up Forever Tour",
  cat:"concert",
  date:"2026-07-11",
  time:"20:00",
  venue:"Stade de France",
  city:"Saint-Denis",
  photo:"https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80",
  desc:"Troisième soirée du Hurry Up Forever Tour.",
  places:[
    {id:"carre_or",label:"Carré Or",price:234.00,total:4,sold:0},
    {id:"pelouse_or",label:"Pelouse Or",price:184.00,total:2,sold:0},
    {id:"pelouse",label:"Pelouse",price:151.00,total:4,sold:0},
    {id:"cat1",label:"Catégorie 1",price:179.00,total:4,sold:0},
    {id:"cat2",label:"Catégorie 2",price:139.00,total:4,sold:0},
    {id:"cat3",label:"Catégorie 3",price:96.00,total:4,sold:0}
  ]
},

{
  id:6,
  name:"The Weeknd – Hurry Up Forever Tour",
  cat:"concert",
  date:"2026-07-12",
  time:"20:00",
  venue:"Stade de France",
  city:"Saint-Denis",
  photo:"https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80",
  desc:"Dernière date française du Weeknd.",
  places:[
    {id:"carre_or",label:"Carré Or",price:234.00,total:4,sold:0},
    {id:"pelouse_or",label:"Pelouse Or",price:184.00,total:2,sold:0},
    {id:"pelouse",label:"Pelouse",price:151.00,total:4,sold:0},
    {id:"cat1",label:"Catégorie 1",price:179.00,total:4,sold:0},
    {id:"cat2",label:"Catégorie 2",price:139.00,total:4,sold:0},
    {id:"cat3",label:"Catégorie 3",price:96.00,total:4,sold:0}
  ]
},

{
  id:7,
  name:"David Guetta – The Ultimate Monolith Show",
  cat:"concert",
  date:"2026-06-11",
  time:"19:00",
  venue:"Stade de France",
  city:"Saint-Denis",
  photo:"https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?w=800&q=80",
  desc:"Immense show électro de David Guetta au Stade de France.",
  places:[
    {id:"carre_or",label:"Carré Or",price:110.00,total:4,sold:0},
    {id:"fosse",label:"Fosse",price:75.00,total:4,sold:0},
    {id:"cat1",label:"Catégorie 1",price:78.00,total:4,sold:0},
    {id:"cat2",label:"Catégorie 2",price:67.00,total:4,sold:0},
    {id:"cat3",label:"Catégorie 3",price:62.00,total:4,sold:0},
    {id:"cat4",label:"Catégorie 4",price:49.00,total:4,sold:0}
  ]
},

{
  id:8,
  name:"David Guetta – The Ultimate Monolith Show",
  cat:"concert",
  date:"2026-06-12",
  time:"19:00",
  venue:"Stade de France",
  city:"Saint-Denis",
  photo:"https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?w=800&q=80",
  desc:"Deuxième show Monolith à Paris.",
  places:[
    {id:"carre_or",label:"Carré Or",price:110.00,total:4,sold:0},
    {id:"fosse",label:"Fosse",price:75.00,total:4,sold:0},
    {id:"cat1",label:"Catégorie 1",price:78.00,total:4,sold:0},
    {id:"cat2",label:"Catégorie 2",price:67.00,total:4,sold:0},
    {id:"cat3",label:"Catégorie 3",price:62.00,total:4,sold:0},
    {id:"cat4",label:"Catégorie 4",price:49.00,total:4,sold:0}
  ]
},

{
  id:9,
  name:"David Guetta – The Ultimate Monolith Show",
  cat:"concert",
  date:"2026-06-13",
  time:"19:00",
  venue:"Stade de France",
  city:"Saint-Denis",
  photo:"https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?w=800&q=80",
  desc:"Dernière date française du Monolith Show.",
  places:[
    {id:"carre_or",label:"Carré Or",price:110.00,total:4,sold:0},
    {id:"fosse",label:"Fosse",price:75.00,total:4,sold:0},
    {id:"cat1",label:"Catégorie 1",price:78.00,total:4,sold:0},
    {id:"cat2",label:"Catégorie 2",price:67.00,total:4,sold:0},
    {id:"cat3",label:"Catégorie 3",price:62.00,total:4,sold:0},
    {id:"cat4",label:"Catégorie 4",price:49.00,total:4,sold:0}
  ]
},

   {
  id:10,
  name:"Bad Bunny – DeBÍ TiRAR MáS FOToS World Tour",
  cat:"concert",
  date:"2026-07-04",
  time:"20:00",
  venue:"Paris La Défense Arena",
  city:"Nanterre",
  photo:"https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800&q=80",
  desc:"La superstar mondiale Bad Bunny débarque à Paris pour un show exceptionnel.",
  places:[
    {id:"carre_or_al",label:"Carré Or Allée",price:202.70,total:4,sold:0},
    {id:"cat_or",label:"Catégorie Or",price:180.70,total:4,sold:0},
    {id:"cat1",label:"Catégorie 1",price:136.70,total:4,sold:0},
    {id:"cat2_al",label:"Catégorie 2 Allée",price:131.20,total:2,sold:0},
    {id:"cat3",label:"Catégorie 3",price:92.70,total:4,sold:0},
    {id:"fosse_or",label:"Fosse Or",price:180.70,total:4,sold:0},
    {id:"fosse",label:"Fosse Classique",price:109.20,total:4,sold:0}
  ]
},

{
  id:11,
  name:"Bad Bunny – DeBÍ TiRAR MáS FOToS World Tour",
  cat:"concert",
  date:"2026-07-05",
  time:"20:00",
  venue:"Paris La Défense Arena",
  city:"Nanterre",
  photo:"https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800&q=80",
  desc:"Deuxième concert parisien de Bad Bunny.",
  places:[
    {id:"carre_or_al",label:"Carré Or Allée",price:202.70,total:4,sold:0},
    {id:"cat_or",label:"Catégorie Or",price:180.70,total:4,sold:0},
    {id:"cat1",label:"Catégorie 1",price:136.70,total:4,sold:0},
    {id:"cat2_al",label:"Catégorie 2 Allée",price:131.20,total:2,sold:0},
    {id:"cat3",label:"Catégorie 3",price:92.70,total:4,sold:0},
    {id:"fosse_or",label:"Fosse Or",price:180.70,total:4,sold:0},
    {id:"fosse",label:"Fosse Classique",price:109.20,total:4,sold:0}
  ]
},

{
  id:12,
  name:"Céline Dion – Courage World Tour",
  cat:"concert",
  date:"2026-09-12",
  time:"19:30",
  venue:"Paris La Défense Arena",
  city:"Nanterre",
  photo:"https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80",
  desc:"Le grand retour de Céline Dion à Paris.",
  places:[
    {id:"gradin_cat4",label:"Gradin Cat. 4",price:89.50,total:4,sold:0},
    {id:"gradin_cat3",label:"Gradin Cat. 3",price:111.50,total:4,sold:0},
    {id:"gradin_cat2",label:"Gradin Cat. 2",price:133.50,total:4,sold:0},
    {id:"gradin_cat1",label:"Gradin Cat. 1",price:199.50,total:4,sold:0},
    {id:"gradin_or",label:"Gradin Cat. Or",price:232.50,total:3,sold:0},
    {id:"part_cat2",label:"Parterre Cat. 2",price:133.50,total:4,sold:0},
    {id:"part_cat1",label:"Parterre Cat. 1",price:199.50,total:4,sold:0},
    {id:"trib_or",label:"Tribune Or",price:232.50,total:3,sold:0},
    {id:"part_diam",label:"Parterre Diamant",price:276.50,total:4,sold:0},
    {id:"part_pres",label:"Parterre Prestige ⭐",price:298.50,total:4,sold:0}
  ]
},

{
  id:13,
  name:"Céline Dion – Courage World Tour",
  cat:"concert",
  date:"2026-10-17",
  time:"19:30",
  venue:"Paris La Défense Arena",
  city:"Nanterre",
  photo:"https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80",
  desc:"Deuxième date exceptionnelle de Céline Dion.",
  places:[
    {id:"gradin_cat4",label:"Gradin Cat. 4",price:89.50,total:4,sold:0},
    {id:"gradin_cat3",label:"Gradin Cat. 3",price:111.50,total:4,sold:0},
    {id:"gradin_cat2",label:"Gradin Cat. 2",price:133.50,total:4,sold:0},
    {id:"gradin_cat1",label:"Gradin Cat. 1",price:199.50,total:4,sold:0},
    {id:"gradin_or",label:"Gradin Cat. Or",price:232.50,total:3,sold:0},
    {id:"part_cat2",label:"Parterre Cat. 2",price:133.50,total:4,sold:0},
    {id:"part_cat1",label:"Parterre Cat. 1",price:199.50,total:4,sold:0},
    {id:"trib_or",label:"Tribune Or",price:232.50,total:3,sold:0},
    {id:"part_diam",label:"Parterre Diamant",price:276.50,total:4,sold:0},
    {id:"part_pres",label:"Parterre Prestige ⭐",price:298.50,total:4,sold:0}
  ]
},

{
  id:14,
  name:"Olivia Dean – The Art of Loving Live",
  cat:"concert",
  date:"2026-06-17",
  time:"19:30",
  venue:"Accor Arena",
  city:"Paris",
  photo:"https://images.unsplash.com/photo-1571266028243-d220c6a3a0f2?w=800&q=80",
  desc:"Soirée pop et soul avec Olivia Dean à Paris.",
  places:[
    {id:"carre_or",label:"Carré Or",price:96.20,total:4,sold:0},
    {id:"cat1",label:"Catégorie 1",price:85.20,total:4,sold:0},
    {id:"fosse",label:"Fosse",price:74.20,total:4,sold:0},
    {id:"cat2",label:"Catégorie 2",price:63.20,total:4,sold:0},
    {id:"vip1",label:"VIP 1",price:163.00,total:2,sold:0},
    {id:"vip2",label:"VIP 2",price:150.00,total:1,sold:0}
  ]
},

{
  id:15,
  name:"System of a Down – Stade de France 2026",
  cat:"concert",
  date:"2026-07-02",
  time:"20:00",
  venue:"Stade de France",
  city:"Saint-Denis",
  photo:"https://images.unsplash.com/photo-1619983081563-430f63602796?w=800&q=80",
  desc:"Le groupe légendaire de metal alternatif revient à Paris.",
  places:[
    {id:"carre_or",label:"Carré Or",price:209.00,total:4,sold:0},
    {id:"cat1",label:"Catégorie 1",price:139.00,total:4,sold:0},
    {id:"cat2",label:"Catégorie 2",price:95.00,total:4,sold:0},
    {id:"pelouse_or",label:"Pelouse Or",price:183.00,total:4,sold:0},
    {id:"pelouse",label:"Pelouse",price:95.00,total:4,sold:0}
  ]
},

{
  id:16,
  name:"System of a Down – Stade de France 2026",
  cat:"concert",
  date:"2026-07-04",
  time:"20:00",
  venue:"Stade de France",
  city:"Saint-Denis",
  photo:"https://images.unsplash.com/photo-1619983081563-430f63602796?w=800&q=80",
  desc:"Deuxième concert historique de System of a Down.",
  places:[
    {id:"carre_or",label:"Carré Or",price:209.00,total:4,sold:0},
    {id:"cat1",label:"Catégorie 1",price:139.00,total:4,sold:0},
    {id:"cat2",label:"Catégorie 2",price:95.00,total:4,sold:0},
    {id:"pelouse_or",label:"Pelouse Or",price:183.00,total:4,sold:0},
    {id:"pelouse",label:"Pelouse",price:95.00,total:4,sold:0}
  ]
},

{
  id:17,
  name:"The Strokes – Reality Awaits Paris 2026",
  cat:"concert",
  date:"2026-10-22",
  time:"19:30",
  venue:"Accor Arena",
  city:"Paris",
  photo:"https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&q=80",
  desc:"Le groupe culte new-yorkais revient enfin à Paris.",
  places:[
    {id:"carre_or",label:"Carré Or",price:117.00,total:4,sold:0},
    {id:"cat1",label:"Catégorie 1",price:95.00,total:5,sold:0},
    {id:"fosse",label:"Fosse",price:89.50,total:5,sold:0},
    {id:"cat2",label:"Catégorie 2",price:73.00,total:5,sold:0}
  ]
},

{
  id:18,
  name:"Imagine Dragons – Loom World Tour",
  cat:"concert",
  date:"2026-06-28",
  time:"20:00",
  venue:"Groupama Stadium",
  city:"Lyon",
  photo:"https://images.unsplash.com/photo-1501612780327-45045538702b?w=800&q=80",
  desc:"Imagine Dragons en tournée mondiale avec le LOOM Tour.",
  places:[
    {id:"gold",label:"Carré Gold",price:189.00,total:4,sold:0},
    {id:"cat1",label:"Catégorie 1",price:139.00,total:4,sold:0},
    {id:"cat2",label:"Catégorie 2",price:109.00,total:4,sold:0},
    {id:"fosse",label:"Fosse",price:99.00,total:4,sold:0},
    {id:"pelouse_or",label:"Pelouse Or",price:149.00,total:2,sold:0}
  ]
},

{
  id:19,
  name:"Ed Sheeran – Mathematics Tour",
  cat:"concert",
  date:"2026-06-21",
  time:"20:00",
  venue:"Orange Vélodrome",
  city:"Marseille",
  photo:"https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&q=80",
  desc:"Ed Sheeran revient en France pour une soirée exceptionnelle.",
  places:[
    {id:"gold",label:"Carré Gold",price:210.00,total:4,sold:0},
    {id:"cat1",label:"Catégorie 1",price:159.00,total:4,sold:0},
    {id:"cat2",label:"Catégorie 2",price:119.00,total:4,sold:0},
    {id:"pelouse",label:"Pelouse",price:89.00,total:4,sold:0},
    {id:"vip",label:"VIP",price:399.00,total:2,sold:0}
  ]
},

{
  id:20,
  name:"Coldplay – Music of the Spheres",
  cat:"concert",
  date:"2026-06-20",
  time:"20:00",
  venue:"Stade de France",
  city:"Saint-Denis",
  photo:"https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&q=80",
  desc:"Coldplay revient en France avec un immense show visuel.",
  places:[
    {id:"carre_or",label:"Carré Or",price:250.00,total:4,sold:0},
    {id:"cat1",label:"Catégorie 1",price:180.00,total:4,sold:0},
    {id:"cat2",label:"Catégorie 2",price:135.00,total:4,sold:0},
    {id:"pelouse_or",label:"Pelouse Or",price:170.00,total:2,sold:0},
    {id:"pelouse",label:"Pelouse",price:95.00,total:4,sold:0}
  ]
},

   {
  id:21,
  name:"Damso – BĒYĀH TOUR",
  cat:"concert",
  date:"2026-05-28",
  time:"20:00",
  venue:"Paris La Défense Arena",
  city:"Nanterre",
  photo:"https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&q=80",
  desc:"Première date parisienne du BĒYĀH TOUR de Damso.",
  places:[
    {id:"diam",label:"Catégorie Diamant",price:109.00,total:4,sold:0},
    {id:"or",label:"Catégorie Or",price:95.00,total:4,sold:0},
    {id:"cat1",label:"Catégorie 1",price:80.00,total:4,sold:0},
    {id:"cat2",label:"Catégorie 2",price:69.00,total:4,sold:0},
    {id:"fosse_ear",label:"Fosse Early",price:70.00,total:4,sold:0},
    {id:"fosse",label:"Fosse Classique",price:60.00,total:4,sold:0}
  ]
},

{
  id:22,
  name:"Damso – BĒYĀH TOUR",
  cat:"concert",
  date:"2026-05-29",
  time:"20:00",
  venue:"Paris La Défense Arena",
  city:"Nanterre",
  photo:"https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&q=80",
  desc:"Deuxième date exceptionnelle de Damso à Paris.",
  places:[
    {id:"diam",label:"Catégorie Diamant",price:109.00,total:4,sold:0},
    {id:"or",label:"Catégorie Or",price:95.00,total:4,sold:0},
    {id:"cat1",label:"Catégorie 1",price:80.00,total:4,sold:0},
    {id:"cat2",label:"Catégorie 2",price:69.00,total:4,sold:0},
    {id:"fosse_ear",label:"Fosse Early",price:70.00,total:4,sold:0},
    {id:"fosse",label:"Fosse Classique",price:60.00,total:4,sold:0}
  ]
},

{
  id:23,
  name:"Damso – BĒYĀH TOUR",
  cat:"concert",
  date:"2026-05-30",
  time:"20:00",
  venue:"Paris La Défense Arena",
  city:"Nanterre",
  photo:"https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&q=80",
  desc:"Troisième soirée du BĒYĀH TOUR.",
  places:[
    {id:"diam",label:"Catégorie Diamant",price:109.00,total:4,sold:0},
    {id:"or",label:"Catégorie Or",price:95.00,total:4,sold:0},
    {id:"cat1",label:"Catégorie 1",price:80.00,total:4,sold:0},
    {id:"cat2",label:"Catégorie 2",price:69.00,total:4,sold:0},
    {id:"fosse_ear",label:"Fosse Early",price:70.00,total:4,sold:0},
    {id:"fosse",label:"Fosse Classique",price:60.00,total:4,sold:0}
  ]
},

{
  id:24,
  name:"Damso – BĒYĀH TOUR",
  cat:"concert",
  date:"2026-05-31",
  time:"20:00",
  venue:"Paris La Défense Arena",
  city:"Nanterre",
  photo:"https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&q=80",
  desc:"Dernière date parisienne du BĒYĀH TOUR.",
  places:[
    {id:"diam",label:"Catégorie Diamant",price:109.00,total:4,sold:0},
    {id:"or",label:"Catégorie Or",price:95.00,total:4,sold:0},
    {id:"cat1",label:"Catégorie 1",price:80.00,total:4,sold:0},
    {id:"cat2",label:"Catégorie 2",price:69.00,total:4,sold:0},
    {id:"fosse_ear",label:"Fosse Early",price:70.00,total:4,sold:0},
    {id:"fosse",label:"Fosse Classique",price:60.00,total:4,sold:0}
  ]
},

{
  id:25,
  name:"Aya Nakamura – Stade de France 2026",
  cat:"concert",
  date:"2026-05-29",
  time:"20:00",
  venue:"Stade de France",
  city:"Saint-Denis",
  photo:"https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&q=80",
  desc:"Premier concert historique d’Aya Nakamura au Stade de France.",
  places:[
    {id:"carre_or_al",label:"Carré Or Allée",price:155.50,total:4,sold:0},
    {id:"cat1_al",label:"Catégorie 1 Allée",price:133.50,total:4,sold:0},
    {id:"cat1",label:"Catégorie 1",price:122.50,total:4,sold:0},
    {id:"cat2",label:"Catégorie 2",price:99.40,total:4,sold:0},
    {id:"cat3",label:"Catégorie 3",price:89.50,total:4,sold:0},
    {id:"pelouse_or",label:"Pelouse Or",price:99.40,total:4,sold:0},
    {id:"pelouse",label:"Pelouse",price:64.20,total:1,sold:0},
    {id:"cat4",label:"Catégorie 4",price:67.50,total:3,sold:0}
  ]
},

{
  id:26,
  name:"Aya Nakamura – Stade de France 2026",
  cat:"concert",
  date:"2026-05-30",
  time:"20:00",
  venue:"Stade de France",
  city:"Saint-Denis",
  photo:"https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&q=80",
  desc:"Deuxième date événement d’Aya Nakamura.",
  places:[
    {id:"carre_or_al",label:"Carré Or Allée",price:155.50,total:4,sold:0},
    {id:"cat1_al",label:"Catégorie 1 Allée",price:133.50,total:4,sold:0},
    {id:"cat1",label:"Catégorie 1",price:122.50,total:4,sold:0},
    {id:"cat2",label:"Catégorie 2",price:99.40,total:4,sold:0},
    {id:"cat3",label:"Catégorie 3",price:89.50,total:4,sold:0},
    {id:"pelouse_or",label:"Pelouse Or",price:99.40,total:4,sold:0},
    {id:"pelouse",label:"Pelouse",price:64.20,total:1,sold:0},
    {id:"cat4",label:"Catégorie 4",price:67.50,total:3,sold:0}
  ]
},

{
  id:27,
  name:"Aya Nakamura – Stade de France 2026",
  cat:"concert",
  date:"2026-05-31",
  time:"20:00",
  venue:"Stade de France",
  city:"Saint-Denis",
  photo:"https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&q=80",
  desc:"Troisième concert d’Aya Nakamura au Stade de France.",
  places:[
    {id:"carre_or_al",label:"Carré Or Allée",price:155.50,total:4,sold:0},
    {id:"cat1_al",label:"Catégorie 1 Allée",price:133.50,total:4,sold:0},
    {id:"cat1",label:"Catégorie 1",price:122.50,total:4,sold:0},
    {id:"cat2",label:"Catégorie 2",price:99.40,total:4,sold:0},
    {id:"cat3",label:"Catégorie 3",price:89.50,total:4,sold:0},
    {id:"pelouse_or",label:"Pelouse Or",price:99.40,total:4,sold:0},
    {id:"pelouse",label:"Pelouse",price:64.20,total:1,sold:0},
    {id:"cat4",label:"Catégorie 4",price:67.50,total:3,sold:0}
  ]
},

{
  id:28,
  name:"Guns N’ Roses – World Tour 2026",
  cat:"concert",
  date:"2026-07-01",
  time:"20:00",
  venue:"Accor Arena",
  city:"Paris",
  photo:"https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
  desc:"Le mythique groupe de rock Guns N’ Roses revient à Paris.",
  places:[
    {id:"gold",label:"Carré Gold",price:189.00,total:4,sold:0},
    {id:"cat1",label:"Catégorie 1",price:149.00,total:4,sold:0},
    {id:"cat2",label:"Catégorie 2",price:109.00,total:4,sold:0},
    {id:"fosse",label:"Fosse",price:99.00,total:4,sold:0},
    {id:"vip",label:"VIP",price:349.00,total:2,sold:0}
  ]
},

{
  id:29,
  name:"Guns N’ Roses – World Tour 2026",
  cat:"concert",
  date:"2026-07-03",
  time:"20:00",
  venue:"Accor Arena",
  city:"Paris",
  photo:"https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
  desc:"Deuxième date parisienne du World Tour 2026.",
  places:[
    {id:"gold",label:"Carré Gold",price:189.00,total:4,sold:0},
    {id:"cat1",label:"Catégorie 1",price:149.00,total:4,sold:0},
    {id:"cat2",label:"Catégorie 2",price:109.00,total:4,sold:0},
    {id:"fosse",label:"Fosse",price:99.00,total:4,sold:0},
    {id:"vip",label:"VIP",price:349.00,total:2,sold:0}
  ]
},

{
  id:30,
  name:"Iron Maiden – Run For Your Lives Tour",
  cat:"concert",
  date:"2026-06-22",
  time:"20:00",
  venue:"Paris La Défense Arena",
  city:"Nanterre",
  photo:"https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&q=80",
  desc:"Iron Maiden revient en France avec une énorme production scénique.",
  places:[
    {id:"gold",label:"Carré Gold",price:165.00,total:4,sold:0},
    {id:"cat1",label:"Catégorie 1",price:129.00,total:4,sold:0},
    {id:"cat2",label:"Catégorie 2",price:95.00,total:4,sold:0},
    {id:"fosse",label:"Fosse",price:89.00,total:4,sold:0},
    {id:"vip",label:"VIP",price:299.00,total:2,sold:0}
  ]
},

   {
  id:31,
  name:"Metallica – M72 World Tour",
  cat:"concert",
  date:"2026-06-27",
  time:"20:00",
  venue:"Stade de France",
  city:"Saint-Denis",
  photo:"https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&q=80",
  desc:"Metallica débarque au Stade de France avec le spectaculaire M72 World Tour.",
  places:[
    {id:"gold",label:"Carré Gold",price:219.00,total:4,sold:0},
    {id:"cat1",label:"Catégorie 1",price:169.00,total:4,sold:0},
    {id:"cat2",label:"Catégorie 2",price:119.00,total:4,sold:0},
    {id:"fosse_or",label:"Fosse Or",price:189.00,total:4,sold:0},
    {id:"fosse",label:"Fosse",price:99.00,total:4,sold:0}
  ]
},

{
  id:32,
  name:"Metallica – M72 World Tour",
  cat:"concert",
  date:"2026-06-29",
  time:"20:00",
  venue:"Stade de France",
  city:"Saint-Denis",
  photo:"https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&q=80",
  desc:"Deuxième date du M72 World Tour à Paris.",
  places:[
    {id:"gold",label:"Carré Gold",price:219.00,total:4,sold:0},
    {id:"cat1",label:"Catégorie 1",price:169.00,total:4,sold:0},
    {id:"cat2",label:"Catégorie 2",price:119.00,total:4,sold:0},
    {id:"fosse_or",label:"Fosse Or",price:189.00,total:4,sold:0},
    {id:"fosse",label:"Fosse",price:99.00,total:4,sold:0}
  ]
},

{
  id:33,
  name:"Hans Zimmer Live",
  cat:"concert",
  date:"2026-11-15",
  time:"20:00",
  venue:"Accor Arena",
  city:"Paris",
  photo:"https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=800&q=80",
  desc:"Le célèbre compositeur Hans Zimmer revient avec un show orchestral monumental.",
  places:[
    {id:"vip",label:"VIP",price:320.00,total:2,sold:0},
    {id:"gold",label:"Carré Gold",price:210.00,total:4,sold:0},
    {id:"cat1",label:"Catégorie 1",price:159.00,total:4,sold:0},
    {id:"cat2",label:"Catégorie 2",price:119.00,total:4,sold:0},
    {id:"cat3",label:"Catégorie 3",price:89.00,total:4,sold:0}
  ]
},

{
  id:34,
  name:"Hans Zimmer Live",
  cat:"concert",
  date:"2026-11-16",
  time:"20:00",
  venue:"Accor Arena",
  city:"Paris",
  photo:"https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=800&q=80",
  desc:"Deuxième représentation parisienne de Hans Zimmer Live.",
  places:[
    {id:"vip",label:"VIP",price:320.00,total:2,sold:0},
    {id:"gold",label:"Carré Gold",price:210.00,total:4,sold:0},
    {id:"cat1",label:"Catégorie 1",price:159.00,total:4,sold:0},
    {id:"cat2",label:"Catégorie 2",price:119.00,total:4,sold:0},
    {id:"cat3",label:"Catégorie 3",price:89.00,total:4,sold:0}
  ]
},

{
  id:35,
  name:"Soprano – Freedom Tour",
  cat:"concert",
  date:"2026-10-10",
  time:"20:00",
  venue:"Orange Vélodrome",
  city:"Marseille",
  photo:"https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&q=80",
  desc:"Soprano revient à Marseille pour un concert événement.",
  places:[
    {id:"vip",label:"VIP",price:280.00,total:2,sold:0},
    {id:"gold",label:"Carré Gold",price:179.00,total:4,sold:0},
    {id:"cat1",label:"Catégorie 1",price:129.00,total:4,sold:0},
    {id:"cat2",label:"Catégorie 2",price:95.00,total:4,sold:0},
    {id:"pelouse",label:"Pelouse",price:69.00,total:4,sold:0}
  ]
},

{
  id:36,
  name:"DJ Snake – Final Show France",
  cat:"concert",
  date:"2026-09-19",
  time:"20:00",
  venue:"Stade de France",
  city:"Saint-Denis",
  photo:"https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?w=800&q=80",
  desc:"DJ Snake prépare un immense show électro au Stade de France.",
  places:[
    {id:"vip",label:"VIP",price:350.00,total:2,sold:0},
    {id:"gold",label:"Carré Gold",price:199.00,total:4,sold:0},
    {id:"cat1",label:"Catégorie 1",price:149.00,total:4,sold:0},
    {id:"cat2",label:"Catégorie 2",price:109.00,total:4,sold:0},
    {id:"fosse",label:"Fosse",price:89.00,total:4,sold:0}
  ]
},

{
  id:37,
  name:"Kendrick Lamar – Grand National Tour",
  cat:"concert",
  date:"2026-07-15",
  time:"20:00",
  venue:"Paris La Défense Arena",
  city:"Nanterre",
  photo:"https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&q=80",
  desc:"Kendrick Lamar en concert exceptionnel à Paris.",
  places:[
    {id:"vip",label:"VIP",price:390.00,total:2,sold:0},
    {id:"gold",label:"Carré Gold",price:220.00,total:4,sold:0},
    {id:"cat1",label:"Catégorie 1",price:169.00,total:4,sold:0},
    {id:"cat2",label:"Catégorie 2",price:119.00,total:4,sold:0},
    {id:"fosse",label:"Fosse",price:99.00,total:4,sold:0}
  ]
},

{
  id:38,
  name:"Kendrick Lamar – Grand National Tour",
  cat:"concert",
  date:"2026-07-16",
  time:"20:00",
  venue:"Paris La Défense Arena",
  city:"Nanterre",
  photo:"https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&q=80",
  desc:"Deuxième date du Grand National Tour.",
  places:[
    {id:"vip",label:"VIP",price:390.00,total:2,sold:0},
    {id:"gold",label:"Carré Gold",price:220.00,total:4,sold:0},
    {id:"cat1",label:"Catégorie 1",price:169.00,total:4,sold:0},
    {id:"cat2",label:"Catégorie 2",price:119.00,total:4,sold:0},
    {id:"fosse",label:"Fosse",price:99.00,total:4,sold:0}
  ]
},

{
  id:39,
  name:"Lana Del Rey – Paris 2026",
  cat:"concert",
  date:"2026-09-27",
  time:"20:00",
  venue:"Accor Arena",
  city:"Paris",
  photo:"https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80",
  desc:"Lana Del Rey revient à Paris avec une tournée très attendue.",
  places:[
    {id:"vip",label:"VIP",price:340.00,total:2,sold:0},
    {id:"gold",label:"Carré Gold",price:210.00,total:4,sold:0},
    {id:"cat1",label:"Catégorie 1",price:159.00,total:4,sold:0},
    {id:"cat2",label:"Catégorie 2",price:119.00,total:4,sold:0},
    {id:"cat3",label:"Catégorie 3",price:89.00,total:4,sold:0}
  ]
},

{
  id:40,
  name:"Travis Scott – Circus Maximus Tour",
  cat:"concert",
  date:"2026-08-02",
  time:"20:00",
  venue:"Stade de France",
  city:"Saint-Denis",
  photo:"https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&q=80",
  desc:"Travis Scott prépare un énorme show au Stade de France.",
  places:[
    {id:"vip",label:"VIP",price:450.00,total:2,sold:0},
    {id:"gold",label:"Carré Gold",price:260.00,total:4,sold:0},
    {id:"cat1",label:"Catégorie 1",price:189.00,total:4,sold:0},
    {id:"cat2",label:"Catégorie 2",price:139.00,total:4,sold:0},
    {id:"fosse",label:"Fosse",price:109.00,total:4,sold:0}
  ]
},

{
  id:41,
  name:"ENHYPEN – BLOOD SAGA",
  cat:"concert",
  date:"2027-02-27",
  time:"20:00",
  venue:"Paris La Défense Arena",
  city:"Nanterre",
  photo:"https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
  desc:"Le groupe sud-coréen ENHYPEN présente BLOOD SAGA à Paris La Défense Arena.",
  places:[
    {id:"vip",label:"VIP",price:299.00,total:2,sold:0},
    {id:"gold",label:"Carré Or",price:199.00,total:4,sold:0},
    {id:"cat1",label:"Catégorie 1",price:149.00,total:4,sold:0},
    {id:"cat2",label:"Catégorie 2",price:109.00,total:4,sold:0},
    {id:"cat3",label:"Catégorie 3",price:79.00,total:4,sold:0}
  ]
},

{
  id:42,
  name:"Five Finger Death Punch",
  cat:"concert",
  date:"2027-02-10",
  time:"20:00",
  venue:"Accor Arena",
  city:"Paris",
  photo:"https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&q=80",
  desc:"Le groupe américain de metal Five Finger Death Punch en concert à Paris.",
  places:[
    {id:"vip",label:"VIP",price:249.00,total:2,sold:0},
    {id:"gold",label:"Carré Or",price:149.00,total:4,sold:0},
    {id:"cat1",label:"Catégorie 1",price:109.00,total:4,sold:0},
    {id:"cat2",label:"Catégorie 2",price:89.00,total:4,sold:0},
    {id:"fosse",label:"Fosse",price:79.00,total:4,sold:0}
  ]
},

{
  id:43,
  name:"Sofiane Pamart – Stade de France",
  cat:"concert",
  date:"2027-04-17",
  time:"20:00",
  venue:"Stade de France",
  city:"Saint-Denis",
  photo:"https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=800&q=80",
  desc:"Premier pianiste français à se produire seul au Stade de France.",
  places:[
    {id:"vip",label:"VIP",price:150.00,total:2,sold:0},
    {id:"gold",label:"Carré Or",price:120.00,total:4,sold:0},
    {id:"cat1",label:"Catégorie 1",price:95.00,total:4,sold:0},
    {id:"cat2",label:"Catégorie 2",price:75.00,total:4,sold:0},
    {id:"cat3",label:"Catégorie 3",price:50.00,total:4,sold:0}
  ]
},

{
  id:44,
  name:"SCH – Stade de France",
  cat:"concert",
  date:"2027-04-24",
  time:"20:00",
  venue:"Stade de France",
  city:"Saint-Denis",
  photo:"https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&q=80",
  desc:"Concert événement de SCH au Stade de France.",
  places:[
    {id:"diamant",label:"Catégorie Diamant",price:165.00,total:4,sold:0},
    {id:"or",label:"Catégorie Or",price:139.00,total:4,sold:0},
    {id:"cat1",label:"Catégorie 1",price:109.00,total:4,sold:0},
    {id:"cat2",label:"Catégorie 2",price:89.00,total:4,sold:0},
    {id:"pelouse",label:"Pelouse",price:69.00,total:4,sold:0}
  ]
},

{
  id:45,
  name:"TIF – Accor Arena",
  cat:"concert",
  date:"2027-04-29",
  time:"20:00",
  venue:"Accor Arena",
  city:"Paris",
  photo:"https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&q=80",
  desc:"TIF en concert à l’Accor Arena pour une date exceptionnelle.",
  places:[
    {id:"vip",label:"VIP",price:199.00,total:2,sold:0},
    {id:"gold",label:"Carré Or",price:119.00,total:4,sold:0},
    {id:"cat1",label:"Catégorie 1",price:89.00,total:4,sold:0},
    {id:"cat2",label:"Catégorie 2",price:69.00,total:4,sold:0},
    {id:"fosse",label:"Fosse",price:59.00,total:4,sold:0}
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
  var list=events.slice();
  if(q)    list=list.filter(function(e){ return e.name.toLowerCase().indexOf(q)>-1||e.venue.toLowerCase().indexOf(q)>-1||e.city.toLowerCase().indexOf(q)>-1; });
  if(cat)  list=list.filter(function(e){ return e.cat===cat; });
  if(date) list=list.filter(function(e){ return e.date===date; });
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

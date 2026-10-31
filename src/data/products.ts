export type Option={id:string;cost:number;label?:string};
export type Product={id:string;name:string;category:string;desc:string;options:Option[];unit?:string};
export const products:Product[]=[
{id:"penta",name:"Penta Sky Shot",category:"Sky Effects",desc:"Choose from three available price options.",options:[{id:"penta-330",cost:330,label:"Option 1"},{id:"penta-400",cost:400,label:"Option 2"},{id:"penta-600",cost:600,label:"Option 3"}]},
{id:"12shot",name:"12 Shot",category:"Sky Effects",desc:"Twelve-shot aerial selection.",options:[{id:"12-390",cost:390,label:"Option 1"},{id:"12-450",cost:450,label:"Option 2"},{id:"12-500",cost:500,label:"Option 3"}]},
{id:"30shot",name:"30 Shot",category:"Sky Effects",desc:"Thirty-shot aerial selection.",options:[{id:"30-800",cost:800,label:"Option 1"},{id:"30-1000",cost:1000,label:"Option 2"}]},
{id:"smallbullet",name:"Small Bullet",category:"Aerial & Sound",desc:"10 pieces per box.",unit:"Per box · 10 pcs",options:[{id:"smallbullet-box",cost:100}]},
{id:"bigbullet",name:"Big Bullet",category:"Aerial & Sound",desc:"10 pieces per box.",unit:"Per box · 10 pcs",options:[{id:"bigbullet-box",cost:200}]},
{id:"naazi",name:"Naazi",category:"Ground Effects",desc:"10 pieces per box.",unit:"Per box · 10 pcs",options:[{id:"naazi-box",cost:360}]},
{id:"bigraavan",name:"Big Size Raavan",category:"Ground Effects",desc:"10 pieces per box.",unit:"Per box · 10 pcs",options:[{id:"bigraavan-box",cost:200}]},
{id:"chotaraavan",name:"100 Pc Chota Raavan",category:"Ground Effects",desc:"Pack of 100 pieces.",unit:"100 pcs",options:[{id:"chotaraavan-100",cost:700}]},
{id:"commando",name:"Commando",category:"Aerial & Sound",desc:"10 pieces per box.",unit:"Per box · 10 pcs",options:[{id:"commando-box",cost:290}]},
{id:"dynamite",name:"Dynamite",category:"Aerial & Sound",desc:"10 pieces per box.",unit:"Per box · 10 pcs",options:[{id:"dynamite-box",cost:260}]},
{id:"hydrosmall",name:"Hydro Small",category:"Ground Effects",desc:"10 pieces per box.",unit:"Per box · 10 pcs",options:[{id:"hydrosmall-box",cost:170}]},
{id:"hydrofoil",name:"Hydro Small Foil",category:"Ground Effects",desc:"10 pieces per box.",unit:"Per box · 10 pcs",options:[{id:"hydrofoil-box",cost:200}]},
{id:"anaarchota",name:"Anaar Chota",category:"Fountains",desc:"10 pieces per box; two price options.",unit:"Per box · 10 pcs",options:[{id:"anaarchota-240",cost:240,label:"Option 1"},{id:"anaarchota-370",cost:370,label:"Option 2"}]},
{id:"anaarmedium",name:"Medium Anaar",category:"Fountains",desc:"10 pieces per box.",unit:"Per box · 10 pcs",options:[{id:"anaarmedium-box",cost:520}]},
{id:"matkasmall",name:"Small Matka Anaar",category:"Fountains",desc:"10 pieces per box.",unit:"Per box · 10 pcs",options:[{id:"matkasmall-box",cost:1040}]},
{id:"matkabig",name:"Big Matka Anaar",category:"Fountains",desc:"4 pieces per box.",unit:"Per box · 4 pcs",options:[{id:"matkabig-box",cost:1400}]},
{id:"rocket",name:"Normal Rocket",category:"Sky Effects",desc:"10 pieces per box.",unit:"Per box · 10 pcs",options:[{id:"rocket-box",cost:200}]},
{id:"2soundrocket",name:"2 Sound Rocket",category:"Sky Effects",desc:"10 pieces per box; two price options.",unit:"Per box · 10 pcs",options:[{id:"2sound-350",cost:350,label:"Option 1"},{id:"2sound-390",cost:390,label:"Option 2"}]},
{id:"whistlingrocket",name:"Whistling Rocket",category:"Sky Effects",desc:"10 pieces per box.",unit:"Per box · 10 pcs",options:[{id:"whistling-box",cost:850}]},
{id:"murgachaap50",name:"Murga Chaap",category:"Aerial & Sound",desc:"Pack of 50 pieces.",unit:"50 pcs",options:[{id:"murga-50",cost:1300}]},
{id:"murgachaap25",name:"Murga Chaap",category:"Aerial & Sound",desc:"Pack of 25 pieces.",unit:"25 pcs",options:[{id:"murga-25",cost:700}]},
{id:"bijli",name:"Bijli",category:"Aerial & Sound",desc:"One packet; choose a price option.",unit:"Per packet",options:[{id:"bijli-100",cost:100,label:"Option 1"},{id:"bijli-130",cost:130,label:"Option 2"},{id:"bijli-250",cost:250,label:"Option 3"}]},
{id:"ladi1000",name:"1000 Ki Ladi",category:"Aerial & Sound",desc:"Choose from two available price options.",options:[{id:"ladi-590",cost:590,label:"Option 1"},{id:"ladi-980",cost:980,label:"Option 2"}]},
{id:"fuljhadi20",name:"Fuljhadi · 20 cm",category:"Sparklers",desc:"10 pieces per box.",unit:"Per box · 10 pcs",options:[{id:"ful20-box",cost:370}]},
{id:"fuljhadi10",name:"Fuljhadi · 10 cm",category:"Sparklers",desc:"Listed as 5 boxes; 10 pieces per box.",unit:"5 boxes · 10 pcs/box",options:[{id:"ful10-5boxes",cost:590}]},
{id:"fuljhadibig",name:"Big Fuljhadi · 50 cm",category:"Sparklers",desc:"5 pieces per box.",unit:"Per box · 5 pcs",options:[{id:"fulbig-box",cost:590}]}
];
export const categories=["All",...Array.from(new Set(products.map(p=>p.category)))];
export const listPrice=(cost:number)=>Math.round(cost*1.3/10)*10;
export const finalPrice=(cost:number)=>Math.round(listPrice(cost)*.9);
export const money=(n:number)=>new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(n);
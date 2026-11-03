export type Option={id:string;cost:number;label?:string};
export type Product={id:string;name:string;category:string;desc:string;options:Option[];unit?:string};
// cost stores the base price. The catalogue shows a 60% markup, then applies a 10% offer.
export const products:Product[]=[
{id:"penta",name:"Penta Sky Shot",category:"Sky Effects",desc:"Aerial effect.",options:[{id:"penta",cost:250}]},
{id:"anaarchota",name:"Anaar Chota",category:"Fountains",desc:"Ground fountain effect.",options:[{id:"anaarchota",cost:180}]},
{id:"bullet",name:"Bullet",category:"Aerial & Sound",desc:"Per box.",unit:"Per box",options:[{id:"bullet",cost:115}]},
{id:"fuljhadi",name:"Fuljhadi",category:"Sparklers",desc:"Pack of 5 boxes.",unit:"5 boxes",options:[{id:"fuljhadi-5",cost:450}]},
{id:"naazi",name:"Naazi",category:"Ground Effects",desc:"Available in two price options.",unit:"Per box",options:[{id:"naazi-270",cost:270,label:"Option 1"},{id:"naazi-250",cost:250,label:"Option 2"}]},
{id:"raavan",name:"Raavan",category:"Ground Effects",desc:"Ground effect.",options:[{id:"raavan",cost:150}]},
{id:"chotaraavan",name:"100 Pc Chota Raavan",category:"Ground Effects",desc:"Pack of 100 pieces.",unit:"100 pcs",options:[{id:"chotaraavan",cost:500}]},
{id:"badaanaar",name:"Bada Anaar",category:"Fountains",desc:"Large fountain effect.",options:[{id:"badaanaar",cost:400}]},
{id:"12shot",name:"12 Shot",category:"Sky Effects",desc:"12-shot aerial selection.",options:[{id:"12shot",cost:300}]},
{id:"commando",name:"Commando",category:"Aerial & Sound",desc:"Per box.",unit:"Per box",options:[{id:"commando",cost:220}]},
{id:"chakri",name:"Chakri",category:"Ground Effects",desc:"Spinning ground effect.",options:[{id:"chakri",cost:300}]},
{id:"badabullet",name:"Bada Bullet",category:"Aerial & Sound",desc:"Per box.",unit:"Per box",options:[{id:"badabullet",cost:150}]},
{id:"rocket",name:"Rocket",category:"Sky Effects",desc:"Price per box.",unit:"Per box",options:[{id:"rocket",cost:150}]},
{id:"2sound",name:"2 Sound",category:"Aerial & Sound",desc:"Sound effect.",options:[{id:"2sound",cost:250}]},
{id:"verybigfuljhadi",name:"Very Big Fuljhadi",category:"Sparklers",desc:"Price per box.",unit:"Per box",options:[{id:"verybigfuljhadi",cost:450}]},
{id:"cornationchakri",name:"Cornation Chakri",category:"Ground Effects",desc:"Price per box.",unit:"Per box",options:[{id:"cornationchakri",cost:200}]},
{id:"2soundrocket",name:"2 Sound Rocket",category:"Sky Effects",desc:"Aerial rocket selection.",options:[{id:"2soundrocket",cost:300}]},
{id:"whistlingrocket",name:"Whistling Rocket",category:"Sky Effects",desc:"Aerial rocket selection.",options:[{id:"whistlingrocket",cost:650}]},
{id:"bijli",name:"Bijli",category:"Aerial & Sound",desc:"Available in three price options.",options:[{id:"bijli-100",cost:100,label:"Option 1"},{id:"bijli-180",cost:180,label:"Option 2"},{id:"bijli-60",cost:60,label:"Option 3"}]},
{id:"ladi1000",name:"1000 Ki Ladi",category:"Aerial & Sound",desc:"Available in two price options.",options:[{id:"ladi-450",cost:450,label:"Option 1"},{id:"ladi-750",cost:750,label:"Option 2"}]},
{id:"matkaanaar",name:"Matka Anaar",category:"Fountains",desc:"Matka-style fountain.",options:[{id:"matkaanaar",cost:800}]},
{id:"fuljhadi20",name:"Fuljhadi · 20 cm",category:"Sparklers",desc:"10 pieces per box.",unit:"Per box · 10 pcs",options:[{id:"ful20-box",cost:370}]},
{id:"fuljhadi10",name:"Fuljhadi · 10 cm",category:"Sparklers",desc:"Listed as 5 boxes; 10 pieces per box.",unit:"5 boxes · 10 pcs/box",options:[{id:"ful10-5boxes",cost:590}]},
{id:"jurassicclassic",name:"Jurassic Classic",category:"Special Collection",desc:"Classic selection.",options:[{id:"jurassicclassic",cost:280}]}
];
export const categories=["All",...Array.from(new Set(products.map(p=>p.category)))];
export const listPrice=(cost:number)=>Math.round(cost*1.6);
export const finalPrice=(cost:number)=>Math.round(listPrice(cost)*.9);
export const money=(n:number)=>new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(n);
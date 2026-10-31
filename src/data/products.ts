export type Option={id:string;cost:number;label?:string};
export type Product={id:string;name:string;category:string;desc:string;options:Option[];unit?:string};
export const products:Product[]=[
{id:"penta",name:"Penta Sky Shot",category:"Sky Effects",desc:"A multi-effect sky display.",options:[{id:"penta-a",cost:250,label:"Price option 1"},{id:"penta-b",cost:250,label:"Price option 2"}]},
{id:"anaar",name:"Anaar Chota",category:"Fountains",desc:"A compact fountain-style selection.",options:[{id:"anaar-a",cost:180}]},
{id:"bullet",name:"Bullet",category:"Aerial & Sound",desc:"A classic sound-effect item.",options:[{id:"bullet-a",cost:115}]},
{id:"fuljhadi",name:"Fuljhadi",category:"Sparklers",desc:"Available in different listed pack options.",options:[{id:"ful-a",cost:280,label:"Price option 1"},{id:"ful-b",cost:450,label:"5 dibbi"}]},
{id:"naazi",name:"Naazi",category:"Ground Effects",desc:"Choose from the available price options.",options:[{id:"naazi-a",cost:270,label:"Price option 1"},{id:"naazi-b",cost:250,label:"Per box"}]},
{id:"raavan",name:"Raavan",category:"Ground Effects",desc:"A classic festive ground effect.",options:[{id:"raavan-a",cost:150}]},
{id:"raavan100",name:"100 Pc Chota Raavan",category:"Ground Effects",desc:"Pack of 100 pieces.",options:[{id:"raavan100-a",cost:500}]},
{id:"badaanaar",name:"Bada Anaar",category:"Fountains",desc:"A larger fountain-style selection.",options:[{id:"badaanaar-a",cost:400}]},
{id:"12shot",name:"12 Shot",category:"Sky Effects",desc:"A twelve-shot aerial effect.",options:[{id:"12shot-a",cost:300}]},
{id:"commando",name:"Commando",category:"Aerial & Sound",desc:"Festive sound-effect selection.",options:[{id:"commando-a",cost:220}]},
{id:"chakri",name:"Chakri",category:"Ground Effects",desc:"Traditional spinning ground effect.",options:[{id:"chakri-a",cost:300}]},
{id:"badabullet",name:"Bada Bullet",category:"Aerial & Sound",desc:"A larger bullet-style item.",options:[{id:"badabullet-a",cost:150}]},
{id:"rocket",name:"Rocket",category:"Sky Effects",desc:"Listed as a box.",unit:"per box",options:[{id:"rocket-a",cost:150}]},
{id:"2sound",name:"2 Sound",category:"Aerial & Sound",desc:"Two-sound effect.",options:[{id:"2sound-a",cost:250}]},
{id:"bigful",name:"Very Big Fuljhadi",category:"Sparklers",desc:"Large fuljhadi pack.",unit:"per box",options:[{id:"bigful-a",cost:450}]},
{id:"cornation",name:"Cornation Chakri",category:"Ground Effects",desc:"Listed chakri variant.",unit:"per box",options:[{id:"cornation-a",cost:200}]},
{id:"2rocket",name:"2 Sound Rocket",category:"Sky Effects",desc:"Rocket with a two-sound effect.",options:[{id:"2rocket-a",cost:300}]},
{id:"whistle",name:"Whistling Rocket",category:"Sky Effects",desc:"Whistling rocket selection.",options:[{id:"whistle-a",cost:650}]},
{id:"bijli",name:"Bijli",category:"Aerial & Sound",desc:"Exact variant names to be confirmed.",options:[{id:"bijli-a",cost:100,label:"Price option 1"},{id:"bijli-b",cost:180,label:"Price option 2"},{id:"bijli-c",cost:60,label:"Price option 3"}]},
{id:"ladi",name:"1000 Ki Ladi",category:"Aerial & Sound",desc:"Exact pack variants to be confirmed.",options:[{id:"ladi-a",cost:450,label:"Price option 1"},{id:"ladi-b",cost:750,label:"Price option 2"}]},
{id:"matka",name:"Matka Anaar",category:"Fountains",desc:"Matka-style fountain.",options:[{id:"matka-a",cost:800}]}
];
export const categories=["All",...Array.from(new Set(products.map(p=>p.category)))];
export const listPrice=(cost:number)=>Math.round(cost*1.3/10)*10;
export const finalPrice=(cost:number)=>Math.round(listPrice(cost)*.9);
export const money=(n:number)=>new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(n);
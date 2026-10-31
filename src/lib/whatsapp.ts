import type {Product,Option} from "../data/products";
import {finalPrice,listPrice,money} from "../data/products";
export type Line={key:string;product:Product;option:Option;qty:number};
export const WHATSAPP="917292007141";
export function message(lines:Line[],c:{name:string;phone:string;area:string;note:string}){
const subtotal=lines.reduce((s,l)=>s+listPrice(l.option.cost)*l.qty,0),total=lines.reduce((s,l)=>s+finalPrice(l.option.cost)*l.qty,0);
const items=lines.map((l,i)=>`${i+1}. ${l.product.name}${l.product.unit?` (${l.product.unit})`:""}\n   ${l.option.label||"Selected price"} · Qty ${l.qty}\n   ${money(listPrice(l.option.cost))} × ${l.qty} = ${money(listPrice(l.option.cost)*l.qty)}\n   After 10% offer: ${money(finalPrice(l.option.cost)*l.qty)}`).join("\n\n");
return [`*DEEPOTSAV — ENQUIRY SUMMARY*`,"━━━━━━━━━━━━━━━━━━━━","*CUSTOMER DETAILS*",`Name: ${c.name}`,`Phone: ${c.phone}`,`Area: ${c.area}`,"","*SELECTED ITEMS*",items,"","━━━━━━━━━━━━━━━━━━━━",`Subtotal: ${money(subtotal)}`,`Discount (10%): -${money(subtotal-total)}`,`*ESTIMATED TOTAL: ${money(total)}*`,c.note?`Note: ${c.note}`:"","Please confirm availability, product specifications and applicable legal requirements. This is an enquiry summary, not an order confirmation."].filter(Boolean).join("\n");
}
export function sendWhatsApp(text:string){window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`,"_blank","noopener,noreferrer");}
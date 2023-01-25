//Il y a une offre "3 pour 2" (ou "2+1" si vous préférez) sur les mangues. Pour une quantité et un prix (par mangue) donnés, calculez le coût total des mangues.
// mango(2, 3) ==> 6    # 2 mangoes for $3 per unit = $6; no mango for free
// mango(3, 3) ==> 6    # 2 mangoes for $3 per unit = $6; +1 mango for free
// mango(5, 3) ==> 12   # 4 mangoes for $3 per unit = $12; +1 mango for free
// mango(9, 5) ==> 30   # 6 mangoes for $5 per unit = $30; +3 mangoes for free

function mango(quantity, price){
const bonus = (Math.floor(quantity / 3));
const cost = ((quantity-bonus)* price);
let txt = (''); 
switch (bonus){
    case 0 : 
    txt = 'no mango for free';
    break;
    case 1 : 
    txt = '+1 mango for free';
    break;
    default :
    txt = `+${bonus} mangoes for free`;
} 
return `${quantity-bonus} mangoes for $${price} per unit = $${cost}; ${txt}`
}
console.log(mango(2, 3));
console.log(mango(3, 3));
console.log(mango(5, 3));
console.log(mango(9, 5));
 
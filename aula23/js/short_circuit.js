/* 
&& -> Retorna o primeiro valor falso que encontrar.
|| -> Retorna após a avaliação o primeiro valor true que a máquina encontrar.

Falsy Values
false (literal);
0;
' ', " ", ` `;
null / undefined
NaN;
*/

const a = 0;
const b = false;
const c = 'false';
const d = NaN;
const e = null;

console.log(a || b || c || d || e);
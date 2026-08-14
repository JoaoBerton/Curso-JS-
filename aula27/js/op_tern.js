// Operador ternário ?:

const valorUser = 1900;
const registUser = valorUser >= 1000 ? 'Usuário VIP' : 'Usuário normal';

const userColor = NaN;
const definColorUser = userColor || 'White';

console.log(registUser, definColorUser);
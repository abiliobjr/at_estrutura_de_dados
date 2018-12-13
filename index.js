var data = require('./preData')
;
var readline = require('readline-sync');

var toolsLocal = require('./model/local');
var toolsItem = require('./model/item');
var menu = require('./controllers/menuControllers');

const locais = [];
const itens = [];
const caminhoes = [];
// puxando dados de outro arquivo para ficar menos feio
data.locais.map(local => locais.push(local));
data.itens.map(item => itens.push(item));
data.caminhoes.map(caminhao => caminhoes.push(caminhao));

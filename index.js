var readline = require('readline-sync');

var toolsLocal = require('./model/local');
var toolsItem = require('./model/item');
var menu = require('./controllers/menuControllers')

const locais = [
    { idLocal: 1, name: 'boacu', itens: [{ idItem: 1, name: 'celular' }] },
    { idLocal: 2, name: 'boacu', itens: [] },
    { idLocal: 3, name: 'boacu', itens: [] },
    { idLocal: 4, name: 'boacu', itens: [] },
    { idLocal: 5, name: 'boacu', itens: [] }
];
const itens = [
    { idItem: 1, name: 'celular' },
    { idItem: 2, name: 'celular' },
    { idItem: 3, name: 'celular' },
    { idItem: 4, name: 'celular' },
    { idItem: 5, name: 'celular' }
];
const caminhoes = [
    {idCaminhao: 1, placa: 'las-2324', locais:[]}
];

menu.menuAddItemNoLocal(itens, locais);
menu.menuAddLocalEmCaminhao(locais, caminhoes);


console.table(locais);
console.table(caminhoes);
var toolsLocal = require('../model/local');
var toolsCaminhao = require('../model/caminhao');
var toolsItem = require('../model/item');

var readline = require('readline-sync');

module.exports = {
    menuAddItemNoLocal: function (itens, locais) {
        console.table(itens);
        const itemEscolhido = readline.questionInt("Digite o ID do item para associar ao local: ")
        console.table(locais)
        const localEscolhido = readline.questionInt("Digite o ID do local para associar o item: ");
        toolsLocal.addItem(locais, localEscolhido, toolsItem.getItem(itens, itemEscolhido))
    },
    menuAddLocalEmCaminhao: function (locais, caminhoes) {
        console.table(locais);
        const localEscolhido = readline.questionInt("Digite o ID do local para associar ao caminhao: ")
        console.table(caminhoes)
        const caminhaoEscolhido = readline.questionInt("Digite o ID do caminhao para associar o local: ");
        toolsCaminhao.addLocal(caminhoes, caminhaoEscolhido, toolsLocal.getLocal(locais, localEscolhido))
    }
}
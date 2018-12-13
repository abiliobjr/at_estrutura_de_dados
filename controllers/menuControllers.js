var toolsLocal = require('../model/local');
var toolsCaminhao = require('../model/caminhao');
var toolsItem = require('../model/item');
var carergamento = require('./carregamentoCrontroller');
var readline = require('readline-sync');

module.exports = {
    menuAddItemNoLocal: function (itens, locais) {
        console.table(itens);
        const itemEscolhido = readline.questionInt("Digite o ID do item para associar ao local: ");
        console.table(locais);
        const localEscolhido = readline.questionInt("Digite o ID do local para associar o item: ");
        const itemToAdd = toolsItem.getItem(itens, itemEscolhido);
        toolsLocal.addItem(locais, localEscolhido, itemToAdd);
        itens.splice(itens.map(function (e) {
            return e.idItem;
        }).indexOf(itemEscolhido), 1)
    },
    menuAddLocalEmCaminhao: function (locais, caminhoes) {
        console.table(locais);
        const localEscolhido = readline.questionInt("Digite o ID do local para associar ao caminhao: ")
        const caminhaoEscolhido = readline.questionInt("Digite o ID do caminhao para associar o local: ");
        const localToAdd = toolsLocal.getLocal(locais, localEscolhido);
        toolsCaminhao.addLocal(caminhoes, caminhaoEscolhido, localToAdd);
        locais.splice(locais.map(function (e) {
            return e.idLocal;
        }).indexOf(localEscolhido), 1)
    },
    menuDeEntregas: function (caminhoes, locais) {
        if (locais.length >= 1) {
            carergamento.alocarLocais(caminhoes, locais);
        }
        caminhoes.map(caminhao => {
            console.log(`Percurso do caminhão ${caminhao.placa}:`);
            caminhao.locais.map(local => {
                console.log(`Visitado ponto de entrega ${local.name}. Foram entregues os itens:`);
                local.itens.map(item => {
                    console.log(`ID: ${item.idItem}, nome do item: ${item.name}`)
                })
            })
        })
    }
}
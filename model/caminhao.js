var readline = require('readline-sync');

module.exports = {
    criarCaminhao: function (id, nome) {
        const idCaminhao = readline.questionInt("Digite o ID do caminhão");
        const placa = readline.question("Digite a placa do caminhão:");
        const locais = [];

        return {idCaminhao, placa, locais}
    },
    getCaminhao: function (array, id) {
        const position = array.map(function (e) {
            return e.idItem;
        }).indexOf(id);
        return array[position];
    },
    addLocal: function (array, idCaminhao, local) {
        const position = array.map(function (e) {
            return e.idCaminhao;
        }).indexOf(idCaminhao);
        array[position].locais.push(local)
    }
};
var readline = require('readline-sync');

module.exports = {
    criarItem: function (id, nome) {
        const idItem = readline.questionInt("Digite o ID do item");
        const name = readline.question("Digite o nome do item:");

        return {idItem, name};
    },
    getItem: function (array, id) {
        const  position = array.map(function(e) { return e.idItem; }).indexOf(id);
        return array[position];
    }
};
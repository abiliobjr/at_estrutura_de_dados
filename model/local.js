var readline = require('readline-sync');

module.exports = {
    criarLocal: function (id, nome) {
        const idLocal = readline.questionInt("Digite o ID do local");
        const name = readline.question("Digite o nome do local:");
        const itens = [];

        return {idLocal, name, itens}
    },
    getLocal: function (array, id) {
        const position = array.map(function (e) {
            return e.idLocal;
        }).indexOf(id);
        return array[position];
    },
    addItem: function (array, idLocal, item) {
        const position = array.map(function (e) {
            return e.idLocal;
        }).indexOf(idLocal);
        array[position].itens.push(item)
    }
};
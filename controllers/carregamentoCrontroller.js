var toolsLocal = require('../model/local');
var toolsCaminhao = require('../model/caminhao');

module.exports = {
    alocarLocais: function (caminhoes, locais) {
        const quantidadeDeLocais = [];
        caminhoes.map(item => {
            quantidadeDeLocais.push(item.locais.length);
        });
        const menorNumeroDeLocais = Math.min(...quantidadeDeLocais);
        const posicaoDoObjeto = quantidadeDeLocais.indexOf(menorNumeroDeLocais);
        locais.map((local, index) => {
            toolsCaminhao.addLocal(caminhoes, posicaoDoObjeto, local);
            locais.splice(locais.map(function (e) {
                return e.idLocal;
            }).indexOf(index), 1)
        })
    }
}
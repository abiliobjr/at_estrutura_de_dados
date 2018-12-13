var data = require('./preData')
;
var readline = require('readline-sync');

var toolsLocal = require('./model/local');
var toolsItem = require('./model/item');
var toolsCaminhao = require('./model/caminhao');
var menu = require('./controllers/menuControllers');

const locais = [];
const itens = [];
const caminhoes = [];
// puxando dados de outro arquivo para ficar menos feio
data.locais.map(local => locais.push(local));
data.itens.map(item => itens.push(item));
data.caminhoes.map(caminhao => caminhoes.push(caminhao));


var rodando = true;
while (rodando){
    console.log('[1] Inserir ponto de entrega');
    console.log('[2] Inserir item de entrega');
    console.log('[3] Inserir caminhão');
    console.log('[4] Associar item a ponto de entrega');
    console.log('[5] Associar ponto de entrega a caminhão');
    console.log('[6] Realizar entregas');
    console.log('[0] Sair.');
    const escolha = readline.questionInt('Escolha uma opcao do menu');
    console.log('---------------------------------------------------------------------')
    switch (escolha) {
        case 1:
            toolsItem.criarItem();
            break;
        case 2:
            toolsLocal.criarLocal();
            break;
        case 3:
            toolsCaminhao.criarCaminhao();
        case 4:
            menu.menuAddItemNoLocal(itens, locais);
            break;
        case 5:
            menu.menuAddLocalEmCaminhao(locais, caminhoes);
            break;
        case 6:
            menu.menuDeEntregas(caminhoes,locais);
            break;
        case 98:
            console.table(caminhoes);
            break;
        case 99:
            console.table(locais);
            break;
        case 0:
            console.log("Fechando programa");
            rodando = false;
            break;
        default:
            break;
    }
}


module.exports = {
    locais: [
        {
            idLocal: 1, name: 'boacu', itens: [
                {idItem: 1, name: 'celular'},
                {idItem: 2, name: 'celular'},
                {idItem: 3, name: 'celular'},
                {idItem: 4, name: 'celular'},
                {idItem: 5, name: 'celular'}
            ]
        },
        {idLocal: 2, name: 'boacu', itens: []},
        {idLocal: 3, name: 'boacu', itens: []},
        {idLocal: 4, name: 'boacu', itens: []},
        {idLocal: 5, name: 'boacu', itens: []}
    ],
    itens: [
        {idItem: 1, name: 'celular'},
        {idItem: 2, name: 'celular'},
        {idItem: 3, name: 'celular'},
        {idItem: 4, name: 'celular'},
        {idItem: 5, name: 'celular'}
    ],
    caminhoes: [
        {
            idCaminhao: 1,
            placa: 'las-2324',
            locais: [
                {
                    idLocal: 1,
                    name: 'boacu',
                    itens: [{idItem: 1, name: 'celular'}, {idItem: 2, name: 'celular'}, {
                        idItem: 3,
                        name: 'celular'
                    }, {idItem: 4, name: 'celular'}, {idItem: 5, name: 'celular'}]
                },
                {
                    idLocal: 2,
                    name: 'mutondo',
                    itens: [{idItem: 1, name: 'celular'}, {idItem: 2, name: 'celular'}, {
                        idItem: 3,
                        name: 'celular'
                    }, {idItem: 4, name: 'celular'}, {idItem: 5, name: 'celular'}]
                }
            ]
        },
        {
            idCaminhao: 2,
            placa: '22222',
            locais: []
        },
        {
            idCaminhao: 3,
            placa: 'las-2324',
            locais: [
                {
                    idLocal: 1,
                    name: 'boacu',
                    itens: [{idItem: 1, name: 'celular'}, {idItem: 2, name: 'celular'}, {
                        idItem: 3,
                        name: 'celular'
                    }, {idItem: 4, name: 'celular'}, {idItem: 5, name: 'celular'}]
                },
                {
                    idLocal: 2,
                    name: 'teste',
                    itens: [{idItem: 1, name: 'celular'}, {idItem: 2, name: 'celular'}, {
                        idItem: 3,
                        name: 'celular'
                    }, {idItem: 4, name: 'celular'}, {idItem: 5, name: 'celular'}]
                },
                {
                    idLocal: 3,
                    name: 'icarai',
                    itens: [{idItem: 1, name: 'celular'}, {idItem: 2, name: 'celular'}, {
                        idItem: 3,
                        name: 'celular'
                    }, {idItem: 4, name: 'celular'}, {idItem: 5, name: 'celular'}]
                }
            ]
        }
    ]
}
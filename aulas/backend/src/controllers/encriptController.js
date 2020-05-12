const connection = require('../database/conection');

module.exports = {

    async encript(request, response){

        const { string } = request.body;

        const id_cripto = Math.floor(Math.random() * (20 - 11) + 11);

        const value_cripto = await connection('cripto').where('id', id_cripto).select('value').first();

        let encoded=id_cripto;

        let x = parseInt(value_cripto['value'], 10);

        const tam = string.length;

        for(var i = 0; i<tam; i++){

            let n = string.charCodeAt(i);

            n = n+x;

            encoded = encoded+','+n;

        }

        return response.json({ encoded: encoded });

    },

    async decript(response,request){

        const { n = 0 } = request.query;

        let decoded = '';

        return response.json({ decoded: decoded });

    }

}
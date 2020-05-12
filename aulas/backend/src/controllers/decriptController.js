const connection = require('../database/conection');

module.exports = {

    async decript(request, response){

        const { string } = request.body;

        const strong = string.split(',');

        let decript = '';

        let id_cripto = string[0];
        id_cripto = id_cripto+string[1];

        const value_cripto= await connection('cripto').where('id', id_cripto).select('value').first();

        let x = parseInt(value_cripto['value'], 10);

        let tam = strong.length;

        for(var i=1;i<tam; i++){

            y = strong[i];

            y = y-x;

            var a=String.fromCharCode(y);

            decript=decript+a;

        }

        response.json({ string: decript });

    }

}
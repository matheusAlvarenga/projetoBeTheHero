const connection = require('../database/conection');

module.exports = {

    async delete(request, response){

        await connection('cripto').delete();

        return response.status(204).send();

    },

    async create(request, response){

        const { qnt } = request.body;

        for(var i = 1; i <= qnt; i++){

            var value = Math.random() * (100 - 1) + 1;

            value = Math.floor(value);

            await connection('cripto').insert({

                value

            });

        }

        return response.status(204).send();

    },

    async index(request, response){

        const cripto = await connection('cripto').select('*');

        return response.json(cripto);

    }

}
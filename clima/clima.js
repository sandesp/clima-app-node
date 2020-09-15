const axios = require('axios');

const getClima = async(direccion) => {

    const encodeUrl = encodeURI(direccion);
    const params = {
        access_key: 'a6e6fd3616560258f93548e84c2e3bfe',
        query: encodeUrl
    };

    const response = await axios.get('http://api.weatherstack.com/current', { params });
    const apiResponse = response.data.current;

    if (apiResponse.length === 0) {
        throw new Error(`No hay resultados para la localidad ${apiResponse.name}`);
    }

    const temperatura = apiResponse.temperature;

    return {
        temperatura
    }
}

module.exports = {
    getClima
}
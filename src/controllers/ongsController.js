const connection = require('../database/connection');
const crypto = require('crypto');
/**
 * Controller responsável por tratar as requisições para a entidade
 * de ongs
 */
module.exports = {
  /**
   * @description
   * Função reponsável por criar uma nova ong
   * @param {Request} request requisição feita a api
   * @param {Response} response resposta da api
   */
  async create(request, response) {
    const { name, email, whatsapp, city, uf } = request.body;

    const id = crypto.randomBytes(4).toString('HEX');

    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    });
    response.json({ id });
  },
  async index(request, response) {
    const ongs = await connection('ongs').select('*');
    return response.json({ ongs });
  }
};

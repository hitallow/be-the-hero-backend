const connection = require('../database/connection');
module.exports = {
  /**
   * Metodo responsál por criar um novo incidente
   * @param {Request} request requisição ao servidor
   * @param {Response} response resposta da api
   */
  async create(request, response) {
    const { title, description, value } = request.body;
    const ong_id = request.headers.authorization;
    const [id] = await connection('incidents')
      .insert({
        title,
        ong_id,
        description,
        value
      })
      .returning('*');
    return response.json({
      id
    });
  },
  /**
   * Retorna todos os incidentes salvos
   * @param {Request} request
   * @param {Response} response
   */
  async index(request, response) {
    const result = await connection('incidents').select('*');
    return response.json(result);
  },
  /**
   *
   * @param {Request} request
   * @param {Response} response
   */
  async delete(request, response) {
    const { id } = request.params;
    const ong_id = request.headers.authorization;
    const result = await connection('incidents')
      .where({
        id
      })
      .first();
    if (!result)
      response.status(404).json({ error: 'Incidente não econtrado' });
    if (result.ong_id !== ong_id) {
      response.status(401).json({ error: 'Operação não permitida' });
    }
    await connection('incidents')
      .delete()
      .where({ id });
    return response.status(204).send();
  }
};

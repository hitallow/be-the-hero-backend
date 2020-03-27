const connection = require('../database/connection');
module.exports = {
  /**
   *
   * @param {Request} request
   * @param {Response} response
   */
  async index(request, response) {
    const ong_id = request.headers.authorization;
    if (!ong_id)
      return response.status(401).json({ error: 'Acesso não autorizado' });
    const r = await connection('incidents')
      .select('*')
      .where({
        id: ong_id
      });
    response.status(200).json(r);
  }
};

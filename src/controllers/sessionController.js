const connection = require('../database/connection');

module.exports = {
  /**
   *
   * @param {Request} request
   * @param {Response} response
   */
  async create(request, response) {
    const { id } = request.body;
    const ong = await connection('ongs')
      .where({
        id
      })
      .select('name')
      .first();
    console.log(ong);
    if (!ong)
      return response.status(401).json({
        error: 'acesso negado'
      });
    return response.status(201).json({
      id,
      name : ong.name
    });
  }
};

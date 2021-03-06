const Goods = require('../model/goods.model')
class GoodsService {
  async createGoods (goods) {
    // 插入数据
    const res = await Goods.create(goods)
    return res && res.dataValues
  }

  async updateGoods (id, goods) {
    const res = await Goods.update(goods, { where: { id } })
    return res[0] > 0
  }

  async removeGoods (id) {
    const res = await Goods.destroy({ where: { id } })
    return res > 0
  }

  async restoreGoods (id) {
    const res = await Goods.restore({ where: { id } })
    return res > 0
  }

  async findAllGoods (pageNum, pageSize) {
    const offset = (pageNum - 1) * pageSize
    const limit = pageSize * 1
    // // 获取总数
    // const count = await Goods.count()
    // // 获取分页数据
    // const rows = await Goods.findAll({ offset, limit })
    const { count, rows } = await Goods.findAndCountAll({ offset, limit })
    return {
      pageNum,
      pageSize,
      total: count,
      list: rows
    }
  }
}

module.exports = new GoodsService()

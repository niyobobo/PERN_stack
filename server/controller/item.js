const model = require('../models/index');

const { item } = model;

const ItemController = {
  getAllItems: (req, res) => {
    item.findAll()
      .then(items => res.json(items))
      .catch(err=> err);
  },

  createItem: (req, res) => {
    const { name } = req.body;
    item.create({ name }).then(item => res.json(item)).catch(err => err);
  },

  deleteItem: (req, res) => {
    const { id } = req.params;
    item.findOne({ where: { id }})
      .then(item => item.destroy().then(() => res.json({
        success: true
      })))
      .catch(() => res.status(400).json({
        status: false
      }));
  }
};

module.exports = ItemController;
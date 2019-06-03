const Item = require('../models/Item');

const ItemController = {
  getAllItems: (req, res) => {
    Item.find()
      .sort({ date: -1 })
      .then(items => res.json(items));
  },

  createItem: (req, res) => {
    const { name } = req.body;
    const newItem = new Item({ name });
    newItem.save().then(item => res.json(item)).catch(err => err);
  },

  deleteItem: (req, res) => {
    const { id } = req.params;
    Item.findById(id)
      .then(item => item.remove().then(() => res.json({
        success: true
      })))
      .catch(() => res.status(400).json({
        status: false
      }));
  }
};

module.exports = ItemController;
// controllers/DrinkController.js
const drinks = []; // ตัวอย่าง Array เก็บเครื่องดื่ม

module.exports = {
  // GET /drinks
  index: (req, res) => {
    res.json(drinks);
  },

  // GET /drink/:id
  show: (req, res) => {
    const drink = drinks.find(d => d.id === parseInt(req.params.id));
    if (!drink) return res.status(404).send('Not found');
    res.json(drink);
  },

  // POST /drink
  create: (req, res) => {
    const newDrink = { id: drinks.length + 1, ...req.body };
    drinks.push(newDrink);
    res.status(201).json(newDrink);
  },

  // PUT /drink/:id
  update: (req, res) => {
    const drink = drinks.find(d => d.id === parseInt(req.params.id));
    if (!drink) return res.status(404).send('Not found');
    Object.assign(drink, req.body);
    res.json(drink);
  },

  // DELETE /drink/:id
  delete: (req, res) => {
    const index = drinks.findIndex(d => d.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).send('Not found');
    const deleted = drinks.splice(index, 1);
    res.json(deleted[0]);
  }
};

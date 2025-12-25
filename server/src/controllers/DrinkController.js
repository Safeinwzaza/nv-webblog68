// controllers/DrinkController.js
let drinks = []; // เก็บข้อมูลเครื่องดื่มชั่วคราว

module.exports = {
  // GET /drinks
  index: (req, res) => {
    res.json(drinks);
  },

  // GET /drink/:id
  show: (req, res) => {
    const drink = drinks.find(d => d.id === parseInt(req.params.id));
    if (!drink) return res.status(404).send('ไม่พบเครื่องดื่ม');
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
    if (!drink) return res.status(404).send('ไม่พบเครื่องดื่ม');
    Object.assign(drink, req.body);
    res.json(drink);
  },

  // DELETE /drink/:id
  delete: (req, res) => {
    const index = drinks.findIndex(d => d.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).send('ไม่พบเครื่องดื่ม');
    const deleted = drinks.splice(index, 1);
    res.json(deleted[0]);
  }
};

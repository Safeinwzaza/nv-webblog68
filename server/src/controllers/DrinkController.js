// controllers/UserController.js
module.exports = {
    index: (req, res) => res.send('เรียกข้อมูลผู้ใช้งานทั้งหมด'),
    show: (req, res) => res.send('ดูข้อมูลผู้ใช้งาน ' + req.params.userId),
    create: (req, res) => res.send('สร้างผู้ใช้งาน: ' + JSON.stringify(req.body)),
    put: (req, res) => res.send('แก้ไขผู้ใช้งาน: ' + req.params.userId),
    remove: (req, res) => res.send('ลบผู้ใช้งาน: ' + req.params.userId)
};

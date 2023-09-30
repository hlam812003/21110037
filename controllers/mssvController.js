const mygroup = require('../models/mygroup');

exports.mssv = (req, res) => {
    const { id } = req.params;
    if (req.method === 'POST') {
        const newItem = req.body;
        if (newItem.id === 'MSSV' && !mygroup.find(item => item.id === newItem.id)) {
        mygroup.push(newItem);
        res.json(newItem);
        } else {
        res.json({ error: 'Not valid' });
        }
    } else if (req.method === 'GET') {
        const item = mygroup.find(item => item.id === id);
        res.json(item || { error: 'Not valid' });
    }
};

const mygroup = require('../models/mygroup');

exports.index = (req, res) => {
    res.json(mygroup);
};

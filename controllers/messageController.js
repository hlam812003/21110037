const mygroup = require('../models/mygroup');

exports.message = (req, res) => {
    const { id } = req.params;
    const item = mygroup.find(item => item.id === id);
    if (item) {
        res.send(`
            <html>
            <body>
                <ul>
                <li>${item.name}</li>
                </ul>
            </body>
            </html>
        `);
    } else {
        res.send('Not valid');
    }
};

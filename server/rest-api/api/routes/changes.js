const express = require('express');
const router = express.Router();

const sh = require('../../script');


// router.get('/', (req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     next();
//     sh.listFiles();
//     res.sendStatus(200);
// });

router.get('/:changeId', (req, res, next) => {
    const id = req.params.changeId;
    console.log('teste', id)
    if (id !== '0' && id !== '') {
        res.header("Access-Control-Allow-Origin", "*");
        next();
        sh.handleContentFile(id);
        res.sendStatus(200);
    } else {

    }
});

module.exports = router;
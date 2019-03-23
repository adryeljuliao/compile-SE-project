const express = require('express');
const router = express.Router();

const sh = require('../../script');


// router.get('/', (req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     next();
//     sh.listFiles();
//     res.sendStatus(200);
// });

router.get('/:compileId', (req, res, next) => {
    const id = req.params.compileId;
    console.log('teste compiles', id)
    if (id === '0' && id !== '') {
        res.header("Access-Control-Allow-Origin", "*");
        next();
        sh.compileProject();
        res.sendStatus(200);
    } else {

    }
});

module.exports = router;
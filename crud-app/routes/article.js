const router = require("express").Router();
const article = require("../controllers/articles");

router.post('/create', article.create);
router.get('/getall', article.getAll);
router.get('/:id', article.getOne);
router.put('/:id', article.update);
router.delete('/:id', article.delete);

module.exports = router;

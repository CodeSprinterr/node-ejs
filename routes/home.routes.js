const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home.controller');
const aboutMiddleware = require('../middlewares/about.middleware');


router.get('/', homeController.home);
router.get('/about', homeController.about);

router.use((req, res) => {
    res.status(404).render('404', { title: 'Page Not Found' });
});
module.exports = router;
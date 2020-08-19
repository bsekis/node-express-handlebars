const router = require('express').Router();

const { getBurgers } = require('../../controllers/burgers_controller');

router.get('/', (req, res) => {
  //get all burger data
  getBurgers()
  .then(burgerdata => {
    res.render('home', {burgers: burgerdata}); //refers to home.handlebars
  })
  .catch(err => {
    res.status(500).end();
  });
});

module.exports = router;
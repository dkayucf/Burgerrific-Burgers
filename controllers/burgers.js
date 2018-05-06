const express = require('express');
const router = express.Router();

const Burgers = require('../models/Burger');
 
router.get('/', (req, res)=>{
    Burgers.all(function(data){
       
        let foundBurgers = {
                burgers: data    
            }

        res.render('index', foundBurgers);
    });
    
});

router.post('/', (req, res)=>{
    let newBurger = req.body.burgerName;

    Burgers.create(newBurger, function(){

        res.redirect('/');
    });
});

router.get('/:id', (req, res) => {
    let id = req.params.id;
    Burgers.update(id, function(){
        res.redirect('/');
    })
});

router.get('/delete/:id', (req, res)=> {
    let id = req.params.id;

    Burgers.delete(id, function(){
        res.redirect('/');
    });
    
});


module.exports = router;
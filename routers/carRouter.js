const express = require('express');
const knex = require('knex');

const db = knex({
  client: 'sqlite3',
  connection: {
    filename: './data/cars-dealer.db3'
  },
  useNullAsDefault: true
});


const router = express.Router();

router.get('/', (req, res) => {
    db('car')
    .then(cars => {
      res.json(cars); 
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to retrieve car' });
    });
  });

router.get('/:id', (req, res) => {
    const { id } = req.params;

    db('car').where({ id }).first()
    .then(car => {
        res.json(car);
    }) 
    .catch (err => {
        res.status(500).json({ message: 'Failed to retrieve car' });
    });
});

router.post('/', (req, res) => {
    const carData = req.body;
    db('car').insert(carData)
    .then(ids => {
        db('car').where({ id: ids[0] })
        .then(newcar => {
        res.status(201).json(newcar);
        });
})
    .catch (err => {
        console.log('POST error', err);
        res.status(500).json({ message: "Failed to store data" });
    });
});
router.put('/:id', (req, res) => {
    db('car')
        .where({ id: req.params.id })
        .update(req.body)
    .then(e => {
        res.status(200).json(e);
    })
    .catch(error => {
        res.status(500).json({ error: "failed to edit car" })
    })
}); 
router.delete('/:id', (req, res) => {
    db('car')
        .where({ id: req.params.id })
        .del()
    .then(e => {
        res.status(200).json(e);
    })
    .catch(error => {
        res.status(500).json({ error: "failed to delete car" })
    })
});


  module.exports = router
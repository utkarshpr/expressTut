const express = require('express');
const router = new express.Router();
const MenRanking = require('../models/mens');

router.get('/mens', async (req, res) => {
  try {
    const getmen = await MenRanking.find({}).sort({ ranking: 1 });
    console.log(getmen);
    res.status(201).send(getmen);
  } catch (error) {
    res.status(401).send(error);
  }
});

router.get('/mens/:id', async (req, res) => {
  try {
    const _id = req.params.id;
    const getmen = await MenRanking.findById({ _id });
    console.log(getmen);
    res.status(201).send(getmen);
  } catch (error) {
    res.status(401).send(error);
  }
});
router.patch('/mens/:id', async (req, res) => {
  try {
    const _id = req.params.id;
    const getmen = await MenRanking.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    console.log(getmen);
    res.status(201).send(getmen);
  } catch (error) {
    res.status(401).send(error);
  }
});
router.delete('/mens/:id', async (req, res) => {
  try {
    const _id = req.params.id;
    const getmen = await MenRanking.findByIdAndDelete(_id);
    console.log(getmen);
    res.status(201).send(getmen);
  } catch (error) {
    res.status(401).send(error);
  }
});

router.post('/mens', async (req, res) => {
  try {
    const addingMen = await new MenRanking(req.body);
    console.log(req.body);
    const data = await addingMen.save();
    res.status(201).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
});
module.exports = router;

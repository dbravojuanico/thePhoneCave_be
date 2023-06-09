const router = require("express").Router();
const phones = require("../db/phones.json");

//GET ALL PHONES
router.get("/", (req, res) => {
  res.status(200).json(phones);
});

//GET PHONE BY ID
router.get("/:id", (req, res) => {
  const phoneId = req.params.id;

  const onePhone = phones.filter((obj) => obj.id == phoneId);

  res.json(onePhone);
});

module.exports = router;

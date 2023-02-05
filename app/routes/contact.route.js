const express = require("express");
const conntacts = require("../controllers/contact.controller.js");

const router = express.Router();

router.route("/")
    .get(conntacts.findAll)
    .post(conntacts.create)
    .delete(conntacts.deleteAll);

router.route("/favorite")
    .get(conntacts.findAllFavorite);

router.route("/:id")
    .get(conntacts.findOne)
    .put(conntacts.update)
    .delete(conntacts.delete);

module.exports = router;
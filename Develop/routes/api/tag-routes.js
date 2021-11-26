const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  try {
    const data = await Category.findAll({ include: [{ model: Tag }] });
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json(err);
  }
  // find all tags
  // be sure to include its associated Product data
});

router.get("/:id", async (req, res) => {
  try {
    const data = await Tag.findByPk({ include: [{ model: Product }] });
    res.status(200).json(data);
    // find a single tag by its `id`
    // be sure to include its associated Product data
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const data = await Tag.create(req.body.category_name);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
  //   // create a new tag
});

router.put("/:id", async (req, res) => {
  try{
  // update a tag's name by its `id` value
  const data = await Tag.update(req.body, { where: { id: req.params.id } });
}catch (err){
  res.status(500).json(err)

}});

router.delete("/:id", async (req, res) => {
  try{
  const data = await Tag.destroy({ where: { id: req.params.id } });
  // delete on tag by its `id` value
}catch (err){
  res.status(500).json(err)

}});

module.exports = router;

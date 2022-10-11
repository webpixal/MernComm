const Category = require("../Model/Category");

const addCategory = async (req, res) => {
  try {
    const catData = await Category.find();
    const isExists = catData.find(i => i.name.toLowerCase() === req.body.name.toLowerCase());

    if (!isExists) {
      const icon = req.files.find(i => i.fieldname === 'icon').filename;
      const banner = req.files.find(i => i.fieldname === 'banner').filename;
      const result = await Category.create({
        name: req.body.name,
        camission: req.body.camission,
        icon,
        banner,
        mtitel: req.body.mtitel,
        mdiscp: req.body.mdiscp,
      });
      res.send(result);
    } else {
      res.send("Category is Already exieet");
    }
  } catch (error) {
    console.log(error);
    res.send("somthing Wrong");
  }
};

const getCategories = async (req, res) => {
  try {
    const catData = await Category.find();
    res.status(200).json(catData)

  } catch (error) {
    console.log(error);
    res.send("somthing Wrong");
  }
};
module.exports = { addCategory, getCategories };
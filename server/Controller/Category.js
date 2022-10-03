const Category = require("../Model/Category");

const addCategory = async (req, res) => {
  try {
    const catData = await Category.find();
    if (catData.length > 0) {
      let checking = false;
      // for (let i = 0; i < catData.length; i++) {
      //   let d = catData[i];
      //   console.log(d);
      //   if (
      //     catData[i]._doc.name.toString().toLowercase() ===
      //     req.body.name.toLowercase()
      //   ) {
      //     checking = true;
      //     break;
      //   }
      // }
      catData.every((i) => {
        if (i.name.toLowerCase() === req.body.name.toLowerCase()) {
          checking = true;
          console.log("FOUND");
          return false;
        }
        console.log("NOT-FOUND");
        return true;
      });
      if (checking === false) {
        const data = new Category({
          name: req.body.name,
          camission: req.body.camission,
          icon: req.body.icon,
          banner: req.body.banner,
          mtitel: req.body.mtitel,
          mdiscp: req.body.mdiscp,
        });
        const result = await data.save();
        res.send(result);
      } else {
        res.send("Category is Already exieet");
      }
    } else {
      const data = new Category({
        name: req.body.name,
        camission: req.body.camission,
        icon: req.body.icon,
        banner: req.body.banner,
        mtitel: req.body.mtitel,
        mdiscp: req.body.mdiscp,
      });
      const result = await data.save();
      res.send(result);
    }
  } catch (error) {
    console.log(error);
    res.send("somthing Wrong");
  }
};
module.exports = { addCategory };

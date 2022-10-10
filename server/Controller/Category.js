const Category = require("../Model/Category");

const addCategory = async (req, res) => {
  try {

    let icon = [];
    for(let i=0; i<req.files.length; i++){
      icon[i] = req.files[i].filename;
    }
    let arrBanner = [];
    for(let j=0; j<req.files.length; j++){
      arrBanner[j] = req.files[j].filename;
    }

    const catData = await Category.find();
    
    if (catData.length > 0) {
      let checking = false;
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
          icon: icon,
          banner: arrBanner,
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
        icon: icon,
        banner: arrBanner,
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

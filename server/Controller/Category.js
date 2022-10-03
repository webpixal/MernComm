const Category = require("../Model/Category")

const addCategory =async (req,res) =>{
 try { const catData = Category.find();
         if(catData.length>0){
            let checking = false;
            for( i=0;i<catData.length;i++)
            if(catData[i]['name'].toLowercase() === req.body.name.toLowercase()){
               checking= true;
               break;
            }
            if(checking == false){
               const data =  new Category({
                  name:req.body.name,
                  camission:req.body.camission,
                  icon:req.body.icon,
                  banner:req.body.banner,
                  mtitel:req.bory.mtitel,
                  mdiscp:req.bory.mdiscp
              })
              const result = await data.save();
              res.send(result)
            } else{
               res.send("Category is Already exieet")
            }
         }
         else{
            const data =  new Category({
               name:req.body.name,
               camission:req.body.camission,
               icon:req.body.icon,
               banner:req.body.banner,
               mtitel:req.bory.mtitel,
               mdiscp:req.bory.mdiscp
           })
           const result = await data.save();
           res.send(result)
         }  
 } catch (error) {
    res.send("somthing Wrong")
 }
}
module.exports = {addCategory};

    
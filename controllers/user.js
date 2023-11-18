const User = require('../models/User')

module.exports = {

  //get all user
    index: async (req, res) => { 
      try{
        const users = await User.find()
        if(users.length> 0){
          res.status(200).json({
            status: true,
            data: users,
            method: req.method,
            url: req.url
          })
        }else{
          res.json({
            status:false,
            message:"data mu nandi ?"
          })
        }
    } catch(error){
      res.status(400).json({succes: false})
    }
        // res.json (users)

      },

      //get a user

      show: async (req, res) => {
        try{
          const user = await User.findById(req.params.id,
          )
          res.json({
            status: true,
            data: users,
            method: req.method,
            url: req.url,
            message:"data mu iki"
          })
        }catch(error){
          res.status(400).json({succes: false})
        }
      },

      store: async (req, res) => {
        try{
          const user = await User.create(req.body)
          res.status(200).json({
            status: true,
            data: users,
            method: req.method,
            url: req.url,
            message:"datamu wes masok"
          })
        } catch (error) {
          res.status(400).json({succes: false})
        }
      },
      update: async (req, res) => {
        try{
          const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new : true,
            runValidators: true
          })
          res.json({
            status: true,
            data: users,
            method: req.method,
            url: req.url,
            message:"datane wes diganti"
          })
        }catch(error){
          res.status(400).json({succes: false})
        }
        
      },
      delete: async (req, res) => {
        try{
          await User.findByIdAndDelete(req.params.id)
          res.json({
            status: true,
            method: req.method,
            url: req.url,
            message: "datane wes dihapus"
          })
        } catch(error){
          res.status(400).json({succes: false})
        }
      },


}

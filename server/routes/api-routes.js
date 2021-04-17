const db = require("..models")

module.exports = function(app){ 
    // database call to get User information
    app.get("/api/User", (req,res) => {  
       db.User.findOne(
           param.email)
        .then(data =>{
            console.log(data)
            res.json(data)

        })
        .catch(err => { 
            // res.json(err)
            console.log(err)
        })
    });

    app.post("/api/User", (req,res) => {    
        db.User.create({})
        .then(data => res.json(data))
        .catch(err => { 
            res.json(err)
        })
    })
        
    app.put("/api/User/:id",({body,params},res)=>{   
        db.User.findByIdAndUpdate(  
         params.email)
         
        .then(data => res.json(data))
        .catch(err => { 
            res.json(err)
        })
    });
}
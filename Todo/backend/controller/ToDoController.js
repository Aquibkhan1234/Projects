import ToDoModel from "../models/ToDoModel.js";

   export const getToDos = async ( req, res ) => {
  const toDos = await ToDoModel.find();
  res.send(toDos);
};


   export const saveToDo =  async( req, res) => {
     const  {toDo} = req.body;

     ToDoModel.create({toDo})
     .then((data) => {
        res.status(201).send(data);
     }).catch((err) => {
        res.send({error : err, msg : 'Something went wrong'});
     });
   };

   export const  updateToDo = async(req,res) => {
    const { id } = req.params;
    const {toDo} =  req.body;

    ToDoModel.findByIdAndUpdate(id , {toDo} , {new: true})
    .then(() => {
        res.send('Updated Successfully...');
    }).catch((err) => {
        res.send({error: err, msg: "Something went Wrong"});
    });
   };

    export const deleteToDo = async(req, res) => {
        const {id} = req.params;

        ToDoModel.findByIdAndDelete(id)
        .then(()=> {
            res.send("Deleted Successfully...")
        }).catch((err) => {
            res.send({error : err, msg: 'Something went Wrong'})
        })
    }
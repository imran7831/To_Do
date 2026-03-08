
export function getAllNotes (req,res){
    res.send("you get 30 notes");
}

export function AddNewNotes(req,res){
    res.status(201).send("you create notes succesfully")
 }

export function UpdateNotes(req,res){
    res.status(200).send("you update notes succesfully")
 }

export function DeleteNotes(req,res){
    res.status(200).send("you delete notes succesfully")
}

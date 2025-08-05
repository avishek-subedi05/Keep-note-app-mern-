

import Note from "../models/Note.js"


export const getAllNotes = async (_, res) => {
    try {
        const notes = await Note.find().sort({createdAt:-1});

        (notes.length == 0 ? res.send("") : res.status(200).json(notes))


    }
    catch (error) {

        console.error(error.title);
        res.status(500).json({ message: "Internal Server Error!! in getAll notes controller " })

    }

}

export const getNoteById = async (req, res) => {
    try {
        const NoteById  = await Note.findById(req.params.id);

        if (!NoteById) {
            return res.status(404).json({ message: "Note not found" });
        }

        res.status(200).json({ NoteById});

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error!! in noteById Controller " });
    }
};



export const createNote = async (req, res) => {
    const { title, content } = req.body;

    try {
        const newNote = await new Note({
            title: req.body.title,
            content: req.body.content
        })
        //to send to database  //it is just like Notes.create({});
       const NewNote= await newNote.save();

        res.status(201).json({ NewNote });
    } catch (error) {
        console.error(error.title);
        res.status(500).json({ message: "Internal Server Error!! in createNote Controller" })

    }
}


export const updateNote = async (req, res) => {
    const { title, content } = req.body;

    try {
        const updatedNote = await Note.findByIdAndUpdate(
            req.params.id,
            { title, content },
            { new: true, runValidators: true }
        );

        if (!updatedNote) {
            return res.status(404).json({ message: "Note not found" });
        }

        res.status(200).json({note: updatedNote });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error!! in updateNote Controller " });
    }
};

export const deleteNote = async (req, res) => {
    const {id}=req.params;
   try {
    const Deletenote=await Note.findByIdAndDelete(id);
    if(!Deletenote){
        res.status(404).json({message:"Note Not found!"})
    }
    res.status(201).json({message:"Note Deleted Sussfully",Deletenote});
   } 

   catch (error) {
      console.error(error);
        res.status(500).json({ message: "Internal Server Error!! in deletenote Controller" });
   }

}
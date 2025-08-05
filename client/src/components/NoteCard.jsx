import React from 'react'
import toast from 'react-hot-toast'
import { data, Link, useNavigate } from 'react-router'
import { RiDeleteBin5Line } from "react-icons/ri";
import { LuPencil } from "react-icons/lu";
import { formatDate } from '../lib/utils.js'
import axios from 'axios';
import api from '../lib/axios.js';
// import { handleDelete } from '../lib/handleDelete.js'


const NoteCard = ({ note, setNotes }) => {



  const handleDelete = async (e, id) => {
    e.preventDefault();  //need to get rid of navigation Bheverarour 

    if (!window.confirm("Are you sure you want to delete this note?")) return;
    try {
      await api.delete(`/notes/${id}`);//deleting from database

      setNotes((note) => note.filter((n) => n._id !== id)); // deleteing from ui 
      toast.success("Note Deleted");






    } catch (error) {
      console.log(error)
      toast.error("Error Deleting the Note!")

    }



  }

  return (
    <Link to={`/note/${note._id}`}
      className="card bg-base-300 w-96 shadow-xl border-t-4 border-green-500">

      <div className="card-body">
        <h2 className="card-title">{note.title}</h2>
        <p>{note.content}</p>

        <div className=" flex justify-between ">
          <span className='my-auto' >{formatDate(note.createdAt)}</span>
          <div className=" flex justify-end gap-1">
            <LuPencil className='my-auto' />
            <button className="btn btn-ghost text-error" onClick={(e) => {
              e.preventDefault();    //need to get rid of navigation Bheverarour 
              handleDelete(e,note._id)
            }}>
              <RiDeleteBin5Line className='size-5' />
            </button>

          </div>
        </div>
      </div>


    </Link>
  )
}

export default NoteCard

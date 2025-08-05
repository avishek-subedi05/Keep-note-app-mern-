
import React from 'react'
import { LuNotebookPen } from "react-icons/lu";
import { FaPlus } from "react-icons/fa6";
import { Link } from 'react-router'

const NotenotFound = () => {
  return (
    <div className="card bg-base-200 text-neutral-content mx-auto max-w-2xl border-t-4 border-green-500">
      <div className="card-body items-center text-center">

        <LuNotebookPen className='size-20' />

        <h2 className="card-title mb-4">No Notes Yet</h2>
        <div className="card justify-end py-4">
          <h2 className="text mb-4">Ready To organize your Thought !</h2>
          <Link to={'/create'} className='btn btn-primary'>
            <FaPlus />
            <span>Create</span>
          </Link>

        </div>
      </div>
    </div>
  )
}

export default NotenotFound

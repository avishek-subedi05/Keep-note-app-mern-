import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router';
import { IoMdArrowBack } from 'react-icons/io'
import toast from 'react-hot-toast';
import axios from 'axios';
import api from '../lib/axios';

const Createpage = () => {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false)

  const navigate=useNavigate();     

  const handleSubmit = async (e) => {
        e.preventDefault();

        if(!title.trim()|| !content.trim()){
          toast.error("Please Fiil the input area!");
          return;
        }
        setLoading(true);
        try {
          await api.post("/notes",{title ,content,})
          toast.success("Notes Created Successfully")
          navigate('/')
          
        } catch (error) {
          console.log(error); 
          toast.error("Error Creating Note!")
          
        }finally{
          setLoading(false)
        }
        
  }

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Link to={'/'}>
            <button className='btn btn-ghost text-2xl '>
              <IoMdArrowBack />
              Back to Home
            </button>
          </Link>

          <div className="card bg-base-100  shadow-xl">
            <div className="card-body">
              <div className="card-title mx-auto">Create Note</div>

              <form onSubmit={handleSubmit}>

                <div className='form-controls'>

                  <div className='lable mt-4'>
                    <label className=' px-3'>Title</label>
                  </div>

                  <input type="text"
                    placeholder="Title here"
                    className="input input-bordered w-full  mt-4"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />
                </div>

                <div className='form-controls'>
                  <div className='lable mt-4'>
                    <label className=' px-3'>Note</label>
                  </div>
                  <input type="text"
                    placeholder="Note "
                    className="input input-bordered w-full  mt-4"
                    value={content}
                    onChange={(e) => setContent(e.target.value)} />
                </div>

                <div className='card-actions justify-end mt-8' >
                <button className='btn btn-primary' disabled={loading} >{ loading ? " Creating...."  : "Create Note"}</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Createpage

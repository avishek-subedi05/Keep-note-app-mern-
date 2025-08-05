
import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import toast from 'react-hot-toast'
import NoteCard from '../components/NoteCard'
import NotenotFound from '../components/NotenotFound'
import api from '../lib/axios'

const HomePage = () => {

  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchNotes = async () => {

      try {
        const res = await api.get("/notes");

        setNotes(res.data);


      } catch (error) {
        console.log("Error fetching data");
        toast.error("Failed to fetch Data!!");
        setNotes([]);
      }
      finally {
        setLoading(false);
      }
    }
    fetchNotes();

  },[]);
  return (
    <>
      <div className="min-h-screen">
        <Navbar />

        <div className='mx-auto mt-6 p-4 max-w-7xl'>

          {loading && <div className='text-center text-primary py-10 text-2xl'> Loading Notes! <br /><progress className="progress w-56"></progress></div>}

       {(notes.length == 0)&&  <NotenotFound />}
           
     

          {notes.length > 0 && (

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {notes.map((note) => 
                <NoteCard key={note._id} note={note} setNotes={setNotes} />
                
              )}

            </div>
          )}
        </div>

      </div>

    </>
  )
}

export default HomePage

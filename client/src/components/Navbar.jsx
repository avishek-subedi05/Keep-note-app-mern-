import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { Link } from 'react-router'

const Navbar = () => {
    return (
        <header className='bg-base-300 border-base-content'>
            <div className='mx-auto max-w-6xl p-4'>
                <div className='flex items-center justify-between'>

                    <h1 className='text-3xl font-bold tracking-tight text-primary'>ThinkBoard </h1>
                    <Link to={'/create'} className='btn btn-primary'>
                        <FaPlus />
                        <span>New Note</span>
                    </Link>

                </div>

            </div>
        </header>
    )
}

export default Navbar

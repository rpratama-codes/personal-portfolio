// import React from 'react'
import { useNavigate } from "react-router-dom"
import * as Icons from 'react-feather'

export default function Navbar() {
	const navigate = useNavigate()

	return (
		<nav className='container mx-auto flex justify-between items-center'>
			<div>
				<img onClick={() => navigate("/")} className='h-20 min-h-20' src='/assets/images/logo.svg' />
			</div>
			<div className='flex'>
				{/* <div className='flex flex-col h-fit p-4  border-black hover:bg-black hover:text-white hover:cursor-pointer'>
            <p className=' font-bold text-xl'>Project Gallery</p>
          </div> */}
				<a href="https://www.linkedin.com/in/rizqi-pratama" target='_blank' rel="noreferrer">
					<div className='flex  items-center justify-center h-fit p-4  border-black hover:bg-black hover:text-white gap-3'>
						<Icons.Linkedin />
						<p className='font-bold '>Connect on Linkedin</p>
					</div>
				</a>
			</div>
		</nav>
	)
}

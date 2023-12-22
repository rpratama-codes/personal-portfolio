// import React from 'react'
import { Link } from "react-router-dom"
import * as Icons from 'react-feather'

export default function Navbar() {

	return (
		<nav className='container mx-auto flex justify-between items-center'>
			<div className="flex items-center gap-10">
				<Link to="/">
					<img className='h-20 min-h-20' src='/assets/images/logo.svg' />
				</Link>
				<Link to="/"
					className="max-sm:hidden flex items-center px-4 h-20 border-black hover:bg-black hover:text-white">
					<p className='font-bold'>Home</p>
				</Link>
			</div>
			<div className='flex'>
				<a href="https://www.linkedin.com/in/rizqi-pratama" target='_blank' rel="noreferrer">
					<div className='flex  items-center justify-between h-20 px-2  border-black hover:bg-black hover:text-white gap-5'>
						<Icons.Linkedin />
						<p className='font-bold'>Connect on Linkedin</p>
					</div>
				</a>
			</div>
		</nav>
	)
}

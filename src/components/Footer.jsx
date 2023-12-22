// import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {

	return (
		<footer className='container mx-auto h-56 bg-black mt-20 p-20 flex items-center max-lg:justify-center'>
			<Link to="/">
				<img src="/assets/images/logo-white.svg" alt="logo" style={{ height: 84 }} />
			</Link>
		</footer>
	)
}

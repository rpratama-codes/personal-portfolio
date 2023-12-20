import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Footer() {
	const navigate = useNavigate()

	return (
		<footer className='container mx-auto h-56 bg-black mt-20 p-20 flex items-center'>
			<img onClick={()=>navigate("/")} src="/assets/images/logo-white.svg" alt="logo" style={{ height: 84 }} />
		</footer>
	)
}

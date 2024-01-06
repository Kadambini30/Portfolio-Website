import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';
import { Link } from 'react-scroll';

const Navbar = () => {
	const [isMenuOpen, setMenuOpen] = useState(false);

	const toggleBar = () => {
		setMenuOpen(!isMenuOpen);
	};

	return (
		<div className="text-primary flex justify-between w-full gap-4 p-4 h-20 bg-bgprim fixed selection:bg-primary selection:text-bgprim">
			<div className="flex w-full">
				<p className="text-4xl font-poppins">&lt;Kadambini/&gt;</p>
			</div>
			{/* Desktop Navbar */}
			<div className="pt-1 md:flex justify-around text-lg flex-wrap w-full h-full hidden">
				{["home", "about", "contact"].map((section) => (
					<div key={section} className="flex gap-1 hover:drop-shadow-3xl">
						<Link to={section} smooth={true} offset={50} duration={500}>
							{section.charAt(0).toUpperCase() + section.slice(1)}
						</Link>
					</div>
				))}
			</div>
			{/* Mobile Ham */}
			<div onClick={toggleBar} className="md:hidden z-20">
				{!isMenuOpen ? (
					<GiHamburgerMenu className="h-6 w-6" />
				) : (
					<IoClose className="h-10 w-10" />
				)}
			</div>
			{/* Mobile Menu */}
			<ul
				className={
					isMenuOpen
						? 'absolute z-10 pt-1 top-0 left-0 bg-bgprim/90 flex flex-col justify-center items-center gap-10 text-xl flex-wrap w-full h-screen'
						: 'hidden'}>
				<li className="flex gap-1 hover:drop-shadow-3xl"><Link onClick={toggleBar} to='home' smooth={true} duration={500}>Home</Link></li>
				<li className="flex gap-1 hover:drop-shadow-3xl"><Link onClick={toggleBar} to='about' smooth={true} duration={500}>About</Link></li>
				<li className="flex gap-1 hover:drop-shadow-3xl"><Link onClick={toggleBar} to='contact' smooth={true} duration={500}>Contact</Link></li>
			</ul> 
		</div>
	);
};

export default Navbar;

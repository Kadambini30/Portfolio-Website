import React from 'react';
import Lottie from 'lottie-react';
import logo from '../assets/idk.json';
import { FaArrowRight } from 'react-icons/fa6';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';
import logo1 from '../assets/logo.gif'
function Index() {
	return (
		<>
		<div name='home' className="w-full h-full  bg-bgprim  flex flex-col items-center justify-center pt-20 selection:bg-primary selection:text-bgprim">
			<main className="w-full h-full  bg-bgprim flex  items-center justify-center flex-wrap  px-4  xl:justify-between xl:pt-2 xl:pb-16">
				<div className="text-primary  font-poppins text-center xl:pb-4 xl:pl-[5rem] flex flex-col justify-start items-center xl:items-start ">
					<div className="text-7xl pt-32 pb-4">Kadambini Trivedi,</div>
					<TypeAnimation
						sequence={['building websites', 10000]}
						speed={10}
						style={{ fontSize: '3rem' }}
						repeat={Infinity}
					/>
					<div className="pt-2">
					<Link  to='about' smooth={true} duration={500}>
						<div className="bg-primary text-bgprim h-10 w-28 group flex justify-center items-center gap-1 font-semibold">
							Know More{' '}
							<span className='group-hover:rotate-90 duration-200'>
								<FaArrowRight />
							</span>
							
						</div>
						</Link>
					</div>
				</div>
				<div className=''><Lottie animationData={logo} className=" md:block  inset-0   h-[40rem]  w-full md:w-auto" />
				
				</div>
			</main>
			</div>
		</>
	);
}

export default Index;

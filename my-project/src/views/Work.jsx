import React from 'react';
import LB from '../assets/LiteBite.png';
import VE from '../assets/VitalEase.png';
import BY from '../assets/image 1.png';
const Work = () => {
	return (
		<>
			<div className="h-fit xl:h-screen w-full bg-bgprim flex flex-col justify-center items-start p-4 gap-6 pt-10 ">
				<div className="text-primary/40 text-3xl">
					Some projects I have done:
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 xl:gap-52 px-4">
					<div>
						<img src={LB} alt="" className="w-72 h-72"/>
                        <div className=' bg-white text-primary w-72 h-72 absolute top-10 left-10'>LiteBite-A Recipe Generator</div>
					</div>
					<img src={BY} alt="" className="w-72 h-72" />
					<img src={VE} alt="" className="w-72 h-72" />
				</div>
			</div>
		</>
	);
};

export default Work;

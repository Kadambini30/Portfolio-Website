import React from 'react';
import c from '../assets/c.png';
import java from '../assets/java.png';
import astro from '../assets/astro.png';
import me from '../assets/me.jpg';
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/javascript.png';
import react from '../assets/react.png';
import tw from '../assets/tailwind.png';
import { MdDownload } from 'react-icons/md';
function About() {
	return (
		<>
			<div name='about' className="w-full h-full  bg-bgprim selection:bg-primary selection:text-bgprim">
				<div className="h-fit xl:h-screen w-full bg-bgprim flex flex-col justify-center items-start p-4 gap-6 pt-20 ">
					<div className="text-primary/40 text-3xl">Who am I?</div>
					<div className="bg-[#0e0e1c] w-full text-primary xl:drop-shadow-2xl  p-10 flex justify-center xl:justify-between flex-wrap h-fit">
						<div>
							<img
								src={me}
								alt=""
								className="rounded-full w-64 h-64 object-cover"
							/>
						</div>
						<div className="w-3/4 text-poppins text-xl flex flex-col gap-4 ">
							<div>
								Greetings! I am Kadambini Trivedi, 2nd year student at VIT
								Chennai pursuing Electronics & Computer Engineering. I am an
								aspiring full-stack developer.
							</div>
							<div>
								{' '}
								I see myself as a Front-end Developer with knowledge in HTML,
								CSS, React and the fascinating arena of Java Script and Astro.
							</div>
							<div>
								I am always eager to learn new skills and technologies, and to
								collaborate with other developers and engineers who share my
								vision and values. My core competencies include web development,
								problem-solving, creativity, and teamwork.
							</div>
						</div>
					</div>
					<div className="bg-[#0e0e1c] w-full  text-bgprim xl:drop-shadow-2xl p-2 h-fit xl:h-36  text-poppins text-xl font-semibold">
						<div className="font-bold text-primary">
							Languages & Frameworks I use
						</div>
						<div className=" flex flex-wrap justify-evenly pt-4">
							<div className=" text-primary">
								<div className="">
									<img src={js} alt="" className="h-12 w-10" />
								</div>
								<div>Java Script</div>
							</div>
							<div className=" text-primary">
								<div className="">
									<img src={html} alt="" className="h-12 w-10" />
								</div>
								<div>HTML</div>
							</div>
							<div className=" text-primary">
								<div className="">
									<img src={css} alt="" className="h-12 w-10" />
								</div>
								<div>CSS</div>
							</div>
							<div className=" text-primary">
								<div className="">
									<img src={react} alt="" className="h-12 w-10" />
								</div>
								<div>React</div>
							</div>
							<div className=" text-primary">
								<div className="">
									<img src={tw} alt="" className="h-12 w-10" />
								</div>
								<div>Tailwind</div>
							</div>
							<div className=" text-primary">
								<div className="">
									<img src={astro} alt="" className="h-12 w-10" />
								</div>
								<div>Astro</div>
							</div>
							<div className=" text-primary">
								<div className="">
									<img src={c} alt="" className="h-12 w-10" />
								</div>
								<div>C++</div>
							</div>
							<div className=" text-primary">
								<div className="">
									<img src={java} alt="" className="h-12 w-10 bg-white" />
								</div>
								<div>Java</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col justify-center items-center w-full pt-6">
						<button className="border-2 border-primary text-primary flex items-center  my-8 px-4 py-3 mx-auto hover:bg-black">
							Download Resume
							<span className="mt-1">
								<MdDownload />
							</span>
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default About;

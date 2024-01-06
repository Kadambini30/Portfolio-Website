import React from 'react';

const Contact = () => {
	return (
		<div name='contact' className="h-fit xl:h-screen w-full bg-bgprim flex justify-center items-center p-4 selection:bg-primary selection:text-bgprim">
			<form action="https://getform.io/f/d44ccdd5-44e6-4340-8d2c-532c9530facd" method="POST" className="flex flex-col w-full max-w-[600px] ">
				<div className="text-primary/40 text-3xl pb-8">Contact</div>
				<input
					type="text"
					placeholder="Name"
					className="bg-primary placeholder:text-bgprim  p-2 mb-4"
				/>
				<input
					type="email"
					placeholder="Enter Email"
					className="bg-primary placeholder:text-bgprim p-2 peer mb-1 focus:invalid:border-pink-500"
				/>
                <p className='invisible peer-invalid:visible text-pink-600 text-[1rem] inline'> Please provide a valid email</p>
				<textarea
					name="message"
					rows="10"
					placeholder="Write Message"
					className="bg-primary placeholder:text-bgprim p-2"
				></textarea>
                <button className='border-2 border-primary text-primary flex items-center  my-8 px-4 py-3 mx-auto hover:bg-black'>Let's Collaborate</button>
			</form>
		</div>
	);
};

export default Contact;

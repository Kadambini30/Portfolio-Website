import Index from './views/index';
import Navbar from '../src/views/Navbar';
import About from './views/about';
import Work from './views/Work';
import Contact from './views/Contact';
export default function App() {
	return (
		<div>
			<Navbar />
			<Index />
			<About />
			<Contact/>
		</div>
	);
}

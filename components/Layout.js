import Footer from './Footer';
import Navbar from './Navbar';

const Layout = (props) => {
	console.log('layout.js', props);
	return (
		<div className="content">
			<Navbar />
			{props.children}
			<Footer />
		</div>
	);
};

export default Layout;

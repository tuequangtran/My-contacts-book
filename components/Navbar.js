import Link from 'next/link';
import Image from 'next/dist/client/image';

const Navbar = () => {
	return (
		<nav>
			<div className="logo">
				<Link href="/">
					<Image width={77} height={77} src="/address.png" alt="addressbook" />
				</Link>
			</div>
			<Link href="/">
				<a>Home</a>
			</Link>
			<Link href="/error">
				<a>Error Handling</a>
			</Link>
			<Link href="/contactsbook">
				<a>Contacts</a>
			</Link>
		</nav>
	);
};

export default Navbar;

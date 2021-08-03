import { useRouter } from 'next/dist/client/router'; //also 'next/router'
import Link from 'next/link';
import { useEffect } from 'react';

const NotFound = () => {
	const router = useRouter();

	useEffect(() => {
		console.log('useEffect');
		setTimeout(() => {
			router.push('/');
		}, 10000);
	}, []);

	return (
		<div className="not-found">
			<h1>Oops...</h1>
			<h2>That page does not exist. Try another.</h2>
			<p>
				Either wait 10 seconds or click the link to go back to the{' '}
				<Link href="/">
					<a>Homepage</a>
				</Link>{' '}
			</p>
		</div>
	);
};

export default NotFound;

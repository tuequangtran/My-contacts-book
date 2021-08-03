import { useRouter } from 'next/dist/client/router';

export async function getStaticPaths({ params }) {
	const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
	const data = await res.json();
	//console.log('[id] getStaticPaths', data);

	const paths = data.map((user) => {
		return {
			params : { id: user.id.toString() }
		};
	});

	return {
		paths    : paths,
		fallback : false
	};
}

export async function getStaticProps(context) {
	const id = context.params.id;
	const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
	const data = await res.json();
	//console.log('[id] getStaticProps', context);

	return {
		props : { contact: data }
	};
}

const Details = ({ contact }) => {
	// const router = useRouter();
	// const { id } = router.query;
	// console.log('[id].js', router.query);
	// console.log('[id].js props', contact);
	return (
		<div>
			<h1>{contact.name}</h1>
			<p>Phone: {contact.phone}</p>
			<p>Email: {contact.email}</p>
			<p>Website: {contact.website}</p>
			<p>City: {contact.address.city}</p>
		</div>
	);
};

export default Details;

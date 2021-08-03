import Head from 'next/head';
import React from 'react';
import styles from '../../styles/ContactsBook.module.css';
import Link from 'next/link';

export const getStaticProps = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await res.json();
	console.log('contacts getStaticProps', data);
	return {
		props : { contacts: data }
	};
};

const Friends = ({ contacts }) => {
	//console.log('contactsbook', contacts);
	return (
		<React.Fragment>
			<Head>
				<title>Contacts Book | Contacts Book</title>
				<meta name="keywords" content="address book" />
			</Head>
			<div>
				<h1>All Contacts</h1>
				{contacts.map((contact) => (
					<Link href={`/contactsbook/${contact.id}`} key={contact.id}>
						<a className={styles.single}>
							<h3>{contact.name}</h3>
						</a>
					</Link>
				))}
			</div>
		</React.Fragment>
	);
};

export default Friends;

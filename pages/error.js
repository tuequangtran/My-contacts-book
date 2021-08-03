import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const About = () => {
	return (
		<React.Fragment>
			<Head>
				<title>Contacts Book | Error Handling</title>
				<meta name="keywords" content="address book about" />
			</Head>
			<div>
				<h1>Error Handling</h1>
				<p>Try to navigate to misspelled/wrong links to see how I handle error handling in Next.js</p>
				<Link href="/hampage">
					<a style={{ textDecoration: 'underline' }}>Click here to go to the hampage</a>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default About;

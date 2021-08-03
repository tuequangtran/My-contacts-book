import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar.js';
import styles from '../styles/Home.module.css';
import Footer from '../components/Footer.js';
import Link from 'next/link';
import React from 'react';

export default function Home() {
	return (
		<React.Fragment>
			<Head>
				<title>Contacts Book | Home</title>
				<meta name="keywords" content="contacts book" />
			</Head>
			<div className={styles.container}>
				<h1 className={styles.title}>Welcome to My Contacts Book!</h1>
				<p className={styles.text}>
					This is an example Address Book app using React, Next.JS, and JSON Server.
				</p>
				<p className={styles.text}>
					All of the API end points were provided courtesy of https://jsonplaceholder.typicode.com.
				</p>
				<Link href="/contactsbook">
					<a className={styles.btn}>View Contacts</a>
				</Link>
			</div>
		</React.Fragment>
	);
}

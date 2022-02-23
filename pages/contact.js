import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Contact() {
    return (
        <div className="container">
            <Head>
                <title>Contact</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <Navbar />

            <section className="hero">
                <div className="text_wrapper w-full">
                    <h1 className="title">Contact</h1>
                    <p className="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt error nostrum.</p>

                    <ul className="contact-links">
                        <li className="contact-item">Email: rizkipratama19@gmail.com</li>
                        <li className="contact-item">Phone: +6289677451818</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
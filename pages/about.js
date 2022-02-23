import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function About() {
    return (
        <div className="container">
            <Head>
                <title>About</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <Navbar />

            <section className="hero">
                <div className="text_wrapper w-full">
                    <h1 className="title">Profile</h1>
                    <p className="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, esse? Consectetur, velit hic nam ipsam ad blanditiis libero rerum animi, similique non corporis illo excepturi officia! Dicta similique fuga quisquam! Minus perferendis laboriosam modi quidem earum. Adipisci reiciendis et laudantium, dolore recusandae quis atque mollitia nihil numquam laborum cum eveniet velit animi quia ipsa delectus molestiae! Dolorum nesciunt assumenda architecto.</p>
                    <p className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor sint nisi ad vitae commodi odio odit fugiat, officia modi molestiae natus beatae obcaecati perferendis mollitia. Itaque illo repellat, laborum mollitia corporis similique eligendi rerum, officia atque modi minima minus aut, quo est debitis alias quod enim ea nam incidunt accusantium possimus laudantium quis. Iste delectus minima magni, labore illum molestiae dicta amet voluptatem veritatis, odio aspernatur. Pariatur cum ullam quos adipisci, corrupti harum molestias tempora!</p>
                </div>
            </section>
        </div>
    );
}
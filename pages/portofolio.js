import Head from "next/head";
import Navbar from "../components/Navbar";
import Image from "next/image";

export default function Portofolio() {
    return (
        <div className="container">
            <Head>
                <title>Portfolio</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <Navbar />

            <section className="hero">
                <div className="text_wrapper w-full">
                    <h1 className="title">Portfolio</h1>
                    <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, sint.</p>

                    <div className="portfolio-wrapper">
                        <div className="portfolio-item">
                            <Image className="portfolio-image" src="/coin.webp" width={350} height={250} alt="portfolio-image" />

                            <h4 className="portfolio-name">Coin Exchange App UI</h4>
                            <div className="portfolio-category">mobile dev</div>
                        </div>

                        <div className="portfolio-item">
                            <Image className="portfolio-image" src="/trading.webp" width={350} height={250} alt="portfolio-image" />

                            <h4 className="portfolio-name">Best Stock Trading App Design</h4>
                            <div className="portfolio-category">mobile dev</div>
                        </div>

                        <div className="portfolio-item">
                            <Image className="portfolio-image" src="/cars.webp" width={350} height={250} alt="portfolio-image" />

                            <h4 className="portfolio-name">Cars Marketplace Mobile App</h4>
                            <div className="portfolio-category">mobile dev</div>
                        </div>

                        <div className="portfolio-item">
                            <Image className="portfolio-image" src="/nft.webp" width={350} height={250} alt="portfolio-image" />

                            <h4 className="portfolio-name">NFT Gallery Showcase App</h4>
                            <div className="portfolio-category">mobile dev</div>
                        </div>

                        <div className="portfolio-item">
                            <Image className="portfolio-image" src="/banking.webp" width={350} height={250} alt="portfolio-image" />

                            <h4 className="portfolio-name">Finance Banking App Design</h4>
                            <div className="portfolio-category">mobile dev</div>
                        </div>

                        <div className="portfolio-item">
                            <Image className="portfolio-image" src="/calendar.webp" width={350} height={250} alt="portfolio-image" />

                            <h4 className="portfolio-name">Calendar App</h4>
                            <div className="portfolio-category">mobile dev</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
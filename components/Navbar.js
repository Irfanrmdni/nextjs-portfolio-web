import Link from 'next/link';
import { withRouter } from 'next/router';

function Navbar({ router }) {
    const navs = [
        { id: 1, text: 'Home', href: '/' },
        { id: 2, text: 'About', href: '/about' },
        { id: 3, text: 'Portfolio', href: '/portofolio' },
        { id: 4, text: 'Contact', href: '/contact' }
    ];

    return (
        <nav className="navbar">
            <Link href="/"><a className="logo">Rizki Pratama</a></Link>

            <ul className="nav_link">
                {navs.map(nav => {
                    return (
                        <li key={nav.id}>
                            <Link href={nav.href}><a className={`nav_item ${router.pathname === nav.href ? 'active' : ''}`}>{nav.text}</a></Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

export default withRouter(Navbar);
import Link from 'next/link';

export function App({ children }) {
    return (
        <div className="app">
            <nav className="app__menu">
                <h1 className="app__logo"><Link href="/"><a>postmortem<span className="text-purple-600">r</span></a></Link></h1>
                {/* <blockquote>
                    <p>The best part of any downtime is the subsequent postmortem.</p>
                    <small>Me</small>
                </blockquote> */}
                <ul className="app__menu-list">
                    <li className="app__menu-item">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="app__menu-item">
                        <Link href="/tags">Browse By Tag</Link>
                    </li>
                    <li className="app__menu-item">
                        <Link href="/random"><a target="_blank">Random</a></Link>
                    </li>
                    <li className="app__menu-item">
                        <Link href="https://github.com/rpnzl/postmortemr"><a target="_blank">Contribute</a></Link>
                    </li>
                </ul>
            </nav>
            <div className="app__content">
                {children}
            </div>
        </div>
    );
}

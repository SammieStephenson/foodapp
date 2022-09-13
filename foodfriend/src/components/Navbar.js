
export default function Navbar() {
    const path = window.location.pathname;
    return (
        <nav className="nav">
            <a href="/" classname="logo">LOGO</a>
            <ul>
                <li>
                    <a href="/Resta"> Restaurants </a>
                </li>
                <li>
                    <a href="/friends"> Friends </a>
                </li>
            </ul>
        </nav>
    )
};


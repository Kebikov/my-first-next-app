import Link from "next/link";
import './header.scss';


//= Header 
const Header = () => {
    return(
        <header className="header">
            <Link href={'/'} className="header__link">Home</Link>
            <Link href={'/blog'} className="header__link">Blog</Link>
            <Link href={'/about'} className="header__link">About</Link>
        </header>
    )
}

export default Header;
import { LinkType } from '../../../@types';
import NavBarData from '../../../data/NavBarData';
import './Header.scss';

function Header() {
  const navBar = NavBarData.map((link: LinkType) => (
    <a key={link.id} href={`#${link.slug}`}>
      {link.name}
    </a>
  ));

  return (
    <header className="header">
      <a href="/" className="header-logo">
        JoFlamme
      </a>

      <nav className="header-navbar">{navBar}</nav>
    </header>
  );
}

export default Header;

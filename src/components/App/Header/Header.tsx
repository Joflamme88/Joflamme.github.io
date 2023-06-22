// eslint-disable-next-line import/no-extraneous-dependencies
import { Icon } from '@iconify-icon/react';
import { LinkType } from '../../../@types';
import NavBarData from '../../../data/NavBarData';
import logo from '../../../assets/JoPictureProfil_FlouCV.png';

import './Header.scss';

function Header() {
  const navBar = NavBarData.map((link: LinkType) => (
    <li key={link.id}>
      <a href={`#${link.slug}`}>
        <Icon className="iconNavBar" icon={link.icon} />
        {link.name}
      </a>
    </li>
  ));

  return (
    <header className="header">
      <div className="header-profile">
        <img src={logo} alt="jonathan flamme" width="150px" />
        <h1>J Flamme</h1>
        <div className="header-profile-social-icons">
          <a href="/">
            <Icon className="iconHeader" icon="mdi:github" />
          </a>
          <a href="/">
            <Icon className="iconHeader" icon="mdi:linkedin" />
          </a>
        </div>
      </div>

      <nav className="header-navbar">
        <ul>{navBar}</ul>
      </nav>

      <div className="header-footer">
        <p>&copy; Coryright 2023 </p>
        <p>Designed By JoFlamme</p>
      </div>
    </header>
  );
}

export default Header;

// eslint-disable-next-line import/no-extraneous-dependencies
import { Icon } from '@iconify-icon/react';
import { useState } from 'react';
import classNames from 'classnames';

import NavBarData from '../../../data/NavBarData';
import { LinkType } from '../../../@types';
import logo from '../../../assets/JoPictureProfil_FlouCV.png';
import treant from '../../../assets/signature_treant.png';
import './Header.scss';

function Header() {
  const [menuHeader, setMenuHeader] = useState(true);

  function handleMenu() {
    setMenuHeader(!menuHeader);
  }

  const navBar = NavBarData.map((link: LinkType) => (
    <li key={link.id}>
      <a href={`#${link.slug}`}>
        <Icon className="iconNavBar" icon={link.icon} />
        {link.name}
      </a>
    </li>
  ));

  return (
    <>
      <header className={classNames('header', { active: !menuHeader })}>
        <div className="header-profile">
          <img src={logo} alt="jonathan flamme" width="150px" />
          <h1>J Flamme</h1>
          <div className="header-profile-social-icons">
            <a href="https://github.com/Joflamme88">
              <Icon className="iconHeader" icon="mdi:github" />
            </a>
            <a href="https://www.linkedin.com/in/jonathan-flamme-5209b0153/">
              <Icon className="iconHeader" icon="mdi:linkedin" />
            </a>
          </div>
        </div>
        <nav className="header-navbar">
          <ul>{navBar}</ul>
        </nav>

        <div className={classNames('header-footer', { active: !menuHeader })}>
          <p>Joflamme</p>
          <img
            id="signature_treant"
            src={treant}
            alt="Signature Joflamme treant"
          />
        </div>
      </header>
      <button
        type="button"
        className="MenuBtn"
        title="Ouvrir le menu"
        onClick={() => handleMenu()}
      >
        {menuHeader ? (
          <Icon icon="fe:bar" className="MenuBtn" />
        ) : (
          <Icon icon="ph:x-bold" className="MenuBtn" />
        )}
      </button>
    </>
  );
}

export default Header;

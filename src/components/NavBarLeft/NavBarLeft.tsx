import '../App/App.scss';
// import { MenuLink } from '../../@types';

import LinksData from '../../data/LinksData';

import NavLink from './NavLink/NavLink';

function NavBarLeft() {
  const links = LinksData.map((link) => {
    return <NavLink key={link.id} link={link} />;
  });

  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2">
      <ul className="bg-base-200 rounded-box px-10 py-10">{links}</ul>
    </div>
  );
}

export default NavBarLeft;

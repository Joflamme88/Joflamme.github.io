import '../../App/App.scss';
import { MenuLink } from '../../../@types';

interface NavLinkProps {
  link: MenuLink;
}

function NavLink({ link }: NavLinkProps) {
  return (
    <div className="text-blue-500 mb-7">
      <li>{link.name}</li>
    </div>
  );
}

export default NavLink;

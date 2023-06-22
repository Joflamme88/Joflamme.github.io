import { Icon } from '@iconify-icon/react';
import './IconLogo.scss';

interface IconProps {
  icon: string;
  href: string;
}

function IconLogo({ icon, href }: IconProps) {
  return <Icon href={href} className="icon" icon={icon} />;
}

export default IconLogo;

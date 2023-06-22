// eslint-disable-next-line import/no-extraneous-dependencies
import { Icon } from '@iconify-icon/react';
import './IconLogo.scss';

interface IconProps {
  icon: string;
  href: string;
}

function IconLogo({ icon, href }: IconProps) {
  return <Icon href={href} className="iconLogo" icon={icon} />;
}

export default IconLogo;

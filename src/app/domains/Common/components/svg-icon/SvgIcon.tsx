import { FC } from 'react';
import * as Icons from 'assets/icons';
import { SvgIconProps } from './types';

const SvgIcon: FC<SvgIconProps> = ({ icon, ...props }) => {
  const Icon = Icons[icon];
  return <Icon aria-hidden="true" {...props} />;
};

export default SvgIcon;

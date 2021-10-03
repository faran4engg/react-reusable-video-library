import * as Icons from 'assets/icons';

const SvgIcon = ({ icon, ...props }) => {
  const Icon = Icons[icon];
  return <Icon aria-hidden="true" {...props} />;
};

export default SvgIcon;

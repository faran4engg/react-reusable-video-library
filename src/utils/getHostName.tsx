/* eslint-disable max-len */

export const getHostName = (href): string => {
  if (!href) return 'non-matching';

  const match = href.match(
    // eslint-disable-next-line no-useless-escape
    /^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/,
  );
  return match?.[3];
};

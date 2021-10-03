const required = value =>
  value ? undefined : (
    <span className="text-red-400 capitalize">😞 Required</span>
  );

const emailValidation = value => {
  // eslint-disable-next-line max-len
  var validRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!value.match(validRegex))
    return <span className="text-red-400 capitalize">😞 Not Valid Email</span>;
};

const nonEmpty = (value: string) =>
  !value?.trim() ? (
    <span className="text-red-400 capitalize">😞 Cannot be empty</span>
  ) : undefined;
const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined);

export { required, nonEmpty, composeValidators, emailValidation };

class EmailSchema {
  validator = (value) => typeof value === 'string' && value.includes('@');

  constructor(validators = []) {
    this.validators = [this.validator, ...validators];
  }

  setEmailLengthConstraint(min, max) {
    const validators = [(value) => value.split('@')[0].length >= min];
    if (max) {
      validators.push((value) => value.split('@')[0].length <= max);
    }
    return new EmailSchema(validators);
  }

  isValid(value) {
    return this.validators.every((validator) => validator(value));
  }
}

export default EmailSchema;

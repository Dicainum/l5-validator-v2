class AgeSchema {
  validator = (value) => typeof value === 'number' && !Number.isNaN(value);

  constructor(validators = []) {
    this.validators = [this.validator, ...validators];
  }

  isAdult() {
    return new AgeSchema([(value) => value >= 18]);
  }

  isValid(value) {
    return this.validators.every((validator) => validator(value));
  }
}

export default AgeSchema;

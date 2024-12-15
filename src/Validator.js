import AgeSchema from './AgeSchema.js';
import EmailSchema from './EmailSchema.js';
import ObjectSchema from './ObjectSchema.js';

class Validator {
  email() {
    return new EmailSchema();
  }

  age() {
    return new AgeSchema();
  }

  user() {
    return new ObjectSchema();
  }
}

export default Validator;

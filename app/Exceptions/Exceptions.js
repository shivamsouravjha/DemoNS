export default class Exception extends Error{
    constructor(message) {
      super();
      this.message = message || 'The syntax of the request entity is correct but was unable to process the contained instructions.';
    }
  }
  

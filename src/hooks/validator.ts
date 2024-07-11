
export const validateNumberAndLength = (
    value: string,
    maxLength: number,
    name: string
  ): string => {
    if (!/^\d*$/.test(value)) {
      let errorMessage = `The ${name} should contain only numbers`;
      if (value.length > maxLength) {
        errorMessage += ` and should not exceed ${maxLength} characters.`;
      }
      return errorMessage;
    } else if (value.length > maxLength) {
      return `The ${name} should not exceed ${maxLength} characters.`;
    }
    return "";
  };
  
  export const validateName = (value: string): string => {
    if (!/^[a-zA-Z]+( [a-zA-Z]+)*$/.test(value)) {
      return "The name should contain only letters and single spaces between words.";
    }
    return "";
  };
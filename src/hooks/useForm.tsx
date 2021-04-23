import { ChangeEvent, useState } from 'react'
export interface Validatable {
  value: string | number | Date;
  valueCompare?: string | number
  type?: string
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}
export const useForm = <T extends Object>(initialState: T) => {
  const [formValues, setFormValues] = useState(initialState);
  const [typing, setTyping] = useState(false)

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    let { name, value } = target
    
    setFormValues((prevValues) => {
      setTyping(true)
      return {
        ...prevValues,
        [name]: value
      }
    })
  }
  const reset = (newFormState = initialState) => {
    setFormValues(newFormState)
  }

  const customValidator = (validableInput: Validatable) => {
    let isValid = true;
    if (validableInput.required) {
      isValid = isValid && validableInput.value.toString().trim().length !== 0;
    }
    if (validableInput.type === 'email') {
      isValid = isValid && validableInput.value.toString().trim().includes('@');
    }
    if (validableInput.minLength != null && typeof validableInput.value === 'string') {
      isValid = isValid && validableInput.value.length > validableInput.minLength
    }
    if (validableInput.maxLength != null && typeof validableInput.value === 'string') {
      isValid = isValid && validableInput.value.length < validableInput.maxLength
    }
    if (validableInput.min != null && typeof validableInput.value === 'number') {
      isValid = isValid && validableInput.value > validableInput.min;
    }
    if (validableInput.max != null && typeof validableInput.value === 'number') {
      isValid = isValid && validableInput.value < validableInput.max
    }
    if (validableInput.valueCompare) {
      isValid = isValid && validableInput.valueCompare === validableInput.value
    }
    return isValid

  }

  return { formValues, handleInputChange, reset, customValidator, typing, setTyping }
}
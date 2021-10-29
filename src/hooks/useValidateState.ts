import { useState } from 'react';

type VariationFunction<T> = (value: T) => boolean;

export const useValidateState = <T>(
  initial: T,
  func: VariationFunction<T>
): [T, boolean, (value: T) => void] => {
  const [state, setState] = useState(initial);
  const [isValid, setIsValid] = useState(func(state));

  const setValue = (value: T) => {
    setState(value);
    setIsValid(func(value));
  };

  return [state, isValid, setValue];
};

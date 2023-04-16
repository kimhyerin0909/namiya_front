import React, { useState } from "react";

export const useInput = (initialValue: any) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };
  return { value, onChange };
};

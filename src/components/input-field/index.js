import React from "react";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";

export default function InputField(props) {
  const {
    leftIcon,
    placeholder,
    type,
    size,
    value,
    onChange,
    rightIcon,
    inputStyle,
  } = props;

  return (
    <InputGroup>
      {leftIcon ? (
        <InputLeftElement pointerEvents="none">{leftIcon}</InputLeftElement>
      ) : null}
      <Input
        width="100%"
        style={inputStyle ? inputStyle : { border: "1px solid red" }}
        placeholder={placeholder}
        type={type}
        size={size ? size : "md"}
        value={value}
        onChange={onChange}
      />
      {rightIcon ? (
        <InputRightElement pointerEvents="none">{rightIcon}</InputRightElement>
      ) : null}
    </InputGroup>
  );
}

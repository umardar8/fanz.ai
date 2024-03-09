import React from "react";
import { Button } from "@chakra-ui/react";
import BaseColors from "../../constant";

export default function PrimaryButton(props) {
  const {
    btnStyle,
    background,
    rightIcon,
    variant,
    label,
    fontSize,
    marginRight,
    padding,
    onClick,
  } = props;

  return (
    <Button
      style={
        btnStyle
          ? btnStyle
          : {
              background: background ? background : BaseColors.purple,
              color: BaseColors.white,
              minWidth: "120px",
              borderRadius: 25,
              fontFamily: `"Montserrat", sans-serif`,
              fontSize: fontSize ? fontSize : `1rem`,
              marginRight: marginRight ? marginRight : "none",
              padding: padding ? padding : "auto",
            }
      }
      rightIcon={rightIcon}
      variant={variant}
      onClick={onClick}
    >
      {label}
    </Button>
  );
}

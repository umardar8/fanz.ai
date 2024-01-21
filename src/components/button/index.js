import React from "react";
import { Button } from "@chakra-ui/react";
import BaseColors from "../../constant";

export default function PrimaryButton(props) {
  const { btnStyle, background, rightIcon, variant, label } = props;

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
            }
      }
      rightIcon={rightIcon}
      variant={variant}
    >
      {label}
    </Button>
  );
}

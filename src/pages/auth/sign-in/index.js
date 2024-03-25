import React, { useState } from "react";
import InputField from "../../../components/input-field"
import PrimaryButton from "../../../components/button"
import { ButtonGroup, Stack } from "@chakra-ui/react";
import BaseColors from "../../../constant";
import { logo, modalBackground, iconLinkedin, iconGoogle, iconFacebook } from "../../../assets"

export default function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return <>
  <div 
    className="modal-container"
    style={{ backgroundImage: `url(${modalBackground})` }}
  >
    <div className="auth-form">
      <img src={logo} height="106px" width="187px" alt="" />
      <h1 className="text-family">
      Login to your Account
      </h1>
      <Stack 
        spacing={6} 
        style={{margin:"50px 0"}}>
        <InputField 
          label="Email" 
          placeholder="Enter your Email address" 
          type="email" 
          value={email} 
          onChange={setEmail}
        />
        <InputField 
          label="Password" 
          placeholder="Enter your Password" 
          type="password" 
          value={password} 
          onChange={setPassword} 
        />
      </Stack>
      <PrimaryButton 
        label="Login" 
        btnStyle={styles.loginButton}
      />
      <p 
        style={{
          marginTop:"30px", 
          marginBottom:"30px",
          color:BaseColors.white
        }}
      >Don't have an account yet? <a href="" style={{color:BaseColors.yellow}}>Sign up</a></p>
      <p 
        style={{
          fontSize:"18px", 
          color:BaseColors.white
        }}
      >- OR -</p>
      <ButtonGroup spacing={3}>
        <PrimaryButton
          label="Login with Google" 
          variant="outline" 
          colorScheme={BaseColors.light_grey}
          size="sm"
          background="transparent" 
          leftIcon={<img src={iconGoogle} height="28px" width="28px" alt=""/>}
          btnStyle={styles.authSocialButton}
        />
        <PrimaryButton
          label="Login with Facebook" 
          variant="outline"
          colorScheme={BaseColors.light_grey}
          size="sm"
          background="transparent"
          leftIcon={<img src={iconFacebook} height="30px" width="30px" alt=""/>}
          btnStyle={styles.authSocialButton} 
        />
        <PrimaryButton 
          label="Login with Linkedin" 
          variant="outline"
          colorScheme={BaseColors.light_grey}
          size="sm"
          background="transparent"
          leftIcon={<img src={iconLinkedin} height="30px" width="30px" alt=""/>}
          btnStyle={styles.authSocialButton}
        />
      </ButtonGroup>
    </div>
      <div 
        className="text-family"
        style={styles.rightTextBlock}
      >
        <h2 style={styles.heading}>Stay Informed,</h2>
        <h2 style={styles.heading}>Stay Ahead!</h2>
        <h4 style={styles.tagline}>Your Source for Today's News and Tomorrow's Insights.</h4>
      </div>
  </div>
  </>
}

const styles = {
  loginButton: {
    padding: "20px 100px", 
    borderRadius: "15px", 
    background: BaseColors.medium_purple, 
    color: BaseColors.white
  },
  authSocialButton: {
    borderRadius: "12px",
    color: BaseColors.light_grey,
    background: BaseColors.black,
    padding: "20px 10px",
  },
  rightTextBlock: {
    display: "flex", 
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: "0 24px",
  },
  heading: {
    fontWeight: "800",
    color: BaseColors.white
  },
  tagline: {
    fontWeight: "400",
    color: BaseColors.white,
    marginTop: "20px"
  }
}
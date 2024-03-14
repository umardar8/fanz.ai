import React,{useState} from "react"
import InputField from "../../../components/input-field"
import PrimaryButton from "../../../components/button"
import { ButtonGroup, Stack } from "@chakra-ui/react"
import BaseColors from "../../../constant"
import { logo, modalBackground, iconGoogle, iconFacebook, iconLinkedin } from "../../../assets"


export default function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return <>
  <div 
    className="modal-container"
    style={{ backgroundImage: `url(${modalBackground})` }}
  >
    <div 
      className="text-family"
      style={styles.leftTextBlock}
    >
      <h2 style={styles.heading}>Stay Informed,</h2>
      <h2 style={styles.heading}>Stay Ahead!</h2>
      <h4 style={styles.tagline}>Your Source for Today's News and Tomorrow's Insights.</h4>
    </div>
    <div className="auth-form">
      <img src={logo} height="106px" width="187px" alt="" />
      <h1 className="text-family">
      Create your Free Account
      </h1>
      <Stack 
        spacing={6} 
        style={{margin:"50px 0"}}>
        <InputField 
          label="Full Name" 
          placeholder="Enter your Full Name" 
          type="text" 
          value={name} 
          onChange={setName}
        />
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
        label="Create Account" 
        btnStyle={styles.registerButton}
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
          label="Sign up with Google" 
          variant="outline"
          colorScheme={BaseColors.light_grey}
          size="sm"
          background="transparent" 
          leftIcon={<img src={iconGoogle} height="32px" width="32px" alt=""/>}
          btnStyle={styles.authSocialButton}
        />
        <PrimaryButton
          label="Sign up with Facebook" 
          variant="outline"
          colorScheme={BaseColors.light_grey}
          size="sm"
          background="transparent"
          leftIcon={<img src={iconFacebook} height="32px" width="32px" alt=""/>}
          btnStyle={styles.authSocialButton} 
        />
        <PrimaryButton 
          label="Sign up with Linkedin" 
          variant="outline"
          colorScheme={BaseColors.light_grey}
          size="sm"
          background="transparent"
          leftIcon={<img src={iconLinkedin} height="32px" width="32px" alt=""/>}
          btnStyle={styles.authSocialButton}
        />
      </ButtonGroup>
    </div>
  </div>
  </>
}

const styles = {
  registerButton: {
    padding: "20px 100px", 
    borderRadius: "15px", 
    background: BaseColors.medium_purple, 
    color: BaseColors.white
  },
  authSocialButton: {
    borderRadius: "12px",
    color: BaseColors.white,
    background: BaseColors.black,
    padding: "20px 10px",
  },
  leftTextBlock: {
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
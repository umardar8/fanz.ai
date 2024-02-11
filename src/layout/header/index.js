import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import color from "../../constant";
import { Styles } from "../../styles";
import { logo } from "../../assets";
import InputField from "../../components/input-field";
import { FiGift } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { LuSearch } from "react-icons/lu";
import BaseColors from "../../constant";
import PrimaryButton from "../../components/button";
import { Avatar, AvatarBadge } from "@chakra-ui/react";

export default function WebHeader() {
  const navigate = useNavigate();
  const [colorHover, setcolorHover] = useState(false);
  const [colorChange, setColorchange] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 300) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
    return () => {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []);

  const handleResize = () => {
    if (window.innerWidth < 992) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const linkStyle = {
    color: colorHover ? `${color.pink}` : `${color.white}`, // Change color when colorChange is true
    fontWeight: "300",
    fontSize: "1.4rem",
    fontFamily: `Teko,sans-serif`,
    letterSpacing: "0.1rem",
    textDecoration: "none",
  };

  return (
    <>
      <div>
        <Navbar
          data-bs-theme="dark"
          className={
            colorChange
              ? "navbar colorChange px-5 py-1 py-lg-0"
              : "navbar px-5 py-1 py-lg-0 gradient-back"
          }
          variant={colorChange ? "dark" : "light"}
          style={Styles.headerDiv}
        >
          <Container fluid>
            <Navbar.Brand href="#home" className="col">
              <img src={logo} height="55rem" width="auto" />
            </Navbar.Brand>

            <Nav className="col-3 col-md-8 justify-content-between align-items-center headerItem">
              {/* <header> */}

              <Link
                className="d-none d-md-block border-none headerItem headerItemDot"
                to="/"
                style={Styles.headerItem}
              >
                Home
              </Link>
              <Link
                className="d-none d-md-block border-none headerItem headerItemDot"
                to="/categories"
                style={Styles.headerItem}
              >
                Categories
              </Link>
              <Link
                className="d-none d-md-block border-none headerItem headerItemDot"
                to="/live-show"
                style={Styles.headerItem}
              >
                Live Show
              </Link>
              <Link
                className="d-none d-md-block border-none headerItem headerItemDot"
                to="/new"
                style={Styles.headerItem}
              >
                NEW
              </Link>

              {/* </header> */}

              <Link
                className="d-none d-xl-block border-none headerItem"
                style={Styles.headerItem}
              >
                <InputField
                  placeholder="SEARCH"
                  rightIcon={<LuSearch size={18} />}
                  inputStyle={{
                    border: `1px solid ${BaseColors.medium_grey}`,
                    borderRadius: 25,
                    width: "250px",
                    height: "5vh",
                    padding: "15px 20px",
                    background: BaseColors.medium_grey,
                    color: BaseColors.white,
                  }}
                />
              </Link>
              <Link
                className="d-none d-md-block border-none headerItem"
                to="/blog"
                style={Styles.headerItem}
              >
                <FiGift size={20} />
              </Link>
              <Link
                className=" border-none headerItem"
                to="/contact"
                style={Styles.headerItem}
              >
                <IoIosNotificationsOutline size={25} />
              </Link>
              <Link
                className=" border-none headerItem pt-4"
                // to="/profile"
                style={Styles.headerItem}
              >
                <Avatar src="https://bit.ly/dan-abramov" size="md">
                  <AvatarBadge boxSize="1em" bg="green.500" />
                </Avatar>
              </Link>
            </Nav>
          </Container>
        </Navbar>
        {/* header News */}
        <div
          className="text-center py-2 py-md-1 d-none d-md-block"
          style={{
            maxHeight: "5vh",
            background: `rgb(0, 0, 0, 0.5)`,
            color: "yellow",
            overflow: "hidden",
          }}
        >
          <h5
            style={{
              animation: `move 15s infinite linear`,
              whiteSpace: "nowrap",
            }}
          >
            Breaking New's! Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </h5>
        </div>
        <Navbar
          bg="dark"
          data-bs-theme="dark"
          collapseOnSelect
          expand="lg"
          className="bg-body-tertiary d-block d-md-none text-white mx-3 px-2 mt-1 mb-0 py-0"
          style={{ top: -15, backgroundColor: "#4c4c4c", borderRadius: "2px" }}
        >
          <Container className="py-3 justify-content-end">
            <Navbar.Toggle aria-controls="responsive-navbar-nav " />
            <Navbar.Collapse id="responsive-navbar-nav" className="mb-5 pt-0">
              <Nav className="me-auto ">
                <Nav.Link style={Styles.headerItem2}>
                  <InputField
                    placeholder="SEARCH"
                    // rightIcon={<LuSearch size={20} />}
                    inputStyle={{
                      border: `1px solid ${BaseColors.medium_grey}`,
                      borderRadius: 25,
                      width: "250px",
                      height: "5vh",
                      padding: 15,
                      background: BaseColors.medium_grey,
                      color: BaseColors.white,
                    }}
                  />
                </Nav.Link>
                <Nav.Link
                  style={Styles.headerItem2}
                  onClick={() => navigate("/")}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  style={Styles.headerItem2}
                  onClick={() => navigate("/categories")}
                >
                  Categories
                </Nav.Link>
                <Nav.Link
                  style={Styles.headerItem2}
                  onClick={() => navigate("/live-show")}
                >
                  Live Show
                </Nav.Link>
                <Nav.Link
                  style={Styles.headerItem2}
                  onClick={() => navigate("/new")}
                >
                  NEW
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* header News */}
        <div
          className="row text-center py-2 py-md-1 d-block d-md-none justify-self-center mx-3"
          style={{
            maxHeight: "5vh",
            background: `rgb(0, 0, 0, 0.5)`,
            color: "yellow",
            overflow: "hidden",
            marginTop: -15,
          }}
        >
          <h5
            style={{
              animation: `move 10s infinite linear`,
              whiteSpace: "nowrap", // Prevent line breaks
            }}
          >
            Breaking New's! Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </h5>
        </div>
      </div>
    </>
  );
}

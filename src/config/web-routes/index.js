import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../pages/home";
import Explore from "../../pages/explore";
import Profile from "../../pages/profile";
import Shop from "../../pages/shop";
import New from "../../pages/new";
import Categories from "../../pages/categories";
import LiveShow from "../../pages/live-show";
import SignIn from "../../pages/auth/sign-in";
import SignUp from "../../pages/auth/sign-up";

export default function WebRoutes() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/new" element={<New />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/live-show" element={<LiveShow />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Explore from "../../pages/Explore";
import Profile from "../../pages/Profile";
import Shop from "../../pages/Shop";
import New from "../../pages/new";
import Categories from "../../pages/categories";
import LiveShow from "../../pages/live-show";

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
        </Routes>
      </Router>
    </>
  );
}

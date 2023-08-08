import { Routes, Route } from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from "./home-screen";
import ExploreScreen from "./explore-screen";
import BookmarksScreen from "./bookmarks-screen";
import ProfileScreen from "./user/profile-screen";
import WhoToFollowList from "./who-to-follow-list";
import LoginScreen from "./user/login-screen";
import RegisterScreen from "./user/register-screen";

function Tuiter() {
 return (
  <>
     <Nav />
     <div className="row">
       <div className="col-2">
         <NavigationSidebar />
       </div>
       <div className="col-10 col-sm-10 col-md-10 col-lg-7 col-xl-7 col-xxl-7">
      <Routes>
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/explore" element={<ExploreScreen />} />
        <Route path="/bookmarks" element={<BookmarksScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/login"    element={<LoginScreen    />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/profile"  element={<ProfileScreen  />} />
      </Routes>

       </div>
       <div className="col-3 d-none d-xl-block">
          <WhoToFollowList/>
        </div>
   </div>
   </>
 );
}
export default Tuiter;
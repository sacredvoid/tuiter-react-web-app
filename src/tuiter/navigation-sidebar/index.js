import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faHashtag, faHome, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { faBell, faEnvelope, faBookmark, faListAlt, faUser } from "@fortawesome/free-regular-svg-icons";

import { Link, useLocation } from "react-router-dom";
const NavigationSidebar = () => {
 const { pathname } = useLocation();
 const [ignore, tuiter, active] = pathname.split("/");
 const links = ["home", "explore", "notifications", "messages", "bookmarks", "lists", "profile",  "more"];
 const linkIconMap = {
  home: faHome,
  explore: faHashtag,
  notifications: faBell,
  messages: faEnvelope,
  bookmarks: faBookmark,
  lists: faListAlt,
  profile: faUser,
  more: faEllipsisH,
};
 
 return (
   <div className="list-group">
     {links.map((link) => 
         <Link to={`/tuiter/${link}`} className={`list-group-item text-capitalize ${active === link ? "active" : ""}`}>
           <div className="row">
            <div className="col-2"><FontAwesomeIcon icon={linkIconMap[link]}/></div>
            <div className="col-10">{link}</div>
           </div>
         </Link>
     )}
   </div>
 );
};
export default NavigationSidebar;
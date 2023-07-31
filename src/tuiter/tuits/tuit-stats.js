import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment,faHeart as faHeartOutline } from "@fortawesome/free-regular-svg-icons";
import { faDownload, faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faRetweet } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";

const TuitStats = ( {tuitID, likes, liked, replies, retuits} ) => {
//     const dispatch = useDispatch();

//   const handleClickLike = () =>{
//     dispatch(tuitLikeClick(tuitID))
//   }
    return(
        <>
        <div className="row">
            <div className="col-3">
                <span className="stat-icon-and-value"><FontAwesomeIcon icon={faComment}/> {replies}</span>
            </div>
            <div className="col-3">
                <span className="wd-stat-icon-and-value"><FontAwesomeIcon icon={faRetweet}/> {retuits}</span>
            </div>
            <div className="col-3">
                <button className="btn wd-likes-btn "><span className="wd-stat-icon-and-value">
                {liked ? (
                    <FontAwesomeIcon icon={faHeartSolid} style={{color: "red"}}></FontAwesomeIcon>
                ): (
                    <FontAwesomeIcon icon={faHeartOutline}></FontAwesomeIcon>
                )} {likes}</span></button>
            </div>
            <div className="col-3">
                <button className="btn wd-download-btn "><span className="wd-stat-icon-and-value"><FontAwesomeIcon icon = {faDownload} /></span></button>
            </div>
        </div>
        </>
    );
};

export default TuitStats;
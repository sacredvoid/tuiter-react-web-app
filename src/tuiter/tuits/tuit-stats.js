import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment,faHeart as faHeartOutline } from "@fortawesome/free-regular-svg-icons";
import { faUpload, faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faRetweet } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { likeTuit } from "../reducers/tuits-reducer";

const TuitStats = ( {tuitID, likes, liked, replies, retuits} ) => {
        const dispatch = useDispatch();

    const likeHandler = () =>{
        dispatch(likeTuit(tuitID))
    }
    return(
        <>
        <div className="row">
            <div className="col-2">
                <span className="wd-stat-icon-and-value"><FontAwesomeIcon icon={faComment}/> {replies}</span>
            </div>
            <div className="col-2">
                <span className="wd-stat-icon-and-value"><FontAwesomeIcon icon={faRetweet}/> {retuits}</span>
            </div>
            <div className="col-2">
                <button className="btn wd-likes-btn" onClick={likeHandler}><span className="wd-stat-icon-and-value">
                {liked ? (
                    <FontAwesomeIcon icon={faHeartSolid} style={{color: "red"}}></FontAwesomeIcon>
                ): (
                    <FontAwesomeIcon icon={faHeartOutline}></FontAwesomeIcon>
                )} {likes}</span></button>
            </div>
            <div className="col-2">
                <button className="btn"><span className="wd-stat-icon-and-value"><FontAwesomeIcon icon = {faUpload} /></span></button>
            </div>
        </div>
        </>
    );
};

export default TuitStats;
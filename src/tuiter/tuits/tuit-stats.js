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
            <div className="col-2 pt-2">
                <FontAwesomeIcon icon={faComment}/> {replies}
            </div>
            <div className="col-2 pt-2">
                <span className="wd-stat-icon-and-value"><FontAwesomeIcon icon={faRetweet}/> {retuits}</span>
            </div>
            <div className="col-2">
                <button className="btn" onClick={likeHandler}>
                {liked ? (
                    <FontAwesomeIcon icon={faHeartSolid} style={{color: "red"}}></FontAwesomeIcon>
                ): (
                    <FontAwesomeIcon icon={faHeartOutline}></FontAwesomeIcon>
                )} {likes}</button>
            </div>
            <div className="col-2">
                <button className="btn"><FontAwesomeIcon icon = {faUpload} /></button>
            </div>
        </div>
        </>
    );
};

export default TuitStats;
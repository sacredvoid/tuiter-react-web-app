import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment,faHeart as faHeartOutline } from "@fortawesome/free-regular-svg-icons";
import { faUpload, faHeart as faHeartSolid, faHeartBroken, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { faRetweet } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { updateTuitThunk } from "../services/tuits-thunks";

const TuitStats = ( {tuit} ) => {
        const dispatch = useDispatch();

    const likeHandler = () =>{
        dispatch(updateTuitThunk({...tuit, likes: tuit.likes +1, liked: true}))
    }

    const dislikeHandler = () =>{
        if(!tuit.dislikes) {
            tuit = {...tuit, dislikes: 0}
        }
        dispatch(updateTuitThunk({...tuit, dislikes: tuit.dislikes + 1}))
    }
    return(
        <>
        <div className="row">
            <div className="col-2 pt-2">
                <FontAwesomeIcon icon={faComment}/> {tuit.replies}
            </div>
            <div className="col-2 pt-2">
                <span className="wd-stat-icon-and-value"><FontAwesomeIcon icon={faRetweet}/> {tuit.retuits}</span>
            </div>
            <div className="col-2 col-md-3 col-lg-3 col-xl-3 col-xxl-2">
                <button className="btn" onClick={likeHandler}>
                {tuit.liked ? (
                    <FontAwesomeIcon icon={faHeartSolid} style={{color: "red"}}></FontAwesomeIcon>
                ): (
                    <FontAwesomeIcon icon={faHeartOutline}></FontAwesomeIcon>
                )} {tuit.likes}</button>
            </div>
            <div className="col-2 col-md-3 col-lg-3 col-xl-3 col-xxl-2">
                <button className="btn" onClick={dislikeHandler}>
                    <FontAwesomeIcon icon={faThumbsDown}></FontAwesomeIcon> {tuit.dislikes}
                </button>
            </div>
            <div className="col-2">
                <button className="btn"><FontAwesomeIcon icon = {faUpload} /></button>
            </div>
        </div>
        </>
    );
};

export default TuitStats;
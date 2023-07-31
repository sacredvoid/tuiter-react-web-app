import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import TuitStats from "./tuit-stats";

const TuitItem = (
    {
        tuit = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": `Tesla CyberTruck lands on Mars and
            picks up the Curiosity rover on its 6' bed`,
            "image": "tesla.png",
            "liked": false,
            "replies": 100,
            "retuits": 100,
            "likes": 1200,
            "handle": "@SpaceX",
            "tuit": "What on earth have we done, by sending our men to Moon."
        }
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-1">
                    <img width={40} height={40} className="float-left rounded-circle" src={`/images/${tuit.image}`}/>
                </div>
                <div className="col-11">
                    <div className="wd-tuit-item p-1">
                                <span><b>{tuit.userName}</b> </span>
                                <span><FontAwesomeIcon icon={faCheckCircle} style={{color: "#1c6efd",}} /> </span>
                                <span>{tuit.handle} . </span>
                                <span>{tuit.time} </span>
                    </div>
                    <div className="p-1">
                        {tuit.tuit}
                    </div>
                    <div>
                        <TuitStats tuitID={tuit._id} likes={tuit.likes} liked={tuit.liked} replies={tuit.replies} retuits={tuit.retuits}/>
                    </div>
                </div>
            </div>
        </li>
    );
};
export default TuitItem;
import React from "react";
import './styl.css'




const ShowReports = ({item}) => (
    <div className="row">
    <div className="col s10 m5">
      <div className="card #64b5f6 #0d47a1 blue darken-4">
        <div className="card-content white-text">
          <span className="card-title">{item.firstName} {item.lastName}</span>
        </div>
        <div className="card-action #0d47a1 blue darken-4">
            <ul className="collection ">
                <li className="collection-item">{item.attackNum}</li>
                <li className="collection-item">{item.defenceNum}</li>
                <li className="collection-item">{item.physicalNum}</li>
                <li className="collection-item">{item.techNum}</li>
            </ul>
        </div>
      </div>
    </div>
  </div>
);

export default ShowReports;
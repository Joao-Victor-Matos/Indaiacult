import React from "react";
import { Link } from "react-router-dom";
import Edit from "../img/edit.png";
import Delete from "../img/remove.png";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://c.files.bbci.co.uk/16910/production/_94223429_gettyimages-495788474.jpg"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80"
            alt=""
          />
          <div className="info">
            <span>João</span>
            <p>Postado há 2 dias</p>
          </div>
          <div className="edit">
            <Link to={`/crie?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
      </div>
      <div className="menu">m</div>
    </div>
  );
};

export default Single;

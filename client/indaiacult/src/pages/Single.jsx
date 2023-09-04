import React from "react";
import { Link } from "react-router-dom";
import Edit from "../img/edit.png";
import Delete from "../img/remove.png";
import Menu from "../components/Menu";

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
        <h1>Lorem ipsum dolor sit amet.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          commodi esse quo iste ab corporis laudantium a! Quisquam temporibus
          iure quia quas, voluptatibus excepturi quis amet, culpa placeat minima
          consequuntur quos eligendi aliquid voluptates beatae at earum odit est
          dolore!
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;

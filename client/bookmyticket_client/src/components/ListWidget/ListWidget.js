import React, { useContext } from "react";
import { MainContext } from "../App";
import { Link } from "react-router-dom";

const ListWidget = () => {
  const maincontext = useContext(MainContext);
  const items = maincontext.state.items.slice(0, 7);
  return (
    <>
      {items.map(item => {
        return (
          <div className="left-widget" key={item.id}>
            <Link to={`details/${item.moviesid}/${item.language}`}>
              <p className="widget-title">{item.title}</p>
            </Link>
            <p className="widget-mute">Movie</p>
          </div>
        );
      })}
    </>
  );
};

export default ListWidget;

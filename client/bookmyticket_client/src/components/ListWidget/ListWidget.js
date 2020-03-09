import React, { useContext } from "react";
import { MainContext } from "../App";

const ListWidget = () => {
  const maincontext = useContext(MainContext);
  const items = maincontext.state.items.slice(0, 7);
  return (
    <>
      {items.map(item => {
        return (
          <div className="left-widget" key={item.id}>
            <p className="widget-title">{item.title}</p>
            <p className="widget-mute">Movie</p>
          </div>
        );
      })}
    </>
  );
};

export default ListWidget;

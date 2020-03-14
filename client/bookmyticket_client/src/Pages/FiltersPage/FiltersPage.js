import React, { useState, useEffect, useContext } from "react";
import { MainContext } from "../../components/App";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
const FilterPage = props => {
  const maincontext = useContext(MainContext);
  const state = maincontext.state.items;

  const [enchecked, setEnchecked] = useState(false);
  const [tachecked, setTachecked] = useState(false);

  const [kachecked, setKachecked] = useState(false);
  const [hichecked, setHichecked] = useState(false);

  const [techecked, setTechecked] = useState(false);
  const [mlchecked, setMlchecked] = useState(false);
  useEffect(() => {
    maincontext.dispatcher({
      type: "Filter Movie",
      payload: maincontext.state.items
    });
  }, []);
  const handleEnChange = language => {
    setEnchecked(enchecked => !enchecked);
    if (enchecked === true) {
      maincontext.dispatcher({ type: "Filter Movie", payload: state });
    } else {
      let newItems = state.filter(items => {
        return items.language === language;
      });
      console.log(newItems);

      setHichecked(false);
      setKachecked(false);
      setTechecked(false);
      setMlchecked(false);
      setTachecked(false);
      maincontext.dispatcher({ type: "Filter Movie", payload: newItems });
      console.log(language);
    }
  };
  const handleTaChange = language => {
    setTachecked(tachecked => !tachecked);
    if (tachecked === true) {
      maincontext.dispatcher({ type: "Filter Movie", payload: state });
    } else {
      let newItems = state.filter(items => {
        return items.language === language;
      });
      console.log(newItems);
      setEnchecked(false);
      setHichecked(false);
      setKachecked(false);
      setTechecked(false);
      setMlchecked(false);

      maincontext.dispatcher({ type: "Filter Movie", payload: newItems });
      console.log(language);
    }
  };
  const handleTeChange = language => {
    setTechecked(techecked => !techecked);

    if (techecked === true) {
      maincontext.dispatcher({ type: "Filter Movie", payload: state });
    } else {
      let newItems = state.filter(items => {
        return items.language === language;
      });
      console.log(newItems);
      setEnchecked(false);
      setHichecked(false);
      setKachecked(false);
      setMlchecked(false);

      setTachecked(false);
      maincontext.dispatcher({ type: "Filter Movie", payload: newItems });
      console.log(language);
    }
  };
  const handleHiChange = language => {
    setHichecked(hichecked => !hichecked);
    if (hichecked === true) {
      maincontext.dispatcher({ type: "Filter Movie", payload: state });
    } else {
      let newItems = state.filter(items => {
        return items.language === language;
      });
      console.log(newItems);
      setEnchecked(false);
      setKachecked(false);
      setTechecked(false);
      setMlchecked(false);

      setTachecked(false);
      maincontext.dispatcher({ type: "Filter Movie", payload: newItems });
      console.log(language);
    }
  };
  const handleKaChange = language => {
    setKachecked(kachecked => !kachecked);
    if (kachecked === true) {
      maincontext.dispatcher({ type: "Filter Movie", payload: state });
    } else {
      let newItems = state.filter(items => {
        return items.language === language;
      });
      console.log(newItems);
      setEnchecked(false);
      setHichecked(false);
      setTechecked(false);
      setMlchecked(false);

      setTachecked(false);
      maincontext.dispatcher({ type: "Filter Movie", payload: newItems });
      console.log(language);
    }
  };
  const handleMlChange = language => {
    setMlchecked(mlchecked => !mlchecked);
    if (mlchecked === true) {
      maincontext.dispatcher({ type: "Filter Movie", payload: state });
    } else {
      let newItems = state.filter(items => {
        return items.language === language;
      });
      console.log(newItems);
      setEnchecked(false);
      setHichecked(false);
      setKachecked(false);
      setTechecked(false);

      setTachecked(false);
      maincontext.dispatcher({ type: "Filter Movie", payload: newItems });
      console.log(language);
    }
  };
  const handleApply = () => {
    maincontext.dispatcher({ type: "Sm Filter" });
  };
  return (
    <div className="filterpage">
      <div className="fp-header-wrapper">
        <div className="fp-header-container">
          <div className="fp-header">
            {" "}
            <span
              className="fp-header-buttons"
              onClick={() => props.handlemodal()}
            >
              Close
            </span>
            <span className="fp-header-title">Filters</span>
            <span
              className="fp-header-buttons"
              onClick={() => props.handlemodal()}
            >
              Reset
            </span>
          </div>
        </div>
      </div>
      {/* filter starts here */}
      <div className="fp-filter-container">
        <div className="fp-filter-label">Languages</div>
        <div className="fp-filter-movies-list">
          <div className="fp-filter-items">
            <p>Hindi</p>
            <input
              className="mr-0"
              type="checkbox"
              aria-label="Checkbox for following text input"
              onChange={() => handleHiChange("hi")}
              checked={hichecked}
            />
          </div>
          <div className="fp-filter-items">
            <p>Telugu</p>
            <input
              className="mr-0"
              type="checkbox"
              aria-label="Checkbox for following text input"
              onChange={() => handleTeChange("te")}
              checked={techecked}
            />
          </div>
          <div className="fp-filter-items">
            <p>Kannada</p>
            <input
              className="mr-0"
              type="checkbox"
              aria-label="Checkbox for following text input"
              onChange={() => handleKaChange("ka")}
              checked={kachecked}
            />
          </div>
          <div className="fp-filter-items">
            <p>English</p>
            <input
              className="mr-0"
              type="checkbox"
              aria-label="Checkbox for following text input"
              onChange={() => handleEnChange("en")}
              checked={enchecked}
            />
          </div>
          <div className="fp-filter-items">
            <p>Malayalam</p>
            <input
              className="mr-0"
              type="checkbox"
              aria-label="Checkbox for following text input"
              onChange={() => handleMlChange("ml")}
              checked={mlchecked}
            />
          </div>
          <div className="fp-filter-items">
            <p>Tamil</p>
            <input
              className="mr-0"
              type="checkbox"
              aria-label="Checkbox for following text input"
              onChange={() => handleTaChange("ta")}
              checked={tachecked}
            />
          </div>
        </div>
      </div>
      {/* filter conatiner ends here */}
      <div className="fp-filters-button-container">
        {" "}
        <div
          className="fp-filters-button-wrapper"
          onClick={() => props.handlemodal()}
        >
          Apply
        </div>
      </div>
    </div>
  );
};

export default FilterPage;

import React, { useState, useContext, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionToggle } from "react-bootstrap/AccordionToggle";
import Card from "react-bootstrap/Card";
import arrowimg from "../../assets/images/uparrow.png";
import Form from "react-bootstrap/Form";
import { MainContext } from "../App";

function CustomToggle({ children, eventKey, name }) {
  const [dummy, setDummy] = useState(true);
  const decoratedOnClick = useAccordionToggle(eventKey, () => setDummy(!dummy));

  return (
    <div onClick={decoratedOnClick}>
      <div className={dummy}>
        <span>
          {/* <FontAwesomeIcon
            icon={faAngleUp}
            className="widget-arrow"
            size="2x"
          /> */}
          <img
            src={arrowimg}
            className={dummy ? "widget-arrow-rotate " : "widget-arrow"}
          />
        </span>
        <span
          className={`filter-widget-title ml-3 ${
            dummy ? "text-primary" : "text-dark"
          }`}
        >
          {name}
        </span>
      </div>
    </div>
  );
}
const FilterWidget = () => {
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
  return (
    <div className="filter-widget-left">
      <div>
        {/* Language Widget Starts */}
        <Accordion defaultActiveKey="0">
          <Card className="filter-widget-card">
            <div className="filter-widget-head">
              <CustomToggle eventKey="0" name="Select Language"></CustomToggle>
            </div>
            <Accordion.Collapse eventKey="0">
              <Card.Body className="filter-widget-body">
                <Form.Check type="checkbox">
                  <Form.Check.Input
                    type="checkbox"
                    onChange={() => handleEnChange("en")}
                    checked={enchecked}
                  />
                  <Form.Check.Label className="ml-2 mb-2">
                    English
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type="checkbox">
                  <Form.Check.Input
                    type="checkbox"
                    onChange={() => handleTaChange("ta")}
                    checked={tachecked}
                  />
                  <Form.Check.Label className="ml-2 mb-2">
                    Tamil
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type="checkbox">
                  <Form.Check.Input
                    type="checkbox"
                    checked={kachecked}
                    onChange={() => handleKaChange("kn")}
                  />
                  <Form.Check.Label className="ml-2 mb-2">
                    Kannada
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type="checkbox">
                  <Form.Check.Input
                    type="checkbox"
                    checked={hichecked}
                    onChange={() => handleHiChange("hi")}
                  />
                  <Form.Check.Label className="ml-2 mb-2">
                    Hindi
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type="checkbox">
                  <Form.Check.Input
                    type="checkbox"
                    checked={techecked}
                    onChange={() => handleTeChange("te")}
                  />
                  <Form.Check.Label className="ml-2 mb-2">
                    Telugu
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type="checkbox">
                  <Form.Check.Input
                    type="checkbox"
                    checked={mlchecked}
                    onChange={() => handleMlChange("ml")}
                  />
                  <Form.Check.Label className="ml-2 mb-2">
                    Malayalam
                  </Form.Check.Label>
                </Form.Check>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
      {/* Language Widget Ends */}
      {/* Genre Widget Starts */}
      <div className="mt-3">
        <Accordion defaultActiveKey="0">
          <Card className="filter-widget-card">
            <div className="filter-widget-head">
              <CustomToggle eventKey="0" name="Genre"></CustomToggle>
            </div>
            <Accordion.Collapse eventKey="0">
              <Card.Body className="filter-widget-body">
                <Form.Check type="checkbox">
                  <Form.Check.Input type="checkbox" />
                  <Form.Check.Label className="ml-2 mb-2">
                    Action
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type="checkbox">
                  <Form.Check.Input type="checkbox" />
                  <Form.Check.Label className="ml-2 mb-2">
                    Adventure
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type="checkbox">
                  <Form.Check.Input type="checkbox" />
                  <Form.Check.Label className="ml-2 mb-2">
                    Animation
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type="checkbox">
                  <Form.Check.Input type="checkbox" />
                  <Form.Check.Label className="ml-2 mb-2">
                    Crime
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type="checkbox">
                  <Form.Check.Input type="checkbox" />
                  <Form.Check.Label className="ml-2 mb-2">
                    Comedy
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type="checkbox">
                  <Form.Check.Input type="checkbox" />
                  <Form.Check.Label className="ml-2 mb-2">
                    Documentary
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type="checkbox">
                  <Form.Check.Input type="checkbox" />
                  <Form.Check.Label className="ml-2 mb-2">
                    Drama
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type="checkbox">
                  <Form.Check.Input type="checkbox" />
                  <Form.Check.Label className="ml-2 mb-2">
                    Family
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type="checkbox">
                  <Form.Check.Input type="checkbox" />
                  <Form.Check.Label className="ml-2 mb-2">
                    Fantasy
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type="checkbox">
                  <Form.Check.Input type="checkbox" />
                  <Form.Check.Label className="ml-2 mb-2">
                    History
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type="checkbox">
                  <Form.Check.Input type="checkbox" />
                  <Form.Check.Label className="ml-2 mb-2">
                    Horror
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type="checkbox">
                  <Form.Check.Input type="checkbox" />
                  <Form.Check.Label className="ml-2 mb-2">
                    Thriller
                  </Form.Check.Label>
                </Form.Check>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        {/* Genre widget Ends */}
      </div>
    </div>
  );
};

export default FilterWidget;

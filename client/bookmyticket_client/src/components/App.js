import React, { useReducer } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Home from "../Pages/Home/Home";
import Movies from "../Pages/Movies/Movies";
import Sports from "../Pages/Sports/Sports";
import Events from "../Pages/Events/Events";
import Buzz from "../Pages/Buzz/Buzz";
import MovieDetail from "../Pages/MovieDetailsPage/MovieDetails";
import Login from "./Login-Signup/Login";
import Signup from "./Login-Signup/SignUp";
import SeatLayout from "../Pages/SeatLayout/SeatLayout";
import FiltersPage from "../Pages/FiltersPage/FiltersPage";
import TheatresPage from "../Pages/TheatresPage/TheatresPage";
export const MainContext = React.createContext();
const initialState = {
  modalShow: true,
  modalVideo: false,
  videoUrl: "L61p2uyiMSo",
  items: [],
  filteredItems: [],
  Upcoming: [],
  UpcomingFilter: [],
  smfilter: false,
  ready: false,
  city: "city",
  theatres: [],
  tickets: "",
  date: "",
  time: "",
  thname: "",
  showTicketsbtn: false,
  bookedtickets: ""
};
const Reducer = (state, action) => {
  switch (action.type) {
    case "Fetch Upcoming": {
      return {
        ...state,
        items: action.payload,
        filteredItems: action.payload,
        ready: true
      };
    }
    case "Close Modal": {
      return { ...state, modalShow: action.payload };
    }
    case "Set City": {
      return { ...state, city: action.payload };
    }
    case "Set Theatres": {
      return { ...state, theatres: action.payload };
    }
    case "Filter Movie": {
      return { ...state, filteredItems: action.payload };
    }
    case "Set Ticket": {
      return { ...state, tickets: action.payload };
    }
    case "Set Time": {
      return {
        ...state,
        time: action.payload
      };
    }
    case "Set ThName": {
      return {
        ...state,
        thname: action.payload
      };
    }
    case "Set Date": {
      return { ...state, date: action.payload };
    }
    case "Set ShowTicketsbtn": {
      return { ...state, showTicketsbtn: action.payload };
    }
    case "Upcoming": {
      return {
        ...state,
        Upcoming: action.payload,
        UpcomingFilter: action.payload,
        ready: true
      };
    }
    case "Open Video": {
      return {
        ...state,
        modalVideo: action.payload.modal,
        videoUrl: action.payload.url
      };
    }
    case "Sm Filter": {
      return {
        ...state,
        smfilter: !state.smfilter
      };
    }
    case "Book Tickets": {
      return {
        ...state,
        bookedtickets: action.payload
      };
    }
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const doRedirect = () => {
    let loggedIn = localStorage.getItem("user");

    if (loggedIn) {
      return <Redirect to="/" />;
    } else {
      return <Redirect to="/login" />;
    }
  };
  return (
    <div>
      <MainContext.Provider value={{ state: state, dispatcher: dispatch }}>
        <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/" component={Home} />
            <Route path="/movies" component={Movies} />
            <Route path="/sports" component={Sports} />
            <Route path="/events" component={Events} />
            <Route path="/buzz" component={Buzz} />
            <Route path="/details/:movieid/:language" component={MovieDetail} />
            <Route path="/bookticket/:movieid" component={SeatLayout} />
            <Route path="/filterpage" component={FiltersPage} />
            <Route path="/theatres/:movieid" component={TheatresPage} />
          </Switch>
          {doRedirect()}
        </Router>
      </MainContext.Provider>
    </div>
  );
}

export default App;


import './App.css';
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Join from "./component/join/Join.js";
import Chat from "./component/Chat/Chat.js"




function App() {




  return (


    <Router>
      <Routes>

      <Route exact path="/" Component={Join} />
      <Route path="/chat" Component={Chat} />
      </Routes>

    </Router>

  );
}

export default App;
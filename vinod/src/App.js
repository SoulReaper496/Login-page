import "./App.css";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <div className="App">
      <div className="second-main">
        <div className="login">
          <p className="title">Login</p>
        </div>
        <div className="email">
          <input type="text" placeholder="Email" id="inputid" />
        </div>
        <div className="password">
          <input type="text" placeholder="Password" id="inputid" />
        </div>
        <div className="signin">
          <Button
            variant="primary"
            size="lg"
            style={{
              height: 35,
              width: 250,
              borderRadius: 30,
              backgroundColor: "green",
              color: "white",
            }}
          >
            SignIn
          </Button>
        </div>
        <div className="forget">
          <p>Forget Password?</p>
          <p>New User? SignIn</p>
        </div>
      </div>
    </div>
  );
}

export default App;

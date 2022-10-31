import React, { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [showAlert, setShowAlert] = useState([false, false, false, false]);

  const inputHandler = (field) => {
    return (e) => {
      setUserInput((prevState) => ({
        ...prevState,
        [field]: e.target.value,
      }));
    };
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const newShowAlert = showAlert.map((alert, index) => {
      //console.log(alert);
      //console.log(!Object.values(userInput)[index]);

      if (!Object.values(userInput)[index]) {
        alert = true;
      } else {
        alert = false;
      }

      return alert;
    });

    //console.log(newShowAlert);

    setShowAlert(newShowAlert);
  };

  return (
    <div className="app">
      <div className="container">
        <div className="col-2 flex-center">
          <div className="text-box text-white">
            <h1> Learn to code by watching others</h1>
            <p>
              See how experienced developers solve problems in real-time.
              Watching scripted tutorials is great, but understanding how
              developers think is invaluable.
            </p>
          </div>
        </div>

        <div className="col-2 flex-col justify-between">
          <div></div>
          <div
            className="rounded-square bg-blue text-white"
            style={{ height: "15%" }}
          >
            Try it free 7 days then $20/mo. thereafter
          </div>
          <div className="rounded-square bg-white" style={{ height: "80%" }}>
            <div>
              <form onSubmit={submitHandler}>
                <div className="form-fields">
                  <div className="form-field">
                    <input
                      type="text"
                      placeholder="First Name"
                      value={userInput.firstName}
                      onChange={inputHandler("firstName")}
                    />
                    <div
                      className={
                        "alert-message " +
                        (!showAlert[0] ? "display-none" : null)
                      }
                    >
                      First Name cannot be empty
                    </div>
                  </div>
                  <div className="form-field">
                    <input
                      type="text"
                      placeholder="Last Name"
                      value={userInput.lastName}
                      onChange={inputHandler("lastName")}
                    />
                    <div
                      className={
                        "alert-message " +
                        (!showAlert[1] ? "display-none" : null)
                      }
                    >
                      Last Name cannot be empty
                    </div>
                  </div>
                  <div className="form-field">
                    <input
                      type="text"
                      placeholder="Email"
                      value={userInput.email}
                      onChange={inputHandler("email")}
                    />
                    <div
                      className={
                        "alert-message " +
                        (!showAlert[2] ? "display-none" : null)
                      }
                    >
                      Email cannot be empty
                    </div>
                  </div>
                  <div className="form-field">
                    <input
                      type="password"
                      placeholder="Password"
                      value={userInput.password}
                      onChange={inputHandler("password")}
                    />
                    <div
                      className={
                        "alert-message " +
                        (!showAlert[3] ? "display-none" : null)
                      }
                    >
                      Password cannot be empty
                    </div>
                  </div>
                </div>
                <div className="form-button">
                  <button type="submit" style={{ color: "white" }}>
                    Claim your free trial
                  </button>
                </div>
              </form>
              <p>
                By clicking the button, you are agreeing to our Terms and
                Services
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

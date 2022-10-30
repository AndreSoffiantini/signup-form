function App() {
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
              <form>
                <div className="form-fields">
                  <div className="form-field">
                    <input type="text" placeholder="First Name" />
                  </div>
                  <div className="form-field">
                    <input type="text" placeholder="Last Name" />
                  </div>
                  <div className="form-field">
                    <input type="email" placeholder="Email Address" />
                  </div>
                  <div className="form-field">
                    <input type="password" placeholder="Password" />
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

const Container = () => {
  return (
    <div className="main">
      <div className="form-Container">
        <div className="left">
          <div className="left-inner">
            <h2 className="titile">Welcome Back</h2>
            <p>
              To Keep Connected with us please <br /> login with your personal
              info
            </p>
            <button>Sign In</button>
          </div>
        </div>
        <div className="right">
          <div className="right-inner">
            <h2>Create Account</h2>
            <form action="" autoComplete="On">
              <div className="nameInput">
                <input type="text" id="namef" placeholder="Name" autoComplete="name" required />
              </div>
              <div className="emailInput">
                <input type="emal" id="emailf" placeholder="Email" autoComplete="email" required />
              </div>
              <div className="passwordInput">
                <input type="password" id="passwordf" placeholder="Password" autoComplete="new-password" required />
              </div>
              <div className="signUp">
                <button type="submit">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;

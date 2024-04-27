import './App.css';

const Button = ({ type, children, ...buttonProps }) => {
    const className = type === "primary" ? "PrimaryButton" : "SecondaryButton";
    return (
        <button className={`Button ${className}`} {...buttonProps}>
            {children}
        </button>
    );
};

const LoginButton = ({ type, children, ...buttonProps }) => {
    return (
        <Button
          type="secondary"
          {...buttonProps}
          onClick={() => {
              alert("Logging in!");
          }}
          // {...buttonProps}
        >
            {children}
        </Button>
    );
};

function App() {
    return (
        <div className='App'>
            <header className='Header'>Little Lemon Restaurant</header>
            <Button type="primary" onClick={() => alert("Signing up!")}>
                Sign up
            </Button>
            <LoginButton type="secondary" onClick={() => alert("Signing up!")}>
                Login
            </LoginButton>
        </div>
    );
}

export default App


//css for this one

// .App {
//   background-color: azure;
//   height: 40vh;
//   width: 30vw;
//   text-align: center;
//   padding: 30px;
//   display: flex;
//   flex-direction: column;
//   margin: 10px;
// }

// .Header {
//   font-size: 30px;
//   font-weight: bold;
//   margin: 10px;
// }

// .Button {
//   padding: 10px 20px;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   margin: 10px;
//   align-self: center;
// }

// .PrimaryButton {
//   background-color: rgb(27, 85, 27); 
//   color: white;
//   font-weight: bold;
// }

// .SecondaryButton {
//   background-color: rgb(155, 52, 52); 
//   color: white;
//   font-weight: bold;
// }
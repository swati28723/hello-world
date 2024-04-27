import "./App.css";

const Button = ({children, backgroundColor}) => {
    return <button style={{backgroundColor}}>{children}</button>;
};

const Alert = ({children}) => {
    return (
        <>
            <div className="Overlay"/>
            <div className="Alert">{children}</div>
        </>
    );
};

const DeleteButton = () => {
  return <Button backgroundColor="red">Delete</Button>
}

function App() {
    return (
        <div className="App">
            <header>Little Lemon Restaurant</header>
            <Alert>
              <h4>Delete Account</h4>
              <p>
                Are you sure you want to proceed? You will miss all your delicious recipes!
              </p>
              <DeleteButton/>
            </Alert>
        </div>
    );
}

export default App;


/* ************************************************************************************************************* */

/* App.css for componentComposition x*/

/* Overlay style */
/* .Overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* semi-transparent black 
  z-index: 100; /* Ensure it's above other content 
} */

/* Alert style */
/* .Alert {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 10px; /* Reduced padding 
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 101; /* Ensure it's above overlay 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center; /* Center text 
  max-width: 300px; /* Set maximum width for the alert box 
  width: 90%; /* Adjust width 
} */

/* Button style */
/* button {
  background-color: #007bff; /* Default button color 
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
} */

/* Button hover effect */
/* button:hover {
  background-color: #0056b3; /* Darker shade on hover 
} */

/* Header style */
/* header {
  text-align: center; /* Center text 
  margin-top: 20px; /* Add some space at the top 
} */

// import logo from './logo.svg';
// import './App.css';

// function Header(){
//   return <h1>Hello World</h1>;
// }

// function App() {
//   return <Header />;
// }

// export default App;

// function Heading(){
//   let title = "This is a some heading text";
//   return(
//       <h1>{title}</h1>
//   );
// }

// export default Heading;

//***************************** */

//common event handling

// import Btn from './Btn';
// import './App.css';

// function App(){
//   return (
//     <Btn/>
//   )
// }

// export default App;


// User event
// import ModeToggle from './ModeToggle'
// import './App.css';

// function App(){
//   return (
//     <ModeToggle />
//   );
// }

// export default App;


// The navbar
// import HomePage from "./HomePage"
// import AboutMe from "./AboutMe"
// import { Routes, Route, Link} from 'react-router-dom';

// function App(){
//   return (
//     <div className="App">
//       <nav className="nav">
//         <Link to="/" className="nav-item">HomePage</Link> 
//         <Link to="/about-me" className="nav-item">About Me</Link>
//       </nav>
//       <Routes>
//         <Route path="/" element={<HomePage/>}/>
//         <Route path="/about-me" element={<AboutMe/>}/>
//       </Routes> 
//     </div>
//   );
// }

// export default App;


<<<<<<< HEAD
// import "./App.css";
// import HomePage from "./HomePage";
// import AboutLittleLemon from "./AboutLittleLemon";
// import Contact from "./Contact";
// import { Routes, Route, Link } from "react-router-dom";

// function App() {
//   return (
//     <div> 
// 	  <nav>
//       <Link to="/" className="nav-item">HomePage</Link>
//       <Link to="/about" className="nav-item">About Little Lemon</Link>
//       <Link to="/contact" className="nav-item">Contact</Link>
// 	  </nav>
//       <Routes> 
//         <Route path="/" element={<HomePage />}></Route>
//         <Route path="/about" element={<AboutLittleLemon />}></Route>
//         <Route path="/contact" element={<Contact />}></Route>
//       </Routes>
//     </div>
//   );
// };

// export default App;
=======
import "./App.css";
import HomePage from "./HomePage";
import AboutLittleLemon from "./AboutLittleLemon";
import Contact from "./Contact";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div> 
	  <nav>
      <Link to="/" className="nav-item">HomePage</Link>
      <Link to="/about" className="nav-item">About Little Lemon</Link>
      <Link to="/contact" className="nav-item">Contact</Link>
	  </nav>
      <Routes> 
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutLittleLemon />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
};

export default App;
>>>>>>> 005330b (I am updating HCJ by adding all my internship work here)


// function App(){
//   const time = new Date();
//   const day = time.toLocaleDateString("en-us", {weekday: "long"});
//   const morning = time.getHours() >= 6 && time.getHours() <= 12;
//   let dayMessage;

//   if (day.toLocaleLowerCase() === "monday")
//   {
//     dayMessage = `Happy ${day}`;
//   }
//   else if (day.toLocaleLowerCase() === "tuesday")
//   {
//     dayMessage = `${day}, four days to go`;
//   }
//   else if (day.toLocaleLowerCase() === "wednesday")
//   {
//     dayMessage = `${day}, half way there`;
//   }
//   else if (day.toLocaleLowerCase() === "thursday")
//   {
//     dayMessage = `${day}, start planning the weekend`;
//   }
//   else if (day.toLocaleLowerCase() === "friday")
//   {
//     dayMessage = "Woo - hoo, the weekend is coming!";
//   }
//   else
//   {
//     dayMessage = "Saty calm and keep having fun";
//   }

//   return (
//     <div className = "App">
//       <h1>
//         {dayMessage}
//       </h1>
//       {morning ? <h2>Have you had breeakfast yet?</h2> : ''}
//     </div>
//   )
// }

// export default App


//import image by using import method, require, url
// import rooftops from './assets/central-park.jpg'
// function App(){
//   const randomImageUrl = "https://picsum.photos/400/265";
//   return (
//     <div>
//       <h1>
//         Task: add three images with some styling
//       </h1>

//       <img
//         height={200}
//         src={rooftops}
//         alt="An image of a rooftop in New York"
//       />

//       <img
//         height={200}
//         src={require("./assets/central-park.jpg")}
//         alt="An image of a central park"
//       />

//       <img
//         src={randomImageUrl}
//         height={200}
//       />
//     </div>
//   )
// }

// export default App;


//create an audio/video component
<<<<<<< HEAD
import './App.css';
import ReactPlayer from 'react-player';

function App(){
  const vidurl = "https://www.youtube.com/watch?v=UjtTYsfmj44";

  return (
    <div className='App'>
      <h1>React Player example</h1>
      <ReactPlayer
        url = {vidurl}
        playing={false}
        volume={0.5}
      />
    </div>
  );
}

export default App;
=======
// import './App.css';
// import ReactPlayer from 'react-player';

// function App(){
//   const vidurl = "https://www.youtube.com/watch?v=UjtTYsfmj44";

//   return (
//     <div className='App'>
//       <h1>React Player example</h1>
//       <ReactPlayer
//         url = {vidurl}
//         playing={false}
//         volume={0.5}
//       />
//     </div>
//   );
// }

// export default App;
>>>>>>> 005330b (I am updating HCJ by adding all my internship work here)

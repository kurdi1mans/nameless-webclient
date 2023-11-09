import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Pages/HomePage/HomePage"
import LoginPage from "./Pages/LoginPage/LoginPage"
import SignupPage from "./Pages/SignupPage/SignupPage"
import './App.css';



const App = ()=>
{
	return (
		<Router>
			<Navbar/>
			<Routes>
				<Route path="/" exact element={<HomePage/>}/>
				<Route path="/Login" element={<LoginPage/>}/>
				<Route path="/SignUp" element={<SignupPage/>}/>
			</Routes>
		</Router>
	);
}

export default App;

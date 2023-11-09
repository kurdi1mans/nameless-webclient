import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { controller } from '../../ModelAndController/Controller';
import './SignupPage.css'

function SignupPage()
{
	useEffect(() =>
	{
		controller.setCurrentPage("SignupPage");
	},[]);

	useEffect(() =>
	{
		refreshState();
	},[]);

	const refreshState = async () =>
	{
		// call the controller to refresh the necessary state
	}

	const contentJSX = () =>
	{
		let jsxTemp = [];
		jsxTemp.push(<h1 key='SignupPageHeader'>This is the Signup Page</h1>)
		return jsxTemp;
	}
	

	return (
		<div key='SignupPage' className='SignupPage'>
			{contentJSX()}
		</div>
	);
}

export default SignupPage;
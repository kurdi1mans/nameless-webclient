import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { controller } from '../../ModelAndController/Controller';
import './LoginPage.css'

function LoginPage()
{
	useEffect(() =>
	{
		controller.setCurrentPage("LoginPage")
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
		jsxTemp.push(<h1 key='LoginPageHeader'>This is the Login Page</h1>)
		return jsxTemp;
	}
	

	return (
		<div key='LoginPage' className='LoginPage'>
			{contentJSX()}
		</div>
	);
}

export default LoginPage;
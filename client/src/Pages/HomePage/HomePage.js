import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { controller } from '../../ModelAndController/Controller';
import './HomePage.css'

function HomePage()
{
	useEffect(() =>
	{
		controller.setCurrentPage("HomePage")
	},[]);

	useEffect(() =>
	{
		refreshState();
	},[]);

	const refreshState = async () =>
	{
		// call the controller to refresh the necessary state
	}

	return (
		<div key='HomePage' className='HomePage'>
			<h1>This is the Home Page</h1>
		</div>
	);
}

export default HomePage;
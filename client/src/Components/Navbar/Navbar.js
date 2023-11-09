import React, { useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { controller } from '../../ModelAndController/Controller';
import './Navbar.css'

function Navbar()
{
	const pageList = useSelector((state) => state.pageList);

	useEffect(() =>
	{
		refreshState();
	},[]);

	const refreshState = async () =>
	{
		controller.refreshPageList();
	}

	const contentJSX = () =>
	{
		let linksJSX = [];
		
		pageList.map((link,index) =>
		{
			linksJSX.push(
				<td key={index+"_"+link.pageName} className="nav-text">
					<Link to={link.pagePath}> {link.pageDisplayName} </Link>
				</td>
			)
		});

		const trJSX = (<tr>{linksJSX}</tr>);
		const tableJSX = (<table><tbody>{trJSX}</tbody></table>)
		
		return tableJSX;
	}
	

	return (
		<div className='nav-bar'>
			{contentJSX()}
		</div>
	);
}

export default Navbar;
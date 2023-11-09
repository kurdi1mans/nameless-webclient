import reduxStore from './ReduxStore';
import { apiFacade } from './API Facade/API_Facade';

class Controller
{
	constructor()
	{

	}
	
	state()
	{
		return reduxStore.getState();
	}
	
	setCurrentPage(pageName)
	{
		reduxStore.dispatch({type:"setCurrentPage", value:pageName});
	}
	
	async refreshPageList()
	{
		const pageList = await apiFacade.fetchPageList();
		reduxStore.dispatch({type:"setPageList", value:pageList});
	}
}

export const controller = new Controller();

import {createStore, combineReducers} from 'redux';


const pageList = (state = [], action) =>
{
	if(action.type === 'setPageList')
	{
		return action.value;
	}
   
	return state;
}

const currentPage = (state = "HomePage", action) =>
{
	if(action.type === 'setCurrentPage')
	{
		return action.value;
	}
   
	return state;
};

const loginUser = (state = {username:null, Email:null, roles:[]}, action) =>
{
	if(action.type === 'setLoginUser')
	{
		return action.value;
	}
   
	return state;
}

const initialSignUpForm =  {
	firstName:"",
	lastName:"",
	username:"",
	email:"",
	psw:"",
	pswRepeat:""
};

const signUpForm = (state = initialSignUpForm, action) =>
{
	if(action.type === 'setSignUpForm')
	{
		return action.value;
	}

	if(action.type === 'initializeSignUpForm')
	{
		return initialSignUpForm;
	}

	return state;
}

const genericFormReducer = (state = [], action) =>
{
	if(action.type === 'setGenericFormData')
	{
		return action.value;
	}

	return state;
};

const namedReducer = (reducerFunction, reducerName) =>
{
	return (state, action) =>
	{
		const { name } = action;
		const isInitializationCall = state === undefined;
		if (name !== reducerName && !isInitializationCall) return state;

		return reducerFunction(state, action);
	}
}

const myReduxStore = createStore
(
	combineReducers
	(
		{
			pageList,
			currentPage,
			loginUser,
			signUpForm,
			users: namedReducer(genericFormReducer,"Users"),
			userRoleAssignments: namedReducer(genericFormReducer,"UserRoleAssignments")
		}
	)
);
export default myReduxStore;
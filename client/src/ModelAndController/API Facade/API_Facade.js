class API_Facade
{
    async fetchPageList()
    {
        // here you make an api call to the backend server to get the list of application pages
        const page_links = [
            {
                pageDisplayName: 'Home',
                pageName: 'HomePage',
                pagePath: '/'
            },
            {
                pageDisplayName: 'Login',
                pageName: 'LoginPage',
                pagePath: '/Login'
            },
            {
                pageDisplayName: 'Signup',
                pageName: 'SignupPage',
                pagePath: '/Signup'
            }
        ];
    
        return page_links;
    }
}

export const apiFacade = new API_Facade();
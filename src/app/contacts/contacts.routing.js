
export const routing = ($urlRouterProvider, $locationProvider, $stateProvider) => {
    $locationProvider.html5Mode(true);
    //$urlRouterProvider.otherwise('./contacts/list');
    //$urlRouterProvider.otherwise('./contacts/add');

    $stateProvider.state ({
     name: 'list',
     url: './contacts/list',
     component: 'contactList',
    
    });
    $stateProvider.state ({
        name: 'add',
        url: './contacts/add',
        component: 'addContact',
       });
       $stateProvider.state ({
        name: 'edit',
        url: './contacts/edit/:id',
        component: 'editContact',
       });

}
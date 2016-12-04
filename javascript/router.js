mainApp.config(Router);

Router.$inject = ['$routeProvider'];

function Router($routeProvider) {

  
    $routeProvider.otherwise( { redirectTo:'/' });

  
    $routeProvider
      .when('/', { // this is the root route
            templateUrl:'/home.html',  // insert the home.html template into the ng-view
        //    controller: 'GoalDataController as dCtrl' 
        })
        .when('/goaldata', { // this is the root route
            templateUrl:'/javascript/views/goaldata.html',  // insert the home.html template into the ng-view
        //    controller: 'GoalDataController as dCtrl' 
        })
        .when('/returnedData', {
            templateUrl:'/javascript/views/returnedData.html',
            // controller: 'GoalDataController as dCtrl'
        })
         .when('/myGoals', { // this is the root route
            templateUrl:'/javascript/views/myGoals.html',  // insert the home.html template into the ng-view
        //    controller: 'GoalDataController as dCtrl' 
        })
        // this is a parameterized path.  The path segment following /origin/ will be assigned to the parameter id
        // you can see how it is referenced and used in originController.js
        .when('/origin/:id', {  
            templateUrl:'/templates/origin.html',
            controller: 'ReachItController as rCtrl' // here we are adding a controller that is only for this html template on this route
        });
};

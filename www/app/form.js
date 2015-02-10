/**
 * Created by simba on 18/12/14.
 */

// app.js
// create our angular app and inject ngAnimate and ui-router
// =============================================================================
angular.module('formApp', ['ngAnimate', 'ui.router'])

// configuring our routes
    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider

            // route to show our basic form (/form)
            .state('form', {
                url: '/form',
                templateUrl: '/form/form.html',
                controller: 'formController'
            })

            // nested states
            // each of these sections will have their own view
            // url will be nested (/form/profile)
            .state('form.start', {
                url: '/start',
                templateUrl: '/form/form-start.html',
                controller: function($scope) {
                    $scope.$watch('startForm.$valid', function(value) {
                        $scope.validator.start = value;
                    });
                }
            })

            .state('form.amount', {
                url: '/amount',
                templateUrl: '/form/form-amount.html',
                controller: function($scope) {
                    $scope.$watch('amountForm.$valid', function(value) {
                        $scope.validator.amount = value;
                    });
                }
            })

            // url will be /form/profile
            .state('form.profile', {
                url: '/profile',
                templateUrl: '/form/form-profile.html'
            })

            // url will be /form/status
            .state('form.status', {
                url: '/status',
                templateUrl: '/form/form-status.html'
            })

            // url will be /form/identity
            .state('form.identity', {
                url: '/identity',
                templateUrl: '/form/form-identity.html'
            })

            // url will be /form/personal
            .state('form.personal', {
                url: '/personal',
                templateUrl: '/form/form-personal.html'
            })

            .state('form.finish', {
                url: '/finish',
                templateUrl: '/form/form-finish.html'
            });

        // catch all route
        $urlRouterProvider.otherwise('/form/start');
    })

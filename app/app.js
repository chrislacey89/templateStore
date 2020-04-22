'use strict';

// Declare app level module which depends on views, and core components
angular
  .module('templateStore', [
    'ngRoute',
    'templateStore.view1',
    'templateStore.view2',
    'templateStore.templates',
  ])
  .config([
    '$locationProvider',
    '$routeProvider',
    function ($locationProvider, $routeProvider) {
      // $locationProvider.hashPrefix('!');

      $routeProvider.otherwise({ redirectTo: '/templates' });
    },
  ]);

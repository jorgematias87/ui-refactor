/**
 * @ngdoc overview
 * @name app.core
 * @description Core is where the Magma is
 */

(function(){

    'use strict';

    angular.module('app.core', [
        'ngSanitize',
        'ngCookies',
        'ui.router',
        'restangular',
        'translate'
    ]);

}());

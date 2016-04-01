/**
 * @ngdoc overview
 * @name app.core
 * @description Configuration block for translate
 */

(function(){

    'use strict';

    angular.module('app.core')
    .config(configuration);

    /* @ngInject */
    function configuration($translateProvider){
        $translateProvider.fileLoader({
            prefix: 'resources/',
            suffix: '.json'
        });
        $translateProvider.language('es-es');
    }

}());

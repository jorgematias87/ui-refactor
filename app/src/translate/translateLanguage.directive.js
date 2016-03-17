/**
 * @ngdoc directive
 * @name app.translate.directive:translateLanguage
 * @scope true
 * @param {object} test test object
 * @restrict E
 *
 * @description < description placeholder >
 *
 */

(function(){

  'use strict';

  angular
    .module('app.translate')
    .directive('translateLanguage', translateLanguage);

  /* @ngInject */
  function translateLanguage(){

    return {
      restrict: 'A',
      controller: controller,
      controllerAs: 'TranslateLanguage'
    };

    /////////////////////

    function controller () {
       var vm = this;
       vm.change = change;

       /////////////////////

       function change (lang) {
           console.log('hola')
       }

    }
  }

}());

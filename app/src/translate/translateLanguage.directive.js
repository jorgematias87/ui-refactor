/**
 * @ngdoc directive
 * @name translate.directive:translateLanguage
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
    .module('translate')
    .directive('translateLanguage', translateLanguage);

  /* @ngInject */
  function translateLanguage($translate){

    return {
      restrict: 'A',
      controller: controller,
      controllerAs: 'Translate'
    };

    /////////////////////

    function controller (){
       /*jshint validthis:true */
       var vm = this;
       vm.change = change;
       vm.language = $translate.language();

       /////////////////////

       function change (lang){
           $translate.use(lang);
       }

    }
  }

}());

/**
 * @ngdoc directive
 * @name translate.directive:translateLanguage
 * @scope true
 * @param {object} test test object
 * @restrict E
 *
 * @description
 * La directiva se encarga de gestionar el cambio de lenguage (switch) mediante un metodo change.
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

        /**
        * @ngdoc function
        * @name translate.directive:translateLanguage.#change
        * @methodOf translate.directive:translateLanguage
        *
        * @description
        *
        * @param {string} langKey a language key.
        */
       function change (lang){
           $translate.use(lang);
       }

    }
  }

}());

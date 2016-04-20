/**
 * @ngdoc overview
 * @name translate
 * @description The main module which holds everything together.
 */

(function(){

  'use strict';

  angular
    .module('translate', [])
    .run(run);

  /* @ngInject */
  function run ($translate){
      $translate.use();
  }

}());

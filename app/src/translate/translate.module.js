/**
 * @ngdoc overview
 * @name translate
 * @description < description placeholder >
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

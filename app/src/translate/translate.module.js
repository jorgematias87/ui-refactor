/**
 * @ngdoc overview
 * @name app.translate
 * @description < description placeholder >
 */

(function(){

  'use strict';

  angular
    .module('app.translate', ['pascalprecht.translate'])
    .run(run)
    .config(configuration);

  /* @ngInject */
  function run ($rootScope, $translate) {
      $rootScope.$on('$translateChangeSuccess', function () {
          console.log($translate.instant())
          // $rootScope.language = 
      });
  }

  /* @ngInject */
  function configuration($translateProvider){
      $translateProvider.useMissingTranslationHandlerLog();

      $translateProvider.useStaticFilesLoader({
          prefix: 'resources/',
          suffix: '.json'
      });
      $translateProvider.preferredLanguage('en-us');
      $translateProvider.useLocalStorage();
  }

}());

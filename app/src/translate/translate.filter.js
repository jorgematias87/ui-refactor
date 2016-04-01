/**
 * @ngdoc filter
 * @name translate.filer:translate
 * @description < description placeholder >
 * @param {object} input object to be filtered
 * @returns {object} < returns placeholder >
 */

(function(){

    'use strict';

    angular
    .module('translate')
    .filter('translate', translate);

    /* @ngInject */
    function translate($rootScope, $translate){
        var translateFilter = function (translationId){
            //convert indexes to properties and then strip a leading dot
            var str = translationId.replace(/\[(\w+)\]/g, '.$1').replace(/^\./, ''),
                properties = str.split('.'),
                result = null;

            properties.forEach(function (property, key){
                result = (key === 0) ? $translate.instant(property) : result[property];
            });

            return result;
        };

        translateFilter.$stateful = true;

        return translateFilter;
    }

}());

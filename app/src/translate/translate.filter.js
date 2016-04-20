/**
 * @ngdoc filter
 * @name translate.filer:translate
 * @requires translate.$translate
 * @description Uses $translate service to translate contents
 * @param {string} translationId A translation id to be translated.
 * @returns {string|object} Translate text or object.
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

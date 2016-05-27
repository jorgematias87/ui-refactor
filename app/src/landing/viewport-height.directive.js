/**
 * @ngdoc directive
 * @name app.landing.directive:viewport-height
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
    .module('app.landing')
    .directive('viewportToPixel', viewportToPixel);

    /* @ngInject */
    function viewportToPixel(){

        return {
            link: link,
            restrict: 'AE',
        };

        /////////////////////

        function link(scope, elem, attrs){
            $(window).bind('resize', function () {
                var percent = attrs.viewportToPixel ? attrs.viewportToPixel / 100 : 1,
                pixels = $(window).height() * percent;

                elem.height(pixels);
            }).resize();
        }
    }

}());

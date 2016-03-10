/**
 * @ngdoc overview
 * @name app.landing
 * @description < description placeholder >
 */

(function(){

    'use strict';

    angular
    .module('app.landing', [])
    .config(configuration)
    .run(run);

    /* @ngInject */
    function configuration($stateProvider){

        // add your state mappings here
        $stateProvider
        .state('landing',{
            url: '',
            views: {
                '': {
                    templateUrl: 'src/landing/partials/layout.html'
                },
                'header@landing': {
                    templateUrl: 'src/landing/partials/header.html'
                },
                'footer@landing': {
                    templateUrl: 'src/landing/partials/footer.html'
                }
            }
        })
        .state('landing.it', {
            url: '/it',
            title: 'Metzoo - IT',
            templateUrl: 'src/landing/it.html',
            data: {
                'headerClass': 'transparent underline-blue',
                'headerImg': '/metzoo_logo',
                'footerClass': 'bg-dark',
                'footerImg': 'metzoo_logo_white'
            }
        })
        .state('landing.agro', {
            url: '/agro',
            title: 'Metzoo - AGRO',
            templateUrl: 'src/landing/agro.html',
            data: {
                'headerClass': 'transparent underline-green',
                'headerImg': '/agro/metzoo_logo_agro',
                'footerClass': 'bg-green',
                'footerImg': '/agro/metzoo_logo_agro'
            }
        });
    }

    /* @ngInject */
    function run ($rootScope, $state) {
        $rootScope.$state = $state;
    }

}());

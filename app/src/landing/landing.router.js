(function(){

    'use strict';

    angular
    .module('app.landing')
    .run(run)
    .config(configuration);

    /* @ngInject */
    function run ($rootScope, $state) {
        $rootScope.$state = $state;
    }

    /* @ngInject */
    function configuration ($stateProvider, constants) {
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
            data: constants.cssClass.it || {}
        })
        .state('landing.agro', {
            url: '/agro',
            title: 'Metzoo - AGRO',
            templateurl: 'src/landing/agro.html',
            data: constants.cssClass.agro || {}
        })
        .state('landing.faq', {
            url: '/faq',
            title: 'Metzoo - FAQ',
            templateurl: 'src/landing/faq.html',
            data: constants.cssClass.default || {}
        });
    }

}());

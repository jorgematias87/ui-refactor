(function(){

    'use strict';

    angular
    .module('app.landing')
    .run(run)
    .config(configuration);

    /* @ngInject */
    function run ($rootScope, $state){
        $rootScope.$state = $state;

        //redirectTo
        $rootScope.$on('$stateChangeStart', function(evt, to, params){
            if(to.redirectTo){
                evt.preventDefault();
                $state.go(to.redirectTo, params);
            }
        });
    }

    /* @ngInject */
    function configuration ($stateProvider, constants){
        $stateProvider
        .state('landing', {
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
            },
            redirectTo: 'landing.it'
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
            templateUrl: 'src/landing/agro.html',
            data: constants.cssClass.agro || {}
        })
        .state('landing.faq', {
            url: '/faq',
            title: 'Metzoo - FAQ',
            templateUrl: 'src/landing/faq.html',
            data: constants.cssClass.default || {}
        });
    }

}());

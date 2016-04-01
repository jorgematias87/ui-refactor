(function(){

    'use strict';

    var constants = {
        cssClass: {
            default: {
                'headerClass': 'underline-blue',
                'headerImg': 'metzoo_logo',
                'footerClass': 'bg-dark',
                'footerImg': 'metzoo_logo_white',
                'footerImgClass': 'logo_white'
            },
            agro: {
                'headerClass': 'underline-green',
                'headerImg': 'agro/metzoo_logo_agro',
                'footerClass': 'bg-green',
                'footerImg': 'agro/metzoo_logo_agro'
            }
        }
    };

    constants.cssClass.it = _.merge({}, constants.cssClass.default, {
        'headerClass': 'header-transparent underline-blue'
    });

    angular
    .module('app.landing')
    .constant('constants', constants);

}());

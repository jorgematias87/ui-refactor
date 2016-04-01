(function(){

    /* global module, inject */

    'use strict';

    describe('Factory: translate', function(){

        beforeEach(module('app.core'));
        beforeEach(module('app.translate'));

        var translateProvider;

        beforeEach(module(function ($translateProvider){
            translateProvider = $translateProvider;
        }));

        var translate;

        beforeEach(inject(function($translate){
            translate = $translate;
        }));

        describe(': fileLoader', function (){
            it(': set file loader options (prefix and sufix)', function(){

                var options = {
                    prefix: 'test prefix',
                    suffix: 'test sufix'
                };

                var fileLoader = translateProvider.fileLoader(options);

                expect(fileLoader).toEqual(options);
            });

            it(': not set file loader options', function (){
                expect(function(){
                    translateProvider.fileLoader();
                }).toThrowError(Error);
            });

            it(': not prefix specified', function (){
                expect(function (){
                    translateProvider.fileLoader({prefix: 'test'});
                }).toThrowError(Error);
            });

            it(': not suffix specified', function (){
                expect(function (){
                    translateProvider.fileLoader({suffix: 'test'});
                }).toThrowError(Error);
            });
        });

        describe(': defaultLanguage', function (){
            it(': set defaultLanguage', function (){
                var lang = translateProvider.defaultLanguage('en-us');
                expect(lang).toEqual('en-us');
            });

            it('get defaultLanguage', function (){
                translateProvider.defaultLanguage('es-es');
                expect(translateProvider.defaultLanguage()).toEqual('es-es');
            });

            it(': the argument is not a string', function (){
                expect(function (){
                    translateProvider.defaultLanguage({test: 'test'});
                }).toThrowError(Error);
            });
        });

    });
}());

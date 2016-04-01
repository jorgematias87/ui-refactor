/**
 * @ngdoc service
 * @name translate.$translate
 * @description < description placeholder >
 */

(function(){

    'use strict';

    angular
    .module('translate')
    .provider('$translate', translate);

    function translate(){
        var languageKey = null,
            translations = {},
            fileLoaderOptions = {},
            storageKey = 'translate-key',
            langArgumentError = 'The argument must be a string',
            $window,
            $http,
            $log,
            $rootScope,

            translateProvider = {
                fileLoader : fileLoader,
                language: language,
                $get: $get
            };

        return translateProvider;

        ////////////////////

        function fileLoader (options){
            if(!options || !angular.isString(options.prefix) || !angular.isString(options.suffix)){
                throw new Error('Couldn\'t load file, no prefix or suffix specified!');
            }

            fileLoaderOptions = options;

            return fileLoaderOptions;
        }

        /**
        * @ngdoc function
        * @name translate.$translate.#language
        * @methodOf translate.$translate
        *
        * @description
        * $translateProvider: <br>
        * With parameter: sets language key value.<br>
        * Without parameter: returns language key value.
        * @param {string} langKey A language key.
        * @return {string} langKey A language key.
        */
        function language (lang){
            if(lang){
                if(angular.isString(lang)){
                    languageKey = lang;
                }
                else{
                    throw new Error(langArgumentError);
                }
            }

            return languageKey;
        }

        /* @ngInject */
        function $get (_$window_, _$http_, _$log_, _$rootScope_){
            $window = _$window_;
            $http = _$http_;
            $log = _$log_;
            $rootScope = _$rootScope_;

            return {
                use: useLanguage,
                instant: getInstant,
                language: language
            };
        }

        /**
        * @ngdoc function
        * @name translate.$translate.#use
        * @methodOf translate.$translate
        *
        * @description
        * Dice a "translate" que lenguage usar mediante el langKey dado.<br>
        * Se fija si el langKey dado existe en el array de traducciones en caso contrario lo obtiene.<br>
        * En el caso de que se lo llame sin parametros esta se fija si existe una langKey en el localStorage<br>
        * para asi obtener la traducción en caso contrario lo obtiene con el defaultLanguage configurado.
        * @param {string} langKey a language key.
        */
        function useLanguage (lang){
            if(lang){
                if(!angular.isString(lang)){
                    $log.error(langArgumentError);
                }

                if(!(lang in translations)){
                    getTranslation(lang);
                }
                else{
                    language(lang);
                }
            }
            else{
                var storageLang = $window.localStorage.getItem(storageKey);
                getTranslation(storageLang || languageKey);
            }
        }

        function getTranslation (lang){
            var url = [
                fileLoaderOptions.prefix,
                lang,
                fileLoaderOptions.suffix
            ].join('');

            $http({
                url: url,
                method: 'GET',
                params: ''
            })
            .then(getTranslationSuccess.bind(null, lang), function (rejection){
                $log.error(rejection.data);
            });
        }

        function getTranslationSuccess (lang, response){
            language(lang);
            translations[languageKey] = response.data;
            $window.localStorage.setItem(storageKey, languageKey);
        }

        /**
        * @ngdoc function
        * @name translate.$translate.#instant
        * @methodOf translate.$translate
        *
        * @description
        * Returns a translation instantly from the internal state of loaded translation.
        * @param {string} translationId translationId A token which represents a translation id
        * @return {string|object} translation.
        */
        function getInstant (translationId){
            if(!translations[languageKey][translationId]){
                $log.warn('Translation for ' + translationId + ' doesn\'t exist');
            }

            return translations[languageKey][translationId];
        }
    }

}());

(function(){

  /* global module, inject */

  'use strict';

  describe('Filter: translate', function(){

    beforeEach(module('app.core'));
    beforeEach(module('app.translate'));

    var translate;

    beforeEach(inject(function (translateFilter){

      translate = translateFilter;

    }));

    // it('should not do anything for now', function(){
    //   expect(true).toBe(false);
    // });

  });
}());

/*
 * ValorantEsports OpenApi Specification
 * Unofficial documentation to the ValorantEsports Api
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.34
 *
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ValorantEsportsOpenApiSpecification);
  }
}(this, function(expect, ValorantEsportsOpenApiSpecification) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('GetEventListDataUnstartedMatch', function() {
      beforeEach(function() {
        instance = new ValorantEsportsOpenApiSpecification.GetEventListDataUnstartedMatch();
      });

      it('should create an instance of GetEventListDataUnstartedMatch', function() {
        // TODO: update the code to test GetEventListDataUnstartedMatch
        expect(instance).to.be.a(ValorantEsportsOpenApiSpecification.GetEventListDataUnstartedMatch);
      });

      it('should have the property teams (base name: "teams")', function() {
        // TODO: update the code to test the property teams
        expect(instance).to.have.property('teams');
        // expect(instance.teams).to.be(expectedValueLiteral);
      });

    });
  });

}));
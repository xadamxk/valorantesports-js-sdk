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
    describe('GetVodsDataScheduleMatchTeams', function() {
      beforeEach(function() {
        instance = new ValorantEsportsOpenApiSpecification.GetVodsDataScheduleMatchTeams();
      });

      it('should create an instance of GetVodsDataScheduleMatchTeams', function() {
        // TODO: update the code to test GetVodsDataScheduleMatchTeams
        expect(instance).to.be.a(ValorantEsportsOpenApiSpecification.GetVodsDataScheduleMatchTeams);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property code (base name: "code")', function() {
        // TODO: update the code to test the property code
        expect(instance).to.have.property('code');
        // expect(instance.code).to.be(expectedValueLiteral);
      });

      it('should have the property image (base name: "image")', function() {
        // TODO: update the code to test the property image
        expect(instance).to.have.property('image');
        // expect(instance.image).to.be(expectedValueLiteral);
      });

      it('should have the property result (base name: "result")', function() {
        // TODO: update the code to test the property result
        expect(instance).to.have.property('result');
        // expect(instance.result).to.be(expectedValueLiteral);
      });

    });
  });

}));

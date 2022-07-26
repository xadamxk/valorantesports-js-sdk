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
    describe('GetStandingsDataSections', function() {
      beforeEach(function() {
        instance = new ValorantEsportsOpenApiSpecification.GetStandingsDataSections();
      });

      it('should create an instance of GetStandingsDataSections', function() {
        // TODO: update the code to test GetStandingsDataSections
        expect(instance).to.be.a(ValorantEsportsOpenApiSpecification.GetStandingsDataSections);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property type (base name: "type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

      it('should have the property columns (base name: "columns")', function() {
        // TODO: update the code to test the property columns
        expect(instance).to.have.property('columns');
        // expect(instance.columns).to.be(expectedValueLiteral);
      });

      it('should have the property rankings (base name: "rankings")', function() {
        // TODO: update the code to test the property rankings
        expect(instance).to.have.property('rankings');
        // expect(instance.rankings).to.be(expectedValueLiteral);
      });

    });
  });

}));

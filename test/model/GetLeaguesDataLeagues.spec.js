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
    describe('GetLeaguesDataLeagues', function() {
      beforeEach(function() {
        instance = new ValorantEsportsOpenApiSpecification.GetLeaguesDataLeagues();
      });

      it('should create an instance of GetLeaguesDataLeagues', function() {
        // TODO: update the code to test GetLeaguesDataLeagues
        expect(instance).to.be.a(ValorantEsportsOpenApiSpecification.GetLeaguesDataLeagues);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property slug (base name: "slug")', function() {
        // TODO: update the code to test the property slug
        expect(instance).to.have.property('slug');
        // expect(instance.slug).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property region (base name: "region")', function() {
        // TODO: update the code to test the property region
        expect(instance).to.have.property('region');
        // expect(instance.region).to.be(expectedValueLiteral);
      });

      it('should have the property image (base name: "image")', function() {
        // TODO: update the code to test the property image
        expect(instance).to.have.property('image');
        // expect(instance.image).to.be(expectedValueLiteral);
      });

      it('should have the property priority (base name: "priority")', function() {
        // TODO: update the code to test the property priority
        expect(instance).to.have.property('priority');
        // expect(instance.priority).to.be(expectedValueLiteral);
      });

      it('should have the property displayPriority (base name: "displayPriority")', function() {
        // TODO: update the code to test the property displayPriority
        expect(instance).to.have.property('displayPriority');
        // expect(instance.displayPriority).to.be(expectedValueLiteral);
      });

    });
  });

}));

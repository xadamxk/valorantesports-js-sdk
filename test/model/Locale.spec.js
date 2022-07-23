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
    describe('Locale', function() {
      beforeEach(function() {
        instance = ValorantEsportsOpenApiSpecification.Locale;
      });

      it('should create an instance of Locale', function() {
        // TODO: update the code to test Locale
        expect(instance).to.be.a('object');
      });

      it('should have the property enUS', function() {
        expect(instance).to.have.property('enUS');
        expect(instance.enUS).to.be("en-US");
      });

      it('should have the property enGB', function() {
        expect(instance).to.have.property('enGB');
        expect(instance.enGB).to.be("en-GB");
      });

      it('should have the property enAU', function() {
        expect(instance).to.have.property('enAU');
        expect(instance.enAU).to.be("en-AU");
      });

      it('should have the property csCZ', function() {
        expect(instance).to.have.property('csCZ');
        expect(instance.csCZ).to.be("cs-CZ");
      });

      it('should have the property deDE', function() {
        expect(instance).to.have.property('deDE');
        expect(instance.deDE).to.be("de-DE");
      });

      it('should have the property elGR', function() {
        expect(instance).to.have.property('elGR');
        expect(instance.elGR).to.be("el-GR");
      });

      it('should have the property esES', function() {
        expect(instance).to.have.property('esES');
        expect(instance.esES).to.be("es-ES");
      });

      it('should have the property esMX', function() {
        expect(instance).to.have.property('esMX');
        expect(instance.esMX).to.be("es-MX");
      });

      it('should have the property frFR', function() {
        expect(instance).to.have.property('frFR');
        expect(instance.frFR).to.be("fr-FR");
      });

      it('should have the property huHU', function() {
        expect(instance).to.have.property('huHU');
        expect(instance.huHU).to.be("hu-HU");
      });

      it('should have the property itIT', function() {
        expect(instance).to.have.property('itIT');
        expect(instance.itIT).to.be("it-IT");
      });

      it('should have the property plPL', function() {
        expect(instance).to.have.property('plPL');
        expect(instance.plPL).to.be("pl-PL");
      });

      it('should have the property ptBR', function() {
        expect(instance).to.have.property('ptBR');
        expect(instance.ptBR).to.be("pt-BR");
      });

      it('should have the property roRO', function() {
        expect(instance).to.have.property('roRO');
        expect(instance.roRO).to.be("ro-RO");
      });

      it('should have the property ruRU', function() {
        expect(instance).to.have.property('ruRU');
        expect(instance.ruRU).to.be("ru-RU");
      });

      it('should have the property trTR', function() {
        expect(instance).to.have.property('trTR');
        expect(instance.trTR).to.be("tr-TR");
      });

      it('should have the property jaJP', function() {
        expect(instance).to.have.property('jaJP');
        expect(instance.jaJP).to.be("ja-JP");
      });

      it('should have the property koKR', function() {
        expect(instance).to.have.property('koKR');
        expect(instance.koKR).to.be("ko-KR");
      });

    });
  });

}));

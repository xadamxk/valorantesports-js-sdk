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
import {ApiClient} from '../ApiClient';
import {GetStandingsDataCells} from './GetStandingsDataCells';

/**
 * The GetStandingsDataColumns model module.
 * @module model/GetStandingsDataColumns
 * @version 1.0.0
 */
export class GetStandingsDataColumns {
  /**
   * Constructs a new <code>GetStandingsDataColumns</code>.
   * @alias module:model/GetStandingsDataColumns
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetStandingsDataColumns</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetStandingsDataColumns} obj Optional instance to populate.
   * @return {module:model/GetStandingsDataColumns} The populated <code>GetStandingsDataColumns</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetStandingsDataColumns();
      if (data.hasOwnProperty('cells'))
        obj.cells = ApiClient.convertToType(data['cells'], [GetStandingsDataCells]);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/GetStandingsDataCells>} cells
 */
GetStandingsDataColumns.prototype.cells = undefined;

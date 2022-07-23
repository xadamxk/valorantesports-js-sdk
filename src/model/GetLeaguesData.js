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
import {GetLeaguesDataLeagues} from './GetLeaguesDataLeagues';

/**
 * The GetLeaguesData model module.
 * @module model/GetLeaguesData
 * @version 1.0.0
 */
export class GetLeaguesData {
  /**
   * Constructs a new <code>GetLeaguesData</code>.
   * @alias module:model/GetLeaguesData
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetLeaguesData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetLeaguesData} obj Optional instance to populate.
   * @return {module:model/GetLeaguesData} The populated <code>GetLeaguesData</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetLeaguesData();
      if (data.hasOwnProperty('leagues'))
        obj.leagues = ApiClient.convertToType(data['leagues'], [GetLeaguesDataLeagues]);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/GetLeaguesDataLeagues>} leagues
 */
GetLeaguesData.prototype.leagues = undefined;


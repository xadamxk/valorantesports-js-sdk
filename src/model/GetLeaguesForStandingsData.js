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
import {GetLeaguesForStandingsDataLeagues} from './GetLeaguesForStandingsDataLeagues';

/**
 * The GetLeaguesForStandingsData model module.
 * @module model/GetLeaguesForStandingsData
 * @version 1.0.0
 */
export class GetLeaguesForStandingsData {
  /**
   * Constructs a new <code>GetLeaguesForStandingsData</code>.
   * @alias module:model/GetLeaguesForStandingsData
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetLeaguesForStandingsData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetLeaguesForStandingsData} obj Optional instance to populate.
   * @return {module:model/GetLeaguesForStandingsData} The populated <code>GetLeaguesForStandingsData</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetLeaguesForStandingsData();
      if (data.hasOwnProperty('leagues'))
        obj.leagues = ApiClient.convertToType(data['leagues'], [GetLeaguesForStandingsDataLeagues]);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/GetLeaguesForStandingsDataLeagues>} leagues
 */
GetLeaguesForStandingsData.prototype.leagues = undefined;


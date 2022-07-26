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
import {GetLeaguesForStandingsData} from './GetLeaguesForStandingsData';

/**
 * The GetLeaguesForStandings model module.
 * @module model/GetLeaguesForStandings
 * @version 1.0.0
 */
export class GetLeaguesForStandings {
  /**
   * Constructs a new <code>GetLeaguesForStandings</code>.
   * @alias module:model/GetLeaguesForStandings
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetLeaguesForStandings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetLeaguesForStandings} obj Optional instance to populate.
   * @return {module:model/GetLeaguesForStandings} The populated <code>GetLeaguesForStandings</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetLeaguesForStandings();
      if (data.hasOwnProperty('data'))
        obj.data = GetLeaguesForStandingsData.constructFromObject(data['data']);
    }
    return obj;
  }
}

/**
 * @member {module:model/GetLeaguesForStandingsData} data
 */
GetLeaguesForStandings.prototype.data = undefined;


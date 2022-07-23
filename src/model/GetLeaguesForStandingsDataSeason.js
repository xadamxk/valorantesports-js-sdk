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
import {GetLeaguesForStandingsDataSeasonSplits} from './GetLeaguesForStandingsDataSeasonSplits';

/**
 * The GetLeaguesForStandingsDataSeason model module.
 * @module model/GetLeaguesForStandingsDataSeason
 * @version 1.0.0
 */
export class GetLeaguesForStandingsDataSeason {
  /**
   * Constructs a new <code>GetLeaguesForStandingsDataSeason</code>.
   * @alias module:model/GetLeaguesForStandingsDataSeason
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetLeaguesForStandingsDataSeason</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetLeaguesForStandingsDataSeason} obj Optional instance to populate.
   * @return {module:model/GetLeaguesForStandingsDataSeason} The populated <code>GetLeaguesForStandingsDataSeason</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetLeaguesForStandingsDataSeason();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('slug'))
        obj.slug = ApiClient.convertToType(data['slug'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('startTime'))
        obj.startTime = ApiClient.convertToType(data['startTime'], 'String');
      if (data.hasOwnProperty('splits'))
        obj.splits = ApiClient.convertToType(data['splits'], [GetLeaguesForStandingsDataSeasonSplits]);
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
GetLeaguesForStandingsDataSeason.prototype.id = undefined;

/**
 * @member {String} slug
 */
GetLeaguesForStandingsDataSeason.prototype.slug = undefined;

/**
 * @member {String} name
 */
GetLeaguesForStandingsDataSeason.prototype.name = undefined;

/**
 * @member {String} startTime
 */
GetLeaguesForStandingsDataSeason.prototype.startTime = undefined;

/**
 * @member {Array.<module:model/GetLeaguesForStandingsDataSeasonSplits>} splits
 */
GetLeaguesForStandingsDataSeason.prototype.splits = undefined;

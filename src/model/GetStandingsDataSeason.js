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
import {GetStandingsDataSeasonSplits} from './GetStandingsDataSeasonSplits';

/**
 * The GetStandingsDataSeason model module.
 * @module model/GetStandingsDataSeason
 * @version 1.0.0
 */
export class GetStandingsDataSeason {
  /**
   * Constructs a new <code>GetStandingsDataSeason</code>.
   * @alias module:model/GetStandingsDataSeason
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetStandingsDataSeason</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetStandingsDataSeason} obj Optional instance to populate.
   * @return {module:model/GetStandingsDataSeason} The populated <code>GetStandingsDataSeason</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetStandingsDataSeason();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('slug'))
        obj.slug = ApiClient.convertToType(data['slug'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('startTime'))
        obj.startTime = ApiClient.convertToType(data['startTime'], 'String');
      if (data.hasOwnProperty('endTime'))
        obj.endTime = ApiClient.convertToType(data['endTime'], 'String');
      if (data.hasOwnProperty('splits'))
        obj.splits = ApiClient.convertToType(data['splits'], [GetStandingsDataSeasonSplits]);
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
GetStandingsDataSeason.prototype.id = undefined;

/**
 * @member {String} name
 */
GetStandingsDataSeason.prototype.name = undefined;

/**
 * @member {String} slug
 */
GetStandingsDataSeason.prototype.slug = undefined;

/**
 * @member {String} status
 */
GetStandingsDataSeason.prototype.status = undefined;

/**
 * @member {String} startTime
 */
GetStandingsDataSeason.prototype.startTime = undefined;

/**
 * @member {String} endTime
 */
GetStandingsDataSeason.prototype.endTime = undefined;

/**
 * @member {Array.<module:model/GetStandingsDataSeasonSplits>} splits
 */
GetStandingsDataSeason.prototype.splits = undefined;

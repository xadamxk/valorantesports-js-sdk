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

/**
 * The GetScheduleDataScheduleTournamentSplit model module.
 * @module model/GetScheduleDataScheduleTournamentSplit
 * @version 1.0.0
 */
export class GetScheduleDataScheduleTournamentSplit {
  /**
   * Constructs a new <code>GetScheduleDataScheduleTournamentSplit</code>.
   * @alias module:model/GetScheduleDataScheduleTournamentSplit
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetScheduleDataScheduleTournamentSplit</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetScheduleDataScheduleTournamentSplit} obj Optional instance to populate.
   * @return {module:model/GetScheduleDataScheduleTournamentSplit} The populated <code>GetScheduleDataScheduleTournamentSplit</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetScheduleDataScheduleTournamentSplit();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} name
 */
GetScheduleDataScheduleTournamentSplit.prototype.name = undefined;

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
 * The GetScheduleDataScheduleMatchStrategy model module.
 * @module model/GetScheduleDataScheduleMatchStrategy
 * @version 1.0.0
 */
export class GetScheduleDataScheduleMatchStrategy {
  /**
   * Constructs a new <code>GetScheduleDataScheduleMatchStrategy</code>.
   * @alias module:model/GetScheduleDataScheduleMatchStrategy
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetScheduleDataScheduleMatchStrategy</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetScheduleDataScheduleMatchStrategy} obj Optional instance to populate.
   * @return {module:model/GetScheduleDataScheduleMatchStrategy} The populated <code>GetScheduleDataScheduleMatchStrategy</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetScheduleDataScheduleMatchStrategy();
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {String} type
 */
GetScheduleDataScheduleMatchStrategy.prototype.type = undefined;

/**
 * @member {Number} count
 */
GetScheduleDataScheduleMatchStrategy.prototype.count = undefined;


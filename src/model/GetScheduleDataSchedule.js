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
import {GetScheduleDataSchedulePages} from './GetScheduleDataSchedulePages';

/**
 * The GetScheduleDataSchedule model module.
 * @module model/GetScheduleDataSchedule
 * @version 1.0.0
 */
export class GetScheduleDataSchedule {
  /**
   * Constructs a new <code>GetScheduleDataSchedule</code>.
   * @alias module:model/GetScheduleDataSchedule
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetScheduleDataSchedule</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetScheduleDataSchedule} obj Optional instance to populate.
   * @return {module:model/GetScheduleDataSchedule} The populated <code>GetScheduleDataSchedule</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetScheduleDataSchedule();
      if (data.hasOwnProperty('pages'))
        obj.pages = GetScheduleDataSchedulePages.constructFromObject(data['pages']);
      if (data.hasOwnProperty('events'))
        obj.events = ApiClient.convertToType(data['events'], [Object]);
    }
    return obj;
  }
}

/**
 * @member {module:model/GetScheduleDataSchedulePages} pages
 */
GetScheduleDataSchedule.prototype.pages = undefined;

/**
 * @member {Array.<Object>} events
 */
GetScheduleDataSchedule.prototype.events = undefined;


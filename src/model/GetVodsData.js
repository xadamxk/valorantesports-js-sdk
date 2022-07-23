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
import {GetVodsDataSchedule} from './GetVodsDataSchedule';

/**
 * The GetVodsData model module.
 * @module model/GetVodsData
 * @version 1.0.0
 */
export class GetVodsData {
  /**
   * Constructs a new <code>GetVodsData</code>.
   * @alias module:model/GetVodsData
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetVodsData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetVodsData} obj Optional instance to populate.
   * @return {module:model/GetVodsData} The populated <code>GetVodsData</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetVodsData();
      if (data.hasOwnProperty('schedule'))
        obj.schedule = GetVodsDataSchedule.constructFromObject(data['schedule']);
    }
    return obj;
  }
}

/**
 * @member {module:model/GetVodsDataSchedule} schedule
 */
GetVodsData.prototype.schedule = undefined;


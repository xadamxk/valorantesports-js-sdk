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
 * The GetEventListDataUnstartedMatchTeams model module.
 * @module model/GetEventListDataUnstartedMatchTeams
 * @version 1.0.0
 */
export class GetEventListDataUnstartedMatchTeams {
  /**
   * Constructs a new <code>GetEventListDataUnstartedMatchTeams</code>.
   * @alias module:model/GetEventListDataUnstartedMatchTeams
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetEventListDataUnstartedMatchTeams</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetEventListDataUnstartedMatchTeams} obj Optional instance to populate.
   * @return {module:model/GetEventListDataUnstartedMatchTeams} The populated <code>GetEventListDataUnstartedMatchTeams</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetEventListDataUnstartedMatchTeams();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'String');
      if (data.hasOwnProperty('image'))
        obj.image = ApiClient.convertToType(data['image'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} code
 */
GetEventListDataUnstartedMatchTeams.prototype.code = undefined;

/**
 * @member {String} image
 */
GetEventListDataUnstartedMatchTeams.prototype.image = undefined;


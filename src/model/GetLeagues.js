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
import {GetLeaguesData} from './GetLeaguesData';

/**
 * The GetLeagues model module.
 * @module model/GetLeagues
 * @version 1.0.0
 */
export class GetLeagues {
  /**
   * Constructs a new <code>GetLeagues</code>.
   * @alias module:model/GetLeagues
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetLeagues</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetLeagues} obj Optional instance to populate.
   * @return {module:model/GetLeagues} The populated <code>GetLeagues</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetLeagues();
      if (data.hasOwnProperty('data'))
        obj.data = GetLeaguesData.constructFromObject(data['data']);
    }
    return obj;
  }
}

/**
 * @member {module:model/GetLeaguesData} data
 */
GetLeagues.prototype.data = undefined;


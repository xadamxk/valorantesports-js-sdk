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
import {GetEventListData} from './GetEventListData';

/**
 * The GetEventList model module.
 * @module model/GetEventList
 * @version 1.0.0
 */
export class GetEventList {
  /**
   * Constructs a new <code>GetEventList</code>.
   * @alias module:model/GetEventList
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetEventList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetEventList} obj Optional instance to populate.
   * @return {module:model/GetEventList} The populated <code>GetEventList</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetEventList();
      if (data.hasOwnProperty('data'))
        obj.data = GetEventListData.constructFromObject(data['data']);
    }
    return obj;
  }
}

/**
 * @member {module:model/GetEventListData} data
 */
GetEventList.prototype.data = undefined;


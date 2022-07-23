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
import {GetEventListDataInProgress} from './GetEventListDataInProgress';
import {GetEventListDataUnstarted} from './GetEventListDataUnstarted';

/**
 * The GetEventListData model module.
 * @module model/GetEventListData
 * @version 1.0.0
 */
export class GetEventListData {
  /**
   * Constructs a new <code>GetEventListData</code>.
   * @alias module:model/GetEventListData
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetEventListData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetEventListData} obj Optional instance to populate.
   * @return {module:model/GetEventListData} The populated <code>GetEventListData</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetEventListData();
      if (data.hasOwnProperty('inProgress'))
        obj.inProgress = GetEventListDataInProgress.constructFromObject(data['inProgress']);
      if (data.hasOwnProperty('unstarted'))
        obj.unstarted = GetEventListDataUnstarted.constructFromObject(data['unstarted']);
    }
    return obj;
  }
}

/**
 * @member {module:model/GetEventListDataInProgress} inProgress
 */
GetEventListData.prototype.inProgress = undefined;

/**
 * @member {module:model/GetEventListDataUnstarted} unstarted
 */
GetEventListData.prototype.unstarted = undefined;


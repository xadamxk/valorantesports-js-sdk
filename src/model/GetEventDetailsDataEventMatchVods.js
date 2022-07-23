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
import {GetEventDetailsDataEventMatchMediaLocale} from './GetEventDetailsDataEventMatchMediaLocale';

/**
 * The GetEventDetailsDataEventMatchVods model module.
 * @module model/GetEventDetailsDataEventMatchVods
 * @version 1.0.0
 */
export class GetEventDetailsDataEventMatchVods {
  /**
   * Constructs a new <code>GetEventDetailsDataEventMatchVods</code>.
   * @alias module:model/GetEventDetailsDataEventMatchVods
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetEventDetailsDataEventMatchVods</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetEventDetailsDataEventMatchVods} obj Optional instance to populate.
   * @return {module:model/GetEventDetailsDataEventMatchVods} The populated <code>GetEventDetailsDataEventMatchVods</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetEventDetailsDataEventMatchVods();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('parameter'))
        obj.parameter = ApiClient.convertToType(data['parameter'], 'String');
      if (data.hasOwnProperty('locale'))
        obj.locale = ApiClient.convertToType(data['locale'], 'String');
      if (data.hasOwnProperty('mediaLocale'))
        obj.mediaLocale = GetEventDetailsDataEventMatchMediaLocale.constructFromObject(data['mediaLocale']);
      if (data.hasOwnProperty('provider'))
        obj.provider = ApiClient.convertToType(data['provider'], 'String');
      if (data.hasOwnProperty('offset'))
        obj.offset = ApiClient.convertToType(data['offset'], 'Number');
      if (data.hasOwnProperty('firstFrameTime'))
        obj.firstFrameTime = ApiClient.convertToType(data['firstFrameTime'], 'Number');
      if (data.hasOwnProperty('startMillis'))
        obj.startMillis = ApiClient.convertToType(data['startMillis'], 'Number');
      if (data.hasOwnProperty('endMillis'))
        obj.endMillis = ApiClient.convertToType(data['endMillis'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
GetEventDetailsDataEventMatchVods.prototype.id = undefined;

/**
 * @member {String} parameter
 */
GetEventDetailsDataEventMatchVods.prototype.parameter = undefined;

/**
 * @member {String} locale
 */
GetEventDetailsDataEventMatchVods.prototype.locale = undefined;

/**
 * @member {module:model/GetEventDetailsDataEventMatchMediaLocale} mediaLocale
 */
GetEventDetailsDataEventMatchVods.prototype.mediaLocale = undefined;

/**
 * @member {String} provider
 */
GetEventDetailsDataEventMatchVods.prototype.provider = undefined;

/**
 * @member {Number} offset
 */
GetEventDetailsDataEventMatchVods.prototype.offset = undefined;

/**
 * @member {Number} firstFrameTime
 */
GetEventDetailsDataEventMatchVods.prototype.firstFrameTime = undefined;

/**
 * @member {Number} startMillis
 */
GetEventDetailsDataEventMatchVods.prototype.startMillis = undefined;

/**
 * @member {Number} endMillis
 */
GetEventDetailsDataEventMatchVods.prototype.endMillis = undefined;


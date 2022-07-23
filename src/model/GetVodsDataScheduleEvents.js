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
import {GetVodsDataScheduleGames} from './GetVodsDataScheduleGames';
import {GetVodsDataScheduleLeague} from './GetVodsDataScheduleLeague';
import {GetVodsDataScheduleMatch} from './GetVodsDataScheduleMatch';
import {GetVodsDataScheduleTournament} from './GetVodsDataScheduleTournament';

/**
 * The GetVodsDataScheduleEvents model module.
 * @module model/GetVodsDataScheduleEvents
 * @version 1.0.0
 */
export class GetVodsDataScheduleEvents {
  /**
   * Constructs a new <code>GetVodsDataScheduleEvents</code>.
   * @alias module:model/GetVodsDataScheduleEvents
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetVodsDataScheduleEvents</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetVodsDataScheduleEvents} obj Optional instance to populate.
   * @return {module:model/GetVodsDataScheduleEvents} The populated <code>GetVodsDataScheduleEvents</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetVodsDataScheduleEvents();
      if (data.hasOwnProperty('startTime'))
        obj.startTime = ApiClient.convertToType(data['startTime'], 'String');
      if (data.hasOwnProperty('blockName'))
        obj.blockName = ApiClient.convertToType(data['blockName'], 'String');
      if (data.hasOwnProperty('league'))
        obj.league = GetVodsDataScheduleLeague.constructFromObject(data['league']);
      if (data.hasOwnProperty('tournament'))
        obj.tournament = GetVodsDataScheduleTournament.constructFromObject(data['tournament']);
      if (data.hasOwnProperty('match'))
        obj.match = GetVodsDataScheduleMatch.constructFromObject(data['match']);
      if (data.hasOwnProperty('games'))
        obj.games = ApiClient.convertToType(data['games'], [GetVodsDataScheduleGames]);
    }
    return obj;
  }
}

/**
 * @member {String} startTime
 */
GetVodsDataScheduleEvents.prototype.startTime = undefined;

/**
 * @member {String} blockName
 */
GetVodsDataScheduleEvents.prototype.blockName = undefined;

/**
 * @member {module:model/GetVodsDataScheduleLeague} league
 */
GetVodsDataScheduleEvents.prototype.league = undefined;

/**
 * @member {module:model/GetVodsDataScheduleTournament} tournament
 */
GetVodsDataScheduleEvents.prototype.tournament = undefined;

/**
 * @member {module:model/GetVodsDataScheduleMatch} match
 */
GetVodsDataScheduleEvents.prototype.match = undefined;

/**
 * @member {Array.<module:model/GetVodsDataScheduleGames>} games
 */
GetVodsDataScheduleEvents.prototype.games = undefined;

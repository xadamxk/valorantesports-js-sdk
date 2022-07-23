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
import {ApiClient} from './ApiClient';
import {GetEventDetails} from './model/GetEventDetails';
import {GetEventDetailsData} from './model/GetEventDetailsData';
import {GetEventDetailsDataEvent} from './model/GetEventDetailsDataEvent';
import {GetEventDetailsDataEventLeague} from './model/GetEventDetailsDataEventLeague';
import {GetEventDetailsDataEventMatch} from './model/GetEventDetailsDataEventMatch';
import {GetEventDetailsDataEventMatchGames} from './model/GetEventDetailsDataEventMatchGames';
import {GetEventDetailsDataEventMatchMediaLocale} from './model/GetEventDetailsDataEventMatchMediaLocale';
import {GetEventDetailsDataEventMatchResult} from './model/GetEventDetailsDataEventMatchResult';
import {GetEventDetailsDataEventMatchStrategy} from './model/GetEventDetailsDataEventMatchStrategy';
import {GetEventDetailsDataEventMatchTeams} from './model/GetEventDetailsDataEventMatchTeams';
import {GetEventDetailsDataEventMatchTeams1} from './model/GetEventDetailsDataEventMatchTeams1';
import {GetEventDetailsDataEventMatchVods} from './model/GetEventDetailsDataEventMatchVods';
import {GetEventDetailsDataEventTournament} from './model/GetEventDetailsDataEventTournament';
import {GetEventList} from './model/GetEventList';
import {GetEventListData} from './model/GetEventListData';
import {GetEventListDataInProgress} from './model/GetEventListDataInProgress';
import {GetEventListDataUnstarted} from './model/GetEventListDataUnstarted';
import {GetEventListDataUnstartedEvents} from './model/GetEventListDataUnstartedEvents';
import {GetEventListDataUnstartedMatch} from './model/GetEventListDataUnstartedMatch';
import {GetEventListDataUnstartedMatchTeams} from './model/GetEventListDataUnstartedMatchTeams';
import {GetLeagues} from './model/GetLeagues';
import {GetLeaguesData} from './model/GetLeaguesData';
import {GetLeaguesDataDisplayPriority} from './model/GetLeaguesDataDisplayPriority';
import {GetLeaguesDataLeagues} from './model/GetLeaguesDataLeagues';
import {GetLeaguesForStandings} from './model/GetLeaguesForStandings';
import {GetLeaguesForStandingsData} from './model/GetLeaguesForStandingsData';
import {GetLeaguesForStandingsDataLeagues} from './model/GetLeaguesForStandingsDataLeagues';
import {GetLeaguesForStandingsDataSeason} from './model/GetLeaguesForStandingsDataSeason';
import {GetLeaguesForStandingsDataSeasonSplits} from './model/GetLeaguesForStandingsDataSeasonSplits';
import {GetLeaguesForStandingsDataTournaments} from './model/GetLeaguesForStandingsDataTournaments';
import {GetLiveDetails} from './model/GetLiveDetails';
import {GetLiveDetailsData} from './model/GetLiveDetailsData';
import {GetSchedule} from './model/GetSchedule';
import {GetScheduleData} from './model/GetScheduleData';
import {GetScheduleDataSchedule} from './model/GetScheduleDataSchedule';
import {GetScheduleDataSchedulePages} from './model/GetScheduleDataSchedulePages';
import {GetStandings} from './model/GetStandings';
import {GetStandingsData} from './model/GetStandingsData';
import {GetStandingsDataCells} from './model/GetStandingsDataCells';
import {GetStandingsDataColumns} from './model/GetStandingsDataColumns';
import {GetStandingsDataMatches} from './model/GetStandingsDataMatches';
import {GetStandingsDataOrigin} from './model/GetStandingsDataOrigin';
import {GetStandingsDataResult} from './model/GetStandingsDataResult';
import {GetStandingsDataSeason} from './model/GetStandingsDataSeason';
import {GetStandingsDataSeasonSplits} from './model/GetStandingsDataSeasonSplits';
import {GetStandingsDataSections} from './model/GetStandingsDataSections';
import {GetStandingsDataStages} from './model/GetStandingsDataStages';
import {GetStandingsDataStandings} from './model/GetStandingsDataStandings';
import {GetStandingsDataTeams} from './model/GetStandingsDataTeams';
import {GetVods} from './model/GetVods';
import {GetVodsData} from './model/GetVodsData';
import {GetVodsDataSchedule} from './model/GetVodsDataSchedule';
import {GetVodsDataScheduleEvents} from './model/GetVodsDataScheduleEvents';
import {GetVodsDataScheduleGames} from './model/GetVodsDataScheduleGames';
import {GetVodsDataScheduleLeague} from './model/GetVodsDataScheduleLeague';
import {GetVodsDataScheduleMatch} from './model/GetVodsDataScheduleMatch';
import {GetVodsDataScheduleMatchStrategy} from './model/GetVodsDataScheduleMatchStrategy';
import {GetVodsDataScheduleMatchTeams} from './model/GetVodsDataScheduleMatchTeams';
import {GetVodsDataScheduleTournament} from './model/GetVodsDataScheduleTournament';
import {GetVodsDataScheduleVods} from './model/GetVodsDataScheduleVods';
import {DefaultApi} from './api/DefaultApi';

/**
* Unofficial_documentation_to_the_ValorantEsports_Api.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var ValorantEsportsOpenApiSpecification = require('index'); // See note below*.
* var xxxSvc = new ValorantEsportsOpenApiSpecification.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new ValorantEsportsOpenApiSpecification.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new ValorantEsportsOpenApiSpecification.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new ValorantEsportsOpenApiSpecification.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The GetEventDetails model constructor.
     * @property {module:model/GetEventDetails}
     */
    GetEventDetails,

    /**
     * The GetEventDetailsData model constructor.
     * @property {module:model/GetEventDetailsData}
     */
    GetEventDetailsData,

    /**
     * The GetEventDetailsDataEvent model constructor.
     * @property {module:model/GetEventDetailsDataEvent}
     */
    GetEventDetailsDataEvent,

    /**
     * The GetEventDetailsDataEventLeague model constructor.
     * @property {module:model/GetEventDetailsDataEventLeague}
     */
    GetEventDetailsDataEventLeague,

    /**
     * The GetEventDetailsDataEventMatch model constructor.
     * @property {module:model/GetEventDetailsDataEventMatch}
     */
    GetEventDetailsDataEventMatch,

    /**
     * The GetEventDetailsDataEventMatchGames model constructor.
     * @property {module:model/GetEventDetailsDataEventMatchGames}
     */
    GetEventDetailsDataEventMatchGames,

    /**
     * The GetEventDetailsDataEventMatchMediaLocale model constructor.
     * @property {module:model/GetEventDetailsDataEventMatchMediaLocale}
     */
    GetEventDetailsDataEventMatchMediaLocale,

    /**
     * The GetEventDetailsDataEventMatchResult model constructor.
     * @property {module:model/GetEventDetailsDataEventMatchResult}
     */
    GetEventDetailsDataEventMatchResult,

    /**
     * The GetEventDetailsDataEventMatchStrategy model constructor.
     * @property {module:model/GetEventDetailsDataEventMatchStrategy}
     */
    GetEventDetailsDataEventMatchStrategy,

    /**
     * The GetEventDetailsDataEventMatchTeams model constructor.
     * @property {module:model/GetEventDetailsDataEventMatchTeams}
     */
    GetEventDetailsDataEventMatchTeams,

    /**
     * The GetEventDetailsDataEventMatchTeams1 model constructor.
     * @property {module:model/GetEventDetailsDataEventMatchTeams1}
     */
    GetEventDetailsDataEventMatchTeams1,

    /**
     * The GetEventDetailsDataEventMatchVods model constructor.
     * @property {module:model/GetEventDetailsDataEventMatchVods}
     */
    GetEventDetailsDataEventMatchVods,

    /**
     * The GetEventDetailsDataEventTournament model constructor.
     * @property {module:model/GetEventDetailsDataEventTournament}
     */
    GetEventDetailsDataEventTournament,

    /**
     * The GetEventList model constructor.
     * @property {module:model/GetEventList}
     */
    GetEventList,

    /**
     * The GetEventListData model constructor.
     * @property {module:model/GetEventListData}
     */
    GetEventListData,

    /**
     * The GetEventListDataInProgress model constructor.
     * @property {module:model/GetEventListDataInProgress}
     */
    GetEventListDataInProgress,

    /**
     * The GetEventListDataUnstarted model constructor.
     * @property {module:model/GetEventListDataUnstarted}
     */
    GetEventListDataUnstarted,

    /**
     * The GetEventListDataUnstartedEvents model constructor.
     * @property {module:model/GetEventListDataUnstartedEvents}
     */
    GetEventListDataUnstartedEvents,

    /**
     * The GetEventListDataUnstartedMatch model constructor.
     * @property {module:model/GetEventListDataUnstartedMatch}
     */
    GetEventListDataUnstartedMatch,

    /**
     * The GetEventListDataUnstartedMatchTeams model constructor.
     * @property {module:model/GetEventListDataUnstartedMatchTeams}
     */
    GetEventListDataUnstartedMatchTeams,

    /**
     * The GetLeagues model constructor.
     * @property {module:model/GetLeagues}
     */
    GetLeagues,

    /**
     * The GetLeaguesData model constructor.
     * @property {module:model/GetLeaguesData}
     */
    GetLeaguesData,

    /**
     * The GetLeaguesDataDisplayPriority model constructor.
     * @property {module:model/GetLeaguesDataDisplayPriority}
     */
    GetLeaguesDataDisplayPriority,

    /**
     * The GetLeaguesDataLeagues model constructor.
     * @property {module:model/GetLeaguesDataLeagues}
     */
    GetLeaguesDataLeagues,

    /**
     * The GetLeaguesForStandings model constructor.
     * @property {module:model/GetLeaguesForStandings}
     */
    GetLeaguesForStandings,

    /**
     * The GetLeaguesForStandingsData model constructor.
     * @property {module:model/GetLeaguesForStandingsData}
     */
    GetLeaguesForStandingsData,

    /**
     * The GetLeaguesForStandingsDataLeagues model constructor.
     * @property {module:model/GetLeaguesForStandingsDataLeagues}
     */
    GetLeaguesForStandingsDataLeagues,

    /**
     * The GetLeaguesForStandingsDataSeason model constructor.
     * @property {module:model/GetLeaguesForStandingsDataSeason}
     */
    GetLeaguesForStandingsDataSeason,

    /**
     * The GetLeaguesForStandingsDataSeasonSplits model constructor.
     * @property {module:model/GetLeaguesForStandingsDataSeasonSplits}
     */
    GetLeaguesForStandingsDataSeasonSplits,

    /**
     * The GetLeaguesForStandingsDataTournaments model constructor.
     * @property {module:model/GetLeaguesForStandingsDataTournaments}
     */
    GetLeaguesForStandingsDataTournaments,

    /**
     * The GetLiveDetails model constructor.
     * @property {module:model/GetLiveDetails}
     */
    GetLiveDetails,

    /**
     * The GetLiveDetailsData model constructor.
     * @property {module:model/GetLiveDetailsData}
     */
    GetLiveDetailsData,

    /**
     * The GetSchedule model constructor.
     * @property {module:model/GetSchedule}
     */
    GetSchedule,

    /**
     * The GetScheduleData model constructor.
     * @property {module:model/GetScheduleData}
     */
    GetScheduleData,

    /**
     * The GetScheduleDataSchedule model constructor.
     * @property {module:model/GetScheduleDataSchedule}
     */
    GetScheduleDataSchedule,

    /**
     * The GetScheduleDataSchedulePages model constructor.
     * @property {module:model/GetScheduleDataSchedulePages}
     */
    GetScheduleDataSchedulePages,

    /**
     * The GetStandings model constructor.
     * @property {module:model/GetStandings}
     */
    GetStandings,

    /**
     * The GetStandingsData model constructor.
     * @property {module:model/GetStandingsData}
     */
    GetStandingsData,

    /**
     * The GetStandingsDataCells model constructor.
     * @property {module:model/GetStandingsDataCells}
     */
    GetStandingsDataCells,

    /**
     * The GetStandingsDataColumns model constructor.
     * @property {module:model/GetStandingsDataColumns}
     */
    GetStandingsDataColumns,

    /**
     * The GetStandingsDataMatches model constructor.
     * @property {module:model/GetStandingsDataMatches}
     */
    GetStandingsDataMatches,

    /**
     * The GetStandingsDataOrigin model constructor.
     * @property {module:model/GetStandingsDataOrigin}
     */
    GetStandingsDataOrigin,

    /**
     * The GetStandingsDataResult model constructor.
     * @property {module:model/GetStandingsDataResult}
     */
    GetStandingsDataResult,

    /**
     * The GetStandingsDataSeason model constructor.
     * @property {module:model/GetStandingsDataSeason}
     */
    GetStandingsDataSeason,

    /**
     * The GetStandingsDataSeasonSplits model constructor.
     * @property {module:model/GetStandingsDataSeasonSplits}
     */
    GetStandingsDataSeasonSplits,

    /**
     * The GetStandingsDataSections model constructor.
     * @property {module:model/GetStandingsDataSections}
     */
    GetStandingsDataSections,

    /**
     * The GetStandingsDataStages model constructor.
     * @property {module:model/GetStandingsDataStages}
     */
    GetStandingsDataStages,

    /**
     * The GetStandingsDataStandings model constructor.
     * @property {module:model/GetStandingsDataStandings}
     */
    GetStandingsDataStandings,

    /**
     * The GetStandingsDataTeams model constructor.
     * @property {module:model/GetStandingsDataTeams}
     */
    GetStandingsDataTeams,

    /**
     * The GetVods model constructor.
     * @property {module:model/GetVods}
     */
    GetVods,

    /**
     * The GetVodsData model constructor.
     * @property {module:model/GetVodsData}
     */
    GetVodsData,

    /**
     * The GetVodsDataSchedule model constructor.
     * @property {module:model/GetVodsDataSchedule}
     */
    GetVodsDataSchedule,

    /**
     * The GetVodsDataScheduleEvents model constructor.
     * @property {module:model/GetVodsDataScheduleEvents}
     */
    GetVodsDataScheduleEvents,

    /**
     * The GetVodsDataScheduleGames model constructor.
     * @property {module:model/GetVodsDataScheduleGames}
     */
    GetVodsDataScheduleGames,

    /**
     * The GetVodsDataScheduleLeague model constructor.
     * @property {module:model/GetVodsDataScheduleLeague}
     */
    GetVodsDataScheduleLeague,

    /**
     * The GetVodsDataScheduleMatch model constructor.
     * @property {module:model/GetVodsDataScheduleMatch}
     */
    GetVodsDataScheduleMatch,

    /**
     * The GetVodsDataScheduleMatchStrategy model constructor.
     * @property {module:model/GetVodsDataScheduleMatchStrategy}
     */
    GetVodsDataScheduleMatchStrategy,

    /**
     * The GetVodsDataScheduleMatchTeams model constructor.
     * @property {module:model/GetVodsDataScheduleMatchTeams}
     */
    GetVodsDataScheduleMatchTeams,

    /**
     * The GetVodsDataScheduleTournament model constructor.
     * @property {module:model/GetVodsDataScheduleTournament}
     */
    GetVodsDataScheduleTournament,

    /**
     * The GetVodsDataScheduleVods model constructor.
     * @property {module:model/GetVodsDataScheduleVods}
     */
    GetVodsDataScheduleVods,

    /**
    * The DefaultApi service constructor.
    * @property {module:api/DefaultApi}
    */
    DefaultApi
};
# ValorantEsportsOpenApiSpecification.DefaultApi

All URIs are relative to *https://esports-api.service.valorantesports.com/persisted/val*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getEventDetails**](DefaultApi.md#getEventDetails) | **GET** /getEventDetails | Get getEventDetails record
[**getEventList**](DefaultApi.md#getEventList) | **GET** /getEventList | Get getEventList record
[**getLeagues**](DefaultApi.md#getLeagues) | **GET** /getLeagues | Get getLeagues record
[**getLeaguesForStandings**](DefaultApi.md#getLeaguesForStandings) | **GET** /getLeaguesForStandings | Get getLeaguesForStandings record
[**getLiveDetails**](DefaultApi.md#getLiveDetails) | **GET** /getLiveDetails | Get getLiveDetails record
[**getSchedule**](DefaultApi.md#getSchedule) | **GET** /getSchedule | Get getSchedule record
[**getStandings**](DefaultApi.md#getStandings) | **GET** /getStandings | Get getStandings record
[**getVods**](DefaultApi.md#getVods) | **GET** /getVods | Get getVods record

<a name="getEventDetails"></a>
# **getEventDetails**
> GetEventDetails getEventDetails(opts)

Get getEventDetails record

### Example
```javascript
import {ValorantEsportsOpenApiSpecification} from 'valorant_esports_open_api_specification';

let apiInstance = new ValorantEsportsOpenApiSpecification.DefaultApi();
let opts = { 
  'hl': "hl_example", // String | hl
  'id': 1.2 // Number | id
};
apiInstance.getEventDetails(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hl** | **String**| hl | [optional] 
 **id** | **Number**| id | [optional] 

### Return type

[**GetEventDetails**](GetEventDetails.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getEventList"></a>
# **getEventList**
> GetEventList getEventList(opts)

Get getEventList record

### Example
```javascript
import {ValorantEsportsOpenApiSpecification} from 'valorant_esports_open_api_specification';

let apiInstance = new ValorantEsportsOpenApiSpecification.DefaultApi();
let opts = { 
  'hl': "hl_example", // String | hl
  'sport': "sport_example", // String | sport
  'leagueId': 1.2 // Number | leagueId
};
apiInstance.getEventList(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hl** | **String**| hl | [optional] 
 **sport** | **String**| sport | [optional] 
 **leagueId** | **Number**| leagueId | [optional] 

### Return type

[**GetEventList**](GetEventList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLeagues"></a>
# **getLeagues**
> GetLeagues getLeagues(opts)

Get getLeagues record

### Example
```javascript
import {ValorantEsportsOpenApiSpecification} from 'valorant_esports_open_api_specification';

let apiInstance = new ValorantEsportsOpenApiSpecification.DefaultApi();
let opts = { 
  'hl': "hl_example", // String | hl
  'sport': "sport_example" // String | sport
};
apiInstance.getLeagues(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hl** | **String**| hl | [optional] 
 **sport** | **String**| sport | [optional] 

### Return type

[**GetLeagues**](GetLeagues.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLeaguesForStandings"></a>
# **getLeaguesForStandings**
> GetLeaguesForStandings getLeaguesForStandings(opts)

Get getLeaguesForStandings record

### Example
```javascript
import {ValorantEsportsOpenApiSpecification} from 'valorant_esports_open_api_specification';

let apiInstance = new ValorantEsportsOpenApiSpecification.DefaultApi();
let opts = { 
  'hl': "hl_example", // String | hl
  'sport': "sport_example" // String | sport
};
apiInstance.getLeaguesForStandings(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hl** | **String**| hl | [optional] 
 **sport** | **String**| sport | [optional] 

### Return type

[**GetLeaguesForStandings**](GetLeaguesForStandings.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLiveDetails"></a>
# **getLiveDetails**
> GetLiveDetails getLiveDetails(opts)

Get getLiveDetails record

### Example
```javascript
import {ValorantEsportsOpenApiSpecification} from 'valorant_esports_open_api_specification';

let apiInstance = new ValorantEsportsOpenApiSpecification.DefaultApi();
let opts = { 
  'hl': "hl_example", // String | hl
  'sport': "sport_example" // String | sport
};
apiInstance.getLiveDetails(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hl** | **String**| hl | [optional] 
 **sport** | **String**| sport | [optional] 

### Return type

[**GetLiveDetails**](GetLiveDetails.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSchedule"></a>
# **getSchedule**
> GetSchedule getSchedule(opts)

Get getSchedule record

### Example
```javascript
import {ValorantEsportsOpenApiSpecification} from 'valorant_esports_open_api_specification';

let apiInstance = new ValorantEsportsOpenApiSpecification.DefaultApi();
let opts = { 
  'hl': "hl_example", // String | hl
  'sport': "sport_example", // String | sport
  'eventState': "eventState_example" // String | eventState
};
apiInstance.getSchedule(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hl** | **String**| hl | [optional] 
 **sport** | **String**| sport | [optional] 
 **eventState** | **String**| eventState | [optional] 

### Return type

[**GetSchedule**](GetSchedule.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getStandings"></a>
# **getStandings**
> GetStandings getStandings(opts)

Get getStandings record

### Example
```javascript
import {ValorantEsportsOpenApiSpecification} from 'valorant_esports_open_api_specification';

let apiInstance = new ValorantEsportsOpenApiSpecification.DefaultApi();
let opts = { 
  'hl': "hl_example", // String | hl
  'sport': "sport_example", // String | sport
  'tournamentId': 1.2 // Number | tournamentId
};
apiInstance.getStandings(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hl** | **String**| hl | [optional] 
 **sport** | **String**| sport | [optional] 
 **tournamentId** | **Number**| tournamentId | [optional] 

### Return type

[**GetStandings**](GetStandings.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getVods"></a>
# **getVods**
> GetVods getVods(opts)

Get getVods record

### Example
```javascript
import {ValorantEsportsOpenApiSpecification} from 'valorant_esports_open_api_specification';

let apiInstance = new ValorantEsportsOpenApiSpecification.DefaultApi();
let opts = { 
  'hl': "hl_example", // String | hl
  'sport': "sport_example", // String | sport
  'tournamentId': 1.2 // Number | tournamentId
};
apiInstance.getVods(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hl** | **String**| hl | [optional] 
 **sport** | **String**| sport | [optional] 
 **tournamentId** | **Number**| tournamentId | [optional] 

### Return type

[**GetVods**](GetVods.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


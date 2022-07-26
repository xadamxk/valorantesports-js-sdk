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
> GetEventDetails getEventDetails(hl, id)

Get getEventDetails record

### Example
```javascript
import {ValorantEsportsOpenApiSpecification} from 'valorant_esports_open_api_specification';
let defaultClient = ValorantEsportsOpenApiSpecification.ApiClient.instance;

// Configure API key authorization: apiKeyAuth
let apiKeyAuth = defaultClient.authentications['apiKeyAuth'];
apiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new ValorantEsportsOpenApiSpecification.DefaultApi();
let hl = "hl_example"; // String | hl
let id = 1.2; // Number | id

apiInstance.getEventDetails(hl, id, (error, data, response) => {
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
 **hl** | **String**| hl | 
 **id** | **Number**| id | 

### Return type

[**GetEventDetails**](GetEventDetails.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getEventList"></a>
# **getEventList**
> GetEventList getEventList(hl, opts)

Get getEventList record

### Example
```javascript
import {ValorantEsportsOpenApiSpecification} from 'valorant_esports_open_api_specification';
let defaultClient = ValorantEsportsOpenApiSpecification.ApiClient.instance;

// Configure API key authorization: apiKeyAuth
let apiKeyAuth = defaultClient.authentications['apiKeyAuth'];
apiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new ValorantEsportsOpenApiSpecification.DefaultApi();
let hl = "hl_example"; // String | hl
let opts = { 
  'sport': "sport_example", // String | sport
  'leagueId': 1.2 // Number | leagueId
};
apiInstance.getEventList(hl, opts, (error, data, response) => {
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
 **hl** | **String**| hl | 
 **sport** | **String**| sport | [optional] 
 **leagueId** | **Number**| leagueId | [optional] 

### Return type

[**GetEventList**](GetEventList.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLeagues"></a>
# **getLeagues**
> GetLeagues getLeagues(hl, opts)

Get getLeagues record

### Example
```javascript
import {ValorantEsportsOpenApiSpecification} from 'valorant_esports_open_api_specification';
let defaultClient = ValorantEsportsOpenApiSpecification.ApiClient.instance;

// Configure API key authorization: apiKeyAuth
let apiKeyAuth = defaultClient.authentications['apiKeyAuth'];
apiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new ValorantEsportsOpenApiSpecification.DefaultApi();
let hl = "hl_example"; // String | hl
let opts = { 
  'sport': "sport_example" // String | sport
};
apiInstance.getLeagues(hl, opts, (error, data, response) => {
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
 **hl** | **String**| hl | 
 **sport** | **String**| sport | [optional] 

### Return type

[**GetLeagues**](GetLeagues.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLeaguesForStandings"></a>
# **getLeaguesForStandings**
> GetLeaguesForStandings getLeaguesForStandings(hl, opts)

Get getLeaguesForStandings record

### Example
```javascript
import {ValorantEsportsOpenApiSpecification} from 'valorant_esports_open_api_specification';
let defaultClient = ValorantEsportsOpenApiSpecification.ApiClient.instance;

// Configure API key authorization: apiKeyAuth
let apiKeyAuth = defaultClient.authentications['apiKeyAuth'];
apiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new ValorantEsportsOpenApiSpecification.DefaultApi();
let hl = "hl_example"; // String | hl
let opts = { 
  'sport': "sport_example" // String | sport
};
apiInstance.getLeaguesForStandings(hl, opts, (error, data, response) => {
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
 **hl** | **String**| hl | 
 **sport** | **String**| sport | [optional] 

### Return type

[**GetLeaguesForStandings**](GetLeaguesForStandings.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLiveDetails"></a>
# **getLiveDetails**
> GetLiveDetails getLiveDetails(hl, opts)

Get getLiveDetails record

### Example
```javascript
import {ValorantEsportsOpenApiSpecification} from 'valorant_esports_open_api_specification';
let defaultClient = ValorantEsportsOpenApiSpecification.ApiClient.instance;

// Configure API key authorization: apiKeyAuth
let apiKeyAuth = defaultClient.authentications['apiKeyAuth'];
apiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new ValorantEsportsOpenApiSpecification.DefaultApi();
let hl = "hl_example"; // String | hl
let opts = { 
  'sport': "sport_example" // String | sport
};
apiInstance.getLiveDetails(hl, opts, (error, data, response) => {
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
 **hl** | **String**| hl | 
 **sport** | **String**| sport | [optional] 

### Return type

[**GetLiveDetails**](GetLiveDetails.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSchedule"></a>
# **getSchedule**
> GetSchedule getSchedule(hl, opts)

Get getSchedule record

### Example
```javascript
import {ValorantEsportsOpenApiSpecification} from 'valorant_esports_open_api_specification';
let defaultClient = ValorantEsportsOpenApiSpecification.ApiClient.instance;

// Configure API key authorization: apiKeyAuth
let apiKeyAuth = defaultClient.authentications['apiKeyAuth'];
apiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new ValorantEsportsOpenApiSpecification.DefaultApi();
let hl = "hl_example"; // String | hl
let opts = { 
  'sport': "sport_example", // String | sport
  'leagueId': 1.2 // Number | leagueId
};
apiInstance.getSchedule(hl, opts, (error, data, response) => {
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
 **hl** | **String**| hl | 
 **sport** | **String**| sport | [optional] 
 **leagueId** | **Number**| leagueId | [optional] 

### Return type

[**GetSchedule**](GetSchedule.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getStandings"></a>
# **getStandings**
> GetStandings getStandings(hl, opts)

Get getStandings record

### Example
```javascript
import {ValorantEsportsOpenApiSpecification} from 'valorant_esports_open_api_specification';
let defaultClient = ValorantEsportsOpenApiSpecification.ApiClient.instance;

// Configure API key authorization: apiKeyAuth
let apiKeyAuth = defaultClient.authentications['apiKeyAuth'];
apiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new ValorantEsportsOpenApiSpecification.DefaultApi();
let hl = "hl_example"; // String | hl
let opts = { 
  'sport': "sport_example", // String | sport
  'tournamentId': 1.2 // Number | tournamentId
};
apiInstance.getStandings(hl, opts, (error, data, response) => {
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
 **hl** | **String**| hl | 
 **sport** | **String**| sport | [optional] 
 **tournamentId** | **Number**| tournamentId | [optional] 

### Return type

[**GetStandings**](GetStandings.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getVods"></a>
# **getVods**
> GetVods getVods(hl, opts)

Get getVods record

### Example
```javascript
import {ValorantEsportsOpenApiSpecification} from 'valorant_esports_open_api_specification';
let defaultClient = ValorantEsportsOpenApiSpecification.ApiClient.instance;

// Configure API key authorization: apiKeyAuth
let apiKeyAuth = defaultClient.authentications['apiKeyAuth'];
apiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new ValorantEsportsOpenApiSpecification.DefaultApi();
let hl = "hl_example"; // String | hl
let opts = { 
  'sport': "sport_example", // String | sport
  'tournamentId': 1.2 // Number | tournamentId
};
apiInstance.getVods(hl, opts, (error, data, response) => {
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
 **hl** | **String**| hl | 
 **sport** | **String**| sport | [optional] 
 **tournamentId** | **Number**| tournamentId | [optional] 

### Return type

[**GetVods**](GetVods.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


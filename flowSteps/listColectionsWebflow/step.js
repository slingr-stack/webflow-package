/****************************************************
 Dependencies
 ****************************************************/

var httpService = dependencies.http;

step.listColectionsWebflow = function (inputs) {
	return endpoint.sites.collections.get();
};
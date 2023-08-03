/****************************************************
 Dependencies
 ****************************************************/

var httpService = dependencies.http;

step.listSitesWebflow = function (inputs) {
	return endpoint.sites.get();
};
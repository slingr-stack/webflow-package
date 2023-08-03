/****************************************************
 Dependencies
 ****************************************************/

var httpService = dependencies.http;

step.createItemWebflow = function (inputs) {

	var inputsLogic = {
		slug: inputs.slug || "",
		name: inputs.name || ""
	};

	var body = {
		fields: {
			slug: inputsLogic.slug,
			name: inputsLogic.name,
			_archived: false,
			_draft: false
		}
	}

	return endpoint.collections.items.post(body)
};
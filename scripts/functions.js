/****************************************************
 Dependencies
 ****************************************************/

var httpReference = dependencies.http;

var httpDependency = {
    get: httpReference.get,
    post: httpReference.post,
    put: httpReference.put,
    patch: httpReference.patch,
    delete: httpReference.delete,
    head: httpReference.head,
    options: httpReference.options
};
var httpService = {};

function handleRequestWithRetry(requestFn, options, callbackData, callbacks) {
    try {
        return requestFn(options, callbackData, callbacks);
    } catch (error) {
        sys.logs.info("[webflow] Handling request "+JSON.stringify(error));
        throw error;
    }
}

function createWrapperFunction(requestFn) {
    return function(options, callbackData, callbacks) {
        return handleRequestWithRetry(requestFn, options, callbackData, callbacks);
    };
}

for (var key in httpDependency) {
    if (typeof httpDependency[key] === 'function') httpService[key] = createWrapperFunction(httpDependency[key]);
}

/****************************************************
 Helpers
 ****************************************************/

exports.sites = {};

exports.sites.publish = {};

exports.sites.domains = {};

exports.sites.collections = {};

exports.collections = {};

exports.collections.items = {};

exports.collection = {};

exports.collection.collections = {};

exports.collection.collections.items = {};

exports.sites.users = {};

exports.sites.users.invite = {};

exports.sites.products = {};

exports.sites.products.skus = {};

exports.sites.orders = {};

exports.sites.order = {};

exports.sites.order.fulfill = {};

exports.sites.order.unfulfill = {};

exports.sites.order.refund = {};

exports.sites.collections.items = {};

exports.sites.collections.items.inventory = {};

exports.sites.webhooks = {};

exports.sites.get = function(siteId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 0:
			url = parse('/sites');
			break;
		case 1:
			url = parse('/sites/:site_id', [siteId]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[webflow] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Webflow(options));
};

exports.sites.publish.post = function(siteId, httpOptions) {
    if (!siteId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId].');
        return;
    }
    var url = parse('/sites/:site_id/publish', [siteId]);
    sys.logs.debug('[webflow] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Webflow(options));
};

exports.sites.domains.get = function(siteId, httpOptions) {
    if (!siteId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId].');
        return;
    }
    var url = parse('/sites/:site_id/domains', [siteId]);
    sys.logs.debug('[webflow] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Webflow(options));
};

exports.sites.collections.get = function(siteId, httpOptions) {
    if (!siteId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId].');
        return;
    }
    var url = parse('/sites/:site_id/collections', [siteId]);
    sys.logs.debug('[webflow] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Webflow(options));
};

exports.collections.get = function(collectionId, httpOptions) {
    if (!collectionId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [collectionId].');
        return;
    }
    var url = parse('/collections/:collection_id', [collectionId]);
    sys.logs.debug('[webflow] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Webflow(options));
};

exports.collections.items.get = function(collectionId, httpOptions) {
    if (!collectionId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [collectionId].');
        return;
    }
    var url = parse('/collections/:collection_id/items', [collectionId]);
    sys.logs.debug('[webflow] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Webflow(options));
};

exports.collections.items.post = function(collectionId, httpOptions) {
    if (!collectionId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [collectionId].');
        return;
    }
    var url = parse('/collections/:collection_id/items', [collectionId]);
    sys.logs.debug('[webflow] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Webflow(options));
};

exports.collections.items.put = function(collectionId, itemId, httpOptions) {
    if (!collectionId || !itemId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [collectionId,itemId].');
        return;
    }
    var url = parse('/collections/:collection_id/items/:item_id', [collectionId, itemId]);
    sys.logs.debug('[webflow] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Webflow(options));
};

exports.collections.items.patch = function(collectionId, itemId, httpOptions) {
    if (!collectionId || !itemId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [collectionId,itemId].');
        return;
    }
    var url = parse('/collections/:collection_id/items/:item_id', [collectionId, itemId]);
    sys.logs.debug('[webflow] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.patch(Webflow(options));
};

exports.collection.collections.items.get = function(collectionId, itemId, httpOptions) {
    if (!collectionId || !itemId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [collectionId,itemId].');
        return;
    }
    var url = parse('/collections/:collection_id/items/:item_id', [collectionId, itemId]);
    sys.logs.debug('[webflow] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Webflow(options));
};

exports.collection.collections.items.delete = function(collectionId, itemId, httpOptions) {
    if (!collectionId || !itemId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [collectionId,itemId].');
        return;
    }
    var url = parse('/collections/:collection_id/items/:item_id', [collectionId, itemId]);
    sys.logs.debug('[webflow] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Webflow(options));
};

exports.sites.users.get = function(siteId, userId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/sites/:site_id/users', [siteId]);
			break;
		case 2:
			url = parse('/sites/:site_id/users/:user_id', [siteId, userId]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[webflow] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Webflow(options));
};

exports.sites.users.patch = function(siteId, userId, httpOptions) {
    if (!siteId || !userId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,userId].');
        return;
    }
    var url = parse('/sites/:site_id/users/:user_id', [siteId, userId]);
    sys.logs.debug('[webflow] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.patch(Webflow(options));
};

exports.sites.users.delete = function(siteId, userId, httpOptions) {
    if (!siteId || !userId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,userId].');
        return;
    }
    var url = parse('/sites/:site_id/users/:user_id', [siteId, userId]);
    sys.logs.debug('[webflow] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Webflow(options));
};

exports.sites.users.invite.post = function(siteId, httpOptions) {
    if (!siteId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId].');
        return;
    }
    var url = parse('/sites/:site_id/users/invite', [siteId]);
    sys.logs.debug('[webflow] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Webflow(options));
};

exports.sites.products.get = function(siteId, httpOptions) {
    if (!siteId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId].');
        return;
    }
    var url = parse('/sites/:site_id/products', [siteId]);
    sys.logs.debug('[webflow] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Webflow(options));
};

exports.sites.products.post = function(siteId, httpOptions) {
    if (!siteId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId].');
        return;
    }
    var url = parse('/sites/:site_id/products', [siteId]);
    sys.logs.debug('[webflow] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Webflow(options));
};

exports.sites.products.patch = function(siteId, httpOptions) {
    if (!siteId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId].');
        return;
    }
    var url = parse('/sites/:site_id/products', [siteId]);
    sys.logs.debug('[webflow] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.patch(Webflow(options));
};

exports.sites.products.skus.post = function(siteId, productId, httpOptions) {
    if (!siteId || !productId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,productId].');
        return;
    }
    var url = parse('/sites/:site_id/products/:product_id/skus', [siteId, productId]);
    sys.logs.debug('[webflow] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Webflow(options));
};

exports.sites.products.skus.patch = function(siteId, productId, httpOptions) {
    if (!siteId || !productId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,productId].');
        return;
    }
    var url = parse('/sites/:site_id/products/:product_id/skus', [siteId, productId]);
    sys.logs.debug('[webflow] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.patch(Webflow(options));
};

exports.sites.orders.get = function(siteId, httpOptions) {
    if (!siteId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId].');
        return;
    }
    var url = parse('/sites/:site_id/orders', [siteId]);
    sys.logs.debug('[webflow] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Webflow(options));
};

exports.sites.order.get = function(siteId, orderId, httpOptions) {
    if (!siteId || !orderId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,orderId].');
        return;
    }
    var url = parse('/sites/:site_id/order/:order_id', [siteId, orderId]);
    sys.logs.debug('[webflow] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Webflow(options));
};

exports.sites.order.patch = function(siteId, orderId, httpOptions) {
    if (!siteId || !orderId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,orderId].');
        return;
    }
    var url = parse('/sites/:site_id/order/:order_id', [siteId, orderId]);
    sys.logs.debug('[webflow] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.patch(Webflow(options));
};

exports.sites.order.fulfill.post = function(siteId, orderId, httpOptions) {
    if (!siteId || !orderId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,orderId].');
        return;
    }
    var url = parse('/sites/:site_id/order/:order_id/fulfill', [siteId, orderId]);
    sys.logs.debug('[webflow] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Webflow(options));
};

exports.sites.order.unfulfill.post = function(siteId, orderId, httpOptions) {
    if (!siteId || !orderId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,orderId].');
        return;
    }
    var url = parse('/sites/:site_id/order/:order_id/unfulfill', [siteId, orderId]);
    sys.logs.debug('[webflow] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Webflow(options));
};

exports.sites.order.refund.post = function(siteId, orderId, httpOptions) {
    if (!siteId || !orderId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,orderId].');
        return;
    }
    var url = parse('/sites/:site_id/order/:order_id/refund', [siteId, orderId]);
    sys.logs.debug('[webflow] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Webflow(options));
};

exports.sites.collections.items.inventory.get = function(siteId, collectionId, itemId, httpOptions) {
    if (!siteId || !collectionId || !itemId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,collectionId,itemId].');
        return;
    }
    var url = parse('/sites/:site_id/collections/:collection_id/items/:item_id/inventory', [siteId, collectionId, itemId]);
    sys.logs.debug('[webflow] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Webflow(options));
};

exports.sites.collections.items.inventory.patch = function(siteId, collectionId, itemId, httpOptions) {
    if (!siteId || !collectionId || !itemId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,collectionId,itemId].');
        return;
    }
    var url = parse('/sites/:site_id/collections/:collection_id/items/:item_id/inventory', [siteId, collectionId, itemId]);
    sys.logs.debug('[webflow] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.patch(Webflow(options));
};

exports.sites.webhooks.get = function(siteId, webhookId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/sites/:site_id/webhooks', [siteId]);
			break;
		case 2:
			url = parse('/sites/:site_id/webhooks/:webhook_id', [siteId, webhookId]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[webflow] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(Webflow(options));
};

exports.sites.webhooks.post = function(siteId, httpOptions) {
    if (!siteId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId].');
        return;
    }
    var url = parse('/sites/:site_id/webhooks', [siteId]);
    sys.logs.debug('[webflow] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Webflow(options));
};

exports.sites.webhooks.delete = function(siteId, webhookId, httpOptions) {
    if (!siteId || !webhookId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,webhookId].');
        return;
    }
    var url = parse('/sites/:site_id/webhooks/:webhook_id', [siteId, webhookId]);
    sys.logs.debug('[webflow] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Webflow(options));
};

/****************************************************
 Public API - Generic Functions
 ****************************************************/

exports.get = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(Webflow(options), callbackData, callbacks);
};

exports.post = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(Webflow(options), callbackData, callbacks);
};

exports.put = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(Webflow(options), callbackData, callbacks);
};

exports.patch = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return httpService.patch(Webflow(options), callbackData, callbacks);
};

exports.delete = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(Webflow(options), callbackData, callbacks);
};

exports.head = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return httpService.head(Webflow(options), callbackData, callbacks);
};

exports.options = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return httpService.options(Webflow(options), callbackData, callbacks);
};

exports.utils = {};

exports.utils.parseTimestamp = function(dateString) {
    if (!dateString) {
        return null;
    }
    var dt = dateString.split(/[: T\-]/).map(parseFloat);
    return new Date(dt[0], dt[1] - 1, dt[2], dt[3] || 0, dt[4] || 0, dt[5] || 0, 0);
};

exports.utils.formatTimestamp = function(date) {
    if (!date) {
        return null;
    }
    var pad = function(number) {
        var r = String(number);
        if ( r.length === 1 ) {
            r = '0' + r;
        }
        return r;
    };
    return date.getUTCFullYear()
        + '-' + pad( date.getUTCMonth() + 1 )
        + '-' + pad( date.getUTCDate() )
        + 'T' + pad( date.getUTCHours() )
        + ':' + pad( date.getUTCMinutes() )
        + ':' + pad( date.getUTCSeconds() )
        + '.' + String( (date.getUTCMilliseconds()/1000).toFixed(3) ).slice( 2, 5 )
        + 'Z';
};

exports.utils.fromDateToTimestamp = function(params) {
    if (!!params) {
        return {timestamp: new Date(params).getTime()};
    }
    return null;
};

exports.utils.fromMillisToDate = function(params) {
    if (!!params) {
        var sdf = new Intl.DateTimeFormat('en-US', {
            year: 'numeric', month: '2-digit', day: '2-digit',
            hour: '2-digit', minute: '2-digit', second: '2-digit',
            timeZone: 'UTC'
        });
        return {date: sdf.format(new Date(parseInt(params)))};
    }
    return null;
};

exports.utils.getConfiguration = function (property) {
    sys.logs.debug('[webflow] Get property: '+property);
    return config.get(property);
};

/****************************************************
 Private helpers
 ****************************************************/

var concatQuery = function (url, key, value) {
    return url + ((!url || url.indexOf('?') < 0) ? '?' : '&') + key + "=" + value;
}

var checkHttpOptions = function (url, options) {
    options = options || {};
    if (!!url) {
        if (isObject(url)) {
            // take the 'url' parameter as the options
            options = url || {};
        } else {
            if (!!options.path || !!options.params || !!options.body) {
                // options contain the http package format
                options.path = url;
            } else {
                // create html package
                options = {
                    path: url,
                    body: options
                }
            }
        }
    }
    return options;
}

var isObject = function (obj) {
    return !!obj && stringType(obj) === '[object Object]'
}

var stringType = Function.prototype.call.bind(Object.prototype.toString)

var parse = function (str) {
    try {
        if (arguments.length > 1) {
            var args = arguments[1], i = 0;
            return str.replace(/(:(?:\w|-)+)/g, () => {
                if (typeof (args[i]) != 'string') throw new Error('Invalid type of argument: [' + args[i] + '] for url [' + str + '].');
                return args[i++];
            });
        } else {
            if (str) {
                return str;
            }
            throw new Error('No arguments nor url were received when calling the helper. Please check it\'s definition.');
        }
    } catch (err) {
        sys.logs.error('Some unexpected error happened during the parse of the url for this helper.')
        throw err;
    }
}

/****************************************************
 Constants
 ****************************************************/



/****************************************************
 Configurator
 ****************************************************/

var Webflow = function (options) {
    options = options || {};
    options= setApiUri(options);
    options= setRequestHeaders(options);
    return options;
}

/****************************************************
 Private API
 ****************************************************/

function setApiUri(options) {
    var API_URL = config.get("WEBFLOW_API_BASE_URL"); // TODO: Set the base url for the api in the package.json (Remove this comment after set the url)
    var url = options.path || "";
    options.url = API_URL + url;
    sys.logs.debug('[webflow] Set url: ' + options.path + "->" + options.url);
    return options;
}

function setRequestHeaders(options) {
    var headers = options.headers || {};
    sys.logs.debug('[webflow] Set header Bearer: '+ config.get("accessToken"));
    headers = mergeJSON(headers, {"Content-Type": "application/json"});
    headers = mergeJSON(headers, {"Authorization": "Bearer " + config.get("accessToken")});
    options.headers = headers;
    return options;
}

function mergeJSON (json1, json2) {
    const result = {};
    var key;
    for (key in json1) {
        if(json1.hasOwnProperty(key)) result[key] = json1[key];
    }
    for (key in json2) {
        if(json2.hasOwnProperty(key)) result[key] = json2[key];
    }
    return result;
}

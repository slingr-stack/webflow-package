/****************************************************
 Listeners
 ****************************************************/

listeners.defaultWebhookWebflow = {
    label: 'Catch HTTP webflow events',
    type: 'service',
    options: {
        service: 'http',
        event: 'webhook',
        matching: {
            path: '/webflow',
        }
    },
    callback: function(event) {
        sys.logs.info('Received Webflow webhook. Processing and triggering a package event.');
        var body = JSON.stringify(event.data.body);
        var params = event.data.parameters;
        if(true) {
            sys.logs.info('Valid webhook received. Triggering event.');
            sys.events.triggerEvent('webflow:webhook', {
                body: body,
                params: params
            });
            return "ok";
        }
        else throw new Error("Invalid webhook");
    }
};

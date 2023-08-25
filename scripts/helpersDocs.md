# Javascript API

The Javascript API of the webflow package has three pieces:

- **HTTP requests**: These allow making regular HTTP requests.
- **Shortcuts**: These are helpers to make HTTP request to the API in a more convenient way.
- **Additional Helpers**: These helpers provide additional features that facilitate or improves the package usage in SLINGR.

## HTTP requests
You can make `GET`,`POST`,`PUT`,`PATCH`,`DELETE` requests to the [webflow API](API_URL_HERE) like this:
```javascript
var response = pkg.webflow.functions.get('/sites/:site_id/products')
var response = pkg.webflow.functions.post('/sites/:site_id/order/:order_id/fulfill', body)
var response = pkg.webflow.functions.post('/sites/:site_id/order/:order_id/fulfill')
var response = pkg.webflow.functions.put('/collections/:collection_id/items/:item_id', body)
var response = pkg.webflow.functions.put('/collections/:collection_id/items/:item_id')
var response = pkg.webflow.functions.patch('/sites/:site_id/collections/:collection_id/items/:item_id/inventory', body)
var response = pkg.webflow.functions.patch('/sites/:site_id/collections/:collection_id/items/:item_id/inventory')
var response = pkg.webflow.functions.delete('/collections/:collection_id/items/:item_id')
```

Please take a look at the documentation of the [HTTP service](https://github.com/slingr-stack/http-service)
for more information about generic requests.

## Shortcuts

Instead of having to use the generic HTTP methods, you can (and should) make use of the helpers provided in the package:
<details>
    <summary>Click here to see all the helpers</summary>

<br>

* API URL: '/collections/:collection_id'
* HTTP Method: 'GET'
* More info: https://developers.webflow.com/reference/get-collection
```javascript
pkg.webflow.functions.collections.get(collectionId)
```
---
* API URL: '/collections/:collection_id/items'
* HTTP Method: 'GET'
* More info: https://developers.webflow.com/reference/get-items
```javascript
pkg.webflow.functions.collections.items.get(collectionId)
```
---
* API URL: '/collections/:collection_id/items'
* HTTP Method: 'POST'
* More info: https://developers.webflow.com/reference/create-item
```javascript
pkg.webflow.functions.collections.items.post(collectionId, body)
```
---
* API URL: '/collections/:collection_id/items/:item_id'
* HTTP Method: 'GET'
* More info: https://developers.webflow.com/reference/get-item
```javascript
pkg.webflow.functions.collection.collections.items.get(collectionId, itemId)
```
---
* API URL: '/collections/:collection_id/items/:item_id'
* HTTP Method: 'PUT'
* More info: https://developers.webflow.com/reference/update-item
```javascript
pkg.webflow.functions.collections.items.put(collectionId, itemId, body)
```
---
* API URL: '/collections/:collection_id/items/:item_id'
* HTTP Method: 'PATCH'
* More info: https://developers.webflow.com/reference/patch-item
```javascript
pkg.webflow.functions.collections.items.patch(collectionId, itemId, body)
```
---
* API URL: '/collections/:collection_id/items/:item_id'
* HTTP Method: 'DELETE'
* More info: https://developers.webflow.com/reference/remove-item
```javascript
pkg.webflow.functions.collection.collections.items.delete(collectionId, itemId)
```
---
* API URL: '/sites'
* HTTP Method: 'GET'
* More info: https://developers.webflow.com/reference/list-sites
```javascript
pkg.webflow.functions.sites.get()
```
---
* API URL: '/sites/:site_id'
* HTTP Method: 'GET'
* More info: https://developers.webflow.com/reference/list-sites
```javascript
pkg.webflow.functions.sites.get()
```
---
* API URL: '/sites/:site_id/collections'
* HTTP Method: 'GET'
* More info: https://developers.webflow.com/reference/list-collections
```javascript
pkg.webflow.functions.sites.collections.get(siteId)
```
---
* API URL: '/sites/:site_id/domains'
* HTTP Method: 'GET'
* More info: https://developers.webflow.com/reference/domains
```javascript
pkg.webflow.functions.sites.domains.get(siteId)
```
---
* API URL: '/sites/:site_id/orders'
* HTTP Method: 'GET'
* More info: https://developers.webflow.com/reference/list-orders
```javascript
pkg.webflow.functions.sites.orders.get(siteId)
```
---
* API URL: '/sites/:site_id/products'
* HTTP Method: 'GET'
* More info: https://developers.webflow.com/reference/list-products
```javascript
pkg.webflow.functions.sites.products.get(siteId)
```
---
* API URL: '/sites/:site_id/products'
* HTTP Method: 'POST'
* More info: https://developers.webflow.com/reference/create-product
```javascript
pkg.webflow.functions.sites.products.post(siteId, body)
```
---
* API URL: '/sites/:site_id/products'
* HTTP Method: 'PATCH'
* More info: https://developers.webflow.com/reference/update-product
```javascript
pkg.webflow.functions.sites.products.patch(siteId, body)
```
---
* API URL: '/sites/:site_id/publish'
* HTTP Method: 'POST'
* More info: https://developers.webflow.com/reference/publish-site
```javascript
pkg.webflow.functions.sites.publish.post(siteId, body)
```
---
* API URL: '/sites/:site_id/users'
* HTTP Method: 'GET'
* More info: https://developers.webflow.com/reference/list-users
```javascript
pkg.webflow.functions.sites.users.get()
```
---
* API URL: '/sites/:site_id/webhooks'
* HTTP Method: 'GET'
* More info: https://developers.webflow.com/reference/list-webhooks
```javascript
pkg.webflow.functions.sites.webhooks.get()
```
---
* API URL: '/sites/:site_id/webhooks'
* HTTP Method: 'POST'
* More info: https://developers.webflow.com/reference/create-webhook
```javascript
pkg.webflow.functions.sites.webhooks.post(siteId, body)
```
---
* API URL: '/sites/:site_id/order/:order_id'
* HTTP Method: 'GET'
* More info: https://developers.webflow.com/reference/get-order
```javascript
pkg.webflow.functions.sites.order.get(siteId, orderId)
```
---
* API URL: '/sites/:site_id/order/:order_id'
* HTTP Method: 'PATCH'
* More info: https://developers.webflow.com/reference/update-order
```javascript
pkg.webflow.functions.sites.order.patch(siteId, orderId, body)
```
---
* API URL: '/sites/:site_id/users/:user_id'
* HTTP Method: 'GET'
* More info: https://developers.webflow.com/reference/list-users
```javascript
pkg.webflow.functions.sites.users.get(siteId)
```
---
* API URL: '/sites/:site_id/users/:user_id'
* HTTP Method: 'PATCH'
* More info: https://developers.webflow.com/reference/update-user
```javascript
pkg.webflow.functions.sites.users.patch(siteId, userId, body)
```
---
* API URL: '/sites/:site_id/users/:user_id'
* HTTP Method: 'DELETE'
* More info: https://developers.webflow.com/reference/delete-user
```javascript
pkg.webflow.functions.sites.users.delete(siteId, userId)
```
---
* API URL: '/sites/:site_id/users/invite'
* HTTP Method: 'POST'
* More info: https://developers.webflow.com/reference/invite-user
```javascript
pkg.webflow.functions.sites.users.invite.post(siteId, body)
```
---
* API URL: '/sites/:site_id/webhooks/:webhook_id'
* HTTP Method: 'GET'
* More info: https://developers.webflow.com/reference/list-webhooks
```javascript
pkg.webflow.functions.sites.webhooks.get(siteId)
```
---
* API URL: '/sites/:site_id/webhooks/:webhook_id'
* HTTP Method: 'DELETE'
* More info: https://developers.webflow.com/reference/remove-webhook
```javascript
pkg.webflow.functions.sites.webhooks.delete(siteId, webhookId)
```
---
* API URL: '/sites/:site_id/order/:order_id/fulfill'
* HTTP Method: 'POST'
* More info: https://developers.webflow.com/reference/fullfit-order
```javascript
pkg.webflow.functions.sites.order.fulfill.post(siteId, orderId, body)
```
---
* API URL: '/sites/:site_id/order/:order_id/refund'
* HTTP Method: 'POST'
* More info: https://developers.webflow.com/reference/refund-order
```javascript
pkg.webflow.functions.sites.order.refund.post(siteId, orderId, body)
```
---
* API URL: '/sites/:site_id/order/:order_id/unfulfill'
* HTTP Method: 'POST'
* More info: https://developers.webflow.com/reference/unfullfit-order
```javascript
pkg.webflow.functions.sites.order.unfulfill.post(siteId, orderId, body)
```
---
* API URL: '/sites/:site_id/products/:product_id/skus'
* HTTP Method: 'POST'
* More info: https://developers.webflow.com/reference/create-sku
```javascript
pkg.webflow.functions.sites.products.skus.post(siteId, productId, body)
```
---
* API URL: '/sites/:site_id/products/:product_id/skus'
* HTTP Method: 'PATCH'
* More info: https://developers.webflow.com/reference/update-sku
```javascript
pkg.webflow.functions.sites.products.skus.patch(siteId, productId, body)
```
---
* API URL: '/sites/:site_id/collections/:collection_id/items/:item_id/inventory'
* HTTP Method: 'GET'
* More info: https://developers.webflow.com/reference/list-inventory
```javascript
pkg.webflow.functions.sites.collections.items.inventory.get(siteId, collectionId, itemId)
```
---
* API URL: '/sites/:site_id/collections/:collection_id/items/:item_id/inventory'
* HTTP Method: 'PATCH'
* More info: https://developers.webflow.com/reference/update-inventory
```javascript
pkg.webflow.functions.sites.collections.items.inventory.patch(siteId, collectionId, itemId, body)
```
---

</details>


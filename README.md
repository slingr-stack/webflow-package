<table class="table" style="margin-top: 10px">
    <thead>
    <tr>
        <th>Title</th>
        <th>Last Updated</th>
        <th>Summary</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>Webflow package</td>
        <td>November 13, 2023</td>
        <td>Detailed description of the API of the Webflow package.</td>
    </tr>
    </tbody>
</table>

# Overview

This package allows direct access to the [Webflow CMS API](https://developers.webflow.com/),
however, it provides shortcuts and helpers for most common use cases.

Some features available in this package are:

- Authentication and authorization
- Direct access to the CMS API
- Helpers for CMS API methods

## Configuration

To create a Webflow package in your Slingr app first you must have a Webflow account. 
Go to the dashboard configuration: "integrations" and create an application filling the fields with the correct information 
(the redirect URI will be shown in the package configuration create view and the homepage is the runtime of your app). 
Once you created the application you will be able to see the Client Id and Client Secret on the application details section.
You should fill the package fields with this. Then, you will need to go through an Oauth Authorization process with the button "Connect to Webflow", 
this will give the app an authorization code which is necessary to finally get the access token when the package is deployed. 

### Redirect URI

This URL has to be configured in the app created in the Webflow dashboard.

### Client ID

This value comes from the app created in the Webflow dashboard.

### Client secret

This value comes from the app created in the Webflow dashboard.

### Connect To Webflow

This button will trigger the Oauth connection process and will fill the fields: "Authorization Code".

### Authorization Code

This is used for obtaining the Authorization Token. This field will be automatically filled when doing the Oauth connection with the "Connect to webflow" button

### Webhook Url

This URL is the one that should be used when creating new webhooks.

# Javascript API

The Javascript API of the webflow package has two pieces:

- **HTTP requests**
- **Flow steps**

## HTTP requests
You can make `GET`,`POST`,`PUT`,`PATCH`,`DELETE` requests to the [webflow API](https://developers.webflow.com/reference) like this:
```javascript
var response = pkg.webflow.api.get('/sites/:site_id/products')
var response = pkg.webflow.api.post('/sites/:site_id/order/:order_id/fulfill', body)
var response = pkg.webflow.api.post('/sites/:site_id/order/:order_id/fulfill')
var response = pkg.webflow.api.put('/collections/:collection_id/items/:item_id', body)
var response = pkg.webflow.api.put('/collections/:collection_id/items/:item_id')
var response = pkg.webflow.api.patch('/sites/:site_id/collections/:collection_id/items/:item_id/inventory', body)
var response = pkg.webflow.api.patch('/sites/:site_id/collections/:collection_id/items/:item_id/inventory')
var response = pkg.webflow.api.delete('/collections/:collection_id/items/:item_id')
```

Please take a look at the documentation of the [HTTP service](https://github.com/slingr-stack/http-service)
for more information about generic requests.

## Flow Step

As an alternative option to using scripts, you can make use of Flows and Flow Steps specifically created for the package:
<details>
    <summary>Click here to see the Flow Steps</summary>

<br>

### Generic Flow Step

Generic flow step for full use of the entire package and its services.

<h3>Inputs</h3>

<table>
    <thead>
    <tr>
        <th>Label</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default</th>
        <th>Visibility</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>URL (Method)</td>
        <td>choice</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            This is the http method to be used against the package. <br>
            Possible values are: <br>
            <i><strong>GET,POST,PUT,PATCH,DELETE</strong></i>
        </td>
    </tr>
    <tr>
        <td>URL (Path)</td>
        <td>choice</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            The url to which this package will send the request. This is the exact service to which the http request will be made. <br>
            Possible values are: <br>
            <i><strong>/sites<br>/sites/{site_id}<br>/sites/{site_id}/domains<br>/sites/{site_id}/collections<br>/collections/{collection_id}<br>/collections/{collection_id}/items<br>/collections/{collection_id}/items/{item_id}<br>/sites/{site_id}/users<br>/sites/{site_id}/users/{user_id}<br>/sites/{site_id}/products<br>/sites/{site_id}/orders<br>/sites/{site_id}/order/{order_id}<br>/sites/{site_id}/collections/{collection_id}/items/{item_id}/inventory<br>/sites/{site_id}/webhooks<br>/sites/{site_id}/webhooks/{webhook_id}<br>/sites/{site_id}/publish<br>/collections/{collection_id}/items<br>/sites/{site_id}/users/invite<br>/sites/{site_id}/products<br>/sites/{site_id}/products/{product_id}/skus<br>/sites/{site_id}/order/{order_id}/fulfill<br>/sites/{site_id}/order/{order_id}/unfulfill<br>/sites/{site_id}/order/{order_id}/refund<br>/sites/{site_id}/webhooks<br>/collections/{collection_id}/items/{item_id}<br>/collections/{collection_id}/items/{item_id}<br>/sites/{site_id}/users/{user_id}<br>/sites/{site_id}/products<br>/sites/{site_id}/products/{product_id}/skus<br>/sites/{site_id}/order/{order_id}<br>/sites/{site_id}/collections/{collection_id}/items/{item_id}/inventory<br>/collections/{collection_id}/items/{item_id}<br>/sites/{site_id}/users/{user_id}<br>/sites/{site_id}/webhooks/{webhook_id}<br></strong></i>
        </td>
    </tr>
    <tr>
        <td>Headers</td>
        <td>keyValue</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Used when you want to have a custom http header for the request.
        </td>
    </tr>
    <tr>
        <td>Query Params</td>
        <td>keyValue</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Used when you want to have a custom query params for the http call.
        </td>
    </tr>
    <tr>
        <td>Body</td>
        <td>json</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            A payload of data can be sent to the server in the body of the request.
        </td>
    </tr>
    <tr>
        <td>Override Settings</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td>Always</td>
        <td></td>
    </tr>
    <tr>
        <td>Follow Redirect</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>Indicates that the resource has to be downloaded into a file instead of returning it in the response.</td>
    </tr>
    <tr>
        <td>Download</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>If true the method won't return until the file has been downloaded, and it will return all the information of the file.</td>
    </tr>
    <tr>
        <td>File name</td>
        <td>text</td>
        <td>no</td>
        <td></td>
        <td> overrideSettings </td>
        <td>If provided, the file will be stored with this name. If empty the file name will be calculated from the URL.</td>
    </tr>
    <tr>
        <td>Full response</td>
        <td> boolean </td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>Include extended information about response</td>
    </tr>
    <tr>
        <td>Connection Timeout</td>
        <td> number </td>
        <td>no</td>
        <td> 5000 </td>
        <td> overrideSettings </td>
        <td>Connect a timeout interval, in milliseconds (0 = infinity).</td>
    </tr>
    <tr>
        <td>Read Timeout</td>
        <td> number </td>
        <td>no</td>
        <td> 60000 </td>
        <td> overrideSettings </td>
        <td>Read a timeout interval, in milliseconds (0 = infinity).</td>
    </tr>
    </tbody>
</table>

<h3>Outputs</h3>

<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>response</td>
        <td>object</td>
        <td>
            Object resulting from the response to the package call.
        </td>
    </tr>
    </tbody>
</table>


</details>

For more information about how shortcuts or flow steps work, and how they are generated, take a look at the [slingr-helpgen tool](https://github.com/slingr-stack/slingr-helpgen).

## Additional Flow Step


<details>
    <summary>Click here to see the Customs Flow Steps</summary>

<br>



### List All Sites

Lists all sites in the account.

<h3>Outputs</h3>

<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>response</td>
        <td>object</td>
        <td>
            Object resulting from the response to the package call.
        </td>
    </tr>
    </tbody>
</table>


### List All Collections

Lists all collections in one site of the account.

<h3>Outputs</h3>

<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>response</td>
        <td>object</td>
        <td>
            Object resulting from the response to the package call.
        </td>
    </tr>
    </tbody>
</table>


### Create an Item

Creates an item in a collection of a site.

<h3>Inputs</h3>

<table>
    <thead>
    <tr>
        <th>Label</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default</th>
        <th>Visibility</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>Slug</td>
        <td> string </td>
        <td> yes </td>
        <td> - </td>
        <td> Always </td>
        <td>Slug of the item.</td>
    </tr>
    <tr>
        <td>Name</td>
        <td> string </td>
        <td> yes </td>
        <td> - </td>
        <td> Always </td>
        <td>Name for the Item.</td>
    </tr>
    </tbody>
</table>

<h3>Outputs</h3>

<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>response</td>
        <td>object</td>
        <td>
            Object resulting from the response to the package call.
        </td>
    </tr>
    </tbody>
</table>


</details>

## Dependencies
* HTTP Service (Latest Version)

# About SLINGR

SLINGR is a low-code rapid application development platform that accelerates development, with robust architecture for integrations and executing custom workflows and automation.

[More info about SLINGR](https://slingr.io)

# License

This package is licensed under the Apache License 2.0. See the `LICENSE` file for more details.


// PlainText

var collectionmodel = {
    "name": "",
    "slug": "",
    "collection-id": "",
    "item-id": "",
    "created-on": "",
    "updated-on": "",
    "published-on": "",
    "product-sub-category": "",
    "content-type": "",
    "country": "",
    "contributors": "",
    "cover-image": "",
    "title": "",
    "publish-date": "",
    "isbn": "",
    "description": "",
    "permissions": "",
    "sample-images": "",
    "featured": "",
    "product-url": "",
    "product-file": "",
    "access-form": "",
}

var getFieldQuery = function(fieldName) {
    return `{{wf {&quot;path&quot;:&quot;${fieldName}&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}`;
};

var getDataFromModel = function (collectionModel) {
    let data = {};
    Object.keys(collectionModel).map(field => {
        data[field] = getFieldQuery(field)
    })
    console.log(data);
};

getDataFromModel(collectionmodel);
    data[country]["products"] = data[country]["products"] || []; 
    
    var slug = "/products/" + "{{wf {&quot;path&quot;:&quot;slug&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}";
    var name = "{{wf {&quot;path&quot;:&quot;name&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}";
    var lastItemIndex = data[country]["products"].length - 1;
    
    data[country].products[lastItemIndex]['ContentTypes'] = data[country].products[lastItemIndex]['ContentTypes'] ||[]; 
    data[country].products[lastItemIndex]['ContentTypes'].push("{{wf {&quot;path&quot;:&quot;name&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}");
    data[country].products[lastItemIndex]['ContentTypesStr'] = data[country].products[lastItemIndex]['ContentTypes'].join(', ');
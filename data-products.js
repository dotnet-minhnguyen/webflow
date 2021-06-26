    data[country]["products"] = data[country]["products"] || []; //creates new data-collection if not exists
    
    var startTime = "{{wf {&quot;path&quot;:&quot;publish-date&quot;,&quot;transformers&quot;:[{&quot;name&quot;:&quot;date&quot;,&quot;arguments&quot;:[&quot;YYYY-MM-DDTHH:mm:ssZ&quot;]\}],&quot;type&quot;:&quot;Date&quot;\} }}";
    var upcomingEvent = new Date(startTime) >= new Date().setDate(new Date().getDate()+1);
    var slug = "/product/" + "{{wf {&quot;path&quot;:&quot;slug&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}";
    var type_close_registration = "{{wf {&quot;path&quot;:&quot;close-registration&quot;,&quot;type&quot;:&quot;Bool&quot;\} }}" == "true"
    var content_types = "";
    var subCategory = {
    	name: "{{wf {&quot;path&quot;:&quot;product-sub-category:name&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}",
      title: "{{wf {&quot;path&quot;:&quot;product-sub-category:slug&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}",
      slug: "{{wf {&quot;path&quot;:&quot;product-sub-category:title&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}",
    };
    
    
    data[country].products.push({
      slug:slug,
      start_time: new Date(startTime),
      upcomming: upcomingEvent,
      close_registration: type_close_registration,
      content_types: content_types,
      subCategory: subCategory,
    })
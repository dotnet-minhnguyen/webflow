

var getTemplateItemByParrentClass = function (parentClass) {

    let templates = $(`${parentClass} [data-template]`);
    if (templates.length == 0) {
        templates = $(`${parentClass}[data-template]`);
    }
    return templates;

};

var getTemplateItemByAttribute = function (attributeId) {
    let className = '[' + attributeId + ']'
    let templates = $(className);
    return templates;

};

var getElementsDataByTemplate = function ($template) {

    let elements = $($template).find('[data-field]');
    return elements;

};


var updateLiveNowItemBySources = function (sources, containerClass = '.live-now-container') {
    let template = getTemplateItemByParrentClass(containerClass);
    let elements = getElementsDataByTemplate(template);
    let liveEvent = (sources || []).find(event => event.liveNow);

    if (liveEvent) {
        let title = liveEvent.name;
        let slug = liveEvent.slug;

        $(elements).each(function () {
            let key = $(this).attr('data-field');

            //title
            if (key == 'title') $(this).text(liveEvent.name);
            //slug
            if (key == 'slug') $(this).attr('href', liveEvent.slug);
            //registration
            if (key == 'registration') {
                if (liveEvent.type_close_registration) {
                    $(this).addClass("hidden");
                } else {
                    $(this).text(liveEvent.registrationLabel);
                    $(this).attr('href', liveEvent.slug);
                }
            }
        });

    } else {//remove event
        $(containerClass).remove()
    }

};

// update menu left slug
var updateMenuSlugs = function () {
    let template = getTemplateItemByParrentClass('.menu-left');
    let elements = getElementsDataByTemplate(template);
    $(elements).each(function (index) {
        let slug = data.countries[index].country_menu_url;
        $(this).attr('href', slug);
    });
};
//trigger by default
updateMenuSlugs();


var updateUpcomingTotalByAttribute = function (sources, attributeId = 'data-upcoming-webinars') {
    let template = getTemplateItemByAttribute(attributeId);
    let elements = getElementsDataByTemplate(template);
    let value = (sources || []).filter(s => s.upcoming).length;

    $(elements).each(function (index) {
        let key = $(this).attr('data-field');
        if (key == 'total') $(this).text(value);
    });
};


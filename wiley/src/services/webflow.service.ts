import $ from 'jquery'
import _ from 'lodash'
import { ICountry, IWiley } from '../models/wiley.model'

class WebflowService {
    getTemplateItemByParrentClass(parentClass: string) {
        let templates = $(`${parentClass} [data-template]`)
        if (templates.length == 0) {
            templates = $(`${parentClass}[data-template]`)
        }
        return templates

    }

    getTemplateItemByAttribute(attributeId: string) {
        const className = '[' + attributeId + ']'
        return $(className)

    }

    getElementsDataByTemplate($template: any) {
        return $($template).find('[data-field]')
    }

    //.live-now-container
    updateLiveNowPart(sources: any[], containerClass: string) {
        const template = this.getTemplateItemByParrentClass(containerClass)
        const elements = this.getElementsDataByTemplate(template)
        const liveEvent = (sources || []).find(event => event.liveNow)

        if (liveEvent) {


            $(elements).each(function () {
                const key = $(this).attr('data-field')

                //title
                if (key == 'title') $(this).text(liveEvent.name)
                //slug
                if (key == 'slug') $(this).attr('href', liveEvent.slug)
                //registration
                if (key == 'registration') {
                    if (liveEvent.type_close_registration) {
                        $(this).addClass('hidden')
                    } else {
                        $(this).text(liveEvent.registrationLabel)
                        $(this).attr('href', liveEvent.slug)
                    }
                }
            })

        } else {//remove event
            $(containerClass).remove()
        }

    }

    // update menu left slug
    updateMenuSlugs(countries: ICountry[]) {
        if (countries && countries.length) {
            const template = this.getTemplateItemByParrentClass('.menu-left')
            const elements = this.getElementsDataByTemplate(template)

            $(elements).each(function (index) {
                const slug = countries[index].menuSlug || ''
                $(this).attr('href', slug)
            })
        } else {
            console.log('updateMenuSlugs: ', 'The countries parameter is undefined.')
        }
    }


    updateUpcomingTotalByAttribute(sources: IWiley[], attributeId = 'data-upcoming-webinars') {
        const template = this.getTemplateItemByAttribute(attributeId)
        const elements = this.getElementsDataByTemplate(template)
        const value = (sources || []).filter(s => s.upComing).length

        $(elements).each(function (index) {
            const key = $(this).attr('data-field')
            if (key == 'total') $(this).text(value)
        })
    }
}

const webflowService = new WebflowService()
export default webflowService


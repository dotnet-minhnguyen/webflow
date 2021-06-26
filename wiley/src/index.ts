//1. Map webflow cms collection to your models
//2. Add some filed
import $ from 'jquery'
import _ from 'lodash'
import htmlService from './services/html.service'
import webflowService from './services/webflow.service'

export const Wiley = {
    countries: [],
    events: [],
    webinars: [],
    products: [],
    news: [],
    testimonials: [],

    webflowService,
    htmlService
}

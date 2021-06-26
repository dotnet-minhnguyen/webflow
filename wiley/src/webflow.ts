//1. Map webflow cms collection to your models
//2. Add some filed

import $ from 'jquery'
import _ from 'lodash'
import htmlService from './services/html.service'
import webflowService from './services/webflow.service'

const lib = {
    countries: [],
    events: [],
    webinars: [],
    products: [],
    news: [],
    testimonials: [],

    webflowService,
    htmlService
}

export default lib
const
    env = process?.env ?? {},
    {
        REACT_APP_MAIN_CDN      = "%MAIN_CDN%",
        REACT_APP_DOWNLOADS_CDN = "%DOWNLOADS_CDN%",
        REACT_APP_BASE_URL      = "%BASE_URL%",
        REACT_APP_API_ENDPOINT  = "%API_ENDPOINT%"
    } = env;



const URLs = {

    populationData:  `https://${ REACT_APP_MAIN_CDN      }/public/assets/population/population.json`,
    baseData:        `https://${ REACT_APP_DOWNLOADS_CDN }/downloads/data/`,
    mapData:         `https://${ REACT_APP_DOWNLOADS_CDN }/downloads/map_content/`,
    downloads:       `https://${ REACT_APP_DOWNLOADS_CDN }/downloads/`,
    baseGeo:         `https://${ REACT_APP_MAIN_CDN      }/public/assets/geo/`,
    mapStyle:        `https://${ REACT_APP_DOWNLOADS_CDN }/public/assets/geo/style_v3.json`,
    landingData:     `https://${ REACT_APP_DOWNLOADS_CDN }/downloads/data/landing.json`,
    timestamp:       `https://${ REACT_APP_MAIN_CDN      }/public/assets/dispatch/website_timestamp`,
    lookups:         `https://${ REACT_APP_MAIN_CDN      }/public/assets/lookups/`,
    lookupApi:       `https://${ REACT_APP_API_ENDPOINT  }/v1/lookup`,
    pageLayoutsBase: `https://${ REACT_APP_MAIN_CDN      }/public/assets/cms/`,
    mainApi:         `https://${ REACT_APP_API_ENDPOINT  }/v1/data`,
    soaApi:          `https://${ REACT_APP_API_ENDPOINT  }/v1/soa`,
    modals:          `https://${ REACT_APP_MAIN_CDN      }/public/assets/modals/`,
    postcode:        `https://api.coronavirus.data.gov.uk/v1/code`,
    latestCases: {
        csv:  `${ REACT_APP_BASE_URL }/downloads/csv/coronavirus-cases_latest.csv`,
        json: `${ REACT_APP_BASE_URL }/downloads/json/coronavirus-cases_latest.json`
    },
    latestDeaths: {
        csv:  `${ REACT_APP_BASE_URL }/downloads/csv/coronavirus-deaths_latest.csv`,
        json: `${ REACT_APP_BASE_URL }/downloads/json/coronavirus-deaths_latest.json`
    },
    about:         `https://${ REACT_APP_MAIN_CDN      }/public/assets/modals/about.md`,
    accessibility: `https://${ REACT_APP_MAIN_CDN      }/public/assets/modals/accessibility.md`,
    newWebsite:    `https://${ REACT_APP_MAIN_CDN      }/public/assets/new_website.md`,
    archiveList:   `https://${ REACT_APP_DOWNLOADS_CDN }/downloads?restype=container&comp=list`,
    metrics:       `https://${ REACT_APP_MAIN_CDN      }/public/assets/dispatch/api_variables.json`,
    downloadData:  `https://${ REACT_APP_API_ENDPOINT  }/v2/data`,
    baseUrl:        REACT_APP_BASE_URL

};

URLs.pageLayouts = {
    UKSummary: 'UKSummary.json',
    testing: 'testing.json',
    healthcare: 'healthcare.json',
    deaths: 'deaths.json',
    cases: 'cases.json',
}

export default URLs;

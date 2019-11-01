
const iconFinderApi = {
    client_id : "",
    client_secret : "",
    baseUrl : "https://api.iconfinder.com/v3",

    categories : {
        endPoint : "/categories",
        count : 100,
    },

    /* https://api.iconfinder.com/v3/iconsets/ [icon-set identifier] /icons */
    iconSets : {
        endPoint : "/iconsets",
        postPath : '/icons',
        count : 100,
        premium : false,
        vector : true,
        license : ""
    },
    
    search : {
        /*search string*/
        endPoint : "/icons/search",
        query : "",
        count : 100,
        // offset : 100,
        premium : false,
        vector : true,
        license : "",
        // size_minimum : 0,
        // size_maximum : 0,
        /* optional
        category : "category ID",
        style : "style ID",
        */

    }


}

export default iconFinderApi;
export type JOBS = {
    company : string,
    dateAdded : Date,
    jobSource : string,
    slug : string,
    tags : {
        text : string
    }[],
    title : string,
    url : string

}[]
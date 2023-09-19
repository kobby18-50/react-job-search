export type JOB = {
    company : string,
    dateAdded : Date,
    jobSource : string,
    location : string,
    originalPosting : string,
    salary : string,
    summary : string,
    title : string,
    url : string,
    tags : {
        text : string
    }[],
    postDate : string

}
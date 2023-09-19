import { Button, Card } from "flowbite-react";

type JOB = {
    company : string,
    title : string,
    tags : {
        text : string
    }[],
    jobSource : string,
    slug : string,
}

const JobCard = ({company, title, tags, jobSource, slug } : JOB ) => {
    return ( 
        <div>
         <Card  className="rounded-none ">
            <div className="flex flex-col">
                <p className="mb-2">{company}</p>

                <h2 className="text-lg font-semibold">{title}</h2>

                <span className="my-3">
                    <p>Tags</p>
                    <div className="flex flex-wrap space-x-3 gap-y-1">
                        {tags.map((tag, index) => (
                            <p key={index} className="border p-1 capitalize">{tag.text}</p>
                        ))}
                    </div>

                </span>

                <p className="flex space-x-2 mb-3">
                    <span>Publisher :</span>
                    <span className="text-cyan-700 font-medium">{jobSource}</span>
                </p>

                <Button className="rounded-none w-fit">
                    <a href={`/job/${slug}`}>Read Job Description</a>
                </Button>

            </div>

         </Card>
        </div>
     );
}
 
export default JobCard;
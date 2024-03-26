import {
    Card,
    CardHeader,
    
  } from "@material-tailwind/react";
   

  export default function AboutCard({data}) {
    return (
        <Card className="mt-6 w-96 ">
        <CardHeader color="blue-gray" className="relative h-56">
          <img
            src={data?.img}
            alt="card-image"
          />
        </CardHeader>
        
       </Card>
   
    );
  }
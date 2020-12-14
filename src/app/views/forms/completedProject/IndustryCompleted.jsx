import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Breadcrumb ,SimpleCard} from "matx";
// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import { Table,TableHead,TableCell,TableBody,IconButton,Icon,TableRow} from "@material-ui/core";

const IndustryCompleted = () => {
  
  const [industryList, setIndustryList] = useState([]);
  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/api/industry')
    .then(response=> {
        console.log(response.data)
        setIndustryList(response.data);
    });
  })
  return (
    
<div className="m-sm-30">

        <div  className="mb-sm-30">
            <Breadcrumb
              routeSegments={[
                { name: "projets achevés", path: "/projects/industrie-acheve" },
                { name: "Industie" }
              ]}
            />
        </div>

      <SimpleCard title=" Industie :">
        <Table className="whitespace-pre">

              <TableHead>
                    <TableRow>
                      <TableCell className="px-0">Nom du Projet</TableCell>
                      <TableCell className="px-0">Client</TableCell>
                      <TableCell className="px-0">Location</TableCell>
                    </TableRow>
              </TableHead>

                <TableBody className="row">
                      {industryList.map((industry, index) => (
                        <TableRow key={index}>
                          <TableCell className="px-0 capitalize" align="left">
                            {industry.name}
                          </TableCell>
                          <TableCell className="px-0 capitalize" align="left">
                            {industry.customer}
                          </TableCell>
                          <TableCell className="px-0 capitalize">
                            {industry.location}
                          </TableCell>
                        </TableRow>
                      ))}
              </TableBody>

         </Table>
      </SimpleCard>
       
</div>
  )
}

export default IndustryCompleted



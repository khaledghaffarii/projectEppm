import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Breadcrumb ,SimpleCard} from "matx";
// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import { Table,TableHead,TableCell,TableBody,IconButton,Icon,TableRow} from "@material-ui/core";

const WaterTreatment = () => {
  
  const [waterList, setWaterList] = useState([]);
  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/api/water')
    .then(response=> {
        console.log(response.data)
        setWaterList(response.data);
    });
  })
  return (
    
<div className="m-sm-30">

      <div  className="mb-sm-30">
          <Breadcrumb
            routeSegments={[
              { name: "projets En Cours", path: "/projects/water-trairtement-en-cour" },
              { name: "Traitement de L'eau" }
            ]}
          />
      </div>

      <SimpleCard title=" Traitement de L'eau :">
        <Table className="whitespace-pre">

              <TableHead>
                    <TableRow>
                      <TableCell className="px-0">Nom du Projet</TableCell>
                      <TableCell className="px-0">Client</TableCell>
                      <TableCell className="px-0">Location</TableCell>
                    </TableRow>
              </TableHead>

                <TableBody className="row">
                      {waterList.map((water, index) => (
                        <TableRow key={index}>
                          <TableCell className="px-0 capitalize" align="left">
                            {water.name}
                          </TableCell>
                          <TableCell className="px-0 capitalize" align="left">
                            {water.customer}
                          </TableCell>
                          <TableCell className="px-0 capitalize">
                            {water.location}
                          </TableCell>
                        </TableRow>
                      ))}
              </TableBody>

         </Table>
      </SimpleCard>
       
</div>
  )
}

export default WaterTreatment



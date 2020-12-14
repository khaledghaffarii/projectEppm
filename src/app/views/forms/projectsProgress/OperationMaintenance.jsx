import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Breadcrumb ,SimpleCard} from "matx";
// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import { Table,TableHead,TableCell,TableBody,IconButton,Icon,TableRow} from "@material-ui/core";

const OperationMaintenance = () => {
  
  const [operationList, setOperationList] = useState([]);
  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/api/operation')
    .then(response=> {
        console.log(response.data)
        setOperationList(response.data);
    });
  })
  return (
    
<div className="m-sm-30">

        <div  className="mb-sm-30">
            <Breadcrumb
              routeSegments={[
                { name: "projets En Cours", path: "/projects/operation-maintenace-en-cour" },
                { name: "Operation & Maintenance" }
              ]}
            />
        </div>

      <SimpleCard title=" Opération de Maintenance :">
        <Table className="whitespace-pre">

              <TableHead>
                    <TableRow>
                      <TableCell className="px-0">Nom du Projet</TableCell>
                      <TableCell className="px-0">Client</TableCell>
                      <TableCell className="px-0">Location</TableCell>
                    </TableRow>
              </TableHead>

                <TableBody className="row">
                      {operationList.map((operation, index) => (
                        <TableRow key={index}>
                          <TableCell className="px-0 capitalize" align="left">
                            {operation.name}
                          </TableCell>
                          <TableCell className="px-0 capitalize" align="left">
                            {operation.customer}
                          </TableCell>
                          <TableCell className="px-0 capitalize">
                            {operation.location}
                          </TableCell>
                        </TableRow>
                      ))}
              </TableBody>

         </Table>
      </SimpleCard>
       
</div>
  )
}

export default OperationMaintenance



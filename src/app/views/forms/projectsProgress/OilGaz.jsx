import React, { useState, useEffect } from "react";
import { Breadcrumb ,SimpleCard} from "matx";
import { Table,TableHead,TableCell,TableBody,TableRow} from "@material-ui/core";
import {NavLink} from 'react-router-dom'
import axios from 'axios';
const OilGaz = () => {

  const [oilGazList, setOilGazList] = useState([]);
  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/api/projects')
    .then(response=> {
        console.log(response.data)
        setOilGazList(response.data);
    });
  })
  return (
    
<div className="m-sm-30">

        <div  className="mb-sm-30">
            <Breadcrumb
              routeSegments={[
                { name: "projets En Cours", path: "/projects/oil-gaz-en-cour" },
                { name: "Gaz et Pétrole" }
              ]}
            />
        </div>

      <SimpleCard title=" Gaz et Pétrole :">
        <Table className="whitespace-pre">

              <TableHead>
                    <TableRow>
                      <TableCell className="px-0">Nom du Projet</TableCell>
                      <TableCell className="px-0">Client</TableCell>
                      <TableCell className="px-0">Location</TableCell>
                    </TableRow>
              </TableHead>

                <TableBody className="row">
                      {oilGazList.map((oilGazLists, index) => (
                        <TableRow key={index}>
                          <TableCell className="px-0 capitalize" align="left">
                           
                          <NavLink to={"/oil-gaz-en-cour/"+ oilGazLists.id}>
                           
                            {oilGazLists.name}
                          </NavLink>
                          </TableCell>
                          <TableCell className="px-0 capitalize" align="left">
                            {oilGazLists.customer}
                          </TableCell>
                          <TableCell className="px-0 capitalize">
                            {oilGazLists.location}
                          </TableCell>
                        </TableRow>
                      ))}
              </TableBody>

         </Table>
      </SimpleCard>
       
</div>
  )
}

export default OilGaz



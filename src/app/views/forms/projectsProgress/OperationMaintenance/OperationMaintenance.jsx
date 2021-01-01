import React, { useState, useEffect,useRef } from "react";
import axios from 'axios';
import { Breadcrumb ,SimpleCard} from "matx";
import { Container,Table} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from 'react-router-dom';
//import { Table,TableHead,TableCell,TableBody,IconButton,Icon,TableRow} from "@material-ui/core";

const OperationMaintenance = () => {
  const isMountedComponent = useRef(true);  
  const [operationList, setOperationList] = useState([]);
  useEffect(()=>{
    axios.get('http://eppmdashboard.herokuapp.com/api/projects')
    .then(response=> {
      if (isMountedComponent.current) {
        console.log(response.data)
        setOperationList(response.data);
      }
      return () => { isMountedComponent.current = false; };   
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

      <Container className="col-sm-12 ml-1">
        
            <Table responsive="sm" hover className=" table-light">
                    <thead>
                      <tr>
                       <th className="th-sm">Nom du Projet</th>
                        <th className="th-sm">Client</th>
                        <th className="th-sm">Location</th>
                        <th className="th-sm">Status </th>
                        <th className="th-sm">Categorie </th> 
                      </tr>
                    </thead>

                  <tbody>
                    {
                      operationList.map((operation, index) =>{
                        if(operation.status=="En Cours" && operation.categorie=="operation"){
                        return(
                        <tr>
                        
                          <td  className="td-sm"><NavLink style={{ 'textDecorationLine':'none','textDecorationStyle':'solid','color':'black','fontWeight':'300' }}  to={"/operation-maintenace-en-cour/"+ operation.id}>{operation.name} </NavLink></td>
                          <td  > {operation.customer}</td>
                          <td  > {operation.location}</td>
                          <td  > {operation.status}</td>
                          <td  > {operation.categorie}</td>
                        
                        </tr>
                        
                        )}
                      })
                           
                    }
                  </tbody>
           </Table>

      </Container>
       
</SimpleCard>
       
</div>
  )
}

export default OperationMaintenance



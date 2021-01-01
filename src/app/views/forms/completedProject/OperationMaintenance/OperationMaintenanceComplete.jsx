import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Breadcrumb ,SimpleCard} from "matx";
import { Container,Table} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from 'react-router-dom';
//import { Table,TableHead,TableCell,TableBody,IconButton,Icon,TableRow} from "@material-ui/core";

const OperationMaintenanceComplete = () => {
  
  const [operationList, setOperationList] = useState([]);
  useEffect(()=>{
    axios.get('http://eppmdashboard.herokuapp.com/api/projects/')
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
                { name: "projets Achevés", path: "/projects/operation-acheve" },
                { name: "Operation & Maintenance" }
              ]}
            />
        </div>

<SimpleCard title=" Opération de Maintenance :">

      <Container className="col-sm-12 ml-1">
        
            <Table responsive="sm" hover light className=" table-light">
                    <thead>
                      <tr>
                        <th className="th-sm">Nom du Projet</th>
                        <th className="th-sm">Client</th>
                        <th className="th-sm">Location</th>
                      </tr>
                    </thead>

                  <tbody>
                    {
                      operationList.map((operation, index) =>{
                        if(operationList.status=="Fini" ){
                        return(
                        <tr>
                        
                          <td className="td-sm"><NavLink style={{ 'textDecorationLine':'none','textDecorationStyle':'solid','color':'black','fontWeight':'300' }}  to={"/operation-acheve/"+ operation.id}>{operation.name} </NavLink></td>
                          <td > {operation.customer}</td>
                          <td > {operation.location}</td>
                        
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

export default OperationMaintenanceComplete



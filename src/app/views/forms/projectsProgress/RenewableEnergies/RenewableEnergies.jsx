import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Breadcrumb ,SimpleCard} from "matx";
// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
//import { Table,TableHead,TableCell,TableBody,IconButton,Icon,TableRow} from "@material-ui/core";
import { Container,Table} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from 'react-router-dom';
const RenewableEnergies = () => {
  
  const [energyList, setEnergyList] = useState([]);
  useEffect(()=>{
    axios.get('http://eppmdashboard.herokuapp.com/api/projects')
    .then(response=> {
        console.log(response.data)
        setEnergyList(response.data);
    });
  })
  return (
    
<div className="m-sm-30">

        <div  className="mb-sm-30">
            <Breadcrumb
              routeSegments={[
                { name: "projets En Cours", path: "/projects/enrgies-renewable-en-cour" },
                { name: "Énergie renouvelable" }
              ]}
            />
        </div>

<SimpleCard title=" Énergie renouvelable :">

    <Container className="col-sm-12 ml-1">
      <Table responsive="sm" hover light className=" table-light">
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
                    energyList.map((energy, index) =>{
                      if(energy.status=="En Cours" && energy.categorie=="energy"){
                        return(
                        <tr>
                        
                          <td className="td-sm"><NavLink style={{ 'textDecorationLine':'none','textDecorationStyle':'solid','color':'black','fontWeight':'300' }}  to={"/enrgies-renewable-en-cour/"+ energy.id}>{energy.name} </NavLink></td>
                          <td > {energy.customer}</td>
                          <td > {energy.location}</td>
                          <td > {energy.status}</td>
                          <td > {energy.categorie}</td>

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

export default RenewableEnergies



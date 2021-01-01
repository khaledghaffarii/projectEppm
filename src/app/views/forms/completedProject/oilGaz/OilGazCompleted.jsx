import React, { useState, useEffect } from "react";
import { Breadcrumb ,SimpleCard} from "matx";
//import { Table,TableHead,TableCell,TableBody,TableRow} from "@material-ui/core";
import {NavLink} from 'react-router-dom'
import axios from 'axios';
import { Container,Table} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { exact } from "prop-types";
// import { id } from "date-fns/locale";
// import MaxHeightMenu from '../../../../views/material-kit/menu/MaxHeightMenu';
const OilGazCompleted = () => {

  const [oilGazList, setOilGazList] = useState([]);
  useEffect(()=>{
    
    axios.get('http://eppmdashboard.herokuapp.com/api/projects')
    .then(response => { 
      // for( let i=0; i<response.data.length; i++ )
      // {
      //   console.log(response.data[i].status = "Non Commencé")
      // if(response.data[i].status = "Non Commencé")
      //     { 
            
      //     }
      // }
      setOilGazList(response.data)
       
    });
    
  })
  
  return(
    
<div className="m-sm-30">
   <div  className="mb-sm-30">
            <Breadcrumb
              routeSegments={[
                { name: "projets Achevés", path: "/projects/oil-gaz-acheve" },
                { name: "Gaz et Pétrole" }
              ]}
            />
        </div>
        <SimpleCard title=" Gaz et Pétrole :">
        <Container className="col-sm-12 ml-1">
        
        <Table responsive="sm" hover light>
    <thead>
      <tr>
     
        <th className="th-sm">Nom du Projet </th>
        <th className="th-sm">Client </th>
        <th className="th-sm">Location </th>
        <th className="th-sm">Status </th>

      </tr>
    </thead>

    <tbody>
    {
      oilGazList.map((oilGazLists, index) =>{
        if(oilGazLists.status == "Fini" ){
          return(
          
            <tr>
             
              <td key={index.id} className="td-sm"><NavLink style={{ 'textDecorationLine':'none','textDecorationStyle':'solid','color':'black','fontWeight':'300','fontFamily':'fantasy' }}  to={ "/oil-gaz-acheve/"+ oilGazLists.id }>{oilGazLists.name} </NavLink> </td>
              <td key={index.id} >{oilGazLists.customer}</td>
              <td key={index.id} >{oilGazLists.location}</td>
              <td key={index.id} >{oilGazLists.status}</td>
            
            </tr>
            
          )
        }
       })

    }
    </tbody>
  </Table>
</Container>

        </SimpleCard>
      
       
</div>
  )
}

export default OilGazCompleted



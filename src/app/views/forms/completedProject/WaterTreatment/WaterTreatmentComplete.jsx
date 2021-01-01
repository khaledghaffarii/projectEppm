import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Breadcrumb ,SimpleCard} from "matx";
// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
//import { Table,TableHead,TableCell,TableBody,IconButton,Icon,TableRow} from "@material-ui/core";
import { Container,Table} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from 'react-router-dom';
const WaterTreatment = () => {
  
  const [waterList, setWaterList] = useState([]);
  useEffect(()=>{
    axios.get('http://eppmdashboard.herokuapp.com/api/projects/')
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
              { name: "projets Achevés", path: "/projects/water-trairtement-acheve" },
              { name: "Traitement de L'eau" }
            ]}
          />
      </div>
<SimpleCard title=" Traitement de L'eau :">

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
                    waterList.map((water, index) =>{
                      if(waterList.status=="En Cours" ){
                        return(
                        <tr>
                        
                          <td className="td-sm"><NavLink style={{ 'textDecorationLine':'none','textDecorationStyle':'solid','color':'black','fontWeight':'300' }}  to={"/water-trairtement-acheve/"+ water.id}>{water.name} </NavLink></td>
                          <td > {water.customer}</td>
                          <td > {water.location}</td>
                        
                        </tr>
                        
                        )}
                      })
                  }
                </tbody>
        </Table>
    </Container>

</SimpleCard>           
      {/* <SimpleCard title=" Traitement de L'eau :">
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
      </SimpleCard> */}
       
</div>
  )
}

export default WaterTreatment



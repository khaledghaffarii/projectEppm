import React, { useState, useEffect,useRef  } from "react";
import { Breadcrumb ,SimpleCard} from "matx";
//import { Table,TableHead,TableCell,TableBody,TableRow} from "@material-ui/core";
import {NavLink} from 'react-router-dom'
//import axios from 'axios';
import { Container,Table} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
//import css from './css';
// import { id } from "date-fns/locale";
// import MaxHeightMenu from '../../../../views/material-kit/menu/MaxHeightMenu';
import axios from '../../../../../axios.js';

const OilGaz = () => {
  const isMountedComponent = useRef(true);  
  const _isMounted = false;   
  const [oilGazList, setOilGazList] = useState([]);
  useEffect( ()=>{

    async function fetchData()
    {
            
      const res = await axios.get('/projects')
      console.log(res.data)
      if (isMountedComponent.current) {
        setOilGazList(res.data)
        }
        return () => { 
          isMountedComponent.current = false; 
        };  

    }
    fetchData();
  }, [])
    // axios.get('http://eppmdashboard.herokuapp.com/api/projects',{
    //   timeout: 1000
    // })
    
    // .then(response => { 
    //   // for( let i=0; i<response.data.length; i++ )
    //   // {
    //   //   console.log(response.data[i].status = "Non Commencé")
    //   // if(response.data[i].status = "Non Commencé")
    //   //     { 
            
    //   //     }
    //   // }
    //   if (isMountedComponent.current) {
    //   setOilGazList(response.data)
    //   }
    //   return () => { 
    //     isMountedComponent.current = false; 
    //   };   
  
    // });
    

  
  return(
    
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
        <Container className="col-sm-12 ml-1">
        
        <Table responsive="sm" hover >
    <thead>
      <tr>
     
        <th className="th-sm">Nom du Projet </th>
        <th className="th-sm">Client </th>
        <th className="th-sm">Location </th>
        <th className="th-sm">Status </th>
        <th className="th-sm">Categorie </th>

      </tr>
    </thead>

    <tbody>
    {
      oilGazList.map((oilGazLists, index) =>{
       
        if( oilGazLists.status=="En Cours" && oilGazLists.categorie=="oilgaz" ){
          return(
          
             <tr>
             
              <td key={oilGazLists.index} className="td-sm"><NavLink style={{ 'textDecorationLine':'none','textDecorationStyle':'solid','color':'black','fontWeight':'300','fontFamily':'fantasy' }}  to={"/oil-gaz-en-cour/"+ oilGazLists.id }> {oilGazLists.name} </NavLink> </td>
              <td key={oilGazLists.index} >{oilGazLists.customer}</td>
              <td key={oilGazLists.index} >{oilGazLists.location}</td>
              <td key={oilGazLists.index} >{oilGazLists.status}</td>
              <td key={oilGazLists.index} >{oilGazLists.categorie}</td>
                                      
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

export default OilGaz



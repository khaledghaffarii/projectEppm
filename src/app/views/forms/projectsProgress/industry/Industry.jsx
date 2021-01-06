import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Breadcrumb ,SimpleCard} from "matx";
// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
//import { Table,TableHead,TableCell,TableBody,IconButton,Icon,TableRow} from "@material-ui/core";
import { Container,Table} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from 'react-router-dom';
const IndustryCompleted = () => {
  const controller = new AbortController();

  const [industryList, setIndustryList] = useState([]);
  useEffect(()=>{
    // axios.get('http://eppmdashboard.herokuapp.com/api/projects')
    // .then(response=> {
    //     console.log(response.data)
    //     setIndustryList(response.data);
        
    // });
    // axios({
    //   method: 'get',
    //   url: '/http://eppmdashboard.herokuapp.com/api/projects',
    //   timeout: 4000,    // 4 seconds timeout
     
    // })
    // .then(response => console.log(response) )
    // .catch(error => console.error('timeout exceeded'))
    // fetch('/http://eppmdashboard.herokuapp.com/api/projects')
    // .then((resp) => resp.json())
    // .then(data => {
    //   console.log(data) 
    // });
    // setTimeout(() => controller.abort(), 4000);
    //let items: any[] = [];
    //////////////////////////////////////////
    // const controller = new AbortController();
    // const options = {
    //   method: 'GET',
    //   signal: controller.signal,
    //   body: JSON.stringify({
    //     firstName: 'David',
    //     lastName: 'Pollock'
    //   })
    // };  
    // const promise = fetch('http://eppmdashboard.herokuapp.com/api/projects', options);
    // const timeoutId = setTimeout(() => controller.abort(), 219);

    // promise
    //   .then(response => console.log(response.data))
    //   .catch(error => console.error('timeout exceeded'));
    fetch(`http://eppmdashboard.herokuapp.com/api/projects`,{
      timeout: 1000
    })
    // We get the API response and receive data in JSON format...
    .then(response => response.json())
    // ...then we update the users state
    .then(data => {
      console.log(data)
     setIndustryList(data); 
    });
    // .then(data =>
    //   this.setState({
    //     users: data,
    //     isLoading: false,
    //   })
    // )
    // Catch any errors we hit and update the app
    // .catch(error => this.setState({ error, isLoading: false }))
  },[])
  return (
    
<div className="m-sm-30">

        <div  className="mb-sm-30">
            <Breadcrumb
              routeSegments={[
                { name: "projets achevés", path: "/projects/industrie" },
                { name: "Industie" }
              ]}
            />
        </div>
        <SimpleCard title=" Industrie :">

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
                industryList.map((industry, index) =>{
                  if(industry.status=="En Cours" && industry.categorie=="industry" ){
                    return(
                    <tr>
                    
                      <td key={index.id} className="td-sm"><NavLink style={{ 'textDecorationLine':'none','textDecorationStyle':'solid','color':'black','fontWeight':'300' }}  to={"/industrie/"+ industry.id}>{industry.name} </NavLink></td>
                      <td > {industry.customer}</td>
                      <td > {industry.location}</td>
                      <td  >{industry.status}</td>
                      <td  >{industry.categorie}</td>
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

export default IndustryCompleted



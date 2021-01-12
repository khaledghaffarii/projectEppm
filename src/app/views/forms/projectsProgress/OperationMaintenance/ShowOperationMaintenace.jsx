// import axios from 'axios';
import React, { useState, useEffect } from "react";
import NavBar from './../../navBar/NavBAr';
import axios from '../../../../../axios.js';
import { Table,Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { SimpleCard,Breadcrumb} from "matx";

const ShowOperationMaintenace = (props) => {

    const [operationShowList, setOperationShowList] = useState([]);
    useEffect(()=>{
      async function fetchData()
      {
              
        const res = await axios.get( '/projects/' + props.match.params.id)
        console.log(res.data)
        setOperationShowList(res.data);
      
      }
      fetchData();
    },[])

    // axios.get('http://eppmdashboard.herokuapp.com/api/projects/'+props.match.params.id)
    // .then(response=> {
    //     console.log(response.data)
    //     setOperationShowList(response.data);
    // });
    return (
    <div className="m-sm-30">
        <div  className="mb-sm-30">
            
        <Breadcrumb
              routeSegments={[
                { name: "projets En Cours",   path: "/projects/operation-maintenace-en-cour" },
                { name: "Operation & Maintenance" }
              ]}
        />
        </div>
        <SimpleCard title={operationShowList.name} > <h1></h1></SimpleCard>
    
        <br />
        
        <NavBar />
        <div>
        <hr/>
        <SimpleCard>
        <Container className="col-sm-12 ml-1"> 
              
              <Table  responsive="sm" className="table-light">
                <tbody>
              
                          <tr>
                          <td> <b> Client:</b></td>
                          <td colSpan=""  >   <p style={{marginRight:'10em'}}>  {operationShowList.customer} </p></td></tr>
              
                          <tr>
                          <td> <b> Type de Facturation: </b>  </td>
                          <td colSpan=""  >  <p style={{marginRight:'10em'}}>  {operationShowList.BillingType}  </p></td>
                          </tr>
              
                          <tr>
                          <td> <b> Status:  </b> </td>
                          <td colSpan=""  >  <p style={{marginRight:'10em'}}>  {operationShowList.status} </p></td> </tr>
              
                         <tr>
                          <td> <b>Coup Total:</b>  </td>
                          <td colSpan="">   <p style={{marginRight:'10em'}}>  {operationShowList.totalCost} </p></td>
                        </tr>
              
                         <tr>
                          <td> <b>Location:</b>   </td>
                          <td colSpan=""><p style={{marginRight:'10em'}}>{operationShowList.location} </p></td> 
                        </tr>
              
                         <tr>
                          <td><b> Date de début: </b></td>
                          <td colSpan="">   <p style={{marginRight:'10em'}}>  {operationShowList.created_at}</p></td>
                        </tr>
              
                </tbody>
              </Table> 
                      
        </Container>
            </SimpleCard> 

        <hr/>
        <SimpleCard title=" Description "> 
        {operationShowList.description}
        </SimpleCard> 
        </div>
    </div>
    )
}

export default ShowOperationMaintenace

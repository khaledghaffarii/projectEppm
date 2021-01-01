import axios from 'axios';
import React, { useState, useEffect } from "react";
import NavBar from '../../navBar/NavBAr';
import { Table,Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { SimpleCard,Breadcrumb} from "matx";

const ShowRenewableEnergies = (props) => {

    const [energyShowList, setEnergyShowList] = useState([]);
    useEffect(()=>{
      axios.get('http://eppmdashboard.herokuapp.com/api/projects/'+props.match.params.id)
      .then(response=> {
          console.log(response.data)
          setEnergyShowList(response.data);
      });
    })

    return (
        <div className="m-sm-30">
        <div  className="mb-sm-30">
            
        <Breadcrumb
              routeSegments={[
                { name: "projets Achevé",   path: "/projects/energy-acheve" },
                { name: "Renewable Energy " }
              ]}
        />
        </div>
        <SimpleCard title={energyShowList.name} > <h1></h1></SimpleCard>
    
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
                          <td colSpan=""  >   <p style={{marginRight:'10em'}}>  {energyShowList.customer} </p></td></tr>
              
                          <tr>
                          <td> <b> Type de Facturation: </b>  </td>
                          <td colSpan=""  >  <p style={{marginRight:'10em'}}>  {energyShowList.BillingType}  </p></td>
                          </tr>
              
                          <tr>
                          <td> <b> Status:  </b> </td>
                          <td colSpan=""  >  <p style={{marginRight:'10em'}}>  {energyShowList.status} </p></td> </tr>
              
                         <tr>
                          <td> <b>Coup Total:</b>  </td>
                          <td colSpan="">   <p style={{marginRight:'10em'}}>  {energyShowList.totalCost} </p></td>
                        </tr>
              
                         <tr>
                          <td> <b>Location:</b>   </td>
                          <td colSpan=""><p style={{marginRight:'10em'}}>{energyShowList.location} </p></td> 
                        </tr>
              
                         <tr>
                          <td><b> Date de début: </b></td>
                          <td colSpan="">   <p style={{marginRight:'10em'}}>  {energyShowList.created_at}</p></td>
                        </tr>
              
                  </tbody>
              </Table> 
                      
        </Container>
            </SimpleCard> 

        <hr/>
        <SimpleCard title=" Description "> 
        {energyShowList.description}
        </SimpleCard> 
        </div>
    </div>
    )
}

export default ShowRenewableEnergies

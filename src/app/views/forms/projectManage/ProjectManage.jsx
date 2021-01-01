import React, { Component } from 'react'
import { Breadcrumb ,SimpleCard} from "matx";
import {NavLink} from 'react-router-dom'
import axios from 'axios';
import { Container,Table,ListGroup,Form,Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';




export class ProjectManage extends Component {
    constructor(){
        super()
        this.ProjectShow=this.ProjectShow.bind(this)
        this.state={
            showProject:false,
            showIndustry:false,
            oilGazList:[],
            industryList:[],
        }
    }
    
         ProjectShow = ()=>{
            const isVisible = this.state.showProject;
            
            axios.get('http://eppmdashboard.herokuapp.com/api/projects')
            .then(response => { 
             this.setState({
                oilGazList:response.data,
                showProject: !isVisible
             })
            
            });
        
        }
        
    
   
    render() {
        return (
            <div className="m-sm-30">
   <div  className="mb-sm-30">
            <Breadcrumb
              routeSegments={[
                { name: "Setting Project" }
              ]}
            />
 </div>

        <SimpleCard title=" Gaz et Pétrole :">
        <Container className="col-sm-12 ml-1">
<Form.Row >
  <Card style={{ width: '100%' }}>
      <ListGroup hover light variant="flush">
        <ListGroup.Item> 
        <button 
        onClick={()=>this.ProjectShow()}
        style=
        {{
        backgroundColor:'transparent',
        border:'none',outline:'none',
        cursor:'pointer',
        fontWeight:'bold',
        fontSize:'20px',
        color:'#5C9210'
        }}
        > 
      Oil & Gaz
        </button>  
        </ListGroup.Item>
        <ListGroup.Item>
          <button 
        // onClick={ ()=>this.industryShow()}
        style=
        {{
        backgroundColor:'transparent',
        border:'none',outline:'none',
        cursor:'pointer',
        fontWeight:'bold',
        fontSize:'20px',
        color:'#5C9210'
        }}
        > 
        Industry 
          </button>
        </ListGroup.Item>
        <ListGroup.Item> <button 
        // onClick={ ()=>this.industryShow()}
        style=
        {{
        backgroundColor:'transparent',
        border:'none',outline:'none',
        cursor:'pointer',
        fontWeight:'bold',
        fontSize:'20px',
        color:'#5C9210'
        }}
        > 
        Renewable Energy
          </button></ListGroup.Item>
      </ListGroup>
  </Card>
        <Table responsive="sm" hover light>

    <tbody>
    {
      this.state.oilGazList.map((oilGazLists, index) =>{
        if(this.state.showProject){
          if(oilGazLists.status=="En Cours" ){
          return(
          
            <tr>
             
              <td key={index.id} className="td-sm"><NavLink style={{ 'textDecorationLine':'none','textDecorationStyle':'solid','color':'black','fontWeight':'300','fontFamily':'fantasy' }}  to={"/oil-gaz-en-cour/"+ oilGazLists.id }> {oilGazLists.name} </NavLink></td>
              <td key={index.id} >{oilGazLists.status}</td>
             </tr>
            
            )
        }
        
        }
       })
       
    }
    </tbody>
  </Table>
  </Form.Row>
</Container>

        </SimpleCard>
      
       
</div>
        )
    }
}

export default ProjectManage

import React, { Component } from 'react'
import LoaderBounce from '../../../../matx/components/LoaderBounce';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Form,Button,Spinner,InputGroup,Col,FormControl} from 'react-bootstrap'
import Input from '../formAdd/input/input';
import { SimpleCard} from "matx";
//import { Form,Col,InputGroup,FormControl} from 'react-bootstrap'
//import classes from './input.scss';
import TextAreaComponent from '..//formAdd/TextAreaComponent'
import ContryRegionComponent from '../formAdd/ContryRegionComponent';
//import $ from 'jquery';²
import axios from 'axios';
import 'sweetalert2/src/sweetalert2.scss'
import {connect} from 'react-redux'
//import Swal from 'sweetalert2/dist/sweetalert2.js'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export class AddProjects extends Component {
   
    constructor(props){
        
        super()
        this.state = {

            projectForm: {
                name:{
                    value: '',
                 },

            categorie: {
                 elementConfig: {
                        type: 'text',
                        options: 
                        [
                            {value: 'oilgaz', displayValue: 'Gaz et Pétrole'},
                            {value: 'water', displayValue: "Traitement de l'eau"},
                            {value: 'energy', displayValue: 'Energie renouvelable'},
                            {value: 'operation', displayValue: 'Operation et Maintenance'},
                            {value: 'industry', displayValue: 'Industrie'},
                       ]
                        
                    },

                    value: '',
            },
            location: {
                    value: '',
                 },
            customer: {
                elementConfig: {
                    type: 'text',
                    placeholder: 'Client',
                    options:
                    [ 
                        {value: 'MSBI', displayValue: 'MSBI'},
                        {value: 'STAROIL', displayValue: 'STAROIL'},
                        {value: 'ECM+', displayValue: 'ECM+'},
                        {value: 'BRITSH GAS TUNISIA', displayValue: 'BRITSH GAS TUNISIA'},
                        {value: 'STAR CONTRACTING', displayValue: 'STAR CONTRACTING'},

                    ]
                
                    
                },
                
                 value: '',
                  
                },
               
            progress: {
                },
            BillingType: {
                 elementType: 'selectTypeFacturation',
                  elementConfig: {
                        
                       options: 
                        [
                            
                          {value: 'fixe', displayValue: 'Coût fixe'},
                          {value: 'Par Heures de Projet', displayValue: 'Par Heure de projet'},
                          {value: 'Par Heures de Tache', displayValue: 'Par Heure de tâche '},
                        ]
                      },
    
                  value: '',
                
                   },
            totalCost: {
                    value: '',
                } ,
            status: {
                    value: '',
                    elementConfig: {
                      options: 
                      [
                        {value: 'En Cours', displayValue: 'En cours'},
                       {value: 'Non Commencé', displayValue: 'Non Commencé'},
                        {value: 'En Attente', displayValue: 'En Attente'},
                        {value: 'Annulé', displayValue: 'Annulé'},
                        {value: 'Fini', displayValue: 'Achevés'},
                      ]
                    },

                },
              
            description: {
                   value: ''
                 },
            checkEmail: {
                   
                },
            }, 
            loading: false,
           
        }
        
    }
    canceledHandler = ()=>
    {
        this.props.history.push('/projects/oil-gaz-en-cour');
    }

    projectDataHandler = (event) => 
    {
    
        const Swal = require('sweetalert2');
        
        event.preventDefault();
        this.setState( { loading: true } );

        const formData = {};

        for (let formElementIdentifier in this.state.projectForm) {
            formData[formElementIdentifier] = this.state.projectForm[formElementIdentifier].value;
        }
        const newProject = {
        
        
        name:this.state.projectForm.name.value,
        categorie:this.state.projectForm.categorie.value,
        customer:this.state.projectForm.value,
        location:this.state.projectForm.location.value,
        totalCost:this.state.projectForm.totalCost.value,
        status:this.state.projectForm.status.value,
        BillingType:this.state.projectForm.BillingType.value,
        description:this.state.projectForm.description.value, 
        }
        Swal.fire({
                    stitle: "Êtes-vous sure de ces Coordonnées ?",
                    text: "Êtes-vous sure de ces Coordonnées  ?",
                    icon: 'warning',
                    width: 500,
                    fontSize: 50,
                    showCancelButton: true,
                    showCloseButton: true,
                    confirmButtonColor: '#5C9210',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Ajouter'
                    }).then((result) => {
            if (result.isConfirmed) {
    
                Swal.fire(
                'Ajouter!',
                'Projet Ajouter avec succès!! ',
                'success',
                axios.post('http://eppmdashboard.herokuapp.com/api/projects' , newProject )
                .then( response => {
                   
                    console.log(response)
                    this.setState({ loading: false });
                    if(this.state.projectForm.status.value == "En Cours"){
                        this.props.history.push('/projects/oil-gaz-en-cour');
                    }else if(this.state.projectForm.status.value=="Fini"){
                       {this.props.history.push('/projects/oil-gaz-acheve')} 
                    }
                    console.log(this.props.history)
                }),
                toast.success(" Projet Ajouter !",{
                    position:toast.
                    POSITION.TOP_RIGHT,
                    autoClose: false, 
                       
                }), 
                )
            }
            if (!result.isConfirmed) {
                this.setState( { loading: false } );
                this.props.history.push('/projects/add-project');
            }
        })
        .catch( error => {
            this.setState( { loading: false } );
            console.log(error)
        });               
    }
     checkValidity(value, rules) 
     {
    
        let isValid =true;
        
        if (!rules) {
          return true;
        }
        
        if(rules.required){
          isValid = value.trim() !== '' && isValid;
        }
    
        if(rules.minLength) {
          isValid = value.length >= rules.minLength && isValid
        }
    
        if(rules.maxLength) {
          isValid = value.length <= rules.maxLength && isValid
        }
    
        return isValid;
     }
      inputChangedHandler = (event, inputIdentifier) => {
        // const updatedProjectForm = {
        //   ...this.state.projectForm
        // };
        // const updatedFormElement = { 
        //   ...updatedProjectForm[inputIdentifier] 
        // };
    
        // updatedFormElement.value = event.target.value;
        // updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        // //updatedFormElement.touched = true;
        // updatedProjectForm[inputIdentifier] = updatedFormElement;
        
        // let formIsValid = false;
        // for( let inputIdentifier in updatedProjectForm) {
        //   formIsValid = updatedProjectForm[inputIdentifier].valid && formIsValid;
        // }
        // this.setState({projectForm: updatedProjectForm, formIsValid:formIsValid});
        
      };
   
    render() {
        toast.configure();
        const formElementsArray = [];
        for (let key in this.state.projectForm) {
            formElementsArray.push({
                id: key,
                config: this.state.projectForm[key]
            });
        }
        let form = (
    
        <Form className=" col-lg-12 mt-5" onSubmit={this.projectDataHandler} >  
         
          
        <Form.Row>
           
        <Form.Group as={Col}  controlId="formGridAddress1">
                <Form.Label> Nom du projet </Form.Label>
                <Form.Control 
                    onChange={this.inputChangedHandler}
                    value={this.state.projectForm.name.value} 
                   
                    type="text"
                    placeholder = "Nom du projet"  
                    />
            </Form.Group>
            <Form.Group controlId="formGridAddress2">
               <Form.Label>Catégorie </Form.Label>
               <Form.Control 
                   
                    as="select"  
                    defaultValue="Sélectionner"
                    onChange={this.inputChangedHandler}
                    value={this.state.projectForm.categorie.value} 
                    >
                    {this.state.projectForm.categorie.elementConfig.options.map(option => (
                    <option key={option.value} value={option.value}>{option.displayValue}</option>
                    
                ))}
                </Form.Control> 
                </Form.Group>
            <Form.Group  controlId="formGridState" className="ml-1">
                <Form.Label>Statut</Form.Label>
                    <Form.Control
                    as="select" 
                  
                    onChange={this.inputChangedHandler}
                    value={this.state.projectForm.status.value} 
                    >
                    {this.state.projectForm.status.elementConfig.options.map(option => (
                    <option key={option.value} value={option.value}>{option.displayValue}</option>
                        
                    ))}
                </Form.Control>
            </Form.Group>
        </Form.Row>
      
        <Form.Row>
            <Form.Group as={Col} controlId="formGridAddress2">
                <Form.Label> Client</Form.Label>
                <Form.Control 
                
                as="select" 
                placeholder="Client" 
                defaultValue="Sélectionner"
                onChange={this.inputChangedHandler}
                value={this.state.projectForm.customer.value} 
                >
                {this.state.projectForm.customer.elementConfig.options.map(option => (
                    <option key={option.value} value={option.value}>{option.displayValue}</option>
                    
                ))}
                </Form.Control>
            </Form.Group>
                <Form.Group className="ml-1">
                    <Form.Label>Emplacement </Form.Label>
                    <Form.Row>
                        <ContryRegionComponent
                         onChange={this.inputChangedHandler}
                         value={this.state.projectForm.location.value} 
                        />
                    </Form.Row>
                </Form.Group>
        </Form.Row>
  
   
    <Form.Group id="checkProgress">
        <Form.Check type="checkbox" label="Calculer la progressions à travers les tâches"/>
    </Form.Group>
    <Form.Row>
        <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Type de Facturation</Form.Label>
            <Form.Control 
              onChange={this.inputChangedHandler}
              value={this.state.projectForm.BillingType.value} 
            as="select">
            {this.state.projectForm.BillingType.elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>{option.displayValue}</option>
            
        ))}
            </Form.Control>
            </Form.Group>
            <Form.Group controlId="formGridAddress2">
            <Form.Label>Coût total</Form.Label>
            <InputGroup className="mb-3">
            <FormControl
            placeholder="0"
            aria-label="Amount (to the nearest dollar)"
            type="number"
            onChange={this.inputChangedHandler}
            value={this.state.projectForm.totalCost.value} 
            />
        <InputGroup.Append>
        <InputGroup.Text>DT</InputGroup.Text>
        <InputGroup.Text>0.00</InputGroup.Text>
        </InputGroup.Append>
             </InputGroup>
    </Form.Group>
           
    </Form.Row>

   


        <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description du projet : </Form.Label>
            <TextAreaComponent 
             onChange={this.inputChangedHandler}
             value={this.state.projectForm.description.value} />
        </Form.Group>
            
        <Form.Group id="formGridCheckbox">
                <Form.Check type="checkbox" label="Envoyé l'e-mail de projet créé" />
        </Form.Group>
            <hr/>
            
        <Form.Group>
            <Button variant="success" disabled={this.state.formIsValid} onClick={this.projectDataHandler} className="mr-10"
                >Ajouter
            </Button>
            <Button variant="danger" type="submit" className="" onClick={this.canceledHandler}>
                Annuler
            </Button>
        </Form.Group>
           
        </Form >
      
    
        );
        if ( this.state.loading ) {
            form = <LoaderBounce />;
        }
        return (
            <div>
                  <Container>
                      {form}
                  </Container>
                    

            </div>
        )
        
    }
    
}
const mapStateToProps = state => {
    return {
            name:state.name,
            customer:state.customer,
            location:state.location,
            totalCost:state.totalCost,
            status:state.status,
            BillingType:state.BillingType,
            description:state.description,
    }
}
export default connect(mapStateToProps)(AddProjects); 
{/* <Container>
    <Form className=" col-sm-12 mt-5 ml-0">
    <Form.Group controlId="formGridAddress1">
        <Form.Label>* Nom du projet </Form.Label>
        <Form.Control size="lg" type="text" placeholder="Nom du projet"  />
    </Form.Group>

    <Form.Group controlId="formGridAddress2">
        <Form.Label>* Client</Form.Label>
        <Form.Control size="lg" as="select" placeholder="Client" defaultValue="Sélectionner">
          
                <option> Sélectionner</option>
                <option>MSBI</option>
                <option>STAROIL</option>
                <option>ECM+</option>
                <option>BRITSH GAS TUNISIA</option>
                <option>STAR CONTRACTING</option>
                <option>MARAFIQ YANBU</option>
        </Form.Control>
    </Form.Group>
    <Form.Group>
      
      <Form.Label>Emplacement du Projet</Form.Label>
      <Form.Row>
          <ContryRegionComponent/>
           
      </Form.Row>

    </Form.Group>
    <Form.Group id="checkProgress">
        <Form.Check type="checkbox" label="Calculer la progressions à travers les tâches"/>
    </Form.Group>
    <Form.Row>
        <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Type de Facturation</Form.Label>
            <Form.Control as="select">
                <option>Coût fixe</option>
                <option>Par Heure de projet</option>
                <option>Par Heure de tche</option>
            </Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Statut</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
                <option>En cours</option>
                <option>Achevés</option>
                <option>Annulé</option>
                <option>Non Commencé</option>
                <option>En Attente</option>
            </Form.Control>
        </Form.Group>
    </Form.Row>

    <Form.Group controlId="formGridAddress2">
            <Form.Label>Coût total</Form.Label>
            <InputGroup className="mb-3">
            <FormControl
            placeholder="0"
            aria-label="Amount (to the nearest dollar)"
            type="number"
            />
        <InputGroup.Append>
        <InputGroup.Text>DT</InputGroup.Text>
        <InputGroup.Text>0.00</InputGroup.Text>
        </InputGroup.Append>
             </InputGroup>
    </Form.Group>


        <Form.Group controlId="formGridAddress2">
        <Form.Label>Catégorie du projet</Form.Label>
            <Form.Control size="lg" as="select"  defaultValue="Sélectionner">
                    <option> Sélectionner</option>
                    <option>Gaz et Pétrole</option>
                    <option>Traitement de l'eau</option>
                    <option>Energie renouvelable</option>
                    <option>Operation et Maintenance</option>
                    <option>Industrie</option>
            </Form.Control>

        </Form.Group>


<Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description du projet : </Form.Label>
       <TextAreaComponent/>
</Form.Group>
    
<Form.Group id="formGridCheckbox">
        <Form.Check type="checkbox" label="Envoyé l'e-mail de projet créé" />
</Form.Group>

<Form.Group>
    <Button variant="success" type="submit" className="mr-10">
        Ajouter
    </Button>
    <Button variant="danger" type="submit" className="">
        Annuler
    </Button>
</Form.Group>
   
</Form>
</Container>          */}
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
                    // elementType: 'inputNomProjet',
                    // elementConfig: {
                    //     type:"text" ,
                    //     placeholder:"Nom du projet"
                    // },
                    value: '',
                    // validation: {
                    //     required: true
                    //   },
                    //   valid: false
                 },

            categorie: {
                    
                    // elementType: 'SelectCategorieProjet',
                    // elementConfig: {
                    //     type: 'text',
                    //     options: 
                    //     [
                    //         {value: 'oilgaz', displayValue: 'Gaz et Pétrole'},
                    //         {value: 'water', displayValue: "Traitement de l'eau"},
                    //         {value: 'energy', displayValue: 'Energie renouvelable'},
                    //         {value: 'operation', displayValue: 'Operation et Maintenance'},
                    //         {value: 'industry', displayValue: 'Industrie'},
                    //     ]
                        
                    // },
                    value: '',
                    // validation: {},
                    //   valid: false
            },
            location: {
                    // elementType: 'selectLocation',
                    // elementConfig: {
                    //     type: 'text',
                        
                    // },
                    value: '',
                //     validation: {
                //         required: true,
                //         valid: false,
                //         touched: false, 
                //     },
                //       valid: false,
                //       touched: false
                 },
            customer: {
                    // elementType: 'selectClient',
                    // elementConfig: {
                    //     type: 'text',
                    //     placeholder: 'Client',
                    //     options:
                    //     [ //'MSBI', 'STAROIL', 'ECM+', 'BRITSH GAS TUNISIA'
                    //      //,'STAR CONTRACTING'
                    //         {value: 'MSBI', displayValue: 'MSBI'},
                    //         {value: 'STAROIL', displayValue: 'STAROIL'},
                    //         {value: 'ECM+', displayValue: 'ECM+'},
                    //         {value: 'BRITSH GAS TUNISIA', displayValue: 'BRITSH GAS TUNISIA'},
                    //         {value: 'STAR CONTRACTING', displayValue: 'STAR CONTRACTING'},
                    //     ]
                    
                        
                    // },
                    value: '',
                    
                    // validation: {},
                    //   valid: false,
                    //   touched: false
                },
               
            progress: {
                    elementType: 'inputChekProgress',
                    elementConfig: {
                        type: 'check',
                       
                    }
                },
            BillingType: {
                  //elementType: 'selectTypeFacturation',
                //   elementConfig: {
                      
                //     options: 
                //     [
                        
                //       {value: 'fixe', displayValue: 'Coût fixe'},
                //       {value: 'Par Heures de Projet', displayValue: 'Par Heure de projet'},
                //       {value: 'Par Heures de Tache', displayValue: 'Par Heure de tâche '},
                //     ]
                //   },
                  value: '',
                //   validation: {},
                //   valid: true,
                //   touched: false
                   },
                totalCost: {
                    // elementType: 'inputCoupTotal',
                    // elementConfig: {
                    //     type: 'number',
                        
                    // },
                    value: '',
                    // validation: {
                    //     required: true,
                    //     maxLength: 4
                    // },
                    // valid: true,
                    // touched: false
                } ,
                status: {
                   // elementType: 'selectStatus',
                    // elementConfig: {
                    //   options: 
                    //   [
                    //     {value: 'En Cours', displayValue: 'En cours'},
                    //     {value: 'Non Commencé', displayValue: 'Non Commencé'},
                    //     {value: 'En Attente', displayValue: 'En Attente'},
                    //     {value: 'Annulé', displayValue: 'Annulé'},
                    //     {value: 'Fini', displayValue: 'Achevés'},
                    //   ]
                    // },
                    value: '',
                    // validation: {},
                    // valid: true,
                    // touched: false
                  },
              
                description: {
                    // elementType: 'textareaDescription',
                    // elementConfig: {
                    //     type: 'textarea',
                  
                    // },
                    value: '',
                //     validation: {
                //         required: true
                //       },
                //       valid: false
                      
    
                 },
                checkEmail: {
                    elementType: 'inputChekEmail',
                    elementConfig: {
                        type: 'checkbox',
                        
                    },
                },
            }, 
            loading: false,
           
        }
        
    }
    componentDidMount =() => {
    //     //console.log(this.state.projectForm.name.valid)
    //     axios.get('http://eppmdashboard.herokuapp.com/api/projects')
    
    // .then(response => { 
    //    for( let i=0; i<response.data.length; i++ )
    //   {
    //    // console.log(response.data[i].name)
    //     this.setState({
    //         exmpForm:response.data[i].name
    //      }) 
    //   }
     
  
    // });
    
  
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
        const updatedProjectForm = {
          ...this.state.projectForm
        };
        const updatedFormElement = { 
          ...updatedProjectForm[inputIdentifier] 
        };
    
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedProjectForm[inputIdentifier] = updatedFormElement;
        
        let formIsValid = false;
        for( let inputIdentifier in updatedProjectForm) {
          formIsValid = updatedProjectForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({projectForm: updatedProjectForm, formIsValid:formIsValid});
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
            //   ings: state.ingredients,
            //   price: state.totalPrice
            // nom:state.firstName,
            // lastName:state.prenom,
            // email:state.email,
            // tel:state.telephone,
            // salary:state.salair,
            // birthday:state.date,
            // address:state.adresse,
            name:state.name,
            customer:state.customer,
            location:state.location,
            totalCost:state.totalCost,
            status:state.status,
            BillingType:state.BillingType,
            description:state.description,
           // projectData:formData.value
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
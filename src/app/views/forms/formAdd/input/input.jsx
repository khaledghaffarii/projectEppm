import React from 'react';
import { Form,Col,InputGroup,FormControl} from 'react-bootstrap'
import classes from './input.scss';
import TextAreaComponent from '../TextAreaComponent'
import ContryRegionComponent from '../ContryRegionComponent';
import $ from 'jquery';
const input = (props) => {
  
  let inputElement = null;
  const inputClasses = [classes.InputElement];

  if(props.invalid && props.shouldValidate && props.touched)
  {
    inputClasses.push(classes.Invalid);
  }

  let validationError = null;
    if (props.invalid && props.touched) 
    {
        validationError = <p style={{color:'red'}}>  Ce champ est obligatoire ! </p>;
    }

  switch(props.elementType){
    case('inputNomProjet'):
      inputElement = 
      <Form.Group>
      <Form.Label > * Nom du projet </Form.Label>
            <Form.Control
             size="lg" 
             className={inputClasses.join(' ')} 
             {...props.elementConfig}
             value={props.value}
             onChange={props.changed}
             />
        </Form.Group> ;
      break;
      case('SelectCategorieProjet'):
      
      inputElement =
      <Form.Group >
          <Form.Label>Catégorie</Form.Label>
            <Form.Control 
            size="lg" 
            as="select"  
            
            className={inputClasses.join(' ')} 
            {...props.elementConfig}
            value={props.value}
            onChange={props.changed} 
            >
           {props.elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>{option.displayValue}</option>
            
        ))}
         </Form.Control>
      </Form.Group>
      
      break;
      case('selectClient'):
        inputElement =<Form.Group >
        <Form.Label>* Client</Form.Label>
                <Form.Control 
           
                    size="lg" 
                    as="select" 
                    placeholder="Client" 
                    
                    className={inputClasses.join(' ')} 
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed}
                    >
                     {props.elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>{option.displayValue}</option>
        ))}
                </Form.Control>
        </Form.Group> ;
        break;
        case('selectLocation'):
        inputElement =
        <Form.Group>
            <Form.Label>Emplacement</Form.Label>
           
            <Form.Control
             placeholder="location"
             size="lg" 
             className={inputClasses.join(' ')} 
             {...props.elementConfig}
             value={props.value}
             onChange={props.changed}
              />
            
        </Form.Group>;
        break;
        case('inputChekProgress'):
            inputElement=
            <Form.Group id="checkProgress">
                <Form.Check type="checkbox" label="Calculer la progressions à travers les tâches"/>
            </Form.Group>
        break;
       
        case('selectTypeFacturation'):
            inputElement =
            <Form.Row >
                <Form.Group as={Col}>
                <Form.Label>Type de Facturation</Form.Label>
                    <Form.Control 
               
                    id="coup"
                    as="select"
                    className={inputClasses.join(' ')} 
                        {...props.elementConfig}
                        value={props.value}
                        onChange={props.changed} 
                        >
                         {props.elementConfig.options.map(option => (
              <option key={option.value} value={option.value}>{option.displayValue}</option>
        ))}
                    </Form.Control>
                </Form.Group>
            </Form.Row>
            
            
       break;
       case('selectStatus'):
       inputElement =
       <Form.Row >
           <Form.Group as={Col}>
            <Form.Label>Statut</Form.Label>
               <Form.Control 
           
               as="select"
               className={inputClasses.join(' ')} 
                   {...props.elementConfig}
                   value={props.value}
                   onChange={props.changed} 
                   >
                    {props.elementConfig.options.map(option => (
                <option key={option.value} value={option.value}>{option.displayValue}</option>
               
        ))}
        
        
               </Form.Control>
           </Form.Group>
        </Form.Row>
        
        break;
        case('inputCoupTotal'):
            inputElement =
            <Form.Group >
                    <Form.Label id="totalCost">Coût total</Form.Label>
                    <Form.Label id="totalHour">Tarif par Heure</Form.Label>
                    <InputGroup className="mb-3">
                    <FormControl
                   
                    placeholder="0"
                    aria-label="Amount (to the nearest dollar)"
                    type = "number"
                    className={inputClasses.join(' ')} 
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed} 
                    />
                    <InputGroup.Append>
                        <InputGroup.Text>DT</InputGroup.Text>
                        <InputGroup.Text>0.00</InputGroup.Text>
                    </InputGroup.Append>
                    </InputGroup>
                </Form.Group>
            break;
            case('textareaDescription'):
                inputElement=
              
                 <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label> Description du projet : </Form.Label>
                 <Form.Control as="textarea" rows={3}  className={inputClasses.join(' ')} 
                 {...props.elementConfig}
                 value={props.value}
                 onChange={props.changed} />
               </Form.Group>
            break;
            case('inputChekEmail'):
            inputElement=
            <Form.Group id="formGridCheckbox">
                 <Form.Check 
                 type="checkbox" 
                 label="Envoyé l'e-mail de projet créé" 
                 className={inputClasses.join(' ')} 
                 {...props.elementConfig}
                 value={props.value}
                 onChange={props.changed} 
                 />
            </Form.Group>
           break;
    // case ('textarea'):
    //   inputElement = <textarea className={inputClasses.join(' ')} {...props.elementConfig} value={props.value}  onChange={props.changed}/>
    //   break;
    // case ('select'):
    //     inputElement = <select className={inputClasses.join(' ')} value={props.value} onChange={props.changed}>
    //       {props.elementConfig.options.map(option => (
    //          {props.elementConfig.options.map(option => (
        //     <option key={option.value} value={option.value}>{option.displayValue}</option>
        // ))}
    //     ))}</select>
    //     break;
    default:
    //   inputElement = <input className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed} />
    // inputElement = 
    // <Form.Group controlId="formGridAddress1">
    //   <Form.Control
    //        size="lg" 
            
    //        className={inputClasses.join(' ')} 
    //        {...props.elementConfig}
    //        value={props.value}
    //        onChange={props.changed}
    //         />
    //  </Form.Group>;
  }
  $("#totalHour").hide() 
  if( $("#coup option:selected").text() == "Coût fixe"){
  
    $("#totalHour").hide()
  }

  if($("#coup option:selected").text()== "Par Heure de projet"){
    $("#totalHour").show()
    $("#totalCost").hide()
  }

  return(
    <div className={classes.Input}>
      {/* <label className={classes.Label}>{props.label}</label> */}
      {inputElement}
      {validationError}
    </div>
  )
};
  

 
export default input;
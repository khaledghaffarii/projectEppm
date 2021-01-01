import React, { useState, useEffect,useRef  } from "react";
import { Breadcrumb ,SimpleCard} from "matx";
import {NavLink} from 'react-router-dom'
import axios from 'axios';
import { Container,Table ,Button,Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBCol, MDBIcon } from "mdbreact";
import SearchIcon from '@material-ui/icons/Search';
const ProductService = () => {
    const [productList, setProductList] = useState([]);
    useEffect(()=>{
    
        axios.get('http://eppmdashboard.herokuapp.com/api/purchase')
        .then(response => { 
        console.log(response.data)
         setProductList(response.data) 
        });
        
      })
    return (
        <div className="m-sm-30">
            <div  className="mb-sm-30">
                <Breadcrumb
                routeSegments={[
                    { name: "Product and Service", path: "/product" },
                    { name: "Product and Service" }
                ]}
                />
            </div>
            
        <Container className="col-sm-12" responsive="sm">
            <Form.Row >
                <MDBCol md="11" >
                    <div className="input-group md-form form-sm form-1 pl-0">
                        <div className="input-group-prepend">
                        <span className="input-group-text purple lighten-3" id="basic-text1">
                            <SearchIcon className="text-white" icon="search" />
                        </span>
                        </div>
                        <input className="form-control my-0 py-1" type="text" placeholder="Search" aria-label="Search" />
                    </div>
                </MDBCol>
                <Button variant="success" > + Add </Button>
            </Form.Row>
        </Container>
           
        <Container className="col-sm-12 ml-1 mt-5">
        
            <Table responsive="sm" hover >
                <thead>
                <tr>
                
                    <th className="th-sm">Type </th>
                    <th className="th-sm">Produit </th>
                    <th className="th-sm">En Stock </th>
                    <th className="th-sm">Prix de Vente </th>
                    <th className="th-sm">Référence Interne </th>
                    <th className="th-sm">Catégorie </th>
                    <th className="th-sm">Marque </th>
                    <th className="th-sm">TVA</th>

                </tr>
                </thead>

                <tbody>
                {
                    productList.map((productLists, index) =>{
                    //   if(productLists.type == 'materiel' ){
                    //    return <SettingsIcon  />
                    //   }
                    return(
                        
                        <tr>
                                <td key={index.id}> {productLists.type} </td>
                                <td key={index.id} > {productLists.produit} </td>
                                <td key={index.id} >{productLists.quantité}</td>
                                <td key={index.id} >{productLists.prix} TND</td>
                                <td key={index.id} >{productLists.reference_constructeure}</td>
                                <td key={index.id} >{productLists.categorie}</td>
                                <td key={index.id} >{productLists.marque}</td>
                                <td key={index.id} > {productLists.TVA} % </td>
                                        
                        </tr>
                        
                        )
                    })
                }
                </tbody>
            </Table>

        </Container>
        </div>
    )
}

export default ProductService

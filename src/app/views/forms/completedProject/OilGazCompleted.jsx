import React, { Component } from "react";
import { Breadcrumb ,SimpleCard} from "matx";
// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import { Table,TableHead,TableCell,TableBody,IconButton,Icon,TableRow} from "@material-ui/core";

const OilGazCompleted = () => {
  
  const subscribarList = [
    {
      name: " Fourniture de services d'ingénierie",
      Client: "GROUPEMENT SONATRACH AGIP.",
      dateDebut : "18/01/2019",
      dateFin: "31/12/2019 ",
      location: " Hassi Messaoud ALGERIA"
    },
    {
      name: "Installations du terminal de Yanbu",
      Client: "SAUDI ARAMCO.",
      dateDebut : "10/03/2019",
      dateFin: "20/09/2020",
      location: " ROYAUME D'ARABIE SAOUDITE"
    },
    {
      name: "Cadre de réservoir Juaymah pour livraison AH",
      Client: " SAUDI ARAMCO.",
      location: " ROYAUME D'ARABIE SAOUDITE"
    },
    {
      name: "Ingénierie, approvisionnement",
      Client: "Entreprise Tunisienne des Activités Petrolières",
      location: " Tataouine TUNISIA"
      
    },
    {
      name: "lucy brown",
      Client: "ABC Fintech LTD.",
      location: " KINGDOM OF SAUDI ARABIA"
      
    },
    {
      name: "Services généraux d'ingénierie",
      Client: "Amilcar Petroleum Operations",
      location: " Sfax TUNISIA"
    },
  ];
  return (
    
<div className="m-sm-30">

        <div  className="mb-sm-30">
            <Breadcrumb
              routeSegments={[
                { name: "projets achevés", path: "/projects/oil-gaz-acheve" },
                { name: "Gaz et Pétrole " }
              ]}
            />
        </div>

      <SimpleCard title=" Gaz et Pétrole :">
        <Table className="whitespace-pre">

              <TableHead>
                    <TableRow>
                      <TableCell className="px-0">Nom du Projet</TableCell>
                      <TableCell className="px-0">Client</TableCell>
                      <TableCell className="px-0">Location</TableCell>
                    </TableRow>
              </TableHead>

                <TableBody className="row">
                      {subscribarList.map((subscriber, index) => (
                        <TableRow key={index}>
                          <TableCell className="px-0 capitalize" align="left">
                            {subscriber.name}
                          </TableCell>
                          <TableCell className="px-0 capitalize" align="left">
                            {subscriber.Client}
                          </TableCell>
                          <TableCell className="px-0 capitalize">
                            {subscriber.location}
                          </TableCell>
                        </TableRow>
                      ))}
              </TableBody>

         </Table>
      </SimpleCard>
       
</div>
  )
}

export default OilGazCompleted



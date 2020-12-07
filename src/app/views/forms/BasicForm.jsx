import React, { Component } from "react";
import { Breadcrumb ,SimpleCard} from "matx";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Table,TableHead,TableCell,TableBody,IconButton,Icon,TableRow} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {  
    display: "none"
  }
}));

const BasicForm = () => {
  
  const subscribarList = [
    {
      name: " Fourniture de services d'ingénierie",
      Client: "GROUPEMENT SONATRACH AGIP.",
      dateDebut : "18/01/2019",
      facturation: "cout fixe",
      dateFin: "31/12/2019 ",
      location: " Hassi Messaoud ALGERIA"
    },
    {
      name: "Installations du terminal de Yanbu",
      Client: "SAUDI ARAMCO.",
      dateDebut : "10/03/2019",
      facturation: "cout fixe",
      dateFin: "20/09/2020",
      location: " ROYAUME D'ARABIE SAOUDITE"
    },
    {
      name: "Cadre de réservoir Juaymah pour livraison AH",
      Client: " SAUDI ARAMCO.",
      dateDebut: "08/02/2019",
      facturation: "cout fixe",
      dateFin: "09/03/2020",
      location: " ROYAUME D'ARABIE SAOUDITE"
    },
    {
      name: "Ingénierie, approvisionnement",
      Client: "Entreprise Tunisienne des Activités Petrolières",
      dateDebut: "01/01/2019",
      facturation: "cout fixe",
      dateFin: "01/01/2022",
      location: " Tataouine TUNISIA"
      
    },
    {
      name: "lucy brown",
      Client: "ABC Fintech LTD.",
      dateDebut: "01/03/2019",
      facturation: "cout fixe",
      dateFin: "22/02/2023",
      location: " KINGDOM OF SAUDI ARABIA"
      
    },
    {
      name: "Services généraux d'ingénierie",
      Client: "Amilcar Petroleum Operations",
      dateDebut: "04/09/2019",
      facturation: "cout fixe",
      dateFin: "12/12/2020",
      location: " Sfax TUNISIA"
    },
  ];
  const classes = useStyles();
  const [state, setState] = React.useState({
    showOilgaze: false
    
  });
  const handleClick = () => {
    const isVisible = state.showOilgaze;
    setState({
      showOilgaze: !isVisible
      
    });
  };
  return (
    
<div className="m-sm-30">

        <div  className="mb-sm-30">
            <Breadcrumb
              routeSegments={[
                { name: "projets", path: "/projects" },
                { name: "projet en cours" }
              ]}
            />
        </div>
      <SimpleCard title="Projets En Cours">
        
          <Button  variant="contained" color="secondary" className={classes.button} onClick={handleClick} >
          Oil & Gas
          </Button>
          <Button  variant="contained" color="secondary" className={classes.button}>
          Water Treatment
          </Button>
          <Button  variant="contained" color="secondary" className={classes.button}>
          Renewable Energies
          </Button>
          <Button  variant="contained" color="secondary" className={classes.button}>
          Operation & Maintenance
          </Button>

      </SimpleCard>
        {( state.showOilgaze ? <div className="w-full overflow-auto">
          <Table className="whitespace-pre">
            <TableHead>
              <TableRow>
                <TableCell className="px-0">Nom du Projet</TableCell>
                <TableCell className="px-0">Client</TableCell>
                <TableCell className="px-0">Date de début</TableCell>
                <TableCell className="px-0">Date de fin</TableCell>
                <TableCell className="px-0">Type de Facturation</TableCell>
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
                  <TableCell className="px-0 capitalize" align="left">
                    {subscriber.dateDebut}
                  </TableCell>
                  <TableCell className="px-0 capitalize">
                    {subscriber.dateFin}
                  </TableCell>
                  <TableCell className="px-0 capitalize">
                    {subscriber.facturation}
                  </TableCell>
                  <TableCell className="px-0 capitalize">
                    {subscriber.location}
                  </TableCell>
                 
                </TableRow>
              ))}
            </TableBody>
          </Table>
      </div> :null )}
</div>
  )
}

export default BasicForm



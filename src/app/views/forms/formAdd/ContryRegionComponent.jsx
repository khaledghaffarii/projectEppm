import React, { Component } from 'react'

import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
//import classes from './ContryRegionComponent.scss'
export class ContryRegionComponent extends Component {
    constructor (props) {
        super(props);
        this.state = { country: '', region: '',classes:"width: 250em,font-size:12em" };
      }
      selectCountry (val) {
        this.setState({ country: val });
      }
    
      selectRegion (val) {
        this.setState({ region: val });
      }
    render() {
        const { country, region,classes } = this.state;
        return (
          <div style={{display:'flex'}}>
            <CountryDropdown
              style={{fontFamily:'fantasy',width:'30em',fontSize:'1em',height:'2.5em',marginRight:'0.5em'}}
              value={country}
              onChange={(val) => this.selectCountry(val)} 
              classes={classes}  />
            <RegionDropdown
              style={{fontFamily:'fantasy',fontSize:'1em',width:'9em'}}
              country={country}
              value={region}
              onChange={(val) => this.selectRegion(val)} 
              classes={classes}  />
          </div>
          )
    }
}

export default ContryRegionComponent

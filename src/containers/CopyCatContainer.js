import React from 'react';
import { CopyCat } from '../components/CopyCat';

export class CopyCatContainer extends React.Component {
    constructor(props) {
    super(props);

    this.state = { 
      copying: true,
      input: '',
      isPaul: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.toggleTape = this.toggleTape.bind(this);
    this.changePaul = this.changePaul.bind(this);
  }

  handleChange (e){
    this.setState({input: e.target.value});
  }

  toggleTape() {
    this.setState({copying: !this.state.copying})
  }

  changePaul (){
    this.setState({isPaul: !this.state.isPaul})
  }
  
  render() {
    const copying = this.state.copying;
    const toggleTape = this.toggleTape;
    
    return (
      <CopyCat 
        copying={copying} 
        toggleTape={toggleTape} 
        input={this.state.input} 
        handleChange={this.handleChange} 
        name={null} 
        isPaul={this.state.isPaul}
        changePaul={this.changePaul}/>
    );
  };
}




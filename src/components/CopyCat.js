import React from 'react';
import { styles } from '../styles';
import PropTypes from 'prop-types';
import { Checkbox } from 'semantic-ui-react';
//import 'semantic-ui-css/semantic.min.css';

const images = {
  copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
  quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png',
  paul: 'https://www.meme-arsenal.com/memes/d2fb50660ca819c5e5b63bda38a8fe26.jpg'
};


export class CopyCat extends React.Component {  
  render() {
    const copying = this.props.copying;
    const toggleTape = this.props.toggleTape;
    
    return (
      <div style = {this.props.isPaul?styles['divStylesAlternative']:styles['divStyles']}>
        <div>
        <i class="fa-solid fa-cat"></i>
        <Checkbox toggle  onClick={this.props.changePaul}/>
        <i class="fa-solid fa-crow"></i>
         </div>
        <h1 style = {{ marginBottom: 10, fontSize: 100}}>Copy {this.props.isPaul? 'Parrot Paul':'Cat Tom'}</h1>
		<input type='text' value={this.props.input} onChange={this.props.handleChange}/>
        <img 
          style = {styles['imgStyles']}
          alt='cat'
          src={this.props.isPaul? images.paul: copying ? images.copycat : images.quietcat}
          onClick={this.props.isPaul?null:toggleTape}
        />
        <p>
          {this.props.isPaul?'You would never shut him up!!':copying ? this.props.input : ''}
        </p>
      </div>
    );
  };
}

CopyCat.propTypes = {
  copying: PropTypes.bool.isRequired,
  toggleTape: PropTypes.func.isRequired,
  input: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

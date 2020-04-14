import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';
import '../css/Header.css';

//Définir notre composant header
class Header extends Component {
    render(){
        return(
           <div className="header">
               <FontAwesome className="header--movie" name="film" size="5x" />
               <h3>RoFlix</h3>
               <FontAwesome className='header--herat' name="heart" size='5x' />
               <div className='header--badge'>{this.props.badge}</div>
           </div>
        )
    }
}
export {Header};
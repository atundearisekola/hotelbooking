import '../../sass/main.module.scss';
import react, {Component} from 'react'
import Header from './Header'
import SideNav from './SideNav'
import HotelView from './HotelView'

export default class Layout extends Component {
  render(){
    return (
      <div className="container"> 
      <Header/>
      <div className="content">
    
      <SideNav/>
      <HotelView/> 
    
      </div>
      
      </div>
    );
  }
}
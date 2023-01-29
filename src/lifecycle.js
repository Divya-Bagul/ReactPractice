import React from 'react';
import ReactDOM from 'react-dom/client';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {favoritecolor: "red"};
  }
  componentDidMount() {
    console.log('componenet did mount');
    // setTimeout(() => {
    //   this.setState({favoritecolor: "yellow"})
    // }, 1000)
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
    // this.setState({favoritecolor: "yellow"})
    
  }
  changecolor =()=>{

    if(this.state.favoritecolor != 'blue'){
            this.setState({favoritecolor:"blue"})
    }
  }
  shouldComponentUpdate(nextProps) {
    console.log('shouldComponentUpdate');
    return true;
    // Rendering the component only if 
    // passed props value is changed
  
    // if (nextProps.value !== this.props.value) {
    //   return true;
    // } else {
    //   return false;
    // }
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
      // Displaying the previous state
      console.log('getSnapshotBeforeUpdate');
      console.log(prevState);
      return prevState;
   } 
   componentWillUnmount() {
    console.log('componentWillUnmount');
  }
 
  render() {
    return (
        <div>
            <h1>My Favorite Color is {this.state.favoritecolor}</h1>
            <button onClick={this.changecolor}>update color</button>
      </div>
    );
  }
}
export default Header;
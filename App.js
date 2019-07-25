
import React, { Component } from 'react';

class Table extends Component {
  
   
   constructor(props) {
      super(props) 
      this.state = { 
         element: [
            { FirstName:'Mohammed',Lastname: 'Fahad', University: 'KSU', Major: 'IT',CV:'Download' },
            { FirstName:'khaled', Lastname: 'Ali',  University: 'KSU', Major: 'HR',CV:'Download' },
            { FirstName:'noura', Lastname: 'Saad',  University: 'PNU', Major: 'HR' ,CV:'Download'},
            { FirstName:'sara', Lastname: 'Asad',  University: 'PNU', Major: 'IT' ,CV:'Download'}
         ]
      }
   }

   render() { 
      return (
         <div>
            <h1>Preview the uploaded CV's </h1>
         </div>
      )
   }
   renderTableData() {
    return this.state.element.map((eleme, index) => {
       const { FirstName, Lastname, University, Major ,CV} = eleme
       return (
          <tr key={FirstName}>
             <td>{FirstName}</td>
             <td>{Lastname}</td>
             <td>{University}</td>
             <td>{Major}</td>
             <td>{CV}</td>
          </tr>
       )
    })
 }

 render() {
    return (
       <div>
          <h1 id='title'>Preview the uploaded CV's</h1>
          <table id='CVs'>
             <tbody>
                {this.renderTableData()}
             </tbody>
          </table>
       </div>
    )
 }
}

export default Table;
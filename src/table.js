import React from 'react';
import ReactDOM from 'react-dom';
import './table.css';
import ping from 'ping';
//import {test} from './newping.js'
import axios from 'axios'
//import pings from './pingstat'
import myJson from '../src/serverstatus.json';



export default class Table extends React.Component {
    
    constructor(props) {
       super(props)
       
       this.state = { 
          servers: [
             { No: 1, ERP: 'TopShelf', Hostname: myJson['Topshelf'][0].name, Region: myJson['Topshelf'][0].region,Status: myJson['Topshelf'][0].status},
             { No: 2, ERP: 'Topshelf', Hostname: myJson['Topshelf'][1].name, Region: myJson['Topshelf'][1].region,Status: myJson['Topshelf'][1].status},
             { No: 3, ERP: 'Topshelf', Hostname: myJson['Topshelf'][2].name, Region: myJson['Topshelf'][2].region,Status: myJson['Topshelf'][2].status},
             { No: 4, ERP: 'Topshelf', Hostname: myJson['Topshelf'][3].name, Region: myJson['Topshelf'][3].region,Status: myJson['Topshelf'][3].status}
          ],
          
       }
    }
 
    renderTableHeader() {
       let header = Object.keys(this.state.servers[0])
       return header.map((key, index) => {
          return <th key={index}>{key.toUpperCase()}</th>
       })
    }
 
    renderTableData() {
       return this.state.servers.map((server, index) => {
        const { No, ERP, Hostname, Region, Status } = server //
          
          return (
             <tr key={No}>
                <td>{No}</td>
                <td>{ERP}</td>
                <td>{Hostname}</td>
                <td>{Region}</td>
                <td>{Status}</td>
             </tr>
          )
       })
    }

    refreshPage() {
        window.location.reload(false);
      }


    pingstatus(){
            var hosts = ['192.168.1.1', 'google.com', 'yahoo.com'];
            hosts.forEach(function(host){
                ping.sys.probe(host, function(isAlive){
                    var msg = isAlive ? 'host ' + host + ' is alive' : 'host ' + host + ' is dead';
                    console.log(isAlive)
                    console.log(msg);
                });
            });
            
    }

    getCustomerData() {
        axios.get('/src/serverstatus.json').then(response => {
          //this.setState({customerList: response})
          console.log(response.data)
          return response
        })
        
      };
    
   

 
    render() {
        const timestamp = Date.now();
        var time = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp)
        return (
           <div>
             <h1 id='title'>Servers and their current status</h1>
             <h3 className="App-title">Data last refreshed on {time} </h3>
             <table id='servers'>
                <tbody>
                   <tr>{this.renderTableHeader()}</tr>
                   {this.renderTableData()}  
                </tbody>
             </table>
             <div></div>
            <div> <button onClick={this.refreshPage}>Click to reload!</button> </div>
            
          </div>
         
       )
    }
 }
 
 ReactDOM.render(<Table />, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import './table.css';
import ping from 'ping';
import {pingstat} from './pingstat.js'
//import pings from './pingstat'


export default class Table extends React.Component {
    
    constructor(props) {
       super(props)
       this.state = { 
          servers: [
             { No: 1, ERP: 'TopShelf', Hostname: 'LX150TS01', Region: 'Central Seafood',Status: ''} ,
             { No: 2, ERP: 'Topshelf', Hostname: 'LX289TS01', Region: 'Incredible',Status:''},
             { No: 3, ERP: 'Topshelf', Hostname: 'LX315TS01', Region: 'North Carolina',Status: ''},
             { No: 5, ERP: 'Topshelf', Hostname: 'LX450TS01', Region: 'South Carolina',Status: ''}
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


    pingstatus(){
            /* var ans
            ans = ping.sys.probe('10.132.41.27', function(isAlive){
                var msg
                //if(isAlive){
                  //  msg =  'UP'
                //}
                //else{
                  //  msg =  'DOWN'
                //}
                console.log(isAlive)
               return msg
            })
            console.log('result is: '+ans)
            return ans */
            var hosts = ['192.168.1.1', 'google.com', 'yahoo.com'];
            hosts.forEach(function(host){
                ping.sys.probe(host, function(isAlive){
                    var msg = isAlive ? 'host ' + host + ' is alive' : 'host ' + host + ' is dead';
                    console.log(isAlive)
                    console.log(msg);
                });
            });
            
    }
    
    
 
    render() {
        const timestamp = Date.now();
        var time = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp)
        return (
           <div>s
             <h1 id='title'>Servers and their current status</h1>
             <h3 className="App-title">Data last refreshed on {time} </h3>
             <table id='servers'>
                <tbody>
                   <tr>{this.renderTableHeader()}</tr>
                   {this.renderTableData()}  
                </tbody>
             </table>
            <p></p>

          </div>
         
       )
    }
 }
 
 ReactDOM.render(<Table />, document.getElementById('root'));

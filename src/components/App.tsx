import React from 'react';
import './App.css';
import { DataService } from '../services/DataService';
import Players from './player/Players';
import RegisterPlayer from './player/RegisterPlayer';
// import { DeletePlayers } from './player/DeletePlayers';

export class App extends React.Component {

  private dataService: DataService = new DataService();

  render() {
    return (
      <div className="wrapper">
        <h1>Better Tom</h1>
        <RegisterPlayer dataService={this.dataService}/>
        <Players dataService={this.dataService} />
        {/* <DeletePlayers dataService={this.dataService} /> */}
      </div>
    );
  }
}
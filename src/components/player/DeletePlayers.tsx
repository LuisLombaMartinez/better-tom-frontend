import { Component } from "react";
import { DataService } from "../../services/DataService";

export interface DeletePlayersProps {
    dataService: DataService
}

export class DeletePlayers extends Component<DeletePlayersProps, {}> {

    private async deletePlayers() {
        await this.props.dataService.deletePlayers();
        window.location.reload();
    }

    render() {
        return (
            <button onClick={this.deletePlayers}>Delete all players</button>
        );
    }
    
}
import { Component } from "react";
import { DataService } from "../../services/DataService";
import { Player } from "../../model/Model";
import PlayerComponent from "./PlayerComponent";

interface PlayersState {
    players: Player[]
}

interface PlayersProps {
    dataService: DataService
}

export default class Players extends Component<PlayersProps, PlayersState> {

    constructor(props: PlayersProps) {
        super(props);
        this.state = {
            players: []
        }
    }

    async componentDidMount() {
        const players = await this.props.dataService.getPlayers();
        this.setState({ players: players });
    }

    private renderPlayers() {
        const rows: any = [];
        for (const player of this.state.players) {
            console.log(player);
            rows.push(
                <PlayerComponent
                    player={player}
                />
            );
        }
        return rows;
    }

    render() {
        return (
            <div>
                <h2>Players</h2>
                <ul>
                    {this.renderPlayers()}
                </ul>
            </div>
        );
    }

}
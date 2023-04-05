import { Component } from "react";
import { Player } from "../../model/Model";

interface PlayerComponentProps {
    player: Player
}

export default class PlayerComponent extends Component<PlayerComponentProps> {

    render() {
        return (
            <li> <a href={this.props.player.team}> {this.props.player.player} </a></li>
        );
    }
}
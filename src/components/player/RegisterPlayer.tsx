import { Component, SyntheticEvent } from "react";
import { DataService } from "../../services/DataService";

interface CustomEvent {
    target: HTMLInputElement
}

export interface RegisterPlayerProps {
    dataService: DataService
}

export interface IRegisterPlayerState {
    player?: string,
    team?: string
}

export default class RegisterPlayer extends Component<RegisterPlayerProps, IRegisterPlayerState> {

    state: IRegisterPlayerState = {
        player: '',
        team: ''
    }

    private setPlayer(event: CustomEvent) {
        this.setState({ player: event.target.value });
    }

    private setTeam(event: CustomEvent) {
        this.setState({ team: event.target.value });
    }

    private async handleSubmit(event: SyntheticEvent) {
        event.preventDefault();
        const stateClone = { ...this.state };

        try {
            await this.props.dataService.registerPlayer(stateClone);
            this.setState({ player: '', team: '' });
            window.location.reload();
        } catch (error: any) {
            alert(`Error while creating player: ${error.message}`);
        }
    }

    render() {
        return (
            <div className="RegisterPlayerComponent">
                <h2>Register a new player</h2>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <label htmlFor="player">Player
                        <input name="player" id="player" value={this.state.player} onChange={e => this.setPlayer(e)} />
                    </label>
                    <br/>
                    <label htmlFor="team">Team
                        <input type="text" id="team" value={this.state.team} onChange={e => this.setTeam(e)} />
                    </label>
                    <br/>
                    <input type="submit" value="Register" />
                </form>
            </div>
        );
    }
}
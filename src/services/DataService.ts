import { Player } from "../model/Model";
import { config as appConfig } from "./config";
import { IRegisterPlayerState } from "../components/player/RegisterPlayer";

export class DataService {
    
    public async deletePlayers() {
        const requestUrl = appConfig.api.allPlayersUrl;
        const requestResponse = await fetch(requestUrl, {
            method: 'DELETE',
        });
        return await requestResponse.json();
    }

    public async getPlayers(): Promise<Player[]> {
        const requestUrl = appConfig.api.playersUrl;
        const requestResponse = await fetch(requestUrl, {
            method: 'GET',
        });
        const response = await requestResponse.json();
        return response;
    }

    public async registerPlayer(player: IRegisterPlayerState): Promise<Player> {
        const requestUrl = appConfig.api.playersUrl;
        const requestResponse = await fetch(requestUrl, {
            method: 'POST',
            body: JSON.stringify(player)
        });
        const response = await requestResponse.json();
        return response;
    }
}
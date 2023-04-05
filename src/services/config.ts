const apiUrl = 'https://q5so4m9yka.execute-api.eu-west-1.amazonaws.com/prod/';

export const config = {
    REGINON: 'eu-west-1',
    api: {
        baseUrl: apiUrl,
        playersUrl: `${apiUrl}teams`,
        allPlayersUrl: `${apiUrl}teams/all`,
    }
};
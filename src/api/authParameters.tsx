import axiosClient from "./axiosAPI";
import axiosClientAccount from "./axiosClientAccount";

const authParameters = {
    getToken: async () => {
        let url = '';
        let data = {
            grant_type: 'client_credentials',
            client_id: process.env.REACT_APP_CLIIENT_ID,
            client_secret: process.env.REACT_APP_CLIENT_SECRET
        };
        const response: any = await axiosClientAccount.post(url, data);
        return response;
    }
};
export default authParameters;
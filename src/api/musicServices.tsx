import { ParamsType } from "../contants/type";
import authParameters from "./authParameters"
import axiosClient from "./axiosAPI";

const musicServices = {
    getIdAdmin: async () => {
        let url = '/v1/me';
        const token_2 = await authParameters.getToken().then(res => res.access_token);
        const token = 'BQAVmgK0AobJepLY9nzZoHi8V9t1dImuir4N3gzzafLwE7azs55dVinNml3KpiaRnTqVf-mvlAd5KEKjfcLCOyjz95-AmX2eZ37GJaYq6ozfIDjrPD3vEn3C8GMCG-cf45rzWLtL1KKXel_fBFYgx6Gzg4He8-7GDN79Xah9vXGbawxaf9ofWh3FHBakhzWG_ZQQVTESjSk6lEJBXiFdRzmNAD-Eg4Svl33rN-2Zqdim9mMq2Oq0KcaJ_a0BIG4RA2AjtbhuO90ArXy-obK73Yio';
        console.log('toen_1 ====   ', token);
        console.log('toen_2 ==     ', token_2);
        const headers = {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
        };
        const data = await axiosClient.get(url, { headers });
        return data;
    },
    getTrack: async (id?: string) => {
        let url = `v1/tracks/${id}`;
        const token = await authParameters.getToken().then(res => res.access_token);
        const headers = {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
        };
        const data: any = await axiosClient.get(url, { headers });
        return data;
    },
    getCurrentUsersPlaylists: async (params?: any) => {
        let url = `v1/users/31oyyfvngktz2bfwsbqoplcs243m/playlists?offset=${params ? params.offset : 0}&limit=${params ? params.limit : 20}`;
        const token = await authParameters.getToken().then(res => res.access_token);
        const headers = {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
        };
        const data: any = await axiosClient.get(url, { headers });
        return data.items;
    },
    getCategoriesPlaylists: async (category: string | undefined, params: ParamsType) => {
        let url = `v1/browse/categories/${category}/playlists?offset=${params.offset}&limit=${params.limit}`;
        const token = await authParameters.getToken().then(res => res.access_token);
        const headers = {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
        };
        const data: any = await axiosClient.get(url, { headers });
        return data;
    },
    getPlayLists: async (id: string, params: object) => {
        let url = `v1/playlists/${id}?offset=0&limit=20`;
        const token = await authParameters.getToken().then(res => res.access_token);
        const headers = {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
        };
        const data: any = await axiosClient.get(url, { headers });
        return data;
    },
    getArtist: async (id: string) => {
        let url = `v1/artists/${id}`;
        const token = await authParameters.getToken().then(res => res.access_token);
        const headers = {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
        };
        const data: any = await axiosClient.get(url, { headers });
        return data;
    },
    getRecommendation: async (query: string, params?: any) => {
        let url = `v1/recommendations?${query}&offset=${params.offset}&limit=${params.limit}`;
        const token = await authParameters.getToken().then(res => res.access_token);
        const headers = {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
        };
        const data: any = await axiosClient.get(url, { headers });
        return data;
    },

}

export default musicServices;
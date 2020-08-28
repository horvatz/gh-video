import axios from 'axios'

const apiKey = "AIzaSyDsYheDDVfl-7j3Oa4Lt3pGol8D8s4_zo8"

const apiClient = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getCountry() {
        return apiClient.get("/playlists?part=snippet%2CcontentDetails&channelId=UCaNAZAJLNhPypJIhgCHByiQ&maxResults=40&fields=items", {
            params: {
                key: apiKey
            }
        });
    },
    getVideoList(id) {
        return apiClient.get(`/playlistItems?part=snippet%2CcontentDetails&playlistId=${id}&fields=items`, {
            params: {
                key: apiKey
            }
        })
    },
    getVideoInfo(id) {
        return apiClient.get(`/videos?part=snippet%2Cstatistics&id=${id}&fields=items`, {
            params: {
                key: apiKey
            }
        })
    }
}

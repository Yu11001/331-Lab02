import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/Yu11001/331-Lab2-db',
    withCredentials: false,
    headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default{
    getEvents(){
        return apiClient.get('/events')
    },
    getEvent(id:number){
        return apiClient.get('/events/' + id)
    }
}
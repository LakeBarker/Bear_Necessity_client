import apiUrl from '../apiConfig'
import axios from 'axios'

export const postEvent = (data) => {
    console.log("this is the timeline", data.title)
    return axios({
        method: 'POST',
        url: apiUrl + '/events/',
        data: {
            timeline : {
                title : data.title,
                description : data.description,
                events : data.events
            }
        }
    })
}

export const eventIndex = (user) => {
    return axios({
        method: 'GET',
        url: apiUrl + '/events',
    })
}

export const eventShow = (user, id) => {
    return axios ({
        method: 'GET',
        url: apiUrl + '/events/' + id,
    })
}

export const eventUpdate = (data, user, id) => {
    return axios({
        method: 'PATCH',
        url: apiUrl = '/events/' + id + '/',
        data : {
            timeline : {
                title : data.title,
                description : data.description,
                events : data.events,
            }
        },
        headers: {
            Authorization: `Token token=${user.token}`,
        },
    })
}

export const eventDelete = (user, id) => {
	return axios({
		method: 'DELETE',
		url: apiUrl + '/events/' + id,
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}
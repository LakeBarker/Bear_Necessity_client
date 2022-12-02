import apiUrl from '../apiConfig'
import axios from 'axios'

export const postTimeline = (data) => {
    console.log("this is the timeline", data.title)
    return axios({
        method: 'POST',
        url: apiUrl + '/timelines/',
        data: {
            timeline : {
                title : data.title,
                description : data.description,
                events : data.events
            }
        }
    })
}

export const timelineIndex = (user) => {
    return axios({
        method: 'GET',
        url: apiUrl + '/timelines',
    })
}

export const timelineShow = (user, id) => {
    return axios ({
        method: 'GET',
        url: apiUrl + '/timelines/' + id,
    })
}

export const timelineUpdate = (data, user, id) => {
    return axios({
        method: 'PATCH',
        url: apiUrl = '/timelines/' + id + '/',
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

export const timelineDelete = (user, id) => {
	return axios({
		method: 'DELETE',
		url: apiUrl + '/timelines/' + id,
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}
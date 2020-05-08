import axios from '@/api/axios'

const getBannerData = () => {
    return axios.request({
        url: 'banner',
        method: 'GET'
    })
}

const getUserData = () => {
    return axios.request({
        url: 'user',
        method: 'GET'
    })
}

const getPosData = () => {
    return axios.request({
        url: 'pos',
        method: 'GET'
    })
}

const getIndexData = () => {
    return axios.request({
        url: 'index',
        method: 'GET'
    });
}

const getRestaurantsData = () => {
    return axios.request({
        url: 'restaurants',
        method: 'GET'
    })
}

export { getBannerData, getUserData, getPosData, getIndexData, getRestaurantsData }
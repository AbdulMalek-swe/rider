import { privateRequest } from "../config/axios.config";


/* list of resource */
export const index = async (queryParams) => {
    return await privateRequest.get(`/vendor/product?${queryParams}`);
};

/* resource store */
export const store = async(data) => {
    return await privateRequest.post('/vendor/product', data)
}

/* resource show */
export const show = async(id) => {
    return await privateRequest.get(`/vendor/product/${id}`)
}

/* reosurce update */
export const update = async(id, data) => {
    return await privateRequest.post(`/vendor/product/${id}`, data)
}

/* resource destory */
export const destroy = async (id) => {
    return await privateRequest.delete(`/vendor/product/${id}`)
}

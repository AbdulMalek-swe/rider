import { privateRequest } from "../config/axios.config";


/* list of resource */
export const index = async () => {
    return await privateRequest.get(`/vendor/inventory`);
};

/* resource store */
export const store = async(id,data) => {
    return await privateRequest.post(`/vendor/inventory/${id}`, data)
}

/* resource show */
export const show = async(id) => {
    return await privateRequest.get(`/vendor/inventory/${id}`)
}

/* reosurce update */
export const update = async(id, data) => {
    return await privateRequest.post(`/vendor/inventory/${id}`, data)
}

/* resource destory */
export const destroy = async (id) => {
    return await privateRequest.delete(`/vendor/inventory/${id}`)
}



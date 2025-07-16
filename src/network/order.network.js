import { privateRequest } from "../config/axios.config";


/* list of resource */
export const index = async (queryParams) => {
    return await privateRequest.get(`/rider/order?${queryParams}`);
};
 

/* resource show */
export const show = async(id) => {
    return await privateRequest.get(`/rider/order/${id}`)
}

/* reosurce update */
export const update = async(id, data) => {
    return await privateRequest.post(`/vendor/order/${id}`, data)
}

 
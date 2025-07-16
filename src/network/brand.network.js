import { privateRequest } from "../config/axios.config";

/* list of resource */
export const index = async () => {
    return await privateRequest.get(`/vendor/brand`);
};

/* resource store */
export const store = async(data) => {
    return await privateRequest.post('/vendor/brand', data)
}

/* resource show */
export const show = async(id) => {
    return await privateRequest.get(`/vendor/brand/${id}`)
}

/* reosurce update */
export const update = async(id, data) => {
    return await privateRequest.post(`/vendor/brand/${id}`, data)
}

/* resource destory */
export const destroy = async (id) => {
    return await privateRequest.delete(`/vendor/brand/${id}`)
}

/** category list */
export const categoryList = async () => {
    return await privateRequest.get(`/vendor/color/`);
};


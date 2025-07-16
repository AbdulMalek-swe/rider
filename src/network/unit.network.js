import { privateRequest} from '../config/axios.config'

/* list of resource */
export const index = async () => {
    return await privateRequest.get(`/vendor/unit`);
};

/* resource store */
export const store = async(data) => {
    return await privateRequest.post('/vendor/unit', data)
}

/* resource show */
export const show = async(id) => {
    return await privateRequest.get(`/vendor/unit/${id}`)
}

/* reosurce update */
export const update = async(id, data) => {
    return await privateRequest.post(`/vendor/unit/${id}`, data)
}

/* resource destory */
export const destroy = async (id) => {
    return await privateRequest.delete(`/vendor/unit/${id}`)
}

/** category list */
export const categoryList = async () => {
    return await privateRequest.get(`/vendor/unit/`);
};


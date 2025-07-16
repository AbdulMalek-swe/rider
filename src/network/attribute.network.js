import { privateRequest} from '../config/axios.config'

/* list of resource */
export const index = async () => {
    return await privateRequest.get(`/vendor/attribute`);
};

/* resource store */
export const store = async(data) => {
    return await privateRequest.post('/vendor/attribute', data)
}

/* resource show */
export const show = async(id) => {
    return await privateRequest.get(`/vendor/attribute/${id}`)
}

/* reosurce update */
export const update = async(id, data) => {
    return await privateRequest.post(`/vendor/attribute/${id}`, data)
}

/* resource destory */
export const destroy = async (id) => {
    return await privateRequest.delete(`/vendor/attribute/${id}`)
}

/** category list */
export const categoryList = async () => {
    return await privateRequest.get(`/vendor/color/`);
};


import { privateRequest } from "../config/axios.config";

/* list of resource */
export const index = async () => {
    return await privateRequest.get(`/rider/profile`);
};
export const update = async (data) => {
    return await privateRequest.post(`/rider/update-profile`,data);
};




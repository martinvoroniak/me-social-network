import {GetItemsType, instance} from "./api";

export const usersAPI = {
    requestUsers(currentPage = 1, pageSize = 10) {
        return instance.get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data);
    }
}


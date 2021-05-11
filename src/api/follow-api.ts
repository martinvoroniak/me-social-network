import {instance, APIResponseType} from "./api";

export const followAPI = {
    follow(userId: number) {
        return instance.post<APIResponseType>(`follow/${userId}`).then(res => res.data);
    },
    unfollow(userId: number) {
        return instance.delete(`unfollow/${userId}`).then(res => res.data) as Promise<APIResponseType>;
    }
}
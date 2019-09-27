import { fetchUser, loading, loaded } from '../../components/UserProfile/redux/action';
import { fetchUsers } from '../../components/Home/redux/action';

export const actionCreators = {
    fetchUser,
    fetchUsers,
    loading,
    loaded
}

export type AllActionCreators = typeof actionCreators;

export type PickActionCreators<AC extends keyof AllActionCreators> = {
    [K in Extract<AC, keyof AllActionCreators>]: AllActionCreators[K]
}
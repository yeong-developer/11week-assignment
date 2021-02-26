import { getUserProfile } from '../../api/github';
import createAsyncThunk from '../../lib/createAsyncThunk';
import { getUserProfileAsync } from './actions';

// export function getUserProfileThunk(username: string) {
//     return async (dispatch: Dispatch) => {
//         const {request, success, failure} = getUserProfileAsync;
//         dispatch(request());
//         try {
//             const userProfile = await getUserProfile(username);
//             dispatch(success(userProfile));
//         } catch (e) {
//             dispatch(failure(e));
//         }
//     };
// }

export const getUserProfileThunk = createAsyncThunk(
    getUserProfileAsync,
    getUserProfile
);
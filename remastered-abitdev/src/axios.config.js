import axios from "axios";
import { Auth, Amplify } from "aws-amplify";
const axiosApiInstance = axios.create();

axiosApiInstance.interceptors.request.use(
	async (config) => {
		const user = await Auth.currentSession();
		const id_token = user.getIdToken().getJwtToken();
		console.log(user);
		console.log(id_token);
		config.headers = {
			Authorization: id_token,
		};
		return config;
	},
	(error) => {
		Promise.reject(error);
	}
);

export default axiosApiInstance;

// axiosApiInstance.interceptors.response.use(
// 	(response) => {
// 		return response;
// 	},
// 	async function (error) {
// 		const originalRequest = error.config;
// 		if (error.response.status === 403 && !originalRequest._retry) {
// 			originalRequest._retry = true;
// 			const access_token = await refreshAccessToken();
// 			axios.defaults.headers.common["Authorization"] =
// 				"Bearer " + access_token;
// 			return axiosApiInstance(originalRequest);
// 		}
// 		return Promise.reject(error);
// 	}
// );

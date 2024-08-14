import apiRequest from './httpService';

export async function getOtp(data) {
  return await apiRequest
    .post('/user/get-otp', data)
    .then(({ data }) => data.data);
}

export async function checkOtp(data) {
  return await apiRequest
    .post('/user/check-otp', data)
    .then(({ data }) => data.data);
}

export function completeProfile(data) {
  return apiRequest
    .post('/user/complete-profile', data)
    .then(({ data }) => data.data);
}
export async function getUser() {
  return await apiRequest.get('/user/profile').then(({ data }) => data.data);
}
export function logoutApi() {
  return apiRequest.post('/user/logout').then(({ data }) => data.data);
}

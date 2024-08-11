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

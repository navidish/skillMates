import apiRequest from './httpService';

export async function getOwnerProjectsApi() {
  return await apiRequest
    .get('/project/owner-projects')
    .then(({ data }) => data.data);
}

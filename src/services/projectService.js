import apiRequest from './httpService';

export async function getOwnerProjectsApi() {
  return await apiRequest
    .get('/project/owner-projects')
    .then(({ data }) => data.data);
}

export async function createProjectApi(data) {
  return await apiRequest
    .post(`/project/add`, data)
    .then(({ data }) => data.data);
}

export async function editProjectApi({ id, newProject }) {
  return await apiRequest
    .patch(`/project/update/${id}`, newProject)
    .then(({ data }) => data.data);
}
export async function removeProjectApi(id) {
  return await apiRequest
    .delete(`/project/${id}`)
    .then(({ data }) => data.data);
}

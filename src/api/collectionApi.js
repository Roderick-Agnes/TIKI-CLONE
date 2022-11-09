import axiosClient from "./axiosClient";

const collectionApi = {
  async getCollections(params) {
    const newParams = { ...params };
    const url = `/collections/`;
    const res = await axiosClient.get(url, { params: newParams });
    return res;
  },
  gettCollectionById(id) {
    const url = `/collections/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = "/collections";
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/collections/${data._id}`;
    return axiosClient.patch(url, data);
  },
  remove(id) {
    const url = `/collections/${id}`;
    return axiosClient.delete(url);
  },
};

export default collectionApi;

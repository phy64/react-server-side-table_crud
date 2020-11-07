import axios from "axios";

const http = axios.create({
	baseURL: "https://mock-up-data.herokuapp.com/api/admins",
	headers: {
		"Content-type": "application/json"
	}
});

const get = id => {
  return http.get(`/${id}`);
};

const create = data => {
  return http.post("", data);
};

const update = (id, data) => {
  return http.put(`/${id}`, data);
};

const remove = ids => {
  return http.delete("", { data: { admin_seq_array: ids } });
};

export default {
  get,
  create,
  update,
  remove
};

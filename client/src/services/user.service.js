import http from "../http-common";

class UserDataService {
  getAll() {
    return http.get("/users");
  }

  get(id) {
    return http.get(`/users/${id}`);
  }

  create(data) {
    return http.post("/users", data);
  }

  update(id, data) {
    return http.put(`/users/${id}`, data);
  }

  delete(id) {
    return http.delete(`/users/${id}`);
  }

  // login() {
  login(data) {
    // return http.post("/users/login");
    //  return http.post("/users", data);
    return http.post("/users/login", data);
  }

  logout() {
    // return http.post("/users", data);
    // return http.post("/users/logout", data);
    return http.post("/users/logout");
  }
}

export default new UserDataService();
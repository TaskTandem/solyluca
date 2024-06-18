import { mapActions } from "pinia";
const baseUrl = "https://www.rockystore.com.ar/api/";

const request = (method) => {
  return async (url, body) => {
    const requestOptions = {
      method,
      headers: url === "auth/login" ? {} : authHeader(baseUrl + url),
    };
    authHeader(baseUrl + url);
    if (body) {
      requestOptions.headers["Content-Type"] = "application/json";
      if (method != "GET") {
        requestOptions.body = JSON.stringify(body);
      }
    }
    const extraParamsURL =
      method === "GET" && body ? new URLSearchParams(body) : "";
    return fetch(baseUrl + url + extraParamsURL, requestOptions).then(
      handleResponse
    );
  };
};

// helper functions

const authHeader = (url) => {
  // return auth header with jwt if user is logged in and request is to the api url
  try {
    const token = sessionStorage.getItem("token");
    const isLoggedIn = !!token;
    const isApiUrl = url.startsWith(baseUrl);
    if (isLoggedIn && isApiUrl) {
      return { Authorization: `Bearer ${token}` };
    } else {
      return {};
    }
  } catch (e) {
    return {};
  }
};

const handleResponse = (response) => {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);

    if (!response.ok) {
      const user = localStorage.getItem("user");
      const { logout } = mapActions({ logout: "auth/logout" });
      if ([401, 403].includes(response.status) && user) {
        // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
        logout();
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
};

export const fetchWrapper = {
  get: request("GET"),
  post: request("POST"),
  put: request("PUT"),
  delete: request("DELETE"),
  setFCMToken: (token) => {
    const url = "/userFCMTokens/";
    const user = JSON.parse(localStorage.getItem("user"));
    return request("POST")(url, {
      userMerchantId: user.data.id,
      userFirebaseId: user.userId,
      token,
    });
  },
};
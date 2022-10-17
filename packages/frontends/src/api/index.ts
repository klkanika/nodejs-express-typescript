export type API_ResponseFormat<T = any> = {
  code: number;
  message: string;
  data?: T;
};

export const api = {
  fetch: <T = any, T2 = any>(p: {
    url: string;
    body?: T2;
    method?: "GET" | "POST";
    input?: RequestInit;
  }) => {
    return fetch(`${process.env.REACT_APP_API_URL || ""}${p.url}`, {
      method: p.method || "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        ...p.input?.headers,
      },
      body: p.body ? JSON.stringify(p.body) : "",
    })
      .then(async (response) => {
        if (response.status !== 200) {
          let json;
          try {
            json = await response.json();
          } catch { }
          if (json) {
            throw json;
          } else {
            throw response;
          }
        }
        return response.json();
      })
      .then((responseJson) => {
        if (!responseJson || !responseJson.data) {
          return;
        }
        return (responseJson as API_ResponseFormat<T>).data;
      })
      .catch((ex) => {
        throw ex;
      });
  },
};

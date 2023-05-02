import axios from "axios";
const ENDPOINT = "https://user-workspace-svc.vish3794.workers.dev";

axios.defaults.baseURL = ENDPOINT;

const callApiRequestCode = async (email: string) => {
  const response = await fetch(ENDPOINT + "/signup/get-code", {
    method: "POST",
    body: JSON.stringify({
      email,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  return data;
};

const callApiAuthenticate = async (request: {
  method_id: string;
  code: string;
  email: string;
}) => {
  const response = await fetch(ENDPOINT + "/authenticate/jwt", {
    method: "POST",
    body: JSON.stringify({
      method_id: request.method_id,
      code: request.code,
    }),
    headers: {
      "Content-Type": "application/json",
      "X-EMAIL": request.email,
    },
  });

  const jwt = await response.text();
  return jwt;
};

async function callWorkspacesApi(payload: any) {
  return axios.post("/rpc/workspaces", {
    jsonrpc: "2.0",
    ...payload,
  });
}

export { callApiRequestCode, callApiAuthenticate, callWorkspacesApi };

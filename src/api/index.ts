const ENDPOINT = "https://user-workspace-svc.vish3794.workers.dev";

export const callApiRequestCode = async (email: string) => {
  const response = await fetch(ENDPOINT + "/signup/get-code", {
    method: "POST",
    body: JSON.stringify({
      email
    }),
    headers: {
      "Content-Type": "application/json"
    }
  });

  const data = await response.json();
  return data;
};

export const callApiAuthenticate = async (request: { method_id: string, code: string, email: string }) => {
  const response = await fetch(ENDPOINT + "/authenticate/jwt", {
    method: "POST",
    body: JSON.stringify({
      method_id: request.method_id,
      code: request.code
    }),
    headers: {
      "Content-Type": "application/json",
      "X-EMAIL": request.email
    }
  });

  const jwt = await response.text();
  return jwt;
};


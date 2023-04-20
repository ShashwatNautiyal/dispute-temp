const ENDPOINT = "https://user-workspace-svc.vish3794.workers.dev";

export const callApiRequestCode = async (email: string) => {
  const response = await fetch(ENDPOINT + "/signup/get-code", {
    method: "POST",
    body: JSON.stringify({
      email
    })
  });

  const data = await response.json();
  return data;
};

export const callApiAuthenticate = async (request: { method_id: string, code: string }) => {
  const response = await fetch(ENDPOINT + "/authenticate/jwt", {
    method: "POST",
    body: JSON.stringify(request)
  });

  const jwt = await response.text();
  return jwt;
};


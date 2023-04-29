import axios from "axios";

const STRIPE_API_KEY = import.meta.env.VITE_PUBLISHABLE_KEY;
const STRIPE_ENDPOINT = "https://stripesync.vish3794.workers.dev";
const token = localStorage.getItem("token");
axios.defaults.baseURL = STRIPE_ENDPOINT;
axios.defaults.headers.common.Authorization = token;
async function getRegisterKey() {
  const resp = await axios.get(`/register_key/${STRIPE_API_KEY}`, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzUxMiIsImtpZCI6ImRpc3B1dGUifQ.eyJleHAiOjE2ODI3NzE0MDEsIm5iZiI6MTY4Mjc2MTQwMSwiaWF0IjoxNjgyNzYxNDAxLCJzdWIiOiJoYXJzaGRldjgyMThAZ21haWwuY29tIiwiYWxpYXMiOiJ1c2VyLXRlc3QtNWVmMWIyNzUtOTAwNi00ZWZkLTg1M2ItOWI0ZGI0ZjY1NDQ4In0.131ZCITT9y-AmnaByaKZW0fCGI9SbpDYcdLSps9yxRlezcKDlILZIqAhh_Ex75SUTCbWRsu-iawe9BTHuWljvg",
    },
  });
  return resp.data;
}

async function chargeSuccessed(payload: any) {
  const resp = await axios.post(`/charge_succeeded/${STRIPE_API_KEY}`, {
    data: {
      object: payload,
    },
  });
}

async function disputeCreated(payload: any) {
  const resp = await axios.post(`/dispute_created/${STRIPE_API_KEY}`, {
    data: {
      object: payload,
    },
  });
}

export { getRegisterKey, chargeSuccessed, disputeCreated };

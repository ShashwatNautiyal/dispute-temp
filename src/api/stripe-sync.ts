import axios from "axios";

const STRIPE_API_KEY = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;
const STRIPE_ENDPOINT = "https://stripesync.vish3794.workers.dev";
const token = `Bearer eyJhbGciOiJIUzUxMiIsImtpZCI6ImRpc3B1dGUifQ.eyJleHAiOjE2ODU4NzM5MjksIm5iZiI6MTY4Mjg3MzkyOSwiaWF0IjoxNjgyODczOTI5LCJzdWIiOiJhbmRyZXcudmlzb2tpaEBnbWFpbC5jb20iLCJhbGlhcyI6InVzZXItdGVzdC05ZmVkMTk2NS02N2Q2LTQ0N2UtOWQwZS0xYmU2NzM2YTBiYjMifQ.UANSDwuoCg9sf3VED-PT7gD4Kw5VW1JjD9sDNrvh_veiNVdx6FYglc_WPLlmJqABimLyqHOXoiaMBRxK6KNGfA`;

axios.defaults.baseURL = STRIPE_ENDPOINT;
axios.defaults.headers.common.Authorization = token;

async function getRegisterKey() {
  const resp = await axios.get(
    `${STRIPE_ENDPOINT}/register_key/pk_test_51Lb4ChSF86syIwwHWtj8QQDAFSMqMytm9vRcFVRiyWIfiLH3K5FvhnhfzffOCeHBgBXwmOY5m2NUBNTH2JcVrX7E00PSH7enLQ`
  );
  return resp.data;
}

async function chargeSuccessed(payload: any) {
  const resp = await axios.post(`/charge_succeeded/${STRIPE_API_KEY}`, {
    data: {
      object: payload,
    },
  });
}

async function createDispute({ address, email, name }: any) {
  const resp = await axios.post(`/dispute_created/${STRIPE_API_KEY}`, {
    data: {
      object: {
        id: crypto.randomUUID(),
        amount: 20,
        currency: "USD",
        evidence: {
          access_activity_log: "",
          billing_address: "",
          cancellation_policy: "",
          cancellation_policy_disclosure: "z",
          cancellation_rebuttal: "",
          customer_communication: "",
          customer_email_address: email,
          customer_name: name,
          customer_purchase_ip: "",
          customer_signature: "",
          duplicate_charge_documentation: "",
          duplicate_charge_explanation: "",
          duplicate_charge_id: "",
          product_description: "",
          receipt: "",
          refund_policy: "",
          refund_policy_disclosure: "",
          refund_refusal_explanation: "",
          service_date: "",
          service_documentation: "",
          shipping_address: address,
          shipping_carrier: "",
          shipping_date: "",
          shipping_documentation: "",
          shipping_tracking_number: "",
          uncategorized_file: "",
          uncategorized_text: "",
        },
        evidence_details: {
          due_by: 100,
          has_evidence: true,
          past_due: true,
          submission_count: 100,
        },
        reason: "Some reason",
        status: "Failed",
      },
    },
  });
  console.log(resp);
  return resp.data;
}

async function getDisputes() {
  return axios.get(`/disputes/${STRIPE_API_KEY}`);
}

export { getRegisterKey, chargeSuccessed, createDispute, getDisputes };

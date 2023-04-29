export const STRIPE_OAUTH_URI = `https://connect.stripe.com/oauth/authorize?response_type=code&client_id=${
  import.meta.env.VITE_STRIPE_CLIENT_ID
}&scope=read_write`;

// Hardcoded demo credentials for prototyping
export const DEMO_USER = {
  email: "demo@traveloop.com",
  password: "demo1234",
  name: "Elena Rodriguez",
  bio: "Lover of slow travel, architectural marvels, and hidden espresso bars. Planning a Nordic escape for 2024.",
  avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvP3GOX5y8Abv9DQRdAZqbE2DvDe32V2uZNOvuvUVH7q6gF6OeuPPp19Xzw4lm5lrrqNfgKz_9OrDDLn6o8mkUaIrhaJmtYTU6XwrosBQk_RDPyqsBCB3VghoUTNI_yle5qr3xh4p1IU7m5d_jxC3KbPtK5r-yF1wTZzvtmmZENuHLRtzvOI4jFjWFOmqQwtTYxmSjon6gXAsDcDY1-qs1iQIw2e3RYz3rM5fMDPEPEWWcQ9ZXNXR4O_KePIgj-I2nSFz880J1FPdB",
};

export function validateCredentials(email: string, password: string): boolean {
  return email === DEMO_USER.email && password === DEMO_USER.password;
}

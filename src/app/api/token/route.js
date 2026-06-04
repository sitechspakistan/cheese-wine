let cachedToken = null;
let tokenExpiry = null;

export async function getValidToken() {
  const now = Date.now();

  // Agar token valid hai to wahi use karo
  if (cachedToken && tokenExpiry && now < tokenExpiry) {
    return cachedToken;
  }

  // Naya token lo
  const res = await fetch("https://beds24.com/api/v2/authentication/token", {
    headers: {
      refreshToken:
        process.env.BEDS24_REFRESH_TOKEN ||
        "ILd35hJ2Q7+VYMX3tZcDVQ5sw66Vs3g0ugc62tSAoLgftiXXep9cmAz/raI2gbOcjeEtODRYyt4gWoQZjeO7HcYoCTozkjQT0+z/VMxkyGTl8sht2ZCCy1s11fhEhm4xRgU3MiooTKUeOAYTnAvz+Rx3bxI2RxVgeCFEz3RU6aE=",
    },
  });

  const data = await res.json();
  cachedToken = data.token;
  tokenExpiry = now + (data.expiresIn - 300) * 1000; // 5 min pehle refresh

  return cachedToken;
}

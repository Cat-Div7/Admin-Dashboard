function generateFakeToken() {
  const part1 = btoa(JSON.stringify({ alg: "HS256", typ: "JWT" }));
  const part2 = btoa(
    JSON.stringify({ iat: Date.now(), uid: Math.floor(Math.random() * 1e6) })
  );
  const part3 = Array.from(crypto.getRandomValues(new Uint8Array(32)))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  const token = `${part1}.${part2}.${part3}`;
  return token;
}

export { generateFakeToken };

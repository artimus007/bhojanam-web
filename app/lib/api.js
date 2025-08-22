const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export async function apiCreatePost(data) {
  const res = await fetch(`${API_URL}/posts`, { method: 'POST', headers: { 'Content-Type': 'application/json', 'x-api-key': API_KEY }, body: JSON.stringify(data) });
  return res.json();
}
export async function apiNearby(lat, lng, km = 10) {
  const res = await fetch(`${API_URL}/posts/nearby?lat=${lat}&lng=${lng}&km=${km}`);
  return res.json();
}
export async function apiGetPost(id) {
  const res = await fetch(`${API_URL}/posts/${id}`);
  return res.json();
}
export async function apiClaim(payload) {
  const res = await fetch(`${API_URL}/claims`, { method: 'POST', headers: { 'Content-Type': 'application/json', 'x-api-key': API_KEY }, body: JSON.stringify(payload) });
  return res.json();
}

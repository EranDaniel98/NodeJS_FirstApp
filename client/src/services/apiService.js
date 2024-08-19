const API_URL = 'http://localhost:3001/api';

export const fetchJson = async url => {
  const response = await fetch(`${API_URL}/${url}`);
  if (!response.ok) throw new Error(`Failed - ${await response.statusText}`);
  return await response.json();
}

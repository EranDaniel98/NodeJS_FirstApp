const API_URL = 'http://localhost:3001/api';

export const fetchJson = async url => {
  console.log(`${API_URL}/${url}`);
  const response = await fetch(`${API_URL}/${url}`);
  if (!response.ok) throw new Error(`Failed - ${response.text()}`);
  return await response.json();
}

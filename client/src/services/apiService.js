const fetchJson = async url => {
  const response = await fetch(`${url}`);
  if (!response.ok) throw new Error(response.statusText);
  return await response.json();
}

export const getBoxes = () => fetchJson('/api/boxes')

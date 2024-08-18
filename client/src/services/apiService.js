const API_URL = 'http://localhost:3000/api';

export function fetchData(endpoint, setBoxes, setLoading, setError) {
  setLoading(true);
  fetch(`${API_URL}/${endpoint}`)
    .then((response) => {
      if (!response.ok) setError('Network response was not ok');
      else return response.json();
    })
    .then((data) => setBoxes(data))
    .catch((error) => setError(error.message))
    .finally(() => setLoading(false));
}


import { getCookie } from "./cookies";

export async function fetchComponents() {
  const response = await fetch('https://gatium.hu/api/components/', {
    headers: {
      'accept': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch components');
  }

  return response.json();
}


export async function fetchComponentsByName(path: string, name: string, order = 'ASC') {
  const token = await getCookie();
  if (!token) {
    throw new Error("Token not found");
  }
  const filter = JSON.stringify([
    {
      "logic": "AND",
      "conditions": [
        {
          "field": "website_id",
          "operator": "=",
          "value": "1000002"
        },
        {
          "field": "path",
          "operator": "like",
          "value": path
        },
        {
          "field": "name",
          "operator": "like",
          "value": name
        }
      ]
    }
  ]);

  let url = 'https://gatium.hu/api/components/';

  const params = new URLSearchParams();
  params.append('website_id', "1000002");
  if (filter) {
    params.append('filter', filter);
  }

  if (order) {
    params.append('sort_order', order);
  }

  if (params.toString()) {
    url += `?${params.toString()}`;
  }

  const response = await fetch(url, {

    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch Component');
  }

  return response.json();
}
export async function fetchComponentsByPath(path: string, order = 'ASC') {
  const token = await getCookie();
  if (!token) {
    throw new Error("Token not found");
  }
  const filter = JSON.stringify([
    {
      "logic": "AND",
      "conditions": [
        {
          "field": "website_id",
          "operator": "=",
          "value": "1000002"
        },
        {
          "field": "path",
          "operator": "like",
          "value": path
        }
      ]
    }
  ]);

  let url = 'https://gatium.hu/api/components/';

  const params = new URLSearchParams();
  params.append('website_id', "1000002");
  if (filter) {
    params.append('filter', filter);
  }

  if (order) {
    params.append('sort_order', order);
  }

  if (params.toString()) {
    url += `?${params.toString()}`;
  }

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch Component');
  }

  return response.json();
}


export async function fetchComponentsForest(path: string) {
  const token = await getCookie(); 
  if (!token) {
    throw new Error("Token not found");
  }
  const url = `https://gatium.hu/api/components/forest/1000002/${path}`;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error('Failed to fetch Component');
  }
  return response.json();
}
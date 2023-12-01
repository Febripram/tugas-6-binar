const BACKEND_URL = import.meta.env["VITE_BACKEND_URL"];

export async function httpFetch<TResponse>(
  path: string,
  searchParams?: Record<string, unknown>,
  options?: RequestInit
): Promise<TResponse> {
  const url = new URL(`${BACKEND_URL}api/v1/${path}`);
  for (const key in searchParams) {
    url.searchParams.append(key, String(searchParams[key]));
  }

  const res = await fetch(url, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    ...options,
  });

  if (res.ok) {
    return await res.json();
  } else {
    throw new Error(await res.json());
  }
}

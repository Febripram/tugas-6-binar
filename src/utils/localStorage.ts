export function set(key: string, value: string) {
  window.localStorage.setItem(key, value);
}

export function get<T>(key: string): T {
  const val = window.localStorage.getItem(key);
  return val as T;
}

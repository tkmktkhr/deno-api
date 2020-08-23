export function toMap<T extends { id: number }>(data: T[]): Map<number, T> {
  return data.reduce(
    (previous, data) => previous.set(data.id, data),
    new Map(),
  );
}

export function fromMap<T extends { id: number }>(data: Map<number, T>): T[] {
  const arr = [];
  for (const v of data.values()) {
    arr.push(v);
  }
  return arr;
}

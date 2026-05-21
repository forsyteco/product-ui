export function mergeIds(...ids: Array<string | undefined>): string | undefined {
  const merged = ids.filter(Boolean).join(' ');

  return merged.length > 0 ? merged : undefined;
}

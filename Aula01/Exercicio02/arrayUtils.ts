// T = tipo do objeto
// K = chave desse objeto (garantido por keyof T)
// Interface que define o formato do resultado do groupBy
export interface GroupByResult<T> {
  [key: string]: T[];
}

export const unique = <T>(arr: T[]): T[] => [...new Set(arr)];

export const groupBy = <T, K extends keyof T>(
  arr: T[],
  key: K
): GroupByResult<T> =>
  arr.reduce((acc: GroupByResult<T>, obj: T) => {
    const groupKey = String(obj[key]);
    (acc[groupKey] = acc[groupKey] || []).push(obj); 
    return acc;
  }, {});

export const sumBy = <T>(
  arr: T[],
  key: keyof T
): number =>
  arr.reduce((total: number, obj: T) => {
    const value = obj[key];
    return total + (typeof value === "number" ? value : 0);
  }, 0);
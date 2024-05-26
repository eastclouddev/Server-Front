export type Query<QueryFunc extends (...args: any) => any> = Exclude<
  Parameters<QueryFunc>[0],
  undefined
>["query"];

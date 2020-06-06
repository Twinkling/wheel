type Diff<T extends string, U extends string> = ({[P in T]: P } & {[P in U]: never } & { [x: string]: never })[T];

type Parameter<T extends (arg: any) => any> = T extends (arg: infer P) => any ? P : never;
type Parameter2<T extends (t1: any, arg: any) => any> = T extends (t1: any, arg: infer P) => any ? P : never;
type Parameter3<T extends (t1: any, t2: any, arg: any) => any> = T extends (t1: any, t2: any, arg: infer P) => any ? P : never;

type NullableKeys<T> = { [K in keyof T]-?: undefined extends T[K] ? K : never }[keyof T]

type IfEquals<X, Y, A=X, B=never> = (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? A : B;

type WritableKeys<T> = { [P in keyof T]-?: IfEquals<{ [Q in P]: T[P] }, { -readonly [Q in P]: T[P] }, P> }[keyof T];

type ReadonlyKeys<T> = { [P in keyof T]-?: IfEquals<{ [Q in P]: T[P] }, { -readonly [Q in P]: T[P] }, never, P> }[keyof T];

type AttrKeys<T> = { [K in keyof T]: T[K] extends (...args: infer P) => any ? never : K }[keyof T];

type Attrs<T> = Pick<T, Exclude<AttrKeys<T>, ReadonlyKeys<T>>>;

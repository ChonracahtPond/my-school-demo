
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model RegSchool
 * 
 */
export type RegSchool = $Result.DefaultSelection<Prisma.$RegSchoolPayload>
/**
 * Model Regfrom
 * 
 */
export type Regfrom = $Result.DefaultSelection<Prisma.$RegfromPayload>
/**
 * Model RegisterForm
 * 
 */
export type RegisterForm = $Result.DefaultSelection<Prisma.$RegisterFormPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more RegSchools
 * const regSchools = await prisma.regSchool.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more RegSchools
   * const regSchools = await prisma.regSchool.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.regSchool`: Exposes CRUD operations for the **RegSchool** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RegSchools
    * const regSchools = await prisma.regSchool.findMany()
    * ```
    */
  get regSchool(): Prisma.RegSchoolDelegate<ExtArgs>;

  /**
   * `prisma.regfrom`: Exposes CRUD operations for the **Regfrom** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Regfroms
    * const regfroms = await prisma.regfrom.findMany()
    * ```
    */
  get regfrom(): Prisma.RegfromDelegate<ExtArgs>;

  /**
   * `prisma.registerForm`: Exposes CRUD operations for the **RegisterForm** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RegisterForms
    * const registerForms = await prisma.registerForm.findMany()
    * ```
    */
  get registerForm(): Prisma.RegisterFormDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.4.1
   * Query Engine version: 2f302df92bd8945e20ad4595a73def5b96afa54f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    RegSchool: 'RegSchool',
    Regfrom: 'Regfrom',
    RegisterForm: 'RegisterForm'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'regSchool' | 'regfrom' | 'registerForm'
      txIsolationLevel: never
    },
    model: {
      RegSchool: {
        payload: Prisma.$RegSchoolPayload<ExtArgs>
        fields: Prisma.RegSchoolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegSchoolFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RegSchoolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegSchoolFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RegSchoolPayload>
          }
          findFirst: {
            args: Prisma.RegSchoolFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RegSchoolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegSchoolFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RegSchoolPayload>
          }
          findMany: {
            args: Prisma.RegSchoolFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RegSchoolPayload>[]
          }
          create: {
            args: Prisma.RegSchoolCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RegSchoolPayload>
          }
          createMany: {
            args: Prisma.RegSchoolCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.RegSchoolDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RegSchoolPayload>
          }
          update: {
            args: Prisma.RegSchoolUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RegSchoolPayload>
          }
          deleteMany: {
            args: Prisma.RegSchoolDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.RegSchoolUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.RegSchoolUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RegSchoolPayload>
          }
          aggregate: {
            args: Prisma.RegSchoolAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRegSchool>
          }
          groupBy: {
            args: Prisma.RegSchoolGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RegSchoolGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.RegSchoolFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.RegSchoolAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.RegSchoolCountArgs<ExtArgs>,
            result: $Utils.Optional<RegSchoolCountAggregateOutputType> | number
          }
        }
      }
      Regfrom: {
        payload: Prisma.$RegfromPayload<ExtArgs>
        fields: Prisma.RegfromFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegfromFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RegfromPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegfromFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RegfromPayload>
          }
          findFirst: {
            args: Prisma.RegfromFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RegfromPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegfromFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RegfromPayload>
          }
          findMany: {
            args: Prisma.RegfromFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RegfromPayload>[]
          }
          create: {
            args: Prisma.RegfromCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RegfromPayload>
          }
          createMany: {
            args: Prisma.RegfromCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.RegfromDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RegfromPayload>
          }
          update: {
            args: Prisma.RegfromUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RegfromPayload>
          }
          deleteMany: {
            args: Prisma.RegfromDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.RegfromUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.RegfromUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RegfromPayload>
          }
          aggregate: {
            args: Prisma.RegfromAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRegfrom>
          }
          groupBy: {
            args: Prisma.RegfromGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RegfromGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.RegfromFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.RegfromAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.RegfromCountArgs<ExtArgs>,
            result: $Utils.Optional<RegfromCountAggregateOutputType> | number
          }
        }
      }
      RegisterForm: {
        payload: Prisma.$RegisterFormPayload<ExtArgs>
        fields: Prisma.RegisterFormFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegisterFormFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RegisterFormPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegisterFormFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RegisterFormPayload>
          }
          findFirst: {
            args: Prisma.RegisterFormFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RegisterFormPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegisterFormFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RegisterFormPayload>
          }
          findMany: {
            args: Prisma.RegisterFormFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RegisterFormPayload>[]
          }
          create: {
            args: Prisma.RegisterFormCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RegisterFormPayload>
          }
          createMany: {
            args: Prisma.RegisterFormCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.RegisterFormDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RegisterFormPayload>
          }
          update: {
            args: Prisma.RegisterFormUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RegisterFormPayload>
          }
          deleteMany: {
            args: Prisma.RegisterFormDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.RegisterFormUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.RegisterFormUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RegisterFormPayload>
          }
          aggregate: {
            args: Prisma.RegisterFormAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRegisterForm>
          }
          groupBy: {
            args: Prisma.RegisterFormGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RegisterFormGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.RegisterFormFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.RegisterFormAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.RegisterFormCountArgs<ExtArgs>,
            result: $Utils.Optional<RegisterFormCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model RegSchool
   */

  export type AggregateRegSchool = {
    _count: RegSchoolCountAggregateOutputType | null
    _min: RegSchoolMinAggregateOutputType | null
    _max: RegSchoolMaxAggregateOutputType | null
  }

  export type RegSchoolMinAggregateOutputType = {
    id: string | null
    irImg: string | null
    irDescription: string | null
  }

  export type RegSchoolMaxAggregateOutputType = {
    id: string | null
    irImg: string | null
    irDescription: string | null
  }

  export type RegSchoolCountAggregateOutputType = {
    id: number
    irImg: number
    irDescription: number
    _all: number
  }


  export type RegSchoolMinAggregateInputType = {
    id?: true
    irImg?: true
    irDescription?: true
  }

  export type RegSchoolMaxAggregateInputType = {
    id?: true
    irImg?: true
    irDescription?: true
  }

  export type RegSchoolCountAggregateInputType = {
    id?: true
    irImg?: true
    irDescription?: true
    _all?: true
  }

  export type RegSchoolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RegSchool to aggregate.
     */
    where?: RegSchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegSchools to fetch.
     */
    orderBy?: RegSchoolOrderByWithRelationInput | RegSchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegSchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegSchools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegSchools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RegSchools
    **/
    _count?: true | RegSchoolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegSchoolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegSchoolMaxAggregateInputType
  }

  export type GetRegSchoolAggregateType<T extends RegSchoolAggregateArgs> = {
        [P in keyof T & keyof AggregateRegSchool]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegSchool[P]>
      : GetScalarType<T[P], AggregateRegSchool[P]>
  }




  export type RegSchoolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegSchoolWhereInput
    orderBy?: RegSchoolOrderByWithAggregationInput | RegSchoolOrderByWithAggregationInput[]
    by: RegSchoolScalarFieldEnum[] | RegSchoolScalarFieldEnum
    having?: RegSchoolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegSchoolCountAggregateInputType | true
    _min?: RegSchoolMinAggregateInputType
    _max?: RegSchoolMaxAggregateInputType
  }

  export type RegSchoolGroupByOutputType = {
    id: string
    irImg: string | null
    irDescription: string | null
    _count: RegSchoolCountAggregateOutputType | null
    _min: RegSchoolMinAggregateOutputType | null
    _max: RegSchoolMaxAggregateOutputType | null
  }

  type GetRegSchoolGroupByPayload<T extends RegSchoolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegSchoolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegSchoolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegSchoolGroupByOutputType[P]>
            : GetScalarType<T[P], RegSchoolGroupByOutputType[P]>
        }
      >
    >


  export type RegSchoolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    irImg?: boolean
    irDescription?: boolean
  }, ExtArgs["result"]["regSchool"]>

  export type RegSchoolSelectScalar = {
    id?: boolean
    irImg?: boolean
    irDescription?: boolean
  }


  export type $RegSchoolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RegSchool"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      irImg: string | null
      irDescription: string | null
    }, ExtArgs["result"]["regSchool"]>
    composites: {}
  }


  type RegSchoolGetPayload<S extends boolean | null | undefined | RegSchoolDefaultArgs> = $Result.GetResult<Prisma.$RegSchoolPayload, S>

  type RegSchoolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RegSchoolFindManyArgs, 'select' | 'include'> & {
      select?: RegSchoolCountAggregateInputType | true
    }

  export interface RegSchoolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RegSchool'], meta: { name: 'RegSchool' } }
    /**
     * Find zero or one RegSchool that matches the filter.
     * @param {RegSchoolFindUniqueArgs} args - Arguments to find a RegSchool
     * @example
     * // Get one RegSchool
     * const regSchool = await prisma.regSchool.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RegSchoolFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, RegSchoolFindUniqueArgs<ExtArgs>>
    ): Prisma__RegSchoolClient<$Result.GetResult<Prisma.$RegSchoolPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one RegSchool that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RegSchoolFindUniqueOrThrowArgs} args - Arguments to find a RegSchool
     * @example
     * // Get one RegSchool
     * const regSchool = await prisma.regSchool.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RegSchoolFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RegSchoolFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RegSchoolClient<$Result.GetResult<Prisma.$RegSchoolPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first RegSchool that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegSchoolFindFirstArgs} args - Arguments to find a RegSchool
     * @example
     * // Get one RegSchool
     * const regSchool = await prisma.regSchool.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RegSchoolFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, RegSchoolFindFirstArgs<ExtArgs>>
    ): Prisma__RegSchoolClient<$Result.GetResult<Prisma.$RegSchoolPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first RegSchool that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegSchoolFindFirstOrThrowArgs} args - Arguments to find a RegSchool
     * @example
     * // Get one RegSchool
     * const regSchool = await prisma.regSchool.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RegSchoolFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RegSchoolFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RegSchoolClient<$Result.GetResult<Prisma.$RegSchoolPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more RegSchools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegSchoolFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RegSchools
     * const regSchools = await prisma.regSchool.findMany()
     * 
     * // Get first 10 RegSchools
     * const regSchools = await prisma.regSchool.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const regSchoolWithIdOnly = await prisma.regSchool.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RegSchoolFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RegSchoolFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegSchoolPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a RegSchool.
     * @param {RegSchoolCreateArgs} args - Arguments to create a RegSchool.
     * @example
     * // Create one RegSchool
     * const RegSchool = await prisma.regSchool.create({
     *   data: {
     *     // ... data to create a RegSchool
     *   }
     * })
     * 
    **/
    create<T extends RegSchoolCreateArgs<ExtArgs>>(
      args: SelectSubset<T, RegSchoolCreateArgs<ExtArgs>>
    ): Prisma__RegSchoolClient<$Result.GetResult<Prisma.$RegSchoolPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many RegSchools.
     *     @param {RegSchoolCreateManyArgs} args - Arguments to create many RegSchools.
     *     @example
     *     // Create many RegSchools
     *     const regSchool = await prisma.regSchool.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RegSchoolCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RegSchoolCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RegSchool.
     * @param {RegSchoolDeleteArgs} args - Arguments to delete one RegSchool.
     * @example
     * // Delete one RegSchool
     * const RegSchool = await prisma.regSchool.delete({
     *   where: {
     *     // ... filter to delete one RegSchool
     *   }
     * })
     * 
    **/
    delete<T extends RegSchoolDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, RegSchoolDeleteArgs<ExtArgs>>
    ): Prisma__RegSchoolClient<$Result.GetResult<Prisma.$RegSchoolPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one RegSchool.
     * @param {RegSchoolUpdateArgs} args - Arguments to update one RegSchool.
     * @example
     * // Update one RegSchool
     * const regSchool = await prisma.regSchool.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RegSchoolUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, RegSchoolUpdateArgs<ExtArgs>>
    ): Prisma__RegSchoolClient<$Result.GetResult<Prisma.$RegSchoolPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more RegSchools.
     * @param {RegSchoolDeleteManyArgs} args - Arguments to filter RegSchools to delete.
     * @example
     * // Delete a few RegSchools
     * const { count } = await prisma.regSchool.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RegSchoolDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RegSchoolDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RegSchools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegSchoolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RegSchools
     * const regSchool = await prisma.regSchool.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RegSchoolUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, RegSchoolUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RegSchool.
     * @param {RegSchoolUpsertArgs} args - Arguments to update or create a RegSchool.
     * @example
     * // Update or create a RegSchool
     * const regSchool = await prisma.regSchool.upsert({
     *   create: {
     *     // ... data to create a RegSchool
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RegSchool we want to update
     *   }
     * })
    **/
    upsert<T extends RegSchoolUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, RegSchoolUpsertArgs<ExtArgs>>
    ): Prisma__RegSchoolClient<$Result.GetResult<Prisma.$RegSchoolPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more RegSchools that matches the filter.
     * @param {RegSchoolFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const regSchool = await prisma.regSchool.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: RegSchoolFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a RegSchool.
     * @param {RegSchoolAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const regSchool = await prisma.regSchool.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: RegSchoolAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of RegSchools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegSchoolCountArgs} args - Arguments to filter RegSchools to count.
     * @example
     * // Count the number of RegSchools
     * const count = await prisma.regSchool.count({
     *   where: {
     *     // ... the filter for the RegSchools we want to count
     *   }
     * })
    **/
    count<T extends RegSchoolCountArgs>(
      args?: Subset<T, RegSchoolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegSchoolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RegSchool.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegSchoolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RegSchoolAggregateArgs>(args: Subset<T, RegSchoolAggregateArgs>): Prisma.PrismaPromise<GetRegSchoolAggregateType<T>>

    /**
     * Group by RegSchool.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegSchoolGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RegSchoolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegSchoolGroupByArgs['orderBy'] }
        : { orderBy?: RegSchoolGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RegSchoolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegSchoolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RegSchool model
   */
  readonly fields: RegSchoolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RegSchool.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegSchoolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the RegSchool model
   */ 
  interface RegSchoolFieldRefs {
    readonly id: FieldRef<"RegSchool", 'String'>
    readonly irImg: FieldRef<"RegSchool", 'String'>
    readonly irDescription: FieldRef<"RegSchool", 'String'>
  }
    

  // Custom InputTypes

  /**
   * RegSchool findUnique
   */
  export type RegSchoolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegSchool
     */
    select?: RegSchoolSelect<ExtArgs> | null
    /**
     * Filter, which RegSchool to fetch.
     */
    where: RegSchoolWhereUniqueInput
  }


  /**
   * RegSchool findUniqueOrThrow
   */
  export type RegSchoolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegSchool
     */
    select?: RegSchoolSelect<ExtArgs> | null
    /**
     * Filter, which RegSchool to fetch.
     */
    where: RegSchoolWhereUniqueInput
  }


  /**
   * RegSchool findFirst
   */
  export type RegSchoolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegSchool
     */
    select?: RegSchoolSelect<ExtArgs> | null
    /**
     * Filter, which RegSchool to fetch.
     */
    where?: RegSchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegSchools to fetch.
     */
    orderBy?: RegSchoolOrderByWithRelationInput | RegSchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegSchools.
     */
    cursor?: RegSchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegSchools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegSchools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegSchools.
     */
    distinct?: RegSchoolScalarFieldEnum | RegSchoolScalarFieldEnum[]
  }


  /**
   * RegSchool findFirstOrThrow
   */
  export type RegSchoolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegSchool
     */
    select?: RegSchoolSelect<ExtArgs> | null
    /**
     * Filter, which RegSchool to fetch.
     */
    where?: RegSchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegSchools to fetch.
     */
    orderBy?: RegSchoolOrderByWithRelationInput | RegSchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegSchools.
     */
    cursor?: RegSchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegSchools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegSchools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegSchools.
     */
    distinct?: RegSchoolScalarFieldEnum | RegSchoolScalarFieldEnum[]
  }


  /**
   * RegSchool findMany
   */
  export type RegSchoolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegSchool
     */
    select?: RegSchoolSelect<ExtArgs> | null
    /**
     * Filter, which RegSchools to fetch.
     */
    where?: RegSchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegSchools to fetch.
     */
    orderBy?: RegSchoolOrderByWithRelationInput | RegSchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RegSchools.
     */
    cursor?: RegSchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegSchools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegSchools.
     */
    skip?: number
    distinct?: RegSchoolScalarFieldEnum | RegSchoolScalarFieldEnum[]
  }


  /**
   * RegSchool create
   */
  export type RegSchoolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegSchool
     */
    select?: RegSchoolSelect<ExtArgs> | null
    /**
     * The data needed to create a RegSchool.
     */
    data?: XOR<RegSchoolCreateInput, RegSchoolUncheckedCreateInput>
  }


  /**
   * RegSchool createMany
   */
  export type RegSchoolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RegSchools.
     */
    data: RegSchoolCreateManyInput | RegSchoolCreateManyInput[]
  }


  /**
   * RegSchool update
   */
  export type RegSchoolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegSchool
     */
    select?: RegSchoolSelect<ExtArgs> | null
    /**
     * The data needed to update a RegSchool.
     */
    data: XOR<RegSchoolUpdateInput, RegSchoolUncheckedUpdateInput>
    /**
     * Choose, which RegSchool to update.
     */
    where: RegSchoolWhereUniqueInput
  }


  /**
   * RegSchool updateMany
   */
  export type RegSchoolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RegSchools.
     */
    data: XOR<RegSchoolUpdateManyMutationInput, RegSchoolUncheckedUpdateManyInput>
    /**
     * Filter which RegSchools to update
     */
    where?: RegSchoolWhereInput
  }


  /**
   * RegSchool upsert
   */
  export type RegSchoolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegSchool
     */
    select?: RegSchoolSelect<ExtArgs> | null
    /**
     * The filter to search for the RegSchool to update in case it exists.
     */
    where: RegSchoolWhereUniqueInput
    /**
     * In case the RegSchool found by the `where` argument doesn't exist, create a new RegSchool with this data.
     */
    create: XOR<RegSchoolCreateInput, RegSchoolUncheckedCreateInput>
    /**
     * In case the RegSchool was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegSchoolUpdateInput, RegSchoolUncheckedUpdateInput>
  }


  /**
   * RegSchool delete
   */
  export type RegSchoolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegSchool
     */
    select?: RegSchoolSelect<ExtArgs> | null
    /**
     * Filter which RegSchool to delete.
     */
    where: RegSchoolWhereUniqueInput
  }


  /**
   * RegSchool deleteMany
   */
  export type RegSchoolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RegSchools to delete
     */
    where?: RegSchoolWhereInput
  }


  /**
   * RegSchool findRaw
   */
  export type RegSchoolFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * RegSchool aggregateRaw
   */
  export type RegSchoolAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * RegSchool without action
   */
  export type RegSchoolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegSchool
     */
    select?: RegSchoolSelect<ExtArgs> | null
  }



  /**
   * Model Regfrom
   */

  export type AggregateRegfrom = {
    _count: RegfromCountAggregateOutputType | null
    _min: RegfromMinAggregateOutputType | null
    _max: RegfromMaxAggregateOutputType | null
  }

  export type RegfromMinAggregateOutputType = {
    id: string | null
    educationOffice: string | null
    fname: string | null
    lname: string | null
    birthday: string | null
    age: string | null
    idcard: string | null
    religion: string | null
    nationality: string | null
    occupation: string | null
    avgincome: string | null
    fathersname: string | null
    fanationality: string | null
    faavgincome: string | null
    mothersname: string | null
    monationality: string | null
    moavgincome: string | null
    endclass: string | null
    endyear: string | null
    schoolend: string | null
    enddistrict: string | null
    endprovince: string | null
    dhamma: string | null
    endyeardhamma: string | null
    endschooldhamma: string | null
    enddistrictdhamma: string | null
    endprovincedhamma: string | null
    address: string | null
    group: string | null
    alley: string | null
    road: string | null
    subdistrict: string | null
    district: string | null
    province: string | null
    zipcode: string | null
    tel: string | null
    imgprifile: string | null
    imgqualification: string | null
    imghouseregistration: string | null
    imgidcard: string | null
  }

  export type RegfromMaxAggregateOutputType = {
    id: string | null
    educationOffice: string | null
    fname: string | null
    lname: string | null
    birthday: string | null
    age: string | null
    idcard: string | null
    religion: string | null
    nationality: string | null
    occupation: string | null
    avgincome: string | null
    fathersname: string | null
    fanationality: string | null
    faavgincome: string | null
    mothersname: string | null
    monationality: string | null
    moavgincome: string | null
    endclass: string | null
    endyear: string | null
    schoolend: string | null
    enddistrict: string | null
    endprovince: string | null
    dhamma: string | null
    endyeardhamma: string | null
    endschooldhamma: string | null
    enddistrictdhamma: string | null
    endprovincedhamma: string | null
    address: string | null
    group: string | null
    alley: string | null
    road: string | null
    subdistrict: string | null
    district: string | null
    province: string | null
    zipcode: string | null
    tel: string | null
    imgprifile: string | null
    imgqualification: string | null
    imghouseregistration: string | null
    imgidcard: string | null
  }

  export type RegfromCountAggregateOutputType = {
    id: number
    educationOffice: number
    fname: number
    lname: number
    birthday: number
    age: number
    idcard: number
    religion: number
    nationality: number
    occupation: number
    avgincome: number
    fathersname: number
    fanationality: number
    faavgincome: number
    mothersname: number
    monationality: number
    moavgincome: number
    endclass: number
    endyear: number
    schoolend: number
    enddistrict: number
    endprovince: number
    dhamma: number
    endyeardhamma: number
    endschooldhamma: number
    enddistrictdhamma: number
    endprovincedhamma: number
    address: number
    group: number
    alley: number
    road: number
    subdistrict: number
    district: number
    province: number
    zipcode: number
    tel: number
    imgprifile: number
    imgqualification: number
    imghouseregistration: number
    imgidcard: number
    _all: number
  }


  export type RegfromMinAggregateInputType = {
    id?: true
    educationOffice?: true
    fname?: true
    lname?: true
    birthday?: true
    age?: true
    idcard?: true
    religion?: true
    nationality?: true
    occupation?: true
    avgincome?: true
    fathersname?: true
    fanationality?: true
    faavgincome?: true
    mothersname?: true
    monationality?: true
    moavgincome?: true
    endclass?: true
    endyear?: true
    schoolend?: true
    enddistrict?: true
    endprovince?: true
    dhamma?: true
    endyeardhamma?: true
    endschooldhamma?: true
    enddistrictdhamma?: true
    endprovincedhamma?: true
    address?: true
    group?: true
    alley?: true
    road?: true
    subdistrict?: true
    district?: true
    province?: true
    zipcode?: true
    tel?: true
    imgprifile?: true
    imgqualification?: true
    imghouseregistration?: true
    imgidcard?: true
  }

  export type RegfromMaxAggregateInputType = {
    id?: true
    educationOffice?: true
    fname?: true
    lname?: true
    birthday?: true
    age?: true
    idcard?: true
    religion?: true
    nationality?: true
    occupation?: true
    avgincome?: true
    fathersname?: true
    fanationality?: true
    faavgincome?: true
    mothersname?: true
    monationality?: true
    moavgincome?: true
    endclass?: true
    endyear?: true
    schoolend?: true
    enddistrict?: true
    endprovince?: true
    dhamma?: true
    endyeardhamma?: true
    endschooldhamma?: true
    enddistrictdhamma?: true
    endprovincedhamma?: true
    address?: true
    group?: true
    alley?: true
    road?: true
    subdistrict?: true
    district?: true
    province?: true
    zipcode?: true
    tel?: true
    imgprifile?: true
    imgqualification?: true
    imghouseregistration?: true
    imgidcard?: true
  }

  export type RegfromCountAggregateInputType = {
    id?: true
    educationOffice?: true
    fname?: true
    lname?: true
    birthday?: true
    age?: true
    idcard?: true
    religion?: true
    nationality?: true
    occupation?: true
    avgincome?: true
    fathersname?: true
    fanationality?: true
    faavgincome?: true
    mothersname?: true
    monationality?: true
    moavgincome?: true
    endclass?: true
    endyear?: true
    schoolend?: true
    enddistrict?: true
    endprovince?: true
    dhamma?: true
    endyeardhamma?: true
    endschooldhamma?: true
    enddistrictdhamma?: true
    endprovincedhamma?: true
    address?: true
    group?: true
    alley?: true
    road?: true
    subdistrict?: true
    district?: true
    province?: true
    zipcode?: true
    tel?: true
    imgprifile?: true
    imgqualification?: true
    imghouseregistration?: true
    imgidcard?: true
    _all?: true
  }

  export type RegfromAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Regfrom to aggregate.
     */
    where?: RegfromWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regfroms to fetch.
     */
    orderBy?: RegfromOrderByWithRelationInput | RegfromOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegfromWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regfroms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regfroms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Regfroms
    **/
    _count?: true | RegfromCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegfromMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegfromMaxAggregateInputType
  }

  export type GetRegfromAggregateType<T extends RegfromAggregateArgs> = {
        [P in keyof T & keyof AggregateRegfrom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegfrom[P]>
      : GetScalarType<T[P], AggregateRegfrom[P]>
  }




  export type RegfromGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegfromWhereInput
    orderBy?: RegfromOrderByWithAggregationInput | RegfromOrderByWithAggregationInput[]
    by: RegfromScalarFieldEnum[] | RegfromScalarFieldEnum
    having?: RegfromScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegfromCountAggregateInputType | true
    _min?: RegfromMinAggregateInputType
    _max?: RegfromMaxAggregateInputType
  }

  export type RegfromGroupByOutputType = {
    id: string
    educationOffice: string | null
    fname: string | null
    lname: string | null
    birthday: string | null
    age: string | null
    idcard: string | null
    religion: string | null
    nationality: string | null
    occupation: string | null
    avgincome: string | null
    fathersname: string | null
    fanationality: string | null
    faavgincome: string | null
    mothersname: string | null
    monationality: string | null
    moavgincome: string | null
    endclass: string | null
    endyear: string | null
    schoolend: string | null
    enddistrict: string | null
    endprovince: string | null
    dhamma: string | null
    endyeardhamma: string | null
    endschooldhamma: string | null
    enddistrictdhamma: string | null
    endprovincedhamma: string | null
    address: string | null
    group: string | null
    alley: string | null
    road: string | null
    subdistrict: string | null
    district: string | null
    province: string | null
    zipcode: string | null
    tel: string | null
    imgprifile: string | null
    imgqualification: string | null
    imghouseregistration: string | null
    imgidcard: string | null
    _count: RegfromCountAggregateOutputType | null
    _min: RegfromMinAggregateOutputType | null
    _max: RegfromMaxAggregateOutputType | null
  }

  type GetRegfromGroupByPayload<T extends RegfromGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegfromGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegfromGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegfromGroupByOutputType[P]>
            : GetScalarType<T[P], RegfromGroupByOutputType[P]>
        }
      >
    >


  export type RegfromSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    educationOffice?: boolean
    fname?: boolean
    lname?: boolean
    birthday?: boolean
    age?: boolean
    idcard?: boolean
    religion?: boolean
    nationality?: boolean
    occupation?: boolean
    avgincome?: boolean
    fathersname?: boolean
    fanationality?: boolean
    faavgincome?: boolean
    mothersname?: boolean
    monationality?: boolean
    moavgincome?: boolean
    endclass?: boolean
    endyear?: boolean
    schoolend?: boolean
    enddistrict?: boolean
    endprovince?: boolean
    dhamma?: boolean
    endyeardhamma?: boolean
    endschooldhamma?: boolean
    enddistrictdhamma?: boolean
    endprovincedhamma?: boolean
    address?: boolean
    group?: boolean
    alley?: boolean
    road?: boolean
    subdistrict?: boolean
    district?: boolean
    province?: boolean
    zipcode?: boolean
    tel?: boolean
    imgprifile?: boolean
    imgqualification?: boolean
    imghouseregistration?: boolean
    imgidcard?: boolean
  }, ExtArgs["result"]["regfrom"]>

  export type RegfromSelectScalar = {
    id?: boolean
    educationOffice?: boolean
    fname?: boolean
    lname?: boolean
    birthday?: boolean
    age?: boolean
    idcard?: boolean
    religion?: boolean
    nationality?: boolean
    occupation?: boolean
    avgincome?: boolean
    fathersname?: boolean
    fanationality?: boolean
    faavgincome?: boolean
    mothersname?: boolean
    monationality?: boolean
    moavgincome?: boolean
    endclass?: boolean
    endyear?: boolean
    schoolend?: boolean
    enddistrict?: boolean
    endprovince?: boolean
    dhamma?: boolean
    endyeardhamma?: boolean
    endschooldhamma?: boolean
    enddistrictdhamma?: boolean
    endprovincedhamma?: boolean
    address?: boolean
    group?: boolean
    alley?: boolean
    road?: boolean
    subdistrict?: boolean
    district?: boolean
    province?: boolean
    zipcode?: boolean
    tel?: boolean
    imgprifile?: boolean
    imgqualification?: boolean
    imghouseregistration?: boolean
    imgidcard?: boolean
  }


  export type $RegfromPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Regfrom"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      educationOffice: string | null
      fname: string | null
      lname: string | null
      birthday: string | null
      age: string | null
      idcard: string | null
      religion: string | null
      nationality: string | null
      occupation: string | null
      avgincome: string | null
      fathersname: string | null
      fanationality: string | null
      faavgincome: string | null
      mothersname: string | null
      monationality: string | null
      moavgincome: string | null
      endclass: string | null
      endyear: string | null
      schoolend: string | null
      enddistrict: string | null
      endprovince: string | null
      dhamma: string | null
      endyeardhamma: string | null
      endschooldhamma: string | null
      enddistrictdhamma: string | null
      endprovincedhamma: string | null
      address: string | null
      group: string | null
      alley: string | null
      road: string | null
      subdistrict: string | null
      district: string | null
      province: string | null
      zipcode: string | null
      tel: string | null
      imgprifile: string | null
      imgqualification: string | null
      imghouseregistration: string | null
      imgidcard: string | null
    }, ExtArgs["result"]["regfrom"]>
    composites: {}
  }


  type RegfromGetPayload<S extends boolean | null | undefined | RegfromDefaultArgs> = $Result.GetResult<Prisma.$RegfromPayload, S>

  type RegfromCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RegfromFindManyArgs, 'select' | 'include'> & {
      select?: RegfromCountAggregateInputType | true
    }

  export interface RegfromDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Regfrom'], meta: { name: 'Regfrom' } }
    /**
     * Find zero or one Regfrom that matches the filter.
     * @param {RegfromFindUniqueArgs} args - Arguments to find a Regfrom
     * @example
     * // Get one Regfrom
     * const regfrom = await prisma.regfrom.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RegfromFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, RegfromFindUniqueArgs<ExtArgs>>
    ): Prisma__RegfromClient<$Result.GetResult<Prisma.$RegfromPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Regfrom that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RegfromFindUniqueOrThrowArgs} args - Arguments to find a Regfrom
     * @example
     * // Get one Regfrom
     * const regfrom = await prisma.regfrom.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RegfromFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RegfromFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RegfromClient<$Result.GetResult<Prisma.$RegfromPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Regfrom that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegfromFindFirstArgs} args - Arguments to find a Regfrom
     * @example
     * // Get one Regfrom
     * const regfrom = await prisma.regfrom.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RegfromFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, RegfromFindFirstArgs<ExtArgs>>
    ): Prisma__RegfromClient<$Result.GetResult<Prisma.$RegfromPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Regfrom that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegfromFindFirstOrThrowArgs} args - Arguments to find a Regfrom
     * @example
     * // Get one Regfrom
     * const regfrom = await prisma.regfrom.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RegfromFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RegfromFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RegfromClient<$Result.GetResult<Prisma.$RegfromPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Regfroms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegfromFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Regfroms
     * const regfroms = await prisma.regfrom.findMany()
     * 
     * // Get first 10 Regfroms
     * const regfroms = await prisma.regfrom.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const regfromWithIdOnly = await prisma.regfrom.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RegfromFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RegfromFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegfromPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Regfrom.
     * @param {RegfromCreateArgs} args - Arguments to create a Regfrom.
     * @example
     * // Create one Regfrom
     * const Regfrom = await prisma.regfrom.create({
     *   data: {
     *     // ... data to create a Regfrom
     *   }
     * })
     * 
    **/
    create<T extends RegfromCreateArgs<ExtArgs>>(
      args: SelectSubset<T, RegfromCreateArgs<ExtArgs>>
    ): Prisma__RegfromClient<$Result.GetResult<Prisma.$RegfromPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Regfroms.
     *     @param {RegfromCreateManyArgs} args - Arguments to create many Regfroms.
     *     @example
     *     // Create many Regfroms
     *     const regfrom = await prisma.regfrom.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RegfromCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RegfromCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Regfrom.
     * @param {RegfromDeleteArgs} args - Arguments to delete one Regfrom.
     * @example
     * // Delete one Regfrom
     * const Regfrom = await prisma.regfrom.delete({
     *   where: {
     *     // ... filter to delete one Regfrom
     *   }
     * })
     * 
    **/
    delete<T extends RegfromDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, RegfromDeleteArgs<ExtArgs>>
    ): Prisma__RegfromClient<$Result.GetResult<Prisma.$RegfromPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Regfrom.
     * @param {RegfromUpdateArgs} args - Arguments to update one Regfrom.
     * @example
     * // Update one Regfrom
     * const regfrom = await prisma.regfrom.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RegfromUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, RegfromUpdateArgs<ExtArgs>>
    ): Prisma__RegfromClient<$Result.GetResult<Prisma.$RegfromPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Regfroms.
     * @param {RegfromDeleteManyArgs} args - Arguments to filter Regfroms to delete.
     * @example
     * // Delete a few Regfroms
     * const { count } = await prisma.regfrom.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RegfromDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RegfromDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Regfroms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegfromUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Regfroms
     * const regfrom = await prisma.regfrom.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RegfromUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, RegfromUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Regfrom.
     * @param {RegfromUpsertArgs} args - Arguments to update or create a Regfrom.
     * @example
     * // Update or create a Regfrom
     * const regfrom = await prisma.regfrom.upsert({
     *   create: {
     *     // ... data to create a Regfrom
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Regfrom we want to update
     *   }
     * })
    **/
    upsert<T extends RegfromUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, RegfromUpsertArgs<ExtArgs>>
    ): Prisma__RegfromClient<$Result.GetResult<Prisma.$RegfromPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Regfroms that matches the filter.
     * @param {RegfromFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const regfrom = await prisma.regfrom.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: RegfromFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Regfrom.
     * @param {RegfromAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const regfrom = await prisma.regfrom.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: RegfromAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Regfroms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegfromCountArgs} args - Arguments to filter Regfroms to count.
     * @example
     * // Count the number of Regfroms
     * const count = await prisma.regfrom.count({
     *   where: {
     *     // ... the filter for the Regfroms we want to count
     *   }
     * })
    **/
    count<T extends RegfromCountArgs>(
      args?: Subset<T, RegfromCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegfromCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Regfrom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegfromAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RegfromAggregateArgs>(args: Subset<T, RegfromAggregateArgs>): Prisma.PrismaPromise<GetRegfromAggregateType<T>>

    /**
     * Group by Regfrom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegfromGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RegfromGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegfromGroupByArgs['orderBy'] }
        : { orderBy?: RegfromGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RegfromGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegfromGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Regfrom model
   */
  readonly fields: RegfromFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Regfrom.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegfromClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Regfrom model
   */ 
  interface RegfromFieldRefs {
    readonly id: FieldRef<"Regfrom", 'String'>
    readonly educationOffice: FieldRef<"Regfrom", 'String'>
    readonly fname: FieldRef<"Regfrom", 'String'>
    readonly lname: FieldRef<"Regfrom", 'String'>
    readonly birthday: FieldRef<"Regfrom", 'String'>
    readonly age: FieldRef<"Regfrom", 'String'>
    readonly idcard: FieldRef<"Regfrom", 'String'>
    readonly religion: FieldRef<"Regfrom", 'String'>
    readonly nationality: FieldRef<"Regfrom", 'String'>
    readonly occupation: FieldRef<"Regfrom", 'String'>
    readonly avgincome: FieldRef<"Regfrom", 'String'>
    readonly fathersname: FieldRef<"Regfrom", 'String'>
    readonly fanationality: FieldRef<"Regfrom", 'String'>
    readonly faavgincome: FieldRef<"Regfrom", 'String'>
    readonly mothersname: FieldRef<"Regfrom", 'String'>
    readonly monationality: FieldRef<"Regfrom", 'String'>
    readonly moavgincome: FieldRef<"Regfrom", 'String'>
    readonly endclass: FieldRef<"Regfrom", 'String'>
    readonly endyear: FieldRef<"Regfrom", 'String'>
    readonly schoolend: FieldRef<"Regfrom", 'String'>
    readonly enddistrict: FieldRef<"Regfrom", 'String'>
    readonly endprovince: FieldRef<"Regfrom", 'String'>
    readonly dhamma: FieldRef<"Regfrom", 'String'>
    readonly endyeardhamma: FieldRef<"Regfrom", 'String'>
    readonly endschooldhamma: FieldRef<"Regfrom", 'String'>
    readonly enddistrictdhamma: FieldRef<"Regfrom", 'String'>
    readonly endprovincedhamma: FieldRef<"Regfrom", 'String'>
    readonly address: FieldRef<"Regfrom", 'String'>
    readonly group: FieldRef<"Regfrom", 'String'>
    readonly alley: FieldRef<"Regfrom", 'String'>
    readonly road: FieldRef<"Regfrom", 'String'>
    readonly subdistrict: FieldRef<"Regfrom", 'String'>
    readonly district: FieldRef<"Regfrom", 'String'>
    readonly province: FieldRef<"Regfrom", 'String'>
    readonly zipcode: FieldRef<"Regfrom", 'String'>
    readonly tel: FieldRef<"Regfrom", 'String'>
    readonly imgprifile: FieldRef<"Regfrom", 'String'>
    readonly imgqualification: FieldRef<"Regfrom", 'String'>
    readonly imghouseregistration: FieldRef<"Regfrom", 'String'>
    readonly imgidcard: FieldRef<"Regfrom", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Regfrom findUnique
   */
  export type RegfromFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regfrom
     */
    select?: RegfromSelect<ExtArgs> | null
    /**
     * Filter, which Regfrom to fetch.
     */
    where: RegfromWhereUniqueInput
  }


  /**
   * Regfrom findUniqueOrThrow
   */
  export type RegfromFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regfrom
     */
    select?: RegfromSelect<ExtArgs> | null
    /**
     * Filter, which Regfrom to fetch.
     */
    where: RegfromWhereUniqueInput
  }


  /**
   * Regfrom findFirst
   */
  export type RegfromFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regfrom
     */
    select?: RegfromSelect<ExtArgs> | null
    /**
     * Filter, which Regfrom to fetch.
     */
    where?: RegfromWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regfroms to fetch.
     */
    orderBy?: RegfromOrderByWithRelationInput | RegfromOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Regfroms.
     */
    cursor?: RegfromWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regfroms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regfroms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Regfroms.
     */
    distinct?: RegfromScalarFieldEnum | RegfromScalarFieldEnum[]
  }


  /**
   * Regfrom findFirstOrThrow
   */
  export type RegfromFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regfrom
     */
    select?: RegfromSelect<ExtArgs> | null
    /**
     * Filter, which Regfrom to fetch.
     */
    where?: RegfromWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regfroms to fetch.
     */
    orderBy?: RegfromOrderByWithRelationInput | RegfromOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Regfroms.
     */
    cursor?: RegfromWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regfroms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regfroms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Regfroms.
     */
    distinct?: RegfromScalarFieldEnum | RegfromScalarFieldEnum[]
  }


  /**
   * Regfrom findMany
   */
  export type RegfromFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regfrom
     */
    select?: RegfromSelect<ExtArgs> | null
    /**
     * Filter, which Regfroms to fetch.
     */
    where?: RegfromWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regfroms to fetch.
     */
    orderBy?: RegfromOrderByWithRelationInput | RegfromOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Regfroms.
     */
    cursor?: RegfromWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regfroms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regfroms.
     */
    skip?: number
    distinct?: RegfromScalarFieldEnum | RegfromScalarFieldEnum[]
  }


  /**
   * Regfrom create
   */
  export type RegfromCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regfrom
     */
    select?: RegfromSelect<ExtArgs> | null
    /**
     * The data needed to create a Regfrom.
     */
    data?: XOR<RegfromCreateInput, RegfromUncheckedCreateInput>
  }


  /**
   * Regfrom createMany
   */
  export type RegfromCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Regfroms.
     */
    data: RegfromCreateManyInput | RegfromCreateManyInput[]
  }


  /**
   * Regfrom update
   */
  export type RegfromUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regfrom
     */
    select?: RegfromSelect<ExtArgs> | null
    /**
     * The data needed to update a Regfrom.
     */
    data: XOR<RegfromUpdateInput, RegfromUncheckedUpdateInput>
    /**
     * Choose, which Regfrom to update.
     */
    where: RegfromWhereUniqueInput
  }


  /**
   * Regfrom updateMany
   */
  export type RegfromUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Regfroms.
     */
    data: XOR<RegfromUpdateManyMutationInput, RegfromUncheckedUpdateManyInput>
    /**
     * Filter which Regfroms to update
     */
    where?: RegfromWhereInput
  }


  /**
   * Regfrom upsert
   */
  export type RegfromUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regfrom
     */
    select?: RegfromSelect<ExtArgs> | null
    /**
     * The filter to search for the Regfrom to update in case it exists.
     */
    where: RegfromWhereUniqueInput
    /**
     * In case the Regfrom found by the `where` argument doesn't exist, create a new Regfrom with this data.
     */
    create: XOR<RegfromCreateInput, RegfromUncheckedCreateInput>
    /**
     * In case the Regfrom was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegfromUpdateInput, RegfromUncheckedUpdateInput>
  }


  /**
   * Regfrom delete
   */
  export type RegfromDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regfrom
     */
    select?: RegfromSelect<ExtArgs> | null
    /**
     * Filter which Regfrom to delete.
     */
    where: RegfromWhereUniqueInput
  }


  /**
   * Regfrom deleteMany
   */
  export type RegfromDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Regfroms to delete
     */
    where?: RegfromWhereInput
  }


  /**
   * Regfrom findRaw
   */
  export type RegfromFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Regfrom aggregateRaw
   */
  export type RegfromAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Regfrom without action
   */
  export type RegfromDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regfrom
     */
    select?: RegfromSelect<ExtArgs> | null
  }



  /**
   * Model RegisterForm
   */

  export type AggregateRegisterForm = {
    _count: RegisterFormCountAggregateOutputType | null
    _min: RegisterFormMinAggregateOutputType | null
    _max: RegisterFormMaxAggregateOutputType | null
  }

  export type RegisterFormMinAggregateOutputType = {
    id: string | null
    regId: string | null
    regIdpersonal: string | null
    regBirth: string | null
    regPrefix: string | null
    regSex: string | null
    regNation: string | null
    regName: string | null
    regLastname: string | null
    regEname: string | null
    regElastname: string | null
    regPhone: string | null
    regEmail: string | null
    regImg: string | null
    regSchool: string | null
    regDegree: string | null
    regGpa: string | null
    regProgram: string | null
    regFaculty: string | null
    regMajor: string | null
  }

  export type RegisterFormMaxAggregateOutputType = {
    id: string | null
    regId: string | null
    regIdpersonal: string | null
    regBirth: string | null
    regPrefix: string | null
    regSex: string | null
    regNation: string | null
    regName: string | null
    regLastname: string | null
    regEname: string | null
    regElastname: string | null
    regPhone: string | null
    regEmail: string | null
    regImg: string | null
    regSchool: string | null
    regDegree: string | null
    regGpa: string | null
    regProgram: string | null
    regFaculty: string | null
    regMajor: string | null
  }

  export type RegisterFormCountAggregateOutputType = {
    id: number
    regId: number
    regIdpersonal: number
    regBirth: number
    regPrefix: number
    regSex: number
    regNation: number
    regName: number
    regLastname: number
    regEname: number
    regElastname: number
    regPhone: number
    regEmail: number
    regImg: number
    regSchool: number
    regDegree: number
    regGpa: number
    regProgram: number
    regFaculty: number
    regMajor: number
    _all: number
  }


  export type RegisterFormMinAggregateInputType = {
    id?: true
    regId?: true
    regIdpersonal?: true
    regBirth?: true
    regPrefix?: true
    regSex?: true
    regNation?: true
    regName?: true
    regLastname?: true
    regEname?: true
    regElastname?: true
    regPhone?: true
    regEmail?: true
    regImg?: true
    regSchool?: true
    regDegree?: true
    regGpa?: true
    regProgram?: true
    regFaculty?: true
    regMajor?: true
  }

  export type RegisterFormMaxAggregateInputType = {
    id?: true
    regId?: true
    regIdpersonal?: true
    regBirth?: true
    regPrefix?: true
    regSex?: true
    regNation?: true
    regName?: true
    regLastname?: true
    regEname?: true
    regElastname?: true
    regPhone?: true
    regEmail?: true
    regImg?: true
    regSchool?: true
    regDegree?: true
    regGpa?: true
    regProgram?: true
    regFaculty?: true
    regMajor?: true
  }

  export type RegisterFormCountAggregateInputType = {
    id?: true
    regId?: true
    regIdpersonal?: true
    regBirth?: true
    regPrefix?: true
    regSex?: true
    regNation?: true
    regName?: true
    regLastname?: true
    regEname?: true
    regElastname?: true
    regPhone?: true
    regEmail?: true
    regImg?: true
    regSchool?: true
    regDegree?: true
    regGpa?: true
    regProgram?: true
    regFaculty?: true
    regMajor?: true
    _all?: true
  }

  export type RegisterFormAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RegisterForm to aggregate.
     */
    where?: RegisterFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegisterForms to fetch.
     */
    orderBy?: RegisterFormOrderByWithRelationInput | RegisterFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegisterFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegisterForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegisterForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RegisterForms
    **/
    _count?: true | RegisterFormCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegisterFormMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegisterFormMaxAggregateInputType
  }

  export type GetRegisterFormAggregateType<T extends RegisterFormAggregateArgs> = {
        [P in keyof T & keyof AggregateRegisterForm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegisterForm[P]>
      : GetScalarType<T[P], AggregateRegisterForm[P]>
  }




  export type RegisterFormGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegisterFormWhereInput
    orderBy?: RegisterFormOrderByWithAggregationInput | RegisterFormOrderByWithAggregationInput[]
    by: RegisterFormScalarFieldEnum[] | RegisterFormScalarFieldEnum
    having?: RegisterFormScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegisterFormCountAggregateInputType | true
    _min?: RegisterFormMinAggregateInputType
    _max?: RegisterFormMaxAggregateInputType
  }

  export type RegisterFormGroupByOutputType = {
    id: string
    regId: string | null
    regIdpersonal: string | null
    regBirth: string | null
    regPrefix: string | null
    regSex: string | null
    regNation: string | null
    regName: string | null
    regLastname: string | null
    regEname: string | null
    regElastname: string | null
    regPhone: string | null
    regEmail: string | null
    regImg: string | null
    regSchool: string | null
    regDegree: string | null
    regGpa: string | null
    regProgram: string | null
    regFaculty: string | null
    regMajor: string | null
    _count: RegisterFormCountAggregateOutputType | null
    _min: RegisterFormMinAggregateOutputType | null
    _max: RegisterFormMaxAggregateOutputType | null
  }

  type GetRegisterFormGroupByPayload<T extends RegisterFormGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegisterFormGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegisterFormGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegisterFormGroupByOutputType[P]>
            : GetScalarType<T[P], RegisterFormGroupByOutputType[P]>
        }
      >
    >


  export type RegisterFormSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    regId?: boolean
    regIdpersonal?: boolean
    regBirth?: boolean
    regPrefix?: boolean
    regSex?: boolean
    regNation?: boolean
    regName?: boolean
    regLastname?: boolean
    regEname?: boolean
    regElastname?: boolean
    regPhone?: boolean
    regEmail?: boolean
    regImg?: boolean
    regSchool?: boolean
    regDegree?: boolean
    regGpa?: boolean
    regProgram?: boolean
    regFaculty?: boolean
    regMajor?: boolean
  }, ExtArgs["result"]["registerForm"]>

  export type RegisterFormSelectScalar = {
    id?: boolean
    regId?: boolean
    regIdpersonal?: boolean
    regBirth?: boolean
    regPrefix?: boolean
    regSex?: boolean
    regNation?: boolean
    regName?: boolean
    regLastname?: boolean
    regEname?: boolean
    regElastname?: boolean
    regPhone?: boolean
    regEmail?: boolean
    regImg?: boolean
    regSchool?: boolean
    regDegree?: boolean
    regGpa?: boolean
    regProgram?: boolean
    regFaculty?: boolean
    regMajor?: boolean
  }


  export type $RegisterFormPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RegisterForm"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      regId: string | null
      regIdpersonal: string | null
      regBirth: string | null
      regPrefix: string | null
      regSex: string | null
      regNation: string | null
      regName: string | null
      regLastname: string | null
      regEname: string | null
      regElastname: string | null
      regPhone: string | null
      regEmail: string | null
      regImg: string | null
      regSchool: string | null
      regDegree: string | null
      regGpa: string | null
      regProgram: string | null
      regFaculty: string | null
      regMajor: string | null
    }, ExtArgs["result"]["registerForm"]>
    composites: {}
  }


  type RegisterFormGetPayload<S extends boolean | null | undefined | RegisterFormDefaultArgs> = $Result.GetResult<Prisma.$RegisterFormPayload, S>

  type RegisterFormCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RegisterFormFindManyArgs, 'select' | 'include'> & {
      select?: RegisterFormCountAggregateInputType | true
    }

  export interface RegisterFormDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RegisterForm'], meta: { name: 'RegisterForm' } }
    /**
     * Find zero or one RegisterForm that matches the filter.
     * @param {RegisterFormFindUniqueArgs} args - Arguments to find a RegisterForm
     * @example
     * // Get one RegisterForm
     * const registerForm = await prisma.registerForm.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RegisterFormFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, RegisterFormFindUniqueArgs<ExtArgs>>
    ): Prisma__RegisterFormClient<$Result.GetResult<Prisma.$RegisterFormPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one RegisterForm that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RegisterFormFindUniqueOrThrowArgs} args - Arguments to find a RegisterForm
     * @example
     * // Get one RegisterForm
     * const registerForm = await prisma.registerForm.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RegisterFormFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RegisterFormFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RegisterFormClient<$Result.GetResult<Prisma.$RegisterFormPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first RegisterForm that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegisterFormFindFirstArgs} args - Arguments to find a RegisterForm
     * @example
     * // Get one RegisterForm
     * const registerForm = await prisma.registerForm.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RegisterFormFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, RegisterFormFindFirstArgs<ExtArgs>>
    ): Prisma__RegisterFormClient<$Result.GetResult<Prisma.$RegisterFormPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first RegisterForm that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegisterFormFindFirstOrThrowArgs} args - Arguments to find a RegisterForm
     * @example
     * // Get one RegisterForm
     * const registerForm = await prisma.registerForm.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RegisterFormFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RegisterFormFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RegisterFormClient<$Result.GetResult<Prisma.$RegisterFormPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more RegisterForms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegisterFormFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RegisterForms
     * const registerForms = await prisma.registerForm.findMany()
     * 
     * // Get first 10 RegisterForms
     * const registerForms = await prisma.registerForm.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const registerFormWithIdOnly = await prisma.registerForm.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RegisterFormFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RegisterFormFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegisterFormPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a RegisterForm.
     * @param {RegisterFormCreateArgs} args - Arguments to create a RegisterForm.
     * @example
     * // Create one RegisterForm
     * const RegisterForm = await prisma.registerForm.create({
     *   data: {
     *     // ... data to create a RegisterForm
     *   }
     * })
     * 
    **/
    create<T extends RegisterFormCreateArgs<ExtArgs>>(
      args: SelectSubset<T, RegisterFormCreateArgs<ExtArgs>>
    ): Prisma__RegisterFormClient<$Result.GetResult<Prisma.$RegisterFormPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many RegisterForms.
     *     @param {RegisterFormCreateManyArgs} args - Arguments to create many RegisterForms.
     *     @example
     *     // Create many RegisterForms
     *     const registerForm = await prisma.registerForm.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RegisterFormCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RegisterFormCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RegisterForm.
     * @param {RegisterFormDeleteArgs} args - Arguments to delete one RegisterForm.
     * @example
     * // Delete one RegisterForm
     * const RegisterForm = await prisma.registerForm.delete({
     *   where: {
     *     // ... filter to delete one RegisterForm
     *   }
     * })
     * 
    **/
    delete<T extends RegisterFormDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, RegisterFormDeleteArgs<ExtArgs>>
    ): Prisma__RegisterFormClient<$Result.GetResult<Prisma.$RegisterFormPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one RegisterForm.
     * @param {RegisterFormUpdateArgs} args - Arguments to update one RegisterForm.
     * @example
     * // Update one RegisterForm
     * const registerForm = await prisma.registerForm.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RegisterFormUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, RegisterFormUpdateArgs<ExtArgs>>
    ): Prisma__RegisterFormClient<$Result.GetResult<Prisma.$RegisterFormPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more RegisterForms.
     * @param {RegisterFormDeleteManyArgs} args - Arguments to filter RegisterForms to delete.
     * @example
     * // Delete a few RegisterForms
     * const { count } = await prisma.registerForm.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RegisterFormDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RegisterFormDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RegisterForms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegisterFormUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RegisterForms
     * const registerForm = await prisma.registerForm.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RegisterFormUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, RegisterFormUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RegisterForm.
     * @param {RegisterFormUpsertArgs} args - Arguments to update or create a RegisterForm.
     * @example
     * // Update or create a RegisterForm
     * const registerForm = await prisma.registerForm.upsert({
     *   create: {
     *     // ... data to create a RegisterForm
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RegisterForm we want to update
     *   }
     * })
    **/
    upsert<T extends RegisterFormUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, RegisterFormUpsertArgs<ExtArgs>>
    ): Prisma__RegisterFormClient<$Result.GetResult<Prisma.$RegisterFormPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more RegisterForms that matches the filter.
     * @param {RegisterFormFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const registerForm = await prisma.registerForm.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: RegisterFormFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a RegisterForm.
     * @param {RegisterFormAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const registerForm = await prisma.registerForm.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: RegisterFormAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of RegisterForms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegisterFormCountArgs} args - Arguments to filter RegisterForms to count.
     * @example
     * // Count the number of RegisterForms
     * const count = await prisma.registerForm.count({
     *   where: {
     *     // ... the filter for the RegisterForms we want to count
     *   }
     * })
    **/
    count<T extends RegisterFormCountArgs>(
      args?: Subset<T, RegisterFormCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegisterFormCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RegisterForm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegisterFormAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RegisterFormAggregateArgs>(args: Subset<T, RegisterFormAggregateArgs>): Prisma.PrismaPromise<GetRegisterFormAggregateType<T>>

    /**
     * Group by RegisterForm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegisterFormGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RegisterFormGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegisterFormGroupByArgs['orderBy'] }
        : { orderBy?: RegisterFormGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RegisterFormGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegisterFormGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RegisterForm model
   */
  readonly fields: RegisterFormFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RegisterForm.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegisterFormClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the RegisterForm model
   */ 
  interface RegisterFormFieldRefs {
    readonly id: FieldRef<"RegisterForm", 'String'>
    readonly regId: FieldRef<"RegisterForm", 'String'>
    readonly regIdpersonal: FieldRef<"RegisterForm", 'String'>
    readonly regBirth: FieldRef<"RegisterForm", 'String'>
    readonly regPrefix: FieldRef<"RegisterForm", 'String'>
    readonly regSex: FieldRef<"RegisterForm", 'String'>
    readonly regNation: FieldRef<"RegisterForm", 'String'>
    readonly regName: FieldRef<"RegisterForm", 'String'>
    readonly regLastname: FieldRef<"RegisterForm", 'String'>
    readonly regEname: FieldRef<"RegisterForm", 'String'>
    readonly regElastname: FieldRef<"RegisterForm", 'String'>
    readonly regPhone: FieldRef<"RegisterForm", 'String'>
    readonly regEmail: FieldRef<"RegisterForm", 'String'>
    readonly regImg: FieldRef<"RegisterForm", 'String'>
    readonly regSchool: FieldRef<"RegisterForm", 'String'>
    readonly regDegree: FieldRef<"RegisterForm", 'String'>
    readonly regGpa: FieldRef<"RegisterForm", 'String'>
    readonly regProgram: FieldRef<"RegisterForm", 'String'>
    readonly regFaculty: FieldRef<"RegisterForm", 'String'>
    readonly regMajor: FieldRef<"RegisterForm", 'String'>
  }
    

  // Custom InputTypes

  /**
   * RegisterForm findUnique
   */
  export type RegisterFormFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegisterForm
     */
    select?: RegisterFormSelect<ExtArgs> | null
    /**
     * Filter, which RegisterForm to fetch.
     */
    where: RegisterFormWhereUniqueInput
  }


  /**
   * RegisterForm findUniqueOrThrow
   */
  export type RegisterFormFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegisterForm
     */
    select?: RegisterFormSelect<ExtArgs> | null
    /**
     * Filter, which RegisterForm to fetch.
     */
    where: RegisterFormWhereUniqueInput
  }


  /**
   * RegisterForm findFirst
   */
  export type RegisterFormFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegisterForm
     */
    select?: RegisterFormSelect<ExtArgs> | null
    /**
     * Filter, which RegisterForm to fetch.
     */
    where?: RegisterFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegisterForms to fetch.
     */
    orderBy?: RegisterFormOrderByWithRelationInput | RegisterFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegisterForms.
     */
    cursor?: RegisterFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegisterForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegisterForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegisterForms.
     */
    distinct?: RegisterFormScalarFieldEnum | RegisterFormScalarFieldEnum[]
  }


  /**
   * RegisterForm findFirstOrThrow
   */
  export type RegisterFormFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegisterForm
     */
    select?: RegisterFormSelect<ExtArgs> | null
    /**
     * Filter, which RegisterForm to fetch.
     */
    where?: RegisterFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegisterForms to fetch.
     */
    orderBy?: RegisterFormOrderByWithRelationInput | RegisterFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegisterForms.
     */
    cursor?: RegisterFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegisterForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegisterForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegisterForms.
     */
    distinct?: RegisterFormScalarFieldEnum | RegisterFormScalarFieldEnum[]
  }


  /**
   * RegisterForm findMany
   */
  export type RegisterFormFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegisterForm
     */
    select?: RegisterFormSelect<ExtArgs> | null
    /**
     * Filter, which RegisterForms to fetch.
     */
    where?: RegisterFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegisterForms to fetch.
     */
    orderBy?: RegisterFormOrderByWithRelationInput | RegisterFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RegisterForms.
     */
    cursor?: RegisterFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegisterForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegisterForms.
     */
    skip?: number
    distinct?: RegisterFormScalarFieldEnum | RegisterFormScalarFieldEnum[]
  }


  /**
   * RegisterForm create
   */
  export type RegisterFormCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegisterForm
     */
    select?: RegisterFormSelect<ExtArgs> | null
    /**
     * The data needed to create a RegisterForm.
     */
    data?: XOR<RegisterFormCreateInput, RegisterFormUncheckedCreateInput>
  }


  /**
   * RegisterForm createMany
   */
  export type RegisterFormCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RegisterForms.
     */
    data: RegisterFormCreateManyInput | RegisterFormCreateManyInput[]
  }


  /**
   * RegisterForm update
   */
  export type RegisterFormUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegisterForm
     */
    select?: RegisterFormSelect<ExtArgs> | null
    /**
     * The data needed to update a RegisterForm.
     */
    data: XOR<RegisterFormUpdateInput, RegisterFormUncheckedUpdateInput>
    /**
     * Choose, which RegisterForm to update.
     */
    where: RegisterFormWhereUniqueInput
  }


  /**
   * RegisterForm updateMany
   */
  export type RegisterFormUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RegisterForms.
     */
    data: XOR<RegisterFormUpdateManyMutationInput, RegisterFormUncheckedUpdateManyInput>
    /**
     * Filter which RegisterForms to update
     */
    where?: RegisterFormWhereInput
  }


  /**
   * RegisterForm upsert
   */
  export type RegisterFormUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegisterForm
     */
    select?: RegisterFormSelect<ExtArgs> | null
    /**
     * The filter to search for the RegisterForm to update in case it exists.
     */
    where: RegisterFormWhereUniqueInput
    /**
     * In case the RegisterForm found by the `where` argument doesn't exist, create a new RegisterForm with this data.
     */
    create: XOR<RegisterFormCreateInput, RegisterFormUncheckedCreateInput>
    /**
     * In case the RegisterForm was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegisterFormUpdateInput, RegisterFormUncheckedUpdateInput>
  }


  /**
   * RegisterForm delete
   */
  export type RegisterFormDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegisterForm
     */
    select?: RegisterFormSelect<ExtArgs> | null
    /**
     * Filter which RegisterForm to delete.
     */
    where: RegisterFormWhereUniqueInput
  }


  /**
   * RegisterForm deleteMany
   */
  export type RegisterFormDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RegisterForms to delete
     */
    where?: RegisterFormWhereInput
  }


  /**
   * RegisterForm findRaw
   */
  export type RegisterFormFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * RegisterForm aggregateRaw
   */
  export type RegisterFormAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * RegisterForm without action
   */
  export type RegisterFormDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegisterForm
     */
    select?: RegisterFormSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const RegSchoolScalarFieldEnum: {
    id: 'id',
    irImg: 'irImg',
    irDescription: 'irDescription'
  };

  export type RegSchoolScalarFieldEnum = (typeof RegSchoolScalarFieldEnum)[keyof typeof RegSchoolScalarFieldEnum]


  export const RegfromScalarFieldEnum: {
    id: 'id',
    educationOffice: 'educationOffice',
    fname: 'fname',
    lname: 'lname',
    birthday: 'birthday',
    age: 'age',
    idcard: 'idcard',
    religion: 'religion',
    nationality: 'nationality',
    occupation: 'occupation',
    avgincome: 'avgincome',
    fathersname: 'fathersname',
    fanationality: 'fanationality',
    faavgincome: 'faavgincome',
    mothersname: 'mothersname',
    monationality: 'monationality',
    moavgincome: 'moavgincome',
    endclass: 'endclass',
    endyear: 'endyear',
    schoolend: 'schoolend',
    enddistrict: 'enddistrict',
    endprovince: 'endprovince',
    dhamma: 'dhamma',
    endyeardhamma: 'endyeardhamma',
    endschooldhamma: 'endschooldhamma',
    enddistrictdhamma: 'enddistrictdhamma',
    endprovincedhamma: 'endprovincedhamma',
    address: 'address',
    group: 'group',
    alley: 'alley',
    road: 'road',
    subdistrict: 'subdistrict',
    district: 'district',
    province: 'province',
    zipcode: 'zipcode',
    tel: 'tel',
    imgprifile: 'imgprifile',
    imgqualification: 'imgqualification',
    imghouseregistration: 'imghouseregistration',
    imgidcard: 'imgidcard'
  };

  export type RegfromScalarFieldEnum = (typeof RegfromScalarFieldEnum)[keyof typeof RegfromScalarFieldEnum]


  export const RegisterFormScalarFieldEnum: {
    id: 'id',
    regId: 'regId',
    regIdpersonal: 'regIdpersonal',
    regBirth: 'regBirth',
    regPrefix: 'regPrefix',
    regSex: 'regSex',
    regNation: 'regNation',
    regName: 'regName',
    regLastname: 'regLastname',
    regEname: 'regEname',
    regElastname: 'regElastname',
    regPhone: 'regPhone',
    regEmail: 'regEmail',
    regImg: 'regImg',
    regSchool: 'regSchool',
    regDegree: 'regDegree',
    regGpa: 'regGpa',
    regProgram: 'regProgram',
    regFaculty: 'regFaculty',
    regMajor: 'regMajor'
  };

  export type RegisterFormScalarFieldEnum = (typeof RegisterFormScalarFieldEnum)[keyof typeof RegisterFormScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type RegSchoolWhereInput = {
    AND?: RegSchoolWhereInput | RegSchoolWhereInput[]
    OR?: RegSchoolWhereInput[]
    NOT?: RegSchoolWhereInput | RegSchoolWhereInput[]
    id?: StringFilter<"RegSchool"> | string
    irImg?: StringNullableFilter<"RegSchool"> | string | null
    irDescription?: StringNullableFilter<"RegSchool"> | string | null
  }

  export type RegSchoolOrderByWithRelationInput = {
    id?: SortOrder
    irImg?: SortOrder
    irDescription?: SortOrder
  }

  export type RegSchoolWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RegSchoolWhereInput | RegSchoolWhereInput[]
    OR?: RegSchoolWhereInput[]
    NOT?: RegSchoolWhereInput | RegSchoolWhereInput[]
    irImg?: StringNullableFilter<"RegSchool"> | string | null
    irDescription?: StringNullableFilter<"RegSchool"> | string | null
  }, "id">

  export type RegSchoolOrderByWithAggregationInput = {
    id?: SortOrder
    irImg?: SortOrder
    irDescription?: SortOrder
    _count?: RegSchoolCountOrderByAggregateInput
    _max?: RegSchoolMaxOrderByAggregateInput
    _min?: RegSchoolMinOrderByAggregateInput
  }

  export type RegSchoolScalarWhereWithAggregatesInput = {
    AND?: RegSchoolScalarWhereWithAggregatesInput | RegSchoolScalarWhereWithAggregatesInput[]
    OR?: RegSchoolScalarWhereWithAggregatesInput[]
    NOT?: RegSchoolScalarWhereWithAggregatesInput | RegSchoolScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RegSchool"> | string
    irImg?: StringNullableWithAggregatesFilter<"RegSchool"> | string | null
    irDescription?: StringNullableWithAggregatesFilter<"RegSchool"> | string | null
  }

  export type RegfromWhereInput = {
    AND?: RegfromWhereInput | RegfromWhereInput[]
    OR?: RegfromWhereInput[]
    NOT?: RegfromWhereInput | RegfromWhereInput[]
    id?: StringFilter<"Regfrom"> | string
    educationOffice?: StringNullableFilter<"Regfrom"> | string | null
    fname?: StringNullableFilter<"Regfrom"> | string | null
    lname?: StringNullableFilter<"Regfrom"> | string | null
    birthday?: StringNullableFilter<"Regfrom"> | string | null
    age?: StringNullableFilter<"Regfrom"> | string | null
    idcard?: StringNullableFilter<"Regfrom"> | string | null
    religion?: StringNullableFilter<"Regfrom"> | string | null
    nationality?: StringNullableFilter<"Regfrom"> | string | null
    occupation?: StringNullableFilter<"Regfrom"> | string | null
    avgincome?: StringNullableFilter<"Regfrom"> | string | null
    fathersname?: StringNullableFilter<"Regfrom"> | string | null
    fanationality?: StringNullableFilter<"Regfrom"> | string | null
    faavgincome?: StringNullableFilter<"Regfrom"> | string | null
    mothersname?: StringNullableFilter<"Regfrom"> | string | null
    monationality?: StringNullableFilter<"Regfrom"> | string | null
    moavgincome?: StringNullableFilter<"Regfrom"> | string | null
    endclass?: StringNullableFilter<"Regfrom"> | string | null
    endyear?: StringNullableFilter<"Regfrom"> | string | null
    schoolend?: StringNullableFilter<"Regfrom"> | string | null
    enddistrict?: StringNullableFilter<"Regfrom"> | string | null
    endprovince?: StringNullableFilter<"Regfrom"> | string | null
    dhamma?: StringNullableFilter<"Regfrom"> | string | null
    endyeardhamma?: StringNullableFilter<"Regfrom"> | string | null
    endschooldhamma?: StringNullableFilter<"Regfrom"> | string | null
    enddistrictdhamma?: StringNullableFilter<"Regfrom"> | string | null
    endprovincedhamma?: StringNullableFilter<"Regfrom"> | string | null
    address?: StringNullableFilter<"Regfrom"> | string | null
    group?: StringNullableFilter<"Regfrom"> | string | null
    alley?: StringNullableFilter<"Regfrom"> | string | null
    road?: StringNullableFilter<"Regfrom"> | string | null
    subdistrict?: StringNullableFilter<"Regfrom"> | string | null
    district?: StringNullableFilter<"Regfrom"> | string | null
    province?: StringNullableFilter<"Regfrom"> | string | null
    zipcode?: StringNullableFilter<"Regfrom"> | string | null
    tel?: StringNullableFilter<"Regfrom"> | string | null
    imgprifile?: StringNullableFilter<"Regfrom"> | string | null
    imgqualification?: StringNullableFilter<"Regfrom"> | string | null
    imghouseregistration?: StringNullableFilter<"Regfrom"> | string | null
    imgidcard?: StringNullableFilter<"Regfrom"> | string | null
  }

  export type RegfromOrderByWithRelationInput = {
    id?: SortOrder
    educationOffice?: SortOrder
    fname?: SortOrder
    lname?: SortOrder
    birthday?: SortOrder
    age?: SortOrder
    idcard?: SortOrder
    religion?: SortOrder
    nationality?: SortOrder
    occupation?: SortOrder
    avgincome?: SortOrder
    fathersname?: SortOrder
    fanationality?: SortOrder
    faavgincome?: SortOrder
    mothersname?: SortOrder
    monationality?: SortOrder
    moavgincome?: SortOrder
    endclass?: SortOrder
    endyear?: SortOrder
    schoolend?: SortOrder
    enddistrict?: SortOrder
    endprovince?: SortOrder
    dhamma?: SortOrder
    endyeardhamma?: SortOrder
    endschooldhamma?: SortOrder
    enddistrictdhamma?: SortOrder
    endprovincedhamma?: SortOrder
    address?: SortOrder
    group?: SortOrder
    alley?: SortOrder
    road?: SortOrder
    subdistrict?: SortOrder
    district?: SortOrder
    province?: SortOrder
    zipcode?: SortOrder
    tel?: SortOrder
    imgprifile?: SortOrder
    imgqualification?: SortOrder
    imghouseregistration?: SortOrder
    imgidcard?: SortOrder
  }

  export type RegfromWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RegfromWhereInput | RegfromWhereInput[]
    OR?: RegfromWhereInput[]
    NOT?: RegfromWhereInput | RegfromWhereInput[]
    educationOffice?: StringNullableFilter<"Regfrom"> | string | null
    fname?: StringNullableFilter<"Regfrom"> | string | null
    lname?: StringNullableFilter<"Regfrom"> | string | null
    birthday?: StringNullableFilter<"Regfrom"> | string | null
    age?: StringNullableFilter<"Regfrom"> | string | null
    idcard?: StringNullableFilter<"Regfrom"> | string | null
    religion?: StringNullableFilter<"Regfrom"> | string | null
    nationality?: StringNullableFilter<"Regfrom"> | string | null
    occupation?: StringNullableFilter<"Regfrom"> | string | null
    avgincome?: StringNullableFilter<"Regfrom"> | string | null
    fathersname?: StringNullableFilter<"Regfrom"> | string | null
    fanationality?: StringNullableFilter<"Regfrom"> | string | null
    faavgincome?: StringNullableFilter<"Regfrom"> | string | null
    mothersname?: StringNullableFilter<"Regfrom"> | string | null
    monationality?: StringNullableFilter<"Regfrom"> | string | null
    moavgincome?: StringNullableFilter<"Regfrom"> | string | null
    endclass?: StringNullableFilter<"Regfrom"> | string | null
    endyear?: StringNullableFilter<"Regfrom"> | string | null
    schoolend?: StringNullableFilter<"Regfrom"> | string | null
    enddistrict?: StringNullableFilter<"Regfrom"> | string | null
    endprovince?: StringNullableFilter<"Regfrom"> | string | null
    dhamma?: StringNullableFilter<"Regfrom"> | string | null
    endyeardhamma?: StringNullableFilter<"Regfrom"> | string | null
    endschooldhamma?: StringNullableFilter<"Regfrom"> | string | null
    enddistrictdhamma?: StringNullableFilter<"Regfrom"> | string | null
    endprovincedhamma?: StringNullableFilter<"Regfrom"> | string | null
    address?: StringNullableFilter<"Regfrom"> | string | null
    group?: StringNullableFilter<"Regfrom"> | string | null
    alley?: StringNullableFilter<"Regfrom"> | string | null
    road?: StringNullableFilter<"Regfrom"> | string | null
    subdistrict?: StringNullableFilter<"Regfrom"> | string | null
    district?: StringNullableFilter<"Regfrom"> | string | null
    province?: StringNullableFilter<"Regfrom"> | string | null
    zipcode?: StringNullableFilter<"Regfrom"> | string | null
    tel?: StringNullableFilter<"Regfrom"> | string | null
    imgprifile?: StringNullableFilter<"Regfrom"> | string | null
    imgqualification?: StringNullableFilter<"Regfrom"> | string | null
    imghouseregistration?: StringNullableFilter<"Regfrom"> | string | null
    imgidcard?: StringNullableFilter<"Regfrom"> | string | null
  }, "id">

  export type RegfromOrderByWithAggregationInput = {
    id?: SortOrder
    educationOffice?: SortOrder
    fname?: SortOrder
    lname?: SortOrder
    birthday?: SortOrder
    age?: SortOrder
    idcard?: SortOrder
    religion?: SortOrder
    nationality?: SortOrder
    occupation?: SortOrder
    avgincome?: SortOrder
    fathersname?: SortOrder
    fanationality?: SortOrder
    faavgincome?: SortOrder
    mothersname?: SortOrder
    monationality?: SortOrder
    moavgincome?: SortOrder
    endclass?: SortOrder
    endyear?: SortOrder
    schoolend?: SortOrder
    enddistrict?: SortOrder
    endprovince?: SortOrder
    dhamma?: SortOrder
    endyeardhamma?: SortOrder
    endschooldhamma?: SortOrder
    enddistrictdhamma?: SortOrder
    endprovincedhamma?: SortOrder
    address?: SortOrder
    group?: SortOrder
    alley?: SortOrder
    road?: SortOrder
    subdistrict?: SortOrder
    district?: SortOrder
    province?: SortOrder
    zipcode?: SortOrder
    tel?: SortOrder
    imgprifile?: SortOrder
    imgqualification?: SortOrder
    imghouseregistration?: SortOrder
    imgidcard?: SortOrder
    _count?: RegfromCountOrderByAggregateInput
    _max?: RegfromMaxOrderByAggregateInput
    _min?: RegfromMinOrderByAggregateInput
  }

  export type RegfromScalarWhereWithAggregatesInput = {
    AND?: RegfromScalarWhereWithAggregatesInput | RegfromScalarWhereWithAggregatesInput[]
    OR?: RegfromScalarWhereWithAggregatesInput[]
    NOT?: RegfromScalarWhereWithAggregatesInput | RegfromScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Regfrom"> | string
    educationOffice?: StringNullableWithAggregatesFilter<"Regfrom"> | string | null
    fname?: StringNullableWithAggregatesFilter<"Regfrom"> | string | null
    lname?: StringNullableWithAggregatesFilter<"Regfrom"> | string | null
    birthday?: StringNullableWithAggregatesFilter<"Regfrom"> | string | null
    age?: StringNullableWithAggregatesFilter<"Regfrom"> | string | null
    idcard?: StringNullableWithAggregatesFilter<"Regfrom"> | string | null
    religion?: StringNullableWithAggregatesFilter<"Regfrom"> | string | null
    nationality?: StringNullableWithAggregatesFilter<"Regfrom"> | string | null
    occupation?: StringNullableWithAggregatesFilter<"Regfrom"> | string | null
    avgincome?: StringNullableWithAggregatesFilter<"Regfrom"> | string | null
    fathersname?: StringNullableWithAggregatesFilter<"Regfrom"> | string | null
    fanationality?: StringNullableWithAggregatesFilter<"Regfrom"> | string | null
    faavgincome?: StringNullableWithAggregatesFilter<"Regfrom"> | string | null
    mothersname?: StringNullableWithAggregatesFilter<"Regfrom"> | string | null
    monationality?: StringNullableWithAggregatesFilter<"Regfrom"> | string | null
    moavgincome?: StringNullableWithAggregatesFilter<"Regfrom"> | string | null
    endclass?: StringNullableWithAggregatesFilter<"Regfrom"> | string | null
    endyear?: StringNullableWithAggregatesFilter<"Regfrom"> | string | null
    schoolend?: StringNullableWithAggregatesFilter<"Regfrom"> | string | null
    enddistrict?: StringNullableWithAggregatesFilter<"Regfrom"> | string | null
    endprovince?: StringNullableWithAggregatesFilter<"Regfrom"> | string | null
    dhamma?: StringNullableWithAggregatesFilter<"Regfrom"> | string | null
    endyeardhamma?: StringNullableWithAggregatesFilter<"Regfrom"> | string | null
    endschooldhamma?: StringNullableWithAggregatesFilter<"Regfrom"> | string | null
    enddistrictdhamma?: StringNullableWithAggregatesFilter<"Regfrom"> | string | null
    endprovincedhamma?: StringNullableWithAggregatesFilter<"Regfrom"> | string | null
    address?: StringNullableWithAggregatesFilter<"Regfrom"> | string | null
    group?: StringNullableWithAggregatesFilter<"Regfrom"> | string | null
    alley?: StringNullableWithAggregatesFilter<"Regfrom"> | string | null
    road?: StringNullableWithAggregatesFilter<"Regfrom"> | string | null
    subdistrict?: StringNullableWithAggregatesFilter<"Regfrom"> | string | null
    district?: StringNullableWithAggregatesFilter<"Regfrom"> | string | null
    province?: StringNullableWithAggregatesFilter<"Regfrom"> | string | null
    zipcode?: StringNullableWithAggregatesFilter<"Regfrom"> | string | null
    tel?: StringNullableWithAggregatesFilter<"Regfrom"> | string | null
    imgprifile?: StringNullableWithAggregatesFilter<"Regfrom"> | string | null
    imgqualification?: StringNullableWithAggregatesFilter<"Regfrom"> | string | null
    imghouseregistration?: StringNullableWithAggregatesFilter<"Regfrom"> | string | null
    imgidcard?: StringNullableWithAggregatesFilter<"Regfrom"> | string | null
  }

  export type RegisterFormWhereInput = {
    AND?: RegisterFormWhereInput | RegisterFormWhereInput[]
    OR?: RegisterFormWhereInput[]
    NOT?: RegisterFormWhereInput | RegisterFormWhereInput[]
    id?: StringFilter<"RegisterForm"> | string
    regId?: StringNullableFilter<"RegisterForm"> | string | null
    regIdpersonal?: StringNullableFilter<"RegisterForm"> | string | null
    regBirth?: StringNullableFilter<"RegisterForm"> | string | null
    regPrefix?: StringNullableFilter<"RegisterForm"> | string | null
    regSex?: StringNullableFilter<"RegisterForm"> | string | null
    regNation?: StringNullableFilter<"RegisterForm"> | string | null
    regName?: StringNullableFilter<"RegisterForm"> | string | null
    regLastname?: StringNullableFilter<"RegisterForm"> | string | null
    regEname?: StringNullableFilter<"RegisterForm"> | string | null
    regElastname?: StringNullableFilter<"RegisterForm"> | string | null
    regPhone?: StringNullableFilter<"RegisterForm"> | string | null
    regEmail?: StringNullableFilter<"RegisterForm"> | string | null
    regImg?: StringNullableFilter<"RegisterForm"> | string | null
    regSchool?: StringNullableFilter<"RegisterForm"> | string | null
    regDegree?: StringNullableFilter<"RegisterForm"> | string | null
    regGpa?: StringNullableFilter<"RegisterForm"> | string | null
    regProgram?: StringNullableFilter<"RegisterForm"> | string | null
    regFaculty?: StringNullableFilter<"RegisterForm"> | string | null
    regMajor?: StringNullableFilter<"RegisterForm"> | string | null
  }

  export type RegisterFormOrderByWithRelationInput = {
    id?: SortOrder
    regId?: SortOrder
    regIdpersonal?: SortOrder
    regBirth?: SortOrder
    regPrefix?: SortOrder
    regSex?: SortOrder
    regNation?: SortOrder
    regName?: SortOrder
    regLastname?: SortOrder
    regEname?: SortOrder
    regElastname?: SortOrder
    regPhone?: SortOrder
    regEmail?: SortOrder
    regImg?: SortOrder
    regSchool?: SortOrder
    regDegree?: SortOrder
    regGpa?: SortOrder
    regProgram?: SortOrder
    regFaculty?: SortOrder
    regMajor?: SortOrder
  }

  export type RegisterFormWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RegisterFormWhereInput | RegisterFormWhereInput[]
    OR?: RegisterFormWhereInput[]
    NOT?: RegisterFormWhereInput | RegisterFormWhereInput[]
    regId?: StringNullableFilter<"RegisterForm"> | string | null
    regIdpersonal?: StringNullableFilter<"RegisterForm"> | string | null
    regBirth?: StringNullableFilter<"RegisterForm"> | string | null
    regPrefix?: StringNullableFilter<"RegisterForm"> | string | null
    regSex?: StringNullableFilter<"RegisterForm"> | string | null
    regNation?: StringNullableFilter<"RegisterForm"> | string | null
    regName?: StringNullableFilter<"RegisterForm"> | string | null
    regLastname?: StringNullableFilter<"RegisterForm"> | string | null
    regEname?: StringNullableFilter<"RegisterForm"> | string | null
    regElastname?: StringNullableFilter<"RegisterForm"> | string | null
    regPhone?: StringNullableFilter<"RegisterForm"> | string | null
    regEmail?: StringNullableFilter<"RegisterForm"> | string | null
    regImg?: StringNullableFilter<"RegisterForm"> | string | null
    regSchool?: StringNullableFilter<"RegisterForm"> | string | null
    regDegree?: StringNullableFilter<"RegisterForm"> | string | null
    regGpa?: StringNullableFilter<"RegisterForm"> | string | null
    regProgram?: StringNullableFilter<"RegisterForm"> | string | null
    regFaculty?: StringNullableFilter<"RegisterForm"> | string | null
    regMajor?: StringNullableFilter<"RegisterForm"> | string | null
  }, "id">

  export type RegisterFormOrderByWithAggregationInput = {
    id?: SortOrder
    regId?: SortOrder
    regIdpersonal?: SortOrder
    regBirth?: SortOrder
    regPrefix?: SortOrder
    regSex?: SortOrder
    regNation?: SortOrder
    regName?: SortOrder
    regLastname?: SortOrder
    regEname?: SortOrder
    regElastname?: SortOrder
    regPhone?: SortOrder
    regEmail?: SortOrder
    regImg?: SortOrder
    regSchool?: SortOrder
    regDegree?: SortOrder
    regGpa?: SortOrder
    regProgram?: SortOrder
    regFaculty?: SortOrder
    regMajor?: SortOrder
    _count?: RegisterFormCountOrderByAggregateInput
    _max?: RegisterFormMaxOrderByAggregateInput
    _min?: RegisterFormMinOrderByAggregateInput
  }

  export type RegisterFormScalarWhereWithAggregatesInput = {
    AND?: RegisterFormScalarWhereWithAggregatesInput | RegisterFormScalarWhereWithAggregatesInput[]
    OR?: RegisterFormScalarWhereWithAggregatesInput[]
    NOT?: RegisterFormScalarWhereWithAggregatesInput | RegisterFormScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RegisterForm"> | string
    regId?: StringNullableWithAggregatesFilter<"RegisterForm"> | string | null
    regIdpersonal?: StringNullableWithAggregatesFilter<"RegisterForm"> | string | null
    regBirth?: StringNullableWithAggregatesFilter<"RegisterForm"> | string | null
    regPrefix?: StringNullableWithAggregatesFilter<"RegisterForm"> | string | null
    regSex?: StringNullableWithAggregatesFilter<"RegisterForm"> | string | null
    regNation?: StringNullableWithAggregatesFilter<"RegisterForm"> | string | null
    regName?: StringNullableWithAggregatesFilter<"RegisterForm"> | string | null
    regLastname?: StringNullableWithAggregatesFilter<"RegisterForm"> | string | null
    regEname?: StringNullableWithAggregatesFilter<"RegisterForm"> | string | null
    regElastname?: StringNullableWithAggregatesFilter<"RegisterForm"> | string | null
    regPhone?: StringNullableWithAggregatesFilter<"RegisterForm"> | string | null
    regEmail?: StringNullableWithAggregatesFilter<"RegisterForm"> | string | null
    regImg?: StringNullableWithAggregatesFilter<"RegisterForm"> | string | null
    regSchool?: StringNullableWithAggregatesFilter<"RegisterForm"> | string | null
    regDegree?: StringNullableWithAggregatesFilter<"RegisterForm"> | string | null
    regGpa?: StringNullableWithAggregatesFilter<"RegisterForm"> | string | null
    regProgram?: StringNullableWithAggregatesFilter<"RegisterForm"> | string | null
    regFaculty?: StringNullableWithAggregatesFilter<"RegisterForm"> | string | null
    regMajor?: StringNullableWithAggregatesFilter<"RegisterForm"> | string | null
  }

  export type RegSchoolCreateInput = {
    id?: string
    irImg?: string | null
    irDescription?: string | null
  }

  export type RegSchoolUncheckedCreateInput = {
    id?: string
    irImg?: string | null
    irDescription?: string | null
  }

  export type RegSchoolUpdateInput = {
    irImg?: NullableStringFieldUpdateOperationsInput | string | null
    irDescription?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RegSchoolUncheckedUpdateInput = {
    irImg?: NullableStringFieldUpdateOperationsInput | string | null
    irDescription?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RegSchoolCreateManyInput = {
    id?: string
    irImg?: string | null
    irDescription?: string | null
  }

  export type RegSchoolUpdateManyMutationInput = {
    irImg?: NullableStringFieldUpdateOperationsInput | string | null
    irDescription?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RegSchoolUncheckedUpdateManyInput = {
    irImg?: NullableStringFieldUpdateOperationsInput | string | null
    irDescription?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RegfromCreateInput = {
    id?: string
    educationOffice?: string | null
    fname?: string | null
    lname?: string | null
    birthday?: string | null
    age?: string | null
    idcard?: string | null
    religion?: string | null
    nationality?: string | null
    occupation?: string | null
    avgincome?: string | null
    fathersname?: string | null
    fanationality?: string | null
    faavgincome?: string | null
    mothersname?: string | null
    monationality?: string | null
    moavgincome?: string | null
    endclass?: string | null
    endyear?: string | null
    schoolend?: string | null
    enddistrict?: string | null
    endprovince?: string | null
    dhamma?: string | null
    endyeardhamma?: string | null
    endschooldhamma?: string | null
    enddistrictdhamma?: string | null
    endprovincedhamma?: string | null
    address?: string | null
    group?: string | null
    alley?: string | null
    road?: string | null
    subdistrict?: string | null
    district?: string | null
    province?: string | null
    zipcode?: string | null
    tel?: string | null
    imgprifile?: string | null
    imgqualification?: string | null
    imghouseregistration?: string | null
    imgidcard?: string | null
  }

  export type RegfromUncheckedCreateInput = {
    id?: string
    educationOffice?: string | null
    fname?: string | null
    lname?: string | null
    birthday?: string | null
    age?: string | null
    idcard?: string | null
    religion?: string | null
    nationality?: string | null
    occupation?: string | null
    avgincome?: string | null
    fathersname?: string | null
    fanationality?: string | null
    faavgincome?: string | null
    mothersname?: string | null
    monationality?: string | null
    moavgincome?: string | null
    endclass?: string | null
    endyear?: string | null
    schoolend?: string | null
    enddistrict?: string | null
    endprovince?: string | null
    dhamma?: string | null
    endyeardhamma?: string | null
    endschooldhamma?: string | null
    enddistrictdhamma?: string | null
    endprovincedhamma?: string | null
    address?: string | null
    group?: string | null
    alley?: string | null
    road?: string | null
    subdistrict?: string | null
    district?: string | null
    province?: string | null
    zipcode?: string | null
    tel?: string | null
    imgprifile?: string | null
    imgqualification?: string | null
    imghouseregistration?: string | null
    imgidcard?: string | null
  }

  export type RegfromUpdateInput = {
    educationOffice?: NullableStringFieldUpdateOperationsInput | string | null
    fname?: NullableStringFieldUpdateOperationsInput | string | null
    lname?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    idcard?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    avgincome?: NullableStringFieldUpdateOperationsInput | string | null
    fathersname?: NullableStringFieldUpdateOperationsInput | string | null
    fanationality?: NullableStringFieldUpdateOperationsInput | string | null
    faavgincome?: NullableStringFieldUpdateOperationsInput | string | null
    mothersname?: NullableStringFieldUpdateOperationsInput | string | null
    monationality?: NullableStringFieldUpdateOperationsInput | string | null
    moavgincome?: NullableStringFieldUpdateOperationsInput | string | null
    endclass?: NullableStringFieldUpdateOperationsInput | string | null
    endyear?: NullableStringFieldUpdateOperationsInput | string | null
    schoolend?: NullableStringFieldUpdateOperationsInput | string | null
    enddistrict?: NullableStringFieldUpdateOperationsInput | string | null
    endprovince?: NullableStringFieldUpdateOperationsInput | string | null
    dhamma?: NullableStringFieldUpdateOperationsInput | string | null
    endyeardhamma?: NullableStringFieldUpdateOperationsInput | string | null
    endschooldhamma?: NullableStringFieldUpdateOperationsInput | string | null
    enddistrictdhamma?: NullableStringFieldUpdateOperationsInput | string | null
    endprovincedhamma?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    group?: NullableStringFieldUpdateOperationsInput | string | null
    alley?: NullableStringFieldUpdateOperationsInput | string | null
    road?: NullableStringFieldUpdateOperationsInput | string | null
    subdistrict?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    zipcode?: NullableStringFieldUpdateOperationsInput | string | null
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    imgprifile?: NullableStringFieldUpdateOperationsInput | string | null
    imgqualification?: NullableStringFieldUpdateOperationsInput | string | null
    imghouseregistration?: NullableStringFieldUpdateOperationsInput | string | null
    imgidcard?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RegfromUncheckedUpdateInput = {
    educationOffice?: NullableStringFieldUpdateOperationsInput | string | null
    fname?: NullableStringFieldUpdateOperationsInput | string | null
    lname?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    idcard?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    avgincome?: NullableStringFieldUpdateOperationsInput | string | null
    fathersname?: NullableStringFieldUpdateOperationsInput | string | null
    fanationality?: NullableStringFieldUpdateOperationsInput | string | null
    faavgincome?: NullableStringFieldUpdateOperationsInput | string | null
    mothersname?: NullableStringFieldUpdateOperationsInput | string | null
    monationality?: NullableStringFieldUpdateOperationsInput | string | null
    moavgincome?: NullableStringFieldUpdateOperationsInput | string | null
    endclass?: NullableStringFieldUpdateOperationsInput | string | null
    endyear?: NullableStringFieldUpdateOperationsInput | string | null
    schoolend?: NullableStringFieldUpdateOperationsInput | string | null
    enddistrict?: NullableStringFieldUpdateOperationsInput | string | null
    endprovince?: NullableStringFieldUpdateOperationsInput | string | null
    dhamma?: NullableStringFieldUpdateOperationsInput | string | null
    endyeardhamma?: NullableStringFieldUpdateOperationsInput | string | null
    endschooldhamma?: NullableStringFieldUpdateOperationsInput | string | null
    enddistrictdhamma?: NullableStringFieldUpdateOperationsInput | string | null
    endprovincedhamma?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    group?: NullableStringFieldUpdateOperationsInput | string | null
    alley?: NullableStringFieldUpdateOperationsInput | string | null
    road?: NullableStringFieldUpdateOperationsInput | string | null
    subdistrict?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    zipcode?: NullableStringFieldUpdateOperationsInput | string | null
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    imgprifile?: NullableStringFieldUpdateOperationsInput | string | null
    imgqualification?: NullableStringFieldUpdateOperationsInput | string | null
    imghouseregistration?: NullableStringFieldUpdateOperationsInput | string | null
    imgidcard?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RegfromCreateManyInput = {
    id?: string
    educationOffice?: string | null
    fname?: string | null
    lname?: string | null
    birthday?: string | null
    age?: string | null
    idcard?: string | null
    religion?: string | null
    nationality?: string | null
    occupation?: string | null
    avgincome?: string | null
    fathersname?: string | null
    fanationality?: string | null
    faavgincome?: string | null
    mothersname?: string | null
    monationality?: string | null
    moavgincome?: string | null
    endclass?: string | null
    endyear?: string | null
    schoolend?: string | null
    enddistrict?: string | null
    endprovince?: string | null
    dhamma?: string | null
    endyeardhamma?: string | null
    endschooldhamma?: string | null
    enddistrictdhamma?: string | null
    endprovincedhamma?: string | null
    address?: string | null
    group?: string | null
    alley?: string | null
    road?: string | null
    subdistrict?: string | null
    district?: string | null
    province?: string | null
    zipcode?: string | null
    tel?: string | null
    imgprifile?: string | null
    imgqualification?: string | null
    imghouseregistration?: string | null
    imgidcard?: string | null
  }

  export type RegfromUpdateManyMutationInput = {
    educationOffice?: NullableStringFieldUpdateOperationsInput | string | null
    fname?: NullableStringFieldUpdateOperationsInput | string | null
    lname?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    idcard?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    avgincome?: NullableStringFieldUpdateOperationsInput | string | null
    fathersname?: NullableStringFieldUpdateOperationsInput | string | null
    fanationality?: NullableStringFieldUpdateOperationsInput | string | null
    faavgincome?: NullableStringFieldUpdateOperationsInput | string | null
    mothersname?: NullableStringFieldUpdateOperationsInput | string | null
    monationality?: NullableStringFieldUpdateOperationsInput | string | null
    moavgincome?: NullableStringFieldUpdateOperationsInput | string | null
    endclass?: NullableStringFieldUpdateOperationsInput | string | null
    endyear?: NullableStringFieldUpdateOperationsInput | string | null
    schoolend?: NullableStringFieldUpdateOperationsInput | string | null
    enddistrict?: NullableStringFieldUpdateOperationsInput | string | null
    endprovince?: NullableStringFieldUpdateOperationsInput | string | null
    dhamma?: NullableStringFieldUpdateOperationsInput | string | null
    endyeardhamma?: NullableStringFieldUpdateOperationsInput | string | null
    endschooldhamma?: NullableStringFieldUpdateOperationsInput | string | null
    enddistrictdhamma?: NullableStringFieldUpdateOperationsInput | string | null
    endprovincedhamma?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    group?: NullableStringFieldUpdateOperationsInput | string | null
    alley?: NullableStringFieldUpdateOperationsInput | string | null
    road?: NullableStringFieldUpdateOperationsInput | string | null
    subdistrict?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    zipcode?: NullableStringFieldUpdateOperationsInput | string | null
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    imgprifile?: NullableStringFieldUpdateOperationsInput | string | null
    imgqualification?: NullableStringFieldUpdateOperationsInput | string | null
    imghouseregistration?: NullableStringFieldUpdateOperationsInput | string | null
    imgidcard?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RegfromUncheckedUpdateManyInput = {
    educationOffice?: NullableStringFieldUpdateOperationsInput | string | null
    fname?: NullableStringFieldUpdateOperationsInput | string | null
    lname?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    idcard?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    avgincome?: NullableStringFieldUpdateOperationsInput | string | null
    fathersname?: NullableStringFieldUpdateOperationsInput | string | null
    fanationality?: NullableStringFieldUpdateOperationsInput | string | null
    faavgincome?: NullableStringFieldUpdateOperationsInput | string | null
    mothersname?: NullableStringFieldUpdateOperationsInput | string | null
    monationality?: NullableStringFieldUpdateOperationsInput | string | null
    moavgincome?: NullableStringFieldUpdateOperationsInput | string | null
    endclass?: NullableStringFieldUpdateOperationsInput | string | null
    endyear?: NullableStringFieldUpdateOperationsInput | string | null
    schoolend?: NullableStringFieldUpdateOperationsInput | string | null
    enddistrict?: NullableStringFieldUpdateOperationsInput | string | null
    endprovince?: NullableStringFieldUpdateOperationsInput | string | null
    dhamma?: NullableStringFieldUpdateOperationsInput | string | null
    endyeardhamma?: NullableStringFieldUpdateOperationsInput | string | null
    endschooldhamma?: NullableStringFieldUpdateOperationsInput | string | null
    enddistrictdhamma?: NullableStringFieldUpdateOperationsInput | string | null
    endprovincedhamma?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    group?: NullableStringFieldUpdateOperationsInput | string | null
    alley?: NullableStringFieldUpdateOperationsInput | string | null
    road?: NullableStringFieldUpdateOperationsInput | string | null
    subdistrict?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    zipcode?: NullableStringFieldUpdateOperationsInput | string | null
    tel?: NullableStringFieldUpdateOperationsInput | string | null
    imgprifile?: NullableStringFieldUpdateOperationsInput | string | null
    imgqualification?: NullableStringFieldUpdateOperationsInput | string | null
    imghouseregistration?: NullableStringFieldUpdateOperationsInput | string | null
    imgidcard?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RegisterFormCreateInput = {
    id?: string
    regId?: string | null
    regIdpersonal?: string | null
    regBirth?: string | null
    regPrefix?: string | null
    regSex?: string | null
    regNation?: string | null
    regName?: string | null
    regLastname?: string | null
    regEname?: string | null
    regElastname?: string | null
    regPhone?: string | null
    regEmail?: string | null
    regImg?: string | null
    regSchool?: string | null
    regDegree?: string | null
    regGpa?: string | null
    regProgram?: string | null
    regFaculty?: string | null
    regMajor?: string | null
  }

  export type RegisterFormUncheckedCreateInput = {
    id?: string
    regId?: string | null
    regIdpersonal?: string | null
    regBirth?: string | null
    regPrefix?: string | null
    regSex?: string | null
    regNation?: string | null
    regName?: string | null
    regLastname?: string | null
    regEname?: string | null
    regElastname?: string | null
    regPhone?: string | null
    regEmail?: string | null
    regImg?: string | null
    regSchool?: string | null
    regDegree?: string | null
    regGpa?: string | null
    regProgram?: string | null
    regFaculty?: string | null
    regMajor?: string | null
  }

  export type RegisterFormUpdateInput = {
    regId?: NullableStringFieldUpdateOperationsInput | string | null
    regIdpersonal?: NullableStringFieldUpdateOperationsInput | string | null
    regBirth?: NullableStringFieldUpdateOperationsInput | string | null
    regPrefix?: NullableStringFieldUpdateOperationsInput | string | null
    regSex?: NullableStringFieldUpdateOperationsInput | string | null
    regNation?: NullableStringFieldUpdateOperationsInput | string | null
    regName?: NullableStringFieldUpdateOperationsInput | string | null
    regLastname?: NullableStringFieldUpdateOperationsInput | string | null
    regEname?: NullableStringFieldUpdateOperationsInput | string | null
    regElastname?: NullableStringFieldUpdateOperationsInput | string | null
    regPhone?: NullableStringFieldUpdateOperationsInput | string | null
    regEmail?: NullableStringFieldUpdateOperationsInput | string | null
    regImg?: NullableStringFieldUpdateOperationsInput | string | null
    regSchool?: NullableStringFieldUpdateOperationsInput | string | null
    regDegree?: NullableStringFieldUpdateOperationsInput | string | null
    regGpa?: NullableStringFieldUpdateOperationsInput | string | null
    regProgram?: NullableStringFieldUpdateOperationsInput | string | null
    regFaculty?: NullableStringFieldUpdateOperationsInput | string | null
    regMajor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RegisterFormUncheckedUpdateInput = {
    regId?: NullableStringFieldUpdateOperationsInput | string | null
    regIdpersonal?: NullableStringFieldUpdateOperationsInput | string | null
    regBirth?: NullableStringFieldUpdateOperationsInput | string | null
    regPrefix?: NullableStringFieldUpdateOperationsInput | string | null
    regSex?: NullableStringFieldUpdateOperationsInput | string | null
    regNation?: NullableStringFieldUpdateOperationsInput | string | null
    regName?: NullableStringFieldUpdateOperationsInput | string | null
    regLastname?: NullableStringFieldUpdateOperationsInput | string | null
    regEname?: NullableStringFieldUpdateOperationsInput | string | null
    regElastname?: NullableStringFieldUpdateOperationsInput | string | null
    regPhone?: NullableStringFieldUpdateOperationsInput | string | null
    regEmail?: NullableStringFieldUpdateOperationsInput | string | null
    regImg?: NullableStringFieldUpdateOperationsInput | string | null
    regSchool?: NullableStringFieldUpdateOperationsInput | string | null
    regDegree?: NullableStringFieldUpdateOperationsInput | string | null
    regGpa?: NullableStringFieldUpdateOperationsInput | string | null
    regProgram?: NullableStringFieldUpdateOperationsInput | string | null
    regFaculty?: NullableStringFieldUpdateOperationsInput | string | null
    regMajor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RegisterFormCreateManyInput = {
    id?: string
    regId?: string | null
    regIdpersonal?: string | null
    regBirth?: string | null
    regPrefix?: string | null
    regSex?: string | null
    regNation?: string | null
    regName?: string | null
    regLastname?: string | null
    regEname?: string | null
    regElastname?: string | null
    regPhone?: string | null
    regEmail?: string | null
    regImg?: string | null
    regSchool?: string | null
    regDegree?: string | null
    regGpa?: string | null
    regProgram?: string | null
    regFaculty?: string | null
    regMajor?: string | null
  }

  export type RegisterFormUpdateManyMutationInput = {
    regId?: NullableStringFieldUpdateOperationsInput | string | null
    regIdpersonal?: NullableStringFieldUpdateOperationsInput | string | null
    regBirth?: NullableStringFieldUpdateOperationsInput | string | null
    regPrefix?: NullableStringFieldUpdateOperationsInput | string | null
    regSex?: NullableStringFieldUpdateOperationsInput | string | null
    regNation?: NullableStringFieldUpdateOperationsInput | string | null
    regName?: NullableStringFieldUpdateOperationsInput | string | null
    regLastname?: NullableStringFieldUpdateOperationsInput | string | null
    regEname?: NullableStringFieldUpdateOperationsInput | string | null
    regElastname?: NullableStringFieldUpdateOperationsInput | string | null
    regPhone?: NullableStringFieldUpdateOperationsInput | string | null
    regEmail?: NullableStringFieldUpdateOperationsInput | string | null
    regImg?: NullableStringFieldUpdateOperationsInput | string | null
    regSchool?: NullableStringFieldUpdateOperationsInput | string | null
    regDegree?: NullableStringFieldUpdateOperationsInput | string | null
    regGpa?: NullableStringFieldUpdateOperationsInput | string | null
    regProgram?: NullableStringFieldUpdateOperationsInput | string | null
    regFaculty?: NullableStringFieldUpdateOperationsInput | string | null
    regMajor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RegisterFormUncheckedUpdateManyInput = {
    regId?: NullableStringFieldUpdateOperationsInput | string | null
    regIdpersonal?: NullableStringFieldUpdateOperationsInput | string | null
    regBirth?: NullableStringFieldUpdateOperationsInput | string | null
    regPrefix?: NullableStringFieldUpdateOperationsInput | string | null
    regSex?: NullableStringFieldUpdateOperationsInput | string | null
    regNation?: NullableStringFieldUpdateOperationsInput | string | null
    regName?: NullableStringFieldUpdateOperationsInput | string | null
    regLastname?: NullableStringFieldUpdateOperationsInput | string | null
    regEname?: NullableStringFieldUpdateOperationsInput | string | null
    regElastname?: NullableStringFieldUpdateOperationsInput | string | null
    regPhone?: NullableStringFieldUpdateOperationsInput | string | null
    regEmail?: NullableStringFieldUpdateOperationsInput | string | null
    regImg?: NullableStringFieldUpdateOperationsInput | string | null
    regSchool?: NullableStringFieldUpdateOperationsInput | string | null
    regDegree?: NullableStringFieldUpdateOperationsInput | string | null
    regGpa?: NullableStringFieldUpdateOperationsInput | string | null
    regProgram?: NullableStringFieldUpdateOperationsInput | string | null
    regFaculty?: NullableStringFieldUpdateOperationsInput | string | null
    regMajor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type RegSchoolCountOrderByAggregateInput = {
    id?: SortOrder
    irImg?: SortOrder
    irDescription?: SortOrder
  }

  export type RegSchoolMaxOrderByAggregateInput = {
    id?: SortOrder
    irImg?: SortOrder
    irDescription?: SortOrder
  }

  export type RegSchoolMinOrderByAggregateInput = {
    id?: SortOrder
    irImg?: SortOrder
    irDescription?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type RegfromCountOrderByAggregateInput = {
    id?: SortOrder
    educationOffice?: SortOrder
    fname?: SortOrder
    lname?: SortOrder
    birthday?: SortOrder
    age?: SortOrder
    idcard?: SortOrder
    religion?: SortOrder
    nationality?: SortOrder
    occupation?: SortOrder
    avgincome?: SortOrder
    fathersname?: SortOrder
    fanationality?: SortOrder
    faavgincome?: SortOrder
    mothersname?: SortOrder
    monationality?: SortOrder
    moavgincome?: SortOrder
    endclass?: SortOrder
    endyear?: SortOrder
    schoolend?: SortOrder
    enddistrict?: SortOrder
    endprovince?: SortOrder
    dhamma?: SortOrder
    endyeardhamma?: SortOrder
    endschooldhamma?: SortOrder
    enddistrictdhamma?: SortOrder
    endprovincedhamma?: SortOrder
    address?: SortOrder
    group?: SortOrder
    alley?: SortOrder
    road?: SortOrder
    subdistrict?: SortOrder
    district?: SortOrder
    province?: SortOrder
    zipcode?: SortOrder
    tel?: SortOrder
    imgprifile?: SortOrder
    imgqualification?: SortOrder
    imghouseregistration?: SortOrder
    imgidcard?: SortOrder
  }

  export type RegfromMaxOrderByAggregateInput = {
    id?: SortOrder
    educationOffice?: SortOrder
    fname?: SortOrder
    lname?: SortOrder
    birthday?: SortOrder
    age?: SortOrder
    idcard?: SortOrder
    religion?: SortOrder
    nationality?: SortOrder
    occupation?: SortOrder
    avgincome?: SortOrder
    fathersname?: SortOrder
    fanationality?: SortOrder
    faavgincome?: SortOrder
    mothersname?: SortOrder
    monationality?: SortOrder
    moavgincome?: SortOrder
    endclass?: SortOrder
    endyear?: SortOrder
    schoolend?: SortOrder
    enddistrict?: SortOrder
    endprovince?: SortOrder
    dhamma?: SortOrder
    endyeardhamma?: SortOrder
    endschooldhamma?: SortOrder
    enddistrictdhamma?: SortOrder
    endprovincedhamma?: SortOrder
    address?: SortOrder
    group?: SortOrder
    alley?: SortOrder
    road?: SortOrder
    subdistrict?: SortOrder
    district?: SortOrder
    province?: SortOrder
    zipcode?: SortOrder
    tel?: SortOrder
    imgprifile?: SortOrder
    imgqualification?: SortOrder
    imghouseregistration?: SortOrder
    imgidcard?: SortOrder
  }

  export type RegfromMinOrderByAggregateInput = {
    id?: SortOrder
    educationOffice?: SortOrder
    fname?: SortOrder
    lname?: SortOrder
    birthday?: SortOrder
    age?: SortOrder
    idcard?: SortOrder
    religion?: SortOrder
    nationality?: SortOrder
    occupation?: SortOrder
    avgincome?: SortOrder
    fathersname?: SortOrder
    fanationality?: SortOrder
    faavgincome?: SortOrder
    mothersname?: SortOrder
    monationality?: SortOrder
    moavgincome?: SortOrder
    endclass?: SortOrder
    endyear?: SortOrder
    schoolend?: SortOrder
    enddistrict?: SortOrder
    endprovince?: SortOrder
    dhamma?: SortOrder
    endyeardhamma?: SortOrder
    endschooldhamma?: SortOrder
    enddistrictdhamma?: SortOrder
    endprovincedhamma?: SortOrder
    address?: SortOrder
    group?: SortOrder
    alley?: SortOrder
    road?: SortOrder
    subdistrict?: SortOrder
    district?: SortOrder
    province?: SortOrder
    zipcode?: SortOrder
    tel?: SortOrder
    imgprifile?: SortOrder
    imgqualification?: SortOrder
    imghouseregistration?: SortOrder
    imgidcard?: SortOrder
  }

  export type RegisterFormCountOrderByAggregateInput = {
    id?: SortOrder
    regId?: SortOrder
    regIdpersonal?: SortOrder
    regBirth?: SortOrder
    regPrefix?: SortOrder
    regSex?: SortOrder
    regNation?: SortOrder
    regName?: SortOrder
    regLastname?: SortOrder
    regEname?: SortOrder
    regElastname?: SortOrder
    regPhone?: SortOrder
    regEmail?: SortOrder
    regImg?: SortOrder
    regSchool?: SortOrder
    regDegree?: SortOrder
    regGpa?: SortOrder
    regProgram?: SortOrder
    regFaculty?: SortOrder
    regMajor?: SortOrder
  }

  export type RegisterFormMaxOrderByAggregateInput = {
    id?: SortOrder
    regId?: SortOrder
    regIdpersonal?: SortOrder
    regBirth?: SortOrder
    regPrefix?: SortOrder
    regSex?: SortOrder
    regNation?: SortOrder
    regName?: SortOrder
    regLastname?: SortOrder
    regEname?: SortOrder
    regElastname?: SortOrder
    regPhone?: SortOrder
    regEmail?: SortOrder
    regImg?: SortOrder
    regSchool?: SortOrder
    regDegree?: SortOrder
    regGpa?: SortOrder
    regProgram?: SortOrder
    regFaculty?: SortOrder
    regMajor?: SortOrder
  }

  export type RegisterFormMinOrderByAggregateInput = {
    id?: SortOrder
    regId?: SortOrder
    regIdpersonal?: SortOrder
    regBirth?: SortOrder
    regPrefix?: SortOrder
    regSex?: SortOrder
    regNation?: SortOrder
    regName?: SortOrder
    regLastname?: SortOrder
    regEname?: SortOrder
    regElastname?: SortOrder
    regPhone?: SortOrder
    regEmail?: SortOrder
    regImg?: SortOrder
    regSchool?: SortOrder
    regDegree?: SortOrder
    regGpa?: SortOrder
    regProgram?: SortOrder
    regFaculty?: SortOrder
    regMajor?: SortOrder
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use RegSchoolDefaultArgs instead
     */
    export type RegSchoolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RegSchoolDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RegfromDefaultArgs instead
     */
    export type RegfromArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RegfromDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RegisterFormDefaultArgs instead
     */
    export type RegisterFormArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RegisterFormDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
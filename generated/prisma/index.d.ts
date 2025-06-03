
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model LogAuditoria
 * 
 */
export type LogAuditoria = $Result.DefaultSelection<Prisma.$LogAuditoriaPayload>
/**
 * Model Premio
 * 
 */
export type Premio = $Result.DefaultSelection<Prisma.$PremioPayload>
/**
 * Model Rifa
 * 
 */
export type Rifa = $Result.DefaultSelection<Prisma.$RifaPayload>
/**
 * Model Organizador
 * 
 */
export type Organizador = $Result.DefaultSelection<Prisma.$OrganizadorPayload>
/**
 * Model Participante
 * 
 */
export type Participante = $Result.DefaultSelection<Prisma.$ParticipantePayload>
/**
 * Model Bilhete
 * 
 */
export type Bilhete = $Result.DefaultSelection<Prisma.$BilhetePayload>
/**
 * Model Sorteio
 * 
 */
export type Sorteio = $Result.DefaultSelection<Prisma.$SorteioPayload>
/**
 * Model Notificacao
 * 
 */
export type Notificacao = $Result.DefaultSelection<Prisma.$NotificacaoPayload>
/**
 * Model Pagamento
 * 
 */
export type Pagamento = $Result.DefaultSelection<Prisma.$PagamentoPayload>
/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model PremioParticipante
 * 
 */
export type PremioParticipante = $Result.DefaultSelection<Prisma.$PremioParticipantePayload>
/**
 * Model SorteioBilhete
 * 
 */
export type SorteioBilhete = $Result.DefaultSelection<Prisma.$SorteioBilhetePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const StatusRifa: {
  Ativa: 'Ativa',
  Finalizada: 'Finalizada',
  Cancelada: 'Cancelada'
};

export type StatusRifa = (typeof StatusRifa)[keyof typeof StatusRifa]


export const StatusBil: {
  Disponivel: 'Disponivel',
  Vendido: 'Vendido',
  Premiado: 'Premiado'
};

export type StatusBil = (typeof StatusBil)[keyof typeof StatusBil]


export const StatusPag: {
  PENDENTE: 'PENDENTE',
  APROVADO: 'APROVADO',
  RECUSADO: 'RECUSADO'
};

export type StatusPag = (typeof StatusPag)[keyof typeof StatusPag]


export const MetodoPag: {
  PIX: 'PIX',
  CARTAO: 'CARTAO',
  BOLETO: 'BOLETO'
};

export type MetodoPag = (typeof MetodoPag)[keyof typeof MetodoPag]

}

export type StatusRifa = $Enums.StatusRifa

export const StatusRifa: typeof $Enums.StatusRifa

export type StatusBil = $Enums.StatusBil

export const StatusBil: typeof $Enums.StatusBil

export type StatusPag = $Enums.StatusPag

export const StatusPag: typeof $Enums.StatusPag

export type MetodoPag = $Enums.MetodoPag

export const MetodoPag: typeof $Enums.MetodoPag

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more LogAuditorias
 * const logAuditorias = await prisma.logAuditoria.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more LogAuditorias
   * const logAuditorias = await prisma.logAuditoria.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.logAuditoria`: Exposes CRUD operations for the **LogAuditoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LogAuditorias
    * const logAuditorias = await prisma.logAuditoria.findMany()
    * ```
    */
  get logAuditoria(): Prisma.LogAuditoriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.premio`: Exposes CRUD operations for the **Premio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Premios
    * const premios = await prisma.premio.findMany()
    * ```
    */
  get premio(): Prisma.PremioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rifa`: Exposes CRUD operations for the **Rifa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rifas
    * const rifas = await prisma.rifa.findMany()
    * ```
    */
  get rifa(): Prisma.RifaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.organizador`: Exposes CRUD operations for the **Organizador** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizadors
    * const organizadors = await prisma.organizador.findMany()
    * ```
    */
  get organizador(): Prisma.OrganizadorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.participante`: Exposes CRUD operations for the **Participante** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Participantes
    * const participantes = await prisma.participante.findMany()
    * ```
    */
  get participante(): Prisma.ParticipanteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bilhete`: Exposes CRUD operations for the **Bilhete** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bilhetes
    * const bilhetes = await prisma.bilhete.findMany()
    * ```
    */
  get bilhete(): Prisma.BilheteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sorteio`: Exposes CRUD operations for the **Sorteio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sorteios
    * const sorteios = await prisma.sorteio.findMany()
    * ```
    */
  get sorteio(): Prisma.SorteioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notificacao`: Exposes CRUD operations for the **Notificacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notificacaos
    * const notificacaos = await prisma.notificacao.findMany()
    * ```
    */
  get notificacao(): Prisma.NotificacaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pagamento`: Exposes CRUD operations for the **Pagamento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pagamentos
    * const pagamentos = await prisma.pagamento.findMany()
    * ```
    */
  get pagamento(): Prisma.PagamentoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.premioParticipante`: Exposes CRUD operations for the **PremioParticipante** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PremioParticipantes
    * const premioParticipantes = await prisma.premioParticipante.findMany()
    * ```
    */
  get premioParticipante(): Prisma.PremioParticipanteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sorteioBilhete`: Exposes CRUD operations for the **SorteioBilhete** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SorteioBilhetes
    * const sorteioBilhetes = await prisma.sorteioBilhete.findMany()
    * ```
    */
  get sorteioBilhete(): Prisma.SorteioBilheteDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    LogAuditoria: 'LogAuditoria',
    Premio: 'Premio',
    Rifa: 'Rifa',
    Organizador: 'Organizador',
    Participante: 'Participante',
    Bilhete: 'Bilhete',
    Sorteio: 'Sorteio',
    Notificacao: 'Notificacao',
    Pagamento: 'Pagamento',
    Usuario: 'Usuario',
    PremioParticipante: 'PremioParticipante',
    SorteioBilhete: 'SorteioBilhete'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "logAuditoria" | "premio" | "rifa" | "organizador" | "participante" | "bilhete" | "sorteio" | "notificacao" | "pagamento" | "usuario" | "premioParticipante" | "sorteioBilhete"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      LogAuditoria: {
        payload: Prisma.$LogAuditoriaPayload<ExtArgs>
        fields: Prisma.LogAuditoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LogAuditoriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAuditoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LogAuditoriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAuditoriaPayload>
          }
          findFirst: {
            args: Prisma.LogAuditoriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAuditoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LogAuditoriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAuditoriaPayload>
          }
          findMany: {
            args: Prisma.LogAuditoriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAuditoriaPayload>[]
          }
          create: {
            args: Prisma.LogAuditoriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAuditoriaPayload>
          }
          createMany: {
            args: Prisma.LogAuditoriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LogAuditoriaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAuditoriaPayload>[]
          }
          delete: {
            args: Prisma.LogAuditoriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAuditoriaPayload>
          }
          update: {
            args: Prisma.LogAuditoriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAuditoriaPayload>
          }
          deleteMany: {
            args: Prisma.LogAuditoriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LogAuditoriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LogAuditoriaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAuditoriaPayload>[]
          }
          upsert: {
            args: Prisma.LogAuditoriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogAuditoriaPayload>
          }
          aggregate: {
            args: Prisma.LogAuditoriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLogAuditoria>
          }
          groupBy: {
            args: Prisma.LogAuditoriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<LogAuditoriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.LogAuditoriaCountArgs<ExtArgs>
            result: $Utils.Optional<LogAuditoriaCountAggregateOutputType> | number
          }
        }
      }
      Premio: {
        payload: Prisma.$PremioPayload<ExtArgs>
        fields: Prisma.PremioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PremioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PremioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremioPayload>
          }
          findFirst: {
            args: Prisma.PremioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PremioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremioPayload>
          }
          findMany: {
            args: Prisma.PremioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremioPayload>[]
          }
          create: {
            args: Prisma.PremioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremioPayload>
          }
          createMany: {
            args: Prisma.PremioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PremioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremioPayload>[]
          }
          delete: {
            args: Prisma.PremioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremioPayload>
          }
          update: {
            args: Prisma.PremioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremioPayload>
          }
          deleteMany: {
            args: Prisma.PremioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PremioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PremioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremioPayload>[]
          }
          upsert: {
            args: Prisma.PremioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremioPayload>
          }
          aggregate: {
            args: Prisma.PremioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePremio>
          }
          groupBy: {
            args: Prisma.PremioGroupByArgs<ExtArgs>
            result: $Utils.Optional<PremioGroupByOutputType>[]
          }
          count: {
            args: Prisma.PremioCountArgs<ExtArgs>
            result: $Utils.Optional<PremioCountAggregateOutputType> | number
          }
        }
      }
      Rifa: {
        payload: Prisma.$RifaPayload<ExtArgs>
        fields: Prisma.RifaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RifaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RifaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RifaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RifaPayload>
          }
          findFirst: {
            args: Prisma.RifaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RifaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RifaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RifaPayload>
          }
          findMany: {
            args: Prisma.RifaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RifaPayload>[]
          }
          create: {
            args: Prisma.RifaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RifaPayload>
          }
          createMany: {
            args: Prisma.RifaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RifaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RifaPayload>[]
          }
          delete: {
            args: Prisma.RifaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RifaPayload>
          }
          update: {
            args: Prisma.RifaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RifaPayload>
          }
          deleteMany: {
            args: Prisma.RifaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RifaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RifaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RifaPayload>[]
          }
          upsert: {
            args: Prisma.RifaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RifaPayload>
          }
          aggregate: {
            args: Prisma.RifaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRifa>
          }
          groupBy: {
            args: Prisma.RifaGroupByArgs<ExtArgs>
            result: $Utils.Optional<RifaGroupByOutputType>[]
          }
          count: {
            args: Prisma.RifaCountArgs<ExtArgs>
            result: $Utils.Optional<RifaCountAggregateOutputType> | number
          }
        }
      }
      Organizador: {
        payload: Prisma.$OrganizadorPayload<ExtArgs>
        fields: Prisma.OrganizadorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizadorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizadorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizadorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizadorPayload>
          }
          findFirst: {
            args: Prisma.OrganizadorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizadorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizadorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizadorPayload>
          }
          findMany: {
            args: Prisma.OrganizadorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizadorPayload>[]
          }
          create: {
            args: Prisma.OrganizadorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizadorPayload>
          }
          createMany: {
            args: Prisma.OrganizadorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganizadorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizadorPayload>[]
          }
          delete: {
            args: Prisma.OrganizadorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizadorPayload>
          }
          update: {
            args: Prisma.OrganizadorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizadorPayload>
          }
          deleteMany: {
            args: Prisma.OrganizadorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizadorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrganizadorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizadorPayload>[]
          }
          upsert: {
            args: Prisma.OrganizadorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizadorPayload>
          }
          aggregate: {
            args: Prisma.OrganizadorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganizador>
          }
          groupBy: {
            args: Prisma.OrganizadorGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizadorGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizadorCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizadorCountAggregateOutputType> | number
          }
        }
      }
      Participante: {
        payload: Prisma.$ParticipantePayload<ExtArgs>
        fields: Prisma.ParticipanteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParticipanteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParticipanteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantePayload>
          }
          findFirst: {
            args: Prisma.ParticipanteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParticipanteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantePayload>
          }
          findMany: {
            args: Prisma.ParticipanteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantePayload>[]
          }
          create: {
            args: Prisma.ParticipanteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantePayload>
          }
          createMany: {
            args: Prisma.ParticipanteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParticipanteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantePayload>[]
          }
          delete: {
            args: Prisma.ParticipanteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantePayload>
          }
          update: {
            args: Prisma.ParticipanteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantePayload>
          }
          deleteMany: {
            args: Prisma.ParticipanteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParticipanteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParticipanteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantePayload>[]
          }
          upsert: {
            args: Prisma.ParticipanteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantePayload>
          }
          aggregate: {
            args: Prisma.ParticipanteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParticipante>
          }
          groupBy: {
            args: Prisma.ParticipanteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParticipanteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParticipanteCountArgs<ExtArgs>
            result: $Utils.Optional<ParticipanteCountAggregateOutputType> | number
          }
        }
      }
      Bilhete: {
        payload: Prisma.$BilhetePayload<ExtArgs>
        fields: Prisma.BilheteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BilheteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BilhetePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BilheteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BilhetePayload>
          }
          findFirst: {
            args: Prisma.BilheteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BilhetePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BilheteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BilhetePayload>
          }
          findMany: {
            args: Prisma.BilheteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BilhetePayload>[]
          }
          create: {
            args: Prisma.BilheteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BilhetePayload>
          }
          createMany: {
            args: Prisma.BilheteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BilheteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BilhetePayload>[]
          }
          delete: {
            args: Prisma.BilheteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BilhetePayload>
          }
          update: {
            args: Prisma.BilheteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BilhetePayload>
          }
          deleteMany: {
            args: Prisma.BilheteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BilheteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BilheteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BilhetePayload>[]
          }
          upsert: {
            args: Prisma.BilheteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BilhetePayload>
          }
          aggregate: {
            args: Prisma.BilheteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBilhete>
          }
          groupBy: {
            args: Prisma.BilheteGroupByArgs<ExtArgs>
            result: $Utils.Optional<BilheteGroupByOutputType>[]
          }
          count: {
            args: Prisma.BilheteCountArgs<ExtArgs>
            result: $Utils.Optional<BilheteCountAggregateOutputType> | number
          }
        }
      }
      Sorteio: {
        payload: Prisma.$SorteioPayload<ExtArgs>
        fields: Prisma.SorteioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SorteioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SorteioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SorteioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SorteioPayload>
          }
          findFirst: {
            args: Prisma.SorteioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SorteioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SorteioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SorteioPayload>
          }
          findMany: {
            args: Prisma.SorteioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SorteioPayload>[]
          }
          create: {
            args: Prisma.SorteioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SorteioPayload>
          }
          createMany: {
            args: Prisma.SorteioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SorteioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SorteioPayload>[]
          }
          delete: {
            args: Prisma.SorteioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SorteioPayload>
          }
          update: {
            args: Prisma.SorteioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SorteioPayload>
          }
          deleteMany: {
            args: Prisma.SorteioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SorteioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SorteioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SorteioPayload>[]
          }
          upsert: {
            args: Prisma.SorteioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SorteioPayload>
          }
          aggregate: {
            args: Prisma.SorteioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSorteio>
          }
          groupBy: {
            args: Prisma.SorteioGroupByArgs<ExtArgs>
            result: $Utils.Optional<SorteioGroupByOutputType>[]
          }
          count: {
            args: Prisma.SorteioCountArgs<ExtArgs>
            result: $Utils.Optional<SorteioCountAggregateOutputType> | number
          }
        }
      }
      Notificacao: {
        payload: Prisma.$NotificacaoPayload<ExtArgs>
        fields: Prisma.NotificacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          findFirst: {
            args: Prisma.NotificacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          findMany: {
            args: Prisma.NotificacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>[]
          }
          create: {
            args: Prisma.NotificacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          createMany: {
            args: Prisma.NotificacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificacaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>[]
          }
          delete: {
            args: Prisma.NotificacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          update: {
            args: Prisma.NotificacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          deleteMany: {
            args: Prisma.NotificacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificacaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>[]
          }
          upsert: {
            args: Prisma.NotificacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          aggregate: {
            args: Prisma.NotificacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotificacao>
          }
          groupBy: {
            args: Prisma.NotificacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificacaoCountArgs<ExtArgs>
            result: $Utils.Optional<NotificacaoCountAggregateOutputType> | number
          }
        }
      }
      Pagamento: {
        payload: Prisma.$PagamentoPayload<ExtArgs>
        fields: Prisma.PagamentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PagamentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PagamentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>
          }
          findFirst: {
            args: Prisma.PagamentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PagamentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>
          }
          findMany: {
            args: Prisma.PagamentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>[]
          }
          create: {
            args: Prisma.PagamentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>
          }
          createMany: {
            args: Prisma.PagamentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PagamentoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>[]
          }
          delete: {
            args: Prisma.PagamentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>
          }
          update: {
            args: Prisma.PagamentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>
          }
          deleteMany: {
            args: Prisma.PagamentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PagamentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PagamentoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>[]
          }
          upsert: {
            args: Prisma.PagamentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>
          }
          aggregate: {
            args: Prisma.PagamentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePagamento>
          }
          groupBy: {
            args: Prisma.PagamentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PagamentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PagamentoCountArgs<ExtArgs>
            result: $Utils.Optional<PagamentoCountAggregateOutputType> | number
          }
        }
      }
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      PremioParticipante: {
        payload: Prisma.$PremioParticipantePayload<ExtArgs>
        fields: Prisma.PremioParticipanteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PremioParticipanteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremioParticipantePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PremioParticipanteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremioParticipantePayload>
          }
          findFirst: {
            args: Prisma.PremioParticipanteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremioParticipantePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PremioParticipanteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremioParticipantePayload>
          }
          findMany: {
            args: Prisma.PremioParticipanteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremioParticipantePayload>[]
          }
          create: {
            args: Prisma.PremioParticipanteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremioParticipantePayload>
          }
          createMany: {
            args: Prisma.PremioParticipanteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PremioParticipanteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremioParticipantePayload>[]
          }
          delete: {
            args: Prisma.PremioParticipanteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremioParticipantePayload>
          }
          update: {
            args: Prisma.PremioParticipanteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremioParticipantePayload>
          }
          deleteMany: {
            args: Prisma.PremioParticipanteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PremioParticipanteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PremioParticipanteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremioParticipantePayload>[]
          }
          upsert: {
            args: Prisma.PremioParticipanteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremioParticipantePayload>
          }
          aggregate: {
            args: Prisma.PremioParticipanteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePremioParticipante>
          }
          groupBy: {
            args: Prisma.PremioParticipanteGroupByArgs<ExtArgs>
            result: $Utils.Optional<PremioParticipanteGroupByOutputType>[]
          }
          count: {
            args: Prisma.PremioParticipanteCountArgs<ExtArgs>
            result: $Utils.Optional<PremioParticipanteCountAggregateOutputType> | number
          }
        }
      }
      SorteioBilhete: {
        payload: Prisma.$SorteioBilhetePayload<ExtArgs>
        fields: Prisma.SorteioBilheteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SorteioBilheteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SorteioBilhetePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SorteioBilheteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SorteioBilhetePayload>
          }
          findFirst: {
            args: Prisma.SorteioBilheteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SorteioBilhetePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SorteioBilheteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SorteioBilhetePayload>
          }
          findMany: {
            args: Prisma.SorteioBilheteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SorteioBilhetePayload>[]
          }
          create: {
            args: Prisma.SorteioBilheteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SorteioBilhetePayload>
          }
          createMany: {
            args: Prisma.SorteioBilheteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SorteioBilheteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SorteioBilhetePayload>[]
          }
          delete: {
            args: Prisma.SorteioBilheteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SorteioBilhetePayload>
          }
          update: {
            args: Prisma.SorteioBilheteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SorteioBilhetePayload>
          }
          deleteMany: {
            args: Prisma.SorteioBilheteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SorteioBilheteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SorteioBilheteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SorteioBilhetePayload>[]
          }
          upsert: {
            args: Prisma.SorteioBilheteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SorteioBilhetePayload>
          }
          aggregate: {
            args: Prisma.SorteioBilheteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSorteioBilhete>
          }
          groupBy: {
            args: Prisma.SorteioBilheteGroupByArgs<ExtArgs>
            result: $Utils.Optional<SorteioBilheteGroupByOutputType>[]
          }
          count: {
            args: Prisma.SorteioBilheteCountArgs<ExtArgs>
            result: $Utils.Optional<SorteioBilheteCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    logAuditoria?: LogAuditoriaOmit
    premio?: PremioOmit
    rifa?: RifaOmit
    organizador?: OrganizadorOmit
    participante?: ParticipanteOmit
    bilhete?: BilheteOmit
    sorteio?: SorteioOmit
    notificacao?: NotificacaoOmit
    pagamento?: PagamentoOmit
    usuario?: UsuarioOmit
    premioParticipante?: PremioParticipanteOmit
    sorteioBilhete?: SorteioBilheteOmit
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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type PremioCountOutputType
   */

  export type PremioCountOutputType = {
    participantes: number
  }

  export type PremioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participantes?: boolean | PremioCountOutputTypeCountParticipantesArgs
  }

  // Custom InputTypes
  /**
   * PremioCountOutputType without action
   */
  export type PremioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremioCountOutputType
     */
    select?: PremioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PremioCountOutputType without action
   */
  export type PremioCountOutputTypeCountParticipantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PremioParticipanteWhereInput
  }


  /**
   * Count Type RifaCountOutputType
   */

  export type RifaCountOutputType = {
    sorteios: number
    bilhetes: number
    logs: number
  }

  export type RifaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sorteios?: boolean | RifaCountOutputTypeCountSorteiosArgs
    bilhetes?: boolean | RifaCountOutputTypeCountBilhetesArgs
    logs?: boolean | RifaCountOutputTypeCountLogsArgs
  }

  // Custom InputTypes
  /**
   * RifaCountOutputType without action
   */
  export type RifaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RifaCountOutputType
     */
    select?: RifaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RifaCountOutputType without action
   */
  export type RifaCountOutputTypeCountSorteiosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SorteioWhereInput
  }

  /**
   * RifaCountOutputType without action
   */
  export type RifaCountOutputTypeCountBilhetesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BilheteWhereInput
  }

  /**
   * RifaCountOutputType without action
   */
  export type RifaCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogAuditoriaWhereInput
  }


  /**
   * Count Type OrganizadorCountOutputType
   */

  export type OrganizadorCountOutputType = {
    rifas: number
  }

  export type OrganizadorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rifas?: boolean | OrganizadorCountOutputTypeCountRifasArgs
  }

  // Custom InputTypes
  /**
   * OrganizadorCountOutputType without action
   */
  export type OrganizadorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizadorCountOutputType
     */
    select?: OrganizadorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganizadorCountOutputType without action
   */
  export type OrganizadorCountOutputTypeCountRifasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RifaWhereInput
  }


  /**
   * Count Type ParticipanteCountOutputType
   */

  export type ParticipanteCountOutputType = {
    bilhetes: number
    pagamentos: number
    premios: number
    vitorias: number
  }

  export type ParticipanteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bilhetes?: boolean | ParticipanteCountOutputTypeCountBilhetesArgs
    pagamentos?: boolean | ParticipanteCountOutputTypeCountPagamentosArgs
    premios?: boolean | ParticipanteCountOutputTypeCountPremiosArgs
    vitorias?: boolean | ParticipanteCountOutputTypeCountVitoriasArgs
  }

  // Custom InputTypes
  /**
   * ParticipanteCountOutputType without action
   */
  export type ParticipanteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipanteCountOutputType
     */
    select?: ParticipanteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ParticipanteCountOutputType without action
   */
  export type ParticipanteCountOutputTypeCountBilhetesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BilheteWhereInput
  }

  /**
   * ParticipanteCountOutputType without action
   */
  export type ParticipanteCountOutputTypeCountPagamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PagamentoWhereInput
  }

  /**
   * ParticipanteCountOutputType without action
   */
  export type ParticipanteCountOutputTypeCountPremiosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PremioParticipanteWhereInput
  }

  /**
   * ParticipanteCountOutputType without action
   */
  export type ParticipanteCountOutputTypeCountVitoriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SorteioWhereInput
  }


  /**
   * Count Type BilheteCountOutputType
   */

  export type BilheteCountOutputType = {
    sorteios: number
  }

  export type BilheteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sorteios?: boolean | BilheteCountOutputTypeCountSorteiosArgs
  }

  // Custom InputTypes
  /**
   * BilheteCountOutputType without action
   */
  export type BilheteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BilheteCountOutputType
     */
    select?: BilheteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BilheteCountOutputType without action
   */
  export type BilheteCountOutputTypeCountSorteiosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SorteioBilheteWhereInput
  }


  /**
   * Count Type SorteioCountOutputType
   */

  export type SorteioCountOutputType = {
    bilhetes: number
  }

  export type SorteioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bilhetes?: boolean | SorteioCountOutputTypeCountBilhetesArgs
  }

  // Custom InputTypes
  /**
   * SorteioCountOutputType without action
   */
  export type SorteioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SorteioCountOutputType
     */
    select?: SorteioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SorteioCountOutputType without action
   */
  export type SorteioCountOutputTypeCountBilhetesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SorteioBilheteWhereInput
  }


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    notificacoes: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notificacoes?: boolean | UsuarioCountOutputTypeCountNotificacoesArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountNotificacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificacaoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model LogAuditoria
   */

  export type AggregateLogAuditoria = {
    _count: LogAuditoriaCountAggregateOutputType | null
    _avg: LogAuditoriaAvgAggregateOutputType | null
    _sum: LogAuditoriaSumAggregateOutputType | null
    _min: LogAuditoriaMinAggregateOutputType | null
    _max: LogAuditoriaMaxAggregateOutputType | null
  }

  export type LogAuditoriaAvgAggregateOutputType = {
    id: number | null
    rifaId: number | null
  }

  export type LogAuditoriaSumAggregateOutputType = {
    id: number | null
    rifaId: number | null
  }

  export type LogAuditoriaMinAggregateOutputType = {
    id: number | null
    acao: string | null
    createdAt: Date | null
    detalhes: string | null
    rifaId: number | null
  }

  export type LogAuditoriaMaxAggregateOutputType = {
    id: number | null
    acao: string | null
    createdAt: Date | null
    detalhes: string | null
    rifaId: number | null
  }

  export type LogAuditoriaCountAggregateOutputType = {
    id: number
    acao: number
    createdAt: number
    detalhes: number
    rifaId: number
    _all: number
  }


  export type LogAuditoriaAvgAggregateInputType = {
    id?: true
    rifaId?: true
  }

  export type LogAuditoriaSumAggregateInputType = {
    id?: true
    rifaId?: true
  }

  export type LogAuditoriaMinAggregateInputType = {
    id?: true
    acao?: true
    createdAt?: true
    detalhes?: true
    rifaId?: true
  }

  export type LogAuditoriaMaxAggregateInputType = {
    id?: true
    acao?: true
    createdAt?: true
    detalhes?: true
    rifaId?: true
  }

  export type LogAuditoriaCountAggregateInputType = {
    id?: true
    acao?: true
    createdAt?: true
    detalhes?: true
    rifaId?: true
    _all?: true
  }

  export type LogAuditoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LogAuditoria to aggregate.
     */
    where?: LogAuditoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogAuditorias to fetch.
     */
    orderBy?: LogAuditoriaOrderByWithRelationInput | LogAuditoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LogAuditoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogAuditorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogAuditorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LogAuditorias
    **/
    _count?: true | LogAuditoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LogAuditoriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LogAuditoriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogAuditoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogAuditoriaMaxAggregateInputType
  }

  export type GetLogAuditoriaAggregateType<T extends LogAuditoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateLogAuditoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLogAuditoria[P]>
      : GetScalarType<T[P], AggregateLogAuditoria[P]>
  }




  export type LogAuditoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogAuditoriaWhereInput
    orderBy?: LogAuditoriaOrderByWithAggregationInput | LogAuditoriaOrderByWithAggregationInput[]
    by: LogAuditoriaScalarFieldEnum[] | LogAuditoriaScalarFieldEnum
    having?: LogAuditoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogAuditoriaCountAggregateInputType | true
    _avg?: LogAuditoriaAvgAggregateInputType
    _sum?: LogAuditoriaSumAggregateInputType
    _min?: LogAuditoriaMinAggregateInputType
    _max?: LogAuditoriaMaxAggregateInputType
  }

  export type LogAuditoriaGroupByOutputType = {
    id: number
    acao: string
    createdAt: Date
    detalhes: string | null
    rifaId: number
    _count: LogAuditoriaCountAggregateOutputType | null
    _avg: LogAuditoriaAvgAggregateOutputType | null
    _sum: LogAuditoriaSumAggregateOutputType | null
    _min: LogAuditoriaMinAggregateOutputType | null
    _max: LogAuditoriaMaxAggregateOutputType | null
  }

  type GetLogAuditoriaGroupByPayload<T extends LogAuditoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogAuditoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogAuditoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogAuditoriaGroupByOutputType[P]>
            : GetScalarType<T[P], LogAuditoriaGroupByOutputType[P]>
        }
      >
    >


  export type LogAuditoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    acao?: boolean
    createdAt?: boolean
    detalhes?: boolean
    rifaId?: boolean
    rifa?: boolean | RifaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["logAuditoria"]>

  export type LogAuditoriaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    acao?: boolean
    createdAt?: boolean
    detalhes?: boolean
    rifaId?: boolean
    rifa?: boolean | RifaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["logAuditoria"]>

  export type LogAuditoriaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    acao?: boolean
    createdAt?: boolean
    detalhes?: boolean
    rifaId?: boolean
    rifa?: boolean | RifaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["logAuditoria"]>

  export type LogAuditoriaSelectScalar = {
    id?: boolean
    acao?: boolean
    createdAt?: boolean
    detalhes?: boolean
    rifaId?: boolean
  }

  export type LogAuditoriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "acao" | "createdAt" | "detalhes" | "rifaId", ExtArgs["result"]["logAuditoria"]>
  export type LogAuditoriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rifa?: boolean | RifaDefaultArgs<ExtArgs>
  }
  export type LogAuditoriaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rifa?: boolean | RifaDefaultArgs<ExtArgs>
  }
  export type LogAuditoriaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rifa?: boolean | RifaDefaultArgs<ExtArgs>
  }

  export type $LogAuditoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LogAuditoria"
    objects: {
      rifa: Prisma.$RifaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      acao: string
      createdAt: Date
      detalhes: string | null
      rifaId: number
    }, ExtArgs["result"]["logAuditoria"]>
    composites: {}
  }

  type LogAuditoriaGetPayload<S extends boolean | null | undefined | LogAuditoriaDefaultArgs> = $Result.GetResult<Prisma.$LogAuditoriaPayload, S>

  type LogAuditoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LogAuditoriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LogAuditoriaCountAggregateInputType | true
    }

  export interface LogAuditoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LogAuditoria'], meta: { name: 'LogAuditoria' } }
    /**
     * Find zero or one LogAuditoria that matches the filter.
     * @param {LogAuditoriaFindUniqueArgs} args - Arguments to find a LogAuditoria
     * @example
     * // Get one LogAuditoria
     * const logAuditoria = await prisma.logAuditoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LogAuditoriaFindUniqueArgs>(args: SelectSubset<T, LogAuditoriaFindUniqueArgs<ExtArgs>>): Prisma__LogAuditoriaClient<$Result.GetResult<Prisma.$LogAuditoriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LogAuditoria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LogAuditoriaFindUniqueOrThrowArgs} args - Arguments to find a LogAuditoria
     * @example
     * // Get one LogAuditoria
     * const logAuditoria = await prisma.logAuditoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LogAuditoriaFindUniqueOrThrowArgs>(args: SelectSubset<T, LogAuditoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LogAuditoriaClient<$Result.GetResult<Prisma.$LogAuditoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LogAuditoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAuditoriaFindFirstArgs} args - Arguments to find a LogAuditoria
     * @example
     * // Get one LogAuditoria
     * const logAuditoria = await prisma.logAuditoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LogAuditoriaFindFirstArgs>(args?: SelectSubset<T, LogAuditoriaFindFirstArgs<ExtArgs>>): Prisma__LogAuditoriaClient<$Result.GetResult<Prisma.$LogAuditoriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LogAuditoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAuditoriaFindFirstOrThrowArgs} args - Arguments to find a LogAuditoria
     * @example
     * // Get one LogAuditoria
     * const logAuditoria = await prisma.logAuditoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LogAuditoriaFindFirstOrThrowArgs>(args?: SelectSubset<T, LogAuditoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__LogAuditoriaClient<$Result.GetResult<Prisma.$LogAuditoriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LogAuditorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAuditoriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LogAuditorias
     * const logAuditorias = await prisma.logAuditoria.findMany()
     * 
     * // Get first 10 LogAuditorias
     * const logAuditorias = await prisma.logAuditoria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const logAuditoriaWithIdOnly = await prisma.logAuditoria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LogAuditoriaFindManyArgs>(args?: SelectSubset<T, LogAuditoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogAuditoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LogAuditoria.
     * @param {LogAuditoriaCreateArgs} args - Arguments to create a LogAuditoria.
     * @example
     * // Create one LogAuditoria
     * const LogAuditoria = await prisma.logAuditoria.create({
     *   data: {
     *     // ... data to create a LogAuditoria
     *   }
     * })
     * 
     */
    create<T extends LogAuditoriaCreateArgs>(args: SelectSubset<T, LogAuditoriaCreateArgs<ExtArgs>>): Prisma__LogAuditoriaClient<$Result.GetResult<Prisma.$LogAuditoriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LogAuditorias.
     * @param {LogAuditoriaCreateManyArgs} args - Arguments to create many LogAuditorias.
     * @example
     * // Create many LogAuditorias
     * const logAuditoria = await prisma.logAuditoria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LogAuditoriaCreateManyArgs>(args?: SelectSubset<T, LogAuditoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LogAuditorias and returns the data saved in the database.
     * @param {LogAuditoriaCreateManyAndReturnArgs} args - Arguments to create many LogAuditorias.
     * @example
     * // Create many LogAuditorias
     * const logAuditoria = await prisma.logAuditoria.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LogAuditorias and only return the `id`
     * const logAuditoriaWithIdOnly = await prisma.logAuditoria.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LogAuditoriaCreateManyAndReturnArgs>(args?: SelectSubset<T, LogAuditoriaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogAuditoriaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LogAuditoria.
     * @param {LogAuditoriaDeleteArgs} args - Arguments to delete one LogAuditoria.
     * @example
     * // Delete one LogAuditoria
     * const LogAuditoria = await prisma.logAuditoria.delete({
     *   where: {
     *     // ... filter to delete one LogAuditoria
     *   }
     * })
     * 
     */
    delete<T extends LogAuditoriaDeleteArgs>(args: SelectSubset<T, LogAuditoriaDeleteArgs<ExtArgs>>): Prisma__LogAuditoriaClient<$Result.GetResult<Prisma.$LogAuditoriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LogAuditoria.
     * @param {LogAuditoriaUpdateArgs} args - Arguments to update one LogAuditoria.
     * @example
     * // Update one LogAuditoria
     * const logAuditoria = await prisma.logAuditoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LogAuditoriaUpdateArgs>(args: SelectSubset<T, LogAuditoriaUpdateArgs<ExtArgs>>): Prisma__LogAuditoriaClient<$Result.GetResult<Prisma.$LogAuditoriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LogAuditorias.
     * @param {LogAuditoriaDeleteManyArgs} args - Arguments to filter LogAuditorias to delete.
     * @example
     * // Delete a few LogAuditorias
     * const { count } = await prisma.logAuditoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LogAuditoriaDeleteManyArgs>(args?: SelectSubset<T, LogAuditoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LogAuditorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAuditoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LogAuditorias
     * const logAuditoria = await prisma.logAuditoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LogAuditoriaUpdateManyArgs>(args: SelectSubset<T, LogAuditoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LogAuditorias and returns the data updated in the database.
     * @param {LogAuditoriaUpdateManyAndReturnArgs} args - Arguments to update many LogAuditorias.
     * @example
     * // Update many LogAuditorias
     * const logAuditoria = await prisma.logAuditoria.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LogAuditorias and only return the `id`
     * const logAuditoriaWithIdOnly = await prisma.logAuditoria.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LogAuditoriaUpdateManyAndReturnArgs>(args: SelectSubset<T, LogAuditoriaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogAuditoriaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LogAuditoria.
     * @param {LogAuditoriaUpsertArgs} args - Arguments to update or create a LogAuditoria.
     * @example
     * // Update or create a LogAuditoria
     * const logAuditoria = await prisma.logAuditoria.upsert({
     *   create: {
     *     // ... data to create a LogAuditoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LogAuditoria we want to update
     *   }
     * })
     */
    upsert<T extends LogAuditoriaUpsertArgs>(args: SelectSubset<T, LogAuditoriaUpsertArgs<ExtArgs>>): Prisma__LogAuditoriaClient<$Result.GetResult<Prisma.$LogAuditoriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LogAuditorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAuditoriaCountArgs} args - Arguments to filter LogAuditorias to count.
     * @example
     * // Count the number of LogAuditorias
     * const count = await prisma.logAuditoria.count({
     *   where: {
     *     // ... the filter for the LogAuditorias we want to count
     *   }
     * })
    **/
    count<T extends LogAuditoriaCountArgs>(
      args?: Subset<T, LogAuditoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogAuditoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LogAuditoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAuditoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LogAuditoriaAggregateArgs>(args: Subset<T, LogAuditoriaAggregateArgs>): Prisma.PrismaPromise<GetLogAuditoriaAggregateType<T>>

    /**
     * Group by LogAuditoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAuditoriaGroupByArgs} args - Group by arguments.
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
      T extends LogAuditoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LogAuditoriaGroupByArgs['orderBy'] }
        : { orderBy?: LogAuditoriaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LogAuditoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogAuditoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LogAuditoria model
   */
  readonly fields: LogAuditoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LogAuditoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LogAuditoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rifa<T extends RifaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RifaDefaultArgs<ExtArgs>>): Prisma__RifaClient<$Result.GetResult<Prisma.$RifaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LogAuditoria model
   */
  interface LogAuditoriaFieldRefs {
    readonly id: FieldRef<"LogAuditoria", 'Int'>
    readonly acao: FieldRef<"LogAuditoria", 'String'>
    readonly createdAt: FieldRef<"LogAuditoria", 'DateTime'>
    readonly detalhes: FieldRef<"LogAuditoria", 'String'>
    readonly rifaId: FieldRef<"LogAuditoria", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * LogAuditoria findUnique
   */
  export type LogAuditoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAuditoria
     */
    select?: LogAuditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogAuditoria
     */
    omit?: LogAuditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAuditoriaInclude<ExtArgs> | null
    /**
     * Filter, which LogAuditoria to fetch.
     */
    where: LogAuditoriaWhereUniqueInput
  }

  /**
   * LogAuditoria findUniqueOrThrow
   */
  export type LogAuditoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAuditoria
     */
    select?: LogAuditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogAuditoria
     */
    omit?: LogAuditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAuditoriaInclude<ExtArgs> | null
    /**
     * Filter, which LogAuditoria to fetch.
     */
    where: LogAuditoriaWhereUniqueInput
  }

  /**
   * LogAuditoria findFirst
   */
  export type LogAuditoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAuditoria
     */
    select?: LogAuditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogAuditoria
     */
    omit?: LogAuditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAuditoriaInclude<ExtArgs> | null
    /**
     * Filter, which LogAuditoria to fetch.
     */
    where?: LogAuditoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogAuditorias to fetch.
     */
    orderBy?: LogAuditoriaOrderByWithRelationInput | LogAuditoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LogAuditorias.
     */
    cursor?: LogAuditoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogAuditorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogAuditorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LogAuditorias.
     */
    distinct?: LogAuditoriaScalarFieldEnum | LogAuditoriaScalarFieldEnum[]
  }

  /**
   * LogAuditoria findFirstOrThrow
   */
  export type LogAuditoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAuditoria
     */
    select?: LogAuditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogAuditoria
     */
    omit?: LogAuditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAuditoriaInclude<ExtArgs> | null
    /**
     * Filter, which LogAuditoria to fetch.
     */
    where?: LogAuditoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogAuditorias to fetch.
     */
    orderBy?: LogAuditoriaOrderByWithRelationInput | LogAuditoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LogAuditorias.
     */
    cursor?: LogAuditoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogAuditorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogAuditorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LogAuditorias.
     */
    distinct?: LogAuditoriaScalarFieldEnum | LogAuditoriaScalarFieldEnum[]
  }

  /**
   * LogAuditoria findMany
   */
  export type LogAuditoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAuditoria
     */
    select?: LogAuditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogAuditoria
     */
    omit?: LogAuditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAuditoriaInclude<ExtArgs> | null
    /**
     * Filter, which LogAuditorias to fetch.
     */
    where?: LogAuditoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogAuditorias to fetch.
     */
    orderBy?: LogAuditoriaOrderByWithRelationInput | LogAuditoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LogAuditorias.
     */
    cursor?: LogAuditoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogAuditorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogAuditorias.
     */
    skip?: number
    distinct?: LogAuditoriaScalarFieldEnum | LogAuditoriaScalarFieldEnum[]
  }

  /**
   * LogAuditoria create
   */
  export type LogAuditoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAuditoria
     */
    select?: LogAuditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogAuditoria
     */
    omit?: LogAuditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAuditoriaInclude<ExtArgs> | null
    /**
     * The data needed to create a LogAuditoria.
     */
    data: XOR<LogAuditoriaCreateInput, LogAuditoriaUncheckedCreateInput>
  }

  /**
   * LogAuditoria createMany
   */
  export type LogAuditoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LogAuditorias.
     */
    data: LogAuditoriaCreateManyInput | LogAuditoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LogAuditoria createManyAndReturn
   */
  export type LogAuditoriaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAuditoria
     */
    select?: LogAuditoriaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LogAuditoria
     */
    omit?: LogAuditoriaOmit<ExtArgs> | null
    /**
     * The data used to create many LogAuditorias.
     */
    data: LogAuditoriaCreateManyInput | LogAuditoriaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAuditoriaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LogAuditoria update
   */
  export type LogAuditoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAuditoria
     */
    select?: LogAuditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogAuditoria
     */
    omit?: LogAuditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAuditoriaInclude<ExtArgs> | null
    /**
     * The data needed to update a LogAuditoria.
     */
    data: XOR<LogAuditoriaUpdateInput, LogAuditoriaUncheckedUpdateInput>
    /**
     * Choose, which LogAuditoria to update.
     */
    where: LogAuditoriaWhereUniqueInput
  }

  /**
   * LogAuditoria updateMany
   */
  export type LogAuditoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LogAuditorias.
     */
    data: XOR<LogAuditoriaUpdateManyMutationInput, LogAuditoriaUncheckedUpdateManyInput>
    /**
     * Filter which LogAuditorias to update
     */
    where?: LogAuditoriaWhereInput
    /**
     * Limit how many LogAuditorias to update.
     */
    limit?: number
  }

  /**
   * LogAuditoria updateManyAndReturn
   */
  export type LogAuditoriaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAuditoria
     */
    select?: LogAuditoriaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LogAuditoria
     */
    omit?: LogAuditoriaOmit<ExtArgs> | null
    /**
     * The data used to update LogAuditorias.
     */
    data: XOR<LogAuditoriaUpdateManyMutationInput, LogAuditoriaUncheckedUpdateManyInput>
    /**
     * Filter which LogAuditorias to update
     */
    where?: LogAuditoriaWhereInput
    /**
     * Limit how many LogAuditorias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAuditoriaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LogAuditoria upsert
   */
  export type LogAuditoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAuditoria
     */
    select?: LogAuditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogAuditoria
     */
    omit?: LogAuditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAuditoriaInclude<ExtArgs> | null
    /**
     * The filter to search for the LogAuditoria to update in case it exists.
     */
    where: LogAuditoriaWhereUniqueInput
    /**
     * In case the LogAuditoria found by the `where` argument doesn't exist, create a new LogAuditoria with this data.
     */
    create: XOR<LogAuditoriaCreateInput, LogAuditoriaUncheckedCreateInput>
    /**
     * In case the LogAuditoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LogAuditoriaUpdateInput, LogAuditoriaUncheckedUpdateInput>
  }

  /**
   * LogAuditoria delete
   */
  export type LogAuditoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAuditoria
     */
    select?: LogAuditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogAuditoria
     */
    omit?: LogAuditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAuditoriaInclude<ExtArgs> | null
    /**
     * Filter which LogAuditoria to delete.
     */
    where: LogAuditoriaWhereUniqueInput
  }

  /**
   * LogAuditoria deleteMany
   */
  export type LogAuditoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LogAuditorias to delete
     */
    where?: LogAuditoriaWhereInput
    /**
     * Limit how many LogAuditorias to delete.
     */
    limit?: number
  }

  /**
   * LogAuditoria without action
   */
  export type LogAuditoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAuditoria
     */
    select?: LogAuditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogAuditoria
     */
    omit?: LogAuditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAuditoriaInclude<ExtArgs> | null
  }


  /**
   * Model Premio
   */

  export type AggregatePremio = {
    _count: PremioCountAggregateOutputType | null
    _avg: PremioAvgAggregateOutputType | null
    _sum: PremioSumAggregateOutputType | null
    _min: PremioMinAggregateOutputType | null
    _max: PremioMaxAggregateOutputType | null
  }

  export type PremioAvgAggregateOutputType = {
    id: number | null
    rifaId: number | null
  }

  export type PremioSumAggregateOutputType = {
    id: number | null
    rifaId: number | null
  }

  export type PremioMinAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    imagem: string | null
    rifaId: number | null
  }

  export type PremioMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    imagem: string | null
    rifaId: number | null
  }

  export type PremioCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    imagem: number
    rifaId: number
    _all: number
  }


  export type PremioAvgAggregateInputType = {
    id?: true
    rifaId?: true
  }

  export type PremioSumAggregateInputType = {
    id?: true
    rifaId?: true
  }

  export type PremioMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    imagem?: true
    rifaId?: true
  }

  export type PremioMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    imagem?: true
    rifaId?: true
  }

  export type PremioCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    imagem?: true
    rifaId?: true
    _all?: true
  }

  export type PremioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Premio to aggregate.
     */
    where?: PremioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Premios to fetch.
     */
    orderBy?: PremioOrderByWithRelationInput | PremioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PremioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Premios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Premios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Premios
    **/
    _count?: true | PremioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PremioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PremioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PremioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PremioMaxAggregateInputType
  }

  export type GetPremioAggregateType<T extends PremioAggregateArgs> = {
        [P in keyof T & keyof AggregatePremio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePremio[P]>
      : GetScalarType<T[P], AggregatePremio[P]>
  }




  export type PremioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PremioWhereInput
    orderBy?: PremioOrderByWithAggregationInput | PremioOrderByWithAggregationInput[]
    by: PremioScalarFieldEnum[] | PremioScalarFieldEnum
    having?: PremioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PremioCountAggregateInputType | true
    _avg?: PremioAvgAggregateInputType
    _sum?: PremioSumAggregateInputType
    _min?: PremioMinAggregateInputType
    _max?: PremioMaxAggregateInputType
  }

  export type PremioGroupByOutputType = {
    id: number
    nome: string
    descricao: string
    imagem: string | null
    rifaId: number | null
    _count: PremioCountAggregateOutputType | null
    _avg: PremioAvgAggregateOutputType | null
    _sum: PremioSumAggregateOutputType | null
    _min: PremioMinAggregateOutputType | null
    _max: PremioMaxAggregateOutputType | null
  }

  type GetPremioGroupByPayload<T extends PremioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PremioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PremioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PremioGroupByOutputType[P]>
            : GetScalarType<T[P], PremioGroupByOutputType[P]>
        }
      >
    >


  export type PremioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    imagem?: boolean
    rifaId?: boolean
    rifa?: boolean | Premio$rifaArgs<ExtArgs>
    participantes?: boolean | Premio$participantesArgs<ExtArgs>
    _count?: boolean | PremioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["premio"]>

  export type PremioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    imagem?: boolean
    rifaId?: boolean
    rifa?: boolean | Premio$rifaArgs<ExtArgs>
  }, ExtArgs["result"]["premio"]>

  export type PremioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    imagem?: boolean
    rifaId?: boolean
    rifa?: boolean | Premio$rifaArgs<ExtArgs>
  }, ExtArgs["result"]["premio"]>

  export type PremioSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
    imagem?: boolean
    rifaId?: boolean
  }

  export type PremioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "descricao" | "imagem" | "rifaId", ExtArgs["result"]["premio"]>
  export type PremioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rifa?: boolean | Premio$rifaArgs<ExtArgs>
    participantes?: boolean | Premio$participantesArgs<ExtArgs>
    _count?: boolean | PremioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PremioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rifa?: boolean | Premio$rifaArgs<ExtArgs>
  }
  export type PremioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rifa?: boolean | Premio$rifaArgs<ExtArgs>
  }

  export type $PremioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Premio"
    objects: {
      rifa: Prisma.$RifaPayload<ExtArgs> | null
      participantes: Prisma.$PremioParticipantePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      descricao: string
      imagem: string | null
      rifaId: number | null
    }, ExtArgs["result"]["premio"]>
    composites: {}
  }

  type PremioGetPayload<S extends boolean | null | undefined | PremioDefaultArgs> = $Result.GetResult<Prisma.$PremioPayload, S>

  type PremioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PremioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PremioCountAggregateInputType | true
    }

  export interface PremioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Premio'], meta: { name: 'Premio' } }
    /**
     * Find zero or one Premio that matches the filter.
     * @param {PremioFindUniqueArgs} args - Arguments to find a Premio
     * @example
     * // Get one Premio
     * const premio = await prisma.premio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PremioFindUniqueArgs>(args: SelectSubset<T, PremioFindUniqueArgs<ExtArgs>>): Prisma__PremioClient<$Result.GetResult<Prisma.$PremioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Premio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PremioFindUniqueOrThrowArgs} args - Arguments to find a Premio
     * @example
     * // Get one Premio
     * const premio = await prisma.premio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PremioFindUniqueOrThrowArgs>(args: SelectSubset<T, PremioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PremioClient<$Result.GetResult<Prisma.$PremioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Premio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PremioFindFirstArgs} args - Arguments to find a Premio
     * @example
     * // Get one Premio
     * const premio = await prisma.premio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PremioFindFirstArgs>(args?: SelectSubset<T, PremioFindFirstArgs<ExtArgs>>): Prisma__PremioClient<$Result.GetResult<Prisma.$PremioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Premio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PremioFindFirstOrThrowArgs} args - Arguments to find a Premio
     * @example
     * // Get one Premio
     * const premio = await prisma.premio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PremioFindFirstOrThrowArgs>(args?: SelectSubset<T, PremioFindFirstOrThrowArgs<ExtArgs>>): Prisma__PremioClient<$Result.GetResult<Prisma.$PremioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Premios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PremioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Premios
     * const premios = await prisma.premio.findMany()
     * 
     * // Get first 10 Premios
     * const premios = await prisma.premio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const premioWithIdOnly = await prisma.premio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PremioFindManyArgs>(args?: SelectSubset<T, PremioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PremioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Premio.
     * @param {PremioCreateArgs} args - Arguments to create a Premio.
     * @example
     * // Create one Premio
     * const Premio = await prisma.premio.create({
     *   data: {
     *     // ... data to create a Premio
     *   }
     * })
     * 
     */
    create<T extends PremioCreateArgs>(args: SelectSubset<T, PremioCreateArgs<ExtArgs>>): Prisma__PremioClient<$Result.GetResult<Prisma.$PremioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Premios.
     * @param {PremioCreateManyArgs} args - Arguments to create many Premios.
     * @example
     * // Create many Premios
     * const premio = await prisma.premio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PremioCreateManyArgs>(args?: SelectSubset<T, PremioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Premios and returns the data saved in the database.
     * @param {PremioCreateManyAndReturnArgs} args - Arguments to create many Premios.
     * @example
     * // Create many Premios
     * const premio = await prisma.premio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Premios and only return the `id`
     * const premioWithIdOnly = await prisma.premio.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PremioCreateManyAndReturnArgs>(args?: SelectSubset<T, PremioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PremioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Premio.
     * @param {PremioDeleteArgs} args - Arguments to delete one Premio.
     * @example
     * // Delete one Premio
     * const Premio = await prisma.premio.delete({
     *   where: {
     *     // ... filter to delete one Premio
     *   }
     * })
     * 
     */
    delete<T extends PremioDeleteArgs>(args: SelectSubset<T, PremioDeleteArgs<ExtArgs>>): Prisma__PremioClient<$Result.GetResult<Prisma.$PremioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Premio.
     * @param {PremioUpdateArgs} args - Arguments to update one Premio.
     * @example
     * // Update one Premio
     * const premio = await prisma.premio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PremioUpdateArgs>(args: SelectSubset<T, PremioUpdateArgs<ExtArgs>>): Prisma__PremioClient<$Result.GetResult<Prisma.$PremioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Premios.
     * @param {PremioDeleteManyArgs} args - Arguments to filter Premios to delete.
     * @example
     * // Delete a few Premios
     * const { count } = await prisma.premio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PremioDeleteManyArgs>(args?: SelectSubset<T, PremioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Premios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PremioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Premios
     * const premio = await prisma.premio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PremioUpdateManyArgs>(args: SelectSubset<T, PremioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Premios and returns the data updated in the database.
     * @param {PremioUpdateManyAndReturnArgs} args - Arguments to update many Premios.
     * @example
     * // Update many Premios
     * const premio = await prisma.premio.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Premios and only return the `id`
     * const premioWithIdOnly = await prisma.premio.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PremioUpdateManyAndReturnArgs>(args: SelectSubset<T, PremioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PremioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Premio.
     * @param {PremioUpsertArgs} args - Arguments to update or create a Premio.
     * @example
     * // Update or create a Premio
     * const premio = await prisma.premio.upsert({
     *   create: {
     *     // ... data to create a Premio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Premio we want to update
     *   }
     * })
     */
    upsert<T extends PremioUpsertArgs>(args: SelectSubset<T, PremioUpsertArgs<ExtArgs>>): Prisma__PremioClient<$Result.GetResult<Prisma.$PremioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Premios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PremioCountArgs} args - Arguments to filter Premios to count.
     * @example
     * // Count the number of Premios
     * const count = await prisma.premio.count({
     *   where: {
     *     // ... the filter for the Premios we want to count
     *   }
     * })
    **/
    count<T extends PremioCountArgs>(
      args?: Subset<T, PremioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PremioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Premio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PremioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PremioAggregateArgs>(args: Subset<T, PremioAggregateArgs>): Prisma.PrismaPromise<GetPremioAggregateType<T>>

    /**
     * Group by Premio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PremioGroupByArgs} args - Group by arguments.
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
      T extends PremioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PremioGroupByArgs['orderBy'] }
        : { orderBy?: PremioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PremioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPremioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Premio model
   */
  readonly fields: PremioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Premio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PremioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rifa<T extends Premio$rifaArgs<ExtArgs> = {}>(args?: Subset<T, Premio$rifaArgs<ExtArgs>>): Prisma__RifaClient<$Result.GetResult<Prisma.$RifaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    participantes<T extends Premio$participantesArgs<ExtArgs> = {}>(args?: Subset<T, Premio$participantesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PremioParticipantePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Premio model
   */
  interface PremioFieldRefs {
    readonly id: FieldRef<"Premio", 'Int'>
    readonly nome: FieldRef<"Premio", 'String'>
    readonly descricao: FieldRef<"Premio", 'String'>
    readonly imagem: FieldRef<"Premio", 'String'>
    readonly rifaId: FieldRef<"Premio", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Premio findUnique
   */
  export type PremioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Premio
     */
    select?: PremioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Premio
     */
    omit?: PremioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremioInclude<ExtArgs> | null
    /**
     * Filter, which Premio to fetch.
     */
    where: PremioWhereUniqueInput
  }

  /**
   * Premio findUniqueOrThrow
   */
  export type PremioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Premio
     */
    select?: PremioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Premio
     */
    omit?: PremioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremioInclude<ExtArgs> | null
    /**
     * Filter, which Premio to fetch.
     */
    where: PremioWhereUniqueInput
  }

  /**
   * Premio findFirst
   */
  export type PremioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Premio
     */
    select?: PremioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Premio
     */
    omit?: PremioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremioInclude<ExtArgs> | null
    /**
     * Filter, which Premio to fetch.
     */
    where?: PremioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Premios to fetch.
     */
    orderBy?: PremioOrderByWithRelationInput | PremioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Premios.
     */
    cursor?: PremioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Premios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Premios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Premios.
     */
    distinct?: PremioScalarFieldEnum | PremioScalarFieldEnum[]
  }

  /**
   * Premio findFirstOrThrow
   */
  export type PremioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Premio
     */
    select?: PremioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Premio
     */
    omit?: PremioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremioInclude<ExtArgs> | null
    /**
     * Filter, which Premio to fetch.
     */
    where?: PremioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Premios to fetch.
     */
    orderBy?: PremioOrderByWithRelationInput | PremioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Premios.
     */
    cursor?: PremioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Premios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Premios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Premios.
     */
    distinct?: PremioScalarFieldEnum | PremioScalarFieldEnum[]
  }

  /**
   * Premio findMany
   */
  export type PremioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Premio
     */
    select?: PremioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Premio
     */
    omit?: PremioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremioInclude<ExtArgs> | null
    /**
     * Filter, which Premios to fetch.
     */
    where?: PremioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Premios to fetch.
     */
    orderBy?: PremioOrderByWithRelationInput | PremioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Premios.
     */
    cursor?: PremioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Premios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Premios.
     */
    skip?: number
    distinct?: PremioScalarFieldEnum | PremioScalarFieldEnum[]
  }

  /**
   * Premio create
   */
  export type PremioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Premio
     */
    select?: PremioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Premio
     */
    omit?: PremioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremioInclude<ExtArgs> | null
    /**
     * The data needed to create a Premio.
     */
    data: XOR<PremioCreateInput, PremioUncheckedCreateInput>
  }

  /**
   * Premio createMany
   */
  export type PremioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Premios.
     */
    data: PremioCreateManyInput | PremioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Premio createManyAndReturn
   */
  export type PremioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Premio
     */
    select?: PremioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Premio
     */
    omit?: PremioOmit<ExtArgs> | null
    /**
     * The data used to create many Premios.
     */
    data: PremioCreateManyInput | PremioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Premio update
   */
  export type PremioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Premio
     */
    select?: PremioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Premio
     */
    omit?: PremioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremioInclude<ExtArgs> | null
    /**
     * The data needed to update a Premio.
     */
    data: XOR<PremioUpdateInput, PremioUncheckedUpdateInput>
    /**
     * Choose, which Premio to update.
     */
    where: PremioWhereUniqueInput
  }

  /**
   * Premio updateMany
   */
  export type PremioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Premios.
     */
    data: XOR<PremioUpdateManyMutationInput, PremioUncheckedUpdateManyInput>
    /**
     * Filter which Premios to update
     */
    where?: PremioWhereInput
    /**
     * Limit how many Premios to update.
     */
    limit?: number
  }

  /**
   * Premio updateManyAndReturn
   */
  export type PremioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Premio
     */
    select?: PremioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Premio
     */
    omit?: PremioOmit<ExtArgs> | null
    /**
     * The data used to update Premios.
     */
    data: XOR<PremioUpdateManyMutationInput, PremioUncheckedUpdateManyInput>
    /**
     * Filter which Premios to update
     */
    where?: PremioWhereInput
    /**
     * Limit how many Premios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Premio upsert
   */
  export type PremioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Premio
     */
    select?: PremioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Premio
     */
    omit?: PremioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremioInclude<ExtArgs> | null
    /**
     * The filter to search for the Premio to update in case it exists.
     */
    where: PremioWhereUniqueInput
    /**
     * In case the Premio found by the `where` argument doesn't exist, create a new Premio with this data.
     */
    create: XOR<PremioCreateInput, PremioUncheckedCreateInput>
    /**
     * In case the Premio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PremioUpdateInput, PremioUncheckedUpdateInput>
  }

  /**
   * Premio delete
   */
  export type PremioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Premio
     */
    select?: PremioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Premio
     */
    omit?: PremioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremioInclude<ExtArgs> | null
    /**
     * Filter which Premio to delete.
     */
    where: PremioWhereUniqueInput
  }

  /**
   * Premio deleteMany
   */
  export type PremioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Premios to delete
     */
    where?: PremioWhereInput
    /**
     * Limit how many Premios to delete.
     */
    limit?: number
  }

  /**
   * Premio.rifa
   */
  export type Premio$rifaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rifa
     */
    select?: RifaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rifa
     */
    omit?: RifaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RifaInclude<ExtArgs> | null
    where?: RifaWhereInput
  }

  /**
   * Premio.participantes
   */
  export type Premio$participantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremioParticipante
     */
    select?: PremioParticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremioParticipante
     */
    omit?: PremioParticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremioParticipanteInclude<ExtArgs> | null
    where?: PremioParticipanteWhereInput
    orderBy?: PremioParticipanteOrderByWithRelationInput | PremioParticipanteOrderByWithRelationInput[]
    cursor?: PremioParticipanteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PremioParticipanteScalarFieldEnum | PremioParticipanteScalarFieldEnum[]
  }

  /**
   * Premio without action
   */
  export type PremioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Premio
     */
    select?: PremioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Premio
     */
    omit?: PremioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremioInclude<ExtArgs> | null
  }


  /**
   * Model Rifa
   */

  export type AggregateRifa = {
    _count: RifaCountAggregateOutputType | null
    _avg: RifaAvgAggregateOutputType | null
    _sum: RifaSumAggregateOutputType | null
    _min: RifaMinAggregateOutputType | null
    _max: RifaMaxAggregateOutputType | null
  }

  export type RifaAvgAggregateOutputType = {
    id: number | null
    precoBilhete: number | null
    quantidadeBilhetes: number | null
    organizadorId: number | null
  }

  export type RifaSumAggregateOutputType = {
    id: number | null
    precoBilhete: number | null
    quantidadeBilhetes: number | null
    organizadorId: number | null
  }

  export type RifaMinAggregateOutputType = {
    id: number | null
    titulo: string | null
    descricao: string | null
    precoBilhete: number | null
    quantidadeBilhetes: number | null
    dataSorteio: Date | null
    status: $Enums.StatusRifa | null
    createdAt: Date | null
    organizadorId: number | null
  }

  export type RifaMaxAggregateOutputType = {
    id: number | null
    titulo: string | null
    descricao: string | null
    precoBilhete: number | null
    quantidadeBilhetes: number | null
    dataSorteio: Date | null
    status: $Enums.StatusRifa | null
    createdAt: Date | null
    organizadorId: number | null
  }

  export type RifaCountAggregateOutputType = {
    id: number
    titulo: number
    descricao: number
    precoBilhete: number
    quantidadeBilhetes: number
    dataSorteio: number
    status: number
    createdAt: number
    organizadorId: number
    _all: number
  }


  export type RifaAvgAggregateInputType = {
    id?: true
    precoBilhete?: true
    quantidadeBilhetes?: true
    organizadorId?: true
  }

  export type RifaSumAggregateInputType = {
    id?: true
    precoBilhete?: true
    quantidadeBilhetes?: true
    organizadorId?: true
  }

  export type RifaMinAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    precoBilhete?: true
    quantidadeBilhetes?: true
    dataSorteio?: true
    status?: true
    createdAt?: true
    organizadorId?: true
  }

  export type RifaMaxAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    precoBilhete?: true
    quantidadeBilhetes?: true
    dataSorteio?: true
    status?: true
    createdAt?: true
    organizadorId?: true
  }

  export type RifaCountAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    precoBilhete?: true
    quantidadeBilhetes?: true
    dataSorteio?: true
    status?: true
    createdAt?: true
    organizadorId?: true
    _all?: true
  }

  export type RifaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rifa to aggregate.
     */
    where?: RifaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rifas to fetch.
     */
    orderBy?: RifaOrderByWithRelationInput | RifaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RifaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rifas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rifas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rifas
    **/
    _count?: true | RifaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RifaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RifaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RifaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RifaMaxAggregateInputType
  }

  export type GetRifaAggregateType<T extends RifaAggregateArgs> = {
        [P in keyof T & keyof AggregateRifa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRifa[P]>
      : GetScalarType<T[P], AggregateRifa[P]>
  }




  export type RifaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RifaWhereInput
    orderBy?: RifaOrderByWithAggregationInput | RifaOrderByWithAggregationInput[]
    by: RifaScalarFieldEnum[] | RifaScalarFieldEnum
    having?: RifaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RifaCountAggregateInputType | true
    _avg?: RifaAvgAggregateInputType
    _sum?: RifaSumAggregateInputType
    _min?: RifaMinAggregateInputType
    _max?: RifaMaxAggregateInputType
  }

  export type RifaGroupByOutputType = {
    id: number
    titulo: string
    descricao: string
    precoBilhete: number
    quantidadeBilhetes: number
    dataSorteio: Date | null
    status: $Enums.StatusRifa
    createdAt: Date
    organizadorId: number
    _count: RifaCountAggregateOutputType | null
    _avg: RifaAvgAggregateOutputType | null
    _sum: RifaSumAggregateOutputType | null
    _min: RifaMinAggregateOutputType | null
    _max: RifaMaxAggregateOutputType | null
  }

  type GetRifaGroupByPayload<T extends RifaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RifaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RifaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RifaGroupByOutputType[P]>
            : GetScalarType<T[P], RifaGroupByOutputType[P]>
        }
      >
    >


  export type RifaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    precoBilhete?: boolean
    quantidadeBilhetes?: boolean
    dataSorteio?: boolean
    status?: boolean
    createdAt?: boolean
    organizadorId?: boolean
    organizador?: boolean | OrganizadorDefaultArgs<ExtArgs>
    sorteios?: boolean | Rifa$sorteiosArgs<ExtArgs>
    bilhetes?: boolean | Rifa$bilhetesArgs<ExtArgs>
    premio?: boolean | Rifa$premioArgs<ExtArgs>
    logs?: boolean | Rifa$logsArgs<ExtArgs>
    _count?: boolean | RifaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rifa"]>

  export type RifaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    precoBilhete?: boolean
    quantidadeBilhetes?: boolean
    dataSorteio?: boolean
    status?: boolean
    createdAt?: boolean
    organizadorId?: boolean
    organizador?: boolean | OrganizadorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rifa"]>

  export type RifaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    precoBilhete?: boolean
    quantidadeBilhetes?: boolean
    dataSorteio?: boolean
    status?: boolean
    createdAt?: boolean
    organizadorId?: boolean
    organizador?: boolean | OrganizadorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rifa"]>

  export type RifaSelectScalar = {
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    precoBilhete?: boolean
    quantidadeBilhetes?: boolean
    dataSorteio?: boolean
    status?: boolean
    createdAt?: boolean
    organizadorId?: boolean
  }

  export type RifaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "descricao" | "precoBilhete" | "quantidadeBilhetes" | "dataSorteio" | "status" | "createdAt" | "organizadorId", ExtArgs["result"]["rifa"]>
  export type RifaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organizador?: boolean | OrganizadorDefaultArgs<ExtArgs>
    sorteios?: boolean | Rifa$sorteiosArgs<ExtArgs>
    bilhetes?: boolean | Rifa$bilhetesArgs<ExtArgs>
    premio?: boolean | Rifa$premioArgs<ExtArgs>
    logs?: boolean | Rifa$logsArgs<ExtArgs>
    _count?: boolean | RifaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RifaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organizador?: boolean | OrganizadorDefaultArgs<ExtArgs>
  }
  export type RifaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organizador?: boolean | OrganizadorDefaultArgs<ExtArgs>
  }

  export type $RifaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rifa"
    objects: {
      organizador: Prisma.$OrganizadorPayload<ExtArgs>
      sorteios: Prisma.$SorteioPayload<ExtArgs>[]
      bilhetes: Prisma.$BilhetePayload<ExtArgs>[]
      premio: Prisma.$PremioPayload<ExtArgs> | null
      logs: Prisma.$LogAuditoriaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titulo: string
      descricao: string
      precoBilhete: number
      quantidadeBilhetes: number
      dataSorteio: Date | null
      status: $Enums.StatusRifa
      createdAt: Date
      organizadorId: number
    }, ExtArgs["result"]["rifa"]>
    composites: {}
  }

  type RifaGetPayload<S extends boolean | null | undefined | RifaDefaultArgs> = $Result.GetResult<Prisma.$RifaPayload, S>

  type RifaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RifaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RifaCountAggregateInputType | true
    }

  export interface RifaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rifa'], meta: { name: 'Rifa' } }
    /**
     * Find zero or one Rifa that matches the filter.
     * @param {RifaFindUniqueArgs} args - Arguments to find a Rifa
     * @example
     * // Get one Rifa
     * const rifa = await prisma.rifa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RifaFindUniqueArgs>(args: SelectSubset<T, RifaFindUniqueArgs<ExtArgs>>): Prisma__RifaClient<$Result.GetResult<Prisma.$RifaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rifa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RifaFindUniqueOrThrowArgs} args - Arguments to find a Rifa
     * @example
     * // Get one Rifa
     * const rifa = await prisma.rifa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RifaFindUniqueOrThrowArgs>(args: SelectSubset<T, RifaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RifaClient<$Result.GetResult<Prisma.$RifaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rifa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RifaFindFirstArgs} args - Arguments to find a Rifa
     * @example
     * // Get one Rifa
     * const rifa = await prisma.rifa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RifaFindFirstArgs>(args?: SelectSubset<T, RifaFindFirstArgs<ExtArgs>>): Prisma__RifaClient<$Result.GetResult<Prisma.$RifaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rifa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RifaFindFirstOrThrowArgs} args - Arguments to find a Rifa
     * @example
     * // Get one Rifa
     * const rifa = await prisma.rifa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RifaFindFirstOrThrowArgs>(args?: SelectSubset<T, RifaFindFirstOrThrowArgs<ExtArgs>>): Prisma__RifaClient<$Result.GetResult<Prisma.$RifaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rifas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RifaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rifas
     * const rifas = await prisma.rifa.findMany()
     * 
     * // Get first 10 Rifas
     * const rifas = await prisma.rifa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rifaWithIdOnly = await prisma.rifa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RifaFindManyArgs>(args?: SelectSubset<T, RifaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RifaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rifa.
     * @param {RifaCreateArgs} args - Arguments to create a Rifa.
     * @example
     * // Create one Rifa
     * const Rifa = await prisma.rifa.create({
     *   data: {
     *     // ... data to create a Rifa
     *   }
     * })
     * 
     */
    create<T extends RifaCreateArgs>(args: SelectSubset<T, RifaCreateArgs<ExtArgs>>): Prisma__RifaClient<$Result.GetResult<Prisma.$RifaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rifas.
     * @param {RifaCreateManyArgs} args - Arguments to create many Rifas.
     * @example
     * // Create many Rifas
     * const rifa = await prisma.rifa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RifaCreateManyArgs>(args?: SelectSubset<T, RifaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rifas and returns the data saved in the database.
     * @param {RifaCreateManyAndReturnArgs} args - Arguments to create many Rifas.
     * @example
     * // Create many Rifas
     * const rifa = await prisma.rifa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rifas and only return the `id`
     * const rifaWithIdOnly = await prisma.rifa.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RifaCreateManyAndReturnArgs>(args?: SelectSubset<T, RifaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RifaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rifa.
     * @param {RifaDeleteArgs} args - Arguments to delete one Rifa.
     * @example
     * // Delete one Rifa
     * const Rifa = await prisma.rifa.delete({
     *   where: {
     *     // ... filter to delete one Rifa
     *   }
     * })
     * 
     */
    delete<T extends RifaDeleteArgs>(args: SelectSubset<T, RifaDeleteArgs<ExtArgs>>): Prisma__RifaClient<$Result.GetResult<Prisma.$RifaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rifa.
     * @param {RifaUpdateArgs} args - Arguments to update one Rifa.
     * @example
     * // Update one Rifa
     * const rifa = await prisma.rifa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RifaUpdateArgs>(args: SelectSubset<T, RifaUpdateArgs<ExtArgs>>): Prisma__RifaClient<$Result.GetResult<Prisma.$RifaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rifas.
     * @param {RifaDeleteManyArgs} args - Arguments to filter Rifas to delete.
     * @example
     * // Delete a few Rifas
     * const { count } = await prisma.rifa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RifaDeleteManyArgs>(args?: SelectSubset<T, RifaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rifas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RifaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rifas
     * const rifa = await prisma.rifa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RifaUpdateManyArgs>(args: SelectSubset<T, RifaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rifas and returns the data updated in the database.
     * @param {RifaUpdateManyAndReturnArgs} args - Arguments to update many Rifas.
     * @example
     * // Update many Rifas
     * const rifa = await prisma.rifa.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rifas and only return the `id`
     * const rifaWithIdOnly = await prisma.rifa.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RifaUpdateManyAndReturnArgs>(args: SelectSubset<T, RifaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RifaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rifa.
     * @param {RifaUpsertArgs} args - Arguments to update or create a Rifa.
     * @example
     * // Update or create a Rifa
     * const rifa = await prisma.rifa.upsert({
     *   create: {
     *     // ... data to create a Rifa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rifa we want to update
     *   }
     * })
     */
    upsert<T extends RifaUpsertArgs>(args: SelectSubset<T, RifaUpsertArgs<ExtArgs>>): Prisma__RifaClient<$Result.GetResult<Prisma.$RifaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rifas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RifaCountArgs} args - Arguments to filter Rifas to count.
     * @example
     * // Count the number of Rifas
     * const count = await prisma.rifa.count({
     *   where: {
     *     // ... the filter for the Rifas we want to count
     *   }
     * })
    **/
    count<T extends RifaCountArgs>(
      args?: Subset<T, RifaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RifaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rifa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RifaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RifaAggregateArgs>(args: Subset<T, RifaAggregateArgs>): Prisma.PrismaPromise<GetRifaAggregateType<T>>

    /**
     * Group by Rifa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RifaGroupByArgs} args - Group by arguments.
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
      T extends RifaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RifaGroupByArgs['orderBy'] }
        : { orderBy?: RifaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RifaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRifaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rifa model
   */
  readonly fields: RifaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rifa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RifaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organizador<T extends OrganizadorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizadorDefaultArgs<ExtArgs>>): Prisma__OrganizadorClient<$Result.GetResult<Prisma.$OrganizadorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sorteios<T extends Rifa$sorteiosArgs<ExtArgs> = {}>(args?: Subset<T, Rifa$sorteiosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SorteioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bilhetes<T extends Rifa$bilhetesArgs<ExtArgs> = {}>(args?: Subset<T, Rifa$bilhetesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BilhetePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    premio<T extends Rifa$premioArgs<ExtArgs> = {}>(args?: Subset<T, Rifa$premioArgs<ExtArgs>>): Prisma__PremioClient<$Result.GetResult<Prisma.$PremioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    logs<T extends Rifa$logsArgs<ExtArgs> = {}>(args?: Subset<T, Rifa$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogAuditoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Rifa model
   */
  interface RifaFieldRefs {
    readonly id: FieldRef<"Rifa", 'Int'>
    readonly titulo: FieldRef<"Rifa", 'String'>
    readonly descricao: FieldRef<"Rifa", 'String'>
    readonly precoBilhete: FieldRef<"Rifa", 'Float'>
    readonly quantidadeBilhetes: FieldRef<"Rifa", 'Int'>
    readonly dataSorteio: FieldRef<"Rifa", 'DateTime'>
    readonly status: FieldRef<"Rifa", 'StatusRifa'>
    readonly createdAt: FieldRef<"Rifa", 'DateTime'>
    readonly organizadorId: FieldRef<"Rifa", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Rifa findUnique
   */
  export type RifaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rifa
     */
    select?: RifaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rifa
     */
    omit?: RifaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RifaInclude<ExtArgs> | null
    /**
     * Filter, which Rifa to fetch.
     */
    where: RifaWhereUniqueInput
  }

  /**
   * Rifa findUniqueOrThrow
   */
  export type RifaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rifa
     */
    select?: RifaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rifa
     */
    omit?: RifaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RifaInclude<ExtArgs> | null
    /**
     * Filter, which Rifa to fetch.
     */
    where: RifaWhereUniqueInput
  }

  /**
   * Rifa findFirst
   */
  export type RifaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rifa
     */
    select?: RifaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rifa
     */
    omit?: RifaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RifaInclude<ExtArgs> | null
    /**
     * Filter, which Rifa to fetch.
     */
    where?: RifaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rifas to fetch.
     */
    orderBy?: RifaOrderByWithRelationInput | RifaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rifas.
     */
    cursor?: RifaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rifas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rifas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rifas.
     */
    distinct?: RifaScalarFieldEnum | RifaScalarFieldEnum[]
  }

  /**
   * Rifa findFirstOrThrow
   */
  export type RifaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rifa
     */
    select?: RifaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rifa
     */
    omit?: RifaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RifaInclude<ExtArgs> | null
    /**
     * Filter, which Rifa to fetch.
     */
    where?: RifaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rifas to fetch.
     */
    orderBy?: RifaOrderByWithRelationInput | RifaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rifas.
     */
    cursor?: RifaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rifas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rifas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rifas.
     */
    distinct?: RifaScalarFieldEnum | RifaScalarFieldEnum[]
  }

  /**
   * Rifa findMany
   */
  export type RifaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rifa
     */
    select?: RifaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rifa
     */
    omit?: RifaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RifaInclude<ExtArgs> | null
    /**
     * Filter, which Rifas to fetch.
     */
    where?: RifaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rifas to fetch.
     */
    orderBy?: RifaOrderByWithRelationInput | RifaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rifas.
     */
    cursor?: RifaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rifas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rifas.
     */
    skip?: number
    distinct?: RifaScalarFieldEnum | RifaScalarFieldEnum[]
  }

  /**
   * Rifa create
   */
  export type RifaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rifa
     */
    select?: RifaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rifa
     */
    omit?: RifaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RifaInclude<ExtArgs> | null
    /**
     * The data needed to create a Rifa.
     */
    data: XOR<RifaCreateInput, RifaUncheckedCreateInput>
  }

  /**
   * Rifa createMany
   */
  export type RifaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rifas.
     */
    data: RifaCreateManyInput | RifaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rifa createManyAndReturn
   */
  export type RifaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rifa
     */
    select?: RifaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rifa
     */
    omit?: RifaOmit<ExtArgs> | null
    /**
     * The data used to create many Rifas.
     */
    data: RifaCreateManyInput | RifaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RifaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rifa update
   */
  export type RifaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rifa
     */
    select?: RifaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rifa
     */
    omit?: RifaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RifaInclude<ExtArgs> | null
    /**
     * The data needed to update a Rifa.
     */
    data: XOR<RifaUpdateInput, RifaUncheckedUpdateInput>
    /**
     * Choose, which Rifa to update.
     */
    where: RifaWhereUniqueInput
  }

  /**
   * Rifa updateMany
   */
  export type RifaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rifas.
     */
    data: XOR<RifaUpdateManyMutationInput, RifaUncheckedUpdateManyInput>
    /**
     * Filter which Rifas to update
     */
    where?: RifaWhereInput
    /**
     * Limit how many Rifas to update.
     */
    limit?: number
  }

  /**
   * Rifa updateManyAndReturn
   */
  export type RifaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rifa
     */
    select?: RifaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rifa
     */
    omit?: RifaOmit<ExtArgs> | null
    /**
     * The data used to update Rifas.
     */
    data: XOR<RifaUpdateManyMutationInput, RifaUncheckedUpdateManyInput>
    /**
     * Filter which Rifas to update
     */
    where?: RifaWhereInput
    /**
     * Limit how many Rifas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RifaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rifa upsert
   */
  export type RifaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rifa
     */
    select?: RifaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rifa
     */
    omit?: RifaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RifaInclude<ExtArgs> | null
    /**
     * The filter to search for the Rifa to update in case it exists.
     */
    where: RifaWhereUniqueInput
    /**
     * In case the Rifa found by the `where` argument doesn't exist, create a new Rifa with this data.
     */
    create: XOR<RifaCreateInput, RifaUncheckedCreateInput>
    /**
     * In case the Rifa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RifaUpdateInput, RifaUncheckedUpdateInput>
  }

  /**
   * Rifa delete
   */
  export type RifaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rifa
     */
    select?: RifaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rifa
     */
    omit?: RifaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RifaInclude<ExtArgs> | null
    /**
     * Filter which Rifa to delete.
     */
    where: RifaWhereUniqueInput
  }

  /**
   * Rifa deleteMany
   */
  export type RifaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rifas to delete
     */
    where?: RifaWhereInput
    /**
     * Limit how many Rifas to delete.
     */
    limit?: number
  }

  /**
   * Rifa.sorteios
   */
  export type Rifa$sorteiosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sorteio
     */
    select?: SorteioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sorteio
     */
    omit?: SorteioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SorteioInclude<ExtArgs> | null
    where?: SorteioWhereInput
    orderBy?: SorteioOrderByWithRelationInput | SorteioOrderByWithRelationInput[]
    cursor?: SorteioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SorteioScalarFieldEnum | SorteioScalarFieldEnum[]
  }

  /**
   * Rifa.bilhetes
   */
  export type Rifa$bilhetesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bilhete
     */
    select?: BilheteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bilhete
     */
    omit?: BilheteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BilheteInclude<ExtArgs> | null
    where?: BilheteWhereInput
    orderBy?: BilheteOrderByWithRelationInput | BilheteOrderByWithRelationInput[]
    cursor?: BilheteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BilheteScalarFieldEnum | BilheteScalarFieldEnum[]
  }

  /**
   * Rifa.premio
   */
  export type Rifa$premioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Premio
     */
    select?: PremioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Premio
     */
    omit?: PremioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremioInclude<ExtArgs> | null
    where?: PremioWhereInput
  }

  /**
   * Rifa.logs
   */
  export type Rifa$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogAuditoria
     */
    select?: LogAuditoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogAuditoria
     */
    omit?: LogAuditoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogAuditoriaInclude<ExtArgs> | null
    where?: LogAuditoriaWhereInput
    orderBy?: LogAuditoriaOrderByWithRelationInput | LogAuditoriaOrderByWithRelationInput[]
    cursor?: LogAuditoriaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LogAuditoriaScalarFieldEnum | LogAuditoriaScalarFieldEnum[]
  }

  /**
   * Rifa without action
   */
  export type RifaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rifa
     */
    select?: RifaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rifa
     */
    omit?: RifaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RifaInclude<ExtArgs> | null
  }


  /**
   * Model Organizador
   */

  export type AggregateOrganizador = {
    _count: OrganizadorCountAggregateOutputType | null
    _avg: OrganizadorAvgAggregateOutputType | null
    _sum: OrganizadorSumAggregateOutputType | null
    _min: OrganizadorMinAggregateOutputType | null
    _max: OrganizadorMaxAggregateOutputType | null
  }

  export type OrganizadorAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type OrganizadorSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type OrganizadorMinAggregateOutputType = {
    id: number | null
    cnpj: string | null
    userId: number | null
  }

  export type OrganizadorMaxAggregateOutputType = {
    id: number | null
    cnpj: string | null
    userId: number | null
  }

  export type OrganizadorCountAggregateOutputType = {
    id: number
    cnpj: number
    userId: number
    _all: number
  }


  export type OrganizadorAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type OrganizadorSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type OrganizadorMinAggregateInputType = {
    id?: true
    cnpj?: true
    userId?: true
  }

  export type OrganizadorMaxAggregateInputType = {
    id?: true
    cnpj?: true
    userId?: true
  }

  export type OrganizadorCountAggregateInputType = {
    id?: true
    cnpj?: true
    userId?: true
    _all?: true
  }

  export type OrganizadorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organizador to aggregate.
     */
    where?: OrganizadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizadors to fetch.
     */
    orderBy?: OrganizadorOrderByWithRelationInput | OrganizadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organizadors
    **/
    _count?: true | OrganizadorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrganizadorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrganizadorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizadorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizadorMaxAggregateInputType
  }

  export type GetOrganizadorAggregateType<T extends OrganizadorAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganizador]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganizador[P]>
      : GetScalarType<T[P], AggregateOrganizador[P]>
  }




  export type OrganizadorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizadorWhereInput
    orderBy?: OrganizadorOrderByWithAggregationInput | OrganizadorOrderByWithAggregationInput[]
    by: OrganizadorScalarFieldEnum[] | OrganizadorScalarFieldEnum
    having?: OrganizadorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizadorCountAggregateInputType | true
    _avg?: OrganizadorAvgAggregateInputType
    _sum?: OrganizadorSumAggregateInputType
    _min?: OrganizadorMinAggregateInputType
    _max?: OrganizadorMaxAggregateInputType
  }

  export type OrganizadorGroupByOutputType = {
    id: number
    cnpj: string | null
    userId: number
    _count: OrganizadorCountAggregateOutputType | null
    _avg: OrganizadorAvgAggregateOutputType | null
    _sum: OrganizadorSumAggregateOutputType | null
    _min: OrganizadorMinAggregateOutputType | null
    _max: OrganizadorMaxAggregateOutputType | null
  }

  type GetOrganizadorGroupByPayload<T extends OrganizadorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizadorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizadorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizadorGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizadorGroupByOutputType[P]>
        }
      >
    >


  export type OrganizadorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cnpj?: boolean
    userId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    rifas?: boolean | Organizador$rifasArgs<ExtArgs>
    _count?: boolean | OrganizadorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organizador"]>

  export type OrganizadorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cnpj?: boolean
    userId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organizador"]>

  export type OrganizadorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cnpj?: boolean
    userId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organizador"]>

  export type OrganizadorSelectScalar = {
    id?: boolean
    cnpj?: boolean
    userId?: boolean
  }

  export type OrganizadorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cnpj" | "userId", ExtArgs["result"]["organizador"]>
  export type OrganizadorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    rifas?: boolean | Organizador$rifasArgs<ExtArgs>
    _count?: boolean | OrganizadorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrganizadorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type OrganizadorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $OrganizadorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Organizador"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      rifas: Prisma.$RifaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cnpj: string | null
      userId: number
    }, ExtArgs["result"]["organizador"]>
    composites: {}
  }

  type OrganizadorGetPayload<S extends boolean | null | undefined | OrganizadorDefaultArgs> = $Result.GetResult<Prisma.$OrganizadorPayload, S>

  type OrganizadorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrganizadorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizadorCountAggregateInputType | true
    }

  export interface OrganizadorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Organizador'], meta: { name: 'Organizador' } }
    /**
     * Find zero or one Organizador that matches the filter.
     * @param {OrganizadorFindUniqueArgs} args - Arguments to find a Organizador
     * @example
     * // Get one Organizador
     * const organizador = await prisma.organizador.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizadorFindUniqueArgs>(args: SelectSubset<T, OrganizadorFindUniqueArgs<ExtArgs>>): Prisma__OrganizadorClient<$Result.GetResult<Prisma.$OrganizadorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Organizador that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganizadorFindUniqueOrThrowArgs} args - Arguments to find a Organizador
     * @example
     * // Get one Organizador
     * const organizador = await prisma.organizador.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizadorFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizadorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizadorClient<$Result.GetResult<Prisma.$OrganizadorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organizador that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizadorFindFirstArgs} args - Arguments to find a Organizador
     * @example
     * // Get one Organizador
     * const organizador = await prisma.organizador.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizadorFindFirstArgs>(args?: SelectSubset<T, OrganizadorFindFirstArgs<ExtArgs>>): Prisma__OrganizadorClient<$Result.GetResult<Prisma.$OrganizadorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organizador that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizadorFindFirstOrThrowArgs} args - Arguments to find a Organizador
     * @example
     * // Get one Organizador
     * const organizador = await prisma.organizador.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizadorFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizadorFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizadorClient<$Result.GetResult<Prisma.$OrganizadorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Organizadors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizadorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizadors
     * const organizadors = await prisma.organizador.findMany()
     * 
     * // Get first 10 Organizadors
     * const organizadors = await prisma.organizador.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizadorWithIdOnly = await prisma.organizador.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganizadorFindManyArgs>(args?: SelectSubset<T, OrganizadorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizadorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Organizador.
     * @param {OrganizadorCreateArgs} args - Arguments to create a Organizador.
     * @example
     * // Create one Organizador
     * const Organizador = await prisma.organizador.create({
     *   data: {
     *     // ... data to create a Organizador
     *   }
     * })
     * 
     */
    create<T extends OrganizadorCreateArgs>(args: SelectSubset<T, OrganizadorCreateArgs<ExtArgs>>): Prisma__OrganizadorClient<$Result.GetResult<Prisma.$OrganizadorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Organizadors.
     * @param {OrganizadorCreateManyArgs} args - Arguments to create many Organizadors.
     * @example
     * // Create many Organizadors
     * const organizador = await prisma.organizador.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizadorCreateManyArgs>(args?: SelectSubset<T, OrganizadorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Organizadors and returns the data saved in the database.
     * @param {OrganizadorCreateManyAndReturnArgs} args - Arguments to create many Organizadors.
     * @example
     * // Create many Organizadors
     * const organizador = await prisma.organizador.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Organizadors and only return the `id`
     * const organizadorWithIdOnly = await prisma.organizador.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganizadorCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganizadorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizadorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Organizador.
     * @param {OrganizadorDeleteArgs} args - Arguments to delete one Organizador.
     * @example
     * // Delete one Organizador
     * const Organizador = await prisma.organizador.delete({
     *   where: {
     *     // ... filter to delete one Organizador
     *   }
     * })
     * 
     */
    delete<T extends OrganizadorDeleteArgs>(args: SelectSubset<T, OrganizadorDeleteArgs<ExtArgs>>): Prisma__OrganizadorClient<$Result.GetResult<Prisma.$OrganizadorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Organizador.
     * @param {OrganizadorUpdateArgs} args - Arguments to update one Organizador.
     * @example
     * // Update one Organizador
     * const organizador = await prisma.organizador.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizadorUpdateArgs>(args: SelectSubset<T, OrganizadorUpdateArgs<ExtArgs>>): Prisma__OrganizadorClient<$Result.GetResult<Prisma.$OrganizadorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Organizadors.
     * @param {OrganizadorDeleteManyArgs} args - Arguments to filter Organizadors to delete.
     * @example
     * // Delete a few Organizadors
     * const { count } = await prisma.organizador.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizadorDeleteManyArgs>(args?: SelectSubset<T, OrganizadorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizadors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizadorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizadors
     * const organizador = await prisma.organizador.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizadorUpdateManyArgs>(args: SelectSubset<T, OrganizadorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizadors and returns the data updated in the database.
     * @param {OrganizadorUpdateManyAndReturnArgs} args - Arguments to update many Organizadors.
     * @example
     * // Update many Organizadors
     * const organizador = await prisma.organizador.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Organizadors and only return the `id`
     * const organizadorWithIdOnly = await prisma.organizador.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrganizadorUpdateManyAndReturnArgs>(args: SelectSubset<T, OrganizadorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizadorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Organizador.
     * @param {OrganizadorUpsertArgs} args - Arguments to update or create a Organizador.
     * @example
     * // Update or create a Organizador
     * const organizador = await prisma.organizador.upsert({
     *   create: {
     *     // ... data to create a Organizador
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organizador we want to update
     *   }
     * })
     */
    upsert<T extends OrganizadorUpsertArgs>(args: SelectSubset<T, OrganizadorUpsertArgs<ExtArgs>>): Prisma__OrganizadorClient<$Result.GetResult<Prisma.$OrganizadorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Organizadors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizadorCountArgs} args - Arguments to filter Organizadors to count.
     * @example
     * // Count the number of Organizadors
     * const count = await prisma.organizador.count({
     *   where: {
     *     // ... the filter for the Organizadors we want to count
     *   }
     * })
    **/
    count<T extends OrganizadorCountArgs>(
      args?: Subset<T, OrganizadorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizadorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organizador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizadorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrganizadorAggregateArgs>(args: Subset<T, OrganizadorAggregateArgs>): Prisma.PrismaPromise<GetOrganizadorAggregateType<T>>

    /**
     * Group by Organizador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizadorGroupByArgs} args - Group by arguments.
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
      T extends OrganizadorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizadorGroupByArgs['orderBy'] }
        : { orderBy?: OrganizadorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrganizadorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizadorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Organizador model
   */
  readonly fields: OrganizadorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organizador.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizadorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    rifas<T extends Organizador$rifasArgs<ExtArgs> = {}>(args?: Subset<T, Organizador$rifasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RifaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Organizador model
   */
  interface OrganizadorFieldRefs {
    readonly id: FieldRef<"Organizador", 'Int'>
    readonly cnpj: FieldRef<"Organizador", 'String'>
    readonly userId: FieldRef<"Organizador", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Organizador findUnique
   */
  export type OrganizadorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizador
     */
    select?: OrganizadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organizador
     */
    omit?: OrganizadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizadorInclude<ExtArgs> | null
    /**
     * Filter, which Organizador to fetch.
     */
    where: OrganizadorWhereUniqueInput
  }

  /**
   * Organizador findUniqueOrThrow
   */
  export type OrganizadorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizador
     */
    select?: OrganizadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organizador
     */
    omit?: OrganizadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizadorInclude<ExtArgs> | null
    /**
     * Filter, which Organizador to fetch.
     */
    where: OrganizadorWhereUniqueInput
  }

  /**
   * Organizador findFirst
   */
  export type OrganizadorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizador
     */
    select?: OrganizadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organizador
     */
    omit?: OrganizadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizadorInclude<ExtArgs> | null
    /**
     * Filter, which Organizador to fetch.
     */
    where?: OrganizadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizadors to fetch.
     */
    orderBy?: OrganizadorOrderByWithRelationInput | OrganizadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizadors.
     */
    cursor?: OrganizadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizadors.
     */
    distinct?: OrganizadorScalarFieldEnum | OrganizadorScalarFieldEnum[]
  }

  /**
   * Organizador findFirstOrThrow
   */
  export type OrganizadorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizador
     */
    select?: OrganizadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organizador
     */
    omit?: OrganizadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizadorInclude<ExtArgs> | null
    /**
     * Filter, which Organizador to fetch.
     */
    where?: OrganizadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizadors to fetch.
     */
    orderBy?: OrganizadorOrderByWithRelationInput | OrganizadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizadors.
     */
    cursor?: OrganizadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizadors.
     */
    distinct?: OrganizadorScalarFieldEnum | OrganizadorScalarFieldEnum[]
  }

  /**
   * Organizador findMany
   */
  export type OrganizadorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizador
     */
    select?: OrganizadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organizador
     */
    omit?: OrganizadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizadorInclude<ExtArgs> | null
    /**
     * Filter, which Organizadors to fetch.
     */
    where?: OrganizadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizadors to fetch.
     */
    orderBy?: OrganizadorOrderByWithRelationInput | OrganizadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organizadors.
     */
    cursor?: OrganizadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizadors.
     */
    skip?: number
    distinct?: OrganizadorScalarFieldEnum | OrganizadorScalarFieldEnum[]
  }

  /**
   * Organizador create
   */
  export type OrganizadorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizador
     */
    select?: OrganizadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organizador
     */
    omit?: OrganizadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizadorInclude<ExtArgs> | null
    /**
     * The data needed to create a Organizador.
     */
    data: XOR<OrganizadorCreateInput, OrganizadorUncheckedCreateInput>
  }

  /**
   * Organizador createMany
   */
  export type OrganizadorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Organizadors.
     */
    data: OrganizadorCreateManyInput | OrganizadorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organizador createManyAndReturn
   */
  export type OrganizadorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizador
     */
    select?: OrganizadorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organizador
     */
    omit?: OrganizadorOmit<ExtArgs> | null
    /**
     * The data used to create many Organizadors.
     */
    data: OrganizadorCreateManyInput | OrganizadorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizadorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Organizador update
   */
  export type OrganizadorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizador
     */
    select?: OrganizadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organizador
     */
    omit?: OrganizadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizadorInclude<ExtArgs> | null
    /**
     * The data needed to update a Organizador.
     */
    data: XOR<OrganizadorUpdateInput, OrganizadorUncheckedUpdateInput>
    /**
     * Choose, which Organizador to update.
     */
    where: OrganizadorWhereUniqueInput
  }

  /**
   * Organizador updateMany
   */
  export type OrganizadorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Organizadors.
     */
    data: XOR<OrganizadorUpdateManyMutationInput, OrganizadorUncheckedUpdateManyInput>
    /**
     * Filter which Organizadors to update
     */
    where?: OrganizadorWhereInput
    /**
     * Limit how many Organizadors to update.
     */
    limit?: number
  }

  /**
   * Organizador updateManyAndReturn
   */
  export type OrganizadorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizador
     */
    select?: OrganizadorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organizador
     */
    omit?: OrganizadorOmit<ExtArgs> | null
    /**
     * The data used to update Organizadors.
     */
    data: XOR<OrganizadorUpdateManyMutationInput, OrganizadorUncheckedUpdateManyInput>
    /**
     * Filter which Organizadors to update
     */
    where?: OrganizadorWhereInput
    /**
     * Limit how many Organizadors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizadorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Organizador upsert
   */
  export type OrganizadorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizador
     */
    select?: OrganizadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organizador
     */
    omit?: OrganizadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizadorInclude<ExtArgs> | null
    /**
     * The filter to search for the Organizador to update in case it exists.
     */
    where: OrganizadorWhereUniqueInput
    /**
     * In case the Organizador found by the `where` argument doesn't exist, create a new Organizador with this data.
     */
    create: XOR<OrganizadorCreateInput, OrganizadorUncheckedCreateInput>
    /**
     * In case the Organizador was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizadorUpdateInput, OrganizadorUncheckedUpdateInput>
  }

  /**
   * Organizador delete
   */
  export type OrganizadorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizador
     */
    select?: OrganizadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organizador
     */
    omit?: OrganizadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizadorInclude<ExtArgs> | null
    /**
     * Filter which Organizador to delete.
     */
    where: OrganizadorWhereUniqueInput
  }

  /**
   * Organizador deleteMany
   */
  export type OrganizadorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organizadors to delete
     */
    where?: OrganizadorWhereInput
    /**
     * Limit how many Organizadors to delete.
     */
    limit?: number
  }

  /**
   * Organizador.rifas
   */
  export type Organizador$rifasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rifa
     */
    select?: RifaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rifa
     */
    omit?: RifaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RifaInclude<ExtArgs> | null
    where?: RifaWhereInput
    orderBy?: RifaOrderByWithRelationInput | RifaOrderByWithRelationInput[]
    cursor?: RifaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RifaScalarFieldEnum | RifaScalarFieldEnum[]
  }

  /**
   * Organizador without action
   */
  export type OrganizadorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizador
     */
    select?: OrganizadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organizador
     */
    omit?: OrganizadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizadorInclude<ExtArgs> | null
  }


  /**
   * Model Participante
   */

  export type AggregateParticipante = {
    _count: ParticipanteCountAggregateOutputType | null
    _avg: ParticipanteAvgAggregateOutputType | null
    _sum: ParticipanteSumAggregateOutputType | null
    _min: ParticipanteMinAggregateOutputType | null
    _max: ParticipanteMaxAggregateOutputType | null
  }

  export type ParticipanteAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ParticipanteSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ParticipanteMinAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ParticipanteMaxAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ParticipanteCountAggregateOutputType = {
    id: number
    userId: number
    _all: number
  }


  export type ParticipanteAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ParticipanteSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ParticipanteMinAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ParticipanteMaxAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ParticipanteCountAggregateInputType = {
    id?: true
    userId?: true
    _all?: true
  }

  export type ParticipanteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Participante to aggregate.
     */
    where?: ParticipanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participantes to fetch.
     */
    orderBy?: ParticipanteOrderByWithRelationInput | ParticipanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParticipanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Participantes
    **/
    _count?: true | ParticipanteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParticipanteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParticipanteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParticipanteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParticipanteMaxAggregateInputType
  }

  export type GetParticipanteAggregateType<T extends ParticipanteAggregateArgs> = {
        [P in keyof T & keyof AggregateParticipante]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParticipante[P]>
      : GetScalarType<T[P], AggregateParticipante[P]>
  }




  export type ParticipanteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipanteWhereInput
    orderBy?: ParticipanteOrderByWithAggregationInput | ParticipanteOrderByWithAggregationInput[]
    by: ParticipanteScalarFieldEnum[] | ParticipanteScalarFieldEnum
    having?: ParticipanteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParticipanteCountAggregateInputType | true
    _avg?: ParticipanteAvgAggregateInputType
    _sum?: ParticipanteSumAggregateInputType
    _min?: ParticipanteMinAggregateInputType
    _max?: ParticipanteMaxAggregateInputType
  }

  export type ParticipanteGroupByOutputType = {
    id: number
    userId: number
    _count: ParticipanteCountAggregateOutputType | null
    _avg: ParticipanteAvgAggregateOutputType | null
    _sum: ParticipanteSumAggregateOutputType | null
    _min: ParticipanteMinAggregateOutputType | null
    _max: ParticipanteMaxAggregateOutputType | null
  }

  type GetParticipanteGroupByPayload<T extends ParticipanteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParticipanteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParticipanteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParticipanteGroupByOutputType[P]>
            : GetScalarType<T[P], ParticipanteGroupByOutputType[P]>
        }
      >
    >


  export type ParticipanteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    bilhetes?: boolean | Participante$bilhetesArgs<ExtArgs>
    pagamentos?: boolean | Participante$pagamentosArgs<ExtArgs>
    premios?: boolean | Participante$premiosArgs<ExtArgs>
    vitorias?: boolean | Participante$vitoriasArgs<ExtArgs>
    _count?: boolean | ParticipanteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participante"]>

  export type ParticipanteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participante"]>

  export type ParticipanteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participante"]>

  export type ParticipanteSelectScalar = {
    id?: boolean
    userId?: boolean
  }

  export type ParticipanteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId", ExtArgs["result"]["participante"]>
  export type ParticipanteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    bilhetes?: boolean | Participante$bilhetesArgs<ExtArgs>
    pagamentos?: boolean | Participante$pagamentosArgs<ExtArgs>
    premios?: boolean | Participante$premiosArgs<ExtArgs>
    vitorias?: boolean | Participante$vitoriasArgs<ExtArgs>
    _count?: boolean | ParticipanteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ParticipanteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type ParticipanteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $ParticipantePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Participante"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      bilhetes: Prisma.$BilhetePayload<ExtArgs>[]
      pagamentos: Prisma.$PagamentoPayload<ExtArgs>[]
      premios: Prisma.$PremioParticipantePayload<ExtArgs>[]
      vitorias: Prisma.$SorteioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
    }, ExtArgs["result"]["participante"]>
    composites: {}
  }

  type ParticipanteGetPayload<S extends boolean | null | undefined | ParticipanteDefaultArgs> = $Result.GetResult<Prisma.$ParticipantePayload, S>

  type ParticipanteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParticipanteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParticipanteCountAggregateInputType | true
    }

  export interface ParticipanteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Participante'], meta: { name: 'Participante' } }
    /**
     * Find zero or one Participante that matches the filter.
     * @param {ParticipanteFindUniqueArgs} args - Arguments to find a Participante
     * @example
     * // Get one Participante
     * const participante = await prisma.participante.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParticipanteFindUniqueArgs>(args: SelectSubset<T, ParticipanteFindUniqueArgs<ExtArgs>>): Prisma__ParticipanteClient<$Result.GetResult<Prisma.$ParticipantePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Participante that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParticipanteFindUniqueOrThrowArgs} args - Arguments to find a Participante
     * @example
     * // Get one Participante
     * const participante = await prisma.participante.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParticipanteFindUniqueOrThrowArgs>(args: SelectSubset<T, ParticipanteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParticipanteClient<$Result.GetResult<Prisma.$ParticipantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Participante that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipanteFindFirstArgs} args - Arguments to find a Participante
     * @example
     * // Get one Participante
     * const participante = await prisma.participante.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParticipanteFindFirstArgs>(args?: SelectSubset<T, ParticipanteFindFirstArgs<ExtArgs>>): Prisma__ParticipanteClient<$Result.GetResult<Prisma.$ParticipantePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Participante that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipanteFindFirstOrThrowArgs} args - Arguments to find a Participante
     * @example
     * // Get one Participante
     * const participante = await prisma.participante.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParticipanteFindFirstOrThrowArgs>(args?: SelectSubset<T, ParticipanteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParticipanteClient<$Result.GetResult<Prisma.$ParticipantePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Participantes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipanteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Participantes
     * const participantes = await prisma.participante.findMany()
     * 
     * // Get first 10 Participantes
     * const participantes = await prisma.participante.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const participanteWithIdOnly = await prisma.participante.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParticipanteFindManyArgs>(args?: SelectSubset<T, ParticipanteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Participante.
     * @param {ParticipanteCreateArgs} args - Arguments to create a Participante.
     * @example
     * // Create one Participante
     * const Participante = await prisma.participante.create({
     *   data: {
     *     // ... data to create a Participante
     *   }
     * })
     * 
     */
    create<T extends ParticipanteCreateArgs>(args: SelectSubset<T, ParticipanteCreateArgs<ExtArgs>>): Prisma__ParticipanteClient<$Result.GetResult<Prisma.$ParticipantePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Participantes.
     * @param {ParticipanteCreateManyArgs} args - Arguments to create many Participantes.
     * @example
     * // Create many Participantes
     * const participante = await prisma.participante.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParticipanteCreateManyArgs>(args?: SelectSubset<T, ParticipanteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Participantes and returns the data saved in the database.
     * @param {ParticipanteCreateManyAndReturnArgs} args - Arguments to create many Participantes.
     * @example
     * // Create many Participantes
     * const participante = await prisma.participante.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Participantes and only return the `id`
     * const participanteWithIdOnly = await prisma.participante.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParticipanteCreateManyAndReturnArgs>(args?: SelectSubset<T, ParticipanteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Participante.
     * @param {ParticipanteDeleteArgs} args - Arguments to delete one Participante.
     * @example
     * // Delete one Participante
     * const Participante = await prisma.participante.delete({
     *   where: {
     *     // ... filter to delete one Participante
     *   }
     * })
     * 
     */
    delete<T extends ParticipanteDeleteArgs>(args: SelectSubset<T, ParticipanteDeleteArgs<ExtArgs>>): Prisma__ParticipanteClient<$Result.GetResult<Prisma.$ParticipantePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Participante.
     * @param {ParticipanteUpdateArgs} args - Arguments to update one Participante.
     * @example
     * // Update one Participante
     * const participante = await prisma.participante.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParticipanteUpdateArgs>(args: SelectSubset<T, ParticipanteUpdateArgs<ExtArgs>>): Prisma__ParticipanteClient<$Result.GetResult<Prisma.$ParticipantePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Participantes.
     * @param {ParticipanteDeleteManyArgs} args - Arguments to filter Participantes to delete.
     * @example
     * // Delete a few Participantes
     * const { count } = await prisma.participante.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParticipanteDeleteManyArgs>(args?: SelectSubset<T, ParticipanteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Participantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipanteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Participantes
     * const participante = await prisma.participante.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParticipanteUpdateManyArgs>(args: SelectSubset<T, ParticipanteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Participantes and returns the data updated in the database.
     * @param {ParticipanteUpdateManyAndReturnArgs} args - Arguments to update many Participantes.
     * @example
     * // Update many Participantes
     * const participante = await prisma.participante.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Participantes and only return the `id`
     * const participanteWithIdOnly = await prisma.participante.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ParticipanteUpdateManyAndReturnArgs>(args: SelectSubset<T, ParticipanteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Participante.
     * @param {ParticipanteUpsertArgs} args - Arguments to update or create a Participante.
     * @example
     * // Update or create a Participante
     * const participante = await prisma.participante.upsert({
     *   create: {
     *     // ... data to create a Participante
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Participante we want to update
     *   }
     * })
     */
    upsert<T extends ParticipanteUpsertArgs>(args: SelectSubset<T, ParticipanteUpsertArgs<ExtArgs>>): Prisma__ParticipanteClient<$Result.GetResult<Prisma.$ParticipantePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Participantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipanteCountArgs} args - Arguments to filter Participantes to count.
     * @example
     * // Count the number of Participantes
     * const count = await prisma.participante.count({
     *   where: {
     *     // ... the filter for the Participantes we want to count
     *   }
     * })
    **/
    count<T extends ParticipanteCountArgs>(
      args?: Subset<T, ParticipanteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParticipanteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Participante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipanteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ParticipanteAggregateArgs>(args: Subset<T, ParticipanteAggregateArgs>): Prisma.PrismaPromise<GetParticipanteAggregateType<T>>

    /**
     * Group by Participante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipanteGroupByArgs} args - Group by arguments.
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
      T extends ParticipanteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParticipanteGroupByArgs['orderBy'] }
        : { orderBy?: ParticipanteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ParticipanteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParticipanteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Participante model
   */
  readonly fields: ParticipanteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Participante.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParticipanteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bilhetes<T extends Participante$bilhetesArgs<ExtArgs> = {}>(args?: Subset<T, Participante$bilhetesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BilhetePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pagamentos<T extends Participante$pagamentosArgs<ExtArgs> = {}>(args?: Subset<T, Participante$pagamentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    premios<T extends Participante$premiosArgs<ExtArgs> = {}>(args?: Subset<T, Participante$premiosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PremioParticipantePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    vitorias<T extends Participante$vitoriasArgs<ExtArgs> = {}>(args?: Subset<T, Participante$vitoriasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SorteioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Participante model
   */
  interface ParticipanteFieldRefs {
    readonly id: FieldRef<"Participante", 'Int'>
    readonly userId: FieldRef<"Participante", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Participante findUnique
   */
  export type ParticipanteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participante
     */
    select?: ParticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participante
     */
    omit?: ParticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipanteInclude<ExtArgs> | null
    /**
     * Filter, which Participante to fetch.
     */
    where: ParticipanteWhereUniqueInput
  }

  /**
   * Participante findUniqueOrThrow
   */
  export type ParticipanteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participante
     */
    select?: ParticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participante
     */
    omit?: ParticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipanteInclude<ExtArgs> | null
    /**
     * Filter, which Participante to fetch.
     */
    where: ParticipanteWhereUniqueInput
  }

  /**
   * Participante findFirst
   */
  export type ParticipanteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participante
     */
    select?: ParticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participante
     */
    omit?: ParticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipanteInclude<ExtArgs> | null
    /**
     * Filter, which Participante to fetch.
     */
    where?: ParticipanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participantes to fetch.
     */
    orderBy?: ParticipanteOrderByWithRelationInput | ParticipanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Participantes.
     */
    cursor?: ParticipanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Participantes.
     */
    distinct?: ParticipanteScalarFieldEnum | ParticipanteScalarFieldEnum[]
  }

  /**
   * Participante findFirstOrThrow
   */
  export type ParticipanteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participante
     */
    select?: ParticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participante
     */
    omit?: ParticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipanteInclude<ExtArgs> | null
    /**
     * Filter, which Participante to fetch.
     */
    where?: ParticipanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participantes to fetch.
     */
    orderBy?: ParticipanteOrderByWithRelationInput | ParticipanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Participantes.
     */
    cursor?: ParticipanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Participantes.
     */
    distinct?: ParticipanteScalarFieldEnum | ParticipanteScalarFieldEnum[]
  }

  /**
   * Participante findMany
   */
  export type ParticipanteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participante
     */
    select?: ParticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participante
     */
    omit?: ParticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipanteInclude<ExtArgs> | null
    /**
     * Filter, which Participantes to fetch.
     */
    where?: ParticipanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participantes to fetch.
     */
    orderBy?: ParticipanteOrderByWithRelationInput | ParticipanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Participantes.
     */
    cursor?: ParticipanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participantes.
     */
    skip?: number
    distinct?: ParticipanteScalarFieldEnum | ParticipanteScalarFieldEnum[]
  }

  /**
   * Participante create
   */
  export type ParticipanteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participante
     */
    select?: ParticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participante
     */
    omit?: ParticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipanteInclude<ExtArgs> | null
    /**
     * The data needed to create a Participante.
     */
    data: XOR<ParticipanteCreateInput, ParticipanteUncheckedCreateInput>
  }

  /**
   * Participante createMany
   */
  export type ParticipanteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Participantes.
     */
    data: ParticipanteCreateManyInput | ParticipanteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Participante createManyAndReturn
   */
  export type ParticipanteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participante
     */
    select?: ParticipanteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Participante
     */
    omit?: ParticipanteOmit<ExtArgs> | null
    /**
     * The data used to create many Participantes.
     */
    data: ParticipanteCreateManyInput | ParticipanteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipanteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Participante update
   */
  export type ParticipanteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participante
     */
    select?: ParticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participante
     */
    omit?: ParticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipanteInclude<ExtArgs> | null
    /**
     * The data needed to update a Participante.
     */
    data: XOR<ParticipanteUpdateInput, ParticipanteUncheckedUpdateInput>
    /**
     * Choose, which Participante to update.
     */
    where: ParticipanteWhereUniqueInput
  }

  /**
   * Participante updateMany
   */
  export type ParticipanteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Participantes.
     */
    data: XOR<ParticipanteUpdateManyMutationInput, ParticipanteUncheckedUpdateManyInput>
    /**
     * Filter which Participantes to update
     */
    where?: ParticipanteWhereInput
    /**
     * Limit how many Participantes to update.
     */
    limit?: number
  }

  /**
   * Participante updateManyAndReturn
   */
  export type ParticipanteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participante
     */
    select?: ParticipanteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Participante
     */
    omit?: ParticipanteOmit<ExtArgs> | null
    /**
     * The data used to update Participantes.
     */
    data: XOR<ParticipanteUpdateManyMutationInput, ParticipanteUncheckedUpdateManyInput>
    /**
     * Filter which Participantes to update
     */
    where?: ParticipanteWhereInput
    /**
     * Limit how many Participantes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipanteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Participante upsert
   */
  export type ParticipanteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participante
     */
    select?: ParticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participante
     */
    omit?: ParticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipanteInclude<ExtArgs> | null
    /**
     * The filter to search for the Participante to update in case it exists.
     */
    where: ParticipanteWhereUniqueInput
    /**
     * In case the Participante found by the `where` argument doesn't exist, create a new Participante with this data.
     */
    create: XOR<ParticipanteCreateInput, ParticipanteUncheckedCreateInput>
    /**
     * In case the Participante was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParticipanteUpdateInput, ParticipanteUncheckedUpdateInput>
  }

  /**
   * Participante delete
   */
  export type ParticipanteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participante
     */
    select?: ParticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participante
     */
    omit?: ParticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipanteInclude<ExtArgs> | null
    /**
     * Filter which Participante to delete.
     */
    where: ParticipanteWhereUniqueInput
  }

  /**
   * Participante deleteMany
   */
  export type ParticipanteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Participantes to delete
     */
    where?: ParticipanteWhereInput
    /**
     * Limit how many Participantes to delete.
     */
    limit?: number
  }

  /**
   * Participante.bilhetes
   */
  export type Participante$bilhetesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bilhete
     */
    select?: BilheteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bilhete
     */
    omit?: BilheteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BilheteInclude<ExtArgs> | null
    where?: BilheteWhereInput
    orderBy?: BilheteOrderByWithRelationInput | BilheteOrderByWithRelationInput[]
    cursor?: BilheteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BilheteScalarFieldEnum | BilheteScalarFieldEnum[]
  }

  /**
   * Participante.pagamentos
   */
  export type Participante$pagamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    where?: PagamentoWhereInput
    orderBy?: PagamentoOrderByWithRelationInput | PagamentoOrderByWithRelationInput[]
    cursor?: PagamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PagamentoScalarFieldEnum | PagamentoScalarFieldEnum[]
  }

  /**
   * Participante.premios
   */
  export type Participante$premiosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremioParticipante
     */
    select?: PremioParticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremioParticipante
     */
    omit?: PremioParticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremioParticipanteInclude<ExtArgs> | null
    where?: PremioParticipanteWhereInput
    orderBy?: PremioParticipanteOrderByWithRelationInput | PremioParticipanteOrderByWithRelationInput[]
    cursor?: PremioParticipanteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PremioParticipanteScalarFieldEnum | PremioParticipanteScalarFieldEnum[]
  }

  /**
   * Participante.vitorias
   */
  export type Participante$vitoriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sorteio
     */
    select?: SorteioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sorteio
     */
    omit?: SorteioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SorteioInclude<ExtArgs> | null
    where?: SorteioWhereInput
    orderBy?: SorteioOrderByWithRelationInput | SorteioOrderByWithRelationInput[]
    cursor?: SorteioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SorteioScalarFieldEnum | SorteioScalarFieldEnum[]
  }

  /**
   * Participante without action
   */
  export type ParticipanteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participante
     */
    select?: ParticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participante
     */
    omit?: ParticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipanteInclude<ExtArgs> | null
  }


  /**
   * Model Bilhete
   */

  export type AggregateBilhete = {
    _count: BilheteCountAggregateOutputType | null
    _avg: BilheteAvgAggregateOutputType | null
    _sum: BilheteSumAggregateOutputType | null
    _min: BilheteMinAggregateOutputType | null
    _max: BilheteMaxAggregateOutputType | null
  }

  export type BilheteAvgAggregateOutputType = {
    id: number | null
    numero: number | null
    rifaId: number | null
    participanteId: number | null
  }

  export type BilheteSumAggregateOutputType = {
    id: number | null
    numero: number | null
    rifaId: number | null
    participanteId: number | null
  }

  export type BilheteMinAggregateOutputType = {
    id: number | null
    numero: number | null
    status: $Enums.StatusBil | null
    createdAt: Date | null
    rifaId: number | null
    participanteId: number | null
  }

  export type BilheteMaxAggregateOutputType = {
    id: number | null
    numero: number | null
    status: $Enums.StatusBil | null
    createdAt: Date | null
    rifaId: number | null
    participanteId: number | null
  }

  export type BilheteCountAggregateOutputType = {
    id: number
    numero: number
    status: number
    createdAt: number
    rifaId: number
    participanteId: number
    _all: number
  }


  export type BilheteAvgAggregateInputType = {
    id?: true
    numero?: true
    rifaId?: true
    participanteId?: true
  }

  export type BilheteSumAggregateInputType = {
    id?: true
    numero?: true
    rifaId?: true
    participanteId?: true
  }

  export type BilheteMinAggregateInputType = {
    id?: true
    numero?: true
    status?: true
    createdAt?: true
    rifaId?: true
    participanteId?: true
  }

  export type BilheteMaxAggregateInputType = {
    id?: true
    numero?: true
    status?: true
    createdAt?: true
    rifaId?: true
    participanteId?: true
  }

  export type BilheteCountAggregateInputType = {
    id?: true
    numero?: true
    status?: true
    createdAt?: true
    rifaId?: true
    participanteId?: true
    _all?: true
  }

  export type BilheteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bilhete to aggregate.
     */
    where?: BilheteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bilhetes to fetch.
     */
    orderBy?: BilheteOrderByWithRelationInput | BilheteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BilheteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bilhetes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bilhetes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bilhetes
    **/
    _count?: true | BilheteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BilheteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BilheteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BilheteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BilheteMaxAggregateInputType
  }

  export type GetBilheteAggregateType<T extends BilheteAggregateArgs> = {
        [P in keyof T & keyof AggregateBilhete]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBilhete[P]>
      : GetScalarType<T[P], AggregateBilhete[P]>
  }




  export type BilheteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BilheteWhereInput
    orderBy?: BilheteOrderByWithAggregationInput | BilheteOrderByWithAggregationInput[]
    by: BilheteScalarFieldEnum[] | BilheteScalarFieldEnum
    having?: BilheteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BilheteCountAggregateInputType | true
    _avg?: BilheteAvgAggregateInputType
    _sum?: BilheteSumAggregateInputType
    _min?: BilheteMinAggregateInputType
    _max?: BilheteMaxAggregateInputType
  }

  export type BilheteGroupByOutputType = {
    id: number
    numero: number
    status: $Enums.StatusBil
    createdAt: Date
    rifaId: number
    participanteId: number | null
    _count: BilheteCountAggregateOutputType | null
    _avg: BilheteAvgAggregateOutputType | null
    _sum: BilheteSumAggregateOutputType | null
    _min: BilheteMinAggregateOutputType | null
    _max: BilheteMaxAggregateOutputType | null
  }

  type GetBilheteGroupByPayload<T extends BilheteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BilheteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BilheteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BilheteGroupByOutputType[P]>
            : GetScalarType<T[P], BilheteGroupByOutputType[P]>
        }
      >
    >


  export type BilheteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    status?: boolean
    createdAt?: boolean
    rifaId?: boolean
    participanteId?: boolean
    rifa?: boolean | RifaDefaultArgs<ExtArgs>
    participante?: boolean | Bilhete$participanteArgs<ExtArgs>
    pagamento?: boolean | Bilhete$pagamentoArgs<ExtArgs>
    sorteios?: boolean | Bilhete$sorteiosArgs<ExtArgs>
    _count?: boolean | BilheteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bilhete"]>

  export type BilheteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    status?: boolean
    createdAt?: boolean
    rifaId?: boolean
    participanteId?: boolean
    rifa?: boolean | RifaDefaultArgs<ExtArgs>
    participante?: boolean | Bilhete$participanteArgs<ExtArgs>
  }, ExtArgs["result"]["bilhete"]>

  export type BilheteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    status?: boolean
    createdAt?: boolean
    rifaId?: boolean
    participanteId?: boolean
    rifa?: boolean | RifaDefaultArgs<ExtArgs>
    participante?: boolean | Bilhete$participanteArgs<ExtArgs>
  }, ExtArgs["result"]["bilhete"]>

  export type BilheteSelectScalar = {
    id?: boolean
    numero?: boolean
    status?: boolean
    createdAt?: boolean
    rifaId?: boolean
    participanteId?: boolean
  }

  export type BilheteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "numero" | "status" | "createdAt" | "rifaId" | "participanteId", ExtArgs["result"]["bilhete"]>
  export type BilheteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rifa?: boolean | RifaDefaultArgs<ExtArgs>
    participante?: boolean | Bilhete$participanteArgs<ExtArgs>
    pagamento?: boolean | Bilhete$pagamentoArgs<ExtArgs>
    sorteios?: boolean | Bilhete$sorteiosArgs<ExtArgs>
    _count?: boolean | BilheteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BilheteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rifa?: boolean | RifaDefaultArgs<ExtArgs>
    participante?: boolean | Bilhete$participanteArgs<ExtArgs>
  }
  export type BilheteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rifa?: boolean | RifaDefaultArgs<ExtArgs>
    participante?: boolean | Bilhete$participanteArgs<ExtArgs>
  }

  export type $BilhetePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bilhete"
    objects: {
      rifa: Prisma.$RifaPayload<ExtArgs>
      participante: Prisma.$ParticipantePayload<ExtArgs> | null
      pagamento: Prisma.$PagamentoPayload<ExtArgs> | null
      sorteios: Prisma.$SorteioBilhetePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      numero: number
      status: $Enums.StatusBil
      createdAt: Date
      rifaId: number
      participanteId: number | null
    }, ExtArgs["result"]["bilhete"]>
    composites: {}
  }

  type BilheteGetPayload<S extends boolean | null | undefined | BilheteDefaultArgs> = $Result.GetResult<Prisma.$BilhetePayload, S>

  type BilheteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BilheteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BilheteCountAggregateInputType | true
    }

  export interface BilheteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bilhete'], meta: { name: 'Bilhete' } }
    /**
     * Find zero or one Bilhete that matches the filter.
     * @param {BilheteFindUniqueArgs} args - Arguments to find a Bilhete
     * @example
     * // Get one Bilhete
     * const bilhete = await prisma.bilhete.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BilheteFindUniqueArgs>(args: SelectSubset<T, BilheteFindUniqueArgs<ExtArgs>>): Prisma__BilheteClient<$Result.GetResult<Prisma.$BilhetePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bilhete that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BilheteFindUniqueOrThrowArgs} args - Arguments to find a Bilhete
     * @example
     * // Get one Bilhete
     * const bilhete = await prisma.bilhete.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BilheteFindUniqueOrThrowArgs>(args: SelectSubset<T, BilheteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BilheteClient<$Result.GetResult<Prisma.$BilhetePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bilhete that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BilheteFindFirstArgs} args - Arguments to find a Bilhete
     * @example
     * // Get one Bilhete
     * const bilhete = await prisma.bilhete.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BilheteFindFirstArgs>(args?: SelectSubset<T, BilheteFindFirstArgs<ExtArgs>>): Prisma__BilheteClient<$Result.GetResult<Prisma.$BilhetePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bilhete that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BilheteFindFirstOrThrowArgs} args - Arguments to find a Bilhete
     * @example
     * // Get one Bilhete
     * const bilhete = await prisma.bilhete.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BilheteFindFirstOrThrowArgs>(args?: SelectSubset<T, BilheteFindFirstOrThrowArgs<ExtArgs>>): Prisma__BilheteClient<$Result.GetResult<Prisma.$BilhetePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bilhetes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BilheteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bilhetes
     * const bilhetes = await prisma.bilhete.findMany()
     * 
     * // Get first 10 Bilhetes
     * const bilhetes = await prisma.bilhete.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bilheteWithIdOnly = await prisma.bilhete.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BilheteFindManyArgs>(args?: SelectSubset<T, BilheteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BilhetePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bilhete.
     * @param {BilheteCreateArgs} args - Arguments to create a Bilhete.
     * @example
     * // Create one Bilhete
     * const Bilhete = await prisma.bilhete.create({
     *   data: {
     *     // ... data to create a Bilhete
     *   }
     * })
     * 
     */
    create<T extends BilheteCreateArgs>(args: SelectSubset<T, BilheteCreateArgs<ExtArgs>>): Prisma__BilheteClient<$Result.GetResult<Prisma.$BilhetePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bilhetes.
     * @param {BilheteCreateManyArgs} args - Arguments to create many Bilhetes.
     * @example
     * // Create many Bilhetes
     * const bilhete = await prisma.bilhete.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BilheteCreateManyArgs>(args?: SelectSubset<T, BilheteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bilhetes and returns the data saved in the database.
     * @param {BilheteCreateManyAndReturnArgs} args - Arguments to create many Bilhetes.
     * @example
     * // Create many Bilhetes
     * const bilhete = await prisma.bilhete.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bilhetes and only return the `id`
     * const bilheteWithIdOnly = await prisma.bilhete.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BilheteCreateManyAndReturnArgs>(args?: SelectSubset<T, BilheteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BilhetePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bilhete.
     * @param {BilheteDeleteArgs} args - Arguments to delete one Bilhete.
     * @example
     * // Delete one Bilhete
     * const Bilhete = await prisma.bilhete.delete({
     *   where: {
     *     // ... filter to delete one Bilhete
     *   }
     * })
     * 
     */
    delete<T extends BilheteDeleteArgs>(args: SelectSubset<T, BilheteDeleteArgs<ExtArgs>>): Prisma__BilheteClient<$Result.GetResult<Prisma.$BilhetePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bilhete.
     * @param {BilheteUpdateArgs} args - Arguments to update one Bilhete.
     * @example
     * // Update one Bilhete
     * const bilhete = await prisma.bilhete.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BilheteUpdateArgs>(args: SelectSubset<T, BilheteUpdateArgs<ExtArgs>>): Prisma__BilheteClient<$Result.GetResult<Prisma.$BilhetePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bilhetes.
     * @param {BilheteDeleteManyArgs} args - Arguments to filter Bilhetes to delete.
     * @example
     * // Delete a few Bilhetes
     * const { count } = await prisma.bilhete.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BilheteDeleteManyArgs>(args?: SelectSubset<T, BilheteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bilhetes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BilheteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bilhetes
     * const bilhete = await prisma.bilhete.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BilheteUpdateManyArgs>(args: SelectSubset<T, BilheteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bilhetes and returns the data updated in the database.
     * @param {BilheteUpdateManyAndReturnArgs} args - Arguments to update many Bilhetes.
     * @example
     * // Update many Bilhetes
     * const bilhete = await prisma.bilhete.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bilhetes and only return the `id`
     * const bilheteWithIdOnly = await prisma.bilhete.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BilheteUpdateManyAndReturnArgs>(args: SelectSubset<T, BilheteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BilhetePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bilhete.
     * @param {BilheteUpsertArgs} args - Arguments to update or create a Bilhete.
     * @example
     * // Update or create a Bilhete
     * const bilhete = await prisma.bilhete.upsert({
     *   create: {
     *     // ... data to create a Bilhete
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bilhete we want to update
     *   }
     * })
     */
    upsert<T extends BilheteUpsertArgs>(args: SelectSubset<T, BilheteUpsertArgs<ExtArgs>>): Prisma__BilheteClient<$Result.GetResult<Prisma.$BilhetePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bilhetes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BilheteCountArgs} args - Arguments to filter Bilhetes to count.
     * @example
     * // Count the number of Bilhetes
     * const count = await prisma.bilhete.count({
     *   where: {
     *     // ... the filter for the Bilhetes we want to count
     *   }
     * })
    **/
    count<T extends BilheteCountArgs>(
      args?: Subset<T, BilheteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BilheteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bilhete.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BilheteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BilheteAggregateArgs>(args: Subset<T, BilheteAggregateArgs>): Prisma.PrismaPromise<GetBilheteAggregateType<T>>

    /**
     * Group by Bilhete.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BilheteGroupByArgs} args - Group by arguments.
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
      T extends BilheteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BilheteGroupByArgs['orderBy'] }
        : { orderBy?: BilheteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BilheteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBilheteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bilhete model
   */
  readonly fields: BilheteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bilhete.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BilheteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rifa<T extends RifaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RifaDefaultArgs<ExtArgs>>): Prisma__RifaClient<$Result.GetResult<Prisma.$RifaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    participante<T extends Bilhete$participanteArgs<ExtArgs> = {}>(args?: Subset<T, Bilhete$participanteArgs<ExtArgs>>): Prisma__ParticipanteClient<$Result.GetResult<Prisma.$ParticipantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    pagamento<T extends Bilhete$pagamentoArgs<ExtArgs> = {}>(args?: Subset<T, Bilhete$pagamentoArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sorteios<T extends Bilhete$sorteiosArgs<ExtArgs> = {}>(args?: Subset<T, Bilhete$sorteiosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SorteioBilhetePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Bilhete model
   */
  interface BilheteFieldRefs {
    readonly id: FieldRef<"Bilhete", 'Int'>
    readonly numero: FieldRef<"Bilhete", 'Int'>
    readonly status: FieldRef<"Bilhete", 'StatusBil'>
    readonly createdAt: FieldRef<"Bilhete", 'DateTime'>
    readonly rifaId: FieldRef<"Bilhete", 'Int'>
    readonly participanteId: FieldRef<"Bilhete", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Bilhete findUnique
   */
  export type BilheteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bilhete
     */
    select?: BilheteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bilhete
     */
    omit?: BilheteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BilheteInclude<ExtArgs> | null
    /**
     * Filter, which Bilhete to fetch.
     */
    where: BilheteWhereUniqueInput
  }

  /**
   * Bilhete findUniqueOrThrow
   */
  export type BilheteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bilhete
     */
    select?: BilheteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bilhete
     */
    omit?: BilheteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BilheteInclude<ExtArgs> | null
    /**
     * Filter, which Bilhete to fetch.
     */
    where: BilheteWhereUniqueInput
  }

  /**
   * Bilhete findFirst
   */
  export type BilheteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bilhete
     */
    select?: BilheteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bilhete
     */
    omit?: BilheteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BilheteInclude<ExtArgs> | null
    /**
     * Filter, which Bilhete to fetch.
     */
    where?: BilheteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bilhetes to fetch.
     */
    orderBy?: BilheteOrderByWithRelationInput | BilheteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bilhetes.
     */
    cursor?: BilheteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bilhetes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bilhetes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bilhetes.
     */
    distinct?: BilheteScalarFieldEnum | BilheteScalarFieldEnum[]
  }

  /**
   * Bilhete findFirstOrThrow
   */
  export type BilheteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bilhete
     */
    select?: BilheteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bilhete
     */
    omit?: BilheteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BilheteInclude<ExtArgs> | null
    /**
     * Filter, which Bilhete to fetch.
     */
    where?: BilheteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bilhetes to fetch.
     */
    orderBy?: BilheteOrderByWithRelationInput | BilheteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bilhetes.
     */
    cursor?: BilheteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bilhetes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bilhetes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bilhetes.
     */
    distinct?: BilheteScalarFieldEnum | BilheteScalarFieldEnum[]
  }

  /**
   * Bilhete findMany
   */
  export type BilheteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bilhete
     */
    select?: BilheteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bilhete
     */
    omit?: BilheteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BilheteInclude<ExtArgs> | null
    /**
     * Filter, which Bilhetes to fetch.
     */
    where?: BilheteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bilhetes to fetch.
     */
    orderBy?: BilheteOrderByWithRelationInput | BilheteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bilhetes.
     */
    cursor?: BilheteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bilhetes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bilhetes.
     */
    skip?: number
    distinct?: BilheteScalarFieldEnum | BilheteScalarFieldEnum[]
  }

  /**
   * Bilhete create
   */
  export type BilheteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bilhete
     */
    select?: BilheteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bilhete
     */
    omit?: BilheteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BilheteInclude<ExtArgs> | null
    /**
     * The data needed to create a Bilhete.
     */
    data: XOR<BilheteCreateInput, BilheteUncheckedCreateInput>
  }

  /**
   * Bilhete createMany
   */
  export type BilheteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bilhetes.
     */
    data: BilheteCreateManyInput | BilheteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bilhete createManyAndReturn
   */
  export type BilheteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bilhete
     */
    select?: BilheteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bilhete
     */
    omit?: BilheteOmit<ExtArgs> | null
    /**
     * The data used to create many Bilhetes.
     */
    data: BilheteCreateManyInput | BilheteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BilheteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bilhete update
   */
  export type BilheteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bilhete
     */
    select?: BilheteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bilhete
     */
    omit?: BilheteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BilheteInclude<ExtArgs> | null
    /**
     * The data needed to update a Bilhete.
     */
    data: XOR<BilheteUpdateInput, BilheteUncheckedUpdateInput>
    /**
     * Choose, which Bilhete to update.
     */
    where: BilheteWhereUniqueInput
  }

  /**
   * Bilhete updateMany
   */
  export type BilheteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bilhetes.
     */
    data: XOR<BilheteUpdateManyMutationInput, BilheteUncheckedUpdateManyInput>
    /**
     * Filter which Bilhetes to update
     */
    where?: BilheteWhereInput
    /**
     * Limit how many Bilhetes to update.
     */
    limit?: number
  }

  /**
   * Bilhete updateManyAndReturn
   */
  export type BilheteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bilhete
     */
    select?: BilheteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bilhete
     */
    omit?: BilheteOmit<ExtArgs> | null
    /**
     * The data used to update Bilhetes.
     */
    data: XOR<BilheteUpdateManyMutationInput, BilheteUncheckedUpdateManyInput>
    /**
     * Filter which Bilhetes to update
     */
    where?: BilheteWhereInput
    /**
     * Limit how many Bilhetes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BilheteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bilhete upsert
   */
  export type BilheteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bilhete
     */
    select?: BilheteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bilhete
     */
    omit?: BilheteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BilheteInclude<ExtArgs> | null
    /**
     * The filter to search for the Bilhete to update in case it exists.
     */
    where: BilheteWhereUniqueInput
    /**
     * In case the Bilhete found by the `where` argument doesn't exist, create a new Bilhete with this data.
     */
    create: XOR<BilheteCreateInput, BilheteUncheckedCreateInput>
    /**
     * In case the Bilhete was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BilheteUpdateInput, BilheteUncheckedUpdateInput>
  }

  /**
   * Bilhete delete
   */
  export type BilheteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bilhete
     */
    select?: BilheteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bilhete
     */
    omit?: BilheteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BilheteInclude<ExtArgs> | null
    /**
     * Filter which Bilhete to delete.
     */
    where: BilheteWhereUniqueInput
  }

  /**
   * Bilhete deleteMany
   */
  export type BilheteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bilhetes to delete
     */
    where?: BilheteWhereInput
    /**
     * Limit how many Bilhetes to delete.
     */
    limit?: number
  }

  /**
   * Bilhete.participante
   */
  export type Bilhete$participanteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participante
     */
    select?: ParticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participante
     */
    omit?: ParticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipanteInclude<ExtArgs> | null
    where?: ParticipanteWhereInput
  }

  /**
   * Bilhete.pagamento
   */
  export type Bilhete$pagamentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    where?: PagamentoWhereInput
  }

  /**
   * Bilhete.sorteios
   */
  export type Bilhete$sorteiosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SorteioBilhete
     */
    select?: SorteioBilheteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SorteioBilhete
     */
    omit?: SorteioBilheteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SorteioBilheteInclude<ExtArgs> | null
    where?: SorteioBilheteWhereInput
    orderBy?: SorteioBilheteOrderByWithRelationInput | SorteioBilheteOrderByWithRelationInput[]
    cursor?: SorteioBilheteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SorteioBilheteScalarFieldEnum | SorteioBilheteScalarFieldEnum[]
  }

  /**
   * Bilhete without action
   */
  export type BilheteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bilhete
     */
    select?: BilheteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bilhete
     */
    omit?: BilheteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BilheteInclude<ExtArgs> | null
  }


  /**
   * Model Sorteio
   */

  export type AggregateSorteio = {
    _count: SorteioCountAggregateOutputType | null
    _avg: SorteioAvgAggregateOutputType | null
    _sum: SorteioSumAggregateOutputType | null
    _min: SorteioMinAggregateOutputType | null
    _max: SorteioMaxAggregateOutputType | null
  }

  export type SorteioAvgAggregateOutputType = {
    id: number | null
    rifaId: number | null
    vencedorId: number | null
  }

  export type SorteioSumAggregateOutputType = {
    id: number | null
    rifaId: number | null
    vencedorId: number | null
  }

  export type SorteioMinAggregateOutputType = {
    id: number | null
    dataHora: Date | null
    rifaId: number | null
    vencedorId: number | null
  }

  export type SorteioMaxAggregateOutputType = {
    id: number | null
    dataHora: Date | null
    rifaId: number | null
    vencedorId: number | null
  }

  export type SorteioCountAggregateOutputType = {
    id: number
    dataHora: number
    rifaId: number
    vencedorId: number
    _all: number
  }


  export type SorteioAvgAggregateInputType = {
    id?: true
    rifaId?: true
    vencedorId?: true
  }

  export type SorteioSumAggregateInputType = {
    id?: true
    rifaId?: true
    vencedorId?: true
  }

  export type SorteioMinAggregateInputType = {
    id?: true
    dataHora?: true
    rifaId?: true
    vencedorId?: true
  }

  export type SorteioMaxAggregateInputType = {
    id?: true
    dataHora?: true
    rifaId?: true
    vencedorId?: true
  }

  export type SorteioCountAggregateInputType = {
    id?: true
    dataHora?: true
    rifaId?: true
    vencedorId?: true
    _all?: true
  }

  export type SorteioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sorteio to aggregate.
     */
    where?: SorteioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sorteios to fetch.
     */
    orderBy?: SorteioOrderByWithRelationInput | SorteioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SorteioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sorteios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sorteios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sorteios
    **/
    _count?: true | SorteioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SorteioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SorteioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SorteioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SorteioMaxAggregateInputType
  }

  export type GetSorteioAggregateType<T extends SorteioAggregateArgs> = {
        [P in keyof T & keyof AggregateSorteio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSorteio[P]>
      : GetScalarType<T[P], AggregateSorteio[P]>
  }




  export type SorteioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SorteioWhereInput
    orderBy?: SorteioOrderByWithAggregationInput | SorteioOrderByWithAggregationInput[]
    by: SorteioScalarFieldEnum[] | SorteioScalarFieldEnum
    having?: SorteioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SorteioCountAggregateInputType | true
    _avg?: SorteioAvgAggregateInputType
    _sum?: SorteioSumAggregateInputType
    _min?: SorteioMinAggregateInputType
    _max?: SorteioMaxAggregateInputType
  }

  export type SorteioGroupByOutputType = {
    id: number
    dataHora: Date
    rifaId: number
    vencedorId: number | null
    _count: SorteioCountAggregateOutputType | null
    _avg: SorteioAvgAggregateOutputType | null
    _sum: SorteioSumAggregateOutputType | null
    _min: SorteioMinAggregateOutputType | null
    _max: SorteioMaxAggregateOutputType | null
  }

  type GetSorteioGroupByPayload<T extends SorteioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SorteioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SorteioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SorteioGroupByOutputType[P]>
            : GetScalarType<T[P], SorteioGroupByOutputType[P]>
        }
      >
    >


  export type SorteioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dataHora?: boolean
    rifaId?: boolean
    vencedorId?: boolean
    rifa?: boolean | RifaDefaultArgs<ExtArgs>
    vencedor?: boolean | Sorteio$vencedorArgs<ExtArgs>
    bilhetes?: boolean | Sorteio$bilhetesArgs<ExtArgs>
    _count?: boolean | SorteioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sorteio"]>

  export type SorteioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dataHora?: boolean
    rifaId?: boolean
    vencedorId?: boolean
    rifa?: boolean | RifaDefaultArgs<ExtArgs>
    vencedor?: boolean | Sorteio$vencedorArgs<ExtArgs>
  }, ExtArgs["result"]["sorteio"]>

  export type SorteioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dataHora?: boolean
    rifaId?: boolean
    vencedorId?: boolean
    rifa?: boolean | RifaDefaultArgs<ExtArgs>
    vencedor?: boolean | Sorteio$vencedorArgs<ExtArgs>
  }, ExtArgs["result"]["sorteio"]>

  export type SorteioSelectScalar = {
    id?: boolean
    dataHora?: boolean
    rifaId?: boolean
    vencedorId?: boolean
  }

  export type SorteioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dataHora" | "rifaId" | "vencedorId", ExtArgs["result"]["sorteio"]>
  export type SorteioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rifa?: boolean | RifaDefaultArgs<ExtArgs>
    vencedor?: boolean | Sorteio$vencedorArgs<ExtArgs>
    bilhetes?: boolean | Sorteio$bilhetesArgs<ExtArgs>
    _count?: boolean | SorteioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SorteioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rifa?: boolean | RifaDefaultArgs<ExtArgs>
    vencedor?: boolean | Sorteio$vencedorArgs<ExtArgs>
  }
  export type SorteioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rifa?: boolean | RifaDefaultArgs<ExtArgs>
    vencedor?: boolean | Sorteio$vencedorArgs<ExtArgs>
  }

  export type $SorteioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sorteio"
    objects: {
      rifa: Prisma.$RifaPayload<ExtArgs>
      vencedor: Prisma.$ParticipantePayload<ExtArgs> | null
      bilhetes: Prisma.$SorteioBilhetePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      dataHora: Date
      rifaId: number
      vencedorId: number | null
    }, ExtArgs["result"]["sorteio"]>
    composites: {}
  }

  type SorteioGetPayload<S extends boolean | null | undefined | SorteioDefaultArgs> = $Result.GetResult<Prisma.$SorteioPayload, S>

  type SorteioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SorteioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SorteioCountAggregateInputType | true
    }

  export interface SorteioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sorteio'], meta: { name: 'Sorteio' } }
    /**
     * Find zero or one Sorteio that matches the filter.
     * @param {SorteioFindUniqueArgs} args - Arguments to find a Sorteio
     * @example
     * // Get one Sorteio
     * const sorteio = await prisma.sorteio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SorteioFindUniqueArgs>(args: SelectSubset<T, SorteioFindUniqueArgs<ExtArgs>>): Prisma__SorteioClient<$Result.GetResult<Prisma.$SorteioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sorteio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SorteioFindUniqueOrThrowArgs} args - Arguments to find a Sorteio
     * @example
     * // Get one Sorteio
     * const sorteio = await prisma.sorteio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SorteioFindUniqueOrThrowArgs>(args: SelectSubset<T, SorteioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SorteioClient<$Result.GetResult<Prisma.$SorteioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sorteio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SorteioFindFirstArgs} args - Arguments to find a Sorteio
     * @example
     * // Get one Sorteio
     * const sorteio = await prisma.sorteio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SorteioFindFirstArgs>(args?: SelectSubset<T, SorteioFindFirstArgs<ExtArgs>>): Prisma__SorteioClient<$Result.GetResult<Prisma.$SorteioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sorteio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SorteioFindFirstOrThrowArgs} args - Arguments to find a Sorteio
     * @example
     * // Get one Sorteio
     * const sorteio = await prisma.sorteio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SorteioFindFirstOrThrowArgs>(args?: SelectSubset<T, SorteioFindFirstOrThrowArgs<ExtArgs>>): Prisma__SorteioClient<$Result.GetResult<Prisma.$SorteioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sorteios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SorteioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sorteios
     * const sorteios = await prisma.sorteio.findMany()
     * 
     * // Get first 10 Sorteios
     * const sorteios = await prisma.sorteio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sorteioWithIdOnly = await prisma.sorteio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SorteioFindManyArgs>(args?: SelectSubset<T, SorteioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SorteioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sorteio.
     * @param {SorteioCreateArgs} args - Arguments to create a Sorteio.
     * @example
     * // Create one Sorteio
     * const Sorteio = await prisma.sorteio.create({
     *   data: {
     *     // ... data to create a Sorteio
     *   }
     * })
     * 
     */
    create<T extends SorteioCreateArgs>(args: SelectSubset<T, SorteioCreateArgs<ExtArgs>>): Prisma__SorteioClient<$Result.GetResult<Prisma.$SorteioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sorteios.
     * @param {SorteioCreateManyArgs} args - Arguments to create many Sorteios.
     * @example
     * // Create many Sorteios
     * const sorteio = await prisma.sorteio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SorteioCreateManyArgs>(args?: SelectSubset<T, SorteioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sorteios and returns the data saved in the database.
     * @param {SorteioCreateManyAndReturnArgs} args - Arguments to create many Sorteios.
     * @example
     * // Create many Sorteios
     * const sorteio = await prisma.sorteio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sorteios and only return the `id`
     * const sorteioWithIdOnly = await prisma.sorteio.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SorteioCreateManyAndReturnArgs>(args?: SelectSubset<T, SorteioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SorteioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sorteio.
     * @param {SorteioDeleteArgs} args - Arguments to delete one Sorteio.
     * @example
     * // Delete one Sorteio
     * const Sorteio = await prisma.sorteio.delete({
     *   where: {
     *     // ... filter to delete one Sorteio
     *   }
     * })
     * 
     */
    delete<T extends SorteioDeleteArgs>(args: SelectSubset<T, SorteioDeleteArgs<ExtArgs>>): Prisma__SorteioClient<$Result.GetResult<Prisma.$SorteioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sorteio.
     * @param {SorteioUpdateArgs} args - Arguments to update one Sorteio.
     * @example
     * // Update one Sorteio
     * const sorteio = await prisma.sorteio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SorteioUpdateArgs>(args: SelectSubset<T, SorteioUpdateArgs<ExtArgs>>): Prisma__SorteioClient<$Result.GetResult<Prisma.$SorteioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sorteios.
     * @param {SorteioDeleteManyArgs} args - Arguments to filter Sorteios to delete.
     * @example
     * // Delete a few Sorteios
     * const { count } = await prisma.sorteio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SorteioDeleteManyArgs>(args?: SelectSubset<T, SorteioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sorteios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SorteioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sorteios
     * const sorteio = await prisma.sorteio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SorteioUpdateManyArgs>(args: SelectSubset<T, SorteioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sorteios and returns the data updated in the database.
     * @param {SorteioUpdateManyAndReturnArgs} args - Arguments to update many Sorteios.
     * @example
     * // Update many Sorteios
     * const sorteio = await prisma.sorteio.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sorteios and only return the `id`
     * const sorteioWithIdOnly = await prisma.sorteio.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SorteioUpdateManyAndReturnArgs>(args: SelectSubset<T, SorteioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SorteioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sorteio.
     * @param {SorteioUpsertArgs} args - Arguments to update or create a Sorteio.
     * @example
     * // Update or create a Sorteio
     * const sorteio = await prisma.sorteio.upsert({
     *   create: {
     *     // ... data to create a Sorteio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sorteio we want to update
     *   }
     * })
     */
    upsert<T extends SorteioUpsertArgs>(args: SelectSubset<T, SorteioUpsertArgs<ExtArgs>>): Prisma__SorteioClient<$Result.GetResult<Prisma.$SorteioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sorteios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SorteioCountArgs} args - Arguments to filter Sorteios to count.
     * @example
     * // Count the number of Sorteios
     * const count = await prisma.sorteio.count({
     *   where: {
     *     // ... the filter for the Sorteios we want to count
     *   }
     * })
    **/
    count<T extends SorteioCountArgs>(
      args?: Subset<T, SorteioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SorteioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sorteio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SorteioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SorteioAggregateArgs>(args: Subset<T, SorteioAggregateArgs>): Prisma.PrismaPromise<GetSorteioAggregateType<T>>

    /**
     * Group by Sorteio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SorteioGroupByArgs} args - Group by arguments.
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
      T extends SorteioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SorteioGroupByArgs['orderBy'] }
        : { orderBy?: SorteioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SorteioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSorteioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sorteio model
   */
  readonly fields: SorteioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sorteio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SorteioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rifa<T extends RifaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RifaDefaultArgs<ExtArgs>>): Prisma__RifaClient<$Result.GetResult<Prisma.$RifaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vencedor<T extends Sorteio$vencedorArgs<ExtArgs> = {}>(args?: Subset<T, Sorteio$vencedorArgs<ExtArgs>>): Prisma__ParticipanteClient<$Result.GetResult<Prisma.$ParticipantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    bilhetes<T extends Sorteio$bilhetesArgs<ExtArgs> = {}>(args?: Subset<T, Sorteio$bilhetesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SorteioBilhetePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sorteio model
   */
  interface SorteioFieldRefs {
    readonly id: FieldRef<"Sorteio", 'Int'>
    readonly dataHora: FieldRef<"Sorteio", 'DateTime'>
    readonly rifaId: FieldRef<"Sorteio", 'Int'>
    readonly vencedorId: FieldRef<"Sorteio", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Sorteio findUnique
   */
  export type SorteioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sorteio
     */
    select?: SorteioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sorteio
     */
    omit?: SorteioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SorteioInclude<ExtArgs> | null
    /**
     * Filter, which Sorteio to fetch.
     */
    where: SorteioWhereUniqueInput
  }

  /**
   * Sorteio findUniqueOrThrow
   */
  export type SorteioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sorteio
     */
    select?: SorteioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sorteio
     */
    omit?: SorteioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SorteioInclude<ExtArgs> | null
    /**
     * Filter, which Sorteio to fetch.
     */
    where: SorteioWhereUniqueInput
  }

  /**
   * Sorteio findFirst
   */
  export type SorteioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sorteio
     */
    select?: SorteioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sorteio
     */
    omit?: SorteioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SorteioInclude<ExtArgs> | null
    /**
     * Filter, which Sorteio to fetch.
     */
    where?: SorteioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sorteios to fetch.
     */
    orderBy?: SorteioOrderByWithRelationInput | SorteioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sorteios.
     */
    cursor?: SorteioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sorteios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sorteios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sorteios.
     */
    distinct?: SorteioScalarFieldEnum | SorteioScalarFieldEnum[]
  }

  /**
   * Sorteio findFirstOrThrow
   */
  export type SorteioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sorteio
     */
    select?: SorteioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sorteio
     */
    omit?: SorteioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SorteioInclude<ExtArgs> | null
    /**
     * Filter, which Sorteio to fetch.
     */
    where?: SorteioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sorteios to fetch.
     */
    orderBy?: SorteioOrderByWithRelationInput | SorteioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sorteios.
     */
    cursor?: SorteioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sorteios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sorteios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sorteios.
     */
    distinct?: SorteioScalarFieldEnum | SorteioScalarFieldEnum[]
  }

  /**
   * Sorteio findMany
   */
  export type SorteioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sorteio
     */
    select?: SorteioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sorteio
     */
    omit?: SorteioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SorteioInclude<ExtArgs> | null
    /**
     * Filter, which Sorteios to fetch.
     */
    where?: SorteioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sorteios to fetch.
     */
    orderBy?: SorteioOrderByWithRelationInput | SorteioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sorteios.
     */
    cursor?: SorteioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sorteios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sorteios.
     */
    skip?: number
    distinct?: SorteioScalarFieldEnum | SorteioScalarFieldEnum[]
  }

  /**
   * Sorteio create
   */
  export type SorteioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sorteio
     */
    select?: SorteioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sorteio
     */
    omit?: SorteioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SorteioInclude<ExtArgs> | null
    /**
     * The data needed to create a Sorteio.
     */
    data: XOR<SorteioCreateInput, SorteioUncheckedCreateInput>
  }

  /**
   * Sorteio createMany
   */
  export type SorteioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sorteios.
     */
    data: SorteioCreateManyInput | SorteioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sorteio createManyAndReturn
   */
  export type SorteioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sorteio
     */
    select?: SorteioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sorteio
     */
    omit?: SorteioOmit<ExtArgs> | null
    /**
     * The data used to create many Sorteios.
     */
    data: SorteioCreateManyInput | SorteioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SorteioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sorteio update
   */
  export type SorteioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sorteio
     */
    select?: SorteioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sorteio
     */
    omit?: SorteioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SorteioInclude<ExtArgs> | null
    /**
     * The data needed to update a Sorteio.
     */
    data: XOR<SorteioUpdateInput, SorteioUncheckedUpdateInput>
    /**
     * Choose, which Sorteio to update.
     */
    where: SorteioWhereUniqueInput
  }

  /**
   * Sorteio updateMany
   */
  export type SorteioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sorteios.
     */
    data: XOR<SorteioUpdateManyMutationInput, SorteioUncheckedUpdateManyInput>
    /**
     * Filter which Sorteios to update
     */
    where?: SorteioWhereInput
    /**
     * Limit how many Sorteios to update.
     */
    limit?: number
  }

  /**
   * Sorteio updateManyAndReturn
   */
  export type SorteioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sorteio
     */
    select?: SorteioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sorteio
     */
    omit?: SorteioOmit<ExtArgs> | null
    /**
     * The data used to update Sorteios.
     */
    data: XOR<SorteioUpdateManyMutationInput, SorteioUncheckedUpdateManyInput>
    /**
     * Filter which Sorteios to update
     */
    where?: SorteioWhereInput
    /**
     * Limit how many Sorteios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SorteioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sorteio upsert
   */
  export type SorteioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sorteio
     */
    select?: SorteioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sorteio
     */
    omit?: SorteioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SorteioInclude<ExtArgs> | null
    /**
     * The filter to search for the Sorteio to update in case it exists.
     */
    where: SorteioWhereUniqueInput
    /**
     * In case the Sorteio found by the `where` argument doesn't exist, create a new Sorteio with this data.
     */
    create: XOR<SorteioCreateInput, SorteioUncheckedCreateInput>
    /**
     * In case the Sorteio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SorteioUpdateInput, SorteioUncheckedUpdateInput>
  }

  /**
   * Sorteio delete
   */
  export type SorteioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sorteio
     */
    select?: SorteioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sorteio
     */
    omit?: SorteioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SorteioInclude<ExtArgs> | null
    /**
     * Filter which Sorteio to delete.
     */
    where: SorteioWhereUniqueInput
  }

  /**
   * Sorteio deleteMany
   */
  export type SorteioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sorteios to delete
     */
    where?: SorteioWhereInput
    /**
     * Limit how many Sorteios to delete.
     */
    limit?: number
  }

  /**
   * Sorteio.vencedor
   */
  export type Sorteio$vencedorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participante
     */
    select?: ParticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participante
     */
    omit?: ParticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipanteInclude<ExtArgs> | null
    where?: ParticipanteWhereInput
  }

  /**
   * Sorteio.bilhetes
   */
  export type Sorteio$bilhetesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SorteioBilhete
     */
    select?: SorteioBilheteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SorteioBilhete
     */
    omit?: SorteioBilheteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SorteioBilheteInclude<ExtArgs> | null
    where?: SorteioBilheteWhereInput
    orderBy?: SorteioBilheteOrderByWithRelationInput | SorteioBilheteOrderByWithRelationInput[]
    cursor?: SorteioBilheteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SorteioBilheteScalarFieldEnum | SorteioBilheteScalarFieldEnum[]
  }

  /**
   * Sorteio without action
   */
  export type SorteioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sorteio
     */
    select?: SorteioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sorteio
     */
    omit?: SorteioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SorteioInclude<ExtArgs> | null
  }


  /**
   * Model Notificacao
   */

  export type AggregateNotificacao = {
    _count: NotificacaoCountAggregateOutputType | null
    _avg: NotificacaoAvgAggregateOutputType | null
    _sum: NotificacaoSumAggregateOutputType | null
    _min: NotificacaoMinAggregateOutputType | null
    _max: NotificacaoMaxAggregateOutputType | null
  }

  export type NotificacaoAvgAggregateOutputType = {
    id: number | null
    destinatarioId: number | null
  }

  export type NotificacaoSumAggregateOutputType = {
    id: number | null
    destinatarioId: number | null
  }

  export type NotificacaoMinAggregateOutputType = {
    id: number | null
    mensagem: string | null
    tipo: string | null
    status: string | null
    dataEnvio: Date | null
    destinatarioId: number | null
  }

  export type NotificacaoMaxAggregateOutputType = {
    id: number | null
    mensagem: string | null
    tipo: string | null
    status: string | null
    dataEnvio: Date | null
    destinatarioId: number | null
  }

  export type NotificacaoCountAggregateOutputType = {
    id: number
    mensagem: number
    tipo: number
    status: number
    dataEnvio: number
    destinatarioId: number
    _all: number
  }


  export type NotificacaoAvgAggregateInputType = {
    id?: true
    destinatarioId?: true
  }

  export type NotificacaoSumAggregateInputType = {
    id?: true
    destinatarioId?: true
  }

  export type NotificacaoMinAggregateInputType = {
    id?: true
    mensagem?: true
    tipo?: true
    status?: true
    dataEnvio?: true
    destinatarioId?: true
  }

  export type NotificacaoMaxAggregateInputType = {
    id?: true
    mensagem?: true
    tipo?: true
    status?: true
    dataEnvio?: true
    destinatarioId?: true
  }

  export type NotificacaoCountAggregateInputType = {
    id?: true
    mensagem?: true
    tipo?: true
    status?: true
    dataEnvio?: true
    destinatarioId?: true
    _all?: true
  }

  export type NotificacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notificacao to aggregate.
     */
    where?: NotificacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notificacaos to fetch.
     */
    orderBy?: NotificacaoOrderByWithRelationInput | NotificacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notificacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notificacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notificacaos
    **/
    _count?: true | NotificacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificacaoMaxAggregateInputType
  }

  export type GetNotificacaoAggregateType<T extends NotificacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateNotificacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotificacao[P]>
      : GetScalarType<T[P], AggregateNotificacao[P]>
  }




  export type NotificacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificacaoWhereInput
    orderBy?: NotificacaoOrderByWithAggregationInput | NotificacaoOrderByWithAggregationInput[]
    by: NotificacaoScalarFieldEnum[] | NotificacaoScalarFieldEnum
    having?: NotificacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificacaoCountAggregateInputType | true
    _avg?: NotificacaoAvgAggregateInputType
    _sum?: NotificacaoSumAggregateInputType
    _min?: NotificacaoMinAggregateInputType
    _max?: NotificacaoMaxAggregateInputType
  }

  export type NotificacaoGroupByOutputType = {
    id: number
    mensagem: string
    tipo: string
    status: string
    dataEnvio: Date
    destinatarioId: number
    _count: NotificacaoCountAggregateOutputType | null
    _avg: NotificacaoAvgAggregateOutputType | null
    _sum: NotificacaoSumAggregateOutputType | null
    _min: NotificacaoMinAggregateOutputType | null
    _max: NotificacaoMaxAggregateOutputType | null
  }

  type GetNotificacaoGroupByPayload<T extends NotificacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificacaoGroupByOutputType[P]>
            : GetScalarType<T[P], NotificacaoGroupByOutputType[P]>
        }
      >
    >


  export type NotificacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mensagem?: boolean
    tipo?: boolean
    status?: boolean
    dataEnvio?: boolean
    destinatarioId?: boolean
    destinatario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificacao"]>

  export type NotificacaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mensagem?: boolean
    tipo?: boolean
    status?: boolean
    dataEnvio?: boolean
    destinatarioId?: boolean
    destinatario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificacao"]>

  export type NotificacaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mensagem?: boolean
    tipo?: boolean
    status?: boolean
    dataEnvio?: boolean
    destinatarioId?: boolean
    destinatario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificacao"]>

  export type NotificacaoSelectScalar = {
    id?: boolean
    mensagem?: boolean
    tipo?: boolean
    status?: boolean
    dataEnvio?: boolean
    destinatarioId?: boolean
  }

  export type NotificacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mensagem" | "tipo" | "status" | "dataEnvio" | "destinatarioId", ExtArgs["result"]["notificacao"]>
  export type NotificacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    destinatario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type NotificacaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    destinatario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type NotificacaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    destinatario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $NotificacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notificacao"
    objects: {
      destinatario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      mensagem: string
      tipo: string
      status: string
      dataEnvio: Date
      destinatarioId: number
    }, ExtArgs["result"]["notificacao"]>
    composites: {}
  }

  type NotificacaoGetPayload<S extends boolean | null | undefined | NotificacaoDefaultArgs> = $Result.GetResult<Prisma.$NotificacaoPayload, S>

  type NotificacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificacaoCountAggregateInputType | true
    }

  export interface NotificacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notificacao'], meta: { name: 'Notificacao' } }
    /**
     * Find zero or one Notificacao that matches the filter.
     * @param {NotificacaoFindUniqueArgs} args - Arguments to find a Notificacao
     * @example
     * // Get one Notificacao
     * const notificacao = await prisma.notificacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificacaoFindUniqueArgs>(args: SelectSubset<T, NotificacaoFindUniqueArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notificacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificacaoFindUniqueOrThrowArgs} args - Arguments to find a Notificacao
     * @example
     * // Get one Notificacao
     * const notificacao = await prisma.notificacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notificacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoFindFirstArgs} args - Arguments to find a Notificacao
     * @example
     * // Get one Notificacao
     * const notificacao = await prisma.notificacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificacaoFindFirstArgs>(args?: SelectSubset<T, NotificacaoFindFirstArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notificacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoFindFirstOrThrowArgs} args - Arguments to find a Notificacao
     * @example
     * // Get one Notificacao
     * const notificacao = await prisma.notificacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notificacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notificacaos
     * const notificacaos = await prisma.notificacao.findMany()
     * 
     * // Get first 10 Notificacaos
     * const notificacaos = await prisma.notificacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificacaoWithIdOnly = await prisma.notificacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificacaoFindManyArgs>(args?: SelectSubset<T, NotificacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notificacao.
     * @param {NotificacaoCreateArgs} args - Arguments to create a Notificacao.
     * @example
     * // Create one Notificacao
     * const Notificacao = await prisma.notificacao.create({
     *   data: {
     *     // ... data to create a Notificacao
     *   }
     * })
     * 
     */
    create<T extends NotificacaoCreateArgs>(args: SelectSubset<T, NotificacaoCreateArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notificacaos.
     * @param {NotificacaoCreateManyArgs} args - Arguments to create many Notificacaos.
     * @example
     * // Create many Notificacaos
     * const notificacao = await prisma.notificacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificacaoCreateManyArgs>(args?: SelectSubset<T, NotificacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notificacaos and returns the data saved in the database.
     * @param {NotificacaoCreateManyAndReturnArgs} args - Arguments to create many Notificacaos.
     * @example
     * // Create many Notificacaos
     * const notificacao = await prisma.notificacao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notificacaos and only return the `id`
     * const notificacaoWithIdOnly = await prisma.notificacao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificacaoCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificacaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notificacao.
     * @param {NotificacaoDeleteArgs} args - Arguments to delete one Notificacao.
     * @example
     * // Delete one Notificacao
     * const Notificacao = await prisma.notificacao.delete({
     *   where: {
     *     // ... filter to delete one Notificacao
     *   }
     * })
     * 
     */
    delete<T extends NotificacaoDeleteArgs>(args: SelectSubset<T, NotificacaoDeleteArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notificacao.
     * @param {NotificacaoUpdateArgs} args - Arguments to update one Notificacao.
     * @example
     * // Update one Notificacao
     * const notificacao = await prisma.notificacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificacaoUpdateArgs>(args: SelectSubset<T, NotificacaoUpdateArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notificacaos.
     * @param {NotificacaoDeleteManyArgs} args - Arguments to filter Notificacaos to delete.
     * @example
     * // Delete a few Notificacaos
     * const { count } = await prisma.notificacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificacaoDeleteManyArgs>(args?: SelectSubset<T, NotificacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notificacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notificacaos
     * const notificacao = await prisma.notificacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificacaoUpdateManyArgs>(args: SelectSubset<T, NotificacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notificacaos and returns the data updated in the database.
     * @param {NotificacaoUpdateManyAndReturnArgs} args - Arguments to update many Notificacaos.
     * @example
     * // Update many Notificacaos
     * const notificacao = await prisma.notificacao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notificacaos and only return the `id`
     * const notificacaoWithIdOnly = await prisma.notificacao.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificacaoUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificacaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notificacao.
     * @param {NotificacaoUpsertArgs} args - Arguments to update or create a Notificacao.
     * @example
     * // Update or create a Notificacao
     * const notificacao = await prisma.notificacao.upsert({
     *   create: {
     *     // ... data to create a Notificacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notificacao we want to update
     *   }
     * })
     */
    upsert<T extends NotificacaoUpsertArgs>(args: SelectSubset<T, NotificacaoUpsertArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notificacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoCountArgs} args - Arguments to filter Notificacaos to count.
     * @example
     * // Count the number of Notificacaos
     * const count = await prisma.notificacao.count({
     *   where: {
     *     // ... the filter for the Notificacaos we want to count
     *   }
     * })
    **/
    count<T extends NotificacaoCountArgs>(
      args?: Subset<T, NotificacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notificacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificacaoAggregateArgs>(args: Subset<T, NotificacaoAggregateArgs>): Prisma.PrismaPromise<GetNotificacaoAggregateType<T>>

    /**
     * Group by Notificacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoGroupByArgs} args - Group by arguments.
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
      T extends NotificacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificacaoGroupByArgs['orderBy'] }
        : { orderBy?: NotificacaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notificacao model
   */
  readonly fields: NotificacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notificacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    destinatario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notificacao model
   */
  interface NotificacaoFieldRefs {
    readonly id: FieldRef<"Notificacao", 'Int'>
    readonly mensagem: FieldRef<"Notificacao", 'String'>
    readonly tipo: FieldRef<"Notificacao", 'String'>
    readonly status: FieldRef<"Notificacao", 'String'>
    readonly dataEnvio: FieldRef<"Notificacao", 'DateTime'>
    readonly destinatarioId: FieldRef<"Notificacao", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Notificacao findUnique
   */
  export type NotificacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter, which Notificacao to fetch.
     */
    where: NotificacaoWhereUniqueInput
  }

  /**
   * Notificacao findUniqueOrThrow
   */
  export type NotificacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter, which Notificacao to fetch.
     */
    where: NotificacaoWhereUniqueInput
  }

  /**
   * Notificacao findFirst
   */
  export type NotificacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter, which Notificacao to fetch.
     */
    where?: NotificacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notificacaos to fetch.
     */
    orderBy?: NotificacaoOrderByWithRelationInput | NotificacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notificacaos.
     */
    cursor?: NotificacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notificacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notificacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notificacaos.
     */
    distinct?: NotificacaoScalarFieldEnum | NotificacaoScalarFieldEnum[]
  }

  /**
   * Notificacao findFirstOrThrow
   */
  export type NotificacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter, which Notificacao to fetch.
     */
    where?: NotificacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notificacaos to fetch.
     */
    orderBy?: NotificacaoOrderByWithRelationInput | NotificacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notificacaos.
     */
    cursor?: NotificacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notificacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notificacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notificacaos.
     */
    distinct?: NotificacaoScalarFieldEnum | NotificacaoScalarFieldEnum[]
  }

  /**
   * Notificacao findMany
   */
  export type NotificacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter, which Notificacaos to fetch.
     */
    where?: NotificacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notificacaos to fetch.
     */
    orderBy?: NotificacaoOrderByWithRelationInput | NotificacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notificacaos.
     */
    cursor?: NotificacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notificacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notificacaos.
     */
    skip?: number
    distinct?: NotificacaoScalarFieldEnum | NotificacaoScalarFieldEnum[]
  }

  /**
   * Notificacao create
   */
  export type NotificacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Notificacao.
     */
    data: XOR<NotificacaoCreateInput, NotificacaoUncheckedCreateInput>
  }

  /**
   * Notificacao createMany
   */
  export type NotificacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notificacaos.
     */
    data: NotificacaoCreateManyInput | NotificacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notificacao createManyAndReturn
   */
  export type NotificacaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * The data used to create many Notificacaos.
     */
    data: NotificacaoCreateManyInput | NotificacaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notificacao update
   */
  export type NotificacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Notificacao.
     */
    data: XOR<NotificacaoUpdateInput, NotificacaoUncheckedUpdateInput>
    /**
     * Choose, which Notificacao to update.
     */
    where: NotificacaoWhereUniqueInput
  }

  /**
   * Notificacao updateMany
   */
  export type NotificacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notificacaos.
     */
    data: XOR<NotificacaoUpdateManyMutationInput, NotificacaoUncheckedUpdateManyInput>
    /**
     * Filter which Notificacaos to update
     */
    where?: NotificacaoWhereInput
    /**
     * Limit how many Notificacaos to update.
     */
    limit?: number
  }

  /**
   * Notificacao updateManyAndReturn
   */
  export type NotificacaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * The data used to update Notificacaos.
     */
    data: XOR<NotificacaoUpdateManyMutationInput, NotificacaoUncheckedUpdateManyInput>
    /**
     * Filter which Notificacaos to update
     */
    where?: NotificacaoWhereInput
    /**
     * Limit how many Notificacaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notificacao upsert
   */
  export type NotificacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Notificacao to update in case it exists.
     */
    where: NotificacaoWhereUniqueInput
    /**
     * In case the Notificacao found by the `where` argument doesn't exist, create a new Notificacao with this data.
     */
    create: XOR<NotificacaoCreateInput, NotificacaoUncheckedCreateInput>
    /**
     * In case the Notificacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificacaoUpdateInput, NotificacaoUncheckedUpdateInput>
  }

  /**
   * Notificacao delete
   */
  export type NotificacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter which Notificacao to delete.
     */
    where: NotificacaoWhereUniqueInput
  }

  /**
   * Notificacao deleteMany
   */
  export type NotificacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notificacaos to delete
     */
    where?: NotificacaoWhereInput
    /**
     * Limit how many Notificacaos to delete.
     */
    limit?: number
  }

  /**
   * Notificacao without action
   */
  export type NotificacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
  }


  /**
   * Model Pagamento
   */

  export type AggregatePagamento = {
    _count: PagamentoCountAggregateOutputType | null
    _avg: PagamentoAvgAggregateOutputType | null
    _sum: PagamentoSumAggregateOutputType | null
    _min: PagamentoMinAggregateOutputType | null
    _max: PagamentoMaxAggregateOutputType | null
  }

  export type PagamentoAvgAggregateOutputType = {
    id: number | null
    valor: number | null
    bilheteId: number | null
    participanteId: number | null
  }

  export type PagamentoSumAggregateOutputType = {
    id: number | null
    valor: number | null
    bilheteId: number | null
    participanteId: number | null
  }

  export type PagamentoMinAggregateOutputType = {
    id: number | null
    valor: number | null
    status: $Enums.StatusPag | null
    metodo: $Enums.MetodoPag | null
    dataProcessamento: Date | null
    bilheteId: number | null
    participanteId: number | null
  }

  export type PagamentoMaxAggregateOutputType = {
    id: number | null
    valor: number | null
    status: $Enums.StatusPag | null
    metodo: $Enums.MetodoPag | null
    dataProcessamento: Date | null
    bilheteId: number | null
    participanteId: number | null
  }

  export type PagamentoCountAggregateOutputType = {
    id: number
    valor: number
    status: number
    metodo: number
    dataProcessamento: number
    bilheteId: number
    participanteId: number
    _all: number
  }


  export type PagamentoAvgAggregateInputType = {
    id?: true
    valor?: true
    bilheteId?: true
    participanteId?: true
  }

  export type PagamentoSumAggregateInputType = {
    id?: true
    valor?: true
    bilheteId?: true
    participanteId?: true
  }

  export type PagamentoMinAggregateInputType = {
    id?: true
    valor?: true
    status?: true
    metodo?: true
    dataProcessamento?: true
    bilheteId?: true
    participanteId?: true
  }

  export type PagamentoMaxAggregateInputType = {
    id?: true
    valor?: true
    status?: true
    metodo?: true
    dataProcessamento?: true
    bilheteId?: true
    participanteId?: true
  }

  export type PagamentoCountAggregateInputType = {
    id?: true
    valor?: true
    status?: true
    metodo?: true
    dataProcessamento?: true
    bilheteId?: true
    participanteId?: true
    _all?: true
  }

  export type PagamentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pagamento to aggregate.
     */
    where?: PagamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagamentos to fetch.
     */
    orderBy?: PagamentoOrderByWithRelationInput | PagamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PagamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pagamentos
    **/
    _count?: true | PagamentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PagamentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PagamentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PagamentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PagamentoMaxAggregateInputType
  }

  export type GetPagamentoAggregateType<T extends PagamentoAggregateArgs> = {
        [P in keyof T & keyof AggregatePagamento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePagamento[P]>
      : GetScalarType<T[P], AggregatePagamento[P]>
  }




  export type PagamentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PagamentoWhereInput
    orderBy?: PagamentoOrderByWithAggregationInput | PagamentoOrderByWithAggregationInput[]
    by: PagamentoScalarFieldEnum[] | PagamentoScalarFieldEnum
    having?: PagamentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PagamentoCountAggregateInputType | true
    _avg?: PagamentoAvgAggregateInputType
    _sum?: PagamentoSumAggregateInputType
    _min?: PagamentoMinAggregateInputType
    _max?: PagamentoMaxAggregateInputType
  }

  export type PagamentoGroupByOutputType = {
    id: number
    valor: number
    status: $Enums.StatusPag
    metodo: $Enums.MetodoPag
    dataProcessamento: Date
    bilheteId: number
    participanteId: number
    _count: PagamentoCountAggregateOutputType | null
    _avg: PagamentoAvgAggregateOutputType | null
    _sum: PagamentoSumAggregateOutputType | null
    _min: PagamentoMinAggregateOutputType | null
    _max: PagamentoMaxAggregateOutputType | null
  }

  type GetPagamentoGroupByPayload<T extends PagamentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PagamentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PagamentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PagamentoGroupByOutputType[P]>
            : GetScalarType<T[P], PagamentoGroupByOutputType[P]>
        }
      >
    >


  export type PagamentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    valor?: boolean
    status?: boolean
    metodo?: boolean
    dataProcessamento?: boolean
    bilheteId?: boolean
    participanteId?: boolean
    bilhete?: boolean | BilheteDefaultArgs<ExtArgs>
    participante?: boolean | ParticipanteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pagamento"]>

  export type PagamentoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    valor?: boolean
    status?: boolean
    metodo?: boolean
    dataProcessamento?: boolean
    bilheteId?: boolean
    participanteId?: boolean
    bilhete?: boolean | BilheteDefaultArgs<ExtArgs>
    participante?: boolean | ParticipanteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pagamento"]>

  export type PagamentoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    valor?: boolean
    status?: boolean
    metodo?: boolean
    dataProcessamento?: boolean
    bilheteId?: boolean
    participanteId?: boolean
    bilhete?: boolean | BilheteDefaultArgs<ExtArgs>
    participante?: boolean | ParticipanteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pagamento"]>

  export type PagamentoSelectScalar = {
    id?: boolean
    valor?: boolean
    status?: boolean
    metodo?: boolean
    dataProcessamento?: boolean
    bilheteId?: boolean
    participanteId?: boolean
  }

  export type PagamentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "valor" | "status" | "metodo" | "dataProcessamento" | "bilheteId" | "participanteId", ExtArgs["result"]["pagamento"]>
  export type PagamentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bilhete?: boolean | BilheteDefaultArgs<ExtArgs>
    participante?: boolean | ParticipanteDefaultArgs<ExtArgs>
  }
  export type PagamentoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bilhete?: boolean | BilheteDefaultArgs<ExtArgs>
    participante?: boolean | ParticipanteDefaultArgs<ExtArgs>
  }
  export type PagamentoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bilhete?: boolean | BilheteDefaultArgs<ExtArgs>
    participante?: boolean | ParticipanteDefaultArgs<ExtArgs>
  }

  export type $PagamentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pagamento"
    objects: {
      bilhete: Prisma.$BilhetePayload<ExtArgs>
      participante: Prisma.$ParticipantePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      valor: number
      status: $Enums.StatusPag
      metodo: $Enums.MetodoPag
      dataProcessamento: Date
      bilheteId: number
      participanteId: number
    }, ExtArgs["result"]["pagamento"]>
    composites: {}
  }

  type PagamentoGetPayload<S extends boolean | null | undefined | PagamentoDefaultArgs> = $Result.GetResult<Prisma.$PagamentoPayload, S>

  type PagamentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PagamentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PagamentoCountAggregateInputType | true
    }

  export interface PagamentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pagamento'], meta: { name: 'Pagamento' } }
    /**
     * Find zero or one Pagamento that matches the filter.
     * @param {PagamentoFindUniqueArgs} args - Arguments to find a Pagamento
     * @example
     * // Get one Pagamento
     * const pagamento = await prisma.pagamento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PagamentoFindUniqueArgs>(args: SelectSubset<T, PagamentoFindUniqueArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pagamento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PagamentoFindUniqueOrThrowArgs} args - Arguments to find a Pagamento
     * @example
     * // Get one Pagamento
     * const pagamento = await prisma.pagamento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PagamentoFindUniqueOrThrowArgs>(args: SelectSubset<T, PagamentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pagamento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentoFindFirstArgs} args - Arguments to find a Pagamento
     * @example
     * // Get one Pagamento
     * const pagamento = await prisma.pagamento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PagamentoFindFirstArgs>(args?: SelectSubset<T, PagamentoFindFirstArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pagamento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentoFindFirstOrThrowArgs} args - Arguments to find a Pagamento
     * @example
     * // Get one Pagamento
     * const pagamento = await prisma.pagamento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PagamentoFindFirstOrThrowArgs>(args?: SelectSubset<T, PagamentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pagamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pagamentos
     * const pagamentos = await prisma.pagamento.findMany()
     * 
     * // Get first 10 Pagamentos
     * const pagamentos = await prisma.pagamento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pagamentoWithIdOnly = await prisma.pagamento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PagamentoFindManyArgs>(args?: SelectSubset<T, PagamentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pagamento.
     * @param {PagamentoCreateArgs} args - Arguments to create a Pagamento.
     * @example
     * // Create one Pagamento
     * const Pagamento = await prisma.pagamento.create({
     *   data: {
     *     // ... data to create a Pagamento
     *   }
     * })
     * 
     */
    create<T extends PagamentoCreateArgs>(args: SelectSubset<T, PagamentoCreateArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pagamentos.
     * @param {PagamentoCreateManyArgs} args - Arguments to create many Pagamentos.
     * @example
     * // Create many Pagamentos
     * const pagamento = await prisma.pagamento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PagamentoCreateManyArgs>(args?: SelectSubset<T, PagamentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pagamentos and returns the data saved in the database.
     * @param {PagamentoCreateManyAndReturnArgs} args - Arguments to create many Pagamentos.
     * @example
     * // Create many Pagamentos
     * const pagamento = await prisma.pagamento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pagamentos and only return the `id`
     * const pagamentoWithIdOnly = await prisma.pagamento.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PagamentoCreateManyAndReturnArgs>(args?: SelectSubset<T, PagamentoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pagamento.
     * @param {PagamentoDeleteArgs} args - Arguments to delete one Pagamento.
     * @example
     * // Delete one Pagamento
     * const Pagamento = await prisma.pagamento.delete({
     *   where: {
     *     // ... filter to delete one Pagamento
     *   }
     * })
     * 
     */
    delete<T extends PagamentoDeleteArgs>(args: SelectSubset<T, PagamentoDeleteArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pagamento.
     * @param {PagamentoUpdateArgs} args - Arguments to update one Pagamento.
     * @example
     * // Update one Pagamento
     * const pagamento = await prisma.pagamento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PagamentoUpdateArgs>(args: SelectSubset<T, PagamentoUpdateArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pagamentos.
     * @param {PagamentoDeleteManyArgs} args - Arguments to filter Pagamentos to delete.
     * @example
     * // Delete a few Pagamentos
     * const { count } = await prisma.pagamento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PagamentoDeleteManyArgs>(args?: SelectSubset<T, PagamentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pagamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pagamentos
     * const pagamento = await prisma.pagamento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PagamentoUpdateManyArgs>(args: SelectSubset<T, PagamentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pagamentos and returns the data updated in the database.
     * @param {PagamentoUpdateManyAndReturnArgs} args - Arguments to update many Pagamentos.
     * @example
     * // Update many Pagamentos
     * const pagamento = await prisma.pagamento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pagamentos and only return the `id`
     * const pagamentoWithIdOnly = await prisma.pagamento.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PagamentoUpdateManyAndReturnArgs>(args: SelectSubset<T, PagamentoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pagamento.
     * @param {PagamentoUpsertArgs} args - Arguments to update or create a Pagamento.
     * @example
     * // Update or create a Pagamento
     * const pagamento = await prisma.pagamento.upsert({
     *   create: {
     *     // ... data to create a Pagamento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pagamento we want to update
     *   }
     * })
     */
    upsert<T extends PagamentoUpsertArgs>(args: SelectSubset<T, PagamentoUpsertArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pagamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentoCountArgs} args - Arguments to filter Pagamentos to count.
     * @example
     * // Count the number of Pagamentos
     * const count = await prisma.pagamento.count({
     *   where: {
     *     // ... the filter for the Pagamentos we want to count
     *   }
     * })
    **/
    count<T extends PagamentoCountArgs>(
      args?: Subset<T, PagamentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PagamentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pagamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PagamentoAggregateArgs>(args: Subset<T, PagamentoAggregateArgs>): Prisma.PrismaPromise<GetPagamentoAggregateType<T>>

    /**
     * Group by Pagamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentoGroupByArgs} args - Group by arguments.
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
      T extends PagamentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PagamentoGroupByArgs['orderBy'] }
        : { orderBy?: PagamentoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PagamentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPagamentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pagamento model
   */
  readonly fields: PagamentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pagamento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PagamentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bilhete<T extends BilheteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BilheteDefaultArgs<ExtArgs>>): Prisma__BilheteClient<$Result.GetResult<Prisma.$BilhetePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    participante<T extends ParticipanteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParticipanteDefaultArgs<ExtArgs>>): Prisma__ParticipanteClient<$Result.GetResult<Prisma.$ParticipantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pagamento model
   */
  interface PagamentoFieldRefs {
    readonly id: FieldRef<"Pagamento", 'Int'>
    readonly valor: FieldRef<"Pagamento", 'Float'>
    readonly status: FieldRef<"Pagamento", 'StatusPag'>
    readonly metodo: FieldRef<"Pagamento", 'MetodoPag'>
    readonly dataProcessamento: FieldRef<"Pagamento", 'DateTime'>
    readonly bilheteId: FieldRef<"Pagamento", 'Int'>
    readonly participanteId: FieldRef<"Pagamento", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Pagamento findUnique
   */
  export type PagamentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * Filter, which Pagamento to fetch.
     */
    where: PagamentoWhereUniqueInput
  }

  /**
   * Pagamento findUniqueOrThrow
   */
  export type PagamentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * Filter, which Pagamento to fetch.
     */
    where: PagamentoWhereUniqueInput
  }

  /**
   * Pagamento findFirst
   */
  export type PagamentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * Filter, which Pagamento to fetch.
     */
    where?: PagamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagamentos to fetch.
     */
    orderBy?: PagamentoOrderByWithRelationInput | PagamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pagamentos.
     */
    cursor?: PagamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pagamentos.
     */
    distinct?: PagamentoScalarFieldEnum | PagamentoScalarFieldEnum[]
  }

  /**
   * Pagamento findFirstOrThrow
   */
  export type PagamentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * Filter, which Pagamento to fetch.
     */
    where?: PagamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagamentos to fetch.
     */
    orderBy?: PagamentoOrderByWithRelationInput | PagamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pagamentos.
     */
    cursor?: PagamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pagamentos.
     */
    distinct?: PagamentoScalarFieldEnum | PagamentoScalarFieldEnum[]
  }

  /**
   * Pagamento findMany
   */
  export type PagamentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * Filter, which Pagamentos to fetch.
     */
    where?: PagamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagamentos to fetch.
     */
    orderBy?: PagamentoOrderByWithRelationInput | PagamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pagamentos.
     */
    cursor?: PagamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagamentos.
     */
    skip?: number
    distinct?: PagamentoScalarFieldEnum | PagamentoScalarFieldEnum[]
  }

  /**
   * Pagamento create
   */
  export type PagamentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * The data needed to create a Pagamento.
     */
    data: XOR<PagamentoCreateInput, PagamentoUncheckedCreateInput>
  }

  /**
   * Pagamento createMany
   */
  export type PagamentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pagamentos.
     */
    data: PagamentoCreateManyInput | PagamentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pagamento createManyAndReturn
   */
  export type PagamentoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * The data used to create many Pagamentos.
     */
    data: PagamentoCreateManyInput | PagamentoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pagamento update
   */
  export type PagamentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * The data needed to update a Pagamento.
     */
    data: XOR<PagamentoUpdateInput, PagamentoUncheckedUpdateInput>
    /**
     * Choose, which Pagamento to update.
     */
    where: PagamentoWhereUniqueInput
  }

  /**
   * Pagamento updateMany
   */
  export type PagamentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pagamentos.
     */
    data: XOR<PagamentoUpdateManyMutationInput, PagamentoUncheckedUpdateManyInput>
    /**
     * Filter which Pagamentos to update
     */
    where?: PagamentoWhereInput
    /**
     * Limit how many Pagamentos to update.
     */
    limit?: number
  }

  /**
   * Pagamento updateManyAndReturn
   */
  export type PagamentoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * The data used to update Pagamentos.
     */
    data: XOR<PagamentoUpdateManyMutationInput, PagamentoUncheckedUpdateManyInput>
    /**
     * Filter which Pagamentos to update
     */
    where?: PagamentoWhereInput
    /**
     * Limit how many Pagamentos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pagamento upsert
   */
  export type PagamentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * The filter to search for the Pagamento to update in case it exists.
     */
    where: PagamentoWhereUniqueInput
    /**
     * In case the Pagamento found by the `where` argument doesn't exist, create a new Pagamento with this data.
     */
    create: XOR<PagamentoCreateInput, PagamentoUncheckedCreateInput>
    /**
     * In case the Pagamento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PagamentoUpdateInput, PagamentoUncheckedUpdateInput>
  }

  /**
   * Pagamento delete
   */
  export type PagamentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * Filter which Pagamento to delete.
     */
    where: PagamentoWhereUniqueInput
  }

  /**
   * Pagamento deleteMany
   */
  export type PagamentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pagamentos to delete
     */
    where?: PagamentoWhereInput
    /**
     * Limit how many Pagamentos to delete.
     */
    limit?: number
  }

  /**
   * Pagamento without action
   */
  export type PagamentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
  }


  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    cpf: string | null
    senha: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    cpf: string | null
    senha: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    cpf: number
    senha: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    cpf?: true
    senha?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    cpf?: true
    senha?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    cpf?: true
    senha?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nome: string
    email: string
    cpf: string
    senha: string
    createdAt: Date
    updatedAt: Date | null
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    cpf?: boolean
    senha?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organizador?: boolean | Usuario$organizadorArgs<ExtArgs>
    participante?: boolean | Usuario$participanteArgs<ExtArgs>
    notificacoes?: boolean | Usuario$notificacoesArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    cpf?: boolean
    senha?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    cpf?: boolean
    senha?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    cpf?: boolean
    senha?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "cpf" | "senha" | "createdAt" | "updatedAt", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organizador?: boolean | Usuario$organizadorArgs<ExtArgs>
    participante?: boolean | Usuario$participanteArgs<ExtArgs>
    notificacoes?: boolean | Usuario$notificacoesArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      organizador: Prisma.$OrganizadorPayload<ExtArgs> | null
      participante: Prisma.$ParticipantePayload<ExtArgs> | null
      notificacoes: Prisma.$NotificacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      email: string
      cpf: string
      senha: string
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organizador<T extends Usuario$organizadorArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$organizadorArgs<ExtArgs>>): Prisma__OrganizadorClient<$Result.GetResult<Prisma.$OrganizadorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    participante<T extends Usuario$participanteArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$participanteArgs<ExtArgs>>): Prisma__ParticipanteClient<$Result.GetResult<Prisma.$ParticipantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    notificacoes<T extends Usuario$notificacoesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$notificacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly cpf: FieldRef<"Usuario", 'String'>
    readonly senha: FieldRef<"Usuario", 'String'>
    readonly createdAt: FieldRef<"Usuario", 'DateTime'>
    readonly updatedAt: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.organizador
   */
  export type Usuario$organizadorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizador
     */
    select?: OrganizadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organizador
     */
    omit?: OrganizadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizadorInclude<ExtArgs> | null
    where?: OrganizadorWhereInput
  }

  /**
   * Usuario.participante
   */
  export type Usuario$participanteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participante
     */
    select?: ParticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participante
     */
    omit?: ParticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipanteInclude<ExtArgs> | null
    where?: ParticipanteWhereInput
  }

  /**
   * Usuario.notificacoes
   */
  export type Usuario$notificacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notificacao
     */
    omit?: NotificacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    where?: NotificacaoWhereInput
    orderBy?: NotificacaoOrderByWithRelationInput | NotificacaoOrderByWithRelationInput[]
    cursor?: NotificacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificacaoScalarFieldEnum | NotificacaoScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model PremioParticipante
   */

  export type AggregatePremioParticipante = {
    _count: PremioParticipanteCountAggregateOutputType | null
    _avg: PremioParticipanteAvgAggregateOutputType | null
    _sum: PremioParticipanteSumAggregateOutputType | null
    _min: PremioParticipanteMinAggregateOutputType | null
    _max: PremioParticipanteMaxAggregateOutputType | null
  }

  export type PremioParticipanteAvgAggregateOutputType = {
    premioId: number | null
    participanteId: number | null
  }

  export type PremioParticipanteSumAggregateOutputType = {
    premioId: number | null
    participanteId: number | null
  }

  export type PremioParticipanteMinAggregateOutputType = {
    premioId: number | null
    participanteId: number | null
    dataPremiacao: Date | null
  }

  export type PremioParticipanteMaxAggregateOutputType = {
    premioId: number | null
    participanteId: number | null
    dataPremiacao: Date | null
  }

  export type PremioParticipanteCountAggregateOutputType = {
    premioId: number
    participanteId: number
    dataPremiacao: number
    _all: number
  }


  export type PremioParticipanteAvgAggregateInputType = {
    premioId?: true
    participanteId?: true
  }

  export type PremioParticipanteSumAggregateInputType = {
    premioId?: true
    participanteId?: true
  }

  export type PremioParticipanteMinAggregateInputType = {
    premioId?: true
    participanteId?: true
    dataPremiacao?: true
  }

  export type PremioParticipanteMaxAggregateInputType = {
    premioId?: true
    participanteId?: true
    dataPremiacao?: true
  }

  export type PremioParticipanteCountAggregateInputType = {
    premioId?: true
    participanteId?: true
    dataPremiacao?: true
    _all?: true
  }

  export type PremioParticipanteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PremioParticipante to aggregate.
     */
    where?: PremioParticipanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PremioParticipantes to fetch.
     */
    orderBy?: PremioParticipanteOrderByWithRelationInput | PremioParticipanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PremioParticipanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PremioParticipantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PremioParticipantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PremioParticipantes
    **/
    _count?: true | PremioParticipanteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PremioParticipanteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PremioParticipanteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PremioParticipanteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PremioParticipanteMaxAggregateInputType
  }

  export type GetPremioParticipanteAggregateType<T extends PremioParticipanteAggregateArgs> = {
        [P in keyof T & keyof AggregatePremioParticipante]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePremioParticipante[P]>
      : GetScalarType<T[P], AggregatePremioParticipante[P]>
  }




  export type PremioParticipanteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PremioParticipanteWhereInput
    orderBy?: PremioParticipanteOrderByWithAggregationInput | PremioParticipanteOrderByWithAggregationInput[]
    by: PremioParticipanteScalarFieldEnum[] | PremioParticipanteScalarFieldEnum
    having?: PremioParticipanteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PremioParticipanteCountAggregateInputType | true
    _avg?: PremioParticipanteAvgAggregateInputType
    _sum?: PremioParticipanteSumAggregateInputType
    _min?: PremioParticipanteMinAggregateInputType
    _max?: PremioParticipanteMaxAggregateInputType
  }

  export type PremioParticipanteGroupByOutputType = {
    premioId: number
    participanteId: number
    dataPremiacao: Date
    _count: PremioParticipanteCountAggregateOutputType | null
    _avg: PremioParticipanteAvgAggregateOutputType | null
    _sum: PremioParticipanteSumAggregateOutputType | null
    _min: PremioParticipanteMinAggregateOutputType | null
    _max: PremioParticipanteMaxAggregateOutputType | null
  }

  type GetPremioParticipanteGroupByPayload<T extends PremioParticipanteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PremioParticipanteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PremioParticipanteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PremioParticipanteGroupByOutputType[P]>
            : GetScalarType<T[P], PremioParticipanteGroupByOutputType[P]>
        }
      >
    >


  export type PremioParticipanteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    premioId?: boolean
    participanteId?: boolean
    dataPremiacao?: boolean
    premio?: boolean | PremioDefaultArgs<ExtArgs>
    participante?: boolean | ParticipanteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["premioParticipante"]>

  export type PremioParticipanteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    premioId?: boolean
    participanteId?: boolean
    dataPremiacao?: boolean
    premio?: boolean | PremioDefaultArgs<ExtArgs>
    participante?: boolean | ParticipanteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["premioParticipante"]>

  export type PremioParticipanteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    premioId?: boolean
    participanteId?: boolean
    dataPremiacao?: boolean
    premio?: boolean | PremioDefaultArgs<ExtArgs>
    participante?: boolean | ParticipanteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["premioParticipante"]>

  export type PremioParticipanteSelectScalar = {
    premioId?: boolean
    participanteId?: boolean
    dataPremiacao?: boolean
  }

  export type PremioParticipanteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"premioId" | "participanteId" | "dataPremiacao", ExtArgs["result"]["premioParticipante"]>
  export type PremioParticipanteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    premio?: boolean | PremioDefaultArgs<ExtArgs>
    participante?: boolean | ParticipanteDefaultArgs<ExtArgs>
  }
  export type PremioParticipanteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    premio?: boolean | PremioDefaultArgs<ExtArgs>
    participante?: boolean | ParticipanteDefaultArgs<ExtArgs>
  }
  export type PremioParticipanteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    premio?: boolean | PremioDefaultArgs<ExtArgs>
    participante?: boolean | ParticipanteDefaultArgs<ExtArgs>
  }

  export type $PremioParticipantePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PremioParticipante"
    objects: {
      premio: Prisma.$PremioPayload<ExtArgs>
      participante: Prisma.$ParticipantePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      premioId: number
      participanteId: number
      dataPremiacao: Date
    }, ExtArgs["result"]["premioParticipante"]>
    composites: {}
  }

  type PremioParticipanteGetPayload<S extends boolean | null | undefined | PremioParticipanteDefaultArgs> = $Result.GetResult<Prisma.$PremioParticipantePayload, S>

  type PremioParticipanteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PremioParticipanteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PremioParticipanteCountAggregateInputType | true
    }

  export interface PremioParticipanteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PremioParticipante'], meta: { name: 'PremioParticipante' } }
    /**
     * Find zero or one PremioParticipante that matches the filter.
     * @param {PremioParticipanteFindUniqueArgs} args - Arguments to find a PremioParticipante
     * @example
     * // Get one PremioParticipante
     * const premioParticipante = await prisma.premioParticipante.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PremioParticipanteFindUniqueArgs>(args: SelectSubset<T, PremioParticipanteFindUniqueArgs<ExtArgs>>): Prisma__PremioParticipanteClient<$Result.GetResult<Prisma.$PremioParticipantePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PremioParticipante that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PremioParticipanteFindUniqueOrThrowArgs} args - Arguments to find a PremioParticipante
     * @example
     * // Get one PremioParticipante
     * const premioParticipante = await prisma.premioParticipante.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PremioParticipanteFindUniqueOrThrowArgs>(args: SelectSubset<T, PremioParticipanteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PremioParticipanteClient<$Result.GetResult<Prisma.$PremioParticipantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PremioParticipante that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PremioParticipanteFindFirstArgs} args - Arguments to find a PremioParticipante
     * @example
     * // Get one PremioParticipante
     * const premioParticipante = await prisma.premioParticipante.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PremioParticipanteFindFirstArgs>(args?: SelectSubset<T, PremioParticipanteFindFirstArgs<ExtArgs>>): Prisma__PremioParticipanteClient<$Result.GetResult<Prisma.$PremioParticipantePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PremioParticipante that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PremioParticipanteFindFirstOrThrowArgs} args - Arguments to find a PremioParticipante
     * @example
     * // Get one PremioParticipante
     * const premioParticipante = await prisma.premioParticipante.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PremioParticipanteFindFirstOrThrowArgs>(args?: SelectSubset<T, PremioParticipanteFindFirstOrThrowArgs<ExtArgs>>): Prisma__PremioParticipanteClient<$Result.GetResult<Prisma.$PremioParticipantePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PremioParticipantes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PremioParticipanteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PremioParticipantes
     * const premioParticipantes = await prisma.premioParticipante.findMany()
     * 
     * // Get first 10 PremioParticipantes
     * const premioParticipantes = await prisma.premioParticipante.findMany({ take: 10 })
     * 
     * // Only select the `premioId`
     * const premioParticipanteWithPremioIdOnly = await prisma.premioParticipante.findMany({ select: { premioId: true } })
     * 
     */
    findMany<T extends PremioParticipanteFindManyArgs>(args?: SelectSubset<T, PremioParticipanteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PremioParticipantePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PremioParticipante.
     * @param {PremioParticipanteCreateArgs} args - Arguments to create a PremioParticipante.
     * @example
     * // Create one PremioParticipante
     * const PremioParticipante = await prisma.premioParticipante.create({
     *   data: {
     *     // ... data to create a PremioParticipante
     *   }
     * })
     * 
     */
    create<T extends PremioParticipanteCreateArgs>(args: SelectSubset<T, PremioParticipanteCreateArgs<ExtArgs>>): Prisma__PremioParticipanteClient<$Result.GetResult<Prisma.$PremioParticipantePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PremioParticipantes.
     * @param {PremioParticipanteCreateManyArgs} args - Arguments to create many PremioParticipantes.
     * @example
     * // Create many PremioParticipantes
     * const premioParticipante = await prisma.premioParticipante.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PremioParticipanteCreateManyArgs>(args?: SelectSubset<T, PremioParticipanteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PremioParticipantes and returns the data saved in the database.
     * @param {PremioParticipanteCreateManyAndReturnArgs} args - Arguments to create many PremioParticipantes.
     * @example
     * // Create many PremioParticipantes
     * const premioParticipante = await prisma.premioParticipante.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PremioParticipantes and only return the `premioId`
     * const premioParticipanteWithPremioIdOnly = await prisma.premioParticipante.createManyAndReturn({
     *   select: { premioId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PremioParticipanteCreateManyAndReturnArgs>(args?: SelectSubset<T, PremioParticipanteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PremioParticipantePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PremioParticipante.
     * @param {PremioParticipanteDeleteArgs} args - Arguments to delete one PremioParticipante.
     * @example
     * // Delete one PremioParticipante
     * const PremioParticipante = await prisma.premioParticipante.delete({
     *   where: {
     *     // ... filter to delete one PremioParticipante
     *   }
     * })
     * 
     */
    delete<T extends PremioParticipanteDeleteArgs>(args: SelectSubset<T, PremioParticipanteDeleteArgs<ExtArgs>>): Prisma__PremioParticipanteClient<$Result.GetResult<Prisma.$PremioParticipantePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PremioParticipante.
     * @param {PremioParticipanteUpdateArgs} args - Arguments to update one PremioParticipante.
     * @example
     * // Update one PremioParticipante
     * const premioParticipante = await prisma.premioParticipante.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PremioParticipanteUpdateArgs>(args: SelectSubset<T, PremioParticipanteUpdateArgs<ExtArgs>>): Prisma__PremioParticipanteClient<$Result.GetResult<Prisma.$PremioParticipantePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PremioParticipantes.
     * @param {PremioParticipanteDeleteManyArgs} args - Arguments to filter PremioParticipantes to delete.
     * @example
     * // Delete a few PremioParticipantes
     * const { count } = await prisma.premioParticipante.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PremioParticipanteDeleteManyArgs>(args?: SelectSubset<T, PremioParticipanteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PremioParticipantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PremioParticipanteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PremioParticipantes
     * const premioParticipante = await prisma.premioParticipante.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PremioParticipanteUpdateManyArgs>(args: SelectSubset<T, PremioParticipanteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PremioParticipantes and returns the data updated in the database.
     * @param {PremioParticipanteUpdateManyAndReturnArgs} args - Arguments to update many PremioParticipantes.
     * @example
     * // Update many PremioParticipantes
     * const premioParticipante = await prisma.premioParticipante.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PremioParticipantes and only return the `premioId`
     * const premioParticipanteWithPremioIdOnly = await prisma.premioParticipante.updateManyAndReturn({
     *   select: { premioId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PremioParticipanteUpdateManyAndReturnArgs>(args: SelectSubset<T, PremioParticipanteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PremioParticipantePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PremioParticipante.
     * @param {PremioParticipanteUpsertArgs} args - Arguments to update or create a PremioParticipante.
     * @example
     * // Update or create a PremioParticipante
     * const premioParticipante = await prisma.premioParticipante.upsert({
     *   create: {
     *     // ... data to create a PremioParticipante
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PremioParticipante we want to update
     *   }
     * })
     */
    upsert<T extends PremioParticipanteUpsertArgs>(args: SelectSubset<T, PremioParticipanteUpsertArgs<ExtArgs>>): Prisma__PremioParticipanteClient<$Result.GetResult<Prisma.$PremioParticipantePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PremioParticipantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PremioParticipanteCountArgs} args - Arguments to filter PremioParticipantes to count.
     * @example
     * // Count the number of PremioParticipantes
     * const count = await prisma.premioParticipante.count({
     *   where: {
     *     // ... the filter for the PremioParticipantes we want to count
     *   }
     * })
    **/
    count<T extends PremioParticipanteCountArgs>(
      args?: Subset<T, PremioParticipanteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PremioParticipanteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PremioParticipante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PremioParticipanteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PremioParticipanteAggregateArgs>(args: Subset<T, PremioParticipanteAggregateArgs>): Prisma.PrismaPromise<GetPremioParticipanteAggregateType<T>>

    /**
     * Group by PremioParticipante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PremioParticipanteGroupByArgs} args - Group by arguments.
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
      T extends PremioParticipanteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PremioParticipanteGroupByArgs['orderBy'] }
        : { orderBy?: PremioParticipanteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PremioParticipanteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPremioParticipanteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PremioParticipante model
   */
  readonly fields: PremioParticipanteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PremioParticipante.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PremioParticipanteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    premio<T extends PremioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PremioDefaultArgs<ExtArgs>>): Prisma__PremioClient<$Result.GetResult<Prisma.$PremioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    participante<T extends ParticipanteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParticipanteDefaultArgs<ExtArgs>>): Prisma__ParticipanteClient<$Result.GetResult<Prisma.$ParticipantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PremioParticipante model
   */
  interface PremioParticipanteFieldRefs {
    readonly premioId: FieldRef<"PremioParticipante", 'Int'>
    readonly participanteId: FieldRef<"PremioParticipante", 'Int'>
    readonly dataPremiacao: FieldRef<"PremioParticipante", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PremioParticipante findUnique
   */
  export type PremioParticipanteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremioParticipante
     */
    select?: PremioParticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremioParticipante
     */
    omit?: PremioParticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremioParticipanteInclude<ExtArgs> | null
    /**
     * Filter, which PremioParticipante to fetch.
     */
    where: PremioParticipanteWhereUniqueInput
  }

  /**
   * PremioParticipante findUniqueOrThrow
   */
  export type PremioParticipanteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremioParticipante
     */
    select?: PremioParticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremioParticipante
     */
    omit?: PremioParticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremioParticipanteInclude<ExtArgs> | null
    /**
     * Filter, which PremioParticipante to fetch.
     */
    where: PremioParticipanteWhereUniqueInput
  }

  /**
   * PremioParticipante findFirst
   */
  export type PremioParticipanteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremioParticipante
     */
    select?: PremioParticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremioParticipante
     */
    omit?: PremioParticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremioParticipanteInclude<ExtArgs> | null
    /**
     * Filter, which PremioParticipante to fetch.
     */
    where?: PremioParticipanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PremioParticipantes to fetch.
     */
    orderBy?: PremioParticipanteOrderByWithRelationInput | PremioParticipanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PremioParticipantes.
     */
    cursor?: PremioParticipanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PremioParticipantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PremioParticipantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PremioParticipantes.
     */
    distinct?: PremioParticipanteScalarFieldEnum | PremioParticipanteScalarFieldEnum[]
  }

  /**
   * PremioParticipante findFirstOrThrow
   */
  export type PremioParticipanteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremioParticipante
     */
    select?: PremioParticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremioParticipante
     */
    omit?: PremioParticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremioParticipanteInclude<ExtArgs> | null
    /**
     * Filter, which PremioParticipante to fetch.
     */
    where?: PremioParticipanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PremioParticipantes to fetch.
     */
    orderBy?: PremioParticipanteOrderByWithRelationInput | PremioParticipanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PremioParticipantes.
     */
    cursor?: PremioParticipanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PremioParticipantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PremioParticipantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PremioParticipantes.
     */
    distinct?: PremioParticipanteScalarFieldEnum | PremioParticipanteScalarFieldEnum[]
  }

  /**
   * PremioParticipante findMany
   */
  export type PremioParticipanteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremioParticipante
     */
    select?: PremioParticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremioParticipante
     */
    omit?: PremioParticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremioParticipanteInclude<ExtArgs> | null
    /**
     * Filter, which PremioParticipantes to fetch.
     */
    where?: PremioParticipanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PremioParticipantes to fetch.
     */
    orderBy?: PremioParticipanteOrderByWithRelationInput | PremioParticipanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PremioParticipantes.
     */
    cursor?: PremioParticipanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PremioParticipantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PremioParticipantes.
     */
    skip?: number
    distinct?: PremioParticipanteScalarFieldEnum | PremioParticipanteScalarFieldEnum[]
  }

  /**
   * PremioParticipante create
   */
  export type PremioParticipanteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremioParticipante
     */
    select?: PremioParticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremioParticipante
     */
    omit?: PremioParticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremioParticipanteInclude<ExtArgs> | null
    /**
     * The data needed to create a PremioParticipante.
     */
    data: XOR<PremioParticipanteCreateInput, PremioParticipanteUncheckedCreateInput>
  }

  /**
   * PremioParticipante createMany
   */
  export type PremioParticipanteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PremioParticipantes.
     */
    data: PremioParticipanteCreateManyInput | PremioParticipanteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PremioParticipante createManyAndReturn
   */
  export type PremioParticipanteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremioParticipante
     */
    select?: PremioParticipanteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PremioParticipante
     */
    omit?: PremioParticipanteOmit<ExtArgs> | null
    /**
     * The data used to create many PremioParticipantes.
     */
    data: PremioParticipanteCreateManyInput | PremioParticipanteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremioParticipanteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PremioParticipante update
   */
  export type PremioParticipanteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremioParticipante
     */
    select?: PremioParticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremioParticipante
     */
    omit?: PremioParticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremioParticipanteInclude<ExtArgs> | null
    /**
     * The data needed to update a PremioParticipante.
     */
    data: XOR<PremioParticipanteUpdateInput, PremioParticipanteUncheckedUpdateInput>
    /**
     * Choose, which PremioParticipante to update.
     */
    where: PremioParticipanteWhereUniqueInput
  }

  /**
   * PremioParticipante updateMany
   */
  export type PremioParticipanteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PremioParticipantes.
     */
    data: XOR<PremioParticipanteUpdateManyMutationInput, PremioParticipanteUncheckedUpdateManyInput>
    /**
     * Filter which PremioParticipantes to update
     */
    where?: PremioParticipanteWhereInput
    /**
     * Limit how many PremioParticipantes to update.
     */
    limit?: number
  }

  /**
   * PremioParticipante updateManyAndReturn
   */
  export type PremioParticipanteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremioParticipante
     */
    select?: PremioParticipanteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PremioParticipante
     */
    omit?: PremioParticipanteOmit<ExtArgs> | null
    /**
     * The data used to update PremioParticipantes.
     */
    data: XOR<PremioParticipanteUpdateManyMutationInput, PremioParticipanteUncheckedUpdateManyInput>
    /**
     * Filter which PremioParticipantes to update
     */
    where?: PremioParticipanteWhereInput
    /**
     * Limit how many PremioParticipantes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremioParticipanteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PremioParticipante upsert
   */
  export type PremioParticipanteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremioParticipante
     */
    select?: PremioParticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremioParticipante
     */
    omit?: PremioParticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremioParticipanteInclude<ExtArgs> | null
    /**
     * The filter to search for the PremioParticipante to update in case it exists.
     */
    where: PremioParticipanteWhereUniqueInput
    /**
     * In case the PremioParticipante found by the `where` argument doesn't exist, create a new PremioParticipante with this data.
     */
    create: XOR<PremioParticipanteCreateInput, PremioParticipanteUncheckedCreateInput>
    /**
     * In case the PremioParticipante was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PremioParticipanteUpdateInput, PremioParticipanteUncheckedUpdateInput>
  }

  /**
   * PremioParticipante delete
   */
  export type PremioParticipanteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremioParticipante
     */
    select?: PremioParticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremioParticipante
     */
    omit?: PremioParticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremioParticipanteInclude<ExtArgs> | null
    /**
     * Filter which PremioParticipante to delete.
     */
    where: PremioParticipanteWhereUniqueInput
  }

  /**
   * PremioParticipante deleteMany
   */
  export type PremioParticipanteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PremioParticipantes to delete
     */
    where?: PremioParticipanteWhereInput
    /**
     * Limit how many PremioParticipantes to delete.
     */
    limit?: number
  }

  /**
   * PremioParticipante without action
   */
  export type PremioParticipanteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremioParticipante
     */
    select?: PremioParticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremioParticipante
     */
    omit?: PremioParticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremioParticipanteInclude<ExtArgs> | null
  }


  /**
   * Model SorteioBilhete
   */

  export type AggregateSorteioBilhete = {
    _count: SorteioBilheteCountAggregateOutputType | null
    _avg: SorteioBilheteAvgAggregateOutputType | null
    _sum: SorteioBilheteSumAggregateOutputType | null
    _min: SorteioBilheteMinAggregateOutputType | null
    _max: SorteioBilheteMaxAggregateOutputType | null
  }

  export type SorteioBilheteAvgAggregateOutputType = {
    sorteioId: number | null
    bilheteId: number | null
  }

  export type SorteioBilheteSumAggregateOutputType = {
    sorteioId: number | null
    bilheteId: number | null
  }

  export type SorteioBilheteMinAggregateOutputType = {
    sorteioId: number | null
    bilheteId: number | null
    dataInclusao: Date | null
  }

  export type SorteioBilheteMaxAggregateOutputType = {
    sorteioId: number | null
    bilheteId: number | null
    dataInclusao: Date | null
  }

  export type SorteioBilheteCountAggregateOutputType = {
    sorteioId: number
    bilheteId: number
    dataInclusao: number
    _all: number
  }


  export type SorteioBilheteAvgAggregateInputType = {
    sorteioId?: true
    bilheteId?: true
  }

  export type SorteioBilheteSumAggregateInputType = {
    sorteioId?: true
    bilheteId?: true
  }

  export type SorteioBilheteMinAggregateInputType = {
    sorteioId?: true
    bilheteId?: true
    dataInclusao?: true
  }

  export type SorteioBilheteMaxAggregateInputType = {
    sorteioId?: true
    bilheteId?: true
    dataInclusao?: true
  }

  export type SorteioBilheteCountAggregateInputType = {
    sorteioId?: true
    bilheteId?: true
    dataInclusao?: true
    _all?: true
  }

  export type SorteioBilheteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SorteioBilhete to aggregate.
     */
    where?: SorteioBilheteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SorteioBilhetes to fetch.
     */
    orderBy?: SorteioBilheteOrderByWithRelationInput | SorteioBilheteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SorteioBilheteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SorteioBilhetes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SorteioBilhetes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SorteioBilhetes
    **/
    _count?: true | SorteioBilheteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SorteioBilheteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SorteioBilheteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SorteioBilheteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SorteioBilheteMaxAggregateInputType
  }

  export type GetSorteioBilheteAggregateType<T extends SorteioBilheteAggregateArgs> = {
        [P in keyof T & keyof AggregateSorteioBilhete]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSorteioBilhete[P]>
      : GetScalarType<T[P], AggregateSorteioBilhete[P]>
  }




  export type SorteioBilheteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SorteioBilheteWhereInput
    orderBy?: SorteioBilheteOrderByWithAggregationInput | SorteioBilheteOrderByWithAggregationInput[]
    by: SorteioBilheteScalarFieldEnum[] | SorteioBilheteScalarFieldEnum
    having?: SorteioBilheteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SorteioBilheteCountAggregateInputType | true
    _avg?: SorteioBilheteAvgAggregateInputType
    _sum?: SorteioBilheteSumAggregateInputType
    _min?: SorteioBilheteMinAggregateInputType
    _max?: SorteioBilheteMaxAggregateInputType
  }

  export type SorteioBilheteGroupByOutputType = {
    sorteioId: number
    bilheteId: number
    dataInclusao: Date
    _count: SorteioBilheteCountAggregateOutputType | null
    _avg: SorteioBilheteAvgAggregateOutputType | null
    _sum: SorteioBilheteSumAggregateOutputType | null
    _min: SorteioBilheteMinAggregateOutputType | null
    _max: SorteioBilheteMaxAggregateOutputType | null
  }

  type GetSorteioBilheteGroupByPayload<T extends SorteioBilheteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SorteioBilheteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SorteioBilheteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SorteioBilheteGroupByOutputType[P]>
            : GetScalarType<T[P], SorteioBilheteGroupByOutputType[P]>
        }
      >
    >


  export type SorteioBilheteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sorteioId?: boolean
    bilheteId?: boolean
    dataInclusao?: boolean
    sorteio?: boolean | SorteioDefaultArgs<ExtArgs>
    bilhete?: boolean | BilheteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sorteioBilhete"]>

  export type SorteioBilheteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sorteioId?: boolean
    bilheteId?: boolean
    dataInclusao?: boolean
    sorteio?: boolean | SorteioDefaultArgs<ExtArgs>
    bilhete?: boolean | BilheteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sorteioBilhete"]>

  export type SorteioBilheteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sorteioId?: boolean
    bilheteId?: boolean
    dataInclusao?: boolean
    sorteio?: boolean | SorteioDefaultArgs<ExtArgs>
    bilhete?: boolean | BilheteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sorteioBilhete"]>

  export type SorteioBilheteSelectScalar = {
    sorteioId?: boolean
    bilheteId?: boolean
    dataInclusao?: boolean
  }

  export type SorteioBilheteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"sorteioId" | "bilheteId" | "dataInclusao", ExtArgs["result"]["sorteioBilhete"]>
  export type SorteioBilheteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sorteio?: boolean | SorteioDefaultArgs<ExtArgs>
    bilhete?: boolean | BilheteDefaultArgs<ExtArgs>
  }
  export type SorteioBilheteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sorteio?: boolean | SorteioDefaultArgs<ExtArgs>
    bilhete?: boolean | BilheteDefaultArgs<ExtArgs>
  }
  export type SorteioBilheteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sorteio?: boolean | SorteioDefaultArgs<ExtArgs>
    bilhete?: boolean | BilheteDefaultArgs<ExtArgs>
  }

  export type $SorteioBilhetePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SorteioBilhete"
    objects: {
      sorteio: Prisma.$SorteioPayload<ExtArgs>
      bilhete: Prisma.$BilhetePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      sorteioId: number
      bilheteId: number
      dataInclusao: Date
    }, ExtArgs["result"]["sorteioBilhete"]>
    composites: {}
  }

  type SorteioBilheteGetPayload<S extends boolean | null | undefined | SorteioBilheteDefaultArgs> = $Result.GetResult<Prisma.$SorteioBilhetePayload, S>

  type SorteioBilheteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SorteioBilheteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SorteioBilheteCountAggregateInputType | true
    }

  export interface SorteioBilheteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SorteioBilhete'], meta: { name: 'SorteioBilhete' } }
    /**
     * Find zero or one SorteioBilhete that matches the filter.
     * @param {SorteioBilheteFindUniqueArgs} args - Arguments to find a SorteioBilhete
     * @example
     * // Get one SorteioBilhete
     * const sorteioBilhete = await prisma.sorteioBilhete.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SorteioBilheteFindUniqueArgs>(args: SelectSubset<T, SorteioBilheteFindUniqueArgs<ExtArgs>>): Prisma__SorteioBilheteClient<$Result.GetResult<Prisma.$SorteioBilhetePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SorteioBilhete that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SorteioBilheteFindUniqueOrThrowArgs} args - Arguments to find a SorteioBilhete
     * @example
     * // Get one SorteioBilhete
     * const sorteioBilhete = await prisma.sorteioBilhete.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SorteioBilheteFindUniqueOrThrowArgs>(args: SelectSubset<T, SorteioBilheteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SorteioBilheteClient<$Result.GetResult<Prisma.$SorteioBilhetePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SorteioBilhete that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SorteioBilheteFindFirstArgs} args - Arguments to find a SorteioBilhete
     * @example
     * // Get one SorteioBilhete
     * const sorteioBilhete = await prisma.sorteioBilhete.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SorteioBilheteFindFirstArgs>(args?: SelectSubset<T, SorteioBilheteFindFirstArgs<ExtArgs>>): Prisma__SorteioBilheteClient<$Result.GetResult<Prisma.$SorteioBilhetePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SorteioBilhete that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SorteioBilheteFindFirstOrThrowArgs} args - Arguments to find a SorteioBilhete
     * @example
     * // Get one SorteioBilhete
     * const sorteioBilhete = await prisma.sorteioBilhete.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SorteioBilheteFindFirstOrThrowArgs>(args?: SelectSubset<T, SorteioBilheteFindFirstOrThrowArgs<ExtArgs>>): Prisma__SorteioBilheteClient<$Result.GetResult<Prisma.$SorteioBilhetePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SorteioBilhetes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SorteioBilheteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SorteioBilhetes
     * const sorteioBilhetes = await prisma.sorteioBilhete.findMany()
     * 
     * // Get first 10 SorteioBilhetes
     * const sorteioBilhetes = await prisma.sorteioBilhete.findMany({ take: 10 })
     * 
     * // Only select the `sorteioId`
     * const sorteioBilheteWithSorteioIdOnly = await prisma.sorteioBilhete.findMany({ select: { sorteioId: true } })
     * 
     */
    findMany<T extends SorteioBilheteFindManyArgs>(args?: SelectSubset<T, SorteioBilheteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SorteioBilhetePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SorteioBilhete.
     * @param {SorteioBilheteCreateArgs} args - Arguments to create a SorteioBilhete.
     * @example
     * // Create one SorteioBilhete
     * const SorteioBilhete = await prisma.sorteioBilhete.create({
     *   data: {
     *     // ... data to create a SorteioBilhete
     *   }
     * })
     * 
     */
    create<T extends SorteioBilheteCreateArgs>(args: SelectSubset<T, SorteioBilheteCreateArgs<ExtArgs>>): Prisma__SorteioBilheteClient<$Result.GetResult<Prisma.$SorteioBilhetePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SorteioBilhetes.
     * @param {SorteioBilheteCreateManyArgs} args - Arguments to create many SorteioBilhetes.
     * @example
     * // Create many SorteioBilhetes
     * const sorteioBilhete = await prisma.sorteioBilhete.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SorteioBilheteCreateManyArgs>(args?: SelectSubset<T, SorteioBilheteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SorteioBilhetes and returns the data saved in the database.
     * @param {SorteioBilheteCreateManyAndReturnArgs} args - Arguments to create many SorteioBilhetes.
     * @example
     * // Create many SorteioBilhetes
     * const sorteioBilhete = await prisma.sorteioBilhete.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SorteioBilhetes and only return the `sorteioId`
     * const sorteioBilheteWithSorteioIdOnly = await prisma.sorteioBilhete.createManyAndReturn({
     *   select: { sorteioId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SorteioBilheteCreateManyAndReturnArgs>(args?: SelectSubset<T, SorteioBilheteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SorteioBilhetePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SorteioBilhete.
     * @param {SorteioBilheteDeleteArgs} args - Arguments to delete one SorteioBilhete.
     * @example
     * // Delete one SorteioBilhete
     * const SorteioBilhete = await prisma.sorteioBilhete.delete({
     *   where: {
     *     // ... filter to delete one SorteioBilhete
     *   }
     * })
     * 
     */
    delete<T extends SorteioBilheteDeleteArgs>(args: SelectSubset<T, SorteioBilheteDeleteArgs<ExtArgs>>): Prisma__SorteioBilheteClient<$Result.GetResult<Prisma.$SorteioBilhetePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SorteioBilhete.
     * @param {SorteioBilheteUpdateArgs} args - Arguments to update one SorteioBilhete.
     * @example
     * // Update one SorteioBilhete
     * const sorteioBilhete = await prisma.sorteioBilhete.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SorteioBilheteUpdateArgs>(args: SelectSubset<T, SorteioBilheteUpdateArgs<ExtArgs>>): Prisma__SorteioBilheteClient<$Result.GetResult<Prisma.$SorteioBilhetePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SorteioBilhetes.
     * @param {SorteioBilheteDeleteManyArgs} args - Arguments to filter SorteioBilhetes to delete.
     * @example
     * // Delete a few SorteioBilhetes
     * const { count } = await prisma.sorteioBilhete.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SorteioBilheteDeleteManyArgs>(args?: SelectSubset<T, SorteioBilheteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SorteioBilhetes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SorteioBilheteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SorteioBilhetes
     * const sorteioBilhete = await prisma.sorteioBilhete.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SorteioBilheteUpdateManyArgs>(args: SelectSubset<T, SorteioBilheteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SorteioBilhetes and returns the data updated in the database.
     * @param {SorteioBilheteUpdateManyAndReturnArgs} args - Arguments to update many SorteioBilhetes.
     * @example
     * // Update many SorteioBilhetes
     * const sorteioBilhete = await prisma.sorteioBilhete.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SorteioBilhetes and only return the `sorteioId`
     * const sorteioBilheteWithSorteioIdOnly = await prisma.sorteioBilhete.updateManyAndReturn({
     *   select: { sorteioId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SorteioBilheteUpdateManyAndReturnArgs>(args: SelectSubset<T, SorteioBilheteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SorteioBilhetePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SorteioBilhete.
     * @param {SorteioBilheteUpsertArgs} args - Arguments to update or create a SorteioBilhete.
     * @example
     * // Update or create a SorteioBilhete
     * const sorteioBilhete = await prisma.sorteioBilhete.upsert({
     *   create: {
     *     // ... data to create a SorteioBilhete
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SorteioBilhete we want to update
     *   }
     * })
     */
    upsert<T extends SorteioBilheteUpsertArgs>(args: SelectSubset<T, SorteioBilheteUpsertArgs<ExtArgs>>): Prisma__SorteioBilheteClient<$Result.GetResult<Prisma.$SorteioBilhetePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SorteioBilhetes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SorteioBilheteCountArgs} args - Arguments to filter SorteioBilhetes to count.
     * @example
     * // Count the number of SorteioBilhetes
     * const count = await prisma.sorteioBilhete.count({
     *   where: {
     *     // ... the filter for the SorteioBilhetes we want to count
     *   }
     * })
    **/
    count<T extends SorteioBilheteCountArgs>(
      args?: Subset<T, SorteioBilheteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SorteioBilheteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SorteioBilhete.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SorteioBilheteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SorteioBilheteAggregateArgs>(args: Subset<T, SorteioBilheteAggregateArgs>): Prisma.PrismaPromise<GetSorteioBilheteAggregateType<T>>

    /**
     * Group by SorteioBilhete.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SorteioBilheteGroupByArgs} args - Group by arguments.
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
      T extends SorteioBilheteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SorteioBilheteGroupByArgs['orderBy'] }
        : { orderBy?: SorteioBilheteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SorteioBilheteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSorteioBilheteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SorteioBilhete model
   */
  readonly fields: SorteioBilheteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SorteioBilhete.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SorteioBilheteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sorteio<T extends SorteioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SorteioDefaultArgs<ExtArgs>>): Prisma__SorteioClient<$Result.GetResult<Prisma.$SorteioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bilhete<T extends BilheteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BilheteDefaultArgs<ExtArgs>>): Prisma__BilheteClient<$Result.GetResult<Prisma.$BilhetePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SorteioBilhete model
   */
  interface SorteioBilheteFieldRefs {
    readonly sorteioId: FieldRef<"SorteioBilhete", 'Int'>
    readonly bilheteId: FieldRef<"SorteioBilhete", 'Int'>
    readonly dataInclusao: FieldRef<"SorteioBilhete", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SorteioBilhete findUnique
   */
  export type SorteioBilheteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SorteioBilhete
     */
    select?: SorteioBilheteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SorteioBilhete
     */
    omit?: SorteioBilheteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SorteioBilheteInclude<ExtArgs> | null
    /**
     * Filter, which SorteioBilhete to fetch.
     */
    where: SorteioBilheteWhereUniqueInput
  }

  /**
   * SorteioBilhete findUniqueOrThrow
   */
  export type SorteioBilheteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SorteioBilhete
     */
    select?: SorteioBilheteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SorteioBilhete
     */
    omit?: SorteioBilheteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SorteioBilheteInclude<ExtArgs> | null
    /**
     * Filter, which SorteioBilhete to fetch.
     */
    where: SorteioBilheteWhereUniqueInput
  }

  /**
   * SorteioBilhete findFirst
   */
  export type SorteioBilheteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SorteioBilhete
     */
    select?: SorteioBilheteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SorteioBilhete
     */
    omit?: SorteioBilheteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SorteioBilheteInclude<ExtArgs> | null
    /**
     * Filter, which SorteioBilhete to fetch.
     */
    where?: SorteioBilheteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SorteioBilhetes to fetch.
     */
    orderBy?: SorteioBilheteOrderByWithRelationInput | SorteioBilheteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SorteioBilhetes.
     */
    cursor?: SorteioBilheteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SorteioBilhetes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SorteioBilhetes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SorteioBilhetes.
     */
    distinct?: SorteioBilheteScalarFieldEnum | SorteioBilheteScalarFieldEnum[]
  }

  /**
   * SorteioBilhete findFirstOrThrow
   */
  export type SorteioBilheteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SorteioBilhete
     */
    select?: SorteioBilheteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SorteioBilhete
     */
    omit?: SorteioBilheteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SorteioBilheteInclude<ExtArgs> | null
    /**
     * Filter, which SorteioBilhete to fetch.
     */
    where?: SorteioBilheteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SorteioBilhetes to fetch.
     */
    orderBy?: SorteioBilheteOrderByWithRelationInput | SorteioBilheteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SorteioBilhetes.
     */
    cursor?: SorteioBilheteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SorteioBilhetes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SorteioBilhetes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SorteioBilhetes.
     */
    distinct?: SorteioBilheteScalarFieldEnum | SorteioBilheteScalarFieldEnum[]
  }

  /**
   * SorteioBilhete findMany
   */
  export type SorteioBilheteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SorteioBilhete
     */
    select?: SorteioBilheteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SorteioBilhete
     */
    omit?: SorteioBilheteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SorteioBilheteInclude<ExtArgs> | null
    /**
     * Filter, which SorteioBilhetes to fetch.
     */
    where?: SorteioBilheteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SorteioBilhetes to fetch.
     */
    orderBy?: SorteioBilheteOrderByWithRelationInput | SorteioBilheteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SorteioBilhetes.
     */
    cursor?: SorteioBilheteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SorteioBilhetes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SorteioBilhetes.
     */
    skip?: number
    distinct?: SorteioBilheteScalarFieldEnum | SorteioBilheteScalarFieldEnum[]
  }

  /**
   * SorteioBilhete create
   */
  export type SorteioBilheteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SorteioBilhete
     */
    select?: SorteioBilheteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SorteioBilhete
     */
    omit?: SorteioBilheteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SorteioBilheteInclude<ExtArgs> | null
    /**
     * The data needed to create a SorteioBilhete.
     */
    data: XOR<SorteioBilheteCreateInput, SorteioBilheteUncheckedCreateInput>
  }

  /**
   * SorteioBilhete createMany
   */
  export type SorteioBilheteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SorteioBilhetes.
     */
    data: SorteioBilheteCreateManyInput | SorteioBilheteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SorteioBilhete createManyAndReturn
   */
  export type SorteioBilheteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SorteioBilhete
     */
    select?: SorteioBilheteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SorteioBilhete
     */
    omit?: SorteioBilheteOmit<ExtArgs> | null
    /**
     * The data used to create many SorteioBilhetes.
     */
    data: SorteioBilheteCreateManyInput | SorteioBilheteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SorteioBilheteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SorteioBilhete update
   */
  export type SorteioBilheteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SorteioBilhete
     */
    select?: SorteioBilheteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SorteioBilhete
     */
    omit?: SorteioBilheteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SorteioBilheteInclude<ExtArgs> | null
    /**
     * The data needed to update a SorteioBilhete.
     */
    data: XOR<SorteioBilheteUpdateInput, SorteioBilheteUncheckedUpdateInput>
    /**
     * Choose, which SorteioBilhete to update.
     */
    where: SorteioBilheteWhereUniqueInput
  }

  /**
   * SorteioBilhete updateMany
   */
  export type SorteioBilheteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SorteioBilhetes.
     */
    data: XOR<SorteioBilheteUpdateManyMutationInput, SorteioBilheteUncheckedUpdateManyInput>
    /**
     * Filter which SorteioBilhetes to update
     */
    where?: SorteioBilheteWhereInput
    /**
     * Limit how many SorteioBilhetes to update.
     */
    limit?: number
  }

  /**
   * SorteioBilhete updateManyAndReturn
   */
  export type SorteioBilheteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SorteioBilhete
     */
    select?: SorteioBilheteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SorteioBilhete
     */
    omit?: SorteioBilheteOmit<ExtArgs> | null
    /**
     * The data used to update SorteioBilhetes.
     */
    data: XOR<SorteioBilheteUpdateManyMutationInput, SorteioBilheteUncheckedUpdateManyInput>
    /**
     * Filter which SorteioBilhetes to update
     */
    where?: SorteioBilheteWhereInput
    /**
     * Limit how many SorteioBilhetes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SorteioBilheteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SorteioBilhete upsert
   */
  export type SorteioBilheteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SorteioBilhete
     */
    select?: SorteioBilheteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SorteioBilhete
     */
    omit?: SorteioBilheteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SorteioBilheteInclude<ExtArgs> | null
    /**
     * The filter to search for the SorteioBilhete to update in case it exists.
     */
    where: SorteioBilheteWhereUniqueInput
    /**
     * In case the SorteioBilhete found by the `where` argument doesn't exist, create a new SorteioBilhete with this data.
     */
    create: XOR<SorteioBilheteCreateInput, SorteioBilheteUncheckedCreateInput>
    /**
     * In case the SorteioBilhete was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SorteioBilheteUpdateInput, SorteioBilheteUncheckedUpdateInput>
  }

  /**
   * SorteioBilhete delete
   */
  export type SorteioBilheteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SorteioBilhete
     */
    select?: SorteioBilheteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SorteioBilhete
     */
    omit?: SorteioBilheteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SorteioBilheteInclude<ExtArgs> | null
    /**
     * Filter which SorteioBilhete to delete.
     */
    where: SorteioBilheteWhereUniqueInput
  }

  /**
   * SorteioBilhete deleteMany
   */
  export type SorteioBilheteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SorteioBilhetes to delete
     */
    where?: SorteioBilheteWhereInput
    /**
     * Limit how many SorteioBilhetes to delete.
     */
    limit?: number
  }

  /**
   * SorteioBilhete without action
   */
  export type SorteioBilheteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SorteioBilhete
     */
    select?: SorteioBilheteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SorteioBilhete
     */
    omit?: SorteioBilheteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SorteioBilheteInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const LogAuditoriaScalarFieldEnum: {
    id: 'id',
    acao: 'acao',
    createdAt: 'createdAt',
    detalhes: 'detalhes',
    rifaId: 'rifaId'
  };

  export type LogAuditoriaScalarFieldEnum = (typeof LogAuditoriaScalarFieldEnum)[keyof typeof LogAuditoriaScalarFieldEnum]


  export const PremioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao',
    imagem: 'imagem',
    rifaId: 'rifaId'
  };

  export type PremioScalarFieldEnum = (typeof PremioScalarFieldEnum)[keyof typeof PremioScalarFieldEnum]


  export const RifaScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    descricao: 'descricao',
    precoBilhete: 'precoBilhete',
    quantidadeBilhetes: 'quantidadeBilhetes',
    dataSorteio: 'dataSorteio',
    status: 'status',
    createdAt: 'createdAt',
    organizadorId: 'organizadorId'
  };

  export type RifaScalarFieldEnum = (typeof RifaScalarFieldEnum)[keyof typeof RifaScalarFieldEnum]


  export const OrganizadorScalarFieldEnum: {
    id: 'id',
    cnpj: 'cnpj',
    userId: 'userId'
  };

  export type OrganizadorScalarFieldEnum = (typeof OrganizadorScalarFieldEnum)[keyof typeof OrganizadorScalarFieldEnum]


  export const ParticipanteScalarFieldEnum: {
    id: 'id',
    userId: 'userId'
  };

  export type ParticipanteScalarFieldEnum = (typeof ParticipanteScalarFieldEnum)[keyof typeof ParticipanteScalarFieldEnum]


  export const BilheteScalarFieldEnum: {
    id: 'id',
    numero: 'numero',
    status: 'status',
    createdAt: 'createdAt',
    rifaId: 'rifaId',
    participanteId: 'participanteId'
  };

  export type BilheteScalarFieldEnum = (typeof BilheteScalarFieldEnum)[keyof typeof BilheteScalarFieldEnum]


  export const SorteioScalarFieldEnum: {
    id: 'id',
    dataHora: 'dataHora',
    rifaId: 'rifaId',
    vencedorId: 'vencedorId'
  };

  export type SorteioScalarFieldEnum = (typeof SorteioScalarFieldEnum)[keyof typeof SorteioScalarFieldEnum]


  export const NotificacaoScalarFieldEnum: {
    id: 'id',
    mensagem: 'mensagem',
    tipo: 'tipo',
    status: 'status',
    dataEnvio: 'dataEnvio',
    destinatarioId: 'destinatarioId'
  };

  export type NotificacaoScalarFieldEnum = (typeof NotificacaoScalarFieldEnum)[keyof typeof NotificacaoScalarFieldEnum]


  export const PagamentoScalarFieldEnum: {
    id: 'id',
    valor: 'valor',
    status: 'status',
    metodo: 'metodo',
    dataProcessamento: 'dataProcessamento',
    bilheteId: 'bilheteId',
    participanteId: 'participanteId'
  };

  export type PagamentoScalarFieldEnum = (typeof PagamentoScalarFieldEnum)[keyof typeof PagamentoScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    cpf: 'cpf',
    senha: 'senha',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const PremioParticipanteScalarFieldEnum: {
    premioId: 'premioId',
    participanteId: 'participanteId',
    dataPremiacao: 'dataPremiacao'
  };

  export type PremioParticipanteScalarFieldEnum = (typeof PremioParticipanteScalarFieldEnum)[keyof typeof PremioParticipanteScalarFieldEnum]


  export const SorteioBilheteScalarFieldEnum: {
    sorteioId: 'sorteioId',
    bilheteId: 'bilheteId',
    dataInclusao: 'dataInclusao'
  };

  export type SorteioBilheteScalarFieldEnum = (typeof SorteioBilheteScalarFieldEnum)[keyof typeof SorteioBilheteScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'StatusRifa'
   */
  export type EnumStatusRifaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusRifa'>
    


  /**
   * Reference to a field of type 'StatusRifa[]'
   */
  export type ListEnumStatusRifaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusRifa[]'>
    


  /**
   * Reference to a field of type 'StatusBil'
   */
  export type EnumStatusBilFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusBil'>
    


  /**
   * Reference to a field of type 'StatusBil[]'
   */
  export type ListEnumStatusBilFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusBil[]'>
    


  /**
   * Reference to a field of type 'StatusPag'
   */
  export type EnumStatusPagFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusPag'>
    


  /**
   * Reference to a field of type 'StatusPag[]'
   */
  export type ListEnumStatusPagFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusPag[]'>
    


  /**
   * Reference to a field of type 'MetodoPag'
   */
  export type EnumMetodoPagFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MetodoPag'>
    


  /**
   * Reference to a field of type 'MetodoPag[]'
   */
  export type ListEnumMetodoPagFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MetodoPag[]'>
    
  /**
   * Deep Input Types
   */


  export type LogAuditoriaWhereInput = {
    AND?: LogAuditoriaWhereInput | LogAuditoriaWhereInput[]
    OR?: LogAuditoriaWhereInput[]
    NOT?: LogAuditoriaWhereInput | LogAuditoriaWhereInput[]
    id?: IntFilter<"LogAuditoria"> | number
    acao?: StringFilter<"LogAuditoria"> | string
    createdAt?: DateTimeFilter<"LogAuditoria"> | Date | string
    detalhes?: StringNullableFilter<"LogAuditoria"> | string | null
    rifaId?: IntFilter<"LogAuditoria"> | number
    rifa?: XOR<RifaScalarRelationFilter, RifaWhereInput>
  }

  export type LogAuditoriaOrderByWithRelationInput = {
    id?: SortOrder
    acao?: SortOrder
    createdAt?: SortOrder
    detalhes?: SortOrderInput | SortOrder
    rifaId?: SortOrder
    rifa?: RifaOrderByWithRelationInput
  }

  export type LogAuditoriaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    rifaId?: number
    AND?: LogAuditoriaWhereInput | LogAuditoriaWhereInput[]
    OR?: LogAuditoriaWhereInput[]
    NOT?: LogAuditoriaWhereInput | LogAuditoriaWhereInput[]
    acao?: StringFilter<"LogAuditoria"> | string
    createdAt?: DateTimeFilter<"LogAuditoria"> | Date | string
    detalhes?: StringNullableFilter<"LogAuditoria"> | string | null
    rifa?: XOR<RifaScalarRelationFilter, RifaWhereInput>
  }, "id" | "rifaId">

  export type LogAuditoriaOrderByWithAggregationInput = {
    id?: SortOrder
    acao?: SortOrder
    createdAt?: SortOrder
    detalhes?: SortOrderInput | SortOrder
    rifaId?: SortOrder
    _count?: LogAuditoriaCountOrderByAggregateInput
    _avg?: LogAuditoriaAvgOrderByAggregateInput
    _max?: LogAuditoriaMaxOrderByAggregateInput
    _min?: LogAuditoriaMinOrderByAggregateInput
    _sum?: LogAuditoriaSumOrderByAggregateInput
  }

  export type LogAuditoriaScalarWhereWithAggregatesInput = {
    AND?: LogAuditoriaScalarWhereWithAggregatesInput | LogAuditoriaScalarWhereWithAggregatesInput[]
    OR?: LogAuditoriaScalarWhereWithAggregatesInput[]
    NOT?: LogAuditoriaScalarWhereWithAggregatesInput | LogAuditoriaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LogAuditoria"> | number
    acao?: StringWithAggregatesFilter<"LogAuditoria"> | string
    createdAt?: DateTimeWithAggregatesFilter<"LogAuditoria"> | Date | string
    detalhes?: StringNullableWithAggregatesFilter<"LogAuditoria"> | string | null
    rifaId?: IntWithAggregatesFilter<"LogAuditoria"> | number
  }

  export type PremioWhereInput = {
    AND?: PremioWhereInput | PremioWhereInput[]
    OR?: PremioWhereInput[]
    NOT?: PremioWhereInput | PremioWhereInput[]
    id?: IntFilter<"Premio"> | number
    nome?: StringFilter<"Premio"> | string
    descricao?: StringFilter<"Premio"> | string
    imagem?: StringNullableFilter<"Premio"> | string | null
    rifaId?: IntNullableFilter<"Premio"> | number | null
    rifa?: XOR<RifaNullableScalarRelationFilter, RifaWhereInput> | null
    participantes?: PremioParticipanteListRelationFilter
  }

  export type PremioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    imagem?: SortOrderInput | SortOrder
    rifaId?: SortOrderInput | SortOrder
    rifa?: RifaOrderByWithRelationInput
    participantes?: PremioParticipanteOrderByRelationAggregateInput
  }

  export type PremioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    rifaId?: number
    AND?: PremioWhereInput | PremioWhereInput[]
    OR?: PremioWhereInput[]
    NOT?: PremioWhereInput | PremioWhereInput[]
    nome?: StringFilter<"Premio"> | string
    descricao?: StringFilter<"Premio"> | string
    imagem?: StringNullableFilter<"Premio"> | string | null
    rifa?: XOR<RifaNullableScalarRelationFilter, RifaWhereInput> | null
    participantes?: PremioParticipanteListRelationFilter
  }, "id" | "rifaId">

  export type PremioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    imagem?: SortOrderInput | SortOrder
    rifaId?: SortOrderInput | SortOrder
    _count?: PremioCountOrderByAggregateInput
    _avg?: PremioAvgOrderByAggregateInput
    _max?: PremioMaxOrderByAggregateInput
    _min?: PremioMinOrderByAggregateInput
    _sum?: PremioSumOrderByAggregateInput
  }

  export type PremioScalarWhereWithAggregatesInput = {
    AND?: PremioScalarWhereWithAggregatesInput | PremioScalarWhereWithAggregatesInput[]
    OR?: PremioScalarWhereWithAggregatesInput[]
    NOT?: PremioScalarWhereWithAggregatesInput | PremioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Premio"> | number
    nome?: StringWithAggregatesFilter<"Premio"> | string
    descricao?: StringWithAggregatesFilter<"Premio"> | string
    imagem?: StringNullableWithAggregatesFilter<"Premio"> | string | null
    rifaId?: IntNullableWithAggregatesFilter<"Premio"> | number | null
  }

  export type RifaWhereInput = {
    AND?: RifaWhereInput | RifaWhereInput[]
    OR?: RifaWhereInput[]
    NOT?: RifaWhereInput | RifaWhereInput[]
    id?: IntFilter<"Rifa"> | number
    titulo?: StringFilter<"Rifa"> | string
    descricao?: StringFilter<"Rifa"> | string
    precoBilhete?: FloatFilter<"Rifa"> | number
    quantidadeBilhetes?: IntFilter<"Rifa"> | number
    dataSorteio?: DateTimeNullableFilter<"Rifa"> | Date | string | null
    status?: EnumStatusRifaFilter<"Rifa"> | $Enums.StatusRifa
    createdAt?: DateTimeFilter<"Rifa"> | Date | string
    organizadorId?: IntFilter<"Rifa"> | number
    organizador?: XOR<OrganizadorScalarRelationFilter, OrganizadorWhereInput>
    sorteios?: SorteioListRelationFilter
    bilhetes?: BilheteListRelationFilter
    premio?: XOR<PremioNullableScalarRelationFilter, PremioWhereInput> | null
    logs?: LogAuditoriaListRelationFilter
  }

  export type RifaOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    precoBilhete?: SortOrder
    quantidadeBilhetes?: SortOrder
    dataSorteio?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    organizadorId?: SortOrder
    organizador?: OrganizadorOrderByWithRelationInput
    sorteios?: SorteioOrderByRelationAggregateInput
    bilhetes?: BilheteOrderByRelationAggregateInput
    premio?: PremioOrderByWithRelationInput
    logs?: LogAuditoriaOrderByRelationAggregateInput
  }

  export type RifaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RifaWhereInput | RifaWhereInput[]
    OR?: RifaWhereInput[]
    NOT?: RifaWhereInput | RifaWhereInput[]
    titulo?: StringFilter<"Rifa"> | string
    descricao?: StringFilter<"Rifa"> | string
    precoBilhete?: FloatFilter<"Rifa"> | number
    quantidadeBilhetes?: IntFilter<"Rifa"> | number
    dataSorteio?: DateTimeNullableFilter<"Rifa"> | Date | string | null
    status?: EnumStatusRifaFilter<"Rifa"> | $Enums.StatusRifa
    createdAt?: DateTimeFilter<"Rifa"> | Date | string
    organizadorId?: IntFilter<"Rifa"> | number
    organizador?: XOR<OrganizadorScalarRelationFilter, OrganizadorWhereInput>
    sorteios?: SorteioListRelationFilter
    bilhetes?: BilheteListRelationFilter
    premio?: XOR<PremioNullableScalarRelationFilter, PremioWhereInput> | null
    logs?: LogAuditoriaListRelationFilter
  }, "id">

  export type RifaOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    precoBilhete?: SortOrder
    quantidadeBilhetes?: SortOrder
    dataSorteio?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    organizadorId?: SortOrder
    _count?: RifaCountOrderByAggregateInput
    _avg?: RifaAvgOrderByAggregateInput
    _max?: RifaMaxOrderByAggregateInput
    _min?: RifaMinOrderByAggregateInput
    _sum?: RifaSumOrderByAggregateInput
  }

  export type RifaScalarWhereWithAggregatesInput = {
    AND?: RifaScalarWhereWithAggregatesInput | RifaScalarWhereWithAggregatesInput[]
    OR?: RifaScalarWhereWithAggregatesInput[]
    NOT?: RifaScalarWhereWithAggregatesInput | RifaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Rifa"> | number
    titulo?: StringWithAggregatesFilter<"Rifa"> | string
    descricao?: StringWithAggregatesFilter<"Rifa"> | string
    precoBilhete?: FloatWithAggregatesFilter<"Rifa"> | number
    quantidadeBilhetes?: IntWithAggregatesFilter<"Rifa"> | number
    dataSorteio?: DateTimeNullableWithAggregatesFilter<"Rifa"> | Date | string | null
    status?: EnumStatusRifaWithAggregatesFilter<"Rifa"> | $Enums.StatusRifa
    createdAt?: DateTimeWithAggregatesFilter<"Rifa"> | Date | string
    organizadorId?: IntWithAggregatesFilter<"Rifa"> | number
  }

  export type OrganizadorWhereInput = {
    AND?: OrganizadorWhereInput | OrganizadorWhereInput[]
    OR?: OrganizadorWhereInput[]
    NOT?: OrganizadorWhereInput | OrganizadorWhereInput[]
    id?: IntFilter<"Organizador"> | number
    cnpj?: StringNullableFilter<"Organizador"> | string | null
    userId?: IntFilter<"Organizador"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    rifas?: RifaListRelationFilter
  }

  export type OrganizadorOrderByWithRelationInput = {
    id?: SortOrder
    cnpj?: SortOrderInput | SortOrder
    userId?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    rifas?: RifaOrderByRelationAggregateInput
  }

  export type OrganizadorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cnpj?: string
    userId?: number
    AND?: OrganizadorWhereInput | OrganizadorWhereInput[]
    OR?: OrganizadorWhereInput[]
    NOT?: OrganizadorWhereInput | OrganizadorWhereInput[]
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    rifas?: RifaListRelationFilter
  }, "id" | "cnpj" | "userId">

  export type OrganizadorOrderByWithAggregationInput = {
    id?: SortOrder
    cnpj?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: OrganizadorCountOrderByAggregateInput
    _avg?: OrganizadorAvgOrderByAggregateInput
    _max?: OrganizadorMaxOrderByAggregateInput
    _min?: OrganizadorMinOrderByAggregateInput
    _sum?: OrganizadorSumOrderByAggregateInput
  }

  export type OrganizadorScalarWhereWithAggregatesInput = {
    AND?: OrganizadorScalarWhereWithAggregatesInput | OrganizadorScalarWhereWithAggregatesInput[]
    OR?: OrganizadorScalarWhereWithAggregatesInput[]
    NOT?: OrganizadorScalarWhereWithAggregatesInput | OrganizadorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Organizador"> | number
    cnpj?: StringNullableWithAggregatesFilter<"Organizador"> | string | null
    userId?: IntWithAggregatesFilter<"Organizador"> | number
  }

  export type ParticipanteWhereInput = {
    AND?: ParticipanteWhereInput | ParticipanteWhereInput[]
    OR?: ParticipanteWhereInput[]
    NOT?: ParticipanteWhereInput | ParticipanteWhereInput[]
    id?: IntFilter<"Participante"> | number
    userId?: IntFilter<"Participante"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    bilhetes?: BilheteListRelationFilter
    pagamentos?: PagamentoListRelationFilter
    premios?: PremioParticipanteListRelationFilter
    vitorias?: SorteioListRelationFilter
  }

  export type ParticipanteOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    bilhetes?: BilheteOrderByRelationAggregateInput
    pagamentos?: PagamentoOrderByRelationAggregateInput
    premios?: PremioParticipanteOrderByRelationAggregateInput
    vitorias?: SorteioOrderByRelationAggregateInput
  }

  export type ParticipanteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: ParticipanteWhereInput | ParticipanteWhereInput[]
    OR?: ParticipanteWhereInput[]
    NOT?: ParticipanteWhereInput | ParticipanteWhereInput[]
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    bilhetes?: BilheteListRelationFilter
    pagamentos?: PagamentoListRelationFilter
    premios?: PremioParticipanteListRelationFilter
    vitorias?: SorteioListRelationFilter
  }, "id" | "userId">

  export type ParticipanteOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    _count?: ParticipanteCountOrderByAggregateInput
    _avg?: ParticipanteAvgOrderByAggregateInput
    _max?: ParticipanteMaxOrderByAggregateInput
    _min?: ParticipanteMinOrderByAggregateInput
    _sum?: ParticipanteSumOrderByAggregateInput
  }

  export type ParticipanteScalarWhereWithAggregatesInput = {
    AND?: ParticipanteScalarWhereWithAggregatesInput | ParticipanteScalarWhereWithAggregatesInput[]
    OR?: ParticipanteScalarWhereWithAggregatesInput[]
    NOT?: ParticipanteScalarWhereWithAggregatesInput | ParticipanteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Participante"> | number
    userId?: IntWithAggregatesFilter<"Participante"> | number
  }

  export type BilheteWhereInput = {
    AND?: BilheteWhereInput | BilheteWhereInput[]
    OR?: BilheteWhereInput[]
    NOT?: BilheteWhereInput | BilheteWhereInput[]
    id?: IntFilter<"Bilhete"> | number
    numero?: IntFilter<"Bilhete"> | number
    status?: EnumStatusBilFilter<"Bilhete"> | $Enums.StatusBil
    createdAt?: DateTimeFilter<"Bilhete"> | Date | string
    rifaId?: IntFilter<"Bilhete"> | number
    participanteId?: IntNullableFilter<"Bilhete"> | number | null
    rifa?: XOR<RifaScalarRelationFilter, RifaWhereInput>
    participante?: XOR<ParticipanteNullableScalarRelationFilter, ParticipanteWhereInput> | null
    pagamento?: XOR<PagamentoNullableScalarRelationFilter, PagamentoWhereInput> | null
    sorteios?: SorteioBilheteListRelationFilter
  }

  export type BilheteOrderByWithRelationInput = {
    id?: SortOrder
    numero?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    rifaId?: SortOrder
    participanteId?: SortOrderInput | SortOrder
    rifa?: RifaOrderByWithRelationInput
    participante?: ParticipanteOrderByWithRelationInput
    pagamento?: PagamentoOrderByWithRelationInput
    sorteios?: SorteioBilheteOrderByRelationAggregateInput
  }

  export type BilheteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BilheteWhereInput | BilheteWhereInput[]
    OR?: BilheteWhereInput[]
    NOT?: BilheteWhereInput | BilheteWhereInput[]
    numero?: IntFilter<"Bilhete"> | number
    status?: EnumStatusBilFilter<"Bilhete"> | $Enums.StatusBil
    createdAt?: DateTimeFilter<"Bilhete"> | Date | string
    rifaId?: IntFilter<"Bilhete"> | number
    participanteId?: IntNullableFilter<"Bilhete"> | number | null
    rifa?: XOR<RifaScalarRelationFilter, RifaWhereInput>
    participante?: XOR<ParticipanteNullableScalarRelationFilter, ParticipanteWhereInput> | null
    pagamento?: XOR<PagamentoNullableScalarRelationFilter, PagamentoWhereInput> | null
    sorteios?: SorteioBilheteListRelationFilter
  }, "id">

  export type BilheteOrderByWithAggregationInput = {
    id?: SortOrder
    numero?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    rifaId?: SortOrder
    participanteId?: SortOrderInput | SortOrder
    _count?: BilheteCountOrderByAggregateInput
    _avg?: BilheteAvgOrderByAggregateInput
    _max?: BilheteMaxOrderByAggregateInput
    _min?: BilheteMinOrderByAggregateInput
    _sum?: BilheteSumOrderByAggregateInput
  }

  export type BilheteScalarWhereWithAggregatesInput = {
    AND?: BilheteScalarWhereWithAggregatesInput | BilheteScalarWhereWithAggregatesInput[]
    OR?: BilheteScalarWhereWithAggregatesInput[]
    NOT?: BilheteScalarWhereWithAggregatesInput | BilheteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Bilhete"> | number
    numero?: IntWithAggregatesFilter<"Bilhete"> | number
    status?: EnumStatusBilWithAggregatesFilter<"Bilhete"> | $Enums.StatusBil
    createdAt?: DateTimeWithAggregatesFilter<"Bilhete"> | Date | string
    rifaId?: IntWithAggregatesFilter<"Bilhete"> | number
    participanteId?: IntNullableWithAggregatesFilter<"Bilhete"> | number | null
  }

  export type SorteioWhereInput = {
    AND?: SorteioWhereInput | SorteioWhereInput[]
    OR?: SorteioWhereInput[]
    NOT?: SorteioWhereInput | SorteioWhereInput[]
    id?: IntFilter<"Sorteio"> | number
    dataHora?: DateTimeFilter<"Sorteio"> | Date | string
    rifaId?: IntFilter<"Sorteio"> | number
    vencedorId?: IntNullableFilter<"Sorteio"> | number | null
    rifa?: XOR<RifaScalarRelationFilter, RifaWhereInput>
    vencedor?: XOR<ParticipanteNullableScalarRelationFilter, ParticipanteWhereInput> | null
    bilhetes?: SorteioBilheteListRelationFilter
  }

  export type SorteioOrderByWithRelationInput = {
    id?: SortOrder
    dataHora?: SortOrder
    rifaId?: SortOrder
    vencedorId?: SortOrderInput | SortOrder
    rifa?: RifaOrderByWithRelationInput
    vencedor?: ParticipanteOrderByWithRelationInput
    bilhetes?: SorteioBilheteOrderByRelationAggregateInput
  }

  export type SorteioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SorteioWhereInput | SorteioWhereInput[]
    OR?: SorteioWhereInput[]
    NOT?: SorteioWhereInput | SorteioWhereInput[]
    dataHora?: DateTimeFilter<"Sorteio"> | Date | string
    rifaId?: IntFilter<"Sorteio"> | number
    vencedorId?: IntNullableFilter<"Sorteio"> | number | null
    rifa?: XOR<RifaScalarRelationFilter, RifaWhereInput>
    vencedor?: XOR<ParticipanteNullableScalarRelationFilter, ParticipanteWhereInput> | null
    bilhetes?: SorteioBilheteListRelationFilter
  }, "id">

  export type SorteioOrderByWithAggregationInput = {
    id?: SortOrder
    dataHora?: SortOrder
    rifaId?: SortOrder
    vencedorId?: SortOrderInput | SortOrder
    _count?: SorteioCountOrderByAggregateInput
    _avg?: SorteioAvgOrderByAggregateInput
    _max?: SorteioMaxOrderByAggregateInput
    _min?: SorteioMinOrderByAggregateInput
    _sum?: SorteioSumOrderByAggregateInput
  }

  export type SorteioScalarWhereWithAggregatesInput = {
    AND?: SorteioScalarWhereWithAggregatesInput | SorteioScalarWhereWithAggregatesInput[]
    OR?: SorteioScalarWhereWithAggregatesInput[]
    NOT?: SorteioScalarWhereWithAggregatesInput | SorteioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Sorteio"> | number
    dataHora?: DateTimeWithAggregatesFilter<"Sorteio"> | Date | string
    rifaId?: IntWithAggregatesFilter<"Sorteio"> | number
    vencedorId?: IntNullableWithAggregatesFilter<"Sorteio"> | number | null
  }

  export type NotificacaoWhereInput = {
    AND?: NotificacaoWhereInput | NotificacaoWhereInput[]
    OR?: NotificacaoWhereInput[]
    NOT?: NotificacaoWhereInput | NotificacaoWhereInput[]
    id?: IntFilter<"Notificacao"> | number
    mensagem?: StringFilter<"Notificacao"> | string
    tipo?: StringFilter<"Notificacao"> | string
    status?: StringFilter<"Notificacao"> | string
    dataEnvio?: DateTimeFilter<"Notificacao"> | Date | string
    destinatarioId?: IntFilter<"Notificacao"> | number
    destinatario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type NotificacaoOrderByWithRelationInput = {
    id?: SortOrder
    mensagem?: SortOrder
    tipo?: SortOrder
    status?: SortOrder
    dataEnvio?: SortOrder
    destinatarioId?: SortOrder
    destinatario?: UsuarioOrderByWithRelationInput
  }

  export type NotificacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NotificacaoWhereInput | NotificacaoWhereInput[]
    OR?: NotificacaoWhereInput[]
    NOT?: NotificacaoWhereInput | NotificacaoWhereInput[]
    mensagem?: StringFilter<"Notificacao"> | string
    tipo?: StringFilter<"Notificacao"> | string
    status?: StringFilter<"Notificacao"> | string
    dataEnvio?: DateTimeFilter<"Notificacao"> | Date | string
    destinatarioId?: IntFilter<"Notificacao"> | number
    destinatario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id">

  export type NotificacaoOrderByWithAggregationInput = {
    id?: SortOrder
    mensagem?: SortOrder
    tipo?: SortOrder
    status?: SortOrder
    dataEnvio?: SortOrder
    destinatarioId?: SortOrder
    _count?: NotificacaoCountOrderByAggregateInput
    _avg?: NotificacaoAvgOrderByAggregateInput
    _max?: NotificacaoMaxOrderByAggregateInput
    _min?: NotificacaoMinOrderByAggregateInput
    _sum?: NotificacaoSumOrderByAggregateInput
  }

  export type NotificacaoScalarWhereWithAggregatesInput = {
    AND?: NotificacaoScalarWhereWithAggregatesInput | NotificacaoScalarWhereWithAggregatesInput[]
    OR?: NotificacaoScalarWhereWithAggregatesInput[]
    NOT?: NotificacaoScalarWhereWithAggregatesInput | NotificacaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Notificacao"> | number
    mensagem?: StringWithAggregatesFilter<"Notificacao"> | string
    tipo?: StringWithAggregatesFilter<"Notificacao"> | string
    status?: StringWithAggregatesFilter<"Notificacao"> | string
    dataEnvio?: DateTimeWithAggregatesFilter<"Notificacao"> | Date | string
    destinatarioId?: IntWithAggregatesFilter<"Notificacao"> | number
  }

  export type PagamentoWhereInput = {
    AND?: PagamentoWhereInput | PagamentoWhereInput[]
    OR?: PagamentoWhereInput[]
    NOT?: PagamentoWhereInput | PagamentoWhereInput[]
    id?: IntFilter<"Pagamento"> | number
    valor?: FloatFilter<"Pagamento"> | number
    status?: EnumStatusPagFilter<"Pagamento"> | $Enums.StatusPag
    metodo?: EnumMetodoPagFilter<"Pagamento"> | $Enums.MetodoPag
    dataProcessamento?: DateTimeFilter<"Pagamento"> | Date | string
    bilheteId?: IntFilter<"Pagamento"> | number
    participanteId?: IntFilter<"Pagamento"> | number
    bilhete?: XOR<BilheteScalarRelationFilter, BilheteWhereInput>
    participante?: XOR<ParticipanteScalarRelationFilter, ParticipanteWhereInput>
  }

  export type PagamentoOrderByWithRelationInput = {
    id?: SortOrder
    valor?: SortOrder
    status?: SortOrder
    metodo?: SortOrder
    dataProcessamento?: SortOrder
    bilheteId?: SortOrder
    participanteId?: SortOrder
    bilhete?: BilheteOrderByWithRelationInput
    participante?: ParticipanteOrderByWithRelationInput
  }

  export type PagamentoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    bilheteId?: number
    AND?: PagamentoWhereInput | PagamentoWhereInput[]
    OR?: PagamentoWhereInput[]
    NOT?: PagamentoWhereInput | PagamentoWhereInput[]
    valor?: FloatFilter<"Pagamento"> | number
    status?: EnumStatusPagFilter<"Pagamento"> | $Enums.StatusPag
    metodo?: EnumMetodoPagFilter<"Pagamento"> | $Enums.MetodoPag
    dataProcessamento?: DateTimeFilter<"Pagamento"> | Date | string
    participanteId?: IntFilter<"Pagamento"> | number
    bilhete?: XOR<BilheteScalarRelationFilter, BilheteWhereInput>
    participante?: XOR<ParticipanteScalarRelationFilter, ParticipanteWhereInput>
  }, "id" | "bilheteId">

  export type PagamentoOrderByWithAggregationInput = {
    id?: SortOrder
    valor?: SortOrder
    status?: SortOrder
    metodo?: SortOrder
    dataProcessamento?: SortOrder
    bilheteId?: SortOrder
    participanteId?: SortOrder
    _count?: PagamentoCountOrderByAggregateInput
    _avg?: PagamentoAvgOrderByAggregateInput
    _max?: PagamentoMaxOrderByAggregateInput
    _min?: PagamentoMinOrderByAggregateInput
    _sum?: PagamentoSumOrderByAggregateInput
  }

  export type PagamentoScalarWhereWithAggregatesInput = {
    AND?: PagamentoScalarWhereWithAggregatesInput | PagamentoScalarWhereWithAggregatesInput[]
    OR?: PagamentoScalarWhereWithAggregatesInput[]
    NOT?: PagamentoScalarWhereWithAggregatesInput | PagamentoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pagamento"> | number
    valor?: FloatWithAggregatesFilter<"Pagamento"> | number
    status?: EnumStatusPagWithAggregatesFilter<"Pagamento"> | $Enums.StatusPag
    metodo?: EnumMetodoPagWithAggregatesFilter<"Pagamento"> | $Enums.MetodoPag
    dataProcessamento?: DateTimeWithAggregatesFilter<"Pagamento"> | Date | string
    bilheteId?: IntWithAggregatesFilter<"Pagamento"> | number
    participanteId?: IntWithAggregatesFilter<"Pagamento"> | number
  }

  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nome?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    cpf?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Usuario"> | Date | string | null
    organizador?: XOR<OrganizadorNullableScalarRelationFilter, OrganizadorWhereInput> | null
    participante?: XOR<ParticipanteNullableScalarRelationFilter, ParticipanteWhereInput> | null
    notificacoes?: NotificacaoListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    senha?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    organizador?: OrganizadorOrderByWithRelationInput
    participante?: ParticipanteOrderByWithRelationInput
    notificacoes?: NotificacaoOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    cpf?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nome?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Usuario"> | Date | string | null
    organizador?: XOR<OrganizadorNullableScalarRelationFilter, OrganizadorWhereInput> | null
    participante?: XOR<ParticipanteNullableScalarRelationFilter, ParticipanteWhereInput> | null
    notificacoes?: NotificacaoListRelationFilter
  }, "id" | "email" | "cpf">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    senha?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    nome?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    cpf?: StringWithAggregatesFilter<"Usuario"> | string
    senha?: StringWithAggregatesFilter<"Usuario"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Usuario"> | Date | string | null
  }

  export type PremioParticipanteWhereInput = {
    AND?: PremioParticipanteWhereInput | PremioParticipanteWhereInput[]
    OR?: PremioParticipanteWhereInput[]
    NOT?: PremioParticipanteWhereInput | PremioParticipanteWhereInput[]
    premioId?: IntFilter<"PremioParticipante"> | number
    participanteId?: IntFilter<"PremioParticipante"> | number
    dataPremiacao?: DateTimeFilter<"PremioParticipante"> | Date | string
    premio?: XOR<PremioScalarRelationFilter, PremioWhereInput>
    participante?: XOR<ParticipanteScalarRelationFilter, ParticipanteWhereInput>
  }

  export type PremioParticipanteOrderByWithRelationInput = {
    premioId?: SortOrder
    participanteId?: SortOrder
    dataPremiacao?: SortOrder
    premio?: PremioOrderByWithRelationInput
    participante?: ParticipanteOrderByWithRelationInput
  }

  export type PremioParticipanteWhereUniqueInput = Prisma.AtLeast<{
    premioId_participanteId?: PremioParticipantePremioIdParticipanteIdCompoundUniqueInput
    AND?: PremioParticipanteWhereInput | PremioParticipanteWhereInput[]
    OR?: PremioParticipanteWhereInput[]
    NOT?: PremioParticipanteWhereInput | PremioParticipanteWhereInput[]
    premioId?: IntFilter<"PremioParticipante"> | number
    participanteId?: IntFilter<"PremioParticipante"> | number
    dataPremiacao?: DateTimeFilter<"PremioParticipante"> | Date | string
    premio?: XOR<PremioScalarRelationFilter, PremioWhereInput>
    participante?: XOR<ParticipanteScalarRelationFilter, ParticipanteWhereInput>
  }, "premioId_participanteId">

  export type PremioParticipanteOrderByWithAggregationInput = {
    premioId?: SortOrder
    participanteId?: SortOrder
    dataPremiacao?: SortOrder
    _count?: PremioParticipanteCountOrderByAggregateInput
    _avg?: PremioParticipanteAvgOrderByAggregateInput
    _max?: PremioParticipanteMaxOrderByAggregateInput
    _min?: PremioParticipanteMinOrderByAggregateInput
    _sum?: PremioParticipanteSumOrderByAggregateInput
  }

  export type PremioParticipanteScalarWhereWithAggregatesInput = {
    AND?: PremioParticipanteScalarWhereWithAggregatesInput | PremioParticipanteScalarWhereWithAggregatesInput[]
    OR?: PremioParticipanteScalarWhereWithAggregatesInput[]
    NOT?: PremioParticipanteScalarWhereWithAggregatesInput | PremioParticipanteScalarWhereWithAggregatesInput[]
    premioId?: IntWithAggregatesFilter<"PremioParticipante"> | number
    participanteId?: IntWithAggregatesFilter<"PremioParticipante"> | number
    dataPremiacao?: DateTimeWithAggregatesFilter<"PremioParticipante"> | Date | string
  }

  export type SorteioBilheteWhereInput = {
    AND?: SorteioBilheteWhereInput | SorteioBilheteWhereInput[]
    OR?: SorteioBilheteWhereInput[]
    NOT?: SorteioBilheteWhereInput | SorteioBilheteWhereInput[]
    sorteioId?: IntFilter<"SorteioBilhete"> | number
    bilheteId?: IntFilter<"SorteioBilhete"> | number
    dataInclusao?: DateTimeFilter<"SorteioBilhete"> | Date | string
    sorteio?: XOR<SorteioScalarRelationFilter, SorteioWhereInput>
    bilhete?: XOR<BilheteScalarRelationFilter, BilheteWhereInput>
  }

  export type SorteioBilheteOrderByWithRelationInput = {
    sorteioId?: SortOrder
    bilheteId?: SortOrder
    dataInclusao?: SortOrder
    sorteio?: SorteioOrderByWithRelationInput
    bilhete?: BilheteOrderByWithRelationInput
  }

  export type SorteioBilheteWhereUniqueInput = Prisma.AtLeast<{
    sorteioId_bilheteId?: SorteioBilheteSorteioIdBilheteIdCompoundUniqueInput
    AND?: SorteioBilheteWhereInput | SorteioBilheteWhereInput[]
    OR?: SorteioBilheteWhereInput[]
    NOT?: SorteioBilheteWhereInput | SorteioBilheteWhereInput[]
    sorteioId?: IntFilter<"SorteioBilhete"> | number
    bilheteId?: IntFilter<"SorteioBilhete"> | number
    dataInclusao?: DateTimeFilter<"SorteioBilhete"> | Date | string
    sorteio?: XOR<SorteioScalarRelationFilter, SorteioWhereInput>
    bilhete?: XOR<BilheteScalarRelationFilter, BilheteWhereInput>
  }, "sorteioId_bilheteId">

  export type SorteioBilheteOrderByWithAggregationInput = {
    sorteioId?: SortOrder
    bilheteId?: SortOrder
    dataInclusao?: SortOrder
    _count?: SorteioBilheteCountOrderByAggregateInput
    _avg?: SorteioBilheteAvgOrderByAggregateInput
    _max?: SorteioBilheteMaxOrderByAggregateInput
    _min?: SorteioBilheteMinOrderByAggregateInput
    _sum?: SorteioBilheteSumOrderByAggregateInput
  }

  export type SorteioBilheteScalarWhereWithAggregatesInput = {
    AND?: SorteioBilheteScalarWhereWithAggregatesInput | SorteioBilheteScalarWhereWithAggregatesInput[]
    OR?: SorteioBilheteScalarWhereWithAggregatesInput[]
    NOT?: SorteioBilheteScalarWhereWithAggregatesInput | SorteioBilheteScalarWhereWithAggregatesInput[]
    sorteioId?: IntWithAggregatesFilter<"SorteioBilhete"> | number
    bilheteId?: IntWithAggregatesFilter<"SorteioBilhete"> | number
    dataInclusao?: DateTimeWithAggregatesFilter<"SorteioBilhete"> | Date | string
  }

  export type LogAuditoriaCreateInput = {
    acao: string
    createdAt?: Date | string
    detalhes?: string | null
    rifa: RifaCreateNestedOneWithoutLogsInput
  }

  export type LogAuditoriaUncheckedCreateInput = {
    id?: number
    acao: string
    createdAt?: Date | string
    detalhes?: string | null
    rifaId: number
  }

  export type LogAuditoriaUpdateInput = {
    acao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    detalhes?: NullableStringFieldUpdateOperationsInput | string | null
    rifa?: RifaUpdateOneRequiredWithoutLogsNestedInput
  }

  export type LogAuditoriaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    acao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    detalhes?: NullableStringFieldUpdateOperationsInput | string | null
    rifaId?: IntFieldUpdateOperationsInput | number
  }

  export type LogAuditoriaCreateManyInput = {
    id?: number
    acao: string
    createdAt?: Date | string
    detalhes?: string | null
    rifaId: number
  }

  export type LogAuditoriaUpdateManyMutationInput = {
    acao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    detalhes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LogAuditoriaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    acao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    detalhes?: NullableStringFieldUpdateOperationsInput | string | null
    rifaId?: IntFieldUpdateOperationsInput | number
  }

  export type PremioCreateInput = {
    nome: string
    descricao: string
    imagem?: string | null
    rifa?: RifaCreateNestedOneWithoutPremioInput
    participantes?: PremioParticipanteCreateNestedManyWithoutPremioInput
  }

  export type PremioUncheckedCreateInput = {
    id?: number
    nome: string
    descricao: string
    imagem?: string | null
    rifaId?: number | null
    participantes?: PremioParticipanteUncheckedCreateNestedManyWithoutPremioInput
  }

  export type PremioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    rifa?: RifaUpdateOneWithoutPremioNestedInput
    participantes?: PremioParticipanteUpdateManyWithoutPremioNestedInput
  }

  export type PremioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    rifaId?: NullableIntFieldUpdateOperationsInput | number | null
    participantes?: PremioParticipanteUncheckedUpdateManyWithoutPremioNestedInput
  }

  export type PremioCreateManyInput = {
    id?: number
    nome: string
    descricao: string
    imagem?: string | null
    rifaId?: number | null
  }

  export type PremioUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PremioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    rifaId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RifaCreateInput = {
    titulo: string
    descricao: string
    precoBilhete: number
    quantidadeBilhetes: number
    dataSorteio?: Date | string | null
    status?: $Enums.StatusRifa
    createdAt?: Date | string
    organizador: OrganizadorCreateNestedOneWithoutRifasInput
    sorteios?: SorteioCreateNestedManyWithoutRifaInput
    bilhetes?: BilheteCreateNestedManyWithoutRifaInput
    premio?: PremioCreateNestedOneWithoutRifaInput
    logs?: LogAuditoriaCreateNestedManyWithoutRifaInput
  }

  export type RifaUncheckedCreateInput = {
    id?: number
    titulo: string
    descricao: string
    precoBilhete: number
    quantidadeBilhetes: number
    dataSorteio?: Date | string | null
    status?: $Enums.StatusRifa
    createdAt?: Date | string
    organizadorId: number
    sorteios?: SorteioUncheckedCreateNestedManyWithoutRifaInput
    bilhetes?: BilheteUncheckedCreateNestedManyWithoutRifaInput
    premio?: PremioUncheckedCreateNestedOneWithoutRifaInput
    logs?: LogAuditoriaUncheckedCreateNestedManyWithoutRifaInput
  }

  export type RifaUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    precoBilhete?: FloatFieldUpdateOperationsInput | number
    quantidadeBilhetes?: IntFieldUpdateOperationsInput | number
    dataSorteio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusRifaFieldUpdateOperationsInput | $Enums.StatusRifa
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizador?: OrganizadorUpdateOneRequiredWithoutRifasNestedInput
    sorteios?: SorteioUpdateManyWithoutRifaNestedInput
    bilhetes?: BilheteUpdateManyWithoutRifaNestedInput
    premio?: PremioUpdateOneWithoutRifaNestedInput
    logs?: LogAuditoriaUpdateManyWithoutRifaNestedInput
  }

  export type RifaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    precoBilhete?: FloatFieldUpdateOperationsInput | number
    quantidadeBilhetes?: IntFieldUpdateOperationsInput | number
    dataSorteio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusRifaFieldUpdateOperationsInput | $Enums.StatusRifa
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizadorId?: IntFieldUpdateOperationsInput | number
    sorteios?: SorteioUncheckedUpdateManyWithoutRifaNestedInput
    bilhetes?: BilheteUncheckedUpdateManyWithoutRifaNestedInput
    premio?: PremioUncheckedUpdateOneWithoutRifaNestedInput
    logs?: LogAuditoriaUncheckedUpdateManyWithoutRifaNestedInput
  }

  export type RifaCreateManyInput = {
    id?: number
    titulo: string
    descricao: string
    precoBilhete: number
    quantidadeBilhetes: number
    dataSorteio?: Date | string | null
    status?: $Enums.StatusRifa
    createdAt?: Date | string
    organizadorId: number
  }

  export type RifaUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    precoBilhete?: FloatFieldUpdateOperationsInput | number
    quantidadeBilhetes?: IntFieldUpdateOperationsInput | number
    dataSorteio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusRifaFieldUpdateOperationsInput | $Enums.StatusRifa
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RifaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    precoBilhete?: FloatFieldUpdateOperationsInput | number
    quantidadeBilhetes?: IntFieldUpdateOperationsInput | number
    dataSorteio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusRifaFieldUpdateOperationsInput | $Enums.StatusRifa
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizadorId?: IntFieldUpdateOperationsInput | number
  }

  export type OrganizadorCreateInput = {
    cnpj?: string | null
    usuario: UsuarioCreateNestedOneWithoutOrganizadorInput
    rifas?: RifaCreateNestedManyWithoutOrganizadorInput
  }

  export type OrganizadorUncheckedCreateInput = {
    id?: number
    cnpj?: string | null
    userId: number
    rifas?: RifaUncheckedCreateNestedManyWithoutOrganizadorInput
  }

  export type OrganizadorUpdateInput = {
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: UsuarioUpdateOneRequiredWithoutOrganizadorNestedInput
    rifas?: RifaUpdateManyWithoutOrganizadorNestedInput
  }

  export type OrganizadorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    rifas?: RifaUncheckedUpdateManyWithoutOrganizadorNestedInput
  }

  export type OrganizadorCreateManyInput = {
    id?: number
    cnpj?: string | null
    userId: number
  }

  export type OrganizadorUpdateManyMutationInput = {
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrganizadorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ParticipanteCreateInput = {
    usuario: UsuarioCreateNestedOneWithoutParticipanteInput
    bilhetes?: BilheteCreateNestedManyWithoutParticipanteInput
    pagamentos?: PagamentoCreateNestedManyWithoutParticipanteInput
    premios?: PremioParticipanteCreateNestedManyWithoutParticipanteInput
    vitorias?: SorteioCreateNestedManyWithoutVencedorInput
  }

  export type ParticipanteUncheckedCreateInput = {
    id?: number
    userId: number
    bilhetes?: BilheteUncheckedCreateNestedManyWithoutParticipanteInput
    pagamentos?: PagamentoUncheckedCreateNestedManyWithoutParticipanteInput
    premios?: PremioParticipanteUncheckedCreateNestedManyWithoutParticipanteInput
    vitorias?: SorteioUncheckedCreateNestedManyWithoutVencedorInput
  }

  export type ParticipanteUpdateInput = {
    usuario?: UsuarioUpdateOneRequiredWithoutParticipanteNestedInput
    bilhetes?: BilheteUpdateManyWithoutParticipanteNestedInput
    pagamentos?: PagamentoUpdateManyWithoutParticipanteNestedInput
    premios?: PremioParticipanteUpdateManyWithoutParticipanteNestedInput
    vitorias?: SorteioUpdateManyWithoutVencedorNestedInput
  }

  export type ParticipanteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    bilhetes?: BilheteUncheckedUpdateManyWithoutParticipanteNestedInput
    pagamentos?: PagamentoUncheckedUpdateManyWithoutParticipanteNestedInput
    premios?: PremioParticipanteUncheckedUpdateManyWithoutParticipanteNestedInput
    vitorias?: SorteioUncheckedUpdateManyWithoutVencedorNestedInput
  }

  export type ParticipanteCreateManyInput = {
    id?: number
    userId: number
  }

  export type ParticipanteUpdateManyMutationInput = {

  }

  export type ParticipanteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type BilheteCreateInput = {
    numero: number
    status?: $Enums.StatusBil
    createdAt?: Date | string
    rifa: RifaCreateNestedOneWithoutBilhetesInput
    participante?: ParticipanteCreateNestedOneWithoutBilhetesInput
    pagamento?: PagamentoCreateNestedOneWithoutBilheteInput
    sorteios?: SorteioBilheteCreateNestedManyWithoutBilheteInput
  }

  export type BilheteUncheckedCreateInput = {
    id?: number
    numero: number
    status?: $Enums.StatusBil
    createdAt?: Date | string
    rifaId: number
    participanteId?: number | null
    pagamento?: PagamentoUncheckedCreateNestedOneWithoutBilheteInput
    sorteios?: SorteioBilheteUncheckedCreateNestedManyWithoutBilheteInput
  }

  export type BilheteUpdateInput = {
    numero?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusBilFieldUpdateOperationsInput | $Enums.StatusBil
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rifa?: RifaUpdateOneRequiredWithoutBilhetesNestedInput
    participante?: ParticipanteUpdateOneWithoutBilhetesNestedInput
    pagamento?: PagamentoUpdateOneWithoutBilheteNestedInput
    sorteios?: SorteioBilheteUpdateManyWithoutBilheteNestedInput
  }

  export type BilheteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusBilFieldUpdateOperationsInput | $Enums.StatusBil
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rifaId?: IntFieldUpdateOperationsInput | number
    participanteId?: NullableIntFieldUpdateOperationsInput | number | null
    pagamento?: PagamentoUncheckedUpdateOneWithoutBilheteNestedInput
    sorteios?: SorteioBilheteUncheckedUpdateManyWithoutBilheteNestedInput
  }

  export type BilheteCreateManyInput = {
    id?: number
    numero: number
    status?: $Enums.StatusBil
    createdAt?: Date | string
    rifaId: number
    participanteId?: number | null
  }

  export type BilheteUpdateManyMutationInput = {
    numero?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusBilFieldUpdateOperationsInput | $Enums.StatusBil
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BilheteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusBilFieldUpdateOperationsInput | $Enums.StatusBil
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rifaId?: IntFieldUpdateOperationsInput | number
    participanteId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SorteioCreateInput = {
    dataHora?: Date | string
    rifa: RifaCreateNestedOneWithoutSorteiosInput
    vencedor?: ParticipanteCreateNestedOneWithoutVitoriasInput
    bilhetes?: SorteioBilheteCreateNestedManyWithoutSorteioInput
  }

  export type SorteioUncheckedCreateInput = {
    id?: number
    dataHora?: Date | string
    rifaId: number
    vencedorId?: number | null
    bilhetes?: SorteioBilheteUncheckedCreateNestedManyWithoutSorteioInput
  }

  export type SorteioUpdateInput = {
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    rifa?: RifaUpdateOneRequiredWithoutSorteiosNestedInput
    vencedor?: ParticipanteUpdateOneWithoutVitoriasNestedInput
    bilhetes?: SorteioBilheteUpdateManyWithoutSorteioNestedInput
  }

  export type SorteioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    rifaId?: IntFieldUpdateOperationsInput | number
    vencedorId?: NullableIntFieldUpdateOperationsInput | number | null
    bilhetes?: SorteioBilheteUncheckedUpdateManyWithoutSorteioNestedInput
  }

  export type SorteioCreateManyInput = {
    id?: number
    dataHora?: Date | string
    rifaId: number
    vencedorId?: number | null
  }

  export type SorteioUpdateManyMutationInput = {
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SorteioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    rifaId?: IntFieldUpdateOperationsInput | number
    vencedorId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type NotificacaoCreateInput = {
    mensagem: string
    tipo: string
    status?: string
    dataEnvio?: Date | string
    destinatario: UsuarioCreateNestedOneWithoutNotificacoesInput
  }

  export type NotificacaoUncheckedCreateInput = {
    id?: number
    mensagem: string
    tipo: string
    status?: string
    dataEnvio?: Date | string
    destinatarioId: number
  }

  export type NotificacaoUpdateInput = {
    mensagem?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    destinatario?: UsuarioUpdateOneRequiredWithoutNotificacoesNestedInput
  }

  export type NotificacaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    mensagem?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    destinatarioId?: IntFieldUpdateOperationsInput | number
  }

  export type NotificacaoCreateManyInput = {
    id?: number
    mensagem: string
    tipo: string
    status?: string
    dataEnvio?: Date | string
    destinatarioId: number
  }

  export type NotificacaoUpdateManyMutationInput = {
    mensagem?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificacaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    mensagem?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    destinatarioId?: IntFieldUpdateOperationsInput | number
  }

  export type PagamentoCreateInput = {
    valor: number
    status?: $Enums.StatusPag
    metodo: $Enums.MetodoPag
    dataProcessamento?: Date | string
    bilhete: BilheteCreateNestedOneWithoutPagamentoInput
    participante: ParticipanteCreateNestedOneWithoutPagamentosInput
  }

  export type PagamentoUncheckedCreateInput = {
    id?: number
    valor: number
    status?: $Enums.StatusPag
    metodo: $Enums.MetodoPag
    dataProcessamento?: Date | string
    bilheteId: number
    participanteId: number
  }

  export type PagamentoUpdateInput = {
    valor?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusPagFieldUpdateOperationsInput | $Enums.StatusPag
    metodo?: EnumMetodoPagFieldUpdateOperationsInput | $Enums.MetodoPag
    dataProcessamento?: DateTimeFieldUpdateOperationsInput | Date | string
    bilhete?: BilheteUpdateOneRequiredWithoutPagamentoNestedInput
    participante?: ParticipanteUpdateOneRequiredWithoutPagamentosNestedInput
  }

  export type PagamentoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    valor?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusPagFieldUpdateOperationsInput | $Enums.StatusPag
    metodo?: EnumMetodoPagFieldUpdateOperationsInput | $Enums.MetodoPag
    dataProcessamento?: DateTimeFieldUpdateOperationsInput | Date | string
    bilheteId?: IntFieldUpdateOperationsInput | number
    participanteId?: IntFieldUpdateOperationsInput | number
  }

  export type PagamentoCreateManyInput = {
    id?: number
    valor: number
    status?: $Enums.StatusPag
    metodo: $Enums.MetodoPag
    dataProcessamento?: Date | string
    bilheteId: number
    participanteId: number
  }

  export type PagamentoUpdateManyMutationInput = {
    valor?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusPagFieldUpdateOperationsInput | $Enums.StatusPag
    metodo?: EnumMetodoPagFieldUpdateOperationsInput | $Enums.MetodoPag
    dataProcessamento?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PagamentoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    valor?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusPagFieldUpdateOperationsInput | $Enums.StatusPag
    metodo?: EnumMetodoPagFieldUpdateOperationsInput | $Enums.MetodoPag
    dataProcessamento?: DateTimeFieldUpdateOperationsInput | Date | string
    bilheteId?: IntFieldUpdateOperationsInput | number
    participanteId?: IntFieldUpdateOperationsInput | number
  }

  export type UsuarioCreateInput = {
    nome: string
    email: string
    cpf: string
    senha: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    organizador?: OrganizadorCreateNestedOneWithoutUsuarioInput
    participante?: ParticipanteCreateNestedOneWithoutUsuarioInput
    notificacoes?: NotificacaoCreateNestedManyWithoutDestinatarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nome: string
    email: string
    cpf: string
    senha: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    organizador?: OrganizadorUncheckedCreateNestedOneWithoutUsuarioInput
    participante?: ParticipanteUncheckedCreateNestedOneWithoutUsuarioInput
    notificacoes?: NotificacaoUncheckedCreateNestedManyWithoutDestinatarioInput
  }

  export type UsuarioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    organizador?: OrganizadorUpdateOneWithoutUsuarioNestedInput
    participante?: ParticipanteUpdateOneWithoutUsuarioNestedInput
    notificacoes?: NotificacaoUpdateManyWithoutDestinatarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    organizador?: OrganizadorUncheckedUpdateOneWithoutUsuarioNestedInput
    participante?: ParticipanteUncheckedUpdateOneWithoutUsuarioNestedInput
    notificacoes?: NotificacaoUncheckedUpdateManyWithoutDestinatarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    nome: string
    email: string
    cpf: string
    senha: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type UsuarioUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PremioParticipanteCreateInput = {
    dataPremiacao?: Date | string
    premio: PremioCreateNestedOneWithoutParticipantesInput
    participante: ParticipanteCreateNestedOneWithoutPremiosInput
  }

  export type PremioParticipanteUncheckedCreateInput = {
    premioId: number
    participanteId: number
    dataPremiacao?: Date | string
  }

  export type PremioParticipanteUpdateInput = {
    dataPremiacao?: DateTimeFieldUpdateOperationsInput | Date | string
    premio?: PremioUpdateOneRequiredWithoutParticipantesNestedInput
    participante?: ParticipanteUpdateOneRequiredWithoutPremiosNestedInput
  }

  export type PremioParticipanteUncheckedUpdateInput = {
    premioId?: IntFieldUpdateOperationsInput | number
    participanteId?: IntFieldUpdateOperationsInput | number
    dataPremiacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PremioParticipanteCreateManyInput = {
    premioId: number
    participanteId: number
    dataPremiacao?: Date | string
  }

  export type PremioParticipanteUpdateManyMutationInput = {
    dataPremiacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PremioParticipanteUncheckedUpdateManyInput = {
    premioId?: IntFieldUpdateOperationsInput | number
    participanteId?: IntFieldUpdateOperationsInput | number
    dataPremiacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SorteioBilheteCreateInput = {
    dataInclusao?: Date | string
    sorteio: SorteioCreateNestedOneWithoutBilhetesInput
    bilhete: BilheteCreateNestedOneWithoutSorteiosInput
  }

  export type SorteioBilheteUncheckedCreateInput = {
    sorteioId: number
    bilheteId: number
    dataInclusao?: Date | string
  }

  export type SorteioBilheteUpdateInput = {
    dataInclusao?: DateTimeFieldUpdateOperationsInput | Date | string
    sorteio?: SorteioUpdateOneRequiredWithoutBilhetesNestedInput
    bilhete?: BilheteUpdateOneRequiredWithoutSorteiosNestedInput
  }

  export type SorteioBilheteUncheckedUpdateInput = {
    sorteioId?: IntFieldUpdateOperationsInput | number
    bilheteId?: IntFieldUpdateOperationsInput | number
    dataInclusao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SorteioBilheteCreateManyInput = {
    sorteioId: number
    bilheteId: number
    dataInclusao?: Date | string
  }

  export type SorteioBilheteUpdateManyMutationInput = {
    dataInclusao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SorteioBilheteUncheckedUpdateManyInput = {
    sorteioId?: IntFieldUpdateOperationsInput | number
    bilheteId?: IntFieldUpdateOperationsInput | number
    dataInclusao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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
  }

  export type RifaScalarRelationFilter = {
    is?: RifaWhereInput
    isNot?: RifaWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LogAuditoriaCountOrderByAggregateInput = {
    id?: SortOrder
    acao?: SortOrder
    createdAt?: SortOrder
    detalhes?: SortOrder
    rifaId?: SortOrder
  }

  export type LogAuditoriaAvgOrderByAggregateInput = {
    id?: SortOrder
    rifaId?: SortOrder
  }

  export type LogAuditoriaMaxOrderByAggregateInput = {
    id?: SortOrder
    acao?: SortOrder
    createdAt?: SortOrder
    detalhes?: SortOrder
    rifaId?: SortOrder
  }

  export type LogAuditoriaMinOrderByAggregateInput = {
    id?: SortOrder
    acao?: SortOrder
    createdAt?: SortOrder
    detalhes?: SortOrder
    rifaId?: SortOrder
  }

  export type LogAuditoriaSumOrderByAggregateInput = {
    id?: SortOrder
    rifaId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type RifaNullableScalarRelationFilter = {
    is?: RifaWhereInput | null
    isNot?: RifaWhereInput | null
  }

  export type PremioParticipanteListRelationFilter = {
    every?: PremioParticipanteWhereInput
    some?: PremioParticipanteWhereInput
    none?: PremioParticipanteWhereInput
  }

  export type PremioParticipanteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PremioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    imagem?: SortOrder
    rifaId?: SortOrder
  }

  export type PremioAvgOrderByAggregateInput = {
    id?: SortOrder
    rifaId?: SortOrder
  }

  export type PremioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    imagem?: SortOrder
    rifaId?: SortOrder
  }

  export type PremioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    imagem?: SortOrder
    rifaId?: SortOrder
  }

  export type PremioSumOrderByAggregateInput = {
    id?: SortOrder
    rifaId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumStatusRifaFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusRifa | EnumStatusRifaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusRifa[] | ListEnumStatusRifaFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusRifa[] | ListEnumStatusRifaFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusRifaFilter<$PrismaModel> | $Enums.StatusRifa
  }

  export type OrganizadorScalarRelationFilter = {
    is?: OrganizadorWhereInput
    isNot?: OrganizadorWhereInput
  }

  export type SorteioListRelationFilter = {
    every?: SorteioWhereInput
    some?: SorteioWhereInput
    none?: SorteioWhereInput
  }

  export type BilheteListRelationFilter = {
    every?: BilheteWhereInput
    some?: BilheteWhereInput
    none?: BilheteWhereInput
  }

  export type PremioNullableScalarRelationFilter = {
    is?: PremioWhereInput | null
    isNot?: PremioWhereInput | null
  }

  export type LogAuditoriaListRelationFilter = {
    every?: LogAuditoriaWhereInput
    some?: LogAuditoriaWhereInput
    none?: LogAuditoriaWhereInput
  }

  export type SorteioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BilheteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LogAuditoriaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RifaCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    precoBilhete?: SortOrder
    quantidadeBilhetes?: SortOrder
    dataSorteio?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    organizadorId?: SortOrder
  }

  export type RifaAvgOrderByAggregateInput = {
    id?: SortOrder
    precoBilhete?: SortOrder
    quantidadeBilhetes?: SortOrder
    organizadorId?: SortOrder
  }

  export type RifaMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    precoBilhete?: SortOrder
    quantidadeBilhetes?: SortOrder
    dataSorteio?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    organizadorId?: SortOrder
  }

  export type RifaMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    precoBilhete?: SortOrder
    quantidadeBilhetes?: SortOrder
    dataSorteio?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    organizadorId?: SortOrder
  }

  export type RifaSumOrderByAggregateInput = {
    id?: SortOrder
    precoBilhete?: SortOrder
    quantidadeBilhetes?: SortOrder
    organizadorId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumStatusRifaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusRifa | EnumStatusRifaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusRifa[] | ListEnumStatusRifaFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusRifa[] | ListEnumStatusRifaFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusRifaWithAggregatesFilter<$PrismaModel> | $Enums.StatusRifa
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusRifaFilter<$PrismaModel>
    _max?: NestedEnumStatusRifaFilter<$PrismaModel>
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type RifaListRelationFilter = {
    every?: RifaWhereInput
    some?: RifaWhereInput
    none?: RifaWhereInput
  }

  export type RifaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganizadorCountOrderByAggregateInput = {
    id?: SortOrder
    cnpj?: SortOrder
    userId?: SortOrder
  }

  export type OrganizadorAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type OrganizadorMaxOrderByAggregateInput = {
    id?: SortOrder
    cnpj?: SortOrder
    userId?: SortOrder
  }

  export type OrganizadorMinOrderByAggregateInput = {
    id?: SortOrder
    cnpj?: SortOrder
    userId?: SortOrder
  }

  export type OrganizadorSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type PagamentoListRelationFilter = {
    every?: PagamentoWhereInput
    some?: PagamentoWhereInput
    none?: PagamentoWhereInput
  }

  export type PagamentoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParticipanteCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ParticipanteAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ParticipanteMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ParticipanteMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ParticipanteSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumStatusBilFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusBil | EnumStatusBilFieldRefInput<$PrismaModel>
    in?: $Enums.StatusBil[] | ListEnumStatusBilFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusBil[] | ListEnumStatusBilFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusBilFilter<$PrismaModel> | $Enums.StatusBil
  }

  export type ParticipanteNullableScalarRelationFilter = {
    is?: ParticipanteWhereInput | null
    isNot?: ParticipanteWhereInput | null
  }

  export type PagamentoNullableScalarRelationFilter = {
    is?: PagamentoWhereInput | null
    isNot?: PagamentoWhereInput | null
  }

  export type SorteioBilheteListRelationFilter = {
    every?: SorteioBilheteWhereInput
    some?: SorteioBilheteWhereInput
    none?: SorteioBilheteWhereInput
  }

  export type SorteioBilheteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BilheteCountOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    rifaId?: SortOrder
    participanteId?: SortOrder
  }

  export type BilheteAvgOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    rifaId?: SortOrder
    participanteId?: SortOrder
  }

  export type BilheteMaxOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    rifaId?: SortOrder
    participanteId?: SortOrder
  }

  export type BilheteMinOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    rifaId?: SortOrder
    participanteId?: SortOrder
  }

  export type BilheteSumOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    rifaId?: SortOrder
    participanteId?: SortOrder
  }

  export type EnumStatusBilWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusBil | EnumStatusBilFieldRefInput<$PrismaModel>
    in?: $Enums.StatusBil[] | ListEnumStatusBilFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusBil[] | ListEnumStatusBilFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusBilWithAggregatesFilter<$PrismaModel> | $Enums.StatusBil
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusBilFilter<$PrismaModel>
    _max?: NestedEnumStatusBilFilter<$PrismaModel>
  }

  export type SorteioCountOrderByAggregateInput = {
    id?: SortOrder
    dataHora?: SortOrder
    rifaId?: SortOrder
    vencedorId?: SortOrder
  }

  export type SorteioAvgOrderByAggregateInput = {
    id?: SortOrder
    rifaId?: SortOrder
    vencedorId?: SortOrder
  }

  export type SorteioMaxOrderByAggregateInput = {
    id?: SortOrder
    dataHora?: SortOrder
    rifaId?: SortOrder
    vencedorId?: SortOrder
  }

  export type SorteioMinOrderByAggregateInput = {
    id?: SortOrder
    dataHora?: SortOrder
    rifaId?: SortOrder
    vencedorId?: SortOrder
  }

  export type SorteioSumOrderByAggregateInput = {
    id?: SortOrder
    rifaId?: SortOrder
    vencedorId?: SortOrder
  }

  export type NotificacaoCountOrderByAggregateInput = {
    id?: SortOrder
    mensagem?: SortOrder
    tipo?: SortOrder
    status?: SortOrder
    dataEnvio?: SortOrder
    destinatarioId?: SortOrder
  }

  export type NotificacaoAvgOrderByAggregateInput = {
    id?: SortOrder
    destinatarioId?: SortOrder
  }

  export type NotificacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    mensagem?: SortOrder
    tipo?: SortOrder
    status?: SortOrder
    dataEnvio?: SortOrder
    destinatarioId?: SortOrder
  }

  export type NotificacaoMinOrderByAggregateInput = {
    id?: SortOrder
    mensagem?: SortOrder
    tipo?: SortOrder
    status?: SortOrder
    dataEnvio?: SortOrder
    destinatarioId?: SortOrder
  }

  export type NotificacaoSumOrderByAggregateInput = {
    id?: SortOrder
    destinatarioId?: SortOrder
  }

  export type EnumStatusPagFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPag | EnumStatusPagFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPag[] | ListEnumStatusPagFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPag[] | ListEnumStatusPagFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPagFilter<$PrismaModel> | $Enums.StatusPag
  }

  export type EnumMetodoPagFilter<$PrismaModel = never> = {
    equals?: $Enums.MetodoPag | EnumMetodoPagFieldRefInput<$PrismaModel>
    in?: $Enums.MetodoPag[] | ListEnumMetodoPagFieldRefInput<$PrismaModel>
    notIn?: $Enums.MetodoPag[] | ListEnumMetodoPagFieldRefInput<$PrismaModel>
    not?: NestedEnumMetodoPagFilter<$PrismaModel> | $Enums.MetodoPag
  }

  export type BilheteScalarRelationFilter = {
    is?: BilheteWhereInput
    isNot?: BilheteWhereInput
  }

  export type ParticipanteScalarRelationFilter = {
    is?: ParticipanteWhereInput
    isNot?: ParticipanteWhereInput
  }

  export type PagamentoCountOrderByAggregateInput = {
    id?: SortOrder
    valor?: SortOrder
    status?: SortOrder
    metodo?: SortOrder
    dataProcessamento?: SortOrder
    bilheteId?: SortOrder
    participanteId?: SortOrder
  }

  export type PagamentoAvgOrderByAggregateInput = {
    id?: SortOrder
    valor?: SortOrder
    bilheteId?: SortOrder
    participanteId?: SortOrder
  }

  export type PagamentoMaxOrderByAggregateInput = {
    id?: SortOrder
    valor?: SortOrder
    status?: SortOrder
    metodo?: SortOrder
    dataProcessamento?: SortOrder
    bilheteId?: SortOrder
    participanteId?: SortOrder
  }

  export type PagamentoMinOrderByAggregateInput = {
    id?: SortOrder
    valor?: SortOrder
    status?: SortOrder
    metodo?: SortOrder
    dataProcessamento?: SortOrder
    bilheteId?: SortOrder
    participanteId?: SortOrder
  }

  export type PagamentoSumOrderByAggregateInput = {
    id?: SortOrder
    valor?: SortOrder
    bilheteId?: SortOrder
    participanteId?: SortOrder
  }

  export type EnumStatusPagWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPag | EnumStatusPagFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPag[] | ListEnumStatusPagFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPag[] | ListEnumStatusPagFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPagWithAggregatesFilter<$PrismaModel> | $Enums.StatusPag
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusPagFilter<$PrismaModel>
    _max?: NestedEnumStatusPagFilter<$PrismaModel>
  }

  export type EnumMetodoPagWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MetodoPag | EnumMetodoPagFieldRefInput<$PrismaModel>
    in?: $Enums.MetodoPag[] | ListEnumMetodoPagFieldRefInput<$PrismaModel>
    notIn?: $Enums.MetodoPag[] | ListEnumMetodoPagFieldRefInput<$PrismaModel>
    not?: NestedEnumMetodoPagWithAggregatesFilter<$PrismaModel> | $Enums.MetodoPag
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMetodoPagFilter<$PrismaModel>
    _max?: NestedEnumMetodoPagFilter<$PrismaModel>
  }

  export type OrganizadorNullableScalarRelationFilter = {
    is?: OrganizadorWhereInput | null
    isNot?: OrganizadorWhereInput | null
  }

  export type NotificacaoListRelationFilter = {
    every?: NotificacaoWhereInput
    some?: NotificacaoWhereInput
    none?: NotificacaoWhereInput
  }

  export type NotificacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    senha?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    senha?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    senha?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PremioScalarRelationFilter = {
    is?: PremioWhereInput
    isNot?: PremioWhereInput
  }

  export type PremioParticipantePremioIdParticipanteIdCompoundUniqueInput = {
    premioId: number
    participanteId: number
  }

  export type PremioParticipanteCountOrderByAggregateInput = {
    premioId?: SortOrder
    participanteId?: SortOrder
    dataPremiacao?: SortOrder
  }

  export type PremioParticipanteAvgOrderByAggregateInput = {
    premioId?: SortOrder
    participanteId?: SortOrder
  }

  export type PremioParticipanteMaxOrderByAggregateInput = {
    premioId?: SortOrder
    participanteId?: SortOrder
    dataPremiacao?: SortOrder
  }

  export type PremioParticipanteMinOrderByAggregateInput = {
    premioId?: SortOrder
    participanteId?: SortOrder
    dataPremiacao?: SortOrder
  }

  export type PremioParticipanteSumOrderByAggregateInput = {
    premioId?: SortOrder
    participanteId?: SortOrder
  }

  export type SorteioScalarRelationFilter = {
    is?: SorteioWhereInput
    isNot?: SorteioWhereInput
  }

  export type SorteioBilheteSorteioIdBilheteIdCompoundUniqueInput = {
    sorteioId: number
    bilheteId: number
  }

  export type SorteioBilheteCountOrderByAggregateInput = {
    sorteioId?: SortOrder
    bilheteId?: SortOrder
    dataInclusao?: SortOrder
  }

  export type SorteioBilheteAvgOrderByAggregateInput = {
    sorteioId?: SortOrder
    bilheteId?: SortOrder
  }

  export type SorteioBilheteMaxOrderByAggregateInput = {
    sorteioId?: SortOrder
    bilheteId?: SortOrder
    dataInclusao?: SortOrder
  }

  export type SorteioBilheteMinOrderByAggregateInput = {
    sorteioId?: SortOrder
    bilheteId?: SortOrder
    dataInclusao?: SortOrder
  }

  export type SorteioBilheteSumOrderByAggregateInput = {
    sorteioId?: SortOrder
    bilheteId?: SortOrder
  }

  export type RifaCreateNestedOneWithoutLogsInput = {
    create?: XOR<RifaCreateWithoutLogsInput, RifaUncheckedCreateWithoutLogsInput>
    connectOrCreate?: RifaCreateOrConnectWithoutLogsInput
    connect?: RifaWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type RifaUpdateOneRequiredWithoutLogsNestedInput = {
    create?: XOR<RifaCreateWithoutLogsInput, RifaUncheckedCreateWithoutLogsInput>
    connectOrCreate?: RifaCreateOrConnectWithoutLogsInput
    upsert?: RifaUpsertWithoutLogsInput
    connect?: RifaWhereUniqueInput
    update?: XOR<XOR<RifaUpdateToOneWithWhereWithoutLogsInput, RifaUpdateWithoutLogsInput>, RifaUncheckedUpdateWithoutLogsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RifaCreateNestedOneWithoutPremioInput = {
    create?: XOR<RifaCreateWithoutPremioInput, RifaUncheckedCreateWithoutPremioInput>
    connectOrCreate?: RifaCreateOrConnectWithoutPremioInput
    connect?: RifaWhereUniqueInput
  }

  export type PremioParticipanteCreateNestedManyWithoutPremioInput = {
    create?: XOR<PremioParticipanteCreateWithoutPremioInput, PremioParticipanteUncheckedCreateWithoutPremioInput> | PremioParticipanteCreateWithoutPremioInput[] | PremioParticipanteUncheckedCreateWithoutPremioInput[]
    connectOrCreate?: PremioParticipanteCreateOrConnectWithoutPremioInput | PremioParticipanteCreateOrConnectWithoutPremioInput[]
    createMany?: PremioParticipanteCreateManyPremioInputEnvelope
    connect?: PremioParticipanteWhereUniqueInput | PremioParticipanteWhereUniqueInput[]
  }

  export type PremioParticipanteUncheckedCreateNestedManyWithoutPremioInput = {
    create?: XOR<PremioParticipanteCreateWithoutPremioInput, PremioParticipanteUncheckedCreateWithoutPremioInput> | PremioParticipanteCreateWithoutPremioInput[] | PremioParticipanteUncheckedCreateWithoutPremioInput[]
    connectOrCreate?: PremioParticipanteCreateOrConnectWithoutPremioInput | PremioParticipanteCreateOrConnectWithoutPremioInput[]
    createMany?: PremioParticipanteCreateManyPremioInputEnvelope
    connect?: PremioParticipanteWhereUniqueInput | PremioParticipanteWhereUniqueInput[]
  }

  export type RifaUpdateOneWithoutPremioNestedInput = {
    create?: XOR<RifaCreateWithoutPremioInput, RifaUncheckedCreateWithoutPremioInput>
    connectOrCreate?: RifaCreateOrConnectWithoutPremioInput
    upsert?: RifaUpsertWithoutPremioInput
    disconnect?: RifaWhereInput | boolean
    delete?: RifaWhereInput | boolean
    connect?: RifaWhereUniqueInput
    update?: XOR<XOR<RifaUpdateToOneWithWhereWithoutPremioInput, RifaUpdateWithoutPremioInput>, RifaUncheckedUpdateWithoutPremioInput>
  }

  export type PremioParticipanteUpdateManyWithoutPremioNestedInput = {
    create?: XOR<PremioParticipanteCreateWithoutPremioInput, PremioParticipanteUncheckedCreateWithoutPremioInput> | PremioParticipanteCreateWithoutPremioInput[] | PremioParticipanteUncheckedCreateWithoutPremioInput[]
    connectOrCreate?: PremioParticipanteCreateOrConnectWithoutPremioInput | PremioParticipanteCreateOrConnectWithoutPremioInput[]
    upsert?: PremioParticipanteUpsertWithWhereUniqueWithoutPremioInput | PremioParticipanteUpsertWithWhereUniqueWithoutPremioInput[]
    createMany?: PremioParticipanteCreateManyPremioInputEnvelope
    set?: PremioParticipanteWhereUniqueInput | PremioParticipanteWhereUniqueInput[]
    disconnect?: PremioParticipanteWhereUniqueInput | PremioParticipanteWhereUniqueInput[]
    delete?: PremioParticipanteWhereUniqueInput | PremioParticipanteWhereUniqueInput[]
    connect?: PremioParticipanteWhereUniqueInput | PremioParticipanteWhereUniqueInput[]
    update?: PremioParticipanteUpdateWithWhereUniqueWithoutPremioInput | PremioParticipanteUpdateWithWhereUniqueWithoutPremioInput[]
    updateMany?: PremioParticipanteUpdateManyWithWhereWithoutPremioInput | PremioParticipanteUpdateManyWithWhereWithoutPremioInput[]
    deleteMany?: PremioParticipanteScalarWhereInput | PremioParticipanteScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PremioParticipanteUncheckedUpdateManyWithoutPremioNestedInput = {
    create?: XOR<PremioParticipanteCreateWithoutPremioInput, PremioParticipanteUncheckedCreateWithoutPremioInput> | PremioParticipanteCreateWithoutPremioInput[] | PremioParticipanteUncheckedCreateWithoutPremioInput[]
    connectOrCreate?: PremioParticipanteCreateOrConnectWithoutPremioInput | PremioParticipanteCreateOrConnectWithoutPremioInput[]
    upsert?: PremioParticipanteUpsertWithWhereUniqueWithoutPremioInput | PremioParticipanteUpsertWithWhereUniqueWithoutPremioInput[]
    createMany?: PremioParticipanteCreateManyPremioInputEnvelope
    set?: PremioParticipanteWhereUniqueInput | PremioParticipanteWhereUniqueInput[]
    disconnect?: PremioParticipanteWhereUniqueInput | PremioParticipanteWhereUniqueInput[]
    delete?: PremioParticipanteWhereUniqueInput | PremioParticipanteWhereUniqueInput[]
    connect?: PremioParticipanteWhereUniqueInput | PremioParticipanteWhereUniqueInput[]
    update?: PremioParticipanteUpdateWithWhereUniqueWithoutPremioInput | PremioParticipanteUpdateWithWhereUniqueWithoutPremioInput[]
    updateMany?: PremioParticipanteUpdateManyWithWhereWithoutPremioInput | PremioParticipanteUpdateManyWithWhereWithoutPremioInput[]
    deleteMany?: PremioParticipanteScalarWhereInput | PremioParticipanteScalarWhereInput[]
  }

  export type OrganizadorCreateNestedOneWithoutRifasInput = {
    create?: XOR<OrganizadorCreateWithoutRifasInput, OrganizadorUncheckedCreateWithoutRifasInput>
    connectOrCreate?: OrganizadorCreateOrConnectWithoutRifasInput
    connect?: OrganizadorWhereUniqueInput
  }

  export type SorteioCreateNestedManyWithoutRifaInput = {
    create?: XOR<SorteioCreateWithoutRifaInput, SorteioUncheckedCreateWithoutRifaInput> | SorteioCreateWithoutRifaInput[] | SorteioUncheckedCreateWithoutRifaInput[]
    connectOrCreate?: SorteioCreateOrConnectWithoutRifaInput | SorteioCreateOrConnectWithoutRifaInput[]
    createMany?: SorteioCreateManyRifaInputEnvelope
    connect?: SorteioWhereUniqueInput | SorteioWhereUniqueInput[]
  }

  export type BilheteCreateNestedManyWithoutRifaInput = {
    create?: XOR<BilheteCreateWithoutRifaInput, BilheteUncheckedCreateWithoutRifaInput> | BilheteCreateWithoutRifaInput[] | BilheteUncheckedCreateWithoutRifaInput[]
    connectOrCreate?: BilheteCreateOrConnectWithoutRifaInput | BilheteCreateOrConnectWithoutRifaInput[]
    createMany?: BilheteCreateManyRifaInputEnvelope
    connect?: BilheteWhereUniqueInput | BilheteWhereUniqueInput[]
  }

  export type PremioCreateNestedOneWithoutRifaInput = {
    create?: XOR<PremioCreateWithoutRifaInput, PremioUncheckedCreateWithoutRifaInput>
    connectOrCreate?: PremioCreateOrConnectWithoutRifaInput
    connect?: PremioWhereUniqueInput
  }

  export type LogAuditoriaCreateNestedManyWithoutRifaInput = {
    create?: XOR<LogAuditoriaCreateWithoutRifaInput, LogAuditoriaUncheckedCreateWithoutRifaInput> | LogAuditoriaCreateWithoutRifaInput[] | LogAuditoriaUncheckedCreateWithoutRifaInput[]
    connectOrCreate?: LogAuditoriaCreateOrConnectWithoutRifaInput | LogAuditoriaCreateOrConnectWithoutRifaInput[]
    createMany?: LogAuditoriaCreateManyRifaInputEnvelope
    connect?: LogAuditoriaWhereUniqueInput | LogAuditoriaWhereUniqueInput[]
  }

  export type SorteioUncheckedCreateNestedManyWithoutRifaInput = {
    create?: XOR<SorteioCreateWithoutRifaInput, SorteioUncheckedCreateWithoutRifaInput> | SorteioCreateWithoutRifaInput[] | SorteioUncheckedCreateWithoutRifaInput[]
    connectOrCreate?: SorteioCreateOrConnectWithoutRifaInput | SorteioCreateOrConnectWithoutRifaInput[]
    createMany?: SorteioCreateManyRifaInputEnvelope
    connect?: SorteioWhereUniqueInput | SorteioWhereUniqueInput[]
  }

  export type BilheteUncheckedCreateNestedManyWithoutRifaInput = {
    create?: XOR<BilheteCreateWithoutRifaInput, BilheteUncheckedCreateWithoutRifaInput> | BilheteCreateWithoutRifaInput[] | BilheteUncheckedCreateWithoutRifaInput[]
    connectOrCreate?: BilheteCreateOrConnectWithoutRifaInput | BilheteCreateOrConnectWithoutRifaInput[]
    createMany?: BilheteCreateManyRifaInputEnvelope
    connect?: BilheteWhereUniqueInput | BilheteWhereUniqueInput[]
  }

  export type PremioUncheckedCreateNestedOneWithoutRifaInput = {
    create?: XOR<PremioCreateWithoutRifaInput, PremioUncheckedCreateWithoutRifaInput>
    connectOrCreate?: PremioCreateOrConnectWithoutRifaInput
    connect?: PremioWhereUniqueInput
  }

  export type LogAuditoriaUncheckedCreateNestedManyWithoutRifaInput = {
    create?: XOR<LogAuditoriaCreateWithoutRifaInput, LogAuditoriaUncheckedCreateWithoutRifaInput> | LogAuditoriaCreateWithoutRifaInput[] | LogAuditoriaUncheckedCreateWithoutRifaInput[]
    connectOrCreate?: LogAuditoriaCreateOrConnectWithoutRifaInput | LogAuditoriaCreateOrConnectWithoutRifaInput[]
    createMany?: LogAuditoriaCreateManyRifaInputEnvelope
    connect?: LogAuditoriaWhereUniqueInput | LogAuditoriaWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumStatusRifaFieldUpdateOperationsInput = {
    set?: $Enums.StatusRifa
  }

  export type OrganizadorUpdateOneRequiredWithoutRifasNestedInput = {
    create?: XOR<OrganizadorCreateWithoutRifasInput, OrganizadorUncheckedCreateWithoutRifasInput>
    connectOrCreate?: OrganizadorCreateOrConnectWithoutRifasInput
    upsert?: OrganizadorUpsertWithoutRifasInput
    connect?: OrganizadorWhereUniqueInput
    update?: XOR<XOR<OrganizadorUpdateToOneWithWhereWithoutRifasInput, OrganizadorUpdateWithoutRifasInput>, OrganizadorUncheckedUpdateWithoutRifasInput>
  }

  export type SorteioUpdateManyWithoutRifaNestedInput = {
    create?: XOR<SorteioCreateWithoutRifaInput, SorteioUncheckedCreateWithoutRifaInput> | SorteioCreateWithoutRifaInput[] | SorteioUncheckedCreateWithoutRifaInput[]
    connectOrCreate?: SorteioCreateOrConnectWithoutRifaInput | SorteioCreateOrConnectWithoutRifaInput[]
    upsert?: SorteioUpsertWithWhereUniqueWithoutRifaInput | SorteioUpsertWithWhereUniqueWithoutRifaInput[]
    createMany?: SorteioCreateManyRifaInputEnvelope
    set?: SorteioWhereUniqueInput | SorteioWhereUniqueInput[]
    disconnect?: SorteioWhereUniqueInput | SorteioWhereUniqueInput[]
    delete?: SorteioWhereUniqueInput | SorteioWhereUniqueInput[]
    connect?: SorteioWhereUniqueInput | SorteioWhereUniqueInput[]
    update?: SorteioUpdateWithWhereUniqueWithoutRifaInput | SorteioUpdateWithWhereUniqueWithoutRifaInput[]
    updateMany?: SorteioUpdateManyWithWhereWithoutRifaInput | SorteioUpdateManyWithWhereWithoutRifaInput[]
    deleteMany?: SorteioScalarWhereInput | SorteioScalarWhereInput[]
  }

  export type BilheteUpdateManyWithoutRifaNestedInput = {
    create?: XOR<BilheteCreateWithoutRifaInput, BilheteUncheckedCreateWithoutRifaInput> | BilheteCreateWithoutRifaInput[] | BilheteUncheckedCreateWithoutRifaInput[]
    connectOrCreate?: BilheteCreateOrConnectWithoutRifaInput | BilheteCreateOrConnectWithoutRifaInput[]
    upsert?: BilheteUpsertWithWhereUniqueWithoutRifaInput | BilheteUpsertWithWhereUniqueWithoutRifaInput[]
    createMany?: BilheteCreateManyRifaInputEnvelope
    set?: BilheteWhereUniqueInput | BilheteWhereUniqueInput[]
    disconnect?: BilheteWhereUniqueInput | BilheteWhereUniqueInput[]
    delete?: BilheteWhereUniqueInput | BilheteWhereUniqueInput[]
    connect?: BilheteWhereUniqueInput | BilheteWhereUniqueInput[]
    update?: BilheteUpdateWithWhereUniqueWithoutRifaInput | BilheteUpdateWithWhereUniqueWithoutRifaInput[]
    updateMany?: BilheteUpdateManyWithWhereWithoutRifaInput | BilheteUpdateManyWithWhereWithoutRifaInput[]
    deleteMany?: BilheteScalarWhereInput | BilheteScalarWhereInput[]
  }

  export type PremioUpdateOneWithoutRifaNestedInput = {
    create?: XOR<PremioCreateWithoutRifaInput, PremioUncheckedCreateWithoutRifaInput>
    connectOrCreate?: PremioCreateOrConnectWithoutRifaInput
    upsert?: PremioUpsertWithoutRifaInput
    disconnect?: PremioWhereInput | boolean
    delete?: PremioWhereInput | boolean
    connect?: PremioWhereUniqueInput
    update?: XOR<XOR<PremioUpdateToOneWithWhereWithoutRifaInput, PremioUpdateWithoutRifaInput>, PremioUncheckedUpdateWithoutRifaInput>
  }

  export type LogAuditoriaUpdateManyWithoutRifaNestedInput = {
    create?: XOR<LogAuditoriaCreateWithoutRifaInput, LogAuditoriaUncheckedCreateWithoutRifaInput> | LogAuditoriaCreateWithoutRifaInput[] | LogAuditoriaUncheckedCreateWithoutRifaInput[]
    connectOrCreate?: LogAuditoriaCreateOrConnectWithoutRifaInput | LogAuditoriaCreateOrConnectWithoutRifaInput[]
    upsert?: LogAuditoriaUpsertWithWhereUniqueWithoutRifaInput | LogAuditoriaUpsertWithWhereUniqueWithoutRifaInput[]
    createMany?: LogAuditoriaCreateManyRifaInputEnvelope
    set?: LogAuditoriaWhereUniqueInput | LogAuditoriaWhereUniqueInput[]
    disconnect?: LogAuditoriaWhereUniqueInput | LogAuditoriaWhereUniqueInput[]
    delete?: LogAuditoriaWhereUniqueInput | LogAuditoriaWhereUniqueInput[]
    connect?: LogAuditoriaWhereUniqueInput | LogAuditoriaWhereUniqueInput[]
    update?: LogAuditoriaUpdateWithWhereUniqueWithoutRifaInput | LogAuditoriaUpdateWithWhereUniqueWithoutRifaInput[]
    updateMany?: LogAuditoriaUpdateManyWithWhereWithoutRifaInput | LogAuditoriaUpdateManyWithWhereWithoutRifaInput[]
    deleteMany?: LogAuditoriaScalarWhereInput | LogAuditoriaScalarWhereInput[]
  }

  export type SorteioUncheckedUpdateManyWithoutRifaNestedInput = {
    create?: XOR<SorteioCreateWithoutRifaInput, SorteioUncheckedCreateWithoutRifaInput> | SorteioCreateWithoutRifaInput[] | SorteioUncheckedCreateWithoutRifaInput[]
    connectOrCreate?: SorteioCreateOrConnectWithoutRifaInput | SorteioCreateOrConnectWithoutRifaInput[]
    upsert?: SorteioUpsertWithWhereUniqueWithoutRifaInput | SorteioUpsertWithWhereUniqueWithoutRifaInput[]
    createMany?: SorteioCreateManyRifaInputEnvelope
    set?: SorteioWhereUniqueInput | SorteioWhereUniqueInput[]
    disconnect?: SorteioWhereUniqueInput | SorteioWhereUniqueInput[]
    delete?: SorteioWhereUniqueInput | SorteioWhereUniqueInput[]
    connect?: SorteioWhereUniqueInput | SorteioWhereUniqueInput[]
    update?: SorteioUpdateWithWhereUniqueWithoutRifaInput | SorteioUpdateWithWhereUniqueWithoutRifaInput[]
    updateMany?: SorteioUpdateManyWithWhereWithoutRifaInput | SorteioUpdateManyWithWhereWithoutRifaInput[]
    deleteMany?: SorteioScalarWhereInput | SorteioScalarWhereInput[]
  }

  export type BilheteUncheckedUpdateManyWithoutRifaNestedInput = {
    create?: XOR<BilheteCreateWithoutRifaInput, BilheteUncheckedCreateWithoutRifaInput> | BilheteCreateWithoutRifaInput[] | BilheteUncheckedCreateWithoutRifaInput[]
    connectOrCreate?: BilheteCreateOrConnectWithoutRifaInput | BilheteCreateOrConnectWithoutRifaInput[]
    upsert?: BilheteUpsertWithWhereUniqueWithoutRifaInput | BilheteUpsertWithWhereUniqueWithoutRifaInput[]
    createMany?: BilheteCreateManyRifaInputEnvelope
    set?: BilheteWhereUniqueInput | BilheteWhereUniqueInput[]
    disconnect?: BilheteWhereUniqueInput | BilheteWhereUniqueInput[]
    delete?: BilheteWhereUniqueInput | BilheteWhereUniqueInput[]
    connect?: BilheteWhereUniqueInput | BilheteWhereUniqueInput[]
    update?: BilheteUpdateWithWhereUniqueWithoutRifaInput | BilheteUpdateWithWhereUniqueWithoutRifaInput[]
    updateMany?: BilheteUpdateManyWithWhereWithoutRifaInput | BilheteUpdateManyWithWhereWithoutRifaInput[]
    deleteMany?: BilheteScalarWhereInput | BilheteScalarWhereInput[]
  }

  export type PremioUncheckedUpdateOneWithoutRifaNestedInput = {
    create?: XOR<PremioCreateWithoutRifaInput, PremioUncheckedCreateWithoutRifaInput>
    connectOrCreate?: PremioCreateOrConnectWithoutRifaInput
    upsert?: PremioUpsertWithoutRifaInput
    disconnect?: PremioWhereInput | boolean
    delete?: PremioWhereInput | boolean
    connect?: PremioWhereUniqueInput
    update?: XOR<XOR<PremioUpdateToOneWithWhereWithoutRifaInput, PremioUpdateWithoutRifaInput>, PremioUncheckedUpdateWithoutRifaInput>
  }

  export type LogAuditoriaUncheckedUpdateManyWithoutRifaNestedInput = {
    create?: XOR<LogAuditoriaCreateWithoutRifaInput, LogAuditoriaUncheckedCreateWithoutRifaInput> | LogAuditoriaCreateWithoutRifaInput[] | LogAuditoriaUncheckedCreateWithoutRifaInput[]
    connectOrCreate?: LogAuditoriaCreateOrConnectWithoutRifaInput | LogAuditoriaCreateOrConnectWithoutRifaInput[]
    upsert?: LogAuditoriaUpsertWithWhereUniqueWithoutRifaInput | LogAuditoriaUpsertWithWhereUniqueWithoutRifaInput[]
    createMany?: LogAuditoriaCreateManyRifaInputEnvelope
    set?: LogAuditoriaWhereUniqueInput | LogAuditoriaWhereUniqueInput[]
    disconnect?: LogAuditoriaWhereUniqueInput | LogAuditoriaWhereUniqueInput[]
    delete?: LogAuditoriaWhereUniqueInput | LogAuditoriaWhereUniqueInput[]
    connect?: LogAuditoriaWhereUniqueInput | LogAuditoriaWhereUniqueInput[]
    update?: LogAuditoriaUpdateWithWhereUniqueWithoutRifaInput | LogAuditoriaUpdateWithWhereUniqueWithoutRifaInput[]
    updateMany?: LogAuditoriaUpdateManyWithWhereWithoutRifaInput | LogAuditoriaUpdateManyWithWhereWithoutRifaInput[]
    deleteMany?: LogAuditoriaScalarWhereInput | LogAuditoriaScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutOrganizadorInput = {
    create?: XOR<UsuarioCreateWithoutOrganizadorInput, UsuarioUncheckedCreateWithoutOrganizadorInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutOrganizadorInput
    connect?: UsuarioWhereUniqueInput
  }

  export type RifaCreateNestedManyWithoutOrganizadorInput = {
    create?: XOR<RifaCreateWithoutOrganizadorInput, RifaUncheckedCreateWithoutOrganizadorInput> | RifaCreateWithoutOrganizadorInput[] | RifaUncheckedCreateWithoutOrganizadorInput[]
    connectOrCreate?: RifaCreateOrConnectWithoutOrganizadorInput | RifaCreateOrConnectWithoutOrganizadorInput[]
    createMany?: RifaCreateManyOrganizadorInputEnvelope
    connect?: RifaWhereUniqueInput | RifaWhereUniqueInput[]
  }

  export type RifaUncheckedCreateNestedManyWithoutOrganizadorInput = {
    create?: XOR<RifaCreateWithoutOrganizadorInput, RifaUncheckedCreateWithoutOrganizadorInput> | RifaCreateWithoutOrganizadorInput[] | RifaUncheckedCreateWithoutOrganizadorInput[]
    connectOrCreate?: RifaCreateOrConnectWithoutOrganizadorInput | RifaCreateOrConnectWithoutOrganizadorInput[]
    createMany?: RifaCreateManyOrganizadorInputEnvelope
    connect?: RifaWhereUniqueInput | RifaWhereUniqueInput[]
  }

  export type UsuarioUpdateOneRequiredWithoutOrganizadorNestedInput = {
    create?: XOR<UsuarioCreateWithoutOrganizadorInput, UsuarioUncheckedCreateWithoutOrganizadorInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutOrganizadorInput
    upsert?: UsuarioUpsertWithoutOrganizadorInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutOrganizadorInput, UsuarioUpdateWithoutOrganizadorInput>, UsuarioUncheckedUpdateWithoutOrganizadorInput>
  }

  export type RifaUpdateManyWithoutOrganizadorNestedInput = {
    create?: XOR<RifaCreateWithoutOrganizadorInput, RifaUncheckedCreateWithoutOrganizadorInput> | RifaCreateWithoutOrganizadorInput[] | RifaUncheckedCreateWithoutOrganizadorInput[]
    connectOrCreate?: RifaCreateOrConnectWithoutOrganizadorInput | RifaCreateOrConnectWithoutOrganizadorInput[]
    upsert?: RifaUpsertWithWhereUniqueWithoutOrganizadorInput | RifaUpsertWithWhereUniqueWithoutOrganizadorInput[]
    createMany?: RifaCreateManyOrganizadorInputEnvelope
    set?: RifaWhereUniqueInput | RifaWhereUniqueInput[]
    disconnect?: RifaWhereUniqueInput | RifaWhereUniqueInput[]
    delete?: RifaWhereUniqueInput | RifaWhereUniqueInput[]
    connect?: RifaWhereUniqueInput | RifaWhereUniqueInput[]
    update?: RifaUpdateWithWhereUniqueWithoutOrganizadorInput | RifaUpdateWithWhereUniqueWithoutOrganizadorInput[]
    updateMany?: RifaUpdateManyWithWhereWithoutOrganizadorInput | RifaUpdateManyWithWhereWithoutOrganizadorInput[]
    deleteMany?: RifaScalarWhereInput | RifaScalarWhereInput[]
  }

  export type RifaUncheckedUpdateManyWithoutOrganizadorNestedInput = {
    create?: XOR<RifaCreateWithoutOrganizadorInput, RifaUncheckedCreateWithoutOrganizadorInput> | RifaCreateWithoutOrganizadorInput[] | RifaUncheckedCreateWithoutOrganizadorInput[]
    connectOrCreate?: RifaCreateOrConnectWithoutOrganizadorInput | RifaCreateOrConnectWithoutOrganizadorInput[]
    upsert?: RifaUpsertWithWhereUniqueWithoutOrganizadorInput | RifaUpsertWithWhereUniqueWithoutOrganizadorInput[]
    createMany?: RifaCreateManyOrganizadorInputEnvelope
    set?: RifaWhereUniqueInput | RifaWhereUniqueInput[]
    disconnect?: RifaWhereUniqueInput | RifaWhereUniqueInput[]
    delete?: RifaWhereUniqueInput | RifaWhereUniqueInput[]
    connect?: RifaWhereUniqueInput | RifaWhereUniqueInput[]
    update?: RifaUpdateWithWhereUniqueWithoutOrganizadorInput | RifaUpdateWithWhereUniqueWithoutOrganizadorInput[]
    updateMany?: RifaUpdateManyWithWhereWithoutOrganizadorInput | RifaUpdateManyWithWhereWithoutOrganizadorInput[]
    deleteMany?: RifaScalarWhereInput | RifaScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutParticipanteInput = {
    create?: XOR<UsuarioCreateWithoutParticipanteInput, UsuarioUncheckedCreateWithoutParticipanteInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutParticipanteInput
    connect?: UsuarioWhereUniqueInput
  }

  export type BilheteCreateNestedManyWithoutParticipanteInput = {
    create?: XOR<BilheteCreateWithoutParticipanteInput, BilheteUncheckedCreateWithoutParticipanteInput> | BilheteCreateWithoutParticipanteInput[] | BilheteUncheckedCreateWithoutParticipanteInput[]
    connectOrCreate?: BilheteCreateOrConnectWithoutParticipanteInput | BilheteCreateOrConnectWithoutParticipanteInput[]
    createMany?: BilheteCreateManyParticipanteInputEnvelope
    connect?: BilheteWhereUniqueInput | BilheteWhereUniqueInput[]
  }

  export type PagamentoCreateNestedManyWithoutParticipanteInput = {
    create?: XOR<PagamentoCreateWithoutParticipanteInput, PagamentoUncheckedCreateWithoutParticipanteInput> | PagamentoCreateWithoutParticipanteInput[] | PagamentoUncheckedCreateWithoutParticipanteInput[]
    connectOrCreate?: PagamentoCreateOrConnectWithoutParticipanteInput | PagamentoCreateOrConnectWithoutParticipanteInput[]
    createMany?: PagamentoCreateManyParticipanteInputEnvelope
    connect?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
  }

  export type PremioParticipanteCreateNestedManyWithoutParticipanteInput = {
    create?: XOR<PremioParticipanteCreateWithoutParticipanteInput, PremioParticipanteUncheckedCreateWithoutParticipanteInput> | PremioParticipanteCreateWithoutParticipanteInput[] | PremioParticipanteUncheckedCreateWithoutParticipanteInput[]
    connectOrCreate?: PremioParticipanteCreateOrConnectWithoutParticipanteInput | PremioParticipanteCreateOrConnectWithoutParticipanteInput[]
    createMany?: PremioParticipanteCreateManyParticipanteInputEnvelope
    connect?: PremioParticipanteWhereUniqueInput | PremioParticipanteWhereUniqueInput[]
  }

  export type SorteioCreateNestedManyWithoutVencedorInput = {
    create?: XOR<SorteioCreateWithoutVencedorInput, SorteioUncheckedCreateWithoutVencedorInput> | SorteioCreateWithoutVencedorInput[] | SorteioUncheckedCreateWithoutVencedorInput[]
    connectOrCreate?: SorteioCreateOrConnectWithoutVencedorInput | SorteioCreateOrConnectWithoutVencedorInput[]
    createMany?: SorteioCreateManyVencedorInputEnvelope
    connect?: SorteioWhereUniqueInput | SorteioWhereUniqueInput[]
  }

  export type BilheteUncheckedCreateNestedManyWithoutParticipanteInput = {
    create?: XOR<BilheteCreateWithoutParticipanteInput, BilheteUncheckedCreateWithoutParticipanteInput> | BilheteCreateWithoutParticipanteInput[] | BilheteUncheckedCreateWithoutParticipanteInput[]
    connectOrCreate?: BilheteCreateOrConnectWithoutParticipanteInput | BilheteCreateOrConnectWithoutParticipanteInput[]
    createMany?: BilheteCreateManyParticipanteInputEnvelope
    connect?: BilheteWhereUniqueInput | BilheteWhereUniqueInput[]
  }

  export type PagamentoUncheckedCreateNestedManyWithoutParticipanteInput = {
    create?: XOR<PagamentoCreateWithoutParticipanteInput, PagamentoUncheckedCreateWithoutParticipanteInput> | PagamentoCreateWithoutParticipanteInput[] | PagamentoUncheckedCreateWithoutParticipanteInput[]
    connectOrCreate?: PagamentoCreateOrConnectWithoutParticipanteInput | PagamentoCreateOrConnectWithoutParticipanteInput[]
    createMany?: PagamentoCreateManyParticipanteInputEnvelope
    connect?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
  }

  export type PremioParticipanteUncheckedCreateNestedManyWithoutParticipanteInput = {
    create?: XOR<PremioParticipanteCreateWithoutParticipanteInput, PremioParticipanteUncheckedCreateWithoutParticipanteInput> | PremioParticipanteCreateWithoutParticipanteInput[] | PremioParticipanteUncheckedCreateWithoutParticipanteInput[]
    connectOrCreate?: PremioParticipanteCreateOrConnectWithoutParticipanteInput | PremioParticipanteCreateOrConnectWithoutParticipanteInput[]
    createMany?: PremioParticipanteCreateManyParticipanteInputEnvelope
    connect?: PremioParticipanteWhereUniqueInput | PremioParticipanteWhereUniqueInput[]
  }

  export type SorteioUncheckedCreateNestedManyWithoutVencedorInput = {
    create?: XOR<SorteioCreateWithoutVencedorInput, SorteioUncheckedCreateWithoutVencedorInput> | SorteioCreateWithoutVencedorInput[] | SorteioUncheckedCreateWithoutVencedorInput[]
    connectOrCreate?: SorteioCreateOrConnectWithoutVencedorInput | SorteioCreateOrConnectWithoutVencedorInput[]
    createMany?: SorteioCreateManyVencedorInputEnvelope
    connect?: SorteioWhereUniqueInput | SorteioWhereUniqueInput[]
  }

  export type UsuarioUpdateOneRequiredWithoutParticipanteNestedInput = {
    create?: XOR<UsuarioCreateWithoutParticipanteInput, UsuarioUncheckedCreateWithoutParticipanteInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutParticipanteInput
    upsert?: UsuarioUpsertWithoutParticipanteInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutParticipanteInput, UsuarioUpdateWithoutParticipanteInput>, UsuarioUncheckedUpdateWithoutParticipanteInput>
  }

  export type BilheteUpdateManyWithoutParticipanteNestedInput = {
    create?: XOR<BilheteCreateWithoutParticipanteInput, BilheteUncheckedCreateWithoutParticipanteInput> | BilheteCreateWithoutParticipanteInput[] | BilheteUncheckedCreateWithoutParticipanteInput[]
    connectOrCreate?: BilheteCreateOrConnectWithoutParticipanteInput | BilheteCreateOrConnectWithoutParticipanteInput[]
    upsert?: BilheteUpsertWithWhereUniqueWithoutParticipanteInput | BilheteUpsertWithWhereUniqueWithoutParticipanteInput[]
    createMany?: BilheteCreateManyParticipanteInputEnvelope
    set?: BilheteWhereUniqueInput | BilheteWhereUniqueInput[]
    disconnect?: BilheteWhereUniqueInput | BilheteWhereUniqueInput[]
    delete?: BilheteWhereUniqueInput | BilheteWhereUniqueInput[]
    connect?: BilheteWhereUniqueInput | BilheteWhereUniqueInput[]
    update?: BilheteUpdateWithWhereUniqueWithoutParticipanteInput | BilheteUpdateWithWhereUniqueWithoutParticipanteInput[]
    updateMany?: BilheteUpdateManyWithWhereWithoutParticipanteInput | BilheteUpdateManyWithWhereWithoutParticipanteInput[]
    deleteMany?: BilheteScalarWhereInput | BilheteScalarWhereInput[]
  }

  export type PagamentoUpdateManyWithoutParticipanteNestedInput = {
    create?: XOR<PagamentoCreateWithoutParticipanteInput, PagamentoUncheckedCreateWithoutParticipanteInput> | PagamentoCreateWithoutParticipanteInput[] | PagamentoUncheckedCreateWithoutParticipanteInput[]
    connectOrCreate?: PagamentoCreateOrConnectWithoutParticipanteInput | PagamentoCreateOrConnectWithoutParticipanteInput[]
    upsert?: PagamentoUpsertWithWhereUniqueWithoutParticipanteInput | PagamentoUpsertWithWhereUniqueWithoutParticipanteInput[]
    createMany?: PagamentoCreateManyParticipanteInputEnvelope
    set?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
    disconnect?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
    delete?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
    connect?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
    update?: PagamentoUpdateWithWhereUniqueWithoutParticipanteInput | PagamentoUpdateWithWhereUniqueWithoutParticipanteInput[]
    updateMany?: PagamentoUpdateManyWithWhereWithoutParticipanteInput | PagamentoUpdateManyWithWhereWithoutParticipanteInput[]
    deleteMany?: PagamentoScalarWhereInput | PagamentoScalarWhereInput[]
  }

  export type PremioParticipanteUpdateManyWithoutParticipanteNestedInput = {
    create?: XOR<PremioParticipanteCreateWithoutParticipanteInput, PremioParticipanteUncheckedCreateWithoutParticipanteInput> | PremioParticipanteCreateWithoutParticipanteInput[] | PremioParticipanteUncheckedCreateWithoutParticipanteInput[]
    connectOrCreate?: PremioParticipanteCreateOrConnectWithoutParticipanteInput | PremioParticipanteCreateOrConnectWithoutParticipanteInput[]
    upsert?: PremioParticipanteUpsertWithWhereUniqueWithoutParticipanteInput | PremioParticipanteUpsertWithWhereUniqueWithoutParticipanteInput[]
    createMany?: PremioParticipanteCreateManyParticipanteInputEnvelope
    set?: PremioParticipanteWhereUniqueInput | PremioParticipanteWhereUniqueInput[]
    disconnect?: PremioParticipanteWhereUniqueInput | PremioParticipanteWhereUniqueInput[]
    delete?: PremioParticipanteWhereUniqueInput | PremioParticipanteWhereUniqueInput[]
    connect?: PremioParticipanteWhereUniqueInput | PremioParticipanteWhereUniqueInput[]
    update?: PremioParticipanteUpdateWithWhereUniqueWithoutParticipanteInput | PremioParticipanteUpdateWithWhereUniqueWithoutParticipanteInput[]
    updateMany?: PremioParticipanteUpdateManyWithWhereWithoutParticipanteInput | PremioParticipanteUpdateManyWithWhereWithoutParticipanteInput[]
    deleteMany?: PremioParticipanteScalarWhereInput | PremioParticipanteScalarWhereInput[]
  }

  export type SorteioUpdateManyWithoutVencedorNestedInput = {
    create?: XOR<SorteioCreateWithoutVencedorInput, SorteioUncheckedCreateWithoutVencedorInput> | SorteioCreateWithoutVencedorInput[] | SorteioUncheckedCreateWithoutVencedorInput[]
    connectOrCreate?: SorteioCreateOrConnectWithoutVencedorInput | SorteioCreateOrConnectWithoutVencedorInput[]
    upsert?: SorteioUpsertWithWhereUniqueWithoutVencedorInput | SorteioUpsertWithWhereUniqueWithoutVencedorInput[]
    createMany?: SorteioCreateManyVencedorInputEnvelope
    set?: SorteioWhereUniqueInput | SorteioWhereUniqueInput[]
    disconnect?: SorteioWhereUniqueInput | SorteioWhereUniqueInput[]
    delete?: SorteioWhereUniqueInput | SorteioWhereUniqueInput[]
    connect?: SorteioWhereUniqueInput | SorteioWhereUniqueInput[]
    update?: SorteioUpdateWithWhereUniqueWithoutVencedorInput | SorteioUpdateWithWhereUniqueWithoutVencedorInput[]
    updateMany?: SorteioUpdateManyWithWhereWithoutVencedorInput | SorteioUpdateManyWithWhereWithoutVencedorInput[]
    deleteMany?: SorteioScalarWhereInput | SorteioScalarWhereInput[]
  }

  export type BilheteUncheckedUpdateManyWithoutParticipanteNestedInput = {
    create?: XOR<BilheteCreateWithoutParticipanteInput, BilheteUncheckedCreateWithoutParticipanteInput> | BilheteCreateWithoutParticipanteInput[] | BilheteUncheckedCreateWithoutParticipanteInput[]
    connectOrCreate?: BilheteCreateOrConnectWithoutParticipanteInput | BilheteCreateOrConnectWithoutParticipanteInput[]
    upsert?: BilheteUpsertWithWhereUniqueWithoutParticipanteInput | BilheteUpsertWithWhereUniqueWithoutParticipanteInput[]
    createMany?: BilheteCreateManyParticipanteInputEnvelope
    set?: BilheteWhereUniqueInput | BilheteWhereUniqueInput[]
    disconnect?: BilheteWhereUniqueInput | BilheteWhereUniqueInput[]
    delete?: BilheteWhereUniqueInput | BilheteWhereUniqueInput[]
    connect?: BilheteWhereUniqueInput | BilheteWhereUniqueInput[]
    update?: BilheteUpdateWithWhereUniqueWithoutParticipanteInput | BilheteUpdateWithWhereUniqueWithoutParticipanteInput[]
    updateMany?: BilheteUpdateManyWithWhereWithoutParticipanteInput | BilheteUpdateManyWithWhereWithoutParticipanteInput[]
    deleteMany?: BilheteScalarWhereInput | BilheteScalarWhereInput[]
  }

  export type PagamentoUncheckedUpdateManyWithoutParticipanteNestedInput = {
    create?: XOR<PagamentoCreateWithoutParticipanteInput, PagamentoUncheckedCreateWithoutParticipanteInput> | PagamentoCreateWithoutParticipanteInput[] | PagamentoUncheckedCreateWithoutParticipanteInput[]
    connectOrCreate?: PagamentoCreateOrConnectWithoutParticipanteInput | PagamentoCreateOrConnectWithoutParticipanteInput[]
    upsert?: PagamentoUpsertWithWhereUniqueWithoutParticipanteInput | PagamentoUpsertWithWhereUniqueWithoutParticipanteInput[]
    createMany?: PagamentoCreateManyParticipanteInputEnvelope
    set?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
    disconnect?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
    delete?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
    connect?: PagamentoWhereUniqueInput | PagamentoWhereUniqueInput[]
    update?: PagamentoUpdateWithWhereUniqueWithoutParticipanteInput | PagamentoUpdateWithWhereUniqueWithoutParticipanteInput[]
    updateMany?: PagamentoUpdateManyWithWhereWithoutParticipanteInput | PagamentoUpdateManyWithWhereWithoutParticipanteInput[]
    deleteMany?: PagamentoScalarWhereInput | PagamentoScalarWhereInput[]
  }

  export type PremioParticipanteUncheckedUpdateManyWithoutParticipanteNestedInput = {
    create?: XOR<PremioParticipanteCreateWithoutParticipanteInput, PremioParticipanteUncheckedCreateWithoutParticipanteInput> | PremioParticipanteCreateWithoutParticipanteInput[] | PremioParticipanteUncheckedCreateWithoutParticipanteInput[]
    connectOrCreate?: PremioParticipanteCreateOrConnectWithoutParticipanteInput | PremioParticipanteCreateOrConnectWithoutParticipanteInput[]
    upsert?: PremioParticipanteUpsertWithWhereUniqueWithoutParticipanteInput | PremioParticipanteUpsertWithWhereUniqueWithoutParticipanteInput[]
    createMany?: PremioParticipanteCreateManyParticipanteInputEnvelope
    set?: PremioParticipanteWhereUniqueInput | PremioParticipanteWhereUniqueInput[]
    disconnect?: PremioParticipanteWhereUniqueInput | PremioParticipanteWhereUniqueInput[]
    delete?: PremioParticipanteWhereUniqueInput | PremioParticipanteWhereUniqueInput[]
    connect?: PremioParticipanteWhereUniqueInput | PremioParticipanteWhereUniqueInput[]
    update?: PremioParticipanteUpdateWithWhereUniqueWithoutParticipanteInput | PremioParticipanteUpdateWithWhereUniqueWithoutParticipanteInput[]
    updateMany?: PremioParticipanteUpdateManyWithWhereWithoutParticipanteInput | PremioParticipanteUpdateManyWithWhereWithoutParticipanteInput[]
    deleteMany?: PremioParticipanteScalarWhereInput | PremioParticipanteScalarWhereInput[]
  }

  export type SorteioUncheckedUpdateManyWithoutVencedorNestedInput = {
    create?: XOR<SorteioCreateWithoutVencedorInput, SorteioUncheckedCreateWithoutVencedorInput> | SorteioCreateWithoutVencedorInput[] | SorteioUncheckedCreateWithoutVencedorInput[]
    connectOrCreate?: SorteioCreateOrConnectWithoutVencedorInput | SorteioCreateOrConnectWithoutVencedorInput[]
    upsert?: SorteioUpsertWithWhereUniqueWithoutVencedorInput | SorteioUpsertWithWhereUniqueWithoutVencedorInput[]
    createMany?: SorteioCreateManyVencedorInputEnvelope
    set?: SorteioWhereUniqueInput | SorteioWhereUniqueInput[]
    disconnect?: SorteioWhereUniqueInput | SorteioWhereUniqueInput[]
    delete?: SorteioWhereUniqueInput | SorteioWhereUniqueInput[]
    connect?: SorteioWhereUniqueInput | SorteioWhereUniqueInput[]
    update?: SorteioUpdateWithWhereUniqueWithoutVencedorInput | SorteioUpdateWithWhereUniqueWithoutVencedorInput[]
    updateMany?: SorteioUpdateManyWithWhereWithoutVencedorInput | SorteioUpdateManyWithWhereWithoutVencedorInput[]
    deleteMany?: SorteioScalarWhereInput | SorteioScalarWhereInput[]
  }

  export type RifaCreateNestedOneWithoutBilhetesInput = {
    create?: XOR<RifaCreateWithoutBilhetesInput, RifaUncheckedCreateWithoutBilhetesInput>
    connectOrCreate?: RifaCreateOrConnectWithoutBilhetesInput
    connect?: RifaWhereUniqueInput
  }

  export type ParticipanteCreateNestedOneWithoutBilhetesInput = {
    create?: XOR<ParticipanteCreateWithoutBilhetesInput, ParticipanteUncheckedCreateWithoutBilhetesInput>
    connectOrCreate?: ParticipanteCreateOrConnectWithoutBilhetesInput
    connect?: ParticipanteWhereUniqueInput
  }

  export type PagamentoCreateNestedOneWithoutBilheteInput = {
    create?: XOR<PagamentoCreateWithoutBilheteInput, PagamentoUncheckedCreateWithoutBilheteInput>
    connectOrCreate?: PagamentoCreateOrConnectWithoutBilheteInput
    connect?: PagamentoWhereUniqueInput
  }

  export type SorteioBilheteCreateNestedManyWithoutBilheteInput = {
    create?: XOR<SorteioBilheteCreateWithoutBilheteInput, SorteioBilheteUncheckedCreateWithoutBilheteInput> | SorteioBilheteCreateWithoutBilheteInput[] | SorteioBilheteUncheckedCreateWithoutBilheteInput[]
    connectOrCreate?: SorteioBilheteCreateOrConnectWithoutBilheteInput | SorteioBilheteCreateOrConnectWithoutBilheteInput[]
    createMany?: SorteioBilheteCreateManyBilheteInputEnvelope
    connect?: SorteioBilheteWhereUniqueInput | SorteioBilheteWhereUniqueInput[]
  }

  export type PagamentoUncheckedCreateNestedOneWithoutBilheteInput = {
    create?: XOR<PagamentoCreateWithoutBilheteInput, PagamentoUncheckedCreateWithoutBilheteInput>
    connectOrCreate?: PagamentoCreateOrConnectWithoutBilheteInput
    connect?: PagamentoWhereUniqueInput
  }

  export type SorteioBilheteUncheckedCreateNestedManyWithoutBilheteInput = {
    create?: XOR<SorteioBilheteCreateWithoutBilheteInput, SorteioBilheteUncheckedCreateWithoutBilheteInput> | SorteioBilheteCreateWithoutBilheteInput[] | SorteioBilheteUncheckedCreateWithoutBilheteInput[]
    connectOrCreate?: SorteioBilheteCreateOrConnectWithoutBilheteInput | SorteioBilheteCreateOrConnectWithoutBilheteInput[]
    createMany?: SorteioBilheteCreateManyBilheteInputEnvelope
    connect?: SorteioBilheteWhereUniqueInput | SorteioBilheteWhereUniqueInput[]
  }

  export type EnumStatusBilFieldUpdateOperationsInput = {
    set?: $Enums.StatusBil
  }

  export type RifaUpdateOneRequiredWithoutBilhetesNestedInput = {
    create?: XOR<RifaCreateWithoutBilhetesInput, RifaUncheckedCreateWithoutBilhetesInput>
    connectOrCreate?: RifaCreateOrConnectWithoutBilhetesInput
    upsert?: RifaUpsertWithoutBilhetesInput
    connect?: RifaWhereUniqueInput
    update?: XOR<XOR<RifaUpdateToOneWithWhereWithoutBilhetesInput, RifaUpdateWithoutBilhetesInput>, RifaUncheckedUpdateWithoutBilhetesInput>
  }

  export type ParticipanteUpdateOneWithoutBilhetesNestedInput = {
    create?: XOR<ParticipanteCreateWithoutBilhetesInput, ParticipanteUncheckedCreateWithoutBilhetesInput>
    connectOrCreate?: ParticipanteCreateOrConnectWithoutBilhetesInput
    upsert?: ParticipanteUpsertWithoutBilhetesInput
    disconnect?: ParticipanteWhereInput | boolean
    delete?: ParticipanteWhereInput | boolean
    connect?: ParticipanteWhereUniqueInput
    update?: XOR<XOR<ParticipanteUpdateToOneWithWhereWithoutBilhetesInput, ParticipanteUpdateWithoutBilhetesInput>, ParticipanteUncheckedUpdateWithoutBilhetesInput>
  }

  export type PagamentoUpdateOneWithoutBilheteNestedInput = {
    create?: XOR<PagamentoCreateWithoutBilheteInput, PagamentoUncheckedCreateWithoutBilheteInput>
    connectOrCreate?: PagamentoCreateOrConnectWithoutBilheteInput
    upsert?: PagamentoUpsertWithoutBilheteInput
    disconnect?: PagamentoWhereInput | boolean
    delete?: PagamentoWhereInput | boolean
    connect?: PagamentoWhereUniqueInput
    update?: XOR<XOR<PagamentoUpdateToOneWithWhereWithoutBilheteInput, PagamentoUpdateWithoutBilheteInput>, PagamentoUncheckedUpdateWithoutBilheteInput>
  }

  export type SorteioBilheteUpdateManyWithoutBilheteNestedInput = {
    create?: XOR<SorteioBilheteCreateWithoutBilheteInput, SorteioBilheteUncheckedCreateWithoutBilheteInput> | SorteioBilheteCreateWithoutBilheteInput[] | SorteioBilheteUncheckedCreateWithoutBilheteInput[]
    connectOrCreate?: SorteioBilheteCreateOrConnectWithoutBilheteInput | SorteioBilheteCreateOrConnectWithoutBilheteInput[]
    upsert?: SorteioBilheteUpsertWithWhereUniqueWithoutBilheteInput | SorteioBilheteUpsertWithWhereUniqueWithoutBilheteInput[]
    createMany?: SorteioBilheteCreateManyBilheteInputEnvelope
    set?: SorteioBilheteWhereUniqueInput | SorteioBilheteWhereUniqueInput[]
    disconnect?: SorteioBilheteWhereUniqueInput | SorteioBilheteWhereUniqueInput[]
    delete?: SorteioBilheteWhereUniqueInput | SorteioBilheteWhereUniqueInput[]
    connect?: SorteioBilheteWhereUniqueInput | SorteioBilheteWhereUniqueInput[]
    update?: SorteioBilheteUpdateWithWhereUniqueWithoutBilheteInput | SorteioBilheteUpdateWithWhereUniqueWithoutBilheteInput[]
    updateMany?: SorteioBilheteUpdateManyWithWhereWithoutBilheteInput | SorteioBilheteUpdateManyWithWhereWithoutBilheteInput[]
    deleteMany?: SorteioBilheteScalarWhereInput | SorteioBilheteScalarWhereInput[]
  }

  export type PagamentoUncheckedUpdateOneWithoutBilheteNestedInput = {
    create?: XOR<PagamentoCreateWithoutBilheteInput, PagamentoUncheckedCreateWithoutBilheteInput>
    connectOrCreate?: PagamentoCreateOrConnectWithoutBilheteInput
    upsert?: PagamentoUpsertWithoutBilheteInput
    disconnect?: PagamentoWhereInput | boolean
    delete?: PagamentoWhereInput | boolean
    connect?: PagamentoWhereUniqueInput
    update?: XOR<XOR<PagamentoUpdateToOneWithWhereWithoutBilheteInput, PagamentoUpdateWithoutBilheteInput>, PagamentoUncheckedUpdateWithoutBilheteInput>
  }

  export type SorteioBilheteUncheckedUpdateManyWithoutBilheteNestedInput = {
    create?: XOR<SorteioBilheteCreateWithoutBilheteInput, SorteioBilheteUncheckedCreateWithoutBilheteInput> | SorteioBilheteCreateWithoutBilheteInput[] | SorteioBilheteUncheckedCreateWithoutBilheteInput[]
    connectOrCreate?: SorteioBilheteCreateOrConnectWithoutBilheteInput | SorteioBilheteCreateOrConnectWithoutBilheteInput[]
    upsert?: SorteioBilheteUpsertWithWhereUniqueWithoutBilheteInput | SorteioBilheteUpsertWithWhereUniqueWithoutBilheteInput[]
    createMany?: SorteioBilheteCreateManyBilheteInputEnvelope
    set?: SorteioBilheteWhereUniqueInput | SorteioBilheteWhereUniqueInput[]
    disconnect?: SorteioBilheteWhereUniqueInput | SorteioBilheteWhereUniqueInput[]
    delete?: SorteioBilheteWhereUniqueInput | SorteioBilheteWhereUniqueInput[]
    connect?: SorteioBilheteWhereUniqueInput | SorteioBilheteWhereUniqueInput[]
    update?: SorteioBilheteUpdateWithWhereUniqueWithoutBilheteInput | SorteioBilheteUpdateWithWhereUniqueWithoutBilheteInput[]
    updateMany?: SorteioBilheteUpdateManyWithWhereWithoutBilheteInput | SorteioBilheteUpdateManyWithWhereWithoutBilheteInput[]
    deleteMany?: SorteioBilheteScalarWhereInput | SorteioBilheteScalarWhereInput[]
  }

  export type RifaCreateNestedOneWithoutSorteiosInput = {
    create?: XOR<RifaCreateWithoutSorteiosInput, RifaUncheckedCreateWithoutSorteiosInput>
    connectOrCreate?: RifaCreateOrConnectWithoutSorteiosInput
    connect?: RifaWhereUniqueInput
  }

  export type ParticipanteCreateNestedOneWithoutVitoriasInput = {
    create?: XOR<ParticipanteCreateWithoutVitoriasInput, ParticipanteUncheckedCreateWithoutVitoriasInput>
    connectOrCreate?: ParticipanteCreateOrConnectWithoutVitoriasInput
    connect?: ParticipanteWhereUniqueInput
  }

  export type SorteioBilheteCreateNestedManyWithoutSorteioInput = {
    create?: XOR<SorteioBilheteCreateWithoutSorteioInput, SorteioBilheteUncheckedCreateWithoutSorteioInput> | SorteioBilheteCreateWithoutSorteioInput[] | SorteioBilheteUncheckedCreateWithoutSorteioInput[]
    connectOrCreate?: SorteioBilheteCreateOrConnectWithoutSorteioInput | SorteioBilheteCreateOrConnectWithoutSorteioInput[]
    createMany?: SorteioBilheteCreateManySorteioInputEnvelope
    connect?: SorteioBilheteWhereUniqueInput | SorteioBilheteWhereUniqueInput[]
  }

  export type SorteioBilheteUncheckedCreateNestedManyWithoutSorteioInput = {
    create?: XOR<SorteioBilheteCreateWithoutSorteioInput, SorteioBilheteUncheckedCreateWithoutSorteioInput> | SorteioBilheteCreateWithoutSorteioInput[] | SorteioBilheteUncheckedCreateWithoutSorteioInput[]
    connectOrCreate?: SorteioBilheteCreateOrConnectWithoutSorteioInput | SorteioBilheteCreateOrConnectWithoutSorteioInput[]
    createMany?: SorteioBilheteCreateManySorteioInputEnvelope
    connect?: SorteioBilheteWhereUniqueInput | SorteioBilheteWhereUniqueInput[]
  }

  export type RifaUpdateOneRequiredWithoutSorteiosNestedInput = {
    create?: XOR<RifaCreateWithoutSorteiosInput, RifaUncheckedCreateWithoutSorteiosInput>
    connectOrCreate?: RifaCreateOrConnectWithoutSorteiosInput
    upsert?: RifaUpsertWithoutSorteiosInput
    connect?: RifaWhereUniqueInput
    update?: XOR<XOR<RifaUpdateToOneWithWhereWithoutSorteiosInput, RifaUpdateWithoutSorteiosInput>, RifaUncheckedUpdateWithoutSorteiosInput>
  }

  export type ParticipanteUpdateOneWithoutVitoriasNestedInput = {
    create?: XOR<ParticipanteCreateWithoutVitoriasInput, ParticipanteUncheckedCreateWithoutVitoriasInput>
    connectOrCreate?: ParticipanteCreateOrConnectWithoutVitoriasInput
    upsert?: ParticipanteUpsertWithoutVitoriasInput
    disconnect?: ParticipanteWhereInput | boolean
    delete?: ParticipanteWhereInput | boolean
    connect?: ParticipanteWhereUniqueInput
    update?: XOR<XOR<ParticipanteUpdateToOneWithWhereWithoutVitoriasInput, ParticipanteUpdateWithoutVitoriasInput>, ParticipanteUncheckedUpdateWithoutVitoriasInput>
  }

  export type SorteioBilheteUpdateManyWithoutSorteioNestedInput = {
    create?: XOR<SorteioBilheteCreateWithoutSorteioInput, SorteioBilheteUncheckedCreateWithoutSorteioInput> | SorteioBilheteCreateWithoutSorteioInput[] | SorteioBilheteUncheckedCreateWithoutSorteioInput[]
    connectOrCreate?: SorteioBilheteCreateOrConnectWithoutSorteioInput | SorteioBilheteCreateOrConnectWithoutSorteioInput[]
    upsert?: SorteioBilheteUpsertWithWhereUniqueWithoutSorteioInput | SorteioBilheteUpsertWithWhereUniqueWithoutSorteioInput[]
    createMany?: SorteioBilheteCreateManySorteioInputEnvelope
    set?: SorteioBilheteWhereUniqueInput | SorteioBilheteWhereUniqueInput[]
    disconnect?: SorteioBilheteWhereUniqueInput | SorteioBilheteWhereUniqueInput[]
    delete?: SorteioBilheteWhereUniqueInput | SorteioBilheteWhereUniqueInput[]
    connect?: SorteioBilheteWhereUniqueInput | SorteioBilheteWhereUniqueInput[]
    update?: SorteioBilheteUpdateWithWhereUniqueWithoutSorteioInput | SorteioBilheteUpdateWithWhereUniqueWithoutSorteioInput[]
    updateMany?: SorteioBilheteUpdateManyWithWhereWithoutSorteioInput | SorteioBilheteUpdateManyWithWhereWithoutSorteioInput[]
    deleteMany?: SorteioBilheteScalarWhereInput | SorteioBilheteScalarWhereInput[]
  }

  export type SorteioBilheteUncheckedUpdateManyWithoutSorteioNestedInput = {
    create?: XOR<SorteioBilheteCreateWithoutSorteioInput, SorteioBilheteUncheckedCreateWithoutSorteioInput> | SorteioBilheteCreateWithoutSorteioInput[] | SorteioBilheteUncheckedCreateWithoutSorteioInput[]
    connectOrCreate?: SorteioBilheteCreateOrConnectWithoutSorteioInput | SorteioBilheteCreateOrConnectWithoutSorteioInput[]
    upsert?: SorteioBilheteUpsertWithWhereUniqueWithoutSorteioInput | SorteioBilheteUpsertWithWhereUniqueWithoutSorteioInput[]
    createMany?: SorteioBilheteCreateManySorteioInputEnvelope
    set?: SorteioBilheteWhereUniqueInput | SorteioBilheteWhereUniqueInput[]
    disconnect?: SorteioBilheteWhereUniqueInput | SorteioBilheteWhereUniqueInput[]
    delete?: SorteioBilheteWhereUniqueInput | SorteioBilheteWhereUniqueInput[]
    connect?: SorteioBilheteWhereUniqueInput | SorteioBilheteWhereUniqueInput[]
    update?: SorteioBilheteUpdateWithWhereUniqueWithoutSorteioInput | SorteioBilheteUpdateWithWhereUniqueWithoutSorteioInput[]
    updateMany?: SorteioBilheteUpdateManyWithWhereWithoutSorteioInput | SorteioBilheteUpdateManyWithWhereWithoutSorteioInput[]
    deleteMany?: SorteioBilheteScalarWhereInput | SorteioBilheteScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutNotificacoesInput = {
    create?: XOR<UsuarioCreateWithoutNotificacoesInput, UsuarioUncheckedCreateWithoutNotificacoesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutNotificacoesInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutNotificacoesNestedInput = {
    create?: XOR<UsuarioCreateWithoutNotificacoesInput, UsuarioUncheckedCreateWithoutNotificacoesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutNotificacoesInput
    upsert?: UsuarioUpsertWithoutNotificacoesInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutNotificacoesInput, UsuarioUpdateWithoutNotificacoesInput>, UsuarioUncheckedUpdateWithoutNotificacoesInput>
  }

  export type BilheteCreateNestedOneWithoutPagamentoInput = {
    create?: XOR<BilheteCreateWithoutPagamentoInput, BilheteUncheckedCreateWithoutPagamentoInput>
    connectOrCreate?: BilheteCreateOrConnectWithoutPagamentoInput
    connect?: BilheteWhereUniqueInput
  }

  export type ParticipanteCreateNestedOneWithoutPagamentosInput = {
    create?: XOR<ParticipanteCreateWithoutPagamentosInput, ParticipanteUncheckedCreateWithoutPagamentosInput>
    connectOrCreate?: ParticipanteCreateOrConnectWithoutPagamentosInput
    connect?: ParticipanteWhereUniqueInput
  }

  export type EnumStatusPagFieldUpdateOperationsInput = {
    set?: $Enums.StatusPag
  }

  export type EnumMetodoPagFieldUpdateOperationsInput = {
    set?: $Enums.MetodoPag
  }

  export type BilheteUpdateOneRequiredWithoutPagamentoNestedInput = {
    create?: XOR<BilheteCreateWithoutPagamentoInput, BilheteUncheckedCreateWithoutPagamentoInput>
    connectOrCreate?: BilheteCreateOrConnectWithoutPagamentoInput
    upsert?: BilheteUpsertWithoutPagamentoInput
    connect?: BilheteWhereUniqueInput
    update?: XOR<XOR<BilheteUpdateToOneWithWhereWithoutPagamentoInput, BilheteUpdateWithoutPagamentoInput>, BilheteUncheckedUpdateWithoutPagamentoInput>
  }

  export type ParticipanteUpdateOneRequiredWithoutPagamentosNestedInput = {
    create?: XOR<ParticipanteCreateWithoutPagamentosInput, ParticipanteUncheckedCreateWithoutPagamentosInput>
    connectOrCreate?: ParticipanteCreateOrConnectWithoutPagamentosInput
    upsert?: ParticipanteUpsertWithoutPagamentosInput
    connect?: ParticipanteWhereUniqueInput
    update?: XOR<XOR<ParticipanteUpdateToOneWithWhereWithoutPagamentosInput, ParticipanteUpdateWithoutPagamentosInput>, ParticipanteUncheckedUpdateWithoutPagamentosInput>
  }

  export type OrganizadorCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<OrganizadorCreateWithoutUsuarioInput, OrganizadorUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: OrganizadorCreateOrConnectWithoutUsuarioInput
    connect?: OrganizadorWhereUniqueInput
  }

  export type ParticipanteCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<ParticipanteCreateWithoutUsuarioInput, ParticipanteUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: ParticipanteCreateOrConnectWithoutUsuarioInput
    connect?: ParticipanteWhereUniqueInput
  }

  export type NotificacaoCreateNestedManyWithoutDestinatarioInput = {
    create?: XOR<NotificacaoCreateWithoutDestinatarioInput, NotificacaoUncheckedCreateWithoutDestinatarioInput> | NotificacaoCreateWithoutDestinatarioInput[] | NotificacaoUncheckedCreateWithoutDestinatarioInput[]
    connectOrCreate?: NotificacaoCreateOrConnectWithoutDestinatarioInput | NotificacaoCreateOrConnectWithoutDestinatarioInput[]
    createMany?: NotificacaoCreateManyDestinatarioInputEnvelope
    connect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
  }

  export type OrganizadorUncheckedCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<OrganizadorCreateWithoutUsuarioInput, OrganizadorUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: OrganizadorCreateOrConnectWithoutUsuarioInput
    connect?: OrganizadorWhereUniqueInput
  }

  export type ParticipanteUncheckedCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<ParticipanteCreateWithoutUsuarioInput, ParticipanteUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: ParticipanteCreateOrConnectWithoutUsuarioInput
    connect?: ParticipanteWhereUniqueInput
  }

  export type NotificacaoUncheckedCreateNestedManyWithoutDestinatarioInput = {
    create?: XOR<NotificacaoCreateWithoutDestinatarioInput, NotificacaoUncheckedCreateWithoutDestinatarioInput> | NotificacaoCreateWithoutDestinatarioInput[] | NotificacaoUncheckedCreateWithoutDestinatarioInput[]
    connectOrCreate?: NotificacaoCreateOrConnectWithoutDestinatarioInput | NotificacaoCreateOrConnectWithoutDestinatarioInput[]
    createMany?: NotificacaoCreateManyDestinatarioInputEnvelope
    connect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
  }

  export type OrganizadorUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<OrganizadorCreateWithoutUsuarioInput, OrganizadorUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: OrganizadorCreateOrConnectWithoutUsuarioInput
    upsert?: OrganizadorUpsertWithoutUsuarioInput
    disconnect?: OrganizadorWhereInput | boolean
    delete?: OrganizadorWhereInput | boolean
    connect?: OrganizadorWhereUniqueInput
    update?: XOR<XOR<OrganizadorUpdateToOneWithWhereWithoutUsuarioInput, OrganizadorUpdateWithoutUsuarioInput>, OrganizadorUncheckedUpdateWithoutUsuarioInput>
  }

  export type ParticipanteUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<ParticipanteCreateWithoutUsuarioInput, ParticipanteUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: ParticipanteCreateOrConnectWithoutUsuarioInput
    upsert?: ParticipanteUpsertWithoutUsuarioInput
    disconnect?: ParticipanteWhereInput | boolean
    delete?: ParticipanteWhereInput | boolean
    connect?: ParticipanteWhereUniqueInput
    update?: XOR<XOR<ParticipanteUpdateToOneWithWhereWithoutUsuarioInput, ParticipanteUpdateWithoutUsuarioInput>, ParticipanteUncheckedUpdateWithoutUsuarioInput>
  }

  export type NotificacaoUpdateManyWithoutDestinatarioNestedInput = {
    create?: XOR<NotificacaoCreateWithoutDestinatarioInput, NotificacaoUncheckedCreateWithoutDestinatarioInput> | NotificacaoCreateWithoutDestinatarioInput[] | NotificacaoUncheckedCreateWithoutDestinatarioInput[]
    connectOrCreate?: NotificacaoCreateOrConnectWithoutDestinatarioInput | NotificacaoCreateOrConnectWithoutDestinatarioInput[]
    upsert?: NotificacaoUpsertWithWhereUniqueWithoutDestinatarioInput | NotificacaoUpsertWithWhereUniqueWithoutDestinatarioInput[]
    createMany?: NotificacaoCreateManyDestinatarioInputEnvelope
    set?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    disconnect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    delete?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    connect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    update?: NotificacaoUpdateWithWhereUniqueWithoutDestinatarioInput | NotificacaoUpdateWithWhereUniqueWithoutDestinatarioInput[]
    updateMany?: NotificacaoUpdateManyWithWhereWithoutDestinatarioInput | NotificacaoUpdateManyWithWhereWithoutDestinatarioInput[]
    deleteMany?: NotificacaoScalarWhereInput | NotificacaoScalarWhereInput[]
  }

  export type OrganizadorUncheckedUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<OrganizadorCreateWithoutUsuarioInput, OrganizadorUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: OrganizadorCreateOrConnectWithoutUsuarioInput
    upsert?: OrganizadorUpsertWithoutUsuarioInput
    disconnect?: OrganizadorWhereInput | boolean
    delete?: OrganizadorWhereInput | boolean
    connect?: OrganizadorWhereUniqueInput
    update?: XOR<XOR<OrganizadorUpdateToOneWithWhereWithoutUsuarioInput, OrganizadorUpdateWithoutUsuarioInput>, OrganizadorUncheckedUpdateWithoutUsuarioInput>
  }

  export type ParticipanteUncheckedUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<ParticipanteCreateWithoutUsuarioInput, ParticipanteUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: ParticipanteCreateOrConnectWithoutUsuarioInput
    upsert?: ParticipanteUpsertWithoutUsuarioInput
    disconnect?: ParticipanteWhereInput | boolean
    delete?: ParticipanteWhereInput | boolean
    connect?: ParticipanteWhereUniqueInput
    update?: XOR<XOR<ParticipanteUpdateToOneWithWhereWithoutUsuarioInput, ParticipanteUpdateWithoutUsuarioInput>, ParticipanteUncheckedUpdateWithoutUsuarioInput>
  }

  export type NotificacaoUncheckedUpdateManyWithoutDestinatarioNestedInput = {
    create?: XOR<NotificacaoCreateWithoutDestinatarioInput, NotificacaoUncheckedCreateWithoutDestinatarioInput> | NotificacaoCreateWithoutDestinatarioInput[] | NotificacaoUncheckedCreateWithoutDestinatarioInput[]
    connectOrCreate?: NotificacaoCreateOrConnectWithoutDestinatarioInput | NotificacaoCreateOrConnectWithoutDestinatarioInput[]
    upsert?: NotificacaoUpsertWithWhereUniqueWithoutDestinatarioInput | NotificacaoUpsertWithWhereUniqueWithoutDestinatarioInput[]
    createMany?: NotificacaoCreateManyDestinatarioInputEnvelope
    set?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    disconnect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    delete?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    connect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    update?: NotificacaoUpdateWithWhereUniqueWithoutDestinatarioInput | NotificacaoUpdateWithWhereUniqueWithoutDestinatarioInput[]
    updateMany?: NotificacaoUpdateManyWithWhereWithoutDestinatarioInput | NotificacaoUpdateManyWithWhereWithoutDestinatarioInput[]
    deleteMany?: NotificacaoScalarWhereInput | NotificacaoScalarWhereInput[]
  }

  export type PremioCreateNestedOneWithoutParticipantesInput = {
    create?: XOR<PremioCreateWithoutParticipantesInput, PremioUncheckedCreateWithoutParticipantesInput>
    connectOrCreate?: PremioCreateOrConnectWithoutParticipantesInput
    connect?: PremioWhereUniqueInput
  }

  export type ParticipanteCreateNestedOneWithoutPremiosInput = {
    create?: XOR<ParticipanteCreateWithoutPremiosInput, ParticipanteUncheckedCreateWithoutPremiosInput>
    connectOrCreate?: ParticipanteCreateOrConnectWithoutPremiosInput
    connect?: ParticipanteWhereUniqueInput
  }

  export type PremioUpdateOneRequiredWithoutParticipantesNestedInput = {
    create?: XOR<PremioCreateWithoutParticipantesInput, PremioUncheckedCreateWithoutParticipantesInput>
    connectOrCreate?: PremioCreateOrConnectWithoutParticipantesInput
    upsert?: PremioUpsertWithoutParticipantesInput
    connect?: PremioWhereUniqueInput
    update?: XOR<XOR<PremioUpdateToOneWithWhereWithoutParticipantesInput, PremioUpdateWithoutParticipantesInput>, PremioUncheckedUpdateWithoutParticipantesInput>
  }

  export type ParticipanteUpdateOneRequiredWithoutPremiosNestedInput = {
    create?: XOR<ParticipanteCreateWithoutPremiosInput, ParticipanteUncheckedCreateWithoutPremiosInput>
    connectOrCreate?: ParticipanteCreateOrConnectWithoutPremiosInput
    upsert?: ParticipanteUpsertWithoutPremiosInput
    connect?: ParticipanteWhereUniqueInput
    update?: XOR<XOR<ParticipanteUpdateToOneWithWhereWithoutPremiosInput, ParticipanteUpdateWithoutPremiosInput>, ParticipanteUncheckedUpdateWithoutPremiosInput>
  }

  export type SorteioCreateNestedOneWithoutBilhetesInput = {
    create?: XOR<SorteioCreateWithoutBilhetesInput, SorteioUncheckedCreateWithoutBilhetesInput>
    connectOrCreate?: SorteioCreateOrConnectWithoutBilhetesInput
    connect?: SorteioWhereUniqueInput
  }

  export type BilheteCreateNestedOneWithoutSorteiosInput = {
    create?: XOR<BilheteCreateWithoutSorteiosInput, BilheteUncheckedCreateWithoutSorteiosInput>
    connectOrCreate?: BilheteCreateOrConnectWithoutSorteiosInput
    connect?: BilheteWhereUniqueInput
  }

  export type SorteioUpdateOneRequiredWithoutBilhetesNestedInput = {
    create?: XOR<SorteioCreateWithoutBilhetesInput, SorteioUncheckedCreateWithoutBilhetesInput>
    connectOrCreate?: SorteioCreateOrConnectWithoutBilhetesInput
    upsert?: SorteioUpsertWithoutBilhetesInput
    connect?: SorteioWhereUniqueInput
    update?: XOR<XOR<SorteioUpdateToOneWithWhereWithoutBilhetesInput, SorteioUpdateWithoutBilhetesInput>, SorteioUncheckedUpdateWithoutBilhetesInput>
  }

  export type BilheteUpdateOneRequiredWithoutSorteiosNestedInput = {
    create?: XOR<BilheteCreateWithoutSorteiosInput, BilheteUncheckedCreateWithoutSorteiosInput>
    connectOrCreate?: BilheteCreateOrConnectWithoutSorteiosInput
    upsert?: BilheteUpsertWithoutSorteiosInput
    connect?: BilheteWhereUniqueInput
    update?: XOR<XOR<BilheteUpdateToOneWithWhereWithoutSorteiosInput, BilheteUpdateWithoutSorteiosInput>, BilheteUncheckedUpdateWithoutSorteiosInput>
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumStatusRifaFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusRifa | EnumStatusRifaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusRifa[] | ListEnumStatusRifaFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusRifa[] | ListEnumStatusRifaFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusRifaFilter<$PrismaModel> | $Enums.StatusRifa
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumStatusRifaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusRifa | EnumStatusRifaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusRifa[] | ListEnumStatusRifaFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusRifa[] | ListEnumStatusRifaFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusRifaWithAggregatesFilter<$PrismaModel> | $Enums.StatusRifa
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusRifaFilter<$PrismaModel>
    _max?: NestedEnumStatusRifaFilter<$PrismaModel>
  }

  export type NestedEnumStatusBilFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusBil | EnumStatusBilFieldRefInput<$PrismaModel>
    in?: $Enums.StatusBil[] | ListEnumStatusBilFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusBil[] | ListEnumStatusBilFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusBilFilter<$PrismaModel> | $Enums.StatusBil
  }

  export type NestedEnumStatusBilWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusBil | EnumStatusBilFieldRefInput<$PrismaModel>
    in?: $Enums.StatusBil[] | ListEnumStatusBilFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusBil[] | ListEnumStatusBilFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusBilWithAggregatesFilter<$PrismaModel> | $Enums.StatusBil
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusBilFilter<$PrismaModel>
    _max?: NestedEnumStatusBilFilter<$PrismaModel>
  }

  export type NestedEnumStatusPagFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPag | EnumStatusPagFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPag[] | ListEnumStatusPagFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPag[] | ListEnumStatusPagFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPagFilter<$PrismaModel> | $Enums.StatusPag
  }

  export type NestedEnumMetodoPagFilter<$PrismaModel = never> = {
    equals?: $Enums.MetodoPag | EnumMetodoPagFieldRefInput<$PrismaModel>
    in?: $Enums.MetodoPag[] | ListEnumMetodoPagFieldRefInput<$PrismaModel>
    notIn?: $Enums.MetodoPag[] | ListEnumMetodoPagFieldRefInput<$PrismaModel>
    not?: NestedEnumMetodoPagFilter<$PrismaModel> | $Enums.MetodoPag
  }

  export type NestedEnumStatusPagWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPag | EnumStatusPagFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPag[] | ListEnumStatusPagFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPag[] | ListEnumStatusPagFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPagWithAggregatesFilter<$PrismaModel> | $Enums.StatusPag
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusPagFilter<$PrismaModel>
    _max?: NestedEnumStatusPagFilter<$PrismaModel>
  }

  export type NestedEnumMetodoPagWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MetodoPag | EnumMetodoPagFieldRefInput<$PrismaModel>
    in?: $Enums.MetodoPag[] | ListEnumMetodoPagFieldRefInput<$PrismaModel>
    notIn?: $Enums.MetodoPag[] | ListEnumMetodoPagFieldRefInput<$PrismaModel>
    not?: NestedEnumMetodoPagWithAggregatesFilter<$PrismaModel> | $Enums.MetodoPag
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMetodoPagFilter<$PrismaModel>
    _max?: NestedEnumMetodoPagFilter<$PrismaModel>
  }

  export type RifaCreateWithoutLogsInput = {
    titulo: string
    descricao: string
    precoBilhete: number
    quantidadeBilhetes: number
    dataSorteio?: Date | string | null
    status?: $Enums.StatusRifa
    createdAt?: Date | string
    organizador: OrganizadorCreateNestedOneWithoutRifasInput
    sorteios?: SorteioCreateNestedManyWithoutRifaInput
    bilhetes?: BilheteCreateNestedManyWithoutRifaInput
    premio?: PremioCreateNestedOneWithoutRifaInput
  }

  export type RifaUncheckedCreateWithoutLogsInput = {
    id?: number
    titulo: string
    descricao: string
    precoBilhete: number
    quantidadeBilhetes: number
    dataSorteio?: Date | string | null
    status?: $Enums.StatusRifa
    createdAt?: Date | string
    organizadorId: number
    sorteios?: SorteioUncheckedCreateNestedManyWithoutRifaInput
    bilhetes?: BilheteUncheckedCreateNestedManyWithoutRifaInput
    premio?: PremioUncheckedCreateNestedOneWithoutRifaInput
  }

  export type RifaCreateOrConnectWithoutLogsInput = {
    where: RifaWhereUniqueInput
    create: XOR<RifaCreateWithoutLogsInput, RifaUncheckedCreateWithoutLogsInput>
  }

  export type RifaUpsertWithoutLogsInput = {
    update: XOR<RifaUpdateWithoutLogsInput, RifaUncheckedUpdateWithoutLogsInput>
    create: XOR<RifaCreateWithoutLogsInput, RifaUncheckedCreateWithoutLogsInput>
    where?: RifaWhereInput
  }

  export type RifaUpdateToOneWithWhereWithoutLogsInput = {
    where?: RifaWhereInput
    data: XOR<RifaUpdateWithoutLogsInput, RifaUncheckedUpdateWithoutLogsInput>
  }

  export type RifaUpdateWithoutLogsInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    precoBilhete?: FloatFieldUpdateOperationsInput | number
    quantidadeBilhetes?: IntFieldUpdateOperationsInput | number
    dataSorteio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusRifaFieldUpdateOperationsInput | $Enums.StatusRifa
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizador?: OrganizadorUpdateOneRequiredWithoutRifasNestedInput
    sorteios?: SorteioUpdateManyWithoutRifaNestedInput
    bilhetes?: BilheteUpdateManyWithoutRifaNestedInput
    premio?: PremioUpdateOneWithoutRifaNestedInput
  }

  export type RifaUncheckedUpdateWithoutLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    precoBilhete?: FloatFieldUpdateOperationsInput | number
    quantidadeBilhetes?: IntFieldUpdateOperationsInput | number
    dataSorteio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusRifaFieldUpdateOperationsInput | $Enums.StatusRifa
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizadorId?: IntFieldUpdateOperationsInput | number
    sorteios?: SorteioUncheckedUpdateManyWithoutRifaNestedInput
    bilhetes?: BilheteUncheckedUpdateManyWithoutRifaNestedInput
    premio?: PremioUncheckedUpdateOneWithoutRifaNestedInput
  }

  export type RifaCreateWithoutPremioInput = {
    titulo: string
    descricao: string
    precoBilhete: number
    quantidadeBilhetes: number
    dataSorteio?: Date | string | null
    status?: $Enums.StatusRifa
    createdAt?: Date | string
    organizador: OrganizadorCreateNestedOneWithoutRifasInput
    sorteios?: SorteioCreateNestedManyWithoutRifaInput
    bilhetes?: BilheteCreateNestedManyWithoutRifaInput
    logs?: LogAuditoriaCreateNestedManyWithoutRifaInput
  }

  export type RifaUncheckedCreateWithoutPremioInput = {
    id?: number
    titulo: string
    descricao: string
    precoBilhete: number
    quantidadeBilhetes: number
    dataSorteio?: Date | string | null
    status?: $Enums.StatusRifa
    createdAt?: Date | string
    organizadorId: number
    sorteios?: SorteioUncheckedCreateNestedManyWithoutRifaInput
    bilhetes?: BilheteUncheckedCreateNestedManyWithoutRifaInput
    logs?: LogAuditoriaUncheckedCreateNestedManyWithoutRifaInput
  }

  export type RifaCreateOrConnectWithoutPremioInput = {
    where: RifaWhereUniqueInput
    create: XOR<RifaCreateWithoutPremioInput, RifaUncheckedCreateWithoutPremioInput>
  }

  export type PremioParticipanteCreateWithoutPremioInput = {
    dataPremiacao?: Date | string
    participante: ParticipanteCreateNestedOneWithoutPremiosInput
  }

  export type PremioParticipanteUncheckedCreateWithoutPremioInput = {
    participanteId: number
    dataPremiacao?: Date | string
  }

  export type PremioParticipanteCreateOrConnectWithoutPremioInput = {
    where: PremioParticipanteWhereUniqueInput
    create: XOR<PremioParticipanteCreateWithoutPremioInput, PremioParticipanteUncheckedCreateWithoutPremioInput>
  }

  export type PremioParticipanteCreateManyPremioInputEnvelope = {
    data: PremioParticipanteCreateManyPremioInput | PremioParticipanteCreateManyPremioInput[]
    skipDuplicates?: boolean
  }

  export type RifaUpsertWithoutPremioInput = {
    update: XOR<RifaUpdateWithoutPremioInput, RifaUncheckedUpdateWithoutPremioInput>
    create: XOR<RifaCreateWithoutPremioInput, RifaUncheckedCreateWithoutPremioInput>
    where?: RifaWhereInput
  }

  export type RifaUpdateToOneWithWhereWithoutPremioInput = {
    where?: RifaWhereInput
    data: XOR<RifaUpdateWithoutPremioInput, RifaUncheckedUpdateWithoutPremioInput>
  }

  export type RifaUpdateWithoutPremioInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    precoBilhete?: FloatFieldUpdateOperationsInput | number
    quantidadeBilhetes?: IntFieldUpdateOperationsInput | number
    dataSorteio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusRifaFieldUpdateOperationsInput | $Enums.StatusRifa
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizador?: OrganizadorUpdateOneRequiredWithoutRifasNestedInput
    sorteios?: SorteioUpdateManyWithoutRifaNestedInput
    bilhetes?: BilheteUpdateManyWithoutRifaNestedInput
    logs?: LogAuditoriaUpdateManyWithoutRifaNestedInput
  }

  export type RifaUncheckedUpdateWithoutPremioInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    precoBilhete?: FloatFieldUpdateOperationsInput | number
    quantidadeBilhetes?: IntFieldUpdateOperationsInput | number
    dataSorteio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusRifaFieldUpdateOperationsInput | $Enums.StatusRifa
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizadorId?: IntFieldUpdateOperationsInput | number
    sorteios?: SorteioUncheckedUpdateManyWithoutRifaNestedInput
    bilhetes?: BilheteUncheckedUpdateManyWithoutRifaNestedInput
    logs?: LogAuditoriaUncheckedUpdateManyWithoutRifaNestedInput
  }

  export type PremioParticipanteUpsertWithWhereUniqueWithoutPremioInput = {
    where: PremioParticipanteWhereUniqueInput
    update: XOR<PremioParticipanteUpdateWithoutPremioInput, PremioParticipanteUncheckedUpdateWithoutPremioInput>
    create: XOR<PremioParticipanteCreateWithoutPremioInput, PremioParticipanteUncheckedCreateWithoutPremioInput>
  }

  export type PremioParticipanteUpdateWithWhereUniqueWithoutPremioInput = {
    where: PremioParticipanteWhereUniqueInput
    data: XOR<PremioParticipanteUpdateWithoutPremioInput, PremioParticipanteUncheckedUpdateWithoutPremioInput>
  }

  export type PremioParticipanteUpdateManyWithWhereWithoutPremioInput = {
    where: PremioParticipanteScalarWhereInput
    data: XOR<PremioParticipanteUpdateManyMutationInput, PremioParticipanteUncheckedUpdateManyWithoutPremioInput>
  }

  export type PremioParticipanteScalarWhereInput = {
    AND?: PremioParticipanteScalarWhereInput | PremioParticipanteScalarWhereInput[]
    OR?: PremioParticipanteScalarWhereInput[]
    NOT?: PremioParticipanteScalarWhereInput | PremioParticipanteScalarWhereInput[]
    premioId?: IntFilter<"PremioParticipante"> | number
    participanteId?: IntFilter<"PremioParticipante"> | number
    dataPremiacao?: DateTimeFilter<"PremioParticipante"> | Date | string
  }

  export type OrganizadorCreateWithoutRifasInput = {
    cnpj?: string | null
    usuario: UsuarioCreateNestedOneWithoutOrganizadorInput
  }

  export type OrganizadorUncheckedCreateWithoutRifasInput = {
    id?: number
    cnpj?: string | null
    userId: number
  }

  export type OrganizadorCreateOrConnectWithoutRifasInput = {
    where: OrganizadorWhereUniqueInput
    create: XOR<OrganizadorCreateWithoutRifasInput, OrganizadorUncheckedCreateWithoutRifasInput>
  }

  export type SorteioCreateWithoutRifaInput = {
    dataHora?: Date | string
    vencedor?: ParticipanteCreateNestedOneWithoutVitoriasInput
    bilhetes?: SorteioBilheteCreateNestedManyWithoutSorteioInput
  }

  export type SorteioUncheckedCreateWithoutRifaInput = {
    id?: number
    dataHora?: Date | string
    vencedorId?: number | null
    bilhetes?: SorteioBilheteUncheckedCreateNestedManyWithoutSorteioInput
  }

  export type SorteioCreateOrConnectWithoutRifaInput = {
    where: SorteioWhereUniqueInput
    create: XOR<SorteioCreateWithoutRifaInput, SorteioUncheckedCreateWithoutRifaInput>
  }

  export type SorteioCreateManyRifaInputEnvelope = {
    data: SorteioCreateManyRifaInput | SorteioCreateManyRifaInput[]
    skipDuplicates?: boolean
  }

  export type BilheteCreateWithoutRifaInput = {
    numero: number
    status?: $Enums.StatusBil
    createdAt?: Date | string
    participante?: ParticipanteCreateNestedOneWithoutBilhetesInput
    pagamento?: PagamentoCreateNestedOneWithoutBilheteInput
    sorteios?: SorteioBilheteCreateNestedManyWithoutBilheteInput
  }

  export type BilheteUncheckedCreateWithoutRifaInput = {
    id?: number
    numero: number
    status?: $Enums.StatusBil
    createdAt?: Date | string
    participanteId?: number | null
    pagamento?: PagamentoUncheckedCreateNestedOneWithoutBilheteInput
    sorteios?: SorteioBilheteUncheckedCreateNestedManyWithoutBilheteInput
  }

  export type BilheteCreateOrConnectWithoutRifaInput = {
    where: BilheteWhereUniqueInput
    create: XOR<BilheteCreateWithoutRifaInput, BilheteUncheckedCreateWithoutRifaInput>
  }

  export type BilheteCreateManyRifaInputEnvelope = {
    data: BilheteCreateManyRifaInput | BilheteCreateManyRifaInput[]
    skipDuplicates?: boolean
  }

  export type PremioCreateWithoutRifaInput = {
    nome: string
    descricao: string
    imagem?: string | null
    participantes?: PremioParticipanteCreateNestedManyWithoutPremioInput
  }

  export type PremioUncheckedCreateWithoutRifaInput = {
    id?: number
    nome: string
    descricao: string
    imagem?: string | null
    participantes?: PremioParticipanteUncheckedCreateNestedManyWithoutPremioInput
  }

  export type PremioCreateOrConnectWithoutRifaInput = {
    where: PremioWhereUniqueInput
    create: XOR<PremioCreateWithoutRifaInput, PremioUncheckedCreateWithoutRifaInput>
  }

  export type LogAuditoriaCreateWithoutRifaInput = {
    acao: string
    createdAt?: Date | string
    detalhes?: string | null
  }

  export type LogAuditoriaUncheckedCreateWithoutRifaInput = {
    id?: number
    acao: string
    createdAt?: Date | string
    detalhes?: string | null
  }

  export type LogAuditoriaCreateOrConnectWithoutRifaInput = {
    where: LogAuditoriaWhereUniqueInput
    create: XOR<LogAuditoriaCreateWithoutRifaInput, LogAuditoriaUncheckedCreateWithoutRifaInput>
  }

  export type LogAuditoriaCreateManyRifaInputEnvelope = {
    data: LogAuditoriaCreateManyRifaInput | LogAuditoriaCreateManyRifaInput[]
    skipDuplicates?: boolean
  }

  export type OrganizadorUpsertWithoutRifasInput = {
    update: XOR<OrganizadorUpdateWithoutRifasInput, OrganizadorUncheckedUpdateWithoutRifasInput>
    create: XOR<OrganizadorCreateWithoutRifasInput, OrganizadorUncheckedCreateWithoutRifasInput>
    where?: OrganizadorWhereInput
  }

  export type OrganizadorUpdateToOneWithWhereWithoutRifasInput = {
    where?: OrganizadorWhereInput
    data: XOR<OrganizadorUpdateWithoutRifasInput, OrganizadorUncheckedUpdateWithoutRifasInput>
  }

  export type OrganizadorUpdateWithoutRifasInput = {
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: UsuarioUpdateOneRequiredWithoutOrganizadorNestedInput
  }

  export type OrganizadorUncheckedUpdateWithoutRifasInput = {
    id?: IntFieldUpdateOperationsInput | number
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type SorteioUpsertWithWhereUniqueWithoutRifaInput = {
    where: SorteioWhereUniqueInput
    update: XOR<SorteioUpdateWithoutRifaInput, SorteioUncheckedUpdateWithoutRifaInput>
    create: XOR<SorteioCreateWithoutRifaInput, SorteioUncheckedCreateWithoutRifaInput>
  }

  export type SorteioUpdateWithWhereUniqueWithoutRifaInput = {
    where: SorteioWhereUniqueInput
    data: XOR<SorteioUpdateWithoutRifaInput, SorteioUncheckedUpdateWithoutRifaInput>
  }

  export type SorteioUpdateManyWithWhereWithoutRifaInput = {
    where: SorteioScalarWhereInput
    data: XOR<SorteioUpdateManyMutationInput, SorteioUncheckedUpdateManyWithoutRifaInput>
  }

  export type SorteioScalarWhereInput = {
    AND?: SorteioScalarWhereInput | SorteioScalarWhereInput[]
    OR?: SorteioScalarWhereInput[]
    NOT?: SorteioScalarWhereInput | SorteioScalarWhereInput[]
    id?: IntFilter<"Sorteio"> | number
    dataHora?: DateTimeFilter<"Sorteio"> | Date | string
    rifaId?: IntFilter<"Sorteio"> | number
    vencedorId?: IntNullableFilter<"Sorteio"> | number | null
  }

  export type BilheteUpsertWithWhereUniqueWithoutRifaInput = {
    where: BilheteWhereUniqueInput
    update: XOR<BilheteUpdateWithoutRifaInput, BilheteUncheckedUpdateWithoutRifaInput>
    create: XOR<BilheteCreateWithoutRifaInput, BilheteUncheckedCreateWithoutRifaInput>
  }

  export type BilheteUpdateWithWhereUniqueWithoutRifaInput = {
    where: BilheteWhereUniqueInput
    data: XOR<BilheteUpdateWithoutRifaInput, BilheteUncheckedUpdateWithoutRifaInput>
  }

  export type BilheteUpdateManyWithWhereWithoutRifaInput = {
    where: BilheteScalarWhereInput
    data: XOR<BilheteUpdateManyMutationInput, BilheteUncheckedUpdateManyWithoutRifaInput>
  }

  export type BilheteScalarWhereInput = {
    AND?: BilheteScalarWhereInput | BilheteScalarWhereInput[]
    OR?: BilheteScalarWhereInput[]
    NOT?: BilheteScalarWhereInput | BilheteScalarWhereInput[]
    id?: IntFilter<"Bilhete"> | number
    numero?: IntFilter<"Bilhete"> | number
    status?: EnumStatusBilFilter<"Bilhete"> | $Enums.StatusBil
    createdAt?: DateTimeFilter<"Bilhete"> | Date | string
    rifaId?: IntFilter<"Bilhete"> | number
    participanteId?: IntNullableFilter<"Bilhete"> | number | null
  }

  export type PremioUpsertWithoutRifaInput = {
    update: XOR<PremioUpdateWithoutRifaInput, PremioUncheckedUpdateWithoutRifaInput>
    create: XOR<PremioCreateWithoutRifaInput, PremioUncheckedCreateWithoutRifaInput>
    where?: PremioWhereInput
  }

  export type PremioUpdateToOneWithWhereWithoutRifaInput = {
    where?: PremioWhereInput
    data: XOR<PremioUpdateWithoutRifaInput, PremioUncheckedUpdateWithoutRifaInput>
  }

  export type PremioUpdateWithoutRifaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    participantes?: PremioParticipanteUpdateManyWithoutPremioNestedInput
  }

  export type PremioUncheckedUpdateWithoutRifaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    participantes?: PremioParticipanteUncheckedUpdateManyWithoutPremioNestedInput
  }

  export type LogAuditoriaUpsertWithWhereUniqueWithoutRifaInput = {
    where: LogAuditoriaWhereUniqueInput
    update: XOR<LogAuditoriaUpdateWithoutRifaInput, LogAuditoriaUncheckedUpdateWithoutRifaInput>
    create: XOR<LogAuditoriaCreateWithoutRifaInput, LogAuditoriaUncheckedCreateWithoutRifaInput>
  }

  export type LogAuditoriaUpdateWithWhereUniqueWithoutRifaInput = {
    where: LogAuditoriaWhereUniqueInput
    data: XOR<LogAuditoriaUpdateWithoutRifaInput, LogAuditoriaUncheckedUpdateWithoutRifaInput>
  }

  export type LogAuditoriaUpdateManyWithWhereWithoutRifaInput = {
    where: LogAuditoriaScalarWhereInput
    data: XOR<LogAuditoriaUpdateManyMutationInput, LogAuditoriaUncheckedUpdateManyWithoutRifaInput>
  }

  export type LogAuditoriaScalarWhereInput = {
    AND?: LogAuditoriaScalarWhereInput | LogAuditoriaScalarWhereInput[]
    OR?: LogAuditoriaScalarWhereInput[]
    NOT?: LogAuditoriaScalarWhereInput | LogAuditoriaScalarWhereInput[]
    id?: IntFilter<"LogAuditoria"> | number
    acao?: StringFilter<"LogAuditoria"> | string
    createdAt?: DateTimeFilter<"LogAuditoria"> | Date | string
    detalhes?: StringNullableFilter<"LogAuditoria"> | string | null
    rifaId?: IntFilter<"LogAuditoria"> | number
  }

  export type UsuarioCreateWithoutOrganizadorInput = {
    nome: string
    email: string
    cpf: string
    senha: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    participante?: ParticipanteCreateNestedOneWithoutUsuarioInput
    notificacoes?: NotificacaoCreateNestedManyWithoutDestinatarioInput
  }

  export type UsuarioUncheckedCreateWithoutOrganizadorInput = {
    id?: number
    nome: string
    email: string
    cpf: string
    senha: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    participante?: ParticipanteUncheckedCreateNestedOneWithoutUsuarioInput
    notificacoes?: NotificacaoUncheckedCreateNestedManyWithoutDestinatarioInput
  }

  export type UsuarioCreateOrConnectWithoutOrganizadorInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutOrganizadorInput, UsuarioUncheckedCreateWithoutOrganizadorInput>
  }

  export type RifaCreateWithoutOrganizadorInput = {
    titulo: string
    descricao: string
    precoBilhete: number
    quantidadeBilhetes: number
    dataSorteio?: Date | string | null
    status?: $Enums.StatusRifa
    createdAt?: Date | string
    sorteios?: SorteioCreateNestedManyWithoutRifaInput
    bilhetes?: BilheteCreateNestedManyWithoutRifaInput
    premio?: PremioCreateNestedOneWithoutRifaInput
    logs?: LogAuditoriaCreateNestedManyWithoutRifaInput
  }

  export type RifaUncheckedCreateWithoutOrganizadorInput = {
    id?: number
    titulo: string
    descricao: string
    precoBilhete: number
    quantidadeBilhetes: number
    dataSorteio?: Date | string | null
    status?: $Enums.StatusRifa
    createdAt?: Date | string
    sorteios?: SorteioUncheckedCreateNestedManyWithoutRifaInput
    bilhetes?: BilheteUncheckedCreateNestedManyWithoutRifaInput
    premio?: PremioUncheckedCreateNestedOneWithoutRifaInput
    logs?: LogAuditoriaUncheckedCreateNestedManyWithoutRifaInput
  }

  export type RifaCreateOrConnectWithoutOrganizadorInput = {
    where: RifaWhereUniqueInput
    create: XOR<RifaCreateWithoutOrganizadorInput, RifaUncheckedCreateWithoutOrganizadorInput>
  }

  export type RifaCreateManyOrganizadorInputEnvelope = {
    data: RifaCreateManyOrganizadorInput | RifaCreateManyOrganizadorInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutOrganizadorInput = {
    update: XOR<UsuarioUpdateWithoutOrganizadorInput, UsuarioUncheckedUpdateWithoutOrganizadorInput>
    create: XOR<UsuarioCreateWithoutOrganizadorInput, UsuarioUncheckedCreateWithoutOrganizadorInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutOrganizadorInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutOrganizadorInput, UsuarioUncheckedUpdateWithoutOrganizadorInput>
  }

  export type UsuarioUpdateWithoutOrganizadorInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    participante?: ParticipanteUpdateOneWithoutUsuarioNestedInput
    notificacoes?: NotificacaoUpdateManyWithoutDestinatarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutOrganizadorInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    participante?: ParticipanteUncheckedUpdateOneWithoutUsuarioNestedInput
    notificacoes?: NotificacaoUncheckedUpdateManyWithoutDestinatarioNestedInput
  }

  export type RifaUpsertWithWhereUniqueWithoutOrganizadorInput = {
    where: RifaWhereUniqueInput
    update: XOR<RifaUpdateWithoutOrganizadorInput, RifaUncheckedUpdateWithoutOrganizadorInput>
    create: XOR<RifaCreateWithoutOrganizadorInput, RifaUncheckedCreateWithoutOrganizadorInput>
  }

  export type RifaUpdateWithWhereUniqueWithoutOrganizadorInput = {
    where: RifaWhereUniqueInput
    data: XOR<RifaUpdateWithoutOrganizadorInput, RifaUncheckedUpdateWithoutOrganizadorInput>
  }

  export type RifaUpdateManyWithWhereWithoutOrganizadorInput = {
    where: RifaScalarWhereInput
    data: XOR<RifaUpdateManyMutationInput, RifaUncheckedUpdateManyWithoutOrganizadorInput>
  }

  export type RifaScalarWhereInput = {
    AND?: RifaScalarWhereInput | RifaScalarWhereInput[]
    OR?: RifaScalarWhereInput[]
    NOT?: RifaScalarWhereInput | RifaScalarWhereInput[]
    id?: IntFilter<"Rifa"> | number
    titulo?: StringFilter<"Rifa"> | string
    descricao?: StringFilter<"Rifa"> | string
    precoBilhete?: FloatFilter<"Rifa"> | number
    quantidadeBilhetes?: IntFilter<"Rifa"> | number
    dataSorteio?: DateTimeNullableFilter<"Rifa"> | Date | string | null
    status?: EnumStatusRifaFilter<"Rifa"> | $Enums.StatusRifa
    createdAt?: DateTimeFilter<"Rifa"> | Date | string
    organizadorId?: IntFilter<"Rifa"> | number
  }

  export type UsuarioCreateWithoutParticipanteInput = {
    nome: string
    email: string
    cpf: string
    senha: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    organizador?: OrganizadorCreateNestedOneWithoutUsuarioInput
    notificacoes?: NotificacaoCreateNestedManyWithoutDestinatarioInput
  }

  export type UsuarioUncheckedCreateWithoutParticipanteInput = {
    id?: number
    nome: string
    email: string
    cpf: string
    senha: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    organizador?: OrganizadorUncheckedCreateNestedOneWithoutUsuarioInput
    notificacoes?: NotificacaoUncheckedCreateNestedManyWithoutDestinatarioInput
  }

  export type UsuarioCreateOrConnectWithoutParticipanteInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutParticipanteInput, UsuarioUncheckedCreateWithoutParticipanteInput>
  }

  export type BilheteCreateWithoutParticipanteInput = {
    numero: number
    status?: $Enums.StatusBil
    createdAt?: Date | string
    rifa: RifaCreateNestedOneWithoutBilhetesInput
    pagamento?: PagamentoCreateNestedOneWithoutBilheteInput
    sorteios?: SorteioBilheteCreateNestedManyWithoutBilheteInput
  }

  export type BilheteUncheckedCreateWithoutParticipanteInput = {
    id?: number
    numero: number
    status?: $Enums.StatusBil
    createdAt?: Date | string
    rifaId: number
    pagamento?: PagamentoUncheckedCreateNestedOneWithoutBilheteInput
    sorteios?: SorteioBilheteUncheckedCreateNestedManyWithoutBilheteInput
  }

  export type BilheteCreateOrConnectWithoutParticipanteInput = {
    where: BilheteWhereUniqueInput
    create: XOR<BilheteCreateWithoutParticipanteInput, BilheteUncheckedCreateWithoutParticipanteInput>
  }

  export type BilheteCreateManyParticipanteInputEnvelope = {
    data: BilheteCreateManyParticipanteInput | BilheteCreateManyParticipanteInput[]
    skipDuplicates?: boolean
  }

  export type PagamentoCreateWithoutParticipanteInput = {
    valor: number
    status?: $Enums.StatusPag
    metodo: $Enums.MetodoPag
    dataProcessamento?: Date | string
    bilhete: BilheteCreateNestedOneWithoutPagamentoInput
  }

  export type PagamentoUncheckedCreateWithoutParticipanteInput = {
    id?: number
    valor: number
    status?: $Enums.StatusPag
    metodo: $Enums.MetodoPag
    dataProcessamento?: Date | string
    bilheteId: number
  }

  export type PagamentoCreateOrConnectWithoutParticipanteInput = {
    where: PagamentoWhereUniqueInput
    create: XOR<PagamentoCreateWithoutParticipanteInput, PagamentoUncheckedCreateWithoutParticipanteInput>
  }

  export type PagamentoCreateManyParticipanteInputEnvelope = {
    data: PagamentoCreateManyParticipanteInput | PagamentoCreateManyParticipanteInput[]
    skipDuplicates?: boolean
  }

  export type PremioParticipanteCreateWithoutParticipanteInput = {
    dataPremiacao?: Date | string
    premio: PremioCreateNestedOneWithoutParticipantesInput
  }

  export type PremioParticipanteUncheckedCreateWithoutParticipanteInput = {
    premioId: number
    dataPremiacao?: Date | string
  }

  export type PremioParticipanteCreateOrConnectWithoutParticipanteInput = {
    where: PremioParticipanteWhereUniqueInput
    create: XOR<PremioParticipanteCreateWithoutParticipanteInput, PremioParticipanteUncheckedCreateWithoutParticipanteInput>
  }

  export type PremioParticipanteCreateManyParticipanteInputEnvelope = {
    data: PremioParticipanteCreateManyParticipanteInput | PremioParticipanteCreateManyParticipanteInput[]
    skipDuplicates?: boolean
  }

  export type SorteioCreateWithoutVencedorInput = {
    dataHora?: Date | string
    rifa: RifaCreateNestedOneWithoutSorteiosInput
    bilhetes?: SorteioBilheteCreateNestedManyWithoutSorteioInput
  }

  export type SorteioUncheckedCreateWithoutVencedorInput = {
    id?: number
    dataHora?: Date | string
    rifaId: number
    bilhetes?: SorteioBilheteUncheckedCreateNestedManyWithoutSorteioInput
  }

  export type SorteioCreateOrConnectWithoutVencedorInput = {
    where: SorteioWhereUniqueInput
    create: XOR<SorteioCreateWithoutVencedorInput, SorteioUncheckedCreateWithoutVencedorInput>
  }

  export type SorteioCreateManyVencedorInputEnvelope = {
    data: SorteioCreateManyVencedorInput | SorteioCreateManyVencedorInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutParticipanteInput = {
    update: XOR<UsuarioUpdateWithoutParticipanteInput, UsuarioUncheckedUpdateWithoutParticipanteInput>
    create: XOR<UsuarioCreateWithoutParticipanteInput, UsuarioUncheckedCreateWithoutParticipanteInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutParticipanteInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutParticipanteInput, UsuarioUncheckedUpdateWithoutParticipanteInput>
  }

  export type UsuarioUpdateWithoutParticipanteInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    organizador?: OrganizadorUpdateOneWithoutUsuarioNestedInput
    notificacoes?: NotificacaoUpdateManyWithoutDestinatarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutParticipanteInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    organizador?: OrganizadorUncheckedUpdateOneWithoutUsuarioNestedInput
    notificacoes?: NotificacaoUncheckedUpdateManyWithoutDestinatarioNestedInput
  }

  export type BilheteUpsertWithWhereUniqueWithoutParticipanteInput = {
    where: BilheteWhereUniqueInput
    update: XOR<BilheteUpdateWithoutParticipanteInput, BilheteUncheckedUpdateWithoutParticipanteInput>
    create: XOR<BilheteCreateWithoutParticipanteInput, BilheteUncheckedCreateWithoutParticipanteInput>
  }

  export type BilheteUpdateWithWhereUniqueWithoutParticipanteInput = {
    where: BilheteWhereUniqueInput
    data: XOR<BilheteUpdateWithoutParticipanteInput, BilheteUncheckedUpdateWithoutParticipanteInput>
  }

  export type BilheteUpdateManyWithWhereWithoutParticipanteInput = {
    where: BilheteScalarWhereInput
    data: XOR<BilheteUpdateManyMutationInput, BilheteUncheckedUpdateManyWithoutParticipanteInput>
  }

  export type PagamentoUpsertWithWhereUniqueWithoutParticipanteInput = {
    where: PagamentoWhereUniqueInput
    update: XOR<PagamentoUpdateWithoutParticipanteInput, PagamentoUncheckedUpdateWithoutParticipanteInput>
    create: XOR<PagamentoCreateWithoutParticipanteInput, PagamentoUncheckedCreateWithoutParticipanteInput>
  }

  export type PagamentoUpdateWithWhereUniqueWithoutParticipanteInput = {
    where: PagamentoWhereUniqueInput
    data: XOR<PagamentoUpdateWithoutParticipanteInput, PagamentoUncheckedUpdateWithoutParticipanteInput>
  }

  export type PagamentoUpdateManyWithWhereWithoutParticipanteInput = {
    where: PagamentoScalarWhereInput
    data: XOR<PagamentoUpdateManyMutationInput, PagamentoUncheckedUpdateManyWithoutParticipanteInput>
  }

  export type PagamentoScalarWhereInput = {
    AND?: PagamentoScalarWhereInput | PagamentoScalarWhereInput[]
    OR?: PagamentoScalarWhereInput[]
    NOT?: PagamentoScalarWhereInput | PagamentoScalarWhereInput[]
    id?: IntFilter<"Pagamento"> | number
    valor?: FloatFilter<"Pagamento"> | number
    status?: EnumStatusPagFilter<"Pagamento"> | $Enums.StatusPag
    metodo?: EnumMetodoPagFilter<"Pagamento"> | $Enums.MetodoPag
    dataProcessamento?: DateTimeFilter<"Pagamento"> | Date | string
    bilheteId?: IntFilter<"Pagamento"> | number
    participanteId?: IntFilter<"Pagamento"> | number
  }

  export type PremioParticipanteUpsertWithWhereUniqueWithoutParticipanteInput = {
    where: PremioParticipanteWhereUniqueInput
    update: XOR<PremioParticipanteUpdateWithoutParticipanteInput, PremioParticipanteUncheckedUpdateWithoutParticipanteInput>
    create: XOR<PremioParticipanteCreateWithoutParticipanteInput, PremioParticipanteUncheckedCreateWithoutParticipanteInput>
  }

  export type PremioParticipanteUpdateWithWhereUniqueWithoutParticipanteInput = {
    where: PremioParticipanteWhereUniqueInput
    data: XOR<PremioParticipanteUpdateWithoutParticipanteInput, PremioParticipanteUncheckedUpdateWithoutParticipanteInput>
  }

  export type PremioParticipanteUpdateManyWithWhereWithoutParticipanteInput = {
    where: PremioParticipanteScalarWhereInput
    data: XOR<PremioParticipanteUpdateManyMutationInput, PremioParticipanteUncheckedUpdateManyWithoutParticipanteInput>
  }

  export type SorteioUpsertWithWhereUniqueWithoutVencedorInput = {
    where: SorteioWhereUniqueInput
    update: XOR<SorteioUpdateWithoutVencedorInput, SorteioUncheckedUpdateWithoutVencedorInput>
    create: XOR<SorteioCreateWithoutVencedorInput, SorteioUncheckedCreateWithoutVencedorInput>
  }

  export type SorteioUpdateWithWhereUniqueWithoutVencedorInput = {
    where: SorteioWhereUniqueInput
    data: XOR<SorteioUpdateWithoutVencedorInput, SorteioUncheckedUpdateWithoutVencedorInput>
  }

  export type SorteioUpdateManyWithWhereWithoutVencedorInput = {
    where: SorteioScalarWhereInput
    data: XOR<SorteioUpdateManyMutationInput, SorteioUncheckedUpdateManyWithoutVencedorInput>
  }

  export type RifaCreateWithoutBilhetesInput = {
    titulo: string
    descricao: string
    precoBilhete: number
    quantidadeBilhetes: number
    dataSorteio?: Date | string | null
    status?: $Enums.StatusRifa
    createdAt?: Date | string
    organizador: OrganizadorCreateNestedOneWithoutRifasInput
    sorteios?: SorteioCreateNestedManyWithoutRifaInput
    premio?: PremioCreateNestedOneWithoutRifaInput
    logs?: LogAuditoriaCreateNestedManyWithoutRifaInput
  }

  export type RifaUncheckedCreateWithoutBilhetesInput = {
    id?: number
    titulo: string
    descricao: string
    precoBilhete: number
    quantidadeBilhetes: number
    dataSorteio?: Date | string | null
    status?: $Enums.StatusRifa
    createdAt?: Date | string
    organizadorId: number
    sorteios?: SorteioUncheckedCreateNestedManyWithoutRifaInput
    premio?: PremioUncheckedCreateNestedOneWithoutRifaInput
    logs?: LogAuditoriaUncheckedCreateNestedManyWithoutRifaInput
  }

  export type RifaCreateOrConnectWithoutBilhetesInput = {
    where: RifaWhereUniqueInput
    create: XOR<RifaCreateWithoutBilhetesInput, RifaUncheckedCreateWithoutBilhetesInput>
  }

  export type ParticipanteCreateWithoutBilhetesInput = {
    usuario: UsuarioCreateNestedOneWithoutParticipanteInput
    pagamentos?: PagamentoCreateNestedManyWithoutParticipanteInput
    premios?: PremioParticipanteCreateNestedManyWithoutParticipanteInput
    vitorias?: SorteioCreateNestedManyWithoutVencedorInput
  }

  export type ParticipanteUncheckedCreateWithoutBilhetesInput = {
    id?: number
    userId: number
    pagamentos?: PagamentoUncheckedCreateNestedManyWithoutParticipanteInput
    premios?: PremioParticipanteUncheckedCreateNestedManyWithoutParticipanteInput
    vitorias?: SorteioUncheckedCreateNestedManyWithoutVencedorInput
  }

  export type ParticipanteCreateOrConnectWithoutBilhetesInput = {
    where: ParticipanteWhereUniqueInput
    create: XOR<ParticipanteCreateWithoutBilhetesInput, ParticipanteUncheckedCreateWithoutBilhetesInput>
  }

  export type PagamentoCreateWithoutBilheteInput = {
    valor: number
    status?: $Enums.StatusPag
    metodo: $Enums.MetodoPag
    dataProcessamento?: Date | string
    participante: ParticipanteCreateNestedOneWithoutPagamentosInput
  }

  export type PagamentoUncheckedCreateWithoutBilheteInput = {
    id?: number
    valor: number
    status?: $Enums.StatusPag
    metodo: $Enums.MetodoPag
    dataProcessamento?: Date | string
    participanteId: number
  }

  export type PagamentoCreateOrConnectWithoutBilheteInput = {
    where: PagamentoWhereUniqueInput
    create: XOR<PagamentoCreateWithoutBilheteInput, PagamentoUncheckedCreateWithoutBilheteInput>
  }

  export type SorteioBilheteCreateWithoutBilheteInput = {
    dataInclusao?: Date | string
    sorteio: SorteioCreateNestedOneWithoutBilhetesInput
  }

  export type SorteioBilheteUncheckedCreateWithoutBilheteInput = {
    sorteioId: number
    dataInclusao?: Date | string
  }

  export type SorteioBilheteCreateOrConnectWithoutBilheteInput = {
    where: SorteioBilheteWhereUniqueInput
    create: XOR<SorteioBilheteCreateWithoutBilheteInput, SorteioBilheteUncheckedCreateWithoutBilheteInput>
  }

  export type SorteioBilheteCreateManyBilheteInputEnvelope = {
    data: SorteioBilheteCreateManyBilheteInput | SorteioBilheteCreateManyBilheteInput[]
    skipDuplicates?: boolean
  }

  export type RifaUpsertWithoutBilhetesInput = {
    update: XOR<RifaUpdateWithoutBilhetesInput, RifaUncheckedUpdateWithoutBilhetesInput>
    create: XOR<RifaCreateWithoutBilhetesInput, RifaUncheckedCreateWithoutBilhetesInput>
    where?: RifaWhereInput
  }

  export type RifaUpdateToOneWithWhereWithoutBilhetesInput = {
    where?: RifaWhereInput
    data: XOR<RifaUpdateWithoutBilhetesInput, RifaUncheckedUpdateWithoutBilhetesInput>
  }

  export type RifaUpdateWithoutBilhetesInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    precoBilhete?: FloatFieldUpdateOperationsInput | number
    quantidadeBilhetes?: IntFieldUpdateOperationsInput | number
    dataSorteio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusRifaFieldUpdateOperationsInput | $Enums.StatusRifa
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizador?: OrganizadorUpdateOneRequiredWithoutRifasNestedInput
    sorteios?: SorteioUpdateManyWithoutRifaNestedInput
    premio?: PremioUpdateOneWithoutRifaNestedInput
    logs?: LogAuditoriaUpdateManyWithoutRifaNestedInput
  }

  export type RifaUncheckedUpdateWithoutBilhetesInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    precoBilhete?: FloatFieldUpdateOperationsInput | number
    quantidadeBilhetes?: IntFieldUpdateOperationsInput | number
    dataSorteio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusRifaFieldUpdateOperationsInput | $Enums.StatusRifa
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizadorId?: IntFieldUpdateOperationsInput | number
    sorteios?: SorteioUncheckedUpdateManyWithoutRifaNestedInput
    premio?: PremioUncheckedUpdateOneWithoutRifaNestedInput
    logs?: LogAuditoriaUncheckedUpdateManyWithoutRifaNestedInput
  }

  export type ParticipanteUpsertWithoutBilhetesInput = {
    update: XOR<ParticipanteUpdateWithoutBilhetesInput, ParticipanteUncheckedUpdateWithoutBilhetesInput>
    create: XOR<ParticipanteCreateWithoutBilhetesInput, ParticipanteUncheckedCreateWithoutBilhetesInput>
    where?: ParticipanteWhereInput
  }

  export type ParticipanteUpdateToOneWithWhereWithoutBilhetesInput = {
    where?: ParticipanteWhereInput
    data: XOR<ParticipanteUpdateWithoutBilhetesInput, ParticipanteUncheckedUpdateWithoutBilhetesInput>
  }

  export type ParticipanteUpdateWithoutBilhetesInput = {
    usuario?: UsuarioUpdateOneRequiredWithoutParticipanteNestedInput
    pagamentos?: PagamentoUpdateManyWithoutParticipanteNestedInput
    premios?: PremioParticipanteUpdateManyWithoutParticipanteNestedInput
    vitorias?: SorteioUpdateManyWithoutVencedorNestedInput
  }

  export type ParticipanteUncheckedUpdateWithoutBilhetesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    pagamentos?: PagamentoUncheckedUpdateManyWithoutParticipanteNestedInput
    premios?: PremioParticipanteUncheckedUpdateManyWithoutParticipanteNestedInput
    vitorias?: SorteioUncheckedUpdateManyWithoutVencedorNestedInput
  }

  export type PagamentoUpsertWithoutBilheteInput = {
    update: XOR<PagamentoUpdateWithoutBilheteInput, PagamentoUncheckedUpdateWithoutBilheteInput>
    create: XOR<PagamentoCreateWithoutBilheteInput, PagamentoUncheckedCreateWithoutBilheteInput>
    where?: PagamentoWhereInput
  }

  export type PagamentoUpdateToOneWithWhereWithoutBilheteInput = {
    where?: PagamentoWhereInput
    data: XOR<PagamentoUpdateWithoutBilheteInput, PagamentoUncheckedUpdateWithoutBilheteInput>
  }

  export type PagamentoUpdateWithoutBilheteInput = {
    valor?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusPagFieldUpdateOperationsInput | $Enums.StatusPag
    metodo?: EnumMetodoPagFieldUpdateOperationsInput | $Enums.MetodoPag
    dataProcessamento?: DateTimeFieldUpdateOperationsInput | Date | string
    participante?: ParticipanteUpdateOneRequiredWithoutPagamentosNestedInput
  }

  export type PagamentoUncheckedUpdateWithoutBilheteInput = {
    id?: IntFieldUpdateOperationsInput | number
    valor?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusPagFieldUpdateOperationsInput | $Enums.StatusPag
    metodo?: EnumMetodoPagFieldUpdateOperationsInput | $Enums.MetodoPag
    dataProcessamento?: DateTimeFieldUpdateOperationsInput | Date | string
    participanteId?: IntFieldUpdateOperationsInput | number
  }

  export type SorteioBilheteUpsertWithWhereUniqueWithoutBilheteInput = {
    where: SorteioBilheteWhereUniqueInput
    update: XOR<SorteioBilheteUpdateWithoutBilheteInput, SorteioBilheteUncheckedUpdateWithoutBilheteInput>
    create: XOR<SorteioBilheteCreateWithoutBilheteInput, SorteioBilheteUncheckedCreateWithoutBilheteInput>
  }

  export type SorteioBilheteUpdateWithWhereUniqueWithoutBilheteInput = {
    where: SorteioBilheteWhereUniqueInput
    data: XOR<SorteioBilheteUpdateWithoutBilheteInput, SorteioBilheteUncheckedUpdateWithoutBilheteInput>
  }

  export type SorteioBilheteUpdateManyWithWhereWithoutBilheteInput = {
    where: SorteioBilheteScalarWhereInput
    data: XOR<SorteioBilheteUpdateManyMutationInput, SorteioBilheteUncheckedUpdateManyWithoutBilheteInput>
  }

  export type SorteioBilheteScalarWhereInput = {
    AND?: SorteioBilheteScalarWhereInput | SorteioBilheteScalarWhereInput[]
    OR?: SorteioBilheteScalarWhereInput[]
    NOT?: SorteioBilheteScalarWhereInput | SorteioBilheteScalarWhereInput[]
    sorteioId?: IntFilter<"SorteioBilhete"> | number
    bilheteId?: IntFilter<"SorteioBilhete"> | number
    dataInclusao?: DateTimeFilter<"SorteioBilhete"> | Date | string
  }

  export type RifaCreateWithoutSorteiosInput = {
    titulo: string
    descricao: string
    precoBilhete: number
    quantidadeBilhetes: number
    dataSorteio?: Date | string | null
    status?: $Enums.StatusRifa
    createdAt?: Date | string
    organizador: OrganizadorCreateNestedOneWithoutRifasInput
    bilhetes?: BilheteCreateNestedManyWithoutRifaInput
    premio?: PremioCreateNestedOneWithoutRifaInput
    logs?: LogAuditoriaCreateNestedManyWithoutRifaInput
  }

  export type RifaUncheckedCreateWithoutSorteiosInput = {
    id?: number
    titulo: string
    descricao: string
    precoBilhete: number
    quantidadeBilhetes: number
    dataSorteio?: Date | string | null
    status?: $Enums.StatusRifa
    createdAt?: Date | string
    organizadorId: number
    bilhetes?: BilheteUncheckedCreateNestedManyWithoutRifaInput
    premio?: PremioUncheckedCreateNestedOneWithoutRifaInput
    logs?: LogAuditoriaUncheckedCreateNestedManyWithoutRifaInput
  }

  export type RifaCreateOrConnectWithoutSorteiosInput = {
    where: RifaWhereUniqueInput
    create: XOR<RifaCreateWithoutSorteiosInput, RifaUncheckedCreateWithoutSorteiosInput>
  }

  export type ParticipanteCreateWithoutVitoriasInput = {
    usuario: UsuarioCreateNestedOneWithoutParticipanteInput
    bilhetes?: BilheteCreateNestedManyWithoutParticipanteInput
    pagamentos?: PagamentoCreateNestedManyWithoutParticipanteInput
    premios?: PremioParticipanteCreateNestedManyWithoutParticipanteInput
  }

  export type ParticipanteUncheckedCreateWithoutVitoriasInput = {
    id?: number
    userId: number
    bilhetes?: BilheteUncheckedCreateNestedManyWithoutParticipanteInput
    pagamentos?: PagamentoUncheckedCreateNestedManyWithoutParticipanteInput
    premios?: PremioParticipanteUncheckedCreateNestedManyWithoutParticipanteInput
  }

  export type ParticipanteCreateOrConnectWithoutVitoriasInput = {
    where: ParticipanteWhereUniqueInput
    create: XOR<ParticipanteCreateWithoutVitoriasInput, ParticipanteUncheckedCreateWithoutVitoriasInput>
  }

  export type SorteioBilheteCreateWithoutSorteioInput = {
    dataInclusao?: Date | string
    bilhete: BilheteCreateNestedOneWithoutSorteiosInput
  }

  export type SorteioBilheteUncheckedCreateWithoutSorteioInput = {
    bilheteId: number
    dataInclusao?: Date | string
  }

  export type SorteioBilheteCreateOrConnectWithoutSorteioInput = {
    where: SorteioBilheteWhereUniqueInput
    create: XOR<SorteioBilheteCreateWithoutSorteioInput, SorteioBilheteUncheckedCreateWithoutSorteioInput>
  }

  export type SorteioBilheteCreateManySorteioInputEnvelope = {
    data: SorteioBilheteCreateManySorteioInput | SorteioBilheteCreateManySorteioInput[]
    skipDuplicates?: boolean
  }

  export type RifaUpsertWithoutSorteiosInput = {
    update: XOR<RifaUpdateWithoutSorteiosInput, RifaUncheckedUpdateWithoutSorteiosInput>
    create: XOR<RifaCreateWithoutSorteiosInput, RifaUncheckedCreateWithoutSorteiosInput>
    where?: RifaWhereInput
  }

  export type RifaUpdateToOneWithWhereWithoutSorteiosInput = {
    where?: RifaWhereInput
    data: XOR<RifaUpdateWithoutSorteiosInput, RifaUncheckedUpdateWithoutSorteiosInput>
  }

  export type RifaUpdateWithoutSorteiosInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    precoBilhete?: FloatFieldUpdateOperationsInput | number
    quantidadeBilhetes?: IntFieldUpdateOperationsInput | number
    dataSorteio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusRifaFieldUpdateOperationsInput | $Enums.StatusRifa
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizador?: OrganizadorUpdateOneRequiredWithoutRifasNestedInput
    bilhetes?: BilheteUpdateManyWithoutRifaNestedInput
    premio?: PremioUpdateOneWithoutRifaNestedInput
    logs?: LogAuditoriaUpdateManyWithoutRifaNestedInput
  }

  export type RifaUncheckedUpdateWithoutSorteiosInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    precoBilhete?: FloatFieldUpdateOperationsInput | number
    quantidadeBilhetes?: IntFieldUpdateOperationsInput | number
    dataSorteio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusRifaFieldUpdateOperationsInput | $Enums.StatusRifa
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizadorId?: IntFieldUpdateOperationsInput | number
    bilhetes?: BilheteUncheckedUpdateManyWithoutRifaNestedInput
    premio?: PremioUncheckedUpdateOneWithoutRifaNestedInput
    logs?: LogAuditoriaUncheckedUpdateManyWithoutRifaNestedInput
  }

  export type ParticipanteUpsertWithoutVitoriasInput = {
    update: XOR<ParticipanteUpdateWithoutVitoriasInput, ParticipanteUncheckedUpdateWithoutVitoriasInput>
    create: XOR<ParticipanteCreateWithoutVitoriasInput, ParticipanteUncheckedCreateWithoutVitoriasInput>
    where?: ParticipanteWhereInput
  }

  export type ParticipanteUpdateToOneWithWhereWithoutVitoriasInput = {
    where?: ParticipanteWhereInput
    data: XOR<ParticipanteUpdateWithoutVitoriasInput, ParticipanteUncheckedUpdateWithoutVitoriasInput>
  }

  export type ParticipanteUpdateWithoutVitoriasInput = {
    usuario?: UsuarioUpdateOneRequiredWithoutParticipanteNestedInput
    bilhetes?: BilheteUpdateManyWithoutParticipanteNestedInput
    pagamentos?: PagamentoUpdateManyWithoutParticipanteNestedInput
    premios?: PremioParticipanteUpdateManyWithoutParticipanteNestedInput
  }

  export type ParticipanteUncheckedUpdateWithoutVitoriasInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    bilhetes?: BilheteUncheckedUpdateManyWithoutParticipanteNestedInput
    pagamentos?: PagamentoUncheckedUpdateManyWithoutParticipanteNestedInput
    premios?: PremioParticipanteUncheckedUpdateManyWithoutParticipanteNestedInput
  }

  export type SorteioBilheteUpsertWithWhereUniqueWithoutSorteioInput = {
    where: SorteioBilheteWhereUniqueInput
    update: XOR<SorteioBilheteUpdateWithoutSorteioInput, SorteioBilheteUncheckedUpdateWithoutSorteioInput>
    create: XOR<SorteioBilheteCreateWithoutSorteioInput, SorteioBilheteUncheckedCreateWithoutSorteioInput>
  }

  export type SorteioBilheteUpdateWithWhereUniqueWithoutSorteioInput = {
    where: SorteioBilheteWhereUniqueInput
    data: XOR<SorteioBilheteUpdateWithoutSorteioInput, SorteioBilheteUncheckedUpdateWithoutSorteioInput>
  }

  export type SorteioBilheteUpdateManyWithWhereWithoutSorteioInput = {
    where: SorteioBilheteScalarWhereInput
    data: XOR<SorteioBilheteUpdateManyMutationInput, SorteioBilheteUncheckedUpdateManyWithoutSorteioInput>
  }

  export type UsuarioCreateWithoutNotificacoesInput = {
    nome: string
    email: string
    cpf: string
    senha: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    organizador?: OrganizadorCreateNestedOneWithoutUsuarioInput
    participante?: ParticipanteCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutNotificacoesInput = {
    id?: number
    nome: string
    email: string
    cpf: string
    senha: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    organizador?: OrganizadorUncheckedCreateNestedOneWithoutUsuarioInput
    participante?: ParticipanteUncheckedCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutNotificacoesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutNotificacoesInput, UsuarioUncheckedCreateWithoutNotificacoesInput>
  }

  export type UsuarioUpsertWithoutNotificacoesInput = {
    update: XOR<UsuarioUpdateWithoutNotificacoesInput, UsuarioUncheckedUpdateWithoutNotificacoesInput>
    create: XOR<UsuarioCreateWithoutNotificacoesInput, UsuarioUncheckedCreateWithoutNotificacoesInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutNotificacoesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutNotificacoesInput, UsuarioUncheckedUpdateWithoutNotificacoesInput>
  }

  export type UsuarioUpdateWithoutNotificacoesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    organizador?: OrganizadorUpdateOneWithoutUsuarioNestedInput
    participante?: ParticipanteUpdateOneWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutNotificacoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    organizador?: OrganizadorUncheckedUpdateOneWithoutUsuarioNestedInput
    participante?: ParticipanteUncheckedUpdateOneWithoutUsuarioNestedInput
  }

  export type BilheteCreateWithoutPagamentoInput = {
    numero: number
    status?: $Enums.StatusBil
    createdAt?: Date | string
    rifa: RifaCreateNestedOneWithoutBilhetesInput
    participante?: ParticipanteCreateNestedOneWithoutBilhetesInput
    sorteios?: SorteioBilheteCreateNestedManyWithoutBilheteInput
  }

  export type BilheteUncheckedCreateWithoutPagamentoInput = {
    id?: number
    numero: number
    status?: $Enums.StatusBil
    createdAt?: Date | string
    rifaId: number
    participanteId?: number | null
    sorteios?: SorteioBilheteUncheckedCreateNestedManyWithoutBilheteInput
  }

  export type BilheteCreateOrConnectWithoutPagamentoInput = {
    where: BilheteWhereUniqueInput
    create: XOR<BilheteCreateWithoutPagamentoInput, BilheteUncheckedCreateWithoutPagamentoInput>
  }

  export type ParticipanteCreateWithoutPagamentosInput = {
    usuario: UsuarioCreateNestedOneWithoutParticipanteInput
    bilhetes?: BilheteCreateNestedManyWithoutParticipanteInput
    premios?: PremioParticipanteCreateNestedManyWithoutParticipanteInput
    vitorias?: SorteioCreateNestedManyWithoutVencedorInput
  }

  export type ParticipanteUncheckedCreateWithoutPagamentosInput = {
    id?: number
    userId: number
    bilhetes?: BilheteUncheckedCreateNestedManyWithoutParticipanteInput
    premios?: PremioParticipanteUncheckedCreateNestedManyWithoutParticipanteInput
    vitorias?: SorteioUncheckedCreateNestedManyWithoutVencedorInput
  }

  export type ParticipanteCreateOrConnectWithoutPagamentosInput = {
    where: ParticipanteWhereUniqueInput
    create: XOR<ParticipanteCreateWithoutPagamentosInput, ParticipanteUncheckedCreateWithoutPagamentosInput>
  }

  export type BilheteUpsertWithoutPagamentoInput = {
    update: XOR<BilheteUpdateWithoutPagamentoInput, BilheteUncheckedUpdateWithoutPagamentoInput>
    create: XOR<BilheteCreateWithoutPagamentoInput, BilheteUncheckedCreateWithoutPagamentoInput>
    where?: BilheteWhereInput
  }

  export type BilheteUpdateToOneWithWhereWithoutPagamentoInput = {
    where?: BilheteWhereInput
    data: XOR<BilheteUpdateWithoutPagamentoInput, BilheteUncheckedUpdateWithoutPagamentoInput>
  }

  export type BilheteUpdateWithoutPagamentoInput = {
    numero?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusBilFieldUpdateOperationsInput | $Enums.StatusBil
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rifa?: RifaUpdateOneRequiredWithoutBilhetesNestedInput
    participante?: ParticipanteUpdateOneWithoutBilhetesNestedInput
    sorteios?: SorteioBilheteUpdateManyWithoutBilheteNestedInput
  }

  export type BilheteUncheckedUpdateWithoutPagamentoInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusBilFieldUpdateOperationsInput | $Enums.StatusBil
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rifaId?: IntFieldUpdateOperationsInput | number
    participanteId?: NullableIntFieldUpdateOperationsInput | number | null
    sorteios?: SorteioBilheteUncheckedUpdateManyWithoutBilheteNestedInput
  }

  export type ParticipanteUpsertWithoutPagamentosInput = {
    update: XOR<ParticipanteUpdateWithoutPagamentosInput, ParticipanteUncheckedUpdateWithoutPagamentosInput>
    create: XOR<ParticipanteCreateWithoutPagamentosInput, ParticipanteUncheckedCreateWithoutPagamentosInput>
    where?: ParticipanteWhereInput
  }

  export type ParticipanteUpdateToOneWithWhereWithoutPagamentosInput = {
    where?: ParticipanteWhereInput
    data: XOR<ParticipanteUpdateWithoutPagamentosInput, ParticipanteUncheckedUpdateWithoutPagamentosInput>
  }

  export type ParticipanteUpdateWithoutPagamentosInput = {
    usuario?: UsuarioUpdateOneRequiredWithoutParticipanteNestedInput
    bilhetes?: BilheteUpdateManyWithoutParticipanteNestedInput
    premios?: PremioParticipanteUpdateManyWithoutParticipanteNestedInput
    vitorias?: SorteioUpdateManyWithoutVencedorNestedInput
  }

  export type ParticipanteUncheckedUpdateWithoutPagamentosInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    bilhetes?: BilheteUncheckedUpdateManyWithoutParticipanteNestedInput
    premios?: PremioParticipanteUncheckedUpdateManyWithoutParticipanteNestedInput
    vitorias?: SorteioUncheckedUpdateManyWithoutVencedorNestedInput
  }

  export type OrganizadorCreateWithoutUsuarioInput = {
    cnpj?: string | null
    rifas?: RifaCreateNestedManyWithoutOrganizadorInput
  }

  export type OrganizadorUncheckedCreateWithoutUsuarioInput = {
    id?: number
    cnpj?: string | null
    rifas?: RifaUncheckedCreateNestedManyWithoutOrganizadorInput
  }

  export type OrganizadorCreateOrConnectWithoutUsuarioInput = {
    where: OrganizadorWhereUniqueInput
    create: XOR<OrganizadorCreateWithoutUsuarioInput, OrganizadorUncheckedCreateWithoutUsuarioInput>
  }

  export type ParticipanteCreateWithoutUsuarioInput = {
    bilhetes?: BilheteCreateNestedManyWithoutParticipanteInput
    pagamentos?: PagamentoCreateNestedManyWithoutParticipanteInput
    premios?: PremioParticipanteCreateNestedManyWithoutParticipanteInput
    vitorias?: SorteioCreateNestedManyWithoutVencedorInput
  }

  export type ParticipanteUncheckedCreateWithoutUsuarioInput = {
    id?: number
    bilhetes?: BilheteUncheckedCreateNestedManyWithoutParticipanteInput
    pagamentos?: PagamentoUncheckedCreateNestedManyWithoutParticipanteInput
    premios?: PremioParticipanteUncheckedCreateNestedManyWithoutParticipanteInput
    vitorias?: SorteioUncheckedCreateNestedManyWithoutVencedorInput
  }

  export type ParticipanteCreateOrConnectWithoutUsuarioInput = {
    where: ParticipanteWhereUniqueInput
    create: XOR<ParticipanteCreateWithoutUsuarioInput, ParticipanteUncheckedCreateWithoutUsuarioInput>
  }

  export type NotificacaoCreateWithoutDestinatarioInput = {
    mensagem: string
    tipo: string
    status?: string
    dataEnvio?: Date | string
  }

  export type NotificacaoUncheckedCreateWithoutDestinatarioInput = {
    id?: number
    mensagem: string
    tipo: string
    status?: string
    dataEnvio?: Date | string
  }

  export type NotificacaoCreateOrConnectWithoutDestinatarioInput = {
    where: NotificacaoWhereUniqueInput
    create: XOR<NotificacaoCreateWithoutDestinatarioInput, NotificacaoUncheckedCreateWithoutDestinatarioInput>
  }

  export type NotificacaoCreateManyDestinatarioInputEnvelope = {
    data: NotificacaoCreateManyDestinatarioInput | NotificacaoCreateManyDestinatarioInput[]
    skipDuplicates?: boolean
  }

  export type OrganizadorUpsertWithoutUsuarioInput = {
    update: XOR<OrganizadorUpdateWithoutUsuarioInput, OrganizadorUncheckedUpdateWithoutUsuarioInput>
    create: XOR<OrganizadorCreateWithoutUsuarioInput, OrganizadorUncheckedCreateWithoutUsuarioInput>
    where?: OrganizadorWhereInput
  }

  export type OrganizadorUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: OrganizadorWhereInput
    data: XOR<OrganizadorUpdateWithoutUsuarioInput, OrganizadorUncheckedUpdateWithoutUsuarioInput>
  }

  export type OrganizadorUpdateWithoutUsuarioInput = {
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    rifas?: RifaUpdateManyWithoutOrganizadorNestedInput
  }

  export type OrganizadorUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    rifas?: RifaUncheckedUpdateManyWithoutOrganizadorNestedInput
  }

  export type ParticipanteUpsertWithoutUsuarioInput = {
    update: XOR<ParticipanteUpdateWithoutUsuarioInput, ParticipanteUncheckedUpdateWithoutUsuarioInput>
    create: XOR<ParticipanteCreateWithoutUsuarioInput, ParticipanteUncheckedCreateWithoutUsuarioInput>
    where?: ParticipanteWhereInput
  }

  export type ParticipanteUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: ParticipanteWhereInput
    data: XOR<ParticipanteUpdateWithoutUsuarioInput, ParticipanteUncheckedUpdateWithoutUsuarioInput>
  }

  export type ParticipanteUpdateWithoutUsuarioInput = {
    bilhetes?: BilheteUpdateManyWithoutParticipanteNestedInput
    pagamentos?: PagamentoUpdateManyWithoutParticipanteNestedInput
    premios?: PremioParticipanteUpdateManyWithoutParticipanteNestedInput
    vitorias?: SorteioUpdateManyWithoutVencedorNestedInput
  }

  export type ParticipanteUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    bilhetes?: BilheteUncheckedUpdateManyWithoutParticipanteNestedInput
    pagamentos?: PagamentoUncheckedUpdateManyWithoutParticipanteNestedInput
    premios?: PremioParticipanteUncheckedUpdateManyWithoutParticipanteNestedInput
    vitorias?: SorteioUncheckedUpdateManyWithoutVencedorNestedInput
  }

  export type NotificacaoUpsertWithWhereUniqueWithoutDestinatarioInput = {
    where: NotificacaoWhereUniqueInput
    update: XOR<NotificacaoUpdateWithoutDestinatarioInput, NotificacaoUncheckedUpdateWithoutDestinatarioInput>
    create: XOR<NotificacaoCreateWithoutDestinatarioInput, NotificacaoUncheckedCreateWithoutDestinatarioInput>
  }

  export type NotificacaoUpdateWithWhereUniqueWithoutDestinatarioInput = {
    where: NotificacaoWhereUniqueInput
    data: XOR<NotificacaoUpdateWithoutDestinatarioInput, NotificacaoUncheckedUpdateWithoutDestinatarioInput>
  }

  export type NotificacaoUpdateManyWithWhereWithoutDestinatarioInput = {
    where: NotificacaoScalarWhereInput
    data: XOR<NotificacaoUpdateManyMutationInput, NotificacaoUncheckedUpdateManyWithoutDestinatarioInput>
  }

  export type NotificacaoScalarWhereInput = {
    AND?: NotificacaoScalarWhereInput | NotificacaoScalarWhereInput[]
    OR?: NotificacaoScalarWhereInput[]
    NOT?: NotificacaoScalarWhereInput | NotificacaoScalarWhereInput[]
    id?: IntFilter<"Notificacao"> | number
    mensagem?: StringFilter<"Notificacao"> | string
    tipo?: StringFilter<"Notificacao"> | string
    status?: StringFilter<"Notificacao"> | string
    dataEnvio?: DateTimeFilter<"Notificacao"> | Date | string
    destinatarioId?: IntFilter<"Notificacao"> | number
  }

  export type PremioCreateWithoutParticipantesInput = {
    nome: string
    descricao: string
    imagem?: string | null
    rifa?: RifaCreateNestedOneWithoutPremioInput
  }

  export type PremioUncheckedCreateWithoutParticipantesInput = {
    id?: number
    nome: string
    descricao: string
    imagem?: string | null
    rifaId?: number | null
  }

  export type PremioCreateOrConnectWithoutParticipantesInput = {
    where: PremioWhereUniqueInput
    create: XOR<PremioCreateWithoutParticipantesInput, PremioUncheckedCreateWithoutParticipantesInput>
  }

  export type ParticipanteCreateWithoutPremiosInput = {
    usuario: UsuarioCreateNestedOneWithoutParticipanteInput
    bilhetes?: BilheteCreateNestedManyWithoutParticipanteInput
    pagamentos?: PagamentoCreateNestedManyWithoutParticipanteInput
    vitorias?: SorteioCreateNestedManyWithoutVencedorInput
  }

  export type ParticipanteUncheckedCreateWithoutPremiosInput = {
    id?: number
    userId: number
    bilhetes?: BilheteUncheckedCreateNestedManyWithoutParticipanteInput
    pagamentos?: PagamentoUncheckedCreateNestedManyWithoutParticipanteInput
    vitorias?: SorteioUncheckedCreateNestedManyWithoutVencedorInput
  }

  export type ParticipanteCreateOrConnectWithoutPremiosInput = {
    where: ParticipanteWhereUniqueInput
    create: XOR<ParticipanteCreateWithoutPremiosInput, ParticipanteUncheckedCreateWithoutPremiosInput>
  }

  export type PremioUpsertWithoutParticipantesInput = {
    update: XOR<PremioUpdateWithoutParticipantesInput, PremioUncheckedUpdateWithoutParticipantesInput>
    create: XOR<PremioCreateWithoutParticipantesInput, PremioUncheckedCreateWithoutParticipantesInput>
    where?: PremioWhereInput
  }

  export type PremioUpdateToOneWithWhereWithoutParticipantesInput = {
    where?: PremioWhereInput
    data: XOR<PremioUpdateWithoutParticipantesInput, PremioUncheckedUpdateWithoutParticipantesInput>
  }

  export type PremioUpdateWithoutParticipantesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    rifa?: RifaUpdateOneWithoutPremioNestedInput
  }

  export type PremioUncheckedUpdateWithoutParticipantesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    rifaId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ParticipanteUpsertWithoutPremiosInput = {
    update: XOR<ParticipanteUpdateWithoutPremiosInput, ParticipanteUncheckedUpdateWithoutPremiosInput>
    create: XOR<ParticipanteCreateWithoutPremiosInput, ParticipanteUncheckedCreateWithoutPremiosInput>
    where?: ParticipanteWhereInput
  }

  export type ParticipanteUpdateToOneWithWhereWithoutPremiosInput = {
    where?: ParticipanteWhereInput
    data: XOR<ParticipanteUpdateWithoutPremiosInput, ParticipanteUncheckedUpdateWithoutPremiosInput>
  }

  export type ParticipanteUpdateWithoutPremiosInput = {
    usuario?: UsuarioUpdateOneRequiredWithoutParticipanteNestedInput
    bilhetes?: BilheteUpdateManyWithoutParticipanteNestedInput
    pagamentos?: PagamentoUpdateManyWithoutParticipanteNestedInput
    vitorias?: SorteioUpdateManyWithoutVencedorNestedInput
  }

  export type ParticipanteUncheckedUpdateWithoutPremiosInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    bilhetes?: BilheteUncheckedUpdateManyWithoutParticipanteNestedInput
    pagamentos?: PagamentoUncheckedUpdateManyWithoutParticipanteNestedInput
    vitorias?: SorteioUncheckedUpdateManyWithoutVencedorNestedInput
  }

  export type SorteioCreateWithoutBilhetesInput = {
    dataHora?: Date | string
    rifa: RifaCreateNestedOneWithoutSorteiosInput
    vencedor?: ParticipanteCreateNestedOneWithoutVitoriasInput
  }

  export type SorteioUncheckedCreateWithoutBilhetesInput = {
    id?: number
    dataHora?: Date | string
    rifaId: number
    vencedorId?: number | null
  }

  export type SorteioCreateOrConnectWithoutBilhetesInput = {
    where: SorteioWhereUniqueInput
    create: XOR<SorteioCreateWithoutBilhetesInput, SorteioUncheckedCreateWithoutBilhetesInput>
  }

  export type BilheteCreateWithoutSorteiosInput = {
    numero: number
    status?: $Enums.StatusBil
    createdAt?: Date | string
    rifa: RifaCreateNestedOneWithoutBilhetesInput
    participante?: ParticipanteCreateNestedOneWithoutBilhetesInput
    pagamento?: PagamentoCreateNestedOneWithoutBilheteInput
  }

  export type BilheteUncheckedCreateWithoutSorteiosInput = {
    id?: number
    numero: number
    status?: $Enums.StatusBil
    createdAt?: Date | string
    rifaId: number
    participanteId?: number | null
    pagamento?: PagamentoUncheckedCreateNestedOneWithoutBilheteInput
  }

  export type BilheteCreateOrConnectWithoutSorteiosInput = {
    where: BilheteWhereUniqueInput
    create: XOR<BilheteCreateWithoutSorteiosInput, BilheteUncheckedCreateWithoutSorteiosInput>
  }

  export type SorteioUpsertWithoutBilhetesInput = {
    update: XOR<SorteioUpdateWithoutBilhetesInput, SorteioUncheckedUpdateWithoutBilhetesInput>
    create: XOR<SorteioCreateWithoutBilhetesInput, SorteioUncheckedCreateWithoutBilhetesInput>
    where?: SorteioWhereInput
  }

  export type SorteioUpdateToOneWithWhereWithoutBilhetesInput = {
    where?: SorteioWhereInput
    data: XOR<SorteioUpdateWithoutBilhetesInput, SorteioUncheckedUpdateWithoutBilhetesInput>
  }

  export type SorteioUpdateWithoutBilhetesInput = {
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    rifa?: RifaUpdateOneRequiredWithoutSorteiosNestedInput
    vencedor?: ParticipanteUpdateOneWithoutVitoriasNestedInput
  }

  export type SorteioUncheckedUpdateWithoutBilhetesInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    rifaId?: IntFieldUpdateOperationsInput | number
    vencedorId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BilheteUpsertWithoutSorteiosInput = {
    update: XOR<BilheteUpdateWithoutSorteiosInput, BilheteUncheckedUpdateWithoutSorteiosInput>
    create: XOR<BilheteCreateWithoutSorteiosInput, BilheteUncheckedCreateWithoutSorteiosInput>
    where?: BilheteWhereInput
  }

  export type BilheteUpdateToOneWithWhereWithoutSorteiosInput = {
    where?: BilheteWhereInput
    data: XOR<BilheteUpdateWithoutSorteiosInput, BilheteUncheckedUpdateWithoutSorteiosInput>
  }

  export type BilheteUpdateWithoutSorteiosInput = {
    numero?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusBilFieldUpdateOperationsInput | $Enums.StatusBil
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rifa?: RifaUpdateOneRequiredWithoutBilhetesNestedInput
    participante?: ParticipanteUpdateOneWithoutBilhetesNestedInput
    pagamento?: PagamentoUpdateOneWithoutBilheteNestedInput
  }

  export type BilheteUncheckedUpdateWithoutSorteiosInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusBilFieldUpdateOperationsInput | $Enums.StatusBil
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rifaId?: IntFieldUpdateOperationsInput | number
    participanteId?: NullableIntFieldUpdateOperationsInput | number | null
    pagamento?: PagamentoUncheckedUpdateOneWithoutBilheteNestedInput
  }

  export type PremioParticipanteCreateManyPremioInput = {
    participanteId: number
    dataPremiacao?: Date | string
  }

  export type PremioParticipanteUpdateWithoutPremioInput = {
    dataPremiacao?: DateTimeFieldUpdateOperationsInput | Date | string
    participante?: ParticipanteUpdateOneRequiredWithoutPremiosNestedInput
  }

  export type PremioParticipanteUncheckedUpdateWithoutPremioInput = {
    participanteId?: IntFieldUpdateOperationsInput | number
    dataPremiacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PremioParticipanteUncheckedUpdateManyWithoutPremioInput = {
    participanteId?: IntFieldUpdateOperationsInput | number
    dataPremiacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SorteioCreateManyRifaInput = {
    id?: number
    dataHora?: Date | string
    vencedorId?: number | null
  }

  export type BilheteCreateManyRifaInput = {
    id?: number
    numero: number
    status?: $Enums.StatusBil
    createdAt?: Date | string
    participanteId?: number | null
  }

  export type LogAuditoriaCreateManyRifaInput = {
    id?: number
    acao: string
    createdAt?: Date | string
    detalhes?: string | null
  }

  export type SorteioUpdateWithoutRifaInput = {
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    vencedor?: ParticipanteUpdateOneWithoutVitoriasNestedInput
    bilhetes?: SorteioBilheteUpdateManyWithoutSorteioNestedInput
  }

  export type SorteioUncheckedUpdateWithoutRifaInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    vencedorId?: NullableIntFieldUpdateOperationsInput | number | null
    bilhetes?: SorteioBilheteUncheckedUpdateManyWithoutSorteioNestedInput
  }

  export type SorteioUncheckedUpdateManyWithoutRifaInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    vencedorId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BilheteUpdateWithoutRifaInput = {
    numero?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusBilFieldUpdateOperationsInput | $Enums.StatusBil
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participante?: ParticipanteUpdateOneWithoutBilhetesNestedInput
    pagamento?: PagamentoUpdateOneWithoutBilheteNestedInput
    sorteios?: SorteioBilheteUpdateManyWithoutBilheteNestedInput
  }

  export type BilheteUncheckedUpdateWithoutRifaInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusBilFieldUpdateOperationsInput | $Enums.StatusBil
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participanteId?: NullableIntFieldUpdateOperationsInput | number | null
    pagamento?: PagamentoUncheckedUpdateOneWithoutBilheteNestedInput
    sorteios?: SorteioBilheteUncheckedUpdateManyWithoutBilheteNestedInput
  }

  export type BilheteUncheckedUpdateManyWithoutRifaInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusBilFieldUpdateOperationsInput | $Enums.StatusBil
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participanteId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LogAuditoriaUpdateWithoutRifaInput = {
    acao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    detalhes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LogAuditoriaUncheckedUpdateWithoutRifaInput = {
    id?: IntFieldUpdateOperationsInput | number
    acao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    detalhes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LogAuditoriaUncheckedUpdateManyWithoutRifaInput = {
    id?: IntFieldUpdateOperationsInput | number
    acao?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    detalhes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RifaCreateManyOrganizadorInput = {
    id?: number
    titulo: string
    descricao: string
    precoBilhete: number
    quantidadeBilhetes: number
    dataSorteio?: Date | string | null
    status?: $Enums.StatusRifa
    createdAt?: Date | string
  }

  export type RifaUpdateWithoutOrganizadorInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    precoBilhete?: FloatFieldUpdateOperationsInput | number
    quantidadeBilhetes?: IntFieldUpdateOperationsInput | number
    dataSorteio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusRifaFieldUpdateOperationsInput | $Enums.StatusRifa
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sorteios?: SorteioUpdateManyWithoutRifaNestedInput
    bilhetes?: BilheteUpdateManyWithoutRifaNestedInput
    premio?: PremioUpdateOneWithoutRifaNestedInput
    logs?: LogAuditoriaUpdateManyWithoutRifaNestedInput
  }

  export type RifaUncheckedUpdateWithoutOrganizadorInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    precoBilhete?: FloatFieldUpdateOperationsInput | number
    quantidadeBilhetes?: IntFieldUpdateOperationsInput | number
    dataSorteio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusRifaFieldUpdateOperationsInput | $Enums.StatusRifa
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sorteios?: SorteioUncheckedUpdateManyWithoutRifaNestedInput
    bilhetes?: BilheteUncheckedUpdateManyWithoutRifaNestedInput
    premio?: PremioUncheckedUpdateOneWithoutRifaNestedInput
    logs?: LogAuditoriaUncheckedUpdateManyWithoutRifaNestedInput
  }

  export type RifaUncheckedUpdateManyWithoutOrganizadorInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    precoBilhete?: FloatFieldUpdateOperationsInput | number
    quantidadeBilhetes?: IntFieldUpdateOperationsInput | number
    dataSorteio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusRifaFieldUpdateOperationsInput | $Enums.StatusRifa
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BilheteCreateManyParticipanteInput = {
    id?: number
    numero: number
    status?: $Enums.StatusBil
    createdAt?: Date | string
    rifaId: number
  }

  export type PagamentoCreateManyParticipanteInput = {
    id?: number
    valor: number
    status?: $Enums.StatusPag
    metodo: $Enums.MetodoPag
    dataProcessamento?: Date | string
    bilheteId: number
  }

  export type PremioParticipanteCreateManyParticipanteInput = {
    premioId: number
    dataPremiacao?: Date | string
  }

  export type SorteioCreateManyVencedorInput = {
    id?: number
    dataHora?: Date | string
    rifaId: number
  }

  export type BilheteUpdateWithoutParticipanteInput = {
    numero?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusBilFieldUpdateOperationsInput | $Enums.StatusBil
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rifa?: RifaUpdateOneRequiredWithoutBilhetesNestedInput
    pagamento?: PagamentoUpdateOneWithoutBilheteNestedInput
    sorteios?: SorteioBilheteUpdateManyWithoutBilheteNestedInput
  }

  export type BilheteUncheckedUpdateWithoutParticipanteInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusBilFieldUpdateOperationsInput | $Enums.StatusBil
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rifaId?: IntFieldUpdateOperationsInput | number
    pagamento?: PagamentoUncheckedUpdateOneWithoutBilheteNestedInput
    sorteios?: SorteioBilheteUncheckedUpdateManyWithoutBilheteNestedInput
  }

  export type BilheteUncheckedUpdateManyWithoutParticipanteInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusBilFieldUpdateOperationsInput | $Enums.StatusBil
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rifaId?: IntFieldUpdateOperationsInput | number
  }

  export type PagamentoUpdateWithoutParticipanteInput = {
    valor?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusPagFieldUpdateOperationsInput | $Enums.StatusPag
    metodo?: EnumMetodoPagFieldUpdateOperationsInput | $Enums.MetodoPag
    dataProcessamento?: DateTimeFieldUpdateOperationsInput | Date | string
    bilhete?: BilheteUpdateOneRequiredWithoutPagamentoNestedInput
  }

  export type PagamentoUncheckedUpdateWithoutParticipanteInput = {
    id?: IntFieldUpdateOperationsInput | number
    valor?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusPagFieldUpdateOperationsInput | $Enums.StatusPag
    metodo?: EnumMetodoPagFieldUpdateOperationsInput | $Enums.MetodoPag
    dataProcessamento?: DateTimeFieldUpdateOperationsInput | Date | string
    bilheteId?: IntFieldUpdateOperationsInput | number
  }

  export type PagamentoUncheckedUpdateManyWithoutParticipanteInput = {
    id?: IntFieldUpdateOperationsInput | number
    valor?: FloatFieldUpdateOperationsInput | number
    status?: EnumStatusPagFieldUpdateOperationsInput | $Enums.StatusPag
    metodo?: EnumMetodoPagFieldUpdateOperationsInput | $Enums.MetodoPag
    dataProcessamento?: DateTimeFieldUpdateOperationsInput | Date | string
    bilheteId?: IntFieldUpdateOperationsInput | number
  }

  export type PremioParticipanteUpdateWithoutParticipanteInput = {
    dataPremiacao?: DateTimeFieldUpdateOperationsInput | Date | string
    premio?: PremioUpdateOneRequiredWithoutParticipantesNestedInput
  }

  export type PremioParticipanteUncheckedUpdateWithoutParticipanteInput = {
    premioId?: IntFieldUpdateOperationsInput | number
    dataPremiacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PremioParticipanteUncheckedUpdateManyWithoutParticipanteInput = {
    premioId?: IntFieldUpdateOperationsInput | number
    dataPremiacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SorteioUpdateWithoutVencedorInput = {
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    rifa?: RifaUpdateOneRequiredWithoutSorteiosNestedInput
    bilhetes?: SorteioBilheteUpdateManyWithoutSorteioNestedInput
  }

  export type SorteioUncheckedUpdateWithoutVencedorInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    rifaId?: IntFieldUpdateOperationsInput | number
    bilhetes?: SorteioBilheteUncheckedUpdateManyWithoutSorteioNestedInput
  }

  export type SorteioUncheckedUpdateManyWithoutVencedorInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    rifaId?: IntFieldUpdateOperationsInput | number
  }

  export type SorteioBilheteCreateManyBilheteInput = {
    sorteioId: number
    dataInclusao?: Date | string
  }

  export type SorteioBilheteUpdateWithoutBilheteInput = {
    dataInclusao?: DateTimeFieldUpdateOperationsInput | Date | string
    sorteio?: SorteioUpdateOneRequiredWithoutBilhetesNestedInput
  }

  export type SorteioBilheteUncheckedUpdateWithoutBilheteInput = {
    sorteioId?: IntFieldUpdateOperationsInput | number
    dataInclusao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SorteioBilheteUncheckedUpdateManyWithoutBilheteInput = {
    sorteioId?: IntFieldUpdateOperationsInput | number
    dataInclusao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SorteioBilheteCreateManySorteioInput = {
    bilheteId: number
    dataInclusao?: Date | string
  }

  export type SorteioBilheteUpdateWithoutSorteioInput = {
    dataInclusao?: DateTimeFieldUpdateOperationsInput | Date | string
    bilhete?: BilheteUpdateOneRequiredWithoutSorteiosNestedInput
  }

  export type SorteioBilheteUncheckedUpdateWithoutSorteioInput = {
    bilheteId?: IntFieldUpdateOperationsInput | number
    dataInclusao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SorteioBilheteUncheckedUpdateManyWithoutSorteioInput = {
    bilheteId?: IntFieldUpdateOperationsInput | number
    dataInclusao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificacaoCreateManyDestinatarioInput = {
    id?: number
    mensagem: string
    tipo: string
    status?: string
    dataEnvio?: Date | string
  }

  export type NotificacaoUpdateWithoutDestinatarioInput = {
    mensagem?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificacaoUncheckedUpdateWithoutDestinatarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    mensagem?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificacaoUncheckedUpdateManyWithoutDestinatarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    mensagem?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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
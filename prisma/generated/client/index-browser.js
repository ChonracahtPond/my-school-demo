
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.4.1
 * Query Engine version: 2f302df92bd8945e20ad4595a73def5b96afa54f
 */
Prisma.prismaVersion = {
  client: "5.4.1",
  engine: "2f302df92bd8945e20ad4595a73def5b96afa54f"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.RegSchoolScalarFieldEnum = {
  id: 'id',
  irImg: 'irImg',
  irDescription: 'irDescription'
};

exports.Prisma.RegfromScalarFieldEnum = {
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

exports.Prisma.RegisterFormScalarFieldEnum = {
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

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};


exports.Prisma.ModelName = {
  RegSchool: 'RegSchool',
  Regfrom: 'Regfrom',
  RegisterForm: 'RegisterForm'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://github.com/prisma/prisma/issues`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)

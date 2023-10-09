
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
} = require('./runtime/edge')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

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
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "D:\\project\\my-school-demo\\prisma\\generated\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../.env",
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.4.1",
  "engineVersion": "2f302df92bd8945e20ad4595a73def5b96afa54f",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mongodb",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKCgpkYXRhc291cmNlIGRiIHsKICBwcm92aWRlciA9ICJtb25nb2RiIgogIHVybCAgICAgID0gZW52KCJEQVRBQkFTRV9VUkwiKQp9CgpnZW5lcmF0b3IgY2xpZW50IHsKICBwcm92aWRlciA9ICJwcmlzbWEtY2xpZW50LWpzIgogIG91dHB1dCAgID0gIi4vZ2VuZXJhdGVkL2NsaWVudCIKfQoKbW9kZWwgUmVnU2Nob29sIHsKICBpZCAgICAgICAgICAgIFN0cmluZyAgQGlkIEBkZWZhdWx0KGF1dG8oKSkgQG1hcCgiX2lkIikgQGRiLk9iamVjdElkCiAgaXJJbWcgICAgICAgICBTdHJpbmc/CiAgaXJEZXNjcmlwdGlvbiBTdHJpbmc/Cn0KCm1vZGVsIFJlZ2Zyb20gewogIGlkICAgICAgICAgICAgICBTdHJpbmcgIEBpZCBAZGVmYXVsdChhdXRvKCkpIEBtYXAoIl9pZCIpIEBkYi5PYmplY3RJZAogIGVkdWNhdGlvbk9mZmljZSBTdHJpbmc/CiAgZm5hbWUgICAgICAgICAgIFN0cmluZz8KICBsbmFtZSAgICAgICAgICAgU3RyaW5nPwogIGJpcnRoZGF5ICAgICAgICBTdHJpbmc/CiAgYWdlICAgICAgICAgICAgIFN0cmluZz8KICBpZGNhcmQgICAgICAgICAgU3RyaW5nPwogIHJlbGlnaW9uICAgICAgICBTdHJpbmc/CiAgbmF0aW9uYWxpdHkgICAgIFN0cmluZz8KICBvY2N1cGF0aW9uICAgICAgU3RyaW5nPwogIGF2Z2luY29tZSAgICAgICBTdHJpbmc/CiAgZmF0aGVyc25hbWUgICAgIFN0cmluZz8KICBmYW5hdGlvbmFsaXR5ICAgU3RyaW5nPwogIGZhYXZnaW5jb21lICAgICBTdHJpbmc/CiAgbW90aGVyc25hbWUgICAgIFN0cmluZz8KICBtb25hdGlvbmFsaXR5ICAgU3RyaW5nPwogIG1vYXZnaW5jb21lICAgICBTdHJpbmc/CgogIGVuZGNsYXNzICAgIFN0cmluZz8KICBlbmR5ZWFyICAgICBTdHJpbmc/CiAgc2Nob29sZW5kICAgU3RyaW5nPwogIGVuZGRpc3RyaWN0IFN0cmluZz8KICBlbmRwcm92aW5jZSBTdHJpbmc/CgogIGRoYW1tYSAgICAgICAgICAgIFN0cmluZz8KICBlbmR5ZWFyZGhhbW1hICAgICBTdHJpbmc/CiAgZW5kc2Nob29sZGhhbW1hICAgU3RyaW5nPwogIGVuZGRpc3RyaWN0ZGhhbW1hIFN0cmluZz8KICBlbmRwcm92aW5jZWRoYW1tYSBTdHJpbmc/CgogIGFkZHJlc3MgICAgIFN0cmluZz8KICBncm91cCAgICAgICBTdHJpbmc/CiAgYWxsZXkgICAgICAgU3RyaW5nPwogIHJvYWQgICAgICAgIFN0cmluZz8KICBzdWJkaXN0cmljdCBTdHJpbmc/CiAgZGlzdHJpY3QgICAgU3RyaW5nPwogIHByb3ZpbmNlICAgIFN0cmluZz8KICB6aXBjb2RlICAgICBTdHJpbmc/CiAgdGVsICAgICAgICAgU3RyaW5nPwoKICBpbWdwcmlmaWxlICAgICAgICAgICBTdHJpbmc/CiAgaW1ncXVhbGlmaWNhdGlvbiAgICAgU3RyaW5nPwogIGltZ2hvdXNlcmVnaXN0cmF0aW9uIFN0cmluZz8KICBpbWdpZGNhcmQgICAgICAgICAgICBTdHJpbmc/Cn0KCm1vZGVsIFJlZ2lzdGVyRm9ybSB7CiAgaWQgICAgICAgICAgICBTdHJpbmcgIEBpZCBAZGVmYXVsdChhdXRvKCkpIEBtYXAoIl9pZCIpIEBkYi5PYmplY3RJZAogIC8v4LiC4LmJ4Lit4Lih4Li54Lil4Lic4Li54LmJ4Liq4Lih4Lix4LiE4LijCiAgcmVnSWQgICAgICAgICBTdHJpbmc/IC8v4Lij4Lir4Lix4Liq4LiZ4Lix4LiB4Lio4Li24LiB4Lip4LiyCiAgcmVnSWRwZXJzb25hbCBTdHJpbmc/IC8v4Lij4Lir4Lix4Lir4Liq4Lia4Lix4LiV4Lij4Lib4Lij4Liw4LiK4Liy4LiK4LiZCiAgcmVnQmlydGggICAgICBTdHJpbmc/IC8v4Lin4Lix4LiZ4LmA4LiB4Li04LiUCiAgcmVnUHJlZml4ICAgICBTdHJpbmc/IC8vIOC4hOC4s+C4meC4s+C4q+C4meC5ieC4sgogIHJlZ1NleCAgICAgICAgU3RyaW5nPyAvLyDguYDguJ7guKgKICByZWdOYXRpb24gICAgIFN0cmluZz8gLy8g4Lib4Lij4Liw4LmA4LiX4LioCiAgcmVnTmFtZSAgICAgICBTdHJpbmc/IC8v4LiK4Li34LmI4LitCiAgcmVnTGFzdG5hbWUgICBTdHJpbmc/IC8v4LiZ4Liy4Lih4Liq4LiB4Li44LilCiAgcmVnRW5hbWUgICAgICBTdHJpbmc/IC8v4LiK4Li34LmI4Lit4Lit4Li04LiHCiAgcmVnRWxhc3RuYW1lICBTdHJpbmc/IC8vIOC4meC4suC4oeC4quC4geC4uOC4peC4reC4tOC4hwogIHJlZ1Bob25lICAgICAgU3RyaW5nPyAvL+C5gOC4muC4reC4o+C5jAogIHJlZ0VtYWlsICAgICAgU3RyaW5nPyAvL+C5gOC4oeC4pQogIHJlZ0ltZyAgICAgICAgU3RyaW5nPyAvL+C4o+C4ueC4mwoKICAvL+C4m+C4o+C4sOC4p+C4seC4leC4tOC4geC4suC4o+C4qOC4tuC4geC4qeC4sgogIHJlZ1NjaG9vbCBTdHJpbmc/CiAgcmVnRGVncmVlIFN0cmluZz8KICByZWdHcGEgICAgU3RyaW5nPwoKICAvL+C4guC5ieC4suC4h+C4peC5iOC4suC4h+C5gOC4m+C5h+C4meC5gOC4geC4teC5iOC4ouC4p+C4geC4seC4muC4hOC4k+C4sOC5geC4peC4sOC4q+C4peC4seC4geC4quC4ueC4leC4owogIHJlZ1Byb2dyYW0gU3RyaW5nPyAvL+C4q+C4peC4seC4geC4quC4ueC4leC4owogIHJlZ0ZhY3VsdHkgU3RyaW5nPwogIHJlZ01ham9yICAgU3RyaW5nPwp9Cg==",
  "inlineSchemaHash": "3a44ef1737273828fddd51317c972ab8694150c16798c363efaae55072a2bc6f"
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"RegSchool\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"irImg\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"irDescription\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Regfrom\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"educationOffice\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"birthday\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"age\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idcard\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"religion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nationality\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"occupation\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"avgincome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fathersname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fanationality\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"faavgincome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mothersname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"monationality\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"moavgincome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"endclass\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"endyear\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"schoolend\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"enddistrict\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"endprovince\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dhamma\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"endyeardhamma\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"endschooldhamma\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"enddistrictdhamma\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"endprovincedhamma\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"group\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"alley\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"road\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subdistrict\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"district\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"province\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"zipcode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"imgprifile\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"imgqualification\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"imghouseregistration\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"imgidcard\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"RegisterForm\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"regId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"regIdpersonal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"regBirth\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"regPrefix\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"regSex\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"regNation\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"regName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"regLastname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"regEname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"regElastname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"regPhone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"regEmail\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"regImg\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"regSchool\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"regDegree\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"regGpa\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"regProgram\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"regFaculty\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"regMajor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)


config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)


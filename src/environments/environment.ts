// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { Token } from "@angular/compiler";

export const environment = {
  production: false,
  apiUrlBase: "http://localhost:8090",
  token: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6WyJBRE1JTiJdLCJzdWIiOiJyb2JlcnRAZXhhbXBsZS5jb20iLCJpYXQiOjE3MTY4Njg0NTEsImV4cCI6MTcxNzQ3MzI1MX0.wOOKokvrBTurRuwagTMkkLv2gHisxiVuhpalwnLtMSGX7e0Yxe5Dd_10xbXwH-iSdFqheEn6qD_WLI5gqfkr7g'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

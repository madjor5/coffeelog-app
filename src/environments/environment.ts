// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyD8x-_6qxqiFcEDJxj4OVvSVhou0vQUqqc',
    authDomain: 'coffee-log-4e8b5.firebaseapp.com',
    databaseURL: 'https://coffee-log-4e8b5.firebaseio.com',
    projectId: 'coffee-log-4e8b5',
    storageBucket: 'coffee-log-4e8b5.appspot.com',
    messagingSenderId: '1030613901487'
  }
};

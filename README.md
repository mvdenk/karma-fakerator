# karma-fakerator
  		  
Karma plugin for Fakerator https://github.com/icebob/fakerator

## Install
 ```sh
 yarn add karma-fakerator --dev
 ```
 
then edit `karma.conf.js` to include `fakerator`
 
 ```js
 // ... config.set({
     frameworks: ['mocha', 'chai', '...some other things', 'fakerator'],
 // ...
 ```

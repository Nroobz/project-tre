setup
npm install gulp --save-dev
npm install gulp-jade --save-dev
npm install gulp-sass --save-dev

Files Structure

Lib
	#includes all code that needs to be preprocessed
	- Jade
		- includes
	- Sass

Build
	#includes all the html and css files
	- assets
		- css
		- images
		- javascript

6.4.16
	- looking to set up a live reload gulp task,
	- understanding each gulp task
	- also want to set up a 'beautify' task

# Fonts Gloria Allelujah Bower package

A simple bower package providing the Fonts [Gloria Allelujah ](https://fonts.google.com/specimen/Gloria+Hallelujah). Supports LESS and SASS for CSS rebuild. Package bower created by  [William Canin](http://github.com/williamcanin).

Font creation copyright: [Kimberly Geswein](http://www.kimberlygeswein.com)

## Requirements for use

| Prerequisite    | How to install 
| --------------- | ------------------------- |
| [NodeJS](http://nodejs.org/)          | **It depends on O.S**     |
| Npm             | **NodeJS contains Npm**     |
| [Bower](http://bower.io/)           | `npm install bower -g`    |

## Using

Navigate to your project's directory and then execute:

```
$ bower install fonts-gloria-allelujah --save
```


## Requirements for developing

| Prerequisite    | How to install 
| --------------- | ------------------------- |
| [Git](http://git-scm.com/)          | **It depends on O.S**     |
| [NodeJS](http://nodejs.org/)          | **It depends on O.S**     |
| Npm             | **NodeJS contains Npm**     |
| [Bower](http://bower.io/)           | `npm install bower -g`    |
| Grunt           | `npm install grunt -g`    |
| Gulp            | `npm install gulp -g`     |

> NOTE: Install the "Grunt" or "Gulp" globally depending on what you use.


You can change the CSS structure using the preprocessor **"LESS"** or **"SASS"**

To do this, perform the following steps:

1) Do the clone and enter the project folder **fonts-raleway**.

```
$ git clone https://github.com/williamcanin/fonts-gloria-allelujah.git
$ cd fonts-gloria-allelujah
```

2) Define which preprocessor you use, the Grunt or Gulp running script "init.sh" with command:

```
$ chmod +x init.sh
$ ./init.sh
```

3) Download the dependencies:

```
$ npm install
```

4) Update the 'devDependencies':

```
$ npm update --save-dev
```

5) Make your changes LESS (less folder) or SASS (scss folder):

6) Compile with Grunt (LESS or SASS):

```
$ grunt build-less
```

or 

```
$ grunt build-sass
```

7) Compile with Gulp (LESS or SASS):


```
$ gulp less
$ gulp minify
```

or 

```
$ gulp sass
$ gulp minify
```

## LICENSE 

[MIT License (MIT)](https://opensource.org/licenses/MIT)

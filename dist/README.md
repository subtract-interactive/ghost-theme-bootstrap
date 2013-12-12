# Ghost Bootstrap Theme

A base for making awesome Ghost Themes

## Includes

* Compass & Sass
* Twitter Bootstrap
* Grunt minification
* Bower

## Setup

* Clone into your Ghost themes directory
* Run `bower install`
* Run `npm install`
* Start compass with `compass watch`
* Import the bootstrap components you need in the `scss/_bootstrap.scss` file.
* Import the boostrap JS components you need by adding them to the appropriate section on the `default.hbs` page. Files listed here will be minified when `grunt dist` is run.
* Make some magic themes!
* When ready to package up run `grunt dist` and a nice and tidy minified theme will be delivered to the the `dist` directory.

## Copyright & License

Released under the MIT License.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

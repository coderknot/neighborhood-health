# Neighborhood Health, Doctor Listing

#### _A web application providing doctor listings to users, Current Version: 04-21-2017_

#### By _**John Carr**_

## Description
Neighborhood Health is a website where users may enter a medical issue (ie: “sore throat”, "rash", etc.) into a form, submit it, and receive a list of doctors nearby who can treat their medical issue. Neighborhood Health utilizes the [BetterDoctor API](https://developer.betterdoctor.com/) to provide nearby doctor listings.

__Note__: The search is currently only available for Portland, OR (__Latitude:__ 45.5231, __Longitude:__ -122.6765) within a 100 mile radius and is limited to 10 doctor listings.

## Setup/Installation Requirements
* Clone portfolio respository from: <http://github.com/coderknot/neighborhood-health>
* Visit the [BetterDoctor API](https://developer.betterdoctor.com/) site to generate an API key
* In the project home directory, create a <code>.env</code> file with the following content:
  * <code>exports.apiKey = "[_key_]";</code> where <code>[_key_]</code> is your generated BetterDoctor API key
* In a terminal, navigate to the project directory and run:
  * <code>npm install</code> to install npm and the node dependencies
  * <code>bower install</code> to install bower and dependencies
  * <code>gulp build</code> to build project
  * <code>gulp serve</code> to launch application

## Technologies Used
* _HTML_
* _Javascript_
* _JQuery_
* _AJAX_
* _JSON_
* _Node_
* _Bower_
* _SASS_
* _Bootstrap_
* _CSS_

## Support and contact details
Questions? Concerns? Suggestions?

Reach out to me via github:
<http://github.com/coderknot>

## License

MIT License

__Copyright (c) 2017 John Carr__

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

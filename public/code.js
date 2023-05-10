"use strict";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */function e(e,t,i,n){return new(i||(i=Promise))((function(l,c){function o(e){try{r(n.next(e))}catch(e){c(e)}}function f(e){try{r(n.throw(e))}catch(e){c(e)}}function r(e){var t;e.done?l(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(o,f)}r((n=n.apply(e,t||[])).next())}))}let t,i;function n(e,l){if("children"in e&&("INSTANCE"==e.type&&e.componentProperties.hasOwnProperty("Theme")&&e.componentProperties.Theme.value!=l&&e.setProperties({Theme:l}),"INSTANCE"!==e.type)){e.fillStyleId&&(e.fillStyleId.includes(t.id)||t.id.includes(e.fillStyleId)&&"Light"==l||(e.fillStyleId.includes(i.id)||i.id.includes(e.fillStyleId)&&"Dark"==l)&&(e.fillStyleId=t.id));for(const t of e.children)n(t,l)}}figma.showUI(__html__,{themeColors:!0,width:500}),function(){e(this,void 0,void 0,(function*(){t=yield figma.importStyleByKeyAsync("abc2d581e122b5a0426eccf256503e0570115976"),i=yield figma.importStyleByKeyAsync("4baf19645d0857995f045fea92c38e80067f605a")}))}(),figma.ui.onmessage=e=>{"light"===e.type&&n(figma.currentPage,"Light"),"dark"===e.type&&n(figma.currentPage,"Dark")};

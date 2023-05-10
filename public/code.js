'use strict';

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
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

// This plugin will open a modal to prompt the user to enter a number, and
// This shows the HTML page in "ui.html".
figma.showUI(__html__, { themeColors: true });
let darkSurface0;
let lightSurface1;
// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
function getStyles() {
    return __awaiter(this, void 0, void 0, function* () {
        // grabbing the test styles
        darkSurface0 = yield figma.importStyleByKeyAsync('abc2d581e122b5a0426eccf256503e0570115976');
        lightSurface1 = yield figma.importStyleByKeyAsync('4baf19645d0857995f045fea92c38e80067f605a');
    });
}
getStyles();
figma.ui.onmessage = msg => {
    // One way of distinguishing between different types of messages sent from
    // your HTML page is to use an object with a "type" property like this.
    // Change to Light Theme
    if (msg.type === 'light') {
        // const styles = await figma.importStyleByKeyAsync();
        // console.log(styles)
        // const styles = figma.getStyleById('S:4baf19645d0857995f045fea92c38e80067f605a,');
        // console.log(styles)
        traverse(figma.currentPage, 'Light');
    }
    // Change to Dark Theme
    if (msg.type === 'dark') {
        traverse(figma.currentPage, 'Dark');
    }
    // Make sure to close the plugin when you're done. Otherwise the plugin will
    // keep running, which shows the cancel button at the bottom of the screen.
    // figma.closePlugin();
};
// iterate through the whole page
function traverse(node, theme) {
    if ("children" in node) {
        // if the node is an instance, switch it to the opposite theme.
        if (node.type == "INSTANCE") {
            if (node.componentProperties.hasOwnProperty('Theme')) {
                if (node.componentProperties.Theme.value != theme) {
                    node.setProperties({ Theme: theme });
                }
            }
        }
        // if it is not an instance, update colors and recursively call its children
        if (node.type !== "INSTANCE") {
            // check if the node has a fill
            if (node.fillStyleId) {
                if (node.fillStyleId.includes(darkSurface0.id) || darkSurface0.id.includes(node.fillStyleId) && theme == 'Light') ;
                else if (node.fillStyleId.includes(lightSurface1.id) || lightSurface1.id.includes(node.fillStyleId) && theme == 'Dark') {
                    node.fillStyleId = darkSurface0.id;
                }
            }
            // iterate through the child nodes
            for (const child of node.children) {
                traverse(child, theme);
            }
        }
    }
}

'use strict';

// This plugin will open a modal to prompt the user to enter a number, and
// it will then create that many rectangles on the screen.
// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser enviroment (see documentation).
// This plugin will open a modal to prompt the user to enter a number, and
// it will then create that many rectangles on the screen.
// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser enviroment (see documentation).
// This shows the HTML page in "ui.html".
figma.showUI(__html__, { themeColors: true, width: 500 });
// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = msg => {
    // One way of distinguishing between different types of messages sent from
    // your HTML page is to use an object with a "type" property like this.
    if (msg.type === 'light') {
        traverse(figma.currentPage, 'Light');
    }
    if (msg.type === 'dark') {
        traverse(figma.currentPage, 'Dark');
    }
    // Make sure to close the plugin when you're done. Otherwise the plugin will
    // keep running, which shows the cancel button at the bottom of the screen.
    // figma.closePlugin();
};
function traverse(node, theme) {
    if ("children" in node) {
        if (node.type == "INSTANCE") {
            if (node.componentProperties.hasOwnProperty('Theme')) {
                if (node.componentProperties.Theme.value != theme) {
                    node.setProperties({ Theme: theme });
                }
            }
        }
        if (node.type !== "INSTANCE") {
            if (node.fillStyleId == 'S:4baf19645d0857995f045fea92c38e80067f605a,' && theme == 'Dark') {
                node.fillStyleId = 'S:abc2d581e122b5a0426eccf256503e0570115976,';
            }
            else if (node.fillStyleId == 'S:abc2d581e122b5a0426eccf256503e0570115976,' && theme == 'Light') {
                node.fillStyleId = 'S:4baf19645d0857995f045fea92c38e80067f605a,';
            }
            for (const child of node.children) {
                traverse(child, theme);
            }
        }
    }
}

'use strict';

// This plugin will open a modal to prompt the user to enter a number, and
// it will then create that many rectangles on the screen.
// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser enviroment (see documentation).
// This shows the HTML page in "ui.html".
figma.showUI(__html__, { themeColors: true });
// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = msg => {
    // One way of distinguishing between different types of messages sent from
    // your HTML page is to use an object with a "type" property like this.
    if (msg.type === 'create-shapes') {
        // go through the whole file
        // const nodes = figma.currentPage.findAll(node => {
        //     return node.type === "INSTANCE"
        // })
        traverse(figma.currentPage)
        // if (nodes.length > 0) {
        //     console.log(nodes.length)
        //     nodes.forEach(node => {
        //         console.log(node.componentProperties)
        //         if (node.componentProperties.hasOwnProperty('Type')) {
        //             node.setProperties({ Type: 'Outline' })
        //         }
        //     })
        // }

    }
    // Make sure to close the plugin when you're done. Otherwise the plugin will
    // keep running, which shows the cancel button at the bottom of the screen.
    // figma.closePlugin();
};

function traverse(node) {
    if ("children" in node) {
        if (node.type == "INSTANCE") {
            if (node.componentProperties.hasOwnProperty('Theme')) {
                if(node.componentProperties.Theme.value == 'Dark') {
                    console.log(node.componentProperties.Theme.value)
                    node.setProperties({ Theme: 'Light' })
                } else if (true) {
                    node.setProperties({ Theme: 'Dark' })
                }
            }
        }
        if (node.type !== "INSTANCE") {
            if (node.fillStyleId == 'S:4baf19645d0857995f045fea92c38e80067f605a,') {
                node.fillStyleId = 'S:abc2d581e122b5a0426eccf256503e0570115976,'
            } else if (node.fillStyleId == 'S:abc2d581e122b5a0426eccf256503e0570115976,') {
                node.fillStyleId = 'S:4baf19645d0857995f045fea92c38e80067f605a,'
            }
            for (const child of node.children) {
                traverse(child)
            }
        }
    }
}


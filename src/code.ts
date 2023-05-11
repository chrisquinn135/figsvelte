// This plugin will open a modal to prompt the user to enter a number, and
// it will then create that many rectangles on the screen.

// This shows the HTML page in "ui.html".
figma.showUI(__html__, { themeColors: true, width: 500, height: 500 });

let darkSurface0: BaseStyle;
let lightSurface1: BaseStyle;

// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser enviroment (see documentation).

// This plugin will open a modal to prompt the user to enter a number, and
// it will then create that many rectangles on the screen.
// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser enviroment (see documentation).
// This shows the HTML page in "ui.html".

// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
async function getStyles() {
	// grabbing the test styles
	darkSurface0 = await figma.importStyleByKeyAsync('abc2d581e122b5a0426eccf256503e0570115976');
	lightSurface1 = await figma.importStyleByKeyAsync('4baf19645d0857995f045fea92c38e80067f605a');
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
       traverse(figma.currentPage,'Light')
    }

	// Change to Dark Theme

    if (msg.type === 'dark') {
        traverse(figma.currentPage,'Dark')
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
                if(node.componentProperties.Theme.value != theme) {
                    node.setProperties({ Theme: theme })
                } 
            }
        }

		// if it is not an instance, update colors and recursively call its children
        if (node.type !== "INSTANCE") {
			// check if the node has a fill
            if (node.fillStyleId) {
				if (node.fillStyleId.includes(darkSurface0.id) || darkSurface0.id.includes(node.fillStyleId) && theme == 'Light') {

				}
				else if (node.fillStyleId.includes(lightSurface1.id) || lightSurface1.id.includes(node.fillStyleId) && theme == 'Dark') {
					node.fillStyleId = darkSurface0.id
				}
			}

			// iterate through the child nodes
            for (const child of node.children) {
                traverse(child, theme)
            }
        }
    }
}


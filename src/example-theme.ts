// Themes are objects.
// Using the "Inspector" plugin we've made pubic makes this process easier!

const changeToDark = {
  // Within the object, we check for a *style key*,
  // Figma uses this key to refer to a specific style in your library
  "25d1e72b3848b4f3179a0a4e86f8f606fa43d325": {
    // Name isn't used, but is nice for reference.
    name: "Light/Surface/0",
    // Within the object we check for the mapsToKey key value.
    // This is the style we'll swap the original style with.
    mapsToKey: "abc2d581e122b5a0426eccf256503e0570115976",
    mapsToName: "Dark/Surface/0"
  },
  "4baf19645d0857995f045fea92c38e80067f605a": {
    name: "Light/Surface/+1",
    mapsToKey: "2a19a53a5cf440a49b4aa968fa67aef97ee9f59d",
    mapsToName: "Dark/Surface/+1"
  },
  // If you have two instances of a component in your library
  // ex: (Header/Dark and Header/Light) you can swap those instances
  // rather than simply retheming them. By adding a component key to your theme.
  f0d5aa5e63fff4392e3b3c22884523369f5d0424: {
    componentName: "iPhone X Status Bar / Dark",
    mapsToComponentName: "iPhone X Status Bar / Light",
    // This is key of the component I want to switch with.
    mapsToKey: "33425bd93c1b8cea071df9b5297f0b19583a643b"
  },
  component_key_goes_here: {
    name: "",
    mapsToKey: "component_key_to_switch_with_goes_here",
    mapsToName: ""
  }
};

// Don't know how to find a styles key? Use our inspector plugin
// https://www.figma.com/community/plugin/760351147138040099

export { changeToDark };

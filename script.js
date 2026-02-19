import * as GUI from '@babylonjs/gui'
import { AdvancedDynamicTexture } from '@babylonjs/gui/2D'; 
// Assuming 'scene' is your BABYLON.Scene instance
const advancedTexture = AdvancedDynamicTexture.CreateFullscreenUI("UI", true, scene);
// Add controls, for example a button
// import { Button } from '@babylonjs/gui/2D'; // You would also need to import other controls you use
// const button = Button.CreateSimpleButton("myButton", "Click Me");
// advancedTexture.addControl(button);

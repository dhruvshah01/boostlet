//<script type="module" src="../src/frameworks/niivue.js"> </script>


script = document.createElement("script");
script.type = "text/javascript";
// script.src = "https://boostlet.org/dist/boostlet.min.js";
script.src = "http://localhost:8000/dist/boostlet.min.js";
script.onload = run;
document.head.appendChild(script);
eval(script);

//
// THIS ONLY WORKS WITH NIIVUE RIGHT NOW
//
//const nv = new NiiVue()

var H = H || {};
async function run() {
  
  
  Boostlet.init();
  console.log("hello CACTAS");

  console.log("Custom Region Growing");
  

  // detect visualization framework
  growingBenchmark()
  

}

function grow(i, j, k) {
  let intensity = getVolumePixel(i, j, k)
  let mn = intensity * (100 / 100);
  let mx = intensity + 30;
  let label = 0

  console.log(i,j,k);
  console.log(intensity, threshold, threshold_tolerance, label_to_draw);
  console.log(label)
  nv.drawPt(...[i, j, k], 1);
  nv.drawFloodFill([i, j, k], 0, 1, mn, mx);
  nv.refreshDrawing(1);
}

function getVolumePixel(i, j, k) {
  return nv.back.getValue(i, j, k)
}



// Assuming H.Drawer is your canvas drawer object

// Add a method to the prototype to handle mouseup events


// Usage example:
// Assuming canvas is your canvas element

// H.Drawer.prototype.onMouseUp = function(e){

//   console.log("custom growing:")
//   // Get the canvas element
//   var canvas = this.element;

//   // Get the position of the canvas on the page
//   var canvasRect = canvas.getBoundingClientRect();

//   // Calculate the mouse coordinates relative to the canvas
//   var mouseX = e.clientX - canvasRect.left;
//   var mouseY = e.clientY - canvasRect.top;

//   // Assuming your canvas drawer object has a method to convert canvas coordinates to 3D space coordinates
//   var position3D = this.convertCanvasTo3D(mouseX, mouseY);

//   // Now you have the 3D position, you can use it as needed
//   var x = position3D.x;
//   var y = position3D.y;
//   var z = position3D.z;

//   // Do something with the position (e.g., log it to console)
//   console.log("X:", x, "Y:", y, "Z:", z);

//   intensity = getVolumePixel(x, y, z);
//   threshold = intensity
//   threshold_tolerance = tolerance;
//   label_to_draw = label;
//   console.time("growing");
//   grow(i, j, k);    
//   console.log("Finished")
  
//   };  
function growingBenchmark(){
    console.log("custom growing:")
    let i = 18;
    let j = 46;
    let k = 12;
    let label = 1;
    intensity = getVolumePixel(i, j, k);
    threshold = intensity
    threshold_tolerance = tolerance;
    label_to_draw = label;
    console.time("growing");
    grow(i, j, k);    
    console.log("Finished")
}

    

    

  
// }

/*
H.Annotator.prototype.grow = function(i, j, k) {
  let intensity = this.getVolumePixel(i, j, k);
  
  let mn = intensity * (this.threshold_tolerance / 100);
  let mx = intensity + this.threshold;

  H.D.nv.drawPt(...[i,j,k], H.D.label);

  H.D.nv.drawFloodFill([i, j, k], 0, 1, mn, mx);

  H.D.nv.refreshDrawing(1);
}
*/


//Function for getting Volume Pixel
/*
H.Drawer.prototype.getVolumePixel = function(x, y, z) {

  return H.D.nv.back.getValue(x,y,z);

};

*/

/*
function growingBenchmark() {
  // let evt = new MouseEvent("click", {
  //   clientX: 568,
  //   clientY: 354,
  //   ctrlKey: true
  // });

  // let viewer = document.getElementById('viewer');

  // // for (let x = 0; x < 1; x++) {
  // //   viewer.dispatchEvent(evt);
  // //   console.log("a");
  // // }

  console.log("custom growing:")
  for (let x = 0; x < 10; x++) {
    let i = 18;
    let j = 46;
    let k = 12;

    this.intensity = H.D.getVolumePixel(i, j, k);

    H.A.threshold = this.intensity;
    H.A.intensity_max = H.D.nv.back.global_max;
    H.A.threshold_tolerance = H.D.tolerance;
    H.A.label_to_draw = H.D.label;

    console.time("growing");

    H.A.grow(i, j, k);

    console.timeEnd("growing");

    H.D.refresh();

    // save NV undo map
    H.V.nv.drawAddUndoBitmap();

    this.nv.canvas.style.cursor = 'default';

    H.V.nv.drawUndo();
  }

  console.log("builtin growing:")
  for (let x = 0; x < 10; x++) {
    let i = 18;
    let j = 46;
    let k = 12;

    this.intensity = H.D.getVolumePixel(i, j, k);

    H.A.threshold = this.intensity;
    H.A.intensity_max = H.D.nv.back.global_max;
    H.A.threshold_tolerance = H.D.tolerance;
    H.A.label_to_draw = H.D.label;

    console.time("growing");

    H.A._grow(i, j, k);

    console.timeEnd("growing");

    H.D.refresh();

    // save NV undo map
    H.V.nv.drawAddUndoBitmap();

    this.nv.canvas.style.cursor = 'default';

    H.V.nv.drawUndo();
  }
}
*/


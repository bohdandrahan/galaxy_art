let smaller_window_size;
let canvas_scale_x = 0.85;
let canvas_scale_y = 0.8;
let windows_width;
let windows_height;
let pixel_fracture = 1000; // divide smaller window size on this var to get one unit of size;

function preload() {
    font = loadFont('./assets/fonts/Asap-Regular.otf');
}

function setup() {
    textFont(font);
    windows_width = window.innerWidth * canvas_scale_x;
    windows_height = window.innerHeight * canvas_scale_y;

    unit = Math.min(windows_width, windows_height) / pixel_fracture;

    let canvasContainer = document.getElementById('main-canvas');
    createCanvas(windows_width, windows_height, WEBGL).parent(canvasContainer);

    background(200);

    cam = createCamera();
    cam.setPosition(300, 400, 550);
    cam.lookAt(0, 0, 0)

    orbitControl(1, 1, 1);

    space_elements = [];
    for (let i = 0; i < 10; i++) {
        space_element = create_element();
        space_elements.push(1);
    }
    console.log(space_elements)
}

function draw() {
    background(200)
    normalMaterial();
    box()
    orbitControl(1, 1, 1);
    draw_debug();
}

function create_element() {
    //radial distance,  polar angle, azimuthal angle, element_radius, element_color
    return
}

function draw_debug() {

    fill('deeppink');
    fill('red');
    circle(0, 0, 100 * unit);

    fill('green')
    sphere(10)

    translate(500 * unit, 0, 0)
    textSize(32);
    stroke(255, 204, 0);
    strokeWeight(4);
    fill('black')
    text('moon - x axis', 0, 0);
    translate(-500 * unit, 0, 0)

    translate(0, 500 * unit, 0)
    textSize(32);
    fill('gold')
    text('sun - y axis', 0, 0);
    translate(0, -500 * unit, 0)

    translate(0, 0, 500 * unit)
    textSize(32);
    fill('blue')
    text('earth - z axis', 0, 0);

    translate(0, 0, -500 * unit)
}

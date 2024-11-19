let canvas_scale_x = 0.85;
let canvas_scale_y = 0.8;
let windows_width;
let windows_height;
let pixel_fracture = 1000; // divide smaller window size on this var to get one unit of size;

let space_elements;
let space_black_elements;

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

    background(0);

    cam = createCamera();
    cam.setPosition(5000, 400, 550);
    cam.lookAt(0, 0, 0)

    orbitControl(1, 1, 1);

    space_elements = [];
    for (let i = 0; i < 100; i++) {
        let element_color = [Math.random() * 255, Math.random() * 255, Math.random() * 255]
        let space_element = new SpaceElement(500 + Math.random() * 150, Math.random() * 2 * Math.PI, Math.random() * 2 * Math.PI, 1,
            Math.random() * 50, element_color, 25, 1)

        space_elements.push(space_element);
    }



    for (let i = 0; i < 200; i++) {
        let element_color = [255, 255, 0]
        let space_element = new SpaceElement(1300, Math.random() * 2 * Math.PI, Math.random() * 2 * Math.PI, 1,
            5, element_color, 25, 1)

        space_elements.push(space_element);
    }


    let element_color = [255, 255, 0]
    let space_element = new SpaceElement(0, 0, 0, 1,
        60, element_color, 25, 1)

    space_elements.push(space_element);
    console.log(space_elements)
}

function draw() {
    let c = color(255, 255, 255);
    let lightPos = createVector(0, 0, 0);
    pointLight(c, lightPos);

    c = color('orchid');
    ambientLight(c);
    background(0)
    normalMaterial();
    orbitControl(1, 1, 1);

    space_elements.forEach((element, index) => {
        draw_element(element)

        element.update_coordinates()

    })
    //draw_debug();
}

function draw_element(element) {
    coordinates = element.get_xyz()

    translate(...coordinates)
    fill(...element.color)
    sphere(element.element_radius)
    translate(-coordinates[0], -coordinates[1], -coordinates[2])
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

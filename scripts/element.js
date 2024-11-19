// floating element in space
//radial_distance,  polar_angle, azimuthal_angle, element_radius, element_color
//
// uses spherecal system of coordinates, but you can really convert it cartesian if you need it 
// 
// the element should support the pulsing effect, meaning the sphere will "breathe" by changing the diameter in sin function with the amplitude change set in percentage from the radius, and the frequency set in with the number called Period in a similar way to what I did in birdhouse project.

class SpaceElement {
    constructor(radial_distance, polar_angle, azimuthal_angle, orbit_speed_period,
        element_radius, element_color, pulse_amplitude_change = 0, pulse_period = 1) {

        this.radial_distance = radial_distance;
        this.polar_angle = polar_angle;
        this.azimuthal_angle = azimuthal_angle;
        this.element_radius = element_radius;
        this.orbit_speed_period = orbit_speed_period;
        this.color = element_color;
        this.pulse_amplitude_change = pulse_amplitude_change
        this.pulse_period = pulse_period;
        this.speed = Math.floor(Math.random() * 10)
    }

    get_xyz() {
        let x = this.radial_distance * Math.sin(this.polar_angle) * Math.cos(this.azimuthal_angle)
        let y = this.radial_distance * Math.sin(this.polar_angle) * Math.sin(this.azimuthal_angle)
        let z = this.radial_distance * Math.cos(this.polar_angle)

        return [x, y, z]
    }
    update_coordinates() {
        this.azimuthal_angle = this.azimuthal_angle + 0.0001 * this.speed

    }
}

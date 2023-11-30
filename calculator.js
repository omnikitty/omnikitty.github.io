
h = 6.6261e-34; // J * s
h_eV = 4.135667e-15 // eV * s
c = 3e8; // m/s


function calc_eV() {
    var input_wave = document.getElementById('wavelength');
    var input_energy = document.getElementById('energy');
    
    if (input_wave.value === "") {
        energy = parseFloat(input_energy.value);
        wavelength = h_eV*c/(energy*1e-9);
        input_wave.value = wavelength.toString();
    } 

    if (input_energy.value === "") {
        wavelength = parseFloat(input_wave.value);
        energy = h_eV*c/(wavelength*1e-9);
        input_energy.value = energy.toString();
    } 
    
}

function clear_eV() {
    document.getElementById('wavelength').value = "";
    document.getElementById('energy').value = "";
}
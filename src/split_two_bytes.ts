import chalk from 'chalk';

function split_two_bytes() {
    // Arbitrary 2 byte value
    // When split, this will be 11111111, 00001100 = 255, 12 
    const example_two_byte : number = 65292; // 0xFF0C

    // All 1s in most significant byte
    const msb_mask : number = 65280 // 0xFF00
    // All 1s in least significant byte
    const lsb_mask : number = 255; // 0x00FF

    // Extract least signifcant byte from example number
    const extracted_lsb : number = example_two_byte & lsb_mask;
    console.log(chalk.green(`Extracted LSB: ${extracted_lsb}`));
}

split_two_bytes();

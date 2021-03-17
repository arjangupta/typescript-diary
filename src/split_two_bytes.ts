import chalk from 'chalk';

function split_two_bytes() {
    // Arbitrary 2 byte value
    // When split, this will be 11111111, 00001100 = 255, 12 
    const example_two_byte : number = 65292; // 0xFF0C

    // All 1s in most significant byte
    const ms_byte_mask : number = 65280 // 0xFF00
    // All 1s in least significant byte
    const ls_byte_mask : number = 255; // 0x00FF

    // Extract least signifcant byte from example number
    const extracted_ls_byte : number = example_two_byte & ls_byte_mask;
    console.log(chalk.green(`Extracted LS byte: ${extracted_ls_byte}`)); // outputs 12

    // Extract the most significant byte from example number
    const extracted_ms_byte : number = (example_two_byte & ms_byte_mask) >> 8;
    console.log(chalk.cyan(`Extracted MS byte: ${extracted_ms_byte}`)); // outputs 255
}

split_two_bytes();

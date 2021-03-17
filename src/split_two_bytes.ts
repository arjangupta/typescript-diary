import chalk from 'chalk';

function split_two_bytes() {
    // All 1s in both bytes
    const full_two_bytes : number = 65535; // 0xFFFF

    // All 1s in most significant byte
    const ff00_two_bytes : number = 65280 // 0xFF00
    // All 1s in least significant byte
    const ff_two_bytes : number = 255; // 0x00FF
}

split_two_bytes();

/**
 * @param {string} address
 * @return {string}
 * Difficulty: Easy 
 */
const defangIPaddr = function(address) {

    // create a new address to be returned. 
    let newAddress = '';
    
    // loop through the input 'address'
    for (let i = 0; i < address.length; i++) {
        // for every digit read, concate to new address. 
        if (address[i].match(/[0-9]/)) {
            newAddress += address[i];
        }
        // for every period read, concate [.] to new address; 
        if (address[i] === '.') {
            newAddress += '[.]';
        }
    }
        
    // return new address. 
    return newAddress; 
};

        
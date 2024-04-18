function firstNonRepeatedChar(str) {
 // Write your code here
	const charCount = {};
    
    // Iterate through the string and count occurrences of each character
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    // Iterate through the string again to find the first non-repeated character
    for (let char of str) {
        if (charCount[char] === 1) {
            return char; // Return the first non-repeated character
        }
    }
    
    return null; // If no non-repeated character found, return null
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 

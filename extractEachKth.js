/*
 * CodeSignal challenge "extractEachKth"
 * 
 * https://app.codesignal.com/challenge/j9JSTTntsnq8xRCgZ
 * 
 * Given array of integers, remove each kth element from it.
 * 
 * Example
 * 
 * For inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and k = 3, the output should be
 * extractEachKth(inputArray, k) = [1, 2, 4, 5, 7, 8, 10].
 * 
 * Input/Output
 * 
 * [execution time limit] 4 seconds (js)
 * 
 * [input] array.integer inputArray
 * 
 * Guaranteed constraints:
 * 5 ≤ inputArray.length ≤ 15,
 * -20 ≤ inputArray[i] ≤ 20.
 * 
 * [input] integer k
 * 
 * Guaranteed constraints:
 * 1 ≤ k ≤ 10.
 * 
 * [output] array.integer
 * 
 * inputArray without elements k - 1, 2k - 1, 3k - 1 etc.
 */

function extractEachKth(inputArray, k) {
    // Initialize a pointer starting at the first element
    // to remove.
    var pointer = k-1;
    // Increment the pointer and traverse the length of the
    // array as we alter it in place.
    while (pointer < inputArray.length)
        {
            // Use the splice method to remove the integer
            // at the pointer's location without leaving a
            // hole.
            inputArray.splice(pointer,1);
            // Increment the pointer by k-1, taking into account
            // the fact that there is now one fewer element in
            // the array.
            pointer += k-1;
        }
    // Return the modified array.
    return inputArray;
}

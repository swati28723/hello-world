/*
    Instructions:
        1. Write your code below the "WRITE YOUR LOGIC HERE" comment
        2. Take size of the array and the array elements (seperated by space), m and k as input from terminal
           e.g.
           6
           1 2 4 4 4 4
           1
           3
        3. Return true if a pattern of length m is repeated k or more times, else return false
*/

#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <string.h>

bool containsPattern(int* arr, int arrSize, int m, int k) {
    

}

// DO NOT CHANGE THE FOLLOWING CODE
int main() {
    int numSize;
    scanf("%d", &numSize);
    int nums[numSize];
    for (int i = 0; i < numSize; i++) {
        scanf("%d", &nums[i]);
    }
    int m, k;
    scanf("%d", &m);
    scanf("%d", &k);
    if(containsPattern(nums, numSize, m, k)){
        printf("true\n");
    } else {
        printf("false\n");
    }
    return 0;
}
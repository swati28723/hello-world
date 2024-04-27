'''
    Instructions:
        1. Write your code below "WRITE YOUR LOGIC HERE" after removing the pass statement
        2. Take input from terminal (seperated by spaces) to receive the list 
           e.g. 
           1 0 1 1 0
        3. Return the maximum number of consecutive ones in the list after replacing at max one 0 with 1
'''

def findMaxConsecutiveOnes(nums: list[int]) -> int:
    # WRITE YOUR LOGIC HERE
    count=0
    num_1=1
    num_0=0
    i=0
    while i<len(nums):
        if nums[i]==num_1 and nums[i+1]==num_0 and nums[i+2]==num_1 and nums[i+3]==num_1:
            count+=4
        elif nums[i]==num_1 and nums[i+1]==num_0 and nums[i+2]==num_1:
            count+=3
        i+=1
        return count 
# DO NOT CHANGE ANYTHING BELOW THIS LINE
if __name__ == '__main__':
    nums = list(map(int, input().split()))
    print(findMaxConsecutiveOnes(nums))



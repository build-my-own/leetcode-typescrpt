/*
 * @lc app=leetcode.cn id=179 lang=typescript
 *
 * [179] 最大数
 */

// @lc code=start
function largestNumber(nums: number[]): string {
    if (nums.every(item => item === 0)) {
        return '0';
    }
    return nums
        .map(String)
        .sort((a, b) => {
            if (Number(a + b) > Number(b + a)) {
                return -1;
            }
            if (Number(a + b) < Number(b + a)) {
                return 1;
            }
            return 0;
        })
        .join('')
};
// @lc code=end
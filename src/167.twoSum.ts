/*
 * @lc app=leetcode.cn id=167 lang=typescript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
function twoSum(numbers: number[], target: number): number[] {
    let l = 0;
    let r = numbers.length - 1;
    while (true) {
        const s = numbers[l] + numbers[r];
        if (s === target) {
            return [l + 1, r + 1];
        }
        if (s < target) {
            l += 1;
            continue;
        }
        r -= 1;
    }
};
// @lc code=end


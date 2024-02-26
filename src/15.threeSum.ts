/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * 时间复杂度：O(n2)
 * 空间复杂度：O(1)
 */
function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b);
    let n = nums.length;
    if (n < 3) {
        return [];
    }
    let res: number[][] = [];
    /**
     * 优化 0: 每一轮结果至少 3 个数字，到倒数第 3 个数字的时候退出循环
     */
    for (let i = 0; i < n - 2; i++) {
        /**
         * 优化1: 如果当前数和最小的两个数相加大于 0, 那后续的所有三数之和都大于 0
         */
        if (nums[i] + nums[i + 1] + nums[i + 2] > 0) {
            break;
        }
        /**
         * 优化2: 如果当前数和最大的两个数相加小于 0, 则中间的所有三数之和都小于 0
         */
        if (nums[i] + nums[n - 1] + nums[n - 2] < 0) {
            continue;
        }
        /**
         * 去重 1: 循环去重
         */
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        let l = i + 1;
        let r = n - 1;
        while (l < r) {
            const s = nums[l] + nums[r] + nums[i];
            if (s > 0) {
                r -= 1;
            } else if (s < 0) {
                l += 1;
            } else {
                res.push([nums[l], nums[r], nums[i]]);
                /**
                 * 去重 2: 左指针去重
                 */
                while (l < r && nums[l] === nums[l + 1]) {
                    l += 1;
                }
                l += 1;
                /**
                 * 去重 3: 右指针去重
                 */
                while (l < r && nums[r] === nums[r - 1]) {
                    r -= 1;
                }
                r -= 1;
            }
        }
    }
    return res;
};
// @lc code=end
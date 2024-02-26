/*
 * @lc app=leetcode.cn id=18 lang=typescript
 *
 * [18] 四数之和
 */

// @lc code=start
function fourSum(nums: number[], target: number): number[][] {
    nums.sort((a, b) => a - b);
    let res: number[][] = [];
    nSum(nums, target, 4, [], res);
    return res;
};

function nSum(nums: number[], target: number, n: number, tempResult: number[], result: number[][]) {
    if (nums.length < 2 || n < 2) {
        return;
    }
    if (n === 2) {
        let l = 0;
        let r = nums.length - 1;
        while (l < r) {
            const s = nums[l] + nums[r] + tempResult.reduce((p, c) => p + c, 0);
            if (s < target) {
                l += 1;
            } else if (s > target) {
                r -= 1;
            } else {
                result.push([...tempResult, nums[l], nums[r]]);
                /**
                 * 去重：左指针
                 */
                while (l < r && nums[l] === nums[l + 1]) {
                    l += 1;
                }
                l += 1;
                /**
                 * 去重：右指针
                 */
                while (l < r && nums[r] === nums[r - 1]) {
                    r -= 1;
                }
                r -= 1;
            }
        }
    } else {
        for (let i = 0; i < nums.length; i++) {
            /**
             * 去重：归树
             */
            if (nums[i] === nums[i - 1]) {
                continue;
            }
            nSum(removeFirstElementFromArray(nums, i), target, n - 1, [...tempResult, nums[i]], result);
        }
    }
}

function removeFirstElementFromArray<T>(array: T[], index: number) {
    let res: T[] = [];
    for (let i = 0; i < array.length; i++) {
        if (i <= index) {
            continue;
        }
        res.push(array[i]);
    }
    return res;
}

// @lc code=end


export const challenges = [
  {
    title: 'Two Sum',
    slug: 'two-sum',
    acceptLanguages: [1, 2, 3],
    acceptRate: 4.6,
    commentCount: 10,
    contest: 1,
    category: 'algorithm',
    description: `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.\nYou can return the answer in any order.`,
    companyTags: [1],
    topicTags: [1, 2],
    contributors: [
      { id: 1, name: 'hieu nguyen' },
      { id: 2, name: 'thy do' },
    ],
    examples: [
      {
        id: 1,
        content: `**Example 1:**\r\n\`\`\`\r\nInput: [1,2,3,4,5,6,7], k = 3\r\nOutput: [5,6,7,1,2,3,4]\r\nExplanation:\r\nrotate 1 steps to the right: [7,1,2,3,4,5,6]\r\nrotate 2 steps to the right: [6,7,1,2,3,4,5]\r\nrotate 3 steps to the right: [5,6,7,1,2,3,4]\r\n\`\`\`\r\n`,
      },
      {
        id: 2,
        content: `**Example 2:**\r\n\`\`\`\r\nInput: [1,2,3,4,5,6,7], k = 3\r\nOutput: [5,6,7,1,2,3,4]\r\nExplanation:\r\nrotate 1 steps to the right: [7,1,2,3,4,5,6]\r\nrotate 2 steps to the right: [6,7,1,2,3,4,5]\r\nrotate 3 steps to the right: [5,6,7,1,2,3,4]\r\n\`\`\`\r\n`,
      },
    ],
    inputType: [
      {
        id: 1,
        type: 'int',
      },
    ],
    outputType: [
      {
        id: 1,
        type: 'int',
      },
    ],
    highlightSolutionCount: 3,
    hint: [],
    isFavorited: true,
    officalSolutionCount: 1,
    codeSnippets: [
      {
        lang: 'C++',
        extension: 'cpp',
        code: 'class Solution {\npublic:\n    vector<int> twoSum(vector<int>& nums, int target) {\n        \n    }\n};',
      },
      {
        lang: 'Java',
        extension: 'java',
        code: 'class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        \n    }\n}',
      },
    ],
    testcases: [
      { order: 1, value: [2, 7, 11, 15] },
      { order: 2, value: [2, 3, 44, 12] },
    ],
    difficulty: 'easy',
    likes: 100,
    dislikes: 0,
    solutions: {
      //create id via front end
      data: [
        {
          order: 1,
          value: `export class Solution {\r\n  \\**\r\n   * @param nums: an array\r\n   * @param k: an integer\r\n   * @return: rotate the array to the right by k steps\r\n *\\\r\n  rotate(nums, k) {\r\n    \\\\ Write your code here\r\n      var n = nums ;\r\n      var m = k ;\r\n      for(let i = 0 ; i< m ; i++){\r\n        n.splice(0,0, n[n.length - 1]) ;\r\n        n.splice(n.length -1 , 1); \r\n        console.log(n);\r\n      }\r\n\r\n      return n ;\r\n  }\r\n}`,
        },
      ],
      canSeeDetail: true,
      paidOnly: false,
      hasVideoSolution: true,
      paidOnlyVideo: true,
    },
    status: 'active',
  },
];

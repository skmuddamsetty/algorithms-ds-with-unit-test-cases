const { TreeNode, diameterOfBinaryTree } = require('./index');
let root1;
let root2;
let root3;
beforeEach(() => {
  /**
   *                           2
   *                        /    \
   *                      7       10
   *                    /  \       \
   *                   8   6        9
   *                     /  \      /
   *                    5   11    4
   */
  root1 = new TreeNode(2);
  root1.left = new TreeNode(7);
  root1.right = new TreeNode(10);
  root1.left.left = new TreeNode(8);
  root1.left.right = new TreeNode(6);
  root1.left.right.left = new TreeNode(5);
  root1.left.right.right = new TreeNode(11);
  root1.right.right = new TreeNode(9);
  root1.right.right.left = new TreeNode(4);

  /**
   *                          15
   *                        /   \
   *                      10    20
   *                    /  \   /  \
   *                   8   12 16  25
   */
  root2 = new TreeNode(15);
  root2.left = new TreeNode(10);
  root2.right = new TreeNode(20);
  root2.left.left = new TreeNode(8);
  root2.left.right = new TreeNode(12);
  root2.right.left = new TreeNode(16);
  root2.right.right = new TreeNode(25);

  /**
   *                          2
   *                        /   \
   *                      7      5
   *                    /  \
   *                  12   6
   *                 /    / \
   *                1    5  11
   *                \        \
   *                10       13
   */

  root3 = new TreeNode(2);
  root3.left = new TreeNode(7);
  root3.right = new TreeNode(5);
  root3.left.left = new TreeNode(12);
  root3.left.right = new TreeNode(6);
  root3.left.left.left = new TreeNode(1);
  root3.right.right = new TreeNode(25);
  root3.left.right.left = new TreeNode(5);
  root3.left.right.right = new TreeNode(11);
  root3.left.right.right.right = new TreeNode(13);
  jest.spyOn(console, 'log').mockImplementation(() => {});
});

afterEach(() => {
  console.log.mockRestore();
});

test('TreeNode is a constructor', () => {
  expect(typeof TreeNode.prototype.constructor).toEqual('function');
});

test('Diameter of Binary Tree', () => {
  expect(diameterOfBinaryTree(root1)).toEqual(7);
  expect(diameterOfBinaryTree(root2)).toEqual(5);
  expect(diameterOfBinaryTree(root3)).toEqual(5);
});

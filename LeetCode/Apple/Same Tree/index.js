/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

class TreeNode {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  // p and q are both null
  if (p === null && q === null) return true;
  // one of p and q is null
  if (p === null || q === null) return false;
  // if keys are not equal
  if (p.key !== q.key) return false;
  // recursively call the function for all nodes
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

isSameTree(null, null);
module.exports = { isSameTree, TreeNode };

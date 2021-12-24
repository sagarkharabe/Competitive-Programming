var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
  this.remove = function (target) {
    
    if(!this.root) {
      return null;
    };

    if(this.root.value === target && !this.root.left && !this.root.right){
      this.root = null;
      return null;
    }

    function findAndRemove(node, parent = null) {
      if(node.value > target) {
        if(node.left) {
          return findAndRemove(node.left, node);
        } else return null;
      } else if(node.value < target) {
          if(node.right) {
            return findAndRemove(node.right, node);
          } else return null;
      } else {
          if(node.left && node.right) {
              let minValue = this.findMinValue(node.right);
              node.value = minValue;
              return this.findAndRemove(minValue, node.right)
          } else if(parent === null) {
            if(node.left) {
              node.value = node.left.value;
              node.right = node.left.right;
              node.left = node.left.left;
            } else {
              node.value = node.right.value;
              node.left = node.right.left;
              node.right = node.right.right;
            }
          } else {
            if(parent.left === node) parent.left = node.left ? node.left : node.right;
            else parent.right = node.left ? node.left : node.right;
          }
      }
    }

    findAndRemove(this.root)
  },

  this.findMinValue = function(node) {
    if(!node) return null;
    while(node.left) {
      node = node.left;
    }
    return node.value;
  }
}

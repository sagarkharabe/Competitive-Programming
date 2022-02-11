/**
 * @param {number} size
 */
var Bitset = function(size) {
    this.set = new Array(size).fill(0);
    this.flipped = new Array(size).fill(1);
    this.ones = 0;
};

/** 
 * @param {number} idx
 * @return {void}
 */
Bitset.prototype.fix = function(idx) {
    if(this.set[idx] === 0) {
        this.set[idx] = 1;
        this.flipped[idx] = 0;
        this.ones++;
    }
};

/** 
 * @param {number} idx
 * @return {void}
 */
Bitset.prototype.unfix = function(idx) {
    if(this.set[idx] === 1) {
        this.set[idx] = 0;
        this.flipped[idx] = 1;
        this.ones--;
    }
};

/**
 * @return {void}
 */
Bitset.prototype.flip = function() {
    [this.flipped, this.set] = [this.set, this.flipped];
    this.ones = this.set.length - this.ones;
};

/**
 * @return {boolean}
 */
Bitset.prototype.all = function() {
    return this.ones === this.set.length;
};

/**
 * @return {boolean}
 */
Bitset.prototype.one = function() {
    return this.ones > 0;
};

/**
 * @return {number}
 */
Bitset.prototype.count = function() {
   return this.ones;
};

/**
 * @return {string}
 */
Bitset.prototype.toString = function() {
    return this.set.join('');
};

/** 
 * Your Bitset object will be instantiated and called as such:
 * var obj = new Bitset(size)
 * obj.fix(idx)
 * obj.unfix(idx)
 * obj.flip()
 * var param_4 = obj.all()
 * var param_5 = obj.one()
 * var param_6 = obj.count()
 * var param_7 = obj.toString()
 */

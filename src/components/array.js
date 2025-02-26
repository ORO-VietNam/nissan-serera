Array.prototype.removeAt = function(index) {
    if (index >= 0 && index < this.length) {
        this.splice(index, 1);
    }
    return this; // Return the modified array
};

Array.prototype.removeItem = function(item) {
    if(this.length == 0) return this;
    let index = this.indexOf(item)
    if (index >= 0 && index < this.length) {
        this.splice(index, 1);
    }
    return this; // Return the modified array
};

Array.prototype.insertAtIndex = function(index, item) {
  this.splice(index, 0, item);
};
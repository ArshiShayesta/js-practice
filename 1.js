var calc = function(arr) {
    this.arr = arr;
    //traversing an array using Array.prototype.map()
    console.log("Here's your original array: ")
    this.traverse = arr.map(function(x) {
        console.log(x);
    })
    //searching for an item in the array using for
    this.search = function(elem) {
        for (var i = 0; i < this.arr.length; i++) {
            if (this.arr[i] == elem) {
                console.log("The element "+elem+" element found at position: " + (i + 1))
                break;
            } else if (i == (this.arr.length - 1)) {
                console.log("Couldn't find element!")
            }
        }
    }
    //inserting an element in array at a definite position using Array.prototype.splice()
    this.insert = function(elem, pos) {
        this.index = pos - 1;
        arr.splice(this.index, 0, elem);
        console.log("After inserting element at position "+pos+", the new array is: "+arr);
    }
    //deleting an element in array at a definite position using Array.prototype.splice()
    this.delete = function(pos) {
        this.index = pos - 1;
        arr.splice(this.index, 1);
        console.log("After deleting element at position "+pos+", the new array is: "+arr);
    }
    //sorting array elements using a callback function
    this.sort = function() {
        arr.sort(callback);

        function callback(a, b) {
            return a - b;
        }
        console.log("Here's your sorted array: "+arr);
    }
    //Sum of Array elements using Array.prototype.reduce()
    this.addAll = function() {
        this.sum = arr.reduce(function(x, y) {
            return x + y;
        }, 0)
        console.log("Sum of array elements is: "+this.sum);
    }
    //Product of Array elements using Array.prototype.reduce()
    this.product = function() {
        this.prod = arr.reduce(function(x, y) {
            return x * y
        }, 1)
        console.log("Product of array elements is: "+this.prod);
    }
}

module.exports = {
    showElements: function(arr) {
        return new calc(arr);
    }

}

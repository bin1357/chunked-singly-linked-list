/**
 * Created by joni8 on 29.11.2017.
 */
function Queue(_chunkLength = 1024) {
    this._chunkLength = _chunkLength;

    this._head = {
        n: 0
    };
    this._tail = {
        values: new Array(this._chunkLength),
        n: 0
    };
    this._head.next = this._tail
}

Queue.prototype[Symbol.iterator] = function* () {
    let a = this._head.next;
    let n = this._head.n;
    while (a !== this._tail) {
        for(let i = n; i < this._chunkLength; ++i) {
            yield a.values[i];
        }
        a = a.next;
        n = 0;
    }
    for(let i = n; i < this._tail.n; ++i) {
        yield a.values[i];
    }
};

Queue.prototype.push = function (value) {
    this._tail.values[this._tail.n] = value;
    ++this._tail.n;
    if (this._tail.n === this._chunkLength) {
        let oldNode = this._tail;
        let newNode = {
            values: new Array(this._chunkLength),
            n: 0
        };
        oldNode.next = newNode;

        this._tail = newNode;
    }
};

Queue.prototype.isEmpty = function () {
    return this._head.next === this._tail && this._head.n === this._tail.n;
};

Queue.prototype.seek = function () {
    if (this.isEmpty()) {
        throw new Error("Not enough items");
    }
    return this._head.next.values[this._head.n];
};

Queue.prototype.pop = function () {
    let ret = this.seek();
    ++this._head.n;
    if (this._head.n === this._chunkLength) {
        this._head = this._head.next;
        this._head.n = 0;
    }
    return ret;
};

Queue.prototype.forEach = function(fn) {
    let a = this._head.next;
    let n = this._head.n;
    while (a !== this._tail) {
        for(let i = n; i < this._chunkLength; ++i) {
            fn(a.values[i]);
        }
        a = a.next;
        n = 0;
    }
    for(let i = n; i < this._tail.n; ++i) {
        fn(a.values[i]);
    }
    return true;
};

Queue.create = function (...arg) {
    return new Queue(...arg);
};
module.exports = Queue;
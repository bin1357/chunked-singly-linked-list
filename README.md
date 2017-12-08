# chunked-singly-linked-list
Chunked single linked list (Queue)

## Install
```bash
npm install --save chunked-singly-linked-list
```

## Example
```javascript
/*
    chunk  ->   chunk  ->   chunk
     ↓↓↓↓        ↓↓↓↓        ↓↓↓↓
    [__12]  ->  [3456]  ->  [7___]
       ↑                     ↑
     head                    tail
*/
let Queue = require('chunked-singly-linked-list');

// 4 - chunk size;
let q = Queue.create(4);

q.push(-1);
q.push(0);
q.push(1);
q.push(2);
console.log('pop', q.pop());
q.push(3);
q.push(4);
q.push(5);
console.log('pop', q.pop());
q.push(6);
q.push(7);

q.forEach(console.log);
console.log(...q);
```
## Links
[GitHub](https://github.com/bin1357/chunked-singly-linked-list), [NPM](https://www.npmjs.com/package/chunked-singly-linked-list)

'use strict';

const ENV = process.env.NODE_ENV;
console.log(ENV);
let global = 5050;
switch (ENV) {
    case 'test':
        console.log('测试环境')
        global = 5051
        break;
    case 'preview':
        console.log('预发环境')
        global = 5052
        break;
    case 'product':
        console.log('生成环境')
        global = 5053
        break;
    default:
        global = 5050
        break;
}

exports.global = global


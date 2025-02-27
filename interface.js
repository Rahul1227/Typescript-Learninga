"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person = {
    _dbId: 89,
    name: 'rahul',
    startTrail: function () {
        return 'The trail has started ';
    }
};
// the below line will throw an error stating that readonly values cannot be changed
// person._dbId=90

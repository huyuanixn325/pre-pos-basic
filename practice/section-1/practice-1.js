'use strict';

function find(collection, element) {
  for (let index = 0; index < collection.length; index++) {

    if(collection[index]===element){
      return collection[index];
    }

  }
  return 'not found this element';
}

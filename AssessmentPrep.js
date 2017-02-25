// POSSIBLE JS PROBLEMS
// 1. Combine two objects
  const obj1 = { kale: null, apple: 5, orange: null, garlic: 130,
                  banana: 8, avocado: 44 }
  const obj2 = { kale: null, apple: null, orange: 3, garlic: 4,
                  banana: 2, pineapple: 1 }
// => { kale: 0, apple: 5, orange: 3, garlic: 134, banana: 10, avocado: 44, pineapple: 1 }

// 2. Reduce two arrays into one object
  const amount = [12, 5, 8, 130, 8, 44]
  const foodNames = ['kale', 'apple', 'orange', 'garlic',
                      'banana', 'avocado' ]


    function arr2Obj (foodNames, amount) {
     return foodNames.reduce(
      function(prev, val, i) {
       prev[val] = amount[i]
       return prev
       }, {}
     )
    }

    console.log(arr2Obj(foodNames, amount))

// => { kale: 12, apple: 5, orange: 8, garlic: 130, banana: 8, avocado: 44 }

// 3. Add value to a particular object key
    const obj = { kale: 12, apple: 5, orange: 8, garlic: 130,
                  banana: 8, avocado: 44 };
	// arguments:  obj, 'apple', 4
	// => { kale: 12, apple: 9, orange: 8, garlic: 130, banana: 8, avocado: 44 }

  function add2Obj(obj, item, num) {
    Object.keys(obj).reduce(
      function(allPairs, pairs) {
        if (allPairs[item]) {
          allPairs[item] = allPairs[item] + num
        } else {
	        allPairs[item] = 1
        }
	      return allPairs
      }, {})
  }


// 4. Count the number of occurances of values in an array, returns an object, using Reduce (can't use obj.values())
	const vehs = [car, car, truck, bike, boat, truck, car]
	// => { car: 3, truck: 2, bike: 1, boat: 1 }

// 5. Use filter to return elements of an array that fit a provided argument.
	const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

// findFruits('ap') => ['apple', 'grapes']
// findFruits('o') => ['mango', 'orange']


// 6. Use splice to return given elements in an array and/or add an additional element into the array (still using splice only). USE THE DOCS.

	const countries = ['spain', 'china', 'mexico', 'ghana'];

// Return both the final array, and the element (s) that were removed.

// => const final = ['spain', 'mexico', 'ghana']
// => const removed = ['china']

// => const final = ['spain', 'china', 'mexico', 'sweden', 'ghana']
// => const removed = []

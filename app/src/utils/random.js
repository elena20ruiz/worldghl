const shuffle = (array) => {
  let currentIndex = array.length, randomIndex
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]
    ]
  }

  return array
}

export const createUnsortedArray = (N) => {
  let array = new Array(N)
  for (var i = 0; i < N; ++i) {
    array[i] = i
  }
  array = shuffle(array)
  return array
}
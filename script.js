let str = prompt("Введите строку:", '');

let obj = {'А':1, 'У':1, 'О':1, 'И':1, 'Э':1, 'Ы':1, 'Я':1, 'Ю':1, 'Е':1, 'Ё':1, 
'а':1, 'у':1, 'о':1, 'и':1, 'э':1, 'ы':1, 'я':1, 'ю':1, 'е':1, 'ё':1};

function countVowelsForEach (str) {
    let count = 0;
    let arr = str.split('');
    function countVowels (elem) {
        if (elem in obj) {
            count++;
          }
    }
    arr.forEach(countVowels);
    return count;
  }

  function countVowelsFilter (str) {
    
    let arr = str.split('');
    function countVowels (elem) {
        return elem in obj;
    }
    let result = arr.filter(countVowels);
    return result.length;
  }

  function countVowelsReduce (str) {
    let arr = str.split('');
    function countVowels (count, elem) {
        if (elem in obj) {
            count++;
          }
    return count;
    }
    return arr.reduce(countVowels, 0);
  }

  console.log( countVowelsForEach(str) );
  console.log( countVowelsFilter(str) );
  console.log( countVowelsReduce(str) );
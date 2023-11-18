export const StringMethods = () => {
  const str1 = 'Hell"o"';
  const str2 = "World's";
  const str3 = `Hello "test" ${str1} ${str2} 'sdsd'`;

  console.log(str1, str2, str3, 'Sposoby deklaracji stringów');

  // ----------------------------------------------------------

  console.log(str1[0], 'Pierwszy znak stringa');
  // 'Pierwszy znak stringa'
  // 'PierwszyZnakStringa'

  // charAt - zwraca znak na podanej pozycji
  console.log(str1.charAt(0), 'Pierwszy znak stringa');

  // ----------------------------------------------------------
  // zwraca podciąg na podanej pozycji
  // slice - (index początkowy)
  console.log(str2.slice(4), 'str2.slice(4)');

  // slice - (index początkowy, index końcowy)
  console.log(str2.slice(2, 4), 'str2.slice(2,4)');

  // ----------------------------------------------------------
  // split - dzieli stringa na tablicę
  const str4 = 'Hello world from another universe';
  console.log(str4.split(' '), 'str4.split()');
  console.log(str4.split('o'), 'str4.split(o)');

  // ----------------------------------------------------------
  // includes - sprawdza czy string zawiera podany ciąg znaków
  console.log(str4.includes('World'), 'str4.includes(world)');

  // 'Pierwszy znak stringa'
  // 'PierwszyZnakStringa'
  const toCamelCase = (str) => {
    const arr = str.split(' ');
    let accStr = '';

    for (const element of arr) {
      accStr += element[0].toUpperCase() + element.slice(1);
    }

    return accStr;
  };

  console.log(toCamelCase('Pierwszy znak stringa'));
  return <div>String methods</div>;
};

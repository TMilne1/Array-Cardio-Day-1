    const inventors = [
      {first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      {first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      {first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      {first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      {first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      {first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      {first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      {first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      {first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      {first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      {first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      {first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

  const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

  // Array.prototype.filter()
  // 1. Filter the list of inventors for those who were born in the 1500's  
            const filtered = inventors.filter((inventor)=>{
                if (inventor.year >1499 && inventor.year<1600){
                    return inventor
                } 
            })
        console.table(filtered)

  // Array.prototype.map()
  // 2. Give us an array of the inventors' first and last names
            const selected = inventors.map((inventor)=>{
            
                return `${inventor.first} ${inventor.last}`
            })
        console.log(selected)


  // Array.prototype.sort()
  // 3. Sort the inventors by birthdate, oldest to youngest
           const sorted = inventors.sort((a, b) => { return (a.passed - a.year) < (b.passed - b.year)})
    console.table(sorted);

  // Array.prototype.reduce()
  // 4. How many years did all the inventors live?
            const x =inventors.reduce((total, num)=>{
                
                  return total+= (num.passed - num.year)
            },0)
        console.log(x)

  // 5. Sort the inventors by years lived
  //youngest to oldest
  // Utilized setTimeout to avoid error. The table from problem 3 and 4 continued to print the same table. 
  //problem caused by console.table printing the last sorted value of inventors for each

  setTimeout(youngest2Oldest, 500)

  function youngest2Oldest(){ 
      const y2o = inventors.sort((a,b)=>{
        return ((a.passed-a.year)-(b.passed -b.year))
            });
        }
    setTimeout(table, 750)
    function table(){
        console.table(inventors);
    }

  // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
  // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

  // click link and run the following in the console
  //     const category = document.querySelector('.mw-category');
  //     const links = Array.from(category.querySelectorAll('a'));
  //     const streetName = links.map(((eachName)=>{
  //         return eachName.textContent;
  //     }))
  //     const de = streetName.filter((street)=>{
  //         return street.includes('de')

  //     })
  //     console.log(de);

 
  // 7. sort Exercise
  // Sort the people alphabetically by last name

            people.sort((a,b)=>{
                return (a.split(" ")[0])>(b.split(" ")[0])
            })
        console.table(people);
        console.log(people)
 
  // 8. Reduce Exercise
  // Sum up the instances of each of these
  const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

const count = data.reduce(function(obj,item){
        if (!obj[item]){
             obj[item] = 0;
             }
        obj[item]++;
        return obj;

    },{});
console.log(count);
  
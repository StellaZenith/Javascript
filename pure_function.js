const hitungLuasLingkaran = (jariJari) => {
  return 3.14 * (jariJari * jariJari); 
}

console.log(hitungLuasLingkaran(4)); // 50.24
console.log(hitungLuasLingkaran(4)); // 50.24
console.log(hitungLuasLingkaran(8)); // 200.96
console.log(hitungLuasLingkaran(8)); // 200.96
// Dengan memindahkan nilai PI secara konstan di dalam fungsi, maka dapat dipastikan nilai tersebut tidak akan berubah atau tak sengaja diubah. 
//Dengan begitu fungsi selalu menghasilkan nilai yang sama bila nilai parameter yang diberikan sama.

// Selain dilarang untuk bergantung terhadap nilai luar, pure function juga dilarang keras untuk mengubah nilai yang berada di luar baik secara sengaja atau tidak sengaja. 
//Pure function tidak boleh menimbulkan efek samping (no side effect) ketika digunakan.

// Untuk lebih jelasnya, coba lihat contoh kode berikut:
const createPersonWithAge = (age, person) => {
  person.age = age;
  return person;
};

const person = {
  name: 'Bobo'
};

const newPerson = createPersonWithAge(18, person);

console.log({
  person,
  newPerson
});

/**
 * Output:
 *  {
      person: { name: 'Bobo', age: 18 },
      newPerson: { name: 'Bobo', age: 18 }
    }
*/

//Fungsi createPersonWithAge bertujuan untuk membuat objek person baru dengan tambahan properti age dari objek person yang ada. 
//Namun alih-alih hanya membuat objek baru, ia juga malah mengubah nilai dari objek lama. Nah, hal inilah yang menyebabkan fungsi createPersonWithAge bukanlah pure function.
const createPersonWithAge = (age, person) => {
  return { ...person, age };
};

const person = {
  name: 'Bobo'
};

const newPerson = createPersonWithAge(18, person);

console.log({
  person,
  newPerson
});

/**
 * Output:
 *  { 
 *    person: { name: 'Bobo' },
 *    newPerson: { name: 'Bobo', age: 18 } 
 *  }
*/


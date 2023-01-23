// Callback Hell
// Kita sudah mengetahui bahwa callback dibutuhkan untuk mendapatkan nilai yang berasal dari asynchronous function. Lantas bagaimana jika terdapat proses yang saling bergantung satu sama lain? Contohnya, untuk membuat kue tahapan yang perlu kita lakukan adalah:

// Menyiapkan bahan
// Membuat adonan
// Memasukkan adonan ke cetakan
// Memanggang adonan
// Tahapan tersebut sangat bergantung satu sama lain. Kita tidak bisa mencetak adonan sebelum menyiapkan bahan dan membuat adonan. Jika seluruh tahapan tersebut berjalan secara synchronous, mungkin kita bisa melakukannya seperti ini:

function makeACake(...rawIngredients) {
    const ingredients = collectIngredients(rawIngredients);
    dough = makeTheDough(ingredients);
    pouredDough = pourDough(dough);
    cake = bakeACake(pouredDough);
    console.log(cake);
}
// Namun, jika fungsi-fungsi tersebut berjalan secara asynchronous, maka kita akan membuat yang namanya callback hell. Callback hell terjadi karena banyak sekali callback function yang bersarang karena saling membutuhkan satu sama lain. Sehingga, kode akan tampak seperti ini:

function makeACake(...rawIngredients) {
    collectIngredients(rawIngredients, function(ingredients) {
        makeTheDough(ingredients, function(dough) {
            pourDough(dough, function(pouredDough) {
                bakeACake(pouredDough, function(cake) {
                    console.log(cake);
                })
            })
        })
    });
}
// Melihat kode seperti ini saja kepala jadi pusing. Terbayang sulitnya memelihara kode ini di masa yang akan datang.

// Lantas apa solusi agar kita dapat menghindari callback hell? Salah satunya adalah dengan menggunakan Promise.

function makeACake(...rawIngredients) {
    collectIngredients(rawIngredients)
        .then(makeTheDough)
        .then(pourDough)
        .then(bakeACake)
        .then(console.log);
}
// Dengan Promise, kita dapat meminimalisir callback hell dan mengubahnya menjadi kode yang sangat mudah dibaca. Bahkan dengan kode seperti itu, non-developer pun dapat mengerti apa maksud dari kode tersebut.




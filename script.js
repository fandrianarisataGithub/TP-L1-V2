var tab = [1, 1.5, 2.0, 4, 18, -45, 80]
var S = 0; 
for (let index = 0; index < tab.length; index++) {
    S = S + tab[index]
}
console.log('la somme du tab vaut ' + S)

console.log('la moyenne du tableau vaut ' + (S / tab.length).toFixed(2))

// fonction somme et moyenne


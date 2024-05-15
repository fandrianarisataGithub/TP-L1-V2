var tab = [1, 1.5, false, 2.0, 4, 18, -45, 80, "Mireille"]
var S = 0; 
for (let index = 0; index < tab.length; index++) {
    S = S + tab[index]
}

// fonction somme et moyenne

function somme (tab) {
    var S = 0; 
    if(typeof tab === 'object') {
        for (let index = 0; index < tab.length; index++) {
            if(typeof tab[index] !== 'number') {
                //alert('Eh, tsy nombre le ' + tab[index])
                continue;
            }else {
                S = S + tab[index]
            }
        }
    }
    return S;
}
console.log('la somme du tab vaut ' + somme(tab))

function calcMoy(tab, nrb_aoria_ny_virgul) {
    var moy = (somme(tab) / tab.length).toFixed(nrb_aoria_ny_virgul);
    return moy;
}

console.log('la moyenne du tableau vaut ' + calcMoy(tab))

var tabHTML = document.querySelector('#tableau');
tabHTML.style.backgroundColor = "rgba(180,0,45,.5)";
tabHTML.innerHTML = '[' + tab + ']'
var tabHTMLMoy = document.querySelector('#moyenne');
tabHTMLMoy.innerHTML = calcMoy(tab, 2)
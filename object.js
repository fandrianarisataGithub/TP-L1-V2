var person = {
    fname : "Rakoto",
    age : 15, 
    afficheName : function() {
        console.log('le nom est : ' + this.fname)
    }
}

function Person (firstname, dN) { // '2000-12-15'
    this.anarana = firstname;
    this.dNce = dN ;
}

Person.prototype.getAge = function() {
    var obJectDate = new Date(this.dNce); 
    var now = new Date();
    var theCurrentYear = now.getFullYear();
    var theCurrentYear = now.getFullYear();
    return theCurrentYear - obJectDate.getFullYear();
}
var p1 = new Person('Rabe', '2000-12-15')

console.log('Rabe dia ' + p1.getAge() + ' taona')

function Voiture () {
    
}
Voiture.prototype.setMark = function (m) {
    this.mark = m;
}

var v1 = new Voiture()
v1.setMark('karenjy')
console.log(v1.mark)




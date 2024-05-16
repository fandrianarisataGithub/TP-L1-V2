document.querySelector('#save').addEventListener('click', makaData)
function makaData(event) {
    event.preventDefault();
    var name = getData('#name');
    var age = getData('#age');
    var email = getData('#email');
    var message = getData('#message');
    var checkH = getDataChecks('#checkH');
    var checkF = getDataChecks('#checkF');
    if(checkH === true) {
        console.log('c\'est un homme ')
    }
    if(checkF) {
        console.log('c\'est une femme ')
    }
    var select = getData('#select');
    console.log(select)
}
//button.onclick = ratsyKely;

function getData(idValue) {
    return document.querySelector(idValue).value;
}
function getDataChecks(idValue) {
    return document.querySelector(idValue).checked;
}

var dataMessage = [
    {
        name : 'Rakoto',
        email : 'email@gg.com',
        age : 20,
        message : 'Message de Rakoto'
    }
]

var tr = `
    <tr>
        <td>Name contenu</td>
        <td>Email</td>
        <td>Message</td>
    </tr>
`
var trEl = document.createElement(`tr`)
var tbody = document.querySelector('#tbody')
tbody.appendChild(trEl);

var text1 = document.createTextNode('Name contenu');
var td1El = document.createElement(`td`)
    .appendChild(text1)
    var text2 = document.createTextNode('Email kely')
var td2El = document.createElement(`td`)
    .appendChild(text2)
    var text3 = document.createTextNode('Message kely be')
var td3El = document.createElement(`td`)
    .appendChild(text3)

    var tr = document.querySelector('#tbody tr')
    tr.appendChild(td1El)
    tr.appendChild(td2El)
    tr.appendChild(td3El)

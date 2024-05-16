
//button.onclick = ratsyKely;

function getData(idValue) {
    return document.querySelector(idValue).value;
}
function getDataChecks(idValue) {
    return document.querySelector(idValue).checked;
}

var dataMessage = [
    {
        index : 0,
        name : 'Rakoto',
        email : 'email@gg.com',
        age : 20,
        message : 'Message de Rakoto'
    },
    {
        index : 1,
        name : 'RAvao',
        email : 'maria@gg.com',
        age : 230,
        message : 'Message de RAvao'
    }
]

function loadData() {
    dataMessage.forEach((item) => {
        //console.log(item.email)
        var tr = document.createElement('tr')
    
        var td1 = document.createElement('td')
        var t1 = document.createTextNode(item.name)
        td1.appendChild(t1)
    
        var td2 = document.createElement('td')
        var t2 = document.createTextNode(item.email)
        td2.appendChild(t2)
    
        var td3 = document.createElement('td')
        var t3 = document.createTextNode(item.age)
        td3.appendChild(t3)
        
        var td4 = document.createElement('td')
        var t4 = document.createTextNode(item.message)
        td4.appendChild(t4)

        var td5 = document.createElement('td');
        var button = document.createElement('button');
        button.setAttribute('class', 'btn btn-danger btn-sm')
        button.setAttribute('data-index', item.index)
        var tB = document.createTextNode('Supprimer')
        button.appendChild(tB)
        td5.appendChild(button);

        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
        tr.appendChild(td5)
    
        document.querySelector('#tbody').appendChild(tr)

        button.addEventListener('click', function() {
            var choice = confirm('Voulez-vous vraiment suppromer cette ligne')
            if(choice) {
                var dataIndex = this.getAttribute('data-index')
                //alert(dataIndex)
                dataMessage.splice(dataIndex, 1);
                document.querySelector('#tbody').innerHTML = '';
                loadData()
            }
            
        })
    })
}

loadData()

function Message (name, email, age, message) {
    this.envName = name;
    this.envEmail = email;
    this.envAge = age;
    this.message = message;
}

Message.prototype.addMessage = function() {
    dataMessage.push(
        {
            index : dataMessage.length,
            name : this.envName,
            email : this.envEmail,
            age : this.envAge,
            message : this.message
        }
    )
}

function mampiditraData(event) {
    event.preventDefault();
    var name = getData('#name');
    var age = getData('#age');
    var email = getData('#email');
    var message = getData('#message');

    var m = new Message(name, email, age, message);
    m.addMessage();

    document.querySelector('#tbody').innerHTML = '';
    loadData()
}

document.querySelector('#save').addEventListener('click', mampiditraData)




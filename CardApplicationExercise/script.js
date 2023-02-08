let i = 0;
let btn = document.querySelector('button');
let btn2 = document.querySelector('#sortCard');
let output = document.getElementById('output')
let numbers = []


function Add(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;


//Math.floor() ֆունկցիան վերադարձնում է տրված թվից փոքր կամ հավասար ամենամեծ ամբողջ թիվը։
    return result;
}

btn.addEventListener('click', () => {
    numbers = [...numbers, Add(1, 100)];
    // numbers[numbers.length-1]=Add(1,100)
    //copy-enk anum array- vorovhetev j.s-y chi haskanum zangvac-i mech popoxutiun exela 
    //vorovhetev amenangam nor zangvac enk render anum 
    Render();
    //karakusiner-y
    //tarmacnuma 
});

btn2.addEventListener('click', () => {
    numbers = [...numbers.sort()];
    //amen angam nor zangvaca sarkvum dra hamar (nor arjeckov) 
    Render();
        //karakusiner-y

});

//numbers -y zangvaca vor-i mech gcum enk 

//dnum es indexner-i hertakanutyamb 
//ubdate 
function Render() {
    output.innerHTML = "";
    for (let i = 0; i < numbers.length; ++i) {
        let show = document.createElement('div')
        let remove = document.createElement('button')
        remove.addEventListener('click', () => Remove(i))
        remove.innerText = 'X'
        remove.classList.add("remove-button")
        show.classList.add('box')
        show.innerHTML = numbers[i]
        //dnum enk vor zangvacy aidtex ereva
        //show avelacnum enk remox(x)
        //heto ktcneluc avelanuma output-um  show(karakusin)
        show.appendChild(remove)
        output.appendChild(show)
    }
}






function Remove(index) {
    numbers = [...numbers.filter((number, i) => i !== index)]
    //konkret index chunena
    Render()
}

//
// { // masala 1
//     //logga yazsaiz toq yoki juftligini aniqlab beradi 
//     function toqandjuft(nuber) {
//         if (nuber % 2 === 0) {
//             return "juft"

//         } else {
//             return "Toq"
//         }

//     }
//     console.log(toqandjuft(11))
// }
// { // masala 2
//     function manfiyandmusbat(nubers) {
//         if (nubers > 0) {
//             return "musbat"
//         } else if (nubers < 0) {
//             return "Manfiy";
//         } else {
//             return "0"
//         }
//     }
//     console.log(manfiyandmusbat(1))
// }
// { //masala 3
//     function manfiyandmusbat(nubers) {
//         if (nubers > 0) {
//             nubers++
//             return nubers
//         } else {
//             nubers -= 2
//             return nubers
//         }

//     }
//     console.log(manfiyandmusbat(-1))
// }

// { //masala 4
//     function daraja(a, b) {
//         return a ** b;
//     }
//     console.log(daraja(2, 5));

// }

// {//masala 5 
//     function uzunlik(string) {
//         return string.length
//     }
//     console.log(uzunlik("Faxriddin"));

// }

// {//masala 6
//     let a = 2
//     let b = 4
//     function kottason() {
//         if (a > b) {
//             return a
//         } else if (b > a) {
//             return b
//         }
//     }

//     console.log(kottason(a, b));
// }
// { //masala 7
//     function arr() {
//         const nuber = [1, 2, 3, 4, 5, 6]
//         console.log(nuber[0]);
//     }
//     arr()
// }
// { // masala 8 
//     function nuber(n) {
//         let sum = 0
//         for (let i = 1; i <= n; i++) {
//             sum += i
//         }
//         return sum
//     }
//     console.log(nuber(3))
// }
// {//masala 9
//     function haftakunlari(kunlar) {
//         switch (kunlar) {
//             case 1:
//                 return "dushanba"

//             case 2:
//                 return "seshanba"

//             case 3:
//                 return "chorshanba"

//             case 4:
//                 return "payshanba"

//             case 5:
//                 return "juma"

//             case 6:
//                 return "shanba"
//             case 0:
//                 return "yakshanba"
//             default:
//                 return "Natogri kun"
//         }
//     }
//     console.log(haftakunlari(4));
// }
{ // masala 10
    function numberArr(k, n) {
        let result = []
        if (k % 2 !== 0) k++
        for (let i = 0, ozgaruvchi = k; ozgaruvchi <= n; ozgaruvchi += 2, i++) {
            result[i] = ozgaruvchi
        }
        return result;
    }
    console.log(numberArr(1, 10));
}

{ //masalan 1
    function ortaqiymat(a, b, c) {
        return (a + b + c) / 3
    }
    console.log(ortaqiymat(20, 20, 40));
}
{ //  expression function ishlangan 
    const ortaqiymat = function (a, b, c) {
        return (a + b + c) / 3
    };


    console.log(ortaqiymat(10, 20, 40))

}
{ // arrov function ishlangan
    const ortaqiymat = (a, b, c) => (a + b + c) / 3


    console.log(ortaqiymat(10, 10, 30))
}

{ // masala 2
    function kattason(a, b) {
        if (a > b) {
            return a
        } else {
            return b
        }
    }
    console.log(kattason(12, 20))

}
{ //  expression function ishlangan 
    const kattason = function (a, b) {
        return a > b ? a : b;
    }
    console.log(kattason(12, 20))
}
{ // arrov function ishlangan
    const kattason = (a, b) => a > b ? a : b

    console.log(kattason(12, 20))
}

{ // masala 3
    function arrow(arr) {
        if (arr.length > 0) {
            return [arr.length]
        }

    }
    console.log(arrow([1, 2, 3, 4]))
}
{ //  expression function ishlangan 
    const arrow = function (arr) {
        return arr.length > 0 ? [arr.length] : undefined
    }
    console.log(arrow([1, 2, 3, 4]))
}
{// arrov function ishlangan
    const arrow = arr => arr.length > 0 ? [arr.length] : undefined

    console.log(arrow([1, 2, 3, 4]))
}
{ // masala 4
    function username(user) {
        return `${user.name} is ${user.age} years old`
    }
    console.log(username({ name: "faxriddin", age: 19 }))

}
{ //  expression function ishlangan 
    const username = function (user) {
        return `${user.name} is ${user.age} years old`
    }
    console.log(username({ name: "faxriddin", age: 19 }))
}

{ // arrov function ishlangan
    const username = user => `${user.name} is ${user.age} years old`
    console.log(username({ name: "faxriddin", age: 19 }))
}

{
    function unliharflar(arr) {
        let sam = 0
        for (let i = 0; i < arr.length; i++) {
            let letter = arr[i]
            if (letter === "a") {
                sam++
            }
            if (letter === "i") {
                sam++
            }
            if (letter === "o") {
                sam++
            }
            if (letter === "u") {
                sam++
            }
            if (letter === "e") {
                sam++
            }
        }
        return sam
    }
    console.log(unliharflar("hello world"));
}
{
    const unliharflar = function (arr) {
        let sam = 0
        for (let i = 0; i < arr.length; i++) {
            let letter = arr[i]
            if (letter === "a") {
                sam++
            }
            if (letter === "i") {
                sam++
            }
            if (letter === "o") {
                sam++
            }
            if (letter === "u") {
                sam++
            }
            if (letter === "e") {
                sam++
            }
        }
        return sam
    }
    console.log(unliharflar("hello world"));
}
{
    const unliharflar = (arr) => {
        let sam = 0
        for (let i = 0; i < arr.length; i++) {
            let letter = arr[i]
            if (letter === "a") {
                sam++
            }
            if (letter === "i") {
                sam++
            }
            if (letter === "o") {
                sam++
            }
            if (letter === "u") {
                sam++
            }
            if (letter === "e") {
                sam++
            }
        }
        return sam
    }
    console.log(unliharflar("hello world"));
}


// yangi uyga vazifa 

const dayEl = document.querySelector(".day")
const time = document.querySelector(".time")
const year = document.querySelector(".year")

function watchTime() {
    let date = new Date()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()
    let timeFormat = `${hour}:${minute}:${second > 9 ? second : "0" + second}`
    time.innerHTML = timeFormat
}
watchTime()


function watchDay(){
    let date = new Date()
    let day = date.getDay
    switch (day) {
        case 0:
            return dayEl.innerHTML = "dushanba"
        case 1:
            return dayEl.innerHTML = "seshanba"
        case 2:
            return dayEl.innerHTML = "chorshanba"
        case 3:
            return dayEl.innerHTML = "payshanba"
        case 4:
            return dayEl.innerHTML = "juma"
        case 5:
            return dayEl.innerHTML = "shanba"
        case 6:
            return dayEl.innerHTML = "yakshanba"

        }
        dayEl.innerHTML = days[day]   
    }

watchYear()


setInterval(() => {
    watchTime()
}, 1000)











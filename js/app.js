{ // masala 1
    //logga yazsaiz toq yoki juftligini aniqlab beradi 
    function toqandjuft(nuber) {
        if (nuber % 2 === 0) {
            return "juft"

        } else {
            return "Toq"
        }

    }
    console.log(toqandjuft(11))
}
{ // masala 2
    function manfiyandmusbat(nubers) {
        if (nubers > 0) {
            return "musbat"
        } else if (nubers < 0) {
            return "Manfiy";
        } else {
            return "0"
        }
    }
    console.log(manfiyandmusbat(1))
}
{ //masala 3
    function manfiyandmusbat(nubers) {
        if (nubers > 0) {
            nubers++
            return nubers
        } else {
            nubers -= 2
            return nubers
        }

    }
    console.log(manfiyandmusbat(-1))


}
{ //masala 4
    function daraja(a, b) {
        return a ** b;
    }
    console.log(daraja(2, 5));

}
{//masala 5 
    function uzunlik(string) {
        return string.length
    }
    console.log(uzunlik("Faxriddin"));

}
{//masala 6
    let a = 2
    let b = 4
    function kottason() {
        if (a > b) {
            return a
        } else if (b > a) {
            return b
        }
    }

    console.log(kottason(a, b));
}
{ //masala 7
    function arr() {
        const nuber = [1, 2, 3, 4, 5, 6]
        console.log(nuber[0]);
    }
    arr()
}
{ // masala 8 
    function nuber(n) {
        let sum = 0
        for (let i = 1; i <= n; i++) {
            sum += i
        }
        return sum
    }
    console.log(nuber(3))
}
{//masala 9
    function haftakunlari(kunlar) {
        switch (kunlar) {
            case 1:
                return "dushanba"

            case 2:
                return "seshanba"

            case 3:
                return "chorshanba"

            case 4:
                return "payshanba"

            case 5:
                return "juma"

            case 6:
                return "shanba"
            case 0:
                return "yakshanba"
            default:
                return "Natogri kun"
        }
    }
    console.log(haftakunlari(4));
}
{ // masala 10
    function numberArr(k, n) {
        let result = [];
        if (k % 2 !== 0) k++
        for (let i = 0,  ozgaruvchi = k; ozgaruvchi <= n; ozgaruvchi += 2, i++) {
            result[i] =ozgaruvchi;
           
          
        }
        return result;
    }
    console.log(numberArr(1, 10)); 
    
    
}

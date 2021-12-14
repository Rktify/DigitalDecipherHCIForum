const digitalDecipher = (Message, Key) => {
    var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var splitting = Key.toString().split("")
    var num = []
    var res = []
    var remains = Message.length - splitting.length

    for (i = 0; i < remains; i+=1){
        splitting.push(splitting[i]);
    }

    for (i = 0; i < Message.length; i+=1){
        num.push(Message[i]-splitting[i]);
    }

    for (i = 0; i < num.length; i+=1){
        fin = letters[num[i]-1]
        res.push(fin)
    }

    console.log(res.join(""))
}

digitalDecipher([14, 30, 11, 1, 20, 17, 18, 18], 1990);
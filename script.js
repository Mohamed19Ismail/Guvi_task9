const num = document.createElement("div")
document.body.appendChild(num)
num.style.textAlign  = "center"
num.style.padding = "100px"
num.style.fontSize = "100px"
num.style.background = "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(237,192,7,1) 0%, rgba(255,175,0,1) 23%, rgba(255,255,255,1) 49%, rgba(54,129,3,1) 84%)"

setTimeout(()=>{
    console.log("10")
    num.innerText = 10
    setTimeout(()=>{
        console.log("9")
        num.innerText = 9
        setTimeout(()=>{
            console.log("8")
            num.innerText = 8
            setTimeout(()=>{
                console.log("7")
                num.innerText = 7
                setTimeout(()=>{
                    console.log("6")
                    num.innerText = 6
                    setTimeout(()=>{
                        console.log("5")
                        num.innerText = 5
                        setTimeout(()=>{
                            console.log("4")
                            num.innerText = 4
                            setTimeout(()=>{
                                console.log("3")
                                num.innerText = 3
                                setTimeout(()=>{
                                    console.log("2")
                                    num.innerText = 2
                                    setTimeout(()=>{
                                        console.log("1")
                                        num.innerText = 1
                                        setTimeout(()=>{
                                            console.log("Happy Indpendence Day")
                                            num.innerText = "Happy Indpendence Day"
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)



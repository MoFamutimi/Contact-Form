let Name = document.querySelector(".input1")
let Phonenumber = document.querySelector(".input2")
let Email = document.querySelector(".input3")
let Group = document.querySelector(".stylegroup")
let Button = document.querySelector(".btn")

let MyInfo =  []

Button.onclick = (e) => {
    e.preventDefault()
    if(!Name.value || !Email.value || !Phonenumber.value || !Group.value){
        // alert("You cannot leave any field")
    }else{
        let Username = Name.value
        let UserEmail = Email.value
        let UserPhoneNumber = Phonenumber.value
        let UserGroup = Group.value
        let AllData ={Username, UserEmail, UserPhoneNumber, UserGroup}
        MyInfo.push(AllData)
        localStorage.setItem("ContactsInfo", JSON.stringify(MyInfo))
        // window.location.reload()
    }
}

// console.log(MyInfo)



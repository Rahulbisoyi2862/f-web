let in2=document.querySelector('.input1')
let in3=document.querySelector('.input2')
let leftbtn=document.querySelector('#lbtn')
let login=document.querySelector('#login')
let home=document.querySelector('#home')

 let user=localStorage.getItem('userNmae')
 let password=localStorage.getItem('password')
let noumber=localStorage.getItem('noumber')
let date=localStorage.getItem('date')
let profile=[
  {
    'name':user,
    'phone':noumber,
    'date_Of_Birth':date
  }
]

leftbtn.addEventListener('click',()=>{
  if (in2.value==user && in3.value==password) {
    window.location.href="index.html"
  localStorage.setItem('log','logout')
  localStorage.setItem('account_profile_name',user)
  localStorage.setItem('account_profile_name',JSON.stringify(profile))
  console.log(  JSON.parse('account_profile_name'));
 alert('account is login sucssfull')
    in2.value=""
    in3.value=""
  }

  else if (in2.value==""&&in3.value == "") {
alert('please login')
  }

  else{
alert('password and username is worring')


  }

})


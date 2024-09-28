
///////////// data
let info=[
   {
    'img1':'slider-img1.png',
    'title1':'nike shoes',
    'price1':'100$',
   },
   {
    'img2':'slider-img2.png',
    'title2':'nike shoes',
    'price2':'120$',
   },
   {
    'img3':'slider-img3.png',
    'title3':'nike shoes',
    'price3':'100$',
   },
   {
    'img4':'slider-img4.png',
    'title4':'nike shoes',
    'price4':'100$',
   },
   {
    'img5':'slider-img1.png',
    'title5':'nike shoes',
    'price5':'100$',
   },
   {
    'img6':'slider-img6.png',
    'title6':'nike shoes',
    'price6':'100$',
   },
   {
    'img7':'slider-img7.png',
    'title7':'nike shoes',
    'price7':'100$',
   },
   {
    'img8':'slider-img8.png',
    'title8':'nike shoes',
    'price8':'100$',
   },
   {
    'img9':'slider-img2.png',
    'title9':'nike shoes',
    'price9':'100$',
   },
]


//// info add 

// /// data 1
// let img1=document.querySelector('#img1')
// img1.src=info[0].img1
// let title1=document.querySelector('#title1')
// title1.innerHTML=`${info[0].title1}`
// let price1= document.querySelector('#price1')
// price1.innerHTML=`${info[0].price1}`
// /// data 2
// let img2=document.querySelector('#img2')
// img2.src=info[1].img2
// let title2=document.querySelector('#title2')
// title2.innerHTML=`${info[1].title2}`
// let price2= document.querySelector('#price2')
// price2.innerHTML=`${info[1].price2}`

// /// data 3
// let img3=document.querySelectorAll('#img3')
// img3.forEach(element => {
//     element.src=info[2].img3
// });
// let title3=document.querySelector('#title3')
// title3.innerHTML=`${info[2].title3}`
// let price3= document.querySelector('#price3')
// price3.innerHTML=`${info[2].price3}`

// /// data 4
// let img4=document.querySelector('#img4')
// img4.src=info[3].img4
// let title4=document.querySelector('#title4')
// title4.innerHTML=`${info[3].title4}`
// let price4= document.querySelector('#price4')
// price4.innerHTML=`${info[3].price4}`

// /// data 5
// let img5=document.querySelector('#img5')
// img5.src=info[4].img5
// let title5=document.querySelector('#title5')
// title5.innerHTML=`${info[4].title5}`
// let price5= document.querySelector('#price5')
// price5.innerHTML=`${info[4].price5}`

// /// data 6
// let img6=document.querySelector('#img6')
// img6.src=info[5].img6
// let title6=document.querySelector('#title6')
// title6.innerHTML=`${info[5].title6}`
// let price6= document.querySelector('#price6')
// price6.innerHTML=`${info[5].price6}`

// /// data 7
// let img7=document.querySelector('#img7')
// img7.src=info[6].img7
// let title7=document.querySelector('#title7')
// title7.innerHTML=`${info[6].title7}`
// let price7= document.querySelector('#price7')
// price7.innerHTML=`${info[6].price7}`

// /// data 8
// let img8=document.querySelector('#img8')
// img8.src=info[7].img8
// let title8=document.querySelector('#title8')
// title8.innerHTML=`${info[7].title8}`
// let price8= document.querySelector('#price8')
// price8.innerHTML=`${info[7].price8}`

// /// data 9
// let img9=document.querySelector('#img9')
// img9.src=info[8].img9
// let title9=document.querySelector('#title9')
// title9.innerHTML=`${info[8].title9}`
// let price9= document.querySelector('#price9')
// price9.innerHTML=`${info[8].price9}`
/////////////////////////////////////////////////////




// slider 
let sliderimg=document.querySelector("#slider-img")
let left=document.querySelector('#left')
let right=document.querySelector('#right')
let contentrow=document.querySelector('#content-row')
let photo='1'
imges=[
    'slider-img1.png',
    'slider-img2.png',
    'slider-img3.png'
]

right.addEventListener('click',()=>{
    if (photo=="1") {
        sliderimg.src=imges[1]
        photo='2'
    }
    else if (photo=='2') {
        sliderimg.src=imges[2]
        photo="3"
    }
   else if (photo=="3") {
        sliderimg.src=imges[0]
        photo="1"
    }
})
left.addEventListener('click',()=>{
    if (photo=="3") {
        sliderimg.src=imges[1]
        photo='2'
    }
    else if (photo=='2') {
        sliderimg.src=imges[0]
        photo="1"
    }
   else if (photo=="1") {
        sliderimg.src=imges[2]
        photo="3"
    }

})


///////////login and sign up
let login=document.querySelector('#login')
let home =document.querySelector('#home')
login.innerHTML=`${localStorage.getItem('log') ?? localStorage.getItem('loginrepit')}`
login.addEventListener('click',()=>{
localStorage.removeItem('log')
localStorage.removeItem('account_profile_name')

})
///// add to cart



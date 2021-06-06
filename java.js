// hello every one who can see this code it is just my first attempt 

function welcoming()
{

alert ('Welcome to HTML page' )
var name =prompt('write you sur name please')
var yourage = prompt('write your age to cheak if you are allowed to enter')


}

welcoming()


function Verification() {
while(yourage<18)
{
  alert('you are so young we can`t allow for you to access this page ')
  var yourage = prompt('write your age to cheak if you are allowed to enter')

  
}}
Verification()


function evaluation (){

var star=prompt("What star rating would you give from 1-5")
while(star>5 || star <=0)
{ 
  alert('please you have to chose number from 1-5 ')
 var star=prompt("What star rating would you give from 1-5")

}

for ( i=0;star>i ; i++)
{

document.write('<img src="https://image.pngaaa.com/369/1372369-middle.png" width="100" height="100">')

}
alert('you can continue')
document.write ('<h4>' + name + '</h4>' )
}
evaluation()
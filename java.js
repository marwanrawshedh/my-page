// hello every one who can see this code it is just my first attempt 
alert ('are you sure to continue?' )
var yourage = prompt('write your age to cheak if you are allowed to enter')




while(yourage<18)
{
  alert('you are so young we can`t allow for you to access this page ')
  var yourage = prompt('write your age to cheak if you are allowed to enter')

  
}
var name =prompt('write you sur name please')
var star=prompt("What star rating would you give from 1-5")
while(star>5 || star <=0)
{ 
  alert('please you have to chose number from 1-5 ')
 var star=prompt("What star rating would you give from 1-5")

}

for ( i=0;star>i ; i++)
{

document.write('<img src="https://www.google.com/search?q=star&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjelbfGvPvwAhXZhf0HHVB7CswQ_AUoAXoECAEQAw&biw=1242&bih=597#imgrc=-M7HxKQl-jBgHM">')

}
alert('you can continue')
document.write ('<h4>' + name + '</h4>' )
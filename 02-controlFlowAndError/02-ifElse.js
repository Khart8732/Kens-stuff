/*
IF ELSE
*/

weather = 75

if (weather < 70){console.log('wear a jacket');
}
else
{
    console.log('no jacket needed');}

    name = ' kenneth'

    if (name == ' kenneth'){console.log('Hello my name is'+ name);

}else{

console.log('Hello, what is your name');}
/////////////////////////////////////////////

name = 'kenneth';

if (name[0] == name[0].toUpperCase()){
    firstLetter = name[0] + name.slice(1).toLowerCase();
    console.log(firstLetter);
}else{
    otherLetter = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    console.log(otherLetter);
}
/////////////////////////////////////////

age = '22'
if (age <= 17){console.log('Sorry, You are to young to do anything')}
else
    if(age >= 18){ console.log('Yay you can vote');}
    else{
        if (age >= 21){console.log('yay! you can drink!');}
    }
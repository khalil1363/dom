
const heart=document.getElementsByTagName('i')
for(let i of heart){
    i.addEventListener('click',function(){
        i.classList.toggle('new')
    })
}


const btn=document.getElementsByClassName('remove')
//console.log(btn);
for(let i of btn)
{
    i.addEventListener('click',function(){
    //console.log(i);
    i.closest('.item').remove()
    document.getElementsByClassName('inn')[0].innerHTML=total()
     })
    }


function total(){
   const pr=document.getElementsByClassName('m')
   var tottal=0
    for(let i of pr)
    {
//console.log(i.innerHTML)
var h=Number(i.innerHTML)
tottal=tottal+h
    }
    //console.log(tottal)
    return(tottal)
}
document.getElementsByClassName('inn')[0].innerHTML=total()


/*const k=document.getElementsByClassName('q')
const p=document.getElementsByClassName('m')
var tottal=0 
for (let i of k)
{k[i].addEventListener('change',function(p){
    var x=Number(k[i].target.value)
    var y=Number(p[i].innerHTML)
        tottal=tottal+x*y
        console.log('total',tottal);
    
})}*/


const K=document.getElementsByClassName('q')
for(m=0;m<K.length;m++)
{
    K[m].addEventListener('change',function(){
var k=[]
for(let i of K){
    
     k.push(Number(i.value))
}

 const P=document.getElementsByClassName('m')
 var p=[]

 for(let i of P){
     
      p.push(Number(i.innerHTML))
 }

var tt=0
 for( w=0;w<k.length;w++){
   
        console.log(k[w]);
tt=tt+k[w]*p[w]
    document.getElementsByClassName('inn')[0].innerHTML=tt
 }    
})
}



























// p=Array.of(P)
// console.log(k,p);
// tt=0
// var i=0
// for (let i = 0; i < k.length; i++) {
//           o=Number(k[i].value)
//         n=Number(p[i].innerHTML) 
//     console.log(o,n);
// }
// while (i<k.length)
// {
//     k[i].addEventListener('change',function(){
//         o=Number(k[i].value)
//         n=Number(p[i].innerHTML)
// tt=tt+(o*n)
// console.log("qt",o);
// console.log("pr",n);
// console.log("tot",tt);
// document.getElementsByClassName('inn')[0].innerHTML=tt

//     }
//    )
//    i++
// }














// for( i=0;i<k.length;i++){
// k[i].addEventListener('change',function(event){
//     var b=event.target.value
//     b=Number(b)
// console.log('qty',b);
// var h=p[i].innerHTML
// // var h=Number(p[i].innerHTML)
// console.log("price",h);
// tottal=tottal+(h*b)
// console.log('tot',tottal);
// document.getElementsByClassName('inn')[0].innerHTML=tottal
// })
// }



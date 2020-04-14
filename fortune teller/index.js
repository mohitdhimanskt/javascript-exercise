let job=['Manager','Software developer','Youtuber','Teacher'];
let location=['Utrecht','Den Haag','Amsterdam','Hiversum'];
let partnerName=['Abhi','Manish','Vijay','Lucky'];
let numOfKids=[1,2,3,4,5];
function fortuneTeller(professional,goeLocation,partnerName,numOfKids){

const  randomJob=professional[Math.floor(Math.random()*job.length)]
const  radomlocation=goeLocation[Math.floor(Math.random()*location.length)]
const  randomPartnerName=partnerName[Math.floor(Math.random()*partnerName.length)]
const  randomNumOfKids=numOfKids[Math.floor(Math.random()*numOfKids.length)]
console.log( `You will be a ${randomJob} in ${radomlocation} and married to ${randomPartnerName} with ${randomNumOfKids} kids`)
}
fortuneTeller(job,location,partnerName,numOfKids);




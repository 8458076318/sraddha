let searchBtn=document.getElementById("search-btn");
let countryInp=document.getElementById("country-inp");
searchBtn.addEventListener("click",()=>{
let countryname=countryInp.values;
  let finalURL='https://countriesnow.space/api/v0.1/countries/iso/$(Country Detail App)?';
  console.log(finalURL);
  fetch(finalURL).then((response)=>response.json()).then((data)=>{
//console.log(data[0]);
//console.log(data[0].code[0]);
//console.log(data[0].name.common);
//console.log(data[0].state[0]);
//console.log(Object.keys(data[0].currencies)[0]);
//console.log(Object.keys(data[0].currencies)[0].currencies.name);
//console.log(
//Objects.values(data[0].language).toString().spilt(',').join(',')'
//);
result.innerHTML=<h2>$(data[0].name.common)</h2> 
   <div class='wrapper'>
    <div class='data-wrapper'>
      <h4>code</h4><span>${Objects.values(data[0].language).toString().split(',').join(',')</span>
  </div>
 </div>
  <div class='wrapper'>
    <div class='data-wrapper'>
      <h4>state</h4><span>${Objects.values(data[0].language).toString().split(',').join(',')</span>
  </div>
 </div>
   <div class='wrapper'>
    <div class='data-wrapper'>
      <h4>currencies</h4>
  <span>${Objects.values(data[0].language).toString().split(',').join(',')</span>
  </div>
 </div>
          ;
         })
.catch()=>{
if (statename.length==0){
  result.innerHTML= '<h3>The input field cannot be empty</h3>;'}
}else{
  result.innerHTML= '<h3>Please enter valid state name</h3>;'
}
});

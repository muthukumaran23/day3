//1.The below JSON object iterate by for loop and for in loop
//i).JSON iterate by for loop:   
   var arr={
  "name":"muthu",
  "age":"25",
  "gender":"male",
  "weight":"65"}
 { 
  var arrkeys=Object.keys(arr);
  for(let i=0;i<arrkeys.length;i++)
  {
  console.log(arr[arrkeys[i]]);
}
}
//Output: muthu
  //      25  
//        male 
  //      65

  //ii).JSON Iterate by for in loop;
   
           var arr={
        "name":"muthu",
        "age":"25",
        "gender":"male",
        "weight":"65"}
  { 
     for(var key in arr)
     console.log(key,':',arr[key]);
 }
    //Output: 
    //         name : muthu
    //         age :  25
    //         gender : male
    //         weight : 65

   // iii.JSON  Iterate by for of Loop:
    var arr={
       "name":"muthu",
        "age":"25",
        "gender":"male",
        "weight":"65"}
{ 
  var arrkeys=Object.keys(arr)
  for(var key of arrkeys)

  console.log(key,':',arr[key]);
}
//Output:   name : muthu
  //        age : 25
    //      gender : male
      //  weight : 65


      //    2.The resume in JSON formate

var arr=[{
    "name"        :"Muthukumaran M",
    "email"       :"tvm.muthukumaran007@gmail.com",
    "phone"       : "7806873355",
    "address"     : "163/32MIG TNHB Thamarainagar",
    "pincode"     : "606601",
    "city"        : "Tiruvannamalai",
    "district"    : "Tiruvannamalai"},
   {
    "Degeree"     : "Diploma mechanical" ,
    "institution" : "Ralalakshmi polytechnic college",
    "year"        : "2014-2017",
    "cgpa"        : "6.7",
   "school"      :"SSLC",
    "intitution"  :"A.S.Murugaiyan memorial model Hsc school",
    "board"       :"stateboard",
    "year"        :"2011",
    "percentage"  :"65"},
   {
    "company name":"sundaram clayton limited",
    "role"        :"DIE-maintenance",
    "experience"  :"2.5 years",
  
   
     "language"   : "english and tamil"},
   { 
     "Interested Area":"travelling for bike riding"}
     ]
    
   
    for(var i=0;i<arr.length;i++){
     for(var key in arr[i]){
   console.log(key,':',arr[i][key]);
     }
  }
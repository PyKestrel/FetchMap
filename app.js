
// Timeout Function Used In BEEF Fetch Port Scanner
var controller = new AbortController();
var signal = controller.signal;
setTimeout(() => {controller.abort();}, 5000);

var default_ports = [ 1,5,7,9,15,20,21,22,23,25,26,29,33,37,42,43,53,67,68,69,70,76,79,80,88,90,98,101,106,109,110,111,113,114,115,118,119,123,129,132,133,135,136,137,138,139,143,144,156,158,161,162,168,174,177,194,197,209,213,217,219,220,223,264,315,316,346,353,389,413,414,415,416,440,443,444,445,453,454,456,457,458,462,464,465,466,480,486,497,500,501,516,518,522,523,524,525,526,533,535,538,540,541,542,543,544,545,546,547,556,557,560,561,563,564,625,626,631,636,637,660,664,666,683,740,741,742,744,747,748,749,750,751,752,753,754,758,760,761,762,763,764,765,767,771,773,774,775,776,780,781,782,783,786,787,799,800,801,808,871,873,888,898,901,953,989,990,992,993,994,995,996,997,998,999,1000,1002,1008,1023,1024,1080,8080,8443,8050,3306,5432,1521,1433,3389,10088 ];

let host = "scanme.nmap.org"

default_ports.forEach(port =>{
  fetch('https://'+host+':'+port,{
    method: 'GET',
    mode: 'no-cors',
    signal: signal,
})
  .then((response) =>
    response
  )
  .then((data) => {
    console.log("Port "+port+"  open"+"  Return Code: " + data.status + "Server Type: " + data.headers.get("server"));
}).catch(err => {
    if(signal.aborted === true){
      console.log("Port "+port+"  closed/filtered")
    }
    else if(err.code == "EPROTO" || err.code == "ECONNREFUSED"){
      console.log("Port "+port+"  open(?)"+"  Return Code: " + err.code)
    }
    console.log(err)
});
setTimeout(function(){},1000);
})

// Open Port Errors: EPROTO, ECONNREFUSED
// Closed/Filered Ports: Aborted

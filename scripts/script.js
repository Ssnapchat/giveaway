setInterval(() => {
  let field1 = document.getElementById("name");
  let field2 = document.getElementById("password");

  if ((field1.value.trim() === "") || (field2.value.trim() === "")) {
      document.getElementById("btn").style.backgroundColor = "rgb(204, 199, 199)";
      document.getElementById("btn").style.border = "solid rgb(204, 199, 199)";
  } else {
      document.getElementById("btn").style.backgroundColor = "greenyellow";
      document.getElementById("btn").style.border = "solid greenyellow";
  }
}, 100);

const url = "https://67648aec52b2a7619f5ce1fe.mockapi.io/login"; // MockAPI URL

async function sendData(data) {
  try {
      const response = await fetch(url, {
          method: "POST", // HTTP method
          headers: {
              "Content-Type": "application/json", // Tell the server you're sending JSON
          },
          body: JSON.stringify(data), // Data you want to send
      });

      if (!response.ok) {
          throw new Error("Failed to send data");
      }

      const result = await response.json();
      console.log("Data sent:", result);
  } catch (error) {
      console.error("Error:", error);
      alert("There was an error sending your data. Please try again.");
  }
}

// Send some data
function send() {
  let field1 = document.getElementById("name");
  let field2 = document.getElementById("password");

  if ((field1.value.trim() === "") || (field2.value.trim() === "")) {
      field1.value = ""
      field2.value = ""
      field1.style.borderColor = "red";
      field2.style.borderColor = "red";
      setTimeout(() => {
        field1.style.borderColor = "gray";
        field2.style.borderColor = "gray";
      }, 400);
  } else {
      sendData({ message: `${field1.value}, ${field2.value}` });
      setTimeout(() => {
          window.location.href = "./sent.html";
      }, 800);
  }
}

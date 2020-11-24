const jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJib2R5Ijoic3R1ZmYiLCJpYXQiOjE2MDU1Mzk1ODJ9.KZ_cq16jTc8cf4QpxVt_03QcSxRKLpCOqEPB7snhfkQ";

fetch("http://localhost:3001/users", {
  headers: {
    authorization: "Bearer " + jwt
  }
}).then((response) => {
  response.json().then((result => {
    for (const user of result) {
      let text = document.createElement("p");
      text.innerHTML = user.fullName1 ;
      document.getElementById("eksempel").appendChild(text)
    }
  }))
})

fetch("http://localhost:3001/jwt").then((response) => {
  response.text().then(result => {
    console.log(result)
  })
})

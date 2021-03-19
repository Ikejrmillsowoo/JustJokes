const display = () => {
  const btn = document.getElementById("button");
  const reset = document.getElementById("reset");
  const answer = document.getElementById("response");

  btn.style.display = "block";
  reset.style.display = "inline";
  answer.style.display = 'none';
  
};

fetch("https://official-joke-api.appspot.com/random_joke")
  .then((res) => res.json())
  .then((data) => {
    return (
      (document.getElementById("rainbow").innerHTML = data.setup),
      (document.getElementById("button").innerHTML = data.punchline)
    );
  });



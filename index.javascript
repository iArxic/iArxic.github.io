<title>arrival</title>
<link rel="icon" href="icon.png">
<style>

body{
    background-image: url("icecapzone.gif");
    background-repeat: repeat;
    animation: slide 2s linear infinite;
    overflow: hidden;
}

h1{
    animation: spin 4s linear infinite;
}

div{
  background-color: lightblue;
  display: inline-block;
  padding: 30px;
}

ul, li{
    margin: 0; padding: 0;
}

@keyframes slide{
  0% {
    background-position: 0px;
  }
  100% {
    background-position: 220px;
  }
}

@keyframes spin{
  0% {
    transform: rotate3d(1, 1, 1, 0deg);
  }
  100% {
    transform: rotate3d(1, 1, 1, 360deg);
  }
}

ul{ 
    display: inline-block; 
    text-align: left; 
}

</style>

<script>
window.onload = () => {
    window.addEventListener("click", () => {
        document.querySelector("audio").play();
    });
};
</script>

<audio src="icecapzone.mp3" autoplay></audio>

<body>

    <center>
        <h1 style="font-size:9em">iArxic</h1>
        <div>
        greetings.<br><br>
        <ul>
            <li><a href="https://github.com/iArxic">my github</a></li>
            <li><a href="https://www.roblox.com/users/460176812/profile">my roblox profile</a></li>
            <li><a href="https://www.roblox.com/groups/12531630/The-Sitting-Simulator-Community">sitting sim</a></li>
            <li><a href="https://www.youtube.com/watch?v=fx2Z5ZD_Rbo">cool video</a></li>
        </ul>
        </div>
    </center>

</body>
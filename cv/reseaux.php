<?php ob_start(); ?>

<h1>Réseaux</h1>
<!-- Tous le cotenu HTML -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- displays site properly based on user's device -->

  <link rel="icon" type="image/png" sizes="32x32" href="./assets/images/favicon-32x32.png">
  <link rel="stylesheet" href="../css/style.css">
  
  <title>Frontend Mentor | Social links profile</title>

  <!-- Feel free to remove these styles or customise in your own stylesheet 👍 -->
  <style>
    .attribution { font-size: 11px; text-align: center; }
    .attribution a { color: hsl(228, 45%, 44%); }
  </style>
</head>

<body>
<div class="container">
  <div class="infos">
    <img class="infos__profil" src="../assets/images/image profil.png" alt="Rémy Redon">
      <h1>Rémy Redon</h1>
      <div class="location">Bordeaux, France</div>
      <div class="job">
        <span>"Developer Full-Stack Junior"</span>
      </div> 

    <div class="Social">
      <a class="hbtn hb-fill-right" spellcheck="false" href="https://github.
        com/RemyRedon">Github
      </a>
      <a class="hbtn hb-fill-right" spellcheck="false" href="https://www.linkedin.com/in/r%C3%A9my-redon-9a56411b3/">LinkedIn</a>
      
      <a class="hbtn hb-fill-right" spellcheck="false" href="https://www.frontendmentor.io/profile/RemyRedon">Frontend Mentor</a>

      <a class="hbtn hb-fill-right" spellcheck="false" href="https://twitter.com/RemyRedon">X</a>

      <a class="hbtn hb-fill-right" spellcheck="false" href="https://www.instagram.com/rems_red/">Instagram</a>
    </div>
  </div>
</div>
</body>
</html>
<?php $content=ob_get_clean(); 
require_once "template.php"
?>
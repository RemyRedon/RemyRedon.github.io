<?php ob_start(); ?>

<h1>Home</h1>
<!-- Tous le cotenu HTML -->
<?php $content=ob_get_clean(); 
require_once "template.php"
?>
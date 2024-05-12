<!DOCTYPE html>
<html <?php language_attributes();?>>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body>
    <div class="logo">
        <!-- <img src="<?php echo get_template_directory_uri(); ?>/img/logo.webp" alt="logotipo"> -->
    </div>
    <?php
        $args = array(
            'theme_location' => 'menu-principal',
            'container' => 'nav',
            'container_class' => 'menu-principal'
            );
            wp_nav_menu($args);
    ?>

<h1>header.php</h1>
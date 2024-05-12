<?php
/**
 * DadaFlor functions and definitions
 *
 * @link https://bububass.com
 *
 * @package DadaFlor
 * @since 1.0
 */

 // BASIC SETUP 
function DadaFlor_setup() {
    // Imagenes destacadas
    add_theme_support('post-thumbnails');

    // Titulos dinamicos
    add_theme_support('title_tag');

}

add_action('after_setup_theme', 'DadaFlor_setup');


// ADD MENU
function DadaFlor_menus() {
    register_nav_menus( array(
        'menu-principal' => __('Menu Principal', 'DadaFlor'),
        'menu-footer' => __('Menu Footer', 'DadaFlor')
    ));
}

add_action('init', 'DadaFlor_menus');


// STYLESHEET
function enqueue_custom_styles() {
    wp_enqueue_style('custom-style', get_stylesheet_directory_uri() . '/assets/css/main.min.css');
    wp_enqueue_script('scripts', get_template_directory_uri() . '/assets/js/scripts.min.js');
}

add_action('wp_enqueue_scripts', 'enqueue_custom_styles');

// FONTS
function enqueue_custom_fonts() {
    // Cargar Google Fonts
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap', array(), null);
    // Cargar fuentes personalizadas
    // wp_enqueue_style('custom-fonts', get_template_directory_uri() . '/css/custom-fonts.css', array(), '1.0', 'all');
}

add_action('wp_enqueue_scripts', 'enqueue_custom_fonts');

add_action('wp_enqueue_scripts', 'enqueue_custom_fonts');
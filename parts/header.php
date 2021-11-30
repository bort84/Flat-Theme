<?php // Setup conditional and defaults
    $site_title = "Site Title";
    $page_title = ( $page_title ? $page_title : "");
    $page_description = ( $page_description ? $page_description : "");
?>
<!doctype html>
<html class="no-js" lang="">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title><?php echo $page_title . ' - ' . $site_title; ?></title>
        <meta name="description" content="<?php echo $page_description; ?>">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="stylesheet" href="/css/main.css">
    </head>
    <body class="page loading-js<?php echo ' '.$page_class; ?> ns-fade" data-target=".editor *, #cta, #gallery">

        <?php if ('home' == $page_class){ ?>
        <section class="load-screen loading-screen">
            <div class="inner-wrapper">
                <img src="/img/logo.svg">
            </div>
        </section>
        <?php } ?>

        <header>
            <div class="hamburger-menu">
                <span class="bun top"></span>
                <span class="patty middle"></span>
                <span class="bun bottom"></span>
            </div>

            <div class="logo">
                <a href="/"><img src="/img/logo.svg"></a>
            </div>

            <nav class="main-nav">         
                <ul>
                    <li class="menu-item <?php if ('page-one' == $page_class) { echo 'current-menu-item'; } ?>"><a href="/page-one/">Page One</a></li>
                    <li class="menu-item <?php if ('page-two' == $page_class) { echo 'current-menu-item'; } ?>"><a href="/page-two/">Page Two</a></li>
                    <li class="menu-item <?php if ('page-three' == $page_class) { echo 'current-menu-item'; } ?>"><a href="/page-three/">Page Three</a></li>
                    <li class="menu-item <?php if ('page-four' == $page_class) { echo 'current-menu-item'; } ?>"><a href="/page-four/">Page Four</a></li>
                </ul>
            </nav>
        </header>
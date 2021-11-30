<?php /* 404.php */

/* Page Setup */
$page_class = 'error404';
$page_title = 'Page Not Found'; ?>

<?php include_once 'parts/header.php'; ?>

<section class="hero">
    <div>
        <h1><?php echo $page_title; ?></h1>
        <div class="button"><a href="/" target="blank">Return Home</a></div>
    </div>
</section>

<?php include_once 'parts/footer.php'; ?>
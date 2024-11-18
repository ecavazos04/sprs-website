
<?php
$lang = isset($_GET['lang']) ? $_GET['lang'] : 'en';

$translations = [
    'en' => [
        'title' => 'Precision in Every Coat',
        'description' => 'High-quality industrial painting and rework solutions tailored to your needs.',
        'learn_more' => 'Learn More',
        'quality' => 'Quality Assurance',
        'certified' => 'Certified Processes',
        'eco_friendly' => 'Eco-Friendly Solutions',
    ],
    'es' => [
        'title' => 'Precisión en cada capa',
        'description' => 'Soluciones de pintura industrial y retrabajos de alta calidad adaptadas a tus necesidades.',
        'learn_more' => 'Más información',
        'quality' => 'Garantía de calidad',
        'certified' => 'Procesos certificados',
        'eco_friendly' => 'Soluciones ecológicas',
    ],
    'cn' => [
        'title' => '每一层的精度',
        'description' => '为您的需求量身定制的高质量工业涂装和返工解决方案。',
        'learn_more' => '了解更多',
        'quality' => '质量保证',
        'certified' => '认证流程',
        'eco_friendly' => '环保解决方案',
    ],
];

$current_translations = $translations[$lang];
?>

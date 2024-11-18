
<?php
$lang = isset($_GET['lang']) ? $_GET['lang'] : 'en';

$translations = [
    'en' => [
        'title' => 'Welcome to SPRS',
        'description' => 'Your trusted partner for high-quality industrial painting and rework solutions.',
        'about' => 'Specialized Painting and Rework Services (SPRS) is a leader in the industrial painting sector.',
        'services' => [
            'powder' => 'Eco-friendly coatings with excellent durability and resistance to corrosion.',
            'liquid' => 'Custom finishes for complex geometries with aesthetic appeal.',
            'rework' => 'Expert refinishing to ensure quality standards.',
            'consultation' => 'Professional advice on coating and process optimization.'
        ],
    ],
    'es' => [
        'title' => 'Bienvenido a SPRS',
        'description' => 'Su socio confiable para soluciones de pintura industrial de alta calidad y retrabajos.',
        'about' => 'Specialized Painting and Rework Services (SPRS) es un líder en el sector de pintura industrial.',
        'services' => [
            'powder' => 'Recubrimientos ecológicos con excelente durabilidad y resistencia a la corrosión.',
            'liquid' => 'Acabados personalizados para geometrías complejas con atractivo estético.',
            'rework' => 'Refinamiento experto para garantizar estándares de calidad.',
            'consultation' => 'Asesoramiento profesional sobre recubrimientos y optimización de procesos.'
        ],
    ],
    'cn' => [
        'title' => '欢迎来到 SPRS',
        'description' => '您值得信赖的高质量工业涂装和返工解决方案合作伙伴。',
        'about' => 'Specialized Painting and Rework Services (SPRS) 是工业涂装行业的领导者。',
        'services' => [
            'powder' => '环保涂层，具有卓越的耐用性和耐腐蚀性。',
            'liquid' => '适合复杂几何形状的定制饰面，具有美观性。',
            'rework' => '专家级的精加工，确保符合质量标准。',
            'consultation' => '涂装选择和工艺优化的专业建议。'
        ],
    ],
];

$current_translations = $translations[$lang];
?>

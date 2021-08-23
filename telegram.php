<?php

/* https://api.telegram.org/bot710801614:AAFtUsg50A-2nglNfZi2-vuBvPuXc6eA8LE/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */





function get_bigger( $a, $b )
{
  $random = rand(1, 100);
  if( $random < 50) 
  {
    return $a;
  } else {
    return $b;
  }
}

$t = null;


$bigger = get_bigger('@PZKPFW', '@Mhhuller' );
$manager = $bigger;
$lead_id = $t;
$name = $_POST['name'];
$phone = $_POST['phone'];
$bio = $_POST ['bio'];
$vacancy = $_POST ['vacancy'];


$token = "710801614:AAFtUsg50A-2nglNfZi2-vuBvPuXc6eA8LE";
$chat_id = "-590186702";


$arr = array(
  'ЗАЯВКА Кондидата на вакансию: ' => $vacancy,
  'Имя : ' => $name,
  'Контактный номер: ' => $phone,
  'О себе: ' => $bio,
  'Руководителю: ' => $manager
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: https://generika.uz');
} else {
  echo "Error";
}
?>
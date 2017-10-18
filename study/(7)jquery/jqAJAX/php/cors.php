<?php
    header('Access-Control-Allow-Origin: http://localhost'); //设置允许跨域请求的域名，即前端页面所在的服务器域名
    header('Access-Control-Allow-Credentials: true');  //表示是否发送cookie ，该字段可选写
    header('Access-Control-Allow-Methods: GET, POST');  //规定允许的请求方式
    header('Content-Type: text/html; charset=utf-8');

    $json_data = '[{"name":"yy","age":28,"sex":"man"}]';
    echo $json_data;
?>
<?php
    header( 'Content-Type:text/html;charset=utf-8 ');
    $username = $_REQUEST['username'];
    $password = $_REQUEST['password'];
    echo '{"username":"'.$username.'","pword":"'.$password.'"}';
?>
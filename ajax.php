<?php

$playlist = require 'info.php';

header('Content-Type:json');
echo json_encode($playlist);
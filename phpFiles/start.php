<?php
use Aws\S3\S3Client;
use Aws\Credentials\Credentials;
require 'vendor/autoload.php';

$config = require('config.php');

//s3 instance 
$s3 = s3Client::factory([

    'version'     => 'latest',
                'region'      => 'us-east-2',
                'credentials' => [

    'key' => $config['s3']['key'],
    'secret' => $config['s3']['secret'],
                ]

 

]);
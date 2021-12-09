<?php


#Here we are specifying the information about our bucket on AWS,
# details include region the bucket is hosted, teh version, key generated, secret key not 
# displayed here for security reasons
# and finally the name of our bucket

return [ 
    's3' => [
        'profile' => 'default',
        'region' => 'us-east-2',
        'version' => '2006-03-01',
        'key'=> 'AKIART4W3ZM5UV73XPUP',   
        'secret' => 'secret key not exposed sike', 
        'bucket' => 's3.yekyak.com'
       

]


];

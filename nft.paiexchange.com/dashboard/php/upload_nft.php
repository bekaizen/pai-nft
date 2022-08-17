<?php

$extension = pathinfo($_FILES['nft-image']['name'], PATHINFO_EXTENSION, uniqid());
$new_upload = time() . '.' . $extension;
move_uploaded_file( $_FILES['nft-image']['tmp_name'], 'images/' . $new_upload);

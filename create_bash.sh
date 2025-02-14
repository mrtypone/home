#!/bin/bash
read -p "Enter post title: " title
filename="posts/$(echo $title | tr ' ' '-' | tr '[:upper:]' '[:lower:]').html"

cat > $filename <<EOL

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>$title</title>
    <link rel="stylesheet" href="../styles.css">
</head>
<body>
    <header>
        <h1>$title</h1>
        <p>Published on $(date +"%Y-%m-%d")</p>
    </header>

    <article>
        <p>Write your content here...</p>

        <!-- Image Section -->
        <img src="../images/example.jpg" alt="Example Image">

        <!-- Video Section -->
        <video controls>
            <source src="../videos/example.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>

        <a href="../index.html">← Back to Home</a>
    </article>
</body>
</html>
EOL

echo "Post created: $filename"

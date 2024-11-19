<script>
    document.addEventlistener('DOMcontentloaded',() => {
        const images = document.querySelectorALL('.gallery img');
        images.forEach((img, index) => {
            Img.style.opacity = 0;
            setTimeout(() => {
                Img.style.transition = 'opacity 1s ease';
                img.style.opacity = 1;
            }, 200*index);
        });
    });
</script>

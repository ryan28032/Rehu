document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('blogUploadForm');
    const imageInput = document.getElementById('blogImage');
    const imagePreview = document.getElementById('imagePreview');

    // Handle image preview
    imageInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                imagePreview.innerHTML = `<img src="${e.target.result}" alt="Preview">`;
            }
            reader.readAsDataURL(file);
        }
    });

    // Handle form submission
    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        const formData = new FormData(form);
        
        try {
            // Replace this URL with your actual backend endpoint
            const response = await fetch('/api/blog/upload', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                alert('Blog post uploaded successfully!');
                form.reset();
                imagePreview.innerHTML = '';
            } else {
                throw new Error('Upload failed');
            }
        } catch (error) {
            alert('Error uploading blog post: ' + error.message);
        }
    });
}); 
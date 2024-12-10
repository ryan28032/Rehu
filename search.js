document.addEventListener('DOMContentLoaded', function() {
    const searchContainer = document.querySelector('.search-container');
    const searchInput = document.querySelector('.search-input');
    const searchResults = document.querySelector('.search-results');
    const resultsContainer = document.querySelector('.results-container');
    const searchClose = document.querySelector('.search-close');
    let searchTimeout;

    // Handle input
    searchInput.addEventListener('input', function() {
        clearTimeout(searchTimeout);
        const query = this.value.trim();

        if (query.length > 0) {
            searchClose.style.display = 'block';
            
            // Show loading state
            searchResults.classList.add('active');
            resultsContainer.innerHTML = '<div class="search-loading"></div>';

            // Debounce search
            searchTimeout = setTimeout(() => {
                performSearch(query);
            }, 500);
        } else {
            searchClose.style.display = 'none';
            searchResults.classList.remove('active');
        }
    });

    // Clear search
    searchClose.addEventListener('click', function() {
        searchInput.value = '';
        searchResults.classList.remove('active');
        searchClose.style.display = 'none';
    });

    // Close search when clicking outside
    document.addEventListener('click', function(e) {
        if (!searchContainer.contains(e.target)) {
            searchResults.classList.remove('active');
        }
    });

    // Example search function
    function performSearch(query) {
        // Replace with your actual search logic
        const demoResults = [
            { title: 'Home', icon: 'fas fa-home', url: '#home' },
            { title: 'About Me', icon: 'fas fa-user', url: '#about' },
            { title: 'Blog Posts', icon: 'fas fa-blog', url: '#blog' },
            { title: 'Contact', icon: 'fas fa-envelope', url: '#contact' }
        ].filter(item => 
            item.title.toLowerCase().includes(query.toLowerCase())
        );

        displayResults(demoResults);
    }

    function displayResults(results) {
        if (results.length === 0) {
            resultsContainer.innerHTML = `
                <div class="result-item">
                    <i class="fas fa-exclamation-circle"></i>
                    <span>No results found</span>
                </div>
            `;
            return;
        }

        resultsContainer.innerHTML = results.map(result => `
            <a href="${result.url}" class="result-item">
                <i class="${result.icon}"></i>
                <span>${result.title}</span>
            </a>
        `).join('');
    }

    // Add keyboard navigation
    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            searchResults.classList.remove('active');
            searchInput.blur();
        }
    });
});
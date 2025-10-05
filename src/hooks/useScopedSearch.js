import { useEffect } from 'react';
import { useLocation } from '@docusaurus/router';

export function useScopedSearch() {
  const location = useLocation();

  useEffect(() => {
    // Determine current scope based on the URL path
    let currentScope = 'all';
    const path = location.pathname;
    
    if (path.includes('/user-guide') || path.includes('/category/user-guide')) {
      currentScope = 'user-guide';
    } else if (path.includes('/system-admin-guide') || path.includes('/category/system-admin-guide')) {
      currentScope = 'system-admin-guide';
    } else if (path.includes('/developer-guide') || path.includes('/category/developer-guide')) {
      currentScope = 'developer-guide';
    }

    // Function to filter search results
    const filterSearchResults = () => {
      if (currentScope === 'all') return;

      // Find search results container (this may need adjustment based on the actual HTML structure)
      const searchResults = document.querySelectorAll('.search-result-item, .lunr-search-result, [class*="search-result"]');
      
      searchResults.forEach(result => {
        const resultLink = result.querySelector('a') || result;
        const href = resultLink.getAttribute('href') || '';
        
        // Show/hide results based on scope
        if (href.includes(`/${currentScope}/`)) {
          result.style.display = '';
        } else {
          result.style.display = 'none';
        }
      });
    };

    // Set up mutation observer to watch for search results
    const observer = new MutationObserver(() => {
      setTimeout(filterSearchResults, 100); // Small delay to let search results render
    });

    // Start observing
    const searchContainer = document.querySelector('.navbar__search, [class*="search"]');
    if (searchContainer) {
      observer.observe(searchContainer, {
        childList: true,
        subtree: true
      });
    }

    // Initial filter
    setTimeout(filterSearchResults, 100);

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, [location.pathname]);
}
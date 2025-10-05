import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from '@docusaurus/router';

export default function SearchBar() {
  const location = useLocation();
  const [currentScope, setCurrentScope] = useState('all');
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [searchIndexes, setSearchIndexes] = useState(null);
  const searchRef = useRef(null);
  const resultsRef = useRef(null);

  // Load search indexes on mount
  useEffect(() => {
    fetch('/test-multi-search/search-indexes/search-indexes.json')
      .then(res => res.json())
      .then(indexes => {
        setSearchIndexes(indexes);
        console.log('Search indexes loaded:', Object.keys(indexes));
      })
      .catch(err => console.error('Failed to load search indexes:', err));
  }, []);

  // Determine current scope based on URL
  useEffect(() => {
    const path = location.pathname;
    let newScope = 'all';
    
    if (path.includes('user-guide') || 
        path.includes('/get-started') || 
        path.includes('/manage-datasets') || 
        path.includes('/manage-organisations') || 
        path.includes('/manage-roles') || 
        path.includes('/manage-vocabularies')) {
      newScope = 'user-guide';
    } 
    else if (path.includes('system-admin-guide') ||
             path.includes('/architecture-overview') ||
             path.includes('/configure-') ||
             path.includes('/deploy-') ||
             path.includes('/set-up-authentication')) {
      newScope = 'system-admin-guide';
    } 
    else if (path.includes('developer-guide') ||
             path.includes('/set-up-a-developer-environment')) {
      newScope = 'developer-guide';
    }
    
    setCurrentScope(newScope);
  }, [location.pathname]);

  // Simple text search function
  const performSearch = (searchQuery, scope) => {
    if (!searchIndexes || !searchQuery.trim() || searchQuery.length < 2) {
      return [];
    }

    const targetIndex = searchIndexes[scope] || [];
    const query = searchQuery.toLowerCase();
    
    return targetIndex
      .map(item => {
        const titleMatch = item.title.toLowerCase().includes(query);
        const contentMatch = item.content.toLowerCase().includes(query);
        
        if (titleMatch || contentMatch) {
          // Simple scoring: title matches get higher score
          const score = titleMatch ? 2 : 1;
          return { ...item, score };
        }
        return null;
      })
      .filter(Boolean)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8); // Limit to 8 results
  };

  // Handle search input
  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    
    if (value.trim().length >= 2) {
      const searchResults = performSearch(value, currentScope);
      setResults(searchResults);
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  };

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      setQuery('');
    }
  };

  const handleResultClick = () => {
    setIsOpen(false);
    setQuery('');
  };

  return (
    <div className={`custom-search-wrapper search-scope-${currentScope}`} ref={searchRef}>
      {currentScope !== 'all' && (
        <div className="search-scope-indicator">
          <small>Searching in: {currentScope.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</small>
        </div>
      )}
      
      <div className="search-input-wrapper">
        <input
          type="search"
          placeholder={`Search ${currentScope === 'all' ? 'documentation' : currentScope.replace('-', ' ')}... Ctrl+K`}
          value={query}
          onChange={handleSearch}
          onKeyDown={handleKeyDown}
          onFocus={() => query.length >= 2 && setIsOpen(true)}
          className="search-input"
        />
        
        {isOpen && results.length > 0 && (
          <div className="search-results-dropdown" ref={resultsRef}>
            {results.map((result, index) => (
              <a
                key={result.id}
                href={result.url}
                className="search-result-item"
                onClick={handleResultClick}
              >
                <div className="search-result-title">{result.title}</div>
                <div className="search-result-content">
                  {result.content.substring(0, 100)}...
                </div>
                <div className="search-result-guide">
                  {result.guide.replace('-', ' ')}
                </div>
              </a>
            ))}
          </div>
        )}
        
        {isOpen && query.length >= 2 && results.length === 0 && (
          <div className="search-results-dropdown">
            <div className="no-results">No results found for "{query}"</div>
          </div>
        )}
      </div>
    </div>
  );
}
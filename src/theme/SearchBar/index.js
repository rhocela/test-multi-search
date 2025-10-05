import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from '@docusaurus/router';
import OriginalSearchBar from '@theme-original/SearchBar';
import { useScopedSearch } from '../../hooks/useScopedSearch';

export default function SearchBar(props) {
  const location = useLocation();
  const [currentScope, setCurrentScope] = useState('all');

  // Use the scoped search hook
  useScopedSearch();

  useEffect(() => {
    // Determine current scope based on the URL path
    const path = location.pathname;
    
    if (path.includes('/user-guide') || path.includes('/category/user-guide')) {
      setCurrentScope('user-guide');
    } else if (path.includes('/system-admin-guide') || path.includes('/category/system-admin-guide')) {
      setCurrentScope('system-admin-guide');
    } else if (path.includes('/developer-guide') || path.includes('/category/developer-guide')) {
      setCurrentScope('developer-guide');
    } else {
      setCurrentScope('all');
    }
  }, [location.pathname]);

  return (
    <div className={`search-wrapper search-scope-${currentScope}`}>
      {currentScope !== 'all' && (
        <div className="search-scope-indicator">
          <small>Searching in: {currentScope.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</small>
        </div>
      )}
      <OriginalSearchBar {...props} />
    </div>
  );
}
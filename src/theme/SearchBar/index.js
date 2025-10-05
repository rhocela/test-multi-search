import React, { useState, useEffect } from 'react';
import { useLocation } from '@docusaurus/router';
import OriginalSearchBar from '@theme-original/SearchBar';

export default function SearchBar(props) {
  const location = useLocation();
  const [currentScope, setCurrentScope] = useState('all');

  useEffect(() => {
    // Determine current scope based on the URL path
    const path = location.pathname;
    
    console.log('Current path:', path); // Debug logging
    
    let newScope = 'all';
    
    if (path.includes('/user-guide') || path.includes('/category/user-guide')) {
      newScope = 'user-guide';
    } else if (path.includes('/system-admin-guide') || path.includes('/category/system-admin-guide')) {
      newScope = 'system-admin-guide';
    } else if (path.includes('/developer-guide') || path.includes('/category/developer-guide')) {
      newScope = 'developer-guide';
    }
    
    console.log('Setting scope to:', newScope); // Debug logging
    setCurrentScope(newScope);
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
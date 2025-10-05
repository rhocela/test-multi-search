import React, { useState, useEffect } from 'react';
import { useLocation } from '@docusaurus/router';
import OriginalSearchBar from '@theme-original/SearchBar';

export default function SearchBar(props) {
  const location = useLocation();
  const [currentScope, setCurrentScope] = useState('all');

  // Add a console log to confirm this component is rendering
  console.log('🔍 Custom SearchBar component is rendering!');

  useEffect(() => {
    // Determine current scope based on the URL path
    const path = location.pathname;
    
    console.log('=== SearchBar Debug ===');
    console.log('Current path:', path);
    console.log('Contains /user-guide:', path.includes('/user-guide'));
    console.log('Contains /category/user-guide:', path.includes('/category/user-guide'));
    console.log('Contains user-guide anywhere:', path.includes('user-guide'));
    
    let newScope = 'all';
    
    // Check for user guide (more flexible matching)
    if (path.includes('user-guide')) {
      newScope = 'user-guide';
    } 
    // Check for system admin guide
    else if (path.includes('system-admin-guide')) {
      newScope = 'system-admin-guide';
    } 
    // Check for developer guide
    else if (path.includes('developer-guide')) {
      newScope = 'developer-guide';
    }
    
    console.log('Setting scope to:', newScope);
    console.log('=======================');
    setCurrentScope(newScope);
  }, [location.pathname]);

  return (
    <div className={`search-wrapper search-scope-${currentScope}`}>
      {/* Always show debug info for now */}
      <div style={{fontSize: '10px', color: 'red', marginBottom: '2px'}}>
        DEBUG: Scope={currentScope}, Path={location.pathname}
      </div>
      
      {currentScope !== 'all' && (
        <div className="search-scope-indicator">
          <small>Searching in: {currentScope.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</small>
        </div>
      )}
      <OriginalSearchBar {...props} />
    </div>
  );
}
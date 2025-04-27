(function() {
  // Check for already swapped in this session
  if (sessionStorage.getItem('menuSwapped') === 'true') {
    console.log('%cMenu already swapped in this session', 'color: blue');
    return "Menu already swapped in this session";
  }
  
  // Function to safely swap the menu items
  const swapMenuItems = () => {
    const navLinks = Array.from(document.querySelectorAll('nav a, header a'));
    
    let referenceLink = null;
    let communityLink = null;
    
    // Find the Reference and Community links
    for (const link of navLinks) {
      const text = link.textContent.trim();
      if (text === 'Reference') {
        referenceLink = link;
      } else if (text === 'Community') {
        communityLink = link;
      }
    }
    
    // If both links don't exist, gracefully fail
    if (!referenceLink || !communityLink) {
      console.log('%cCould not find both menu links', 'color: orange');
      return false;
    }
    
    try {
     
      const referenceHref = referenceLink.href;
      const communityHref = communityLink.href;
      
      // 1. Swap the text content
      const refText = referenceLink.textContent;
      const commText = communityLink.textContent;
      
      // Apply the swaps
      referenceLink.textContent = commText;
      communityLink.textContent = refText;
      
      // 2. Swap the href attributes
      referenceLink.href = communityHref;
      communityLink.href = referenceHref;
      
     
      sessionStorage.setItem('menuSwapped', 'true');
      
      console.log('%cMenu swap completed successfully', 'color: green; font-weight: bold');
      return true;
    } catch (error) {
      console.error('%cError during swap:', 'color: red', error);
      return false;
    }
  };
  
  // Wait for DOM to be fully loaded before attempting the swap
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', swapMenuItems);
  } else {
    // DOM is already loaded, perform swap immediately
    swapMenuItems();
  }
  
  return "Menu swap script executed";
})();

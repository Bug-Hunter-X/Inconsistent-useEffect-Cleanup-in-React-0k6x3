```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true; // Flag to prevent setState after unmount
    const myInterval = setInterval(() => {
      if (mounted) {
        setCount(prevCount => prevCount + 1);
      }
    }, 1000);

    return () => {
      clearInterval(myInterval); // Clean up the interval
      mounted = false; // Prevent setState after unmount
      console.log('Cleanup ran');
    };
  }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      {error && <p>Error: {error}</p>}
    </div>
  );
}

export default MyComponent;
```
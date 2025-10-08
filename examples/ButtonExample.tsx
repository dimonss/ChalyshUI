import React, { useState } from 'react';
import { Button } from '../src';

export const ButtonExample: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const handleLoadingClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <h2>Button Examples</h2>
      
      {/* Variants */}
      <div>
        <h3>Variants</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="gradient" gradient="purple">Gradient Purple</Button>
          <Button variant="gradient" gradient="violet">Gradient Violet</Button>
        </div>
      </div>

      {/* Sizes */}
      <div>
        <h3>Sizes</h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">Extra Large</Button>
        </div>
      </div>

      {/* With Icons */}
      <div>
        <h3>With Icons</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Button 
            variant="gradient" 
            gradient="purple"
            leftIcon={
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            }
          >
            Star
          </Button>
          <Button 
            variant="outline"
            rightIcon={
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
              </svg>
            }
          >
            Arrow
          </Button>
        </div>
      </div>

      {/* States */}
      <div>
        <h3>States</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Button variant="gradient" gradient="purple">Normal</Button>
          <Button variant="gradient" gradient="purple" loading={loading} onClick={handleLoadingClick}>
            {loading ? 'Loading...' : 'Click to Load'}
          </Button>
          <Button variant="gradient" gradient="purple" disabled>Disabled</Button>
        </div>
      </div>

      {/* Full Width */}
      <div>
        <h3>Full Width</h3>
        <Button variant="gradient" gradient="dark" fullWidth>
          Full Width Button
        </Button>
      </div>
    </div>
  );
};

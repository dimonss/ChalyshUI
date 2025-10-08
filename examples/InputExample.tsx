import React, { useState } from 'react';
import { Input } from '../src';

export const InputExample: React.FC = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (e.target.value.length < 3 && e.target.value.length > 0) {
      setError('Must be at least 3 characters');
    } else {
      setError('');
    }
  };

  return (
    <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <h2>Input Examples</h2>
      
      {/* Variants */}
      <div>
        <h3>Variants</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
          <Input variant="default" placeholder="Default input" />
          <Input variant="filled" placeholder="Filled input" />
          <Input variant="outlined" placeholder="Outlined input" />
          <Input variant="gradient" gradient="purple" placeholder="Gradient input" />
        </div>
      </div>

      {/* Sizes */}
      <div>
        <h3>Sizes</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
          <Input size="sm" placeholder="Small input" />
          <Input size="md" placeholder="Medium input" />
          <Input size="lg" placeholder="Large input" />
        </div>
      </div>

      {/* With Labels */}
      <div>
        <h3>With Labels</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
          <Input 
            variant="gradient" 
            gradient="purple"
            label="Email Address" 
            placeholder="Enter your email" 
            type="email"
          />
          <Input 
            variant="gradient" 
            gradient="violet"
            label="Password" 
            placeholder="Enter your password" 
            type="password"
          />
        </div>
      </div>

      {/* With Icons */}
      <div>
        <h3>With Icons</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
          <Input 
            variant="gradient" 
            gradient="purple"
            label="Search"
            placeholder="Search..."
            leftIcon={
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
              </svg>
            }
          />
          <Input 
            variant="gradient" 
            gradient="violet"
            label="Email"
            placeholder="your@email.com"
            leftIcon={
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            }
          />
        </div>
      </div>

      {/* States */}
      <div>
        <h3>States</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
          <Input 
            variant="gradient" 
            gradient="purple"
            label="Normal Input"
            placeholder="Type something..."
            value={value}
            onChange={handleChange}
            error={error}
            helperText="This is helper text"
          />
          <Input 
            variant="gradient" 
            gradient="purple"
            label="Success Input"
            placeholder="Success state"
            success
            helperText="This input is valid"
          />
          <Input 
            variant="gradient" 
            gradient="purple"
            label="Disabled Input"
            placeholder="Disabled input"
            disabled
            helperText="This input is disabled"
          />
        </div>
      </div>

      {/* Full Width */}
      <div>
        <h3>Full Width</h3>
        <Input 
          variant="gradient" 
          gradient="dark"
          label="Full Width Input"
          placeholder="This input takes full width"
          fullWidth
        />
      </div>
    </div>
  );
};

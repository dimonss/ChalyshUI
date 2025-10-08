import React from 'react';
import { GlobalStyles } from '../src';
import { ButtonExample } from './ButtonExample';
import { InputExample } from './InputExample';

export const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <div style={{ 
        minHeight: '100vh', 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '2rem'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          background: 'white',
          borderRadius: '1rem',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
          overflow: 'hidden'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)',
            color: 'white',
            padding: '2rem',
            textAlign: 'center'
          }}>
            <h1 style={{ margin: 0, fontSize: '2.5rem', fontWeight: 'bold' }}>
              ChalyshUI
            </h1>
            <p style={{ margin: '0.5rem 0 0 0', fontSize: '1.2rem', opacity: 0.9 }}>
              Modern React UI Library with Purple Gradients & Smooth Animations
            </p>
          </div>
          
          <div style={{ padding: '0' }}>
            <ButtonExample />
            <hr style={{ margin: '2rem', border: 'none', borderTop: '1px solid #e5e5e5' }} />
            <InputExample />
          </div>
        </div>
      </div>
    </>
  );
};

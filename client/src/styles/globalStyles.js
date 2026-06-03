// src/styles/globalStyles.js

const colors = {
  primary: '#4CAF50',   // Green for availability
  secondary: '#2196F3', // Blue for buttons
  danger: '#f44336',    // Red for unavailable
  text: '#333333',
  background: '#f9f9f9',
  border: '#cccccc',
};

const globalStyles = {
  container: {
    backgroundColor: colors.background,
    padding: '20px',
    minHeight: '100vh',
  },
  title: {
    fontSize: '22px',
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: '20px',
  },
  label: {
    fontSize: '16px',
    color: colors.text,
    marginTop: '10px',
    marginBottom: '5px',
  },
  input: {
    border: `1px solid ${colors.border}`,
    borderRadius: '6px',
    padding: '10px',
    marginBottom: '15px',
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: colors.secondary,
    padding: '12px',
    borderRadius: '6px',
    color: '#fff',
    fontSize: '16px',
    fontWeight: '600',
    margin: '10px 0',
    cursor: 'pointer',
    textAlign: 'center',
  },
  card: {
    padding: '15px',
    margin: '10px 0',
    border: `1px solid ${colors.border}`,
    borderRadius: '8px',
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: colors.text,
  },
};

export { colors, globalStyles };

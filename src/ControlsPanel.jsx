import React from 'react'
import autoLayout from './autoLayout'

export default function ControlsPanel({ addNode, nodes, setNodes, edges, isValidDag }) {
  return (
    <div style={{
      position: 'absolute',
      top: 10,
      left: 10,
      zIndex: 10,
      background: 'white',
      padding: '8px',
      borderRadius: '4px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
    }}>
      <button onClick={addNode}>Add Node</button>
      <button onClick={() => autoLayout(nodes, edges, setNodes)}>Auto Layout</button>
      <div style={{ marginTop: 8 }}>
        Status: {isValidDag ? '✅ Valid DAG' : '❌ Invalid DAG'}
      </div>
    </div>
  )
}

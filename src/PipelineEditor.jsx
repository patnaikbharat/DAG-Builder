import React, { useState, useCallback, useEffect } from 'react'
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  MiniMap
} from 'reactflow'
import 'reactflow/dist/style.css'
import ControlsPanel from './ControlsPanel'
import { validatePipeline } from './usePipelineValidator'

export default function PipelineEditor() {
  const [nodes, setNodes, onNodesChange] = useNodesState([])
  const [edges, setEdges, onEdgesChange] = useEdgesState([])
  const [isValidDag, setIsValidDag] = useState(false)

  const onConnect = useCallback((params) => {
    if (params.source === params.target) return // prevent self-loop
    setEdges((eds) => addEdge(params, eds))
  }, [setEdges])

  const addNode = () => {
    const label = prompt('Enter node label:')
    if (!label) return
    const id = `${+new Date()}`
    setNodes((nds) => nds.concat({
      id,
      data: { label },
      position: { x: Math.random() * 400, y: Math.random() * 400 }
    }))
  }

  const deleteSelected = useCallback(() => {
    setNodes((nds) => nds.filter((n) => !n.selected))
    setEdges((eds) => eds.filter((e) => !e.selected))
  }, [setNodes, setEdges])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Delete') deleteSelected()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [deleteSelected])

  useEffect(() => {
    setIsValidDag(validatePipeline(nodes, edges))
  }, [nodes, edges])

  return (
    <ReactFlowProvider>
      <div style={{ height: '100%', width: '100%' }}>
        <ControlsPanel addNode={addNode} nodes={nodes} setNodes={setNodes} edges={edges} isValidDag={isValidDag} />
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
        >
          <MiniMap />
          <Controls />
          <Background />
        </ReactFlow>
      </div>
    </ReactFlowProvider>
  )
}

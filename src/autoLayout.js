import dagre from 'dagre'

export default function autoLayout(nodes, edges, setNodes) {
  const g = new dagre.graphlib.Graph()
  g.setDefaultEdgeLabel(() => ({}))
  g.setGraph({ rankdir: 'TB' })

  nodes.forEach(node => g.setNode(node.id, { width: 100, height: 50 }))
  edges.forEach(edge => g.setEdge(edge.source, edge.target))

  dagre.layout(g)

  const updatedNodes = nodes.map(node => {
    const pos = g.node(node.id)
    return {
      ...node,
      position: { x: pos.x - 50, y: pos.y - 25 }
    }
  })

  setNodes(updatedNodes)
}

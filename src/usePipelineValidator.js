export function validatePipeline(nodes, edges) {
    if (nodes.length < 2) return false
  
    // Build adjacency list
    const adj = {}
    nodes.forEach(n => adj[n.id] = [])
    edges.forEach(e => {
      adj[e.source].push(e.target)
    })
  
    // Check all nodes connected
    for (let n of nodes) {
      const hasEdge = edges.some(e => e.source === n.id || e.target === n.id)
      if (!hasEdge) return false
    }
  
    // Cycle detection with DFS
    const visited = {}, recStack = {}
    const hasCycle = (v) => {
      if (!visited[v]) {
        visited[v] = recStack[v] = true
        for (let neighbour of adj[v]) {
          if (!visited[neighbour] && hasCycle(neighbour)) return true
          else if (recStack[neighbour]) return true
        }
      }
      recStack[v] = false
      return false
    }
  
    for (let n of nodes) {
      if (hasCycle(n.id)) return false
    }
  
    return true
  }
  
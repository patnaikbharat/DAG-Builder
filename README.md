# Pipeline Editor (DAG Builder)

A modern, interactive **React Pipeline Editor** for visually building and managing **Directed Acyclic Graphs (DAGs)** — think ETL workflows, data pipelines, or processing flows.  
Designed with simplicity, clarity, and extensibility in mind.


## Live Demo

[**[Vercel Link](https://dag-builder-ten.vercel.app/)**]


##  Features

- **Add, connect & manage nodes** — drag to position, draw directional edges.  
- **Real-time DAG validation** — instantly checks for cycles, unconnected nodes, self-loops.  
- **Delete nodes/edges** — select and press `Delete` key.  
- **Smart Auto Layout** — rearranges nodes top-down using `dagre`.  
- **MiniMap & Controls** — zoom, pan, fit view easily.  
- **Simple, modular React hooks** — clean structure, easy to extend.


##  Setup & Run

1. **Clone**
   ```bash
   git clone https://github.com/YOUR_USERNAME/pipeline-editor.git
   cd pipeline-editor

2. **Install**
   ```bash
   npm install

3. **Start Dev**
   ```bash
   npm run dev

4. **Open**
   ```bash
   http://localhost:5173

# Libraries Used
- React — UI library.

- React Flow — for building node-based editors.

- Dagre — automatic graph layout.


# Key Architectural Decisions
- Used reactflow for intuitive node/edge management.

- Separated DAG validation (usePipelineValidator.js) for clean logic.

- Added dagre layout to keep complex graphs readable.

- Modular structure for future upgrades like drag-drop node palettes or AI auto-link.

# Next-Level Ideas
If you want to push this further:

- Replace prompt() with a drag-drop Node Palette.

- Add a right-click context menu for edit/delete.

- Color-code node types (Source, Processor, Output).

- Live JSON schema export panel.

- “AI Suggest” button to auto-complete partially connected graphs.

# Video Demo

https://github.com/user-attachments/assets/6655b969-3b9c-4eac-ba83-fcd5635126fe

# Deployment
Deployed via Vercel.

Push your **main** branch — auto deploy!

# Credits
Built with using React, React Flow & Dagre.

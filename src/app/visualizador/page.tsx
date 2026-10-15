import ModelViewer3D from '@/components/ModelViewer3D';

export default function VisualizadorPage() {
  return (
    <main className="page model-demo-page">
      <h1>Visualizador 3D</h1>
      <div className="model-demo-stage">
        <ModelViewer3D modelPath="/projetos/sal/Ativo%201.gltf" />
      </div>
    </main>
  );
}
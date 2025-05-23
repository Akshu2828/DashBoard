import data from "../data/info.json";

export default function Projects() {
  return (
    <section
      id="projects"
      className="p-6 bg-white rounded-xl shadow max-w-3xl mx-auto mt-6"
    >
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Projects</h2>
      {data.projects.map((proj, index) => (
        <div key={index} className="mb-6 border-b pb-4">
          <p className="text-lg font-bold text-blue-700">{proj.name}</p>
          <p className="text-gray-700 mt-1">{proj.description}</p>
          <ul className="list-disc pl-6 mt-3 text-sm text-gray-600 space-y-1">
            {proj.points.map((point, pointIndex) => (
              <li key={pointIndex}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

import data from "../data/info.json";

export default function Experience() {
  return (
    <section
      id="experience"
      className="p-6 bg-white rounded-xl shadow max-w-3xl mx-auto mt-6"
    >
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Experience</h2>
      {data.experience.map((exp, index) => (
        <div key={index} className="mb-6 border-b pb-4">
          <p className="text-lg font-bold text-blue-700">{exp.company}</p>
          <p className="text-gray-800">{exp.role}</p>
          <p className="text-sm text-gray-500">{exp.duration}</p>
          <p className="text-sm text-gray-700 mt-1">{exp.description}</p>
          <ul className="list-disc pl-6 mt-2 text-sm text-gray-600 space-y-1">
            {exp.responsibilities.map((resp, respIndex) => (
              <li key={respIndex}>{resp}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

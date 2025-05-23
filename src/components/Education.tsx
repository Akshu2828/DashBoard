import data from "../data/info.json";

export default function Education() {
  return (
    <section
      id="education"
      className="p-6 bg-white rounded-xl shadow max-w-3xl mx-auto mt-6"
    >
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Education</h2>
      {data.education.map((edu, index) => (
        <div key={index} className="mb-4 border-b pb-3">
          <p className="text-lg font-bold text-blue-700">{edu.degree}</p>
          <p className="text-gray-700">{edu.institution}</p>
          <p className="text-sm text-gray-500">{edu.year}</p>
        </div>
      ))}
    </section>
  );
}

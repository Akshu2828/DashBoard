import data from "../data/info.json";

export default function Skills() {
  return (
    <section id="skills" className="p-4">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Skills</h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {data.skills.map((skill, index) => (
          <li
            key={index}
            className="bg-white border border-gray-300 shadow-sm hover:bg-blue-200 hover:shadow-md transition-shadow duration-200 px-4 py-2 rounded-lg text-center text-sm font-medium text-gray-700"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}

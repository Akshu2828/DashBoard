import data from "../data/info.json";

export default function Profile() {
  return (
    <section
      id="profile"
      className="p-6 text-center bg-white shadow rounded-xl max-w-3xl mx-auto mt-6"
    >
      <img
        src={data.photo}
        alt="Profile"
        className="w-32 h-32 mx-auto rounded-full border-4 border-blue-200 shadow-md mb-4"
      />
      <h1 className="text-3xl font-bold text-gray-800">{data.name}</h1>
      <p className="mt-3 text-gray-600 text-base">{data.bio}</p>
      <div className="mt-4 text-sm text-gray-700 font-medium">
        <a
          href={`mailto:${data.contact.email}`}
          className="text-blue-600 hover:underline"
        >
          {data.contact.email}
        </a>
        <span className="mx-2">|</span>
        <a
          href={`tel:${data.contact.phone}`}
          className="text-blue-600 hover:underline"
        >
          {data.contact.phone}
        </a>
      </div>
    </section>
  );
}

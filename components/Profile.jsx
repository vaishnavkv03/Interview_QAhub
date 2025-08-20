import QueCard from "./QueCard";

export default function Profile({ name, desc, data, handleEdit, handleDelete }) {
  return (
    <section className="w-full">
      {/* Profile Header */}
      <header className="mb-6">
        <h1 className="head_text text-left">
          <span className="blue_gradient">{`${name} Profile`}</span>
        </h1>
        <p className="desc text-left">{desc}</p>
      </header>

      {/* Posts Section */}
      <div className="mt-10">
        {data && data.length > 0 ? (
          <div className="prompt_layout">
            {data.map((post) => (
              <QueCard
                key={post._id}
                post={post}
                handleEdit={handleEdit ? () => handleEdit(post) : undefined}
                handleDelete={handleDelete ? () => handleDelete(post) : undefined}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No posts available 📝</p>
        )}
      </div>
    </section>
  );
}

import StartupCard from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const posts = [
    {
      _id: "01",
      createdAt: new Date(),
      views: 55,
      author: {
        _id: 1,
        name: "Alagusurya",
      },
      description: "This is a description",
      image:
        "https://platform.vox.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/22693759/972039208.jpg?quality=90&strip=all&crop=0%2C0%2C100%2C100&w=2400",
      category: "Robots",
      title: "We Robots",
    },
  ];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br />
          Connect With Entrepreneurs
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section-container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType) => (
              <StartupCard key={post?._id} post={posts[0]} />
            ))
          ) : (
            <p className="no-results">No startups found!</p>
          )}
        </ul>
      </section>
    </>
  );
}

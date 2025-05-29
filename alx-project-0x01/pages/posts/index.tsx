import Header from "@/components/layout/Header";

const Posts: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="p-6">
        <h2 className="text-3xl font-semibold">Posts Page</h2>
        <p className="mt-2">This is where your posts will be displayed.</p>
      </main>
    </div>
  );
};

export default Posts;

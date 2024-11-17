import React from 'react';
import Header from './components/Header';
import Post from './components/Post';
import { MOCK_POSTS } from './data/mockData';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20 px-4 max-w-6xl mx-auto">
        <div className="space-y-6">
          {MOCK_POSTS.map((post) => (
            <Post key={post.id} {...post} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
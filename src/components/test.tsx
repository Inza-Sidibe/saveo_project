// import React, { useState, useEffect } from 'react';

// function App() {
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:1337/articles')
//       .then(response => response.json())
//       .then(data => setArticles(data));
//   }, []);

//   return (
//     <div className="App">
//       <h1>Articles</h1>
//       {articles.map(article => (
//         <div key={article.id}>
//           <h2>{article.title}</h2>
//           <p>{article.content}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;
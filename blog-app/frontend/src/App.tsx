import Homepage from './routes/homepage/homepage.component';
import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import ArticlePage from './routes/article-page/article-page.component';
import WritePage from './routes/write-page/write-page.component';
import CategoryPage from './routes/category-page/category-page.component';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Homepage />} />
        <Route path=':categoryId'>
          <Route index element={<CategoryPage />} />
          <Route path=':articleId' element={<ArticlePage />} />
        </Route>
        <Route path='/write' element={<WritePage />} />
      </Route>
    </Routes>
  );
}

export default App;

import Homepage from './routes/homepage/homepage.component';
import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import ArticlePage from './routes/article-page/article-page.component';
import WritePage from './routes/write-page/write-page.component';
import CategoryPage from './routes/category-page/category-page.component';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setPosts } from './stores/posts/postAction';
import { setCats } from './stores/categories/categories.action';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    axios.get(`http://localhost:5000/api/posts/`).then(({ data }) => {
      dispatch(setPosts(data))
    })
  },[dispatch])

  useEffect(() => {
    axios.get(`http://localhost:5000/api/categories/`).then(({ data }) => {
      dispatch(setCats(data))
    })
  },[dispatch])

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

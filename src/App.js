import Navigation from './Components/Navigation';
import Post from './Components/Post';
import './App.css';

function App() {

  const menuArray = [
    {id: 0, title: 'Home'},
    {id: 1, title: 'About'},
    {id: 2, title: 'Contact'},
    {id: 3, title: 'Prices'},
  ]

  const posts = [
    {title: 'Something happend', details: 'Blablablablalblblaaslv'},
    {title: 'Something happend 1', details: 'Blablablablalblblaaslv'},
    {title: 'Something happend 2', details: 'Blablablablalblblaaslv'},
    {title: 'Something happend 3', details: 'Blablablablalblblaaslv'},
    {title: 'Something happend 4', details: 'Blablablablalblblaaslv'},
  ]



  return (
    <div>
      <ul>
        {menuArray.map((item) => <Navigation key={item.id} title={item.title}/>)}
      </ul>
      {posts.map((post, index) => <Post key={index} title={post.title} details={post.details}/>)}
      
    </div>
  );
}

export default App;

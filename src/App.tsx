import { Header } from './components/Header/Header'
import {Post, PostType} from './components/Post/Post'
import { Sidebar } from './components/Sidebar/Sidebar'
import './styles/Global.css'
import styles from './App.module.css'

const posts : PostType[] =[
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/BrenoJLeal.png',
       name: 'Breno J. Leal',
       role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa!'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. Esse é um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é Web Master!'},
      {type: 'link', content: 'breno.developer/WebDeveloper'},
    ],
    publishedAt: new Date('2024-07-15 16:07:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
       name: 'Mayk Brito',
       role: 'Educator @Rocketseat'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa!'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. Esse é um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é Web Master!'},
      {type: 'link', content: 'breno.developer/WebDeveloper'},
    ],
    publishedAt: new Date('2024-07-15 16:07:00'),
  },
]

export function App() {

  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                post={post} 
              />
            )
          })}
        </main>
      </div>
    </>
  )
}



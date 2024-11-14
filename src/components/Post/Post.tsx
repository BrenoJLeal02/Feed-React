import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import styles from './Post.module.css'
import avatarP from '../../assets/perfil.jpeg'
import { Comment } from '../Comment/Comment'
import { Avatar } from '../Avatar/Avatar'
import { format, formatDistanceToNow, Locale } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface Author{
  name: string;
  role: string;
  avatarUrl: string;
}
interface Content{
  content: string,
  type: 'paragraph' | 'link'
}
export interface PostType{
    id: number
    author: Author
    publishedAt: Date
    content: Content[]
}
interface PostProps{
  post: PostType
}

export const Post = ({ post }: PostProps) => {
  //states
  const [comments, setComments] = useState([  
    'Post muito bacana, hein?!'
    ])
    const [newCommentText, setNewCommentText] = useState('')

  //funções
  function handleCreateNewComment(event: FormEvent){
    event.preventDefault()
    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("")
    setNewCommentText(event.target.value)
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Campo obrigatório")
  }
  function deleteComment(comment: string) {
    const commentsWithoutDeletedOne = comments.filter(item => item !== comment)
    setComments(commentsWithoutDeletedOne)
  }

  const publishedDateFormatted = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'",{
    locale: ptBR as Locale,
  })
  const publishedDateISO = post.publishedAt.toISOString()
  const publishDateRelativeToNow = formatDistanceToNow(post.publishedAt,{
    locale: ptBR as Locale,
    addSuffix: true,
  })
  const isNewCommentEmpty = newCommentText.length === 0

  return (
    <>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <Avatar src={post.author.avatarUrl || avatarP} />
            <div className={styles.authorInfo}>
              <strong>{post.author.name}</strong>
              <span>{post.author.role}</span>
            </div>
          </div>
          <time title={publishedDateFormatted} dateTime={publishedDateISO}>
            {publishDateRelativeToNow}
          </time>
        </header>

        <div className={styles.content}>
          {post.content.map(line => {
              if(line.type === 'paragraph'){
                return <p key={line.content} >{line.content}</p>
              }else if(line.type === 'link'){
                return <p key={line.content} ><a href='#'>{line.content}</a></p>
              }
          })}
        </div>

        <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
          <strong>Deixe seu feedback</strong>

          <textarea 
            value={newCommentText}
            onChange={handleNewCommentChange} 
            name='comment'
            placeholder='Deixe um comentário' 
            onInvalid={handleNewCommentInvalid}
            required
           />

          <footer>
            <button 
            disabled={isNewCommentEmpty}
            type='submit'>
              Publicar
            </button>
          </footer>
        </form>
        <div className={styles.commentList}>
          {comments.map((comment) => {
            return (
            <Comment 
              onDeleteComment={deleteComment}  
              key={comment} 
              content={comment}
            />
            )
          })}
        </div>
      </article>
    </>
  )
}
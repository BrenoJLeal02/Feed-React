import { useState } from 'react'
import styles from './Comment.module.css'
import { ThumbsUp, Trash } from '@phosphor-icons/react'
import avatarP from '../../assets/perfil.jpeg'
import { Avatar } from '../Avatar/Avatar'

interface CommentProps{
    content: string;
    onDeleteComment: (comment: string) => void
}
export const Comment = ({content, onDeleteComment} : CommentProps) => {
    const [likeCount, setLikeCount] = useState(0)
    function handleDeleteComment() {
        onDeleteComment(content)
    }
    function handleCommentLiked() {
        setLikeCount((state) => {
            return state + 1
        })
    }
  return (
    <div className={styles.comment}>
        <Avatar 
        hasBorder={false} 
        src={avatarP} />
        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Breno J. Leal</strong>
                        <time title='15 de Julho às 09:42:30' dateTime='2024-07-15 09:42:30'>Cerca de 1h atrás</time>
                    </div>
                    <button onClick={handleDeleteComment} title='Deletar comentário'>
                        <Trash size={24}/>
                    </button>
                </header>
                <p>{content}</p>
            </div>
            <footer>
                <button onClick={handleCommentLiked}>
                    <ThumbsUp/>
                    Aplaudir <span>{likeCount}</span>
                </button>
            </footer>
        </div>
    </div>
  )
}

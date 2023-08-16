import { PostCard } from './post-card'

export function PostsList ({ posts }) {
  return (
        <>
            {
                posts?.map(post => {
                  const { id, content, users } = post
                  const { name, user_name: userName, avatar_url: avatarUrl } = users

                  return (
                        <PostCard key={id} content={content} userFullname={name} userName={userName} avatarUrl={avatarUrl} />
                  )
                })
            }
        </>
  )
}

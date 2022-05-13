import { GetStaticPaths, GetStaticProps } from 'next'

function Post({ params }: any) {
  return <div>{params}</div>
}

export const getStaticPaths: GetStaticPaths = async () => {
  // ...

  return {
    paths: [
      {
        params: {
          slug: 'hello-nextjs',
        },
      },
    ],
    fallback: false,
  }
}

// This also gets called at build time
export const getStaticProps: GetStaticProps = async ctx => {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  // const res = await fetch(`https://.../posts/${params.id}`)
  // const post = await res.json()
  console.log(ctx)
  return {
    props: {
      param: ctx.params,
    },
  }
  // Pass post data to the page via props
  // return { props: { post } }
}

export default Post

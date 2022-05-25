import React from 'react'
import { connect, styled, Head, Global, css } from 'frontity'
import dayjs from 'dayjs'
import { SRLWrapper } from 'simple-react-lightbox'
import FeaturedMedia from "./featured-media";

const Post = ({ state, libraries }) => {
    const data = state.source.get(state.router.link)
    const post = state.source[data.type][data.id]
    const author = state.source.author[post.author]
    const Html2React = libraries.html2react.Component
    const formattedDate = dayjs(post.date).format("DD MMMM YYYY")

    return (
        <div>
            <Head>
                <title>{post.title.rendered}</title>
                <meta name="description" content={post.excerpt.rendered} />
            </Head>
            <FeaturedMedia id={post.featured_media} />
            <Global
                styles={css`
                    ul {
                        list-style-type: square;
                    }
                    li {
                        
                    }
                `}
            />
            <h2>
                <Html2React html={post.title.rendered} />
            </h2>
            <PostInfo>
                <p>
                    <strong>Published: </strong>
                    {formattedDate}
                </p>
                <p>
                    <strong>By: </strong>
                    {author.name}
                </p>
            </PostInfo>
            <Html2React html={post.content.rendered} />



        </div>
    )
}

export default connect(Post)

const PostInfo = styled.div`
    background-image: linear-gradient(to right, #f4f4f4, #fff);
    margin-bottom: 1em;
    padding: 0.5em;
    border-left: 4px solid lightseagreen;
    font-size: 0.8em;

    & > p {
        margin: 0;
    }
`

import React, { useState, useCallback, useEffect  } from 'react';
import { Card, Icon, Button, Avatar, Input, Form,List,Comment} from 'antd';
import Link  from 'next/link';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_COMMENT_REQUEST, LOAD_COMMENTS_REQUEST } from '../reducers/post';
import { text } from 'express';


const PostCard = ({ post }) => {
    const [commentFormOpened, setCommentFormOpened] = useState(false);
    const [commentText,setCommentText] = useState('');
    const { me } = useSelector( state => state.user);
    const { commentAdded, isAddingComment } = useSelector(state => state.post);
    const dispatch = useDispatch();

    const onToggleComment = useCallback(() => {
        setCommentFormOpened(prev => !prev);
        if(!commentFormOpened) { //댓글창 닫혀있는거 눌렀을때 여는것 
            dispatch({
                type: LOAD_COMMENS_REQUEST,
                data: post.id,
            })
        }
    }, []);

    const onSubmitComment = useCallback((e) => {
        e.preventDefault();
        if (!me) {
          return alert('로그인이 필요합니다.');
        }
        return dispatch({
          type: ADD_COMMENT_REQUEST,
          data: {
            postId: post.id,
            cotent : commentText,
          },
        });
      }, [me && me.id, commentText ]);
    
      useEffect(() => {
        setCommentText('');
      }, [commentAdded === true]);
    
      const onChangeCommentText = useCallback((e) => {
        setCommentText(e.target.value);
      }, []);

    return (
        <div>
        <Card
            key={+post.createdAt}
            cover={post.img && <img alt="example" src={post.img}/>}
            actions={[
                <Icon type="retweet" key="retweet"/>,
                <Icon type="heart" key="heart"/>,
                <Icon type="message" key="message" onClick={onToggleComment} />,
                <Icon type="ellipsis" key="ellipsis"/>,
            ]}
            extra ={<Button>팔로우</Button>}
        >
            <Card.Meta
                avatar= {<Link href ={`/user/${post.User.id}`}><a><Avatar>{post.User.nickname[0]}</Avatar></a></Link>}
                title= {post.User.nickname}
                description={post.content}
            />
        </Card>
        {commentFormOpened && (
            <>
            <Form onSubmit={onSubmitComment}>
                <Form.Item>
                    <Input.TextArea rows={4} value={commentText} onChange={ onChangeCommentText}/>
                </Form.Item>
                <Button type="primary" htmlType="submit" loading={isAddingComment}>댓글</Button>
            </Form>
            <List header={`${post.Comments ? post.Comments.length : 0} 댓글`}
                  itemLayout="horizontal"
                  dataSource={post.Comments || []}
                  renderItem = {item => (
                      <li>
                          <Comment
                                author={item.User.nickname}
                                avatar={<Link href ={`/user/${item.User.id}`}><a><Avatar>{item.User.nickname[0]}</Avatar></a></Link>}
                                content = {item.content}
                                
                          />
                      </li>
                  )}
            />
            </>
        )}
        </div>
    )
}

PostCard.propTypes = {
    post: PropTypes.shape({
        User: PropTypes.object,
        content: PropTypes.string,
        img: PropTypes.string,
        createdAt: PropTypes.object,
    })
}

export default PostCard;
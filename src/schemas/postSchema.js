const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const postSchema = new Schema({
    date: { // 게시글 날짜
        type: String,
    },
    writer: { // 작성자
        type: Schema.Types.ObjectId,    
    },
    feeling: { // 기분 상태
        type: String,
    },
    content: { // 게시글 내용 (최대 1500자)
        type: String,
        max: 1500,
    }
    // ,
    // media: { // 단일 사진 (게시글 내 포함)
    //     type: String,
    //     default: null,
    // },
}, {});

module.exports = model('posts', postSchema);
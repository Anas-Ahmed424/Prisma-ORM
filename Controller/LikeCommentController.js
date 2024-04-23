import prisma from "../DB/db.config.js";

export const fetchLikeComments = async (req, res) => {
    const likecomment = await prisma.likeComment.findMany({

    })


    return res.json({status: 200, data: likecomment})

}


export const createLikeComment = async (req,res) => {
    console.log(req)
    console.log(req.body)
    const {user_id, comment_id } = req.body;

// * Increase the comment counter
await prisma.comment.update({
    where:{
        id:comment_id

    },
    data:{
        likecomment_count:{
            increment:1
        }

    }
})


    const newlikecomment = await prisma.likeComment.create({
        data:{
            user_id : Number(user_id),
            comment_id : Number(comment_id),
        }

    })
        return res.json({status:200, data:newlikecomment, msg:"like-comment created"})

}


// * Show User
export const showLikeComment = async (req,res) => {
    const {comment_id} = req.body
    const likecomment = await prisma.likeComment.findFirst({
        where:{
            comment_id:comment_id
        }
    })

    return res.json({status:200, data:likecomment});
}

// * Update the user
export const updateLikeComment = async (req,res) => {

    const {commentId} = req.params.id
    const {user_id, comment_id} = req.body;

    await prisma.likeComment.update({
        where:{
            id:Number(commentId)
        },
        data:{
            user_id, comment_id
        }
    })

    return res.json({status:200, message:"like-comment updated successfully" })

}

export const deleteLikeComment = async (req, res) => {


    const {comment_id, user_id} = req.body;

    console.log("comment id is", comment_id)
    console.log("user id is", user_id)

    // * Decrease the comment counter
    await prisma.comment.update({
    where:{
        id: comment_id

    },
    data:{
        likecomment_count:{
            decrement:1
        }

    }
})
     await prisma.likeComment.deleteMany({
        where:{
            comment_id:comment_id,
            user_id:Number(user_id)

        }
    })

    return res.json({status:200, msg:"like comment deleted successfully"});

}


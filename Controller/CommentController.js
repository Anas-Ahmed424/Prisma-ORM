import prisma from "../DB/db.config.js";

export const fetchComments = async (req, res) => {
    const comment = await prisma.comment.findMany({

        include: {
            user:true,
            post: {
                include:{
                    user:  true,
                },
            },
        },
    });

    return res.json({status: 200, data: comment});


}


export const createComment = async (req,res) => {
    const {user_id, post_id, comment} = req.body;

// * Increase the comment counter
await prisma.post.update({
    where:{
        id: Number(post_id)

    },
    data:{
        comment_count:{
            increment:1
        }

    }
})


    const newcomment = await prisma.comment.create({
        data:{
            user_id : Number(user_id),
            post_id : Number(post_id),
            comment,
        }

    })
        return res.json({status:200, data:newcomment, msg:"comment created"})

}


// * Show User
export const showComment = async (req,res) => {
    const commentId = req.body
    const comment = await prisma.comment.findFirst({
        where:{
            id:Number(commentId)
        }
    })

    return res.json({status:200, data:comment});
}

// * Update the user
export const updateComment = async (req,res) => {

    const commentId = req.params.id
    const {user_id, post_id, comment} = req.body;

    await prisma.comment.update({
        where:{
            id:Number(commentId)
        },
        data:{
            user_id, post_id, comment
        }
    })

    return res.json({status:200, message:"comment updated successfully" })

}

export const deleteComment = async (req, res) => {
    const commentId = req.params.id;

    // * Decrease the comment counter
    await prisma.post.update({
    where:{
        id: Number(post_id)

    },
    data:{
        comment_count:{
            decrement:1
        }

    }
})
     await prisma.comment.delete({
        where:{
            id:Number(commentId),
        }
    })

    return res.json({status:200, msg:"comment deleted successfully"});

}

